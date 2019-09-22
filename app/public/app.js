

// grabbing our HTML element with the id 'btn'
const button = $('.btn');



// .on('click) function that runs our api request to post the information to our server
button.on('click', e => {

    // prevent the submit button click from refreshing the page
    e.preventDefault();
    // storing our input values in variables
    let name = $('#name').val();
    let photo = $('#photo').val();
    let answerResponse = [];

    // for() to iterate through our response and grab the values of each of the questions
    for(let i = 1; i <= 10; i++ ){

        // the syntax we use to get the response from the 'radio' buttons
        let selector = 'input:radio[name=q' + i + ']:checked';

        // pusing the response answers into the array by using parseInt to return them as a numerical value
        answerResponse.push(parseInt($(selector).val()));

    };

    // our key value pairs assigning 
    postRequestData = {
        name: name,
        photo: photo,
        answers: answerResponse
    }

    console.log(postRequestData);

    // api call to add the new entry into our friends list
    $.ajax("/api/friends", {
        type: "POST",
        data: postRequestData
      }).done(function(data){

        // one this request is finished we will return our response from the friends.js file and set our modal elements to reflect the new match
        $('#matchName').text(data.name);
        $('#matchPhoto').attr('src', data.photo);
        $('#matchModal').modal('show');

      })


});