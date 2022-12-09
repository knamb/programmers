function solution(my_string) {
  var answer = [];
  for (const word of my_string) {
    if (!isNaN(parseInt(word))) {
      answer.push(parseInt(word));
    }
  }
  answer.sort();
  return answer;
}
