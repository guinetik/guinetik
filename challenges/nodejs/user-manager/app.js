const express = require("express");
const app = express();
const Role = require("./roles");
const userService = require("./user.service");
const authorize = require("./authorize");
const basicAuth = require("./auth");
const router = express.Router();
const bodyParser = require("body-parser");

//router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// use basic HTTP auth to secure the api
app.use(basicAuth);

const resJson = (req, res, next) => {
  res.set('Content-Type', 'application/json');
  res.set('content-type', 'application/json');
  next();
};

app.use(resJson);

router.get(
  "/user",
  authorize([Role.admin, Role.manager], {
    message: "Forbidden operation",
    status: 403,
  }),
  resJson,
  getAll
);
router.post(
  "/user",
  basicAuth,
  authorize([Role.admin, Role.manager], {
    message: "Forbidden operation",
    status: 403,
  }),
  createUser
);
router.delete(
  "/user",
  basicAuth,
  authorize([Role.admin, Role.manager], {
    message: "Forbidden operation",
    status: 403,
  }),
  deleteUser
);

router.delete(
  "/users",
  basicAuth,
  authorize([Role.admin], {
    message: "Unauthorized",
    status: 401,
  }),
  deleteUsers
);

function getAll(req, res, next) {
  res.set("Content-Type", "application/json");
  return res.json(userService.getUserInfo(res.user.username)).send()
}

function createUser(req, res, next) {
  res.set("Content-Type", "application/json");
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;
  if (!username || !password || !role) {
    return res.status(400).json({
      message: "Missing mandatory fields",
    });
  }
  if (role === "admin") {
    return res.status(403).json({
      message: "Forbidden",
    });
  }
  if (role === "manager") {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Forbidden operation",
      });
    }
  }
  if (userService.getUser(username, req.user.username)) {
    return res.status(409).json({
      message: "User Already Exists",
    });
  }
  const newId = 123;
  const newUser = {
    id: newId,
    username: username,
    password: password,
    role: role,
    owner: req.user.username,
    users: [],
  };
  userService
    .createUser(newUser, req.user)
    .then((user) =>
      user
        ? res.status(201).json(user).send()
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
}

function deleteUser(req, res, next) {
  res.set("Content-Type", "application/json");
  const username = req.body.username;
  if (username) {
    if (username !== "admin") {
      userService.deleteUser(username, req.user.username).then((data) => {
        if (403 === data) {
          res.status(403).json({
            message: "Forbidden",
          });
        } else if (data) {
          res.status(204).json({
            message: "User deleted",
          });
        } else {
          res.status(204).json({
            message: "no",
          });
        }
      });
    } else {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
  } else {
    return res.status(400).json({
      message: "Provide username",
    });
  }
}

function deleteUsers(req, res, next) {
  res.set("Content-Type", "application/json");
  userService.deleteUsers(username).then((data) => {
    if (403 === data) {
      res.status(403).json({
        message: "Forbidden",
      });
    } else if (data) {
      res.status(204).json({
        message: "User deleted",
      });
    } else {
      res.status(204).json({
        message: "no",
      });
    }
  });
}
app.use("/", router);
module.exports = app;
