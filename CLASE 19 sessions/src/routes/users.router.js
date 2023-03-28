import { Router } from "express";
import passport from "passport";
import UsersManager from "../persistencia/DAO/UsersManager.js";

const usersRouter = Router();
const userManager = new UsersManager();

/* usersRouter.post('/session',(req,res)=>{
    const {username, password} = req.body
    req.session.username = username
    req.session.password = password
    res.json({message:'Session iniciada con exito capo'})
})

usersRouter.get('/logout',(req,res)=>{
    req.session.destroy(error=>{
        if(error){
            console.log('error')
        }else{
            res.json({message:'Session borrada con exito'})
        }
    })
}) */

usersRouter.post(
  "/registro",
  passport.authenticate("registro", {
    failureRedirect: "/views/errorRegister",
    successRedirect: "/views/perfil",
    passReqToCallback: true
  }),
  async (req, res) => {
    const newUser = await userManager.createUser(req.body);
    if (newUser) {
      res.redirect("/views");
    } else {
      res.redirect("/views/errorRegister");
    }
  }
);
usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const login = await userManager.loginUser(req.body);
  if (login) {
    req.session.email = email;
    req.session.password = password;
    res.redirect("/views/perfil");
  } else {
    res.redirect("/views/errorLogin");
  }
});
usersRouter.get("/logout", async (req, res) => {
  req.session.destroy((error) => {
    if (error) console.log(error);
    else res.redirect("/views");
  });
});

export default usersRouter;
