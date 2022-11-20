function solution(a, b) {
  //a를 포함한 b까지의 반복문을 통해 값을 모두 더해
  //제한조건 점검 1.같은경우 2.대소관계 정해지지 않았다(확인필요)
  var answer = 0;
  let s = 0;
  let e = 0;
  
  if(a===b)return a;
  else if(a-b>0){
      s=b;
      e=a;
  }else{
      s=a;
      e=b;
  }

  for(let i=s; i<=e; i++){
      answer+=i
  }
  return answer;
}