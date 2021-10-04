const express=require('express');
const next=require('next');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app=next({dev});
const handle = app.getRequestHandler();
const port = process.env.PORT || 3333;

(async ()=>{

  try {
    await app.prepare();
    const server=express();
    server.all("*",(req,res)=>{
      return handle(req,res);
    });
    server.listen(port,()=>{
      console.log(`Server PORT ${port}`);
    })

  }catch (e) {
    console.log(e)
  }

})();
