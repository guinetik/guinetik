function authorize(roles = [], { message, status }) {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    // authorize based on user role
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        // user's role is not authorized
        return res.status(status).json({ message: message });
      }

      // authentication and authorization successful
      next();
    },
  ];
}

module.exports = authorize;
