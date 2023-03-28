import passport from "passport";
import { usersModel } from "../persistencia/models/users.model.js";
import { Strategy as LocalStrategy} from "passport-local";
import { hashPassword } from "../../utils.js"; 
passport.use('registro', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req,email,password,done)=>{
    const user = await usersModel.findOne({email})
    if(user) {
        return done(null,false)
    }else{ 
        const hashNewPassword = await hashPassword(password)
        const newUser = {...req.body, password: hashNewPassword}
        const newUserDB = await usersModel.create(newUser)
        done(null, newUserDB)
    }
}))

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  const user = usersModel.findById(id);
  done(null,user)
});
