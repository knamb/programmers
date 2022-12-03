function solution(numbers, k) { 
  var answer = 0;
  
  const len = numbers.length;
  const index = (2*(k-1))%len;
  answer = numbers[index];
  
  return answer;
}