function solution(s) {
  var answer = true;
  const len = s.length;
  if(len!==4 && len!==6)return false; 
  //조건문 연산자 잘 확인
  //&& 는 둘다 참이어야 참
  //4도 아니고 6도 아니면 

  for(let i=0; i<len; i++){
      if(isNaN(parseInt(s[i])))return false;
  }
  return answer;
}