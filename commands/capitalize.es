// Description:
//   Capitalize stuff
//
// Commands:
//   hubot capitalize - Capitalize message


import _ from 'lodash';


class Capitalize {
  constructor(robot) {
    robot.respond(/capitalize (.+)/i, (message) => {
      message.send(_.capitalize(message.match[1]));
    });
  }
}


export default (robot) => new Capitalize(robot);
