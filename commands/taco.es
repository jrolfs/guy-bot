// Description:
//   TACO TIME
//
// Commands:
//   hubot anything with taco|tacos|mexican|mexico in it

class Taco {
  constructor(robot) {
    robot.hear(/taco|tacos|mexican|mexico/i, (message) => {
      message.
        http('https://api.imgur.com/3/gallery/r/tacos').
        headers({ Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}` }).
        get()((err, res, body) => {
          var image = message.random(JSON.parse(body).data).link;
          return message.send(image);
        });
    });
  }
}

export default (robot) => new Taco(robot);
