function solution(before, after) { 
  var answer = '';
  after = Array.from(after);
  afterIndex = [];
  
  for(let i=0 ; i<before.length; i++){   
      let index = after.findIndex((el)=> before[i] === el);
      if(index!== -1) answer+= after[index];
      after[index] = null;
  }
  console.log(before, answer)
  if(before === answer) answer = 1;
  else answer = 0;
  
  return answer;
}