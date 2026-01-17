let url ="https://dog.ceo/api/breeds/image/random";
 let photo=document.querySelector(".photo");
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
     let pic= await check()
     photo.setAttribute("src",pic)
   
})

async function check(){
    try{
        let res = await axios(url)
        return res.data.message;
    }catch(err){
        console.log=("eror",err);
      
    }
    
}