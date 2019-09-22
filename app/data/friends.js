// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var people = [
    {
      name: "Ahmed",
      photo: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
      answers:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],  
    },
    {
        name: "Nikhil",
        photo: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg?ve=1&tl=1",
        answers:[
            0,
            5,
            3,
            2,
            2,
            3,
            3,
            3,
            5,
            4
        ],  
      },
      {
        name: "Ashley",
        photo: "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/05/SEI_70586560.jpg?quality=90&strip=all&zoom=1&resize=540%2C540&ssl=1",
        answers:[
            3,
            1,
            2,
            4,
            3,
            4,
            5,
            4,
            3,
            3
        ],  
      },
      {
        name: "Randy",
        photo: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FTOMGVVJU4I6TBZTJDEHENPTSY.jpg",
        answers:[
            5,
            3,
            3,
            5,
            2,
            4,
            4,
            1,
            0,
            4
        ],  
      },
      {
        name: "Maci",
        photo: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg",
        answers:[
          2,
          1,
          5,
          4,
          3,
          1,
          1,
          2,
          3,
          4
        ],  
      },
];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = people;