const { createPost, readPosts, readPost, updatePost, deletePost } = require('../services/post.services')

const create = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body
    const result = await createPost({ titulo, img: url, descripcion })
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const get = async (_, res) => {
  try {
    const posts = await readPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const postId = req.params.id
    const result = await readPost(postId)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const postId = req.params.id
    const result = await updatePost(postId)
    res.status(result?.code ? 500 : 200).json(result)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

const _delete = async (req, res) => {
  try {
    const postId = req.params.id
    const result = await deletePost(postId)
    res.status(result?.code ? 500 : 200).json(result)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = {
  create,
  get,
  getById,
  update,
  _delete
}
