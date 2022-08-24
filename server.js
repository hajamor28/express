const express = require('express')

const app = express()
const PORT = 5000;


const AuthMiddleWare=(req,res,next)=>{
    const date = new Date();
    const days = date.getDay()
    const hours = date.getHours()
    console.log(date,days,hours)
    if(days>=1 && days<=6 && hours>=9 && hours<=10){
        next()
    }
    else{
        res.send('we are not available, we are close')
    }
}

app.use(AuthMiddleWare)


app.get('/', (red, res) => {
    res.sendFile(__dirname + '/views/Homepage.html')})

app.get('/contact' , (req ,res)=>{
    res.sendFile(__dirname+ '/views/contact.html')
})
app.get('/homepage' , (req ,res)=>{
    res.sendFile(__dirname+ '/views/homepage.html')
})

app.get('/Services' , (req ,res)=>{
    res.sendFile(__dirname+ '/views/Services.html')
})



app.listen(PORT,err=> err? console.log(err) : console.log(`server is running on ${PORT}`))
