const userService = require("./user.service");
//
const authentication = async (req, res, next) => {
  // check for basic auth header
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf("Basic ") === -1
  ) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // verify auth credentials
  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
  const user = await userService.authenticate({ username, password });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Unauthorized" });
  }
  // attach user to request object
  req.user = user;
  next();
};
//
module.exports = authentication;