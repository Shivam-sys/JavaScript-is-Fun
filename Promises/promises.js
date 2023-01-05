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

/*const request = new Promise((resolve) => {
  setTimeout((msg) => resolve(msg), 1000);
});

const recieveResponse = (msg) => console.log(msg);

request.then(recieveResponse);*/

/************************************************************/
/*********** Promise Long Practice **************************/

/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

/**
 * @returns number
 */
function num1() {
  return 1;
}

/**
 * @returns promise
 */
async function num2() {
  return 0;
}
console.log(Date.now());
console.log("num1: ", num1()); //1
console.log("num2: ", num2()); // Promise {2}

num2().then((result) => console.log(result));
/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
  const value = await num2();
  console.log(Date.now());
  console.log("waiting: ", value);
}
waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
  const p = new Promise((res) => {
    setTimeout(() => {
      console.log(Date.now());
      res(4);
    }, 1000);
  });

  const result = await p;
  console.log("My promise is", result);
}

waitForMyPromise();
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise((resolve) => {
  setTimeout(() => {
    console.log(Date.now());
    resolve("Done");
  }, 2000);
}).then((r) => console.log(r));

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) =>
  new Promise((res, rej) => {
    if (random > 0.5) {
      res("Success!");
    } else rej("Failure!");
  });

for (let i = 1; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => tryRandomPromise(random))
    .then((result) => console.log("random try #", i, result))
    .catch((error) => console.error("random try #", i, error));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const tryTryAgain = async (i) => {
  const random = Math.random();

  await wait(3000 + random * 1000);
  try {
    const result = await tryRandomPromise(random);
    console.log("random again #", i, result);
  } catch (error) {
    console.error("random again #", i, error);
  }
};

for (let i = 1; i < 10; i++) {
  tryTryAgain(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log("END OF PROGRAM");
setTimeout(() => {
  console.log("End Of Program depends on delay passed as parameter here");
}, 5000);
