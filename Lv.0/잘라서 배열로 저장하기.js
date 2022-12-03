function solution(my_str, n) {  
  var answer = [];
  const myStr = Array.from(my_str);

  while(myStr.length>0){  
      const tempWord = myStr.splice(0,n)
      let temp ='';
      for(const word of tempWord){
          temp += word;
      }
      answer.push(temp);
  }
  console.log(answer)
  return answer;
}