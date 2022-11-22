function solution(s) {
  var answer = '';
  //단어별로 짝:대문자 홀:소문자 이므로 그냥 단어로 나눠서 판별
  
  const words = s.split(' '); //'abc'
  for (let j = 0; j < words.length; j++) {
  for (let i = 0; i < words[j].length; i++) {
    if (i % 2 == 0) answer += words[j][i].toUpperCase();
    else answer += words[j][i].toLowerCase();
  }
  if(j!==words.length-1)answer += ' '; //여기서 무조건 공백주고
} //여기서 answer.trim()써서 제출했더니 틀리더라. 이유가 도대체 뭔지 모르겠는데...
  //마지막에 공백문자가 포함되고, trim()으로 제거하면 똑같은거 아닌가 ?
  //answer= answer.slice(0,-1) 이런식으로도 가능하다.
return answer;
}
