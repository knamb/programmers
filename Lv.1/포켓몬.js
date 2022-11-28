function solution(nums) {
  var answer = 0;
  const set = new Set();
  
  for(let i=0;i<nums.length;i++){
  set.add(nums[i]);    
  }
  
  const types = [...set].length
  answer = nums.length/2 < types ? parseInt(nums.length/2) : types;
  
  return answer;
}