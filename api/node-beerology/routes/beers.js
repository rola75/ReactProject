import { Router } from "express";
import { getBeersArr } from "../BeersController/BeersController.js";

const router = Router();

router.get("/", getBeersArr)

export default router;