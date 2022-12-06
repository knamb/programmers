function solution(num, k) {
  var answer = 0;
  const arr = Array.from(num.toString());    
  const index = arr.findIndex((el)=> el == k);
  answer = index === -1 ? -1 : index + 1;
  
  return answer;
}
