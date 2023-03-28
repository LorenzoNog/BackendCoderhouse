import { Router } from "express";
import UsersManager from "../dao/mongoManagers/usersManager.js";
import passport from "passport";

const userRouter = Router();
const usersManager = new UsersManager();

userRouter.post("/registro", async (req, res) => {
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.redirect("/");
  } else {
    res.redirect("/errorRegistro");
  }
});

const admin = {
  email: "adminCoder@coder.com",
  password: "adminCod3r123"
}

userRouter.post("/login", async (req, res) => {
  const userData = req.body;
  if (
    userData.email === admin.email &&
    userData.password === admin.password
  ) {
    req.session.user = userData;
    req.session.user.firstName = "Administrador";
    req.session.user.email = userData.email;
    req.session.role = "Admin";
    res.redirect("/products");
  } else {
    const user = await usersManager.loginUser(userData);
    if (user) {
      req.session.user = user;
      req.session.user.firstName = user.firstName;
      req.session.user.email = user.email;
      req.session.role = "Usuario";
      res.redirect("/products");
    } else {
      res.redirect("/errorLogin");
    }
  }
});

userRouter.get(
  "/registrogithub",
  passport.authenticate("github", { scope: ["user:email"] }));

userRouter.get(
  "/github",
  passport.authenticate("github"), (req,res)=>{
    res.send('<h1>Estas dentro de la app capo</h1>')
  }
);

userRouter.get("/logout", async (req, res) => {
  req.session.destroy((error) => {
    if (error) console.log(error);
    else res.redirect("/");
  });
});

export default userRouter;
