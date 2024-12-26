function halflifeArray(readingAmount = 100, halflifeMinutes = 300, intervalMinutes = 10, amountLimit = 0.5) {
  const readingArray = [];
  let currentAmount = readingAmount;
  let i = 0;
  while(currentAmount > amountLimit) {
    if (i !== 0) {
      currentAmount = halflifeReduction(i, readingAmount, readingArray, halflifeMinutes, intervalMinutes);
    }
    readingArray[i] = currentAmount;
    // console.log(i , ': ', currentAmount);
    i++;
  }
  return readingArray;
}

function halflifeReduction(i, readingAmount, readingArray, halflifeMinutes, intervalMinutes) {
  const increments = Math.round(halflifeMinutes / intervalMinutes);
  const whichIteration = Math.ceil(i / increments) - 1;
  const startingAmount = readingArray[(increments * whichIteration)];
  const halflifeReduction = startingAmount / 2;
  const reduceNow = (halflifeReduction * (i - (increments * whichIteration)) / increments);
  return startingAmount - reduceNow;
}

module.exports = halflifeArray;
