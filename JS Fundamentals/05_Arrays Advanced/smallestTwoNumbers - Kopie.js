function smallestTwoNumbers(nums) {
    nums.sort((a, b) => a -b);
    let twoSmallestNum = nums.slice(0, 2);
    console.log(twoSmallestNum.join(` `));
}

smallestTwoNumbers([30, 15, 50, 5])