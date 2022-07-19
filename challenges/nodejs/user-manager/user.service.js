const Role = require("./roles");
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
    role: Role.admin,
    owner: "master",
    users: [],
  },
];

async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

function getUserInfo(username) {
  return getUser(username);
}

async function createUser(user, me) {
  try {
    user.id = users.length + 1;
    users.push(user);
    return user;
  } catch (err) {
    console.log("eerr", err);
    return null;
  }
}

function getUser(username) {
  const existing = users.filter(
    (user) => user.username == username
  );
  if (existing.length > 0) {
    return existing[0];
  }
  return false;
}

async function deleteUser(username) {
  const user = getUser(username);
  if (!user) {
    return 403;
  }
  const idx = users.indexOf(user);
  users.splice(idx, 1);  
  return true;
}

async function deleteUsers(owner) {
  return true;
}
module.exports = {
  authenticate,
  getAll,
  createUser,
  getUser,
  deleteUser,
  deleteUsers,
};
