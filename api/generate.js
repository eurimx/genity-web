export default async function handler(req,res){

const r = await fetch(
"https://api.genityboost.site/v1/generate",
{
method:"POST",
headers:{
"X-API-Key":process.env.API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"kling-video",
prompt:req.body.prompt,
duration:10,
resolution:"1080p",
aspect_ratio:"9:16"
})
})

const data = await r.json()

res.status(200).json(data)
}