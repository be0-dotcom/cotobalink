import express from 'express'
import cors from 'cors'
import path from 'path'
import postsRouter from './routes/posts'

const app = express()
const PORT = process.env.PORT || 10000

app.use(cors())
app.use(express.json())

app.use('/api/posts', postsRouter)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', name: 'CotobaLink', framework: 'Express.js' })
})

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'not found' })
  res.sendFile(path.join(publicDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`CotobaLink running on ${PORT}`)
})

export default app
