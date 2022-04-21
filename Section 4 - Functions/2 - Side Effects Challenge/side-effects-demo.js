function connectDatabase() {
  const didConnect = database.connect(); // Expected side effect
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!'); // Unexpected side effect
    return false;
  }
}

// --------- Re-Written ---------

function connectDatabase() {
  const didConnect = database.connect(); // Expected side effect
  return didConnect;
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!'); // Unexpected side effect
    return false;
  }
  return true;
}

// --------- Re-Written ---------

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log('Invalid input!'); // Unexpected side effect
  
  } else {

  }
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}