// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/



// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.



var removeDuplicates = function(nums) {
    for (i1 = 0; i1 < nums.length; i1++) {
        let currentNum = nums[i1];
        
        for (i2 = i1 + 1; i2 < nums.length; i2++) {
            let nextNum = nums[i2];
            
            if (currentNum === nextNum) {
                nums.splice(i2, 1);
                i2--;
            };  
        };
        
    };
    
    return nums.length
};