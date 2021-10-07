import PostMessage from "../models/postMessage.js";

export const getPosts =  async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ nessage: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) 
    return res.status(404).semd('No post with that id');

    PostMessage.findByIdAndUpdate(_id, post, { new: true});

    res.json(updatedPost);
}