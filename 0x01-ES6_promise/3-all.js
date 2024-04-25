/* eslint-disable */


import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { firstName, lastName } = userResponse;
      console.log(`${photoResponse.body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
