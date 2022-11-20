function solution(seoul) {
  // 일차원 배열에서 일치하는 문자열 찾아서 인덱스 반환
  // 1.indexOf함수
  // 2.반복문을 통해 일치하는지 찾는방법
  var answer = '';
  const p = seoul.indexOf('Kim');
  answer += `김서방은 ${p}에 있다`
  return answer;
}