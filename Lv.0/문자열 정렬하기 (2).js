function solution(my_string) {
  var answer = '';
  const arr = Array.from(my_string.toLowerCase());    
  arr.sort();
  for(const word of arr){
      answer+=word;
  }
  
  return answer;
}