/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

let url = "/Products";
let body = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery",
});
let options = {
  method: "POST",
  // body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

fetch(url, options);

/* ============================== Phase 2 ============================== */

fetch(url, options).then((res) => {
  console.log(res.status);
  console.log(res.headers.get("content-type"));
  console.log(res.url);
});

/* ============================== Phase 3 ============================== */

// Your code here
