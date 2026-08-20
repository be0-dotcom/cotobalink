// posts api - simple
import { Router } from 'express'
const router = Router()
let posts:any[]=[
  {id:'1', title:'TARAの実験、終わらない...', body:'筑波大TARAセンターで夜遅くまで実験。', category:'moyamoya', tags:['筑波大学'], likes:12, comments:[], createdAt:new Date().toISOString()},
  {id:'2', title:'洞峰公園でひらめいた！', body:'朝ランで卒研テーマ思いついた', category:'hirameki', tags:['つくば'], likes:24, comments:[], createdAt:new Date().toISOString()}
]
router.get('/', (req,res)=>{res.json(posts)})
router.post('/', (req,res)=>{const p={id:Date.now().toString(), ...req.body, likes:0, comments:[], createdAt:new Date().toISOString()};posts.unshift(p);res.status(201).json(p)})
router.post('/:id/like', (req,res)=>{const post=posts.find(p=>p.id===req.params.id);if(post)post.likes++;res.json(post)})
export default router
