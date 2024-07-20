/**
 * Question 1: Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they
add up to target.
You  may  assume  that  each  input  would  have  exactly  one  solution,  and  you  may  not  use  the  same
element twice.
You can return the answer in any order.
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 */
const nums = [2, 7, 11, 15];
const target = 9;
//output = [0,1]
console.log(twoSum(nums, target));

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}

/***
 * Question 2: Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An  Anagram  is  a  word  or  phrase  formed  by  rearranging  the  letters  of  a  different  word  or  phrase,
typically using all the original letters exactly once.
Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
  const map = new Map();
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }
  return [...map.values()];
};
console.log(groupAnagrams(strs));
