'use strict';
// Generate random password

const getRandomNum = (max) => Math.floor(Math.random() * max);

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = getRandomNum(max);
    password += alphabet[index];
  }
  return password;
};

require('../Tests/password.js')(generatePassword);
