// Description:
//   Takes you to Flavortown
//
// Commands:
//   hubot take me to flavortown

class Flavortown {
  constructor(robot) {
    robot.respond(/take me to flavortown/i, (message) => {
      message.
        http('https://api.imgur.com/3/gallery/r/foodporn').
        headers({ Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}` }).
        get()((err, res, body) => {
          var image = message.random(JSON.parse(body).data).link;
          return message.send(image);
        });
    });
  }
}

export default (robot) => new Flavortown(robot);
