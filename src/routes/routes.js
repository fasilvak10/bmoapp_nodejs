import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {title: 'bmo website'});
});

router.get("/about", (req, res) => {
  res.render("about", {title: 'about bmo'});
});

router.get("/contact", (req, res) => {
  res.render("contact", {title: 'contact bmo'});
});

export default router;
