import express from "express";
import { CarouselModel } from "../models/Carousel.js"

const router = express.Router();

router.get("/", async (req, res) => {
    let count = req.query.slides;

    if (count > 10) {
        count = 10;
    } else if (count < 1) {
        count = 1;
    } else {
        count = count
    }

    const carousel = await CarouselModel.find().limit(count);

    return res.json(carousel);
});

export {router as carouselRouter};
