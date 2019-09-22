

const button = $('.btn');



button.on('click', e => {

    e.preventDefault();
    let name = $('#name').val();
    let photo = $('#photo').val();
    let answerResponse = [];
    for(let i = 1; i <= 10; i++ ){

        let selector = 'input:radio[name=q' + i + ']:checked';

        answerResponse.push(parseInt($(selector).val()));

    };

    postRequestData = {
        name: name,
        photo: photo,
        answers: answerResponse
    }
    console.log(postRequestData);

    $.ajax("/api/friends", {
        type: "POST",
        data: postRequestData
      }).done(function(data){

        $('#matchName').text(data.name);
        $('#matchPhoto').attr('src', data.photo);
        $('#matchModal').modal('show');

      })


});