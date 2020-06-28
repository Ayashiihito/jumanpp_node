const { spawn } = require('child_process');
const { EOL } = require('os');

class Jumanpp {
  instance = null;

  constructor(command = 'jumanpp') {
    this.instance = spawn(command);

    this.instance.on('error', err => {
      throw new Error(
        `Failed to start process with provided command: ${command}.`
      );
    });
  }

  close() {
    this.instance.stdin.end();
  }

  async query(sentence) {
    if (!sentence) {
      throw new Error(`Query: '${sentence}' is not a valid query.`);
    }
    if (!this.instance) {
      throw new Error(
        `Expected and instance of ${command}, but found ${this.instance}`
      );
    }

    sentence = sentence.replace(/[\r\n]+/, '');
    this.instance.stdin.write(sentence + EOL);

    return new Promise((resolve, reject) => {
      //no actual buffer handling is implemented
      this.instance.stdout.on('data', response => {
        resolve(response.toString());
      });
    });
  }
}

module.exports = Jumanpp;
