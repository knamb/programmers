function solution(array) {
  var answer = 0;
  array = String(array);
  for(const word of array){  
      if(word === '7')answer++
  }
  return answer;
}