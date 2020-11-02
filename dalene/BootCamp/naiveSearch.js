let countNumber = (str, lookingStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let j;
    for (j = 0; j < lookingStr.length; j++) {
      if (lookingStr[j] !== str[i + j]) {
        break;
      }
    }
    if (lookingStr.length === j) {
      count++;
    }
  }
  return count;
};
console.log(countNumber("helloohmyworldthisisgreat", "isp"));
console.log(countNumber("aaaaaaaaaaaaaa", "aaaa"));
