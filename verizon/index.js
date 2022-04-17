const arr = [1, 2, 3, 6, 3, 6, 1]


function findPairs (arr){
    let result = [];
    for( let i = 0; i < arr.length ; i++){
        const firstEl = arr[i];
        for(let j = 1 ; j < arr.length ; j++){
            if ( firstEl === arr[j]){
                debugger
                console.log(firstEl)
                if( result.includes(firstEl)){
                    break
                }
                result.push(firstEl)
            }
        }
    }
    return result
}

console.log(findPairs(arr))

/*
iterate through the arrray
let result = empty array []
fisrt for loop will be the main num holder
second  for loop will allow for the next num to be able to check
if el[i] === el[j]
    if( result.includes(el[i]))
    break
    result.push(el[i])
return result

*/
