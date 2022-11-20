function solution(phone_number) {
  var answer = '';
  // 길이-4 까지는 별을 붙이고, 그 이후부터는 원본 문자열 합치기
  for(let i=0; i<phone_number.length;i++){
      if(i<phone_number.length-4)answer+='*';
      else answer+=phone_number[i];
  }
  return answer;
}