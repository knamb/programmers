function solution(s){
  var answer = true;
  const stack = [];
  for(let i=0; i<s.length;i++){
      if(s[i]==='(')stack.push('(');
      else if(stack.length!==0 && s[i]===')')stack.pop();
      else if(stack.length===0 && s[i]===')')return false;
  }
  if(stack.length===0)answer= true;
  else answer = false

  return answer;
}