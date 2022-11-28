function solution(number) {
  var answer = 0;
  
  function getCombinations(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, originArr) => {
      const rest = originArr.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      result.push(...attached);
      });
      return result;
  }
  
  const result = getCombinations(number, 3);
  for(let i=0; i<result.length ;i++){
      if(result[i][0]+result[i][1]+result[i][2]===0)answer++;        
  }
  
  return answer;
}