const { genericSqlQuery, uuidv4 } = require('../dataAccess/pg')

const readPosts = async () => await genericSqlQuery('SELECT * FROM posts;')

const readPost = async (id) => {
  const query = 'SELECT * FROM posts WHERE id = $1;'
  return await genericSqlQuery(query, [id])
}
const createPost = async ({ titulo, img, descripcion }) => {
  const query = 'INSERT INTO posts(id, titulo, img, descripcion) values ($1, $2, $3, $4);'
  const values = [uuidv4(), titulo, img, descripcion]
  return await genericSqlQuery(query, values)
}

const updatePost = async (id) => {
  const query = 'UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *;'
  return await genericSqlQuery(query, [id])
}

const deletePost = async (id) => {
  const query = 'DELETE FROM posts WHERE id = $1 RETURNING *;'
  const values = [id]
  return await genericSqlQuery(query, values)
}

module.exports = {
  readPosts,
  readPost,
  createPost,
  updatePost,
  deletePost
}
