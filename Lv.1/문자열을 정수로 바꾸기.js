function solution(s) {
  var answer = 0;
  //부호가 있는지 없는지 확인 
  //나머지를 반복문을 통해 정수로 변환
  //맨앞을 제외한 나머지를 잘라서 변환 (slice, parseInt, Number()) 
  if(s[0]==='-'|| s[0]==='+'){
      if(s[0]==='+')return Number(s.slice(1));
      else return Number(s.slice(1))*-1;
  }else answer += Number(s);

  return answer;
}