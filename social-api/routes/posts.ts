import express from "express";
export const router = express.Router();

import { prisma } from "../libs/prisma";

router.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany({
        take: 20,
        orderBy: { id: "desc" },
    });

    res.json(posts);
});

router.get("/posts/:id", async (req, res) => {
    const id = req.params.id;

    const post = await prisma.post.findFirst({
        where: { id: Number(id) }
    });

    res.json(post);
});
