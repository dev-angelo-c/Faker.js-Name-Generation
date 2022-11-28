export function arrayOfRandomCharaters(strLen = 20, arrLen = 10, useSpecialChar=false) {
  const special = "!@#$%^&*()_+";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if(useSpecialChar){
    alphabet.concat(special);
  }
  let str = "";
  while (str.length < strLen) {
    str = str + alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  let x = [];
  while (x.length < arrLen) {
    x.push(generateRandomLetter())
  }

  return str;
}