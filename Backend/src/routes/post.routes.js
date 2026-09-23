const express = require("express")

const postRouter = express.Router()
const postController = require("../controllers/post.controller");
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

/**
 * @route post /api/posts/
 * @description creating post in DB
 */
postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)


/**
 * @route GET /api/posts/details/:id
 * @description Return a detail about specific post with the id.
 */
postRouter.get("/",identifyUser,postController.getPostController)

/**
 * @route GET /api/posts/details/:id
 * @description Return a detail about specific post with the id.
 */
postRouter.get("/details/:postId",identifyUser, postController.getPostDetailController);

/**
 * @route Post api/posts/like/
 * @description like a post with the id provided in the request params
 */

postRouter.post("/like/:postId",identifyUser,postController.likePostController
);

module.exports = postRouter