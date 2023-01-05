function walkTheDog() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Happy Doggy");
    }, 1000);
  });
}

function doChores() {
  console.log("before Walking the dog");
  walkTheDog().then((res) => {
    console.log(res);
    console.log("After walking the dog.");
  });
  return "Done";
}

// console.log(doChores());
// before Walking the dog
// Done
// 'Done' will be returned by doChores before the promise resolves, because it is asynchronous.
// Happy Doggy
// After walking the dog.

async function doChoresAsync() {
  console.log("before walking the dog");
  const res = await walkTheDog();
  console.log(res);
  console.log("after walking the dog");
}

doChoresAsync();
// before walking the dog
// Happy Doggy
// after walking the dog
