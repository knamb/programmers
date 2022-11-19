function solution(n, words) {
  var answer = [0,0];
  const sum = [words[0]];//두번째부터 끝말잇기 하므로 첫번째단어는 미리 푸쉬    
  for(let i=1 ;i<words.length; i++){ //어차피 두번째부터 끝말잇기
      if(sum.includes(words[i]) || (words[i-1].slice(-1)!== words[i].slice(0,1))){
          answer[1] = parseInt(i/n)+1 ; //라운드 수
          answer[0] = (i%n)+1; //순번
          break;
      }
      sum.push(words[i]);
  }
  return answer;
}