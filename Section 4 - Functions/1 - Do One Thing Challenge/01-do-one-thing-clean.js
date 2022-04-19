function createUser(email, password) {
  if (!isUserDataValid(email, password)) {
    invalidInputError();
    return;
  }

  const user = createUserObject(email, password);

  database.insert(user);
}

function isUserDataValid(email, password) {
  
  const isEmailValid = (email) && (email.includes('@'));

  const isPasswordValid = (password) && (password.trim() !== '');
  
  return isEmailValid && isPasswordValid;
}

function createUserObject(email, password) {
  return {
    email: email,
    password: password,
  };
}

function invalidInputError() {
  console.log('Invalid input!');
}