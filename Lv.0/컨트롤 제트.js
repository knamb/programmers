function solution(s) {  
  var answer = 0;
  const arr = s.split(' ');
  for(let i=0;i<arr.length;i++){
      if(arr[i]==='Z'&& i!==0){
          arr.splice(i-1,2);
          i = i-3
      }else if(arr[i]==='Z'&&i===0){
          arr.splice(i,1);
          i = i-2;
      }
  }
  for(const el of arr){
      answer += parseInt(el);
  }
  
  return answer;
}
