

/*



*/


const arr = [1,5,4,2,3];

    const sorted = (arr) => {

        for (let i = 0; i < arr.length; i++) {
          for(let j = 0 ; j < arr.length; j++){
            let firstNum = arr[j];
            let nextNum = arr[j+1];
            if( firstNum > nextNum){
                console.log('swap')
                arr[j+1] = firstNum
                arr[j] = nextNum
                
          }
            }






            //check if firstNum is greater than nextNum if true switch places



            // console.log(arr[i])
            // console.log('-------')
            // for (let j = 0; j < arr.length; j++) {
            //     let nextNum = arr[j];
            // }

        }
        return arr
    }


    console.log(sorted(arr))

// if (5 > 4) {
//     arr[0] = 3
//     []
// }



/*

 two for loops, one inside the other
 declare variable small
 declare another variable big
 start with empty array, if

*/
