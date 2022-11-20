[solution 1]
function solution(x, n) {
  var answer = [x];
  let count  = 1 ;
  while(count!=n){
      answer.push(answer[answer.length-1] + x);
      count++;
  }
  return answer;
}


[solution 2]
function solution(x, n) {
  var answer = [];
  const rate = x;
  let count  = 1 ;
  
  while(count!=n+1){ //처음이 1로시작하므로 마지막에 ++하기때문에 n+1전까지만 push
      answer.push(x);
      x = x + rate ; 
      count++;
  }
  return answer;
}