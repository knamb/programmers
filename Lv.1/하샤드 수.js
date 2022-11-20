function solution(x) {
  var answer = true;
  //각 자리수를 더한다
  //나눈다
  //확인한다
  let sum = 0;
  const num = String(x);
  for(let i=0; i<num.length ; i++){
      sum += parseInt(num[i]);
  }
  if(x%sum!==0)answer =false;
  
  return answer;
}