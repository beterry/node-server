const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return 2019;
});

app.get('/', (req, res) =>{
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to the home page'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  })
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Trouble'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000, baby!')
});
