function solution(nums) {
  var answer = 0;
  
  function getCombinations(arr, selectNum){ //1.조합함수
      if(selectNum===1) return arr.map((el)=>[el]);
      const result =[];
      arr.forEach((fixed,index,originArr)=>{
          const rest = originArr.slice(index+1);
          const combinations = getCombinations(rest, selectNum-1);
          const attached = combinations.map((el)=>[fixed, ...el]);
          //attached => [[] [] [] []....]
          //spread 안쓰면 [[[][][][][]....]]
          result.push(...attached);
      })
      return result;
  }
  function isPrime(num){ //각원소의 수는 1이상이고 3개의 원소를 더하므로 무조건 3이상
      const sqrt = Math.sqrt(num);
      if(sqrt===parseInt(sqrt))return 0;
      for(let i=3; i<num;i++){
          if(num%i===0)return 0;
      }
      return 1;
  } 
  
  const combination = getCombinations(nums, 3);
  result = combination.map((el)=>el[0]+el[1]+el[2]);
  
  for(let i=0; i<result.length;i++){
      answer += isPrime(result[i]);
  }
  
  return answer;
}