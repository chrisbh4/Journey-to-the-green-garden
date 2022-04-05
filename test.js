



// const twoSec = async() =>{

//     const url = await fetch("www.fakeURL.com/:id")

//     const res = await res.json();

//     if(res.ok){
//         return res
//     }

// }


// const promise = new Promise(res => res(2));
// promise.then(v => {
//   console.log(v);
//   return v * 2;
// })
//   .then(v => {
//     console.log(v);
//     return v * 2;
//   })
//   .finally(v => {
//     console.log(v);
//     return v * 2;
//   })
//   .then(v => {
//     console.log(v);
//   });



// function calculateSalary(job) {
//     var income = 5;
//     if (job) {
//       var income = 50;
//     }
//     {
//       var income = 500;
//       {
//         var income = 5000;
//       }
//     }

//     return income;
//   }

//   console.log(calculateSalary(true));


const arr = [4,5,1,2,3];


const rotate = (arr) =>{

    let min = 0;

    for(let i = 0 ; i < arr.length ; i++){
        if( arr[i] > arr[i+1]){
            min = i
            break
        }

    }
    return min + 1
}
console.log(rotate(arr))


// two tables
/*
Customers
id pk
name string
country string


orders
id
customer Id FK
orderDate data




*/
