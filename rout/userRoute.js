import express from 'express';
import { login, signUp } from '../control/userControl.js';
const route=express();

route.post("/signup",signUp);
route.post("/login",login);
export default route;