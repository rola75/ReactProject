import { Router } from "express";
import { getBeers, addBeers } from "../BeersController/BeersController.js";

const router = Router();

router.get("/", getBeers);
router.post("/", addBeers);

export default router;