//import 'babel-polyfill';
const  express = require('express');
//const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const {Goal} = require('./models');
var bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                     global.DATABASE_URL ||
                     'mongodb://localhost/goalzapp';

console.log(`Server running in ${process.env.NODE_ENV} mode`);


const app = express();
var jsonParser = bodyParser.json()

app.use(express.static(process.env.CLIENT_PATH));

mongoose.Promise = global.Promise;

app.get('/goal', (req, res) => {

  Goal
      .find()
      .exec()
      .then(goal => {
        res.json(goal);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({error: 'something went wrong'});
      })
});

app.put('/goal/:id', jsonParser, (req, res) => {
  console.log("req body steps " + req.body.steps);
  let updatedSteps = req.body.steps; 
  let update = {
    "steps": updatedSteps
  };  
  Goal
  .findByIdAndUpdate(req.params.id, {$set: update})
  .exec()
  .then(updatedGoal => res.status(201).json(updatedGoal))
  .catch(err => res.status(500).json({message: 'your update request was unsuccessful'}));
});

// app.post('/goals-test/:goal', function(req, res) {
//     console.log(req.params);
//      Goal.create({
//         goal: req.params.goal
//     }, function(err, item) {
//         if (err) {
//             return res.status(500).json({
//                 message: 'Internal Server Error'
//             });
//         }
//         res.status(201).json(item);
//     });
// });

app.post('/goal', jsonParser, function(req, res) {
    console.log(req.body);
    console.error(req.body);
     Goal.create({
        goal: req.body.goal
    }, function(err, item) {
        if (err) {
          console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});




let server;
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
    runServer();
}
