function solution(n) {
  var answer = 1;
  let sumPiece = 6;
  while(!(sumPiece%n === 0 && sumPiece/n >=1)){ 
      answer++;
      sumPiece = 6 *answer;
  }
  return answer;
}