const printRunTime = (cb, ...args) => {
  startTimeBack = Date.now();
  cb(...args);
  endTimeBack = Date.now();
  console.log(
    `Runtime of ${cb.name} (${args}) : ${endTimeBack - startTimeBack} ms`
  );
};

module.exports = printRunTime;
