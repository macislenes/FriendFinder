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

    // we respond with our friends list in JSON format
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
  
    // a vairable to store the  parsed response array
    let intAnswers = [];

    req.body.answers.forEach(element => {
      intAnswers.push(parseInt(element));
    });
    
    // assigning req.body.answers the new answers in integers 
    req.body.answers = intAnswers;

    // callback function comparing the first person on file with the new users input
    let calculateDifference = (arrOne, arrTwo) => {

      // variable to track the difference between the strings
      let totalDifference = 0;

      // for() to iterate through the first array
      for(let i = 0; i < arrOne.length; i++){

        // using Math.abs to return the difference between the two arrays as they iterate through the for() to return a whole number
        let difference = Math.abs(arrOne[i] - arrTwo[i]);

        // the total difference will now be set the the difference we just calculated
        totalDifference += difference;

      };

      // return the total 
      return totalDifference;

    };

    // set a min difference to compare the current difference against
    let minDiff = 9999;
    let minDiffIndex = -1;
    // our counter as we iterate through the array
    let index = 0;


    // taking our friends data and iterating through the array
    friendsData.forEach(person => {

      // run our function to calculate the differnce on the persons answers we are retreving from the database to the ones the user just input
      let currentDifference = calculateDifference(person.answers, req.body.answers);

      // if the difference between the two is less than the min difference
      if(currentDifference < minDiff){

        // we set a new minDiff
        minDiff = currentDifference;
        // change our index to reflect the winner at the end
        minDiffIndex = index;

      };

      // if this is not met we add to the index and iterate through the friends array again
      index++;
    });
    
    // push our user input into the friendsData
    friendsData.push(req.body);
    console.log(friendsData[minDiffIndex]);
    // send a res of our friend data to the index of the best matched person
    res.json(friendsData[minDiffIndex]);

  });

};