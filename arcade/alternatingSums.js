/**
 *
 * Several people are standing in a row and need to be divided into two teams.
 * The first person goes into team 1, the second goes into team 2, the third goes into team 1 again,
 * the fourth into team 2, and so on.
 * You are given an array of positive integers - the weights of the people.
 * Return an array of two integers, where the first element is the total weight of team 1,
 * and the second element is the total weight of team 2 after the division is complete.
 *
 */

const alternatingSums = (arr) => {
  const returnArr = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) returnArr[0] += arr[i];
    else returnArr[1] += arr[i];
  }
  return returnArr;
};

const arr = [50, 60, 60, 45, 70];
console.log(alternatingSums(arr));