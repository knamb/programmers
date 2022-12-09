function solution(my_string) {
  var answer = '';
  for (const index in my_string) {
    const trans = my_string.charCodeAt(index);
    console.log(trans);
    if (trans >= 65 && trans <= 90) {
      answer += my_string[index].toLowerCase();
    } else if (trans >= 97 && trans <= 122) {
      answer += my_string[index].toUpperCase();
    }
  }
  return answer;
}

//아스키로 가능하지만 내장함수가 더 깔끔하고 편함
//65 ~ 90 대문자
//97 ~ 122 소문자
//charCodeAt() index를 기반으로 유니코드를 반환
