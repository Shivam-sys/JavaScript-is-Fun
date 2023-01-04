function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map((keyvalPair) => keyvalPair.split("="));
}

function thirdStep(input) {
  return input.map(([key, value]) => [key, value.replace(/\+/g, " ")]);
}

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function parseBody(str) {
  str = firstStep(str);
  str = secondStep(str);
  str = thirdStep(str);
  str = fourthStep(str);
  str = fifthStep(str);
  return str;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
