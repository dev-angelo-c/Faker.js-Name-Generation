function randChar(strLen = 20, arrLen = 10, useSpecialChar=false){
  function arrayOfRandomCharaters() {
    const special = "!@#$%^&*()_+";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    while (str.length < strLen) {
      str = str + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return str;
  }

  let randStrings = [];
  while (randStrings.length < arrLen) {
    randStrings.push(arrayOfRandomCharaters())
  }
  return randStrings;
}


//Ex Data Structure is [ [{htmlElement},{},{}], [{},{},{}] ]
function nestedArrayToObject(z){
  let fine = z.reduce( (acc, val) => {
    let temp = {};
    val.forEach( ( j, idx ) => {
        temp[idx] = j.innerText;
    });
    acc.push(temp);
      return acc;
  }, [] )
  return fine;
}