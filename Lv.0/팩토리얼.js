function solution(n) {  
  var answer = 1;
  let factorial = 1;
  while(!(factorial > n)){   
      answer++;
      factorial*=answer;
  }
  return answer-1;
}