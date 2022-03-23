import { useState, useEffect } from "react/cjs/react.development";




function ApiTest(){

    const [data, setData] = useState('');
    const [error, setError] = useState([]);

    // async function apiCall(){
    //   const res = await fetch('https://api.interview.rlliquidators.com')
    //   if(res.ok){
    //       const data = await res.json();
    //       setData(data)
    //       console.log("Inside IF conditon")

    //   }

    //   return data
    // }

    // apiCall()

  useEffect(() => {
    async function apiCall() {
      const res = await fetch('https://api.interview.rlliquidators.com')
      if (res.ok) {
        const data = await res.json();
        setData(data)
        console.log("Inside IF conditon")

      }

      return data
    }

    apiCall()

  }, [])


//Link : https://stackoverflow.com/questions/61899340/receiving-a-cors-error-when-to-my-react-app-using-fetch-function


// window.fetch('https://api.interview.rlliquidators.com',{header:{'Access-Control-Allow-Origin': 'http://localhost:3000'}})
// window.fetch('https://localhost:4000/rll', { mode: 'cors' })

// window.fetch('https://api.interview.rlliquidators.com',{
  //   method:"GET",
  //   headers:{'Access-Control-Allow-Origin': '*'}
  // })
  // fetch('https://localhost:4000/rll')
  // fetch('https://localhost:4000/rll', {
    // method:'GET',
    // mode: 'cors' })

  //   fetch('https://api.interview.rlliquidators.com')
  //   .then((response) => {
  //   return response.json();
  // })
  // .then((json) => {
  //   // console.log(json);
  //   setData(json)
  // })
  // .catch(errors =>{
  //     // console.log("Data :", errors)
  //     setError(errors)
  //     return errors
  // })

  console.log("Outside of useEffect : ",data)


    return(
        <>
        <h1>Inside API test</h1>
        </>
    )
}


export default ApiTest;
