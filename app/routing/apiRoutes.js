// ===============================================================================
// LOAD DATA
// require() our friends.js data
// ===============================================================================

var friendsData = require('../data/friends');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {

    res.json(friendsData);

  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    let intAnswers = [];

    req.body.answers.forEach(element => {
      intAnswers.push(parseInt(element));
    });
    
    req.body.answers = intAnswers;

    let calculateDifference = (arrOne, arrTwo) => {

      let totalDifference = 0;

      for(let i = 0; i < arrOne.length; i++){

        let difference = Math.abs(arrOne[i] - arrTwo[i]);

        totalDifference += difference;

      };

      return totalDifference;

    };

    let minDiff = 9999;
    let minDiffIndex = -1;
    let index = 0;


    friendsData.forEach(person => {

      let currentDifference = calculateDifference(person.answers, req.body.answers);

      if(currentDifference < minDiff){

        minDiff = currentDifference;
        minDiffIndex = index;

      };

      index++;
    });
    
    friendsData.push(req.body);
    console.log(friendsData[minDiffIndex]);
    res.json(friendsData[minDiffIndex]);

  });

};