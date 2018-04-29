const express = require('express');
const app = express();
const fs = require('fs');
const hbs = require ('hbs');
const port = process.env.PORT || 8080;
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('getAuthor', ()=> {
    return 'Jordan';

})

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})

app.use((request,response,next) => {
    let now = new Date().toString();
    let log = `${now} - ${request.method} - ${request.url}`;
    fs.appendFile('server.log',log+'\n', (err) =>{
        if (err){
            console.log("Error");
        }
    });
    console.log(`${now} - ${request.method} - ${request.url}`)
    next();
});

//
// app.use((request,response,next) => {
//    response.render('maintance.hbs');
// });

app.use(express.static(__dirname + '/public/html'))


app.get('/', (request,response) => {
    response.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'hello san dimas',
        likes: ["Waffles","Lego"],
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs',{
        pageTitle: 'About Page',
    });
})

app.get('/bad', (request, response) => {
    response.send({
        errorMessage:"Error handling request"
    });
})
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});