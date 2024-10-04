export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    // Simulate an API call with a timeout
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

// Example usage
getResponseFromAPI().then((response) => {
  console.log(response); // Output: true
}).catch((error) => {
  console.error(error);
});
