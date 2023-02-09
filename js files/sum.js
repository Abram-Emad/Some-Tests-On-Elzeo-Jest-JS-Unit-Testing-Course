/*
  theSum Function
  [1] Return 0 If No Number Passed
  [2] Return The Number If Its Only The Number Passed
  [3] If Theres 2 Numbers It Add Number 1 + 2
  [4] If Theres 3 Numbers It Add Number 1 + 2 + 3
  [5] If You have Any Number of Numbers It Will Sum All The Numbers
*/

function theSum (num1,num2,num3,num4) {
    return (num1 || 0) +(num2 || null) + (num3 || null) + (num4 || null);
}

const theAddition = (...num) => num.reduce((pv, cr) => pv + cr, 0)

module.exports = theSum;
module.exports = theAddition;