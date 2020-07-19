// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

const removeElemetns = (nums, val) => {
  let temp = 0
  // 1. iterasi seluruh array pada nums
  for (let i = 0; i < nums.length; i++) {
    // 2. di cek apakah nums di index ke i ini nilainya sama dengan nilai pada val maka di remove elemen pada array
    if (nums[i] === val) {
      nums[temp] = nums[i]
      temp++
    }
  }

  return temp
}

const result = removeElemetns([3,2,2,3], 3)
console.log(result)

// cara singkat
const newRemoveELement = (arrays, vals) => {
  return arrays.filter(array => array !== vals)
}

console.log(newRemoveELement([3,2,2,3], 3))