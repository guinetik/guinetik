/* A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1. 
Your task is to write a program that will be used in a vending machine to return change. 
Assume that the vending machine will always want to return the least number of coins or notes. 
Devise a function getChange(M, P) where M is how much money was inserted into the machine and P the price of the item selected, 
that returns an array of integers representing the number of each denomination to return. 

Example:
getChange(5, 0.99) // should return [1,0,0,0,0,4]

getChange(3.14, 1.99) // should return [0,1,1,0,0,1]
getChange(3, 0.01) // should return [4,0,2,1,1,2]
getChange(4, 3.14) // should return [1,0,1,1,1,0]
getChange(0.45, 0.34) // should return [1,0,1,0,0,0] */

function getChange(amount, price){
    amount *= 100;  // convert to cents
    price *= 100;   // convert to cents
    const availableCoins = [1, 5, 10, 25, 50, 100];
    const returnCoins = [];
    const toReturn = amount - price;
    let remaining = JSON.parse(JSON.stringify(toReturn));
  
    for (let c = availableCoins.length; c > 0; c--) {
      const coin = availableCoins[c - 1];
      let _ret = 0;
      if (remaining) {
        _ret = coinReturn(remaining, coin);
        remaining -= _ret * coin;
      }
      returnCoins[c - 1] = _ret;
    }
  
    function coinReturn(amount, coin, timesCoin = 0) {
      if (amount >= coin) {
        timesCoin++;
        return coinReturn(amount - coin, coin, timesCoin);
      }
      return timesCoin
    }
    return returnCoins
  }
  
  console.log(getChange(5, 0.99));
  console.log(getChange(3.14, 1.99));
  console.log(getChange(3, 0.01));
  console.log(getChange(4, 3.14));
  console.log(getChange(0.45, 0.34));