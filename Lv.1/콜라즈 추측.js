function solution(num) {
  //n === 1일 경우 0 리턴
  //그대로 구현
  //count 했을때 0 이면 -1 리턴
  //count 0이 아니라면 그 값 리턴
  var answer = 0;
  let count  = 0;
  if(num ===1) return 0;
  
  while(count < 500){
      if(num%2==0)num /= 2;
      else {
          num =(num * 3) +1;
      }
      count ++;
      
      if(num === 1) return count;
  }
  answer = -1;
  return answer;
}