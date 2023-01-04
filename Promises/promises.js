/*
function getForecastForLocation() {
  locationRequest({
    success: spotRequest({
      success: forecastRequest({
        success: handleSuccess,
        error: handleError,
      }),
      error: handleError,
    }),
    error: handleError,
  });
}
*/
// *The above function can be converted into the below function, using Promises.
/*
function getForecastForLocation() {
  locationRequest()
    .then(spotRequest)
    .then(forecastRequest)
    .then(handleSuccess)
    .catch(handleError);
}
*/

// const executor = (resolve, reject) => {
//   if (condition == true) resolve();
//   else reject();
// };

// const p = new Promise(executor);

const request = new Promise((resolve) => {
  setTimeout((msg) => resolve(msg), 1000);
});

const recieveResponse = (msg) => console.log(msg);

request.then(recieveResponse);
