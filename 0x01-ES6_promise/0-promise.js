#!/usr/bin/node

function getResponseFromAPI(){
  return new Promise((resolve, reject) =>{
    // Resolve the promise immediately
    resolve("Response from API");
  })
}

module.exports = getResponseFromAPI;
