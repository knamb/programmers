function solution(absolutes, signs) { //배울점.. false는 불리언 자료형 'false'는 문자.. 집중..
  var answer = 0;
  for(let i=0; i<signs.length; i++){
      console.log(absolutes[i], answer)
      if(signs[i] === false) answer+=absolutes[i]*(-1);
      else answer+=absolutes[i];
  }
  return answer;
}