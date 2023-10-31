const express = require('express')
const cors = require('cors')
const postsRoutes = require('./routes/post.router')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(postsRoutes)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Página no encontrada' }))

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
