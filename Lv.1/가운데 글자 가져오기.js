function solution(s) {
  var answer = '';
  //짝수이면 인덱스의 절반(Math.floor()내림)하여 2글자 반환
  //홀수이면 인덱스의 절반 잘라서 반환
  //slice(시작인덱스, 목표인덱스+1), substr(시작인덱스, 갯수) : 필요에 따라 적절하게 사용
  if(s.length %2===0){//짝수
      let start = Math.floor((s.length-1)/2);
      answer += s.substr(start,2);
      
  }else{//홀수
      let start = (s.length-1)/2;
      answer += s.substr(start,1);
      
  }
  return answer;
}