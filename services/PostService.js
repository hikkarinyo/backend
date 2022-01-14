import Post from "../models/post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        return Post.find();
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан id')
        }
        return Post.findById(id);
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан id')
        }
        return Post.findByIdAndUpdate(post._id, post, {new: true});
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан id')
        }
        return Post.findByIdAndDelete(id);
    }
}

export default new PostService();