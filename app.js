// const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userModel = require('./models/user');
const mbtiModel = require('./models/MBTItest');
const oceanModel = require('./models/OCEANtest');

// app.set('view engine','ejs')
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get('/',(req,res) => {
    res.send('hey');
});

app.get('/create', async (req,res)=>{
      let user = await userModel.create(
        {
            username: "umesh",
            email: "ump@gmail.com"
        }
      );
      res.send('user registered successfully !!!!!')
})

app.get('/create/mbti', async (req,res)=>{
  let mbti = await mbtiModel.create({
    M:" 32%",
    B: "56%",
    user: "663d9752bc61591c97cac8fe" //this will be taken directly when user is logged in
  })

let user = await userModel.findOneAndUpdate(
    { _id: "663d9752bc61591c97cac8fe" },
    { $set: { mbti: mbti._id } },
    { new: true }
);

res.send("MBTI test data recorded successfully !!!");
});

app.get('/create/ocean', async (req,res)=>{
    let ocean = await oceanModel.create({
      O:" 99",
      C: "54",
      user: "663d9752bc61591c97cac8fe" //this will be taken directly when user is logged in
    })
  
  let user = await userModel.findOneAndUpdate(
      { _id: "663d9752bc61591c97cac8fe" },
      { $set: { ocean: ocean._id } },
      { new: true }
  );
  
  res.send("OCEAN test data recorded successfully !!!");
  });

  

app.listen(3000, ()=>{
    console.log('Server Running on 3000 port')
});