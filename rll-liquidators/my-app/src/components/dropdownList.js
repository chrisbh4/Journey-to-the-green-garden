






function DropDown(apiData){
    const test= Object.entries(apiData.data)
    console.log("Test :",test)


    //* iterate through the objects
    // const dataAdjuster = (obj) =>{
    //     const organizedData = {}
    //     obj.forEach((data)=>{
    //         if(!organizedData[data.id]){
    //             organizedData[data.id] = data;
    //         }else{
    //             return
    //         }
    //     })

    //     return organizedData
    // }

    const iterator = (arr) =>{
        arr.forEach((data)=>{
            // const key = data[0];
            const value = data[1];

            return(
                <>
                    {/* <List  value={value}/> */}
                    <ul>
                        <li>{value}</li>
                    </ul>
                </>
            )
        })
    }


    // const result = dataAdjuster(apiData.data)

    // console.log("Result :", result)
    return(
        <>
            <h1> Inside Drop </h1>
            {test.forEach((data)=>{
            // const key = data[0];
            const value = data[1];

            return(
                <div>
                        <p>{value}</p>
                </div>
            )
        })}
        </>
    )
}



export default DropDown;
