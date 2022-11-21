function solution(price, money, count) {
    //이전에 냈던것을 기억하면서 특정위치에서 0보다 크거나 같으면 0리턴, 나머지는 (-금액)*-1 리턴
    var answer = -1;
    const mem = [money];
    for(let i=0; i<count; i++){ //어차피 push할거라 인덱스 상관x
        mem.push(mem[i]-price*(i+1));
    }
    if(mem[count]>=0)return 0;
    else answer = mem[count]*(-1);
    
    return answer;
}
//#1. [20, 17,  11  ,  2  , -10  ]
//      0. 1 3  2 3   3 3   4,3