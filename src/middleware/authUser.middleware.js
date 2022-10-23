const jwyStrategy = require("passport-jwt").Strategy;
const jwtExtrect = require("passport-jwt").ExtractJwt;
const userServices = require("../users/user.services");
const { secretOrKey } = require("../config/env.config");

module.exports = (passport) => {
  const options = {
    jwtFromRequest: jwtExtrect.fromAuthHeaderWithScheme("jwt"),
    secretOrKey,
  };

  passport.use(
    new jwyStrategy(options, async (decoded, done) => {
      try {
        const authUser = await userServices.getOne(decoded.id);
        return !authUser ? done(null, false) : done(null, decoded);
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
