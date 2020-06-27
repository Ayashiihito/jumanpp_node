const spawn = require('child_process').spawn;
const { EOL } = require('os');

class Jumnanpp {
  instance = null;

  constructor(command = 'jumanpp') {
    this.instance = spawn(command);
  }

  close() {
    this.instance.stdin.end();
  }

  async query(sentence) {
    this.instance.stdin.write(sentence + EOL);

    return new Promise((resolve, reject) => {
      let response = '';

      this.instance.stdout.on('data', data => {
        response += data;
        if (response.includes('EOS')) resolve(response);
      });
    });
  }
}

module.exports = Jumnanpp;
