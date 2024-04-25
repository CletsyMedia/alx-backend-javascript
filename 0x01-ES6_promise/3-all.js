/* eslint-disable */
import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  // Initiating both promises separately
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Using Promise.all to wait for both promises to resolve
  return Promise.all([photoPromise, userPromise])
    .then((responses) => {
      // Destructuring the responses array to access individual responses
      const photoResponse = responses[0];
      const userResponse = responses[1];

      // Logging the desired format to the console
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Handling error case
      console.log("Signup system offline");
    });
}
