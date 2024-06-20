function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Simulating no action if success is false
      resolve(null);
    }
  });
}

module.exports = getPaymentTokenFromAPI;
