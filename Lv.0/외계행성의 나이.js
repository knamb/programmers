function solution(age) { // 97~122
  var answer = '';
  const ageArr = Array.from(age.toString());  
  for(let i=0; i<ageArr.length; i++){
      answer += String.fromCharCode(parseInt(ageArr[i])+97);
  }
  return answer;
}
// (문자 + 아스키코드값)은 정확한 아스키 코드값이 아니다
//  문자를 아스키코드값으로 바꿔서 정확한 위치값을 가지고 문자로 변환해야 한다