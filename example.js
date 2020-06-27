const Jumanpp = require('./src/jumanpp');

const main = async () => {
  const jumanpp = new Jumanpp();

  const one = await jumanpp.query('玄関で愛を待ち惚け');
  const two = await jumanpp.query('囁く声で喘いで');
  const three = await jumanpp.query('後悔の悔を教えてほしいわ');

  jumanpp.close(); //terminates running jumanpp process

  console.log(one);
  console.log(two);
  console.log(three);
};

main();
