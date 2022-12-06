function solution(my_string) { 
  var answer = '';
  let myString = Array.from(my_string);   
  const set = new Set();
  for(const word of myString){
      set.add(word)
  }
  for(const word of set){
      answer += word;
  }
  

  return answer;
}