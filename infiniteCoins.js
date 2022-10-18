function makeChange(coin) {
  const finalResult = [];

  const coinsValues = [1, 5, 10, 25];

  const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return result;
  };

  function addInArray(coinsPosition, arrayResult, i) {
    if (coinsPosition[i] === 1) {
      arrayResult[3] += 1;
    } else if (coinsPosition[i] === 5) {
      arrayResult[2] += 1;
    } else if (coinsPosition[i] === 10) {
      arrayResult[1] += 1;
    } else if (coinsPosition[i] === 25) {
      arrayResult[0] += 1;
    }
  }

  function changes(coin, coinsValues, coinsArray) {
    const arrayResult = [0, 0, 0, 0];

    for (let i = 0; i < coinsValues.length; i++) {
      if (coin >= coinsArray[i]) {
        addInArray(coinsArray, arrayResult, i);
        coin = coin - coinsArray[i];
        i -= 1;
      }
    }

    const hasEqual = finalResult.find(
      (element) => element.toString() === arrayResult.toString()
    );
    if (!hasEqual) {
      finalResult.push(arrayResult);
    }
    finalResult.push(arrayResult);
  }
  const coinsPermutation = permutator(coinsValues);
  for (let i = 0; i < coinsPermutation.length; i++) {
    changes(coin, coinsValues, coinsPermutation[i]);
  }

  return finalResult;
}

console.log(makeChange(39));
