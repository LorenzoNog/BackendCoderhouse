import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { usersModel } from "../dao/models/usersModel.js";

passport.use(
  "github",
  new GithubStrategy(
    {
      clientID: "Iv1.3e62bc0d3eeef1fd",
      clientSecret: "73d42795564f2cef47123d223647f012cde8f31d",
      callbackURL: "http://localhost:8080/users/github",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await usersModel.findOne({ email: profile._json.email });
      if (!user) {
        const newUser = {
          firstName: profile._json.name.split(' ')[0],
          lastname: profile._json.name.split(' ')[1],
          email: profile._json.email,
          password: " ",
        }
        const userDB = await usersModel.create(newUser);
        done(null, userDB);
      } else {
        done(null, user);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  const user = usersModel.findById(id);
  done(null, user);
});
