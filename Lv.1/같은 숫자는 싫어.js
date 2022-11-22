function solution(arr) // 시간복잡도 & 공간복잡도는 마치 시간를 돈으로 사는것과 비슷한 것인가
{                      // Array.prototype.reverse(); 배열은 reverse가 가능하다.
    var answer = [];
    const len = arr.length;
    let el = arr.pop();
    
    for(let i=0; i<len ;i++){
       const v = arr.pop();
       if(v!==el)answer.push(el);
        el = v;
    }
    
    return answer.reverse();
}