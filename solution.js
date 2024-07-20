/**
 * Problem Description:
You  are  given  an  integer  array  coins  representing  coins  of  different  denominations  and  an  integeramount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Input Description:
An integer array `coins` representing coins of different denominations.
An integer `amount` representing a total amount of money.
Output Description:
The  fewest  number  of  coins  needed  to  make  up  the  amount.  If  the  amount  cannot  be  made  up,return -1.
Examples:
**Example 1:**
- Input: `coins = [1, 2, 5]`, `amount = 11`
- Output: `3`
- Explanation: `11 = 5 + 5 + 1`
**Example 2:**
- Input: `coins = [2]`, `amount = 3`
- Output: `-1`
**Example 3:**
- Input: `coins = [1]`, `amount = 0`
- Output: `0`
Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
 */
//Solution for Q.1

let coins = [1, 2, 5];
let amount = 11;
//output = 3
console.log(coinChange(coins, amount));

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === 0 ? -1 : dp[amount];
}

/**
 * Question 2
Problem Description:
Given a string `s`, return the longest palindromic substring in `s`.
Input Description:
A string `s`.
Output Description:
The longest palindromic substring in `s`.
Examples:
**Example 1:**
- Input: `s = "babad"`
- Output: `"bab"`
- Explanation: `"aba"` is also a valid answer.
**Example 2:**
- Input: `s = "cbbd"`
- Output: `"bb"`
Constraints:
1 <= s.length <= 1000
s consists of only digits and English letters.
 */

const s = "babad";
console.log(longestPalindrome(s));

function longestPalindrome(s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let max = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      max = 2;
      start = i;
    }
  }
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      let k = j + i - 1;
      if (dp[j + 1][k - 1] && s[j] === s[k]) {
        dp[j][k] = true;
        max = i;
        start = j;
      }
    }
  }
  return s.slice(start, start + max);
}
