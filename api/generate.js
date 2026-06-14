export default async function handler(
req,
res
){

if(req.method !== "POST"){
return res.status(405).json({
error:"Method not allowed"
});
}

try{

const {
prompt
} = req.body;

const response =
await fetch(
"https://api.genityboost.site/v1/generate",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"X-API-Key":
process.env.API_KEY
},
body:JSON.stringify({
model:"kling-video",
prompt
})
}
);

const data =
await response.json();

res.status(200).json(data);

}catch(err){

res.status(500).json({
error:err.message
});

}
}