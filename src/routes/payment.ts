import express from "express";
import {
  applyDiscount,
  newCoupon,
  getAllCoupons,
  deleteCoupon,
  createPaymentIntent,
} from "../controllers/payment.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/create", createPaymentIntent);

app.get("/discount", applyDiscount);

app.post("/coupon/new", adminOnly, newCoupon);

app.get("/coupon/all", adminOnly, getAllCoupons);

app.delete("/coupon/:id", adminOnly, deleteCoupon);

export default app;
