






function DropDown(apiData){
    const test= Object.keys(apiData.data)
    // console.log("Test :",test)
    const data= apiData
    // console.log("DropDown :", apiData)

    //* iterate through the objects
    const dataAdjuster = (obj) =>{
        const organizedData = {}
        obj.forEach((data)=>{
            if(!organizedData[data.id]){
                organizedData[data.id] = data;
            }else{
                return
            }
        })

        return organizedData
    }


    // const result = dataAdjuster(apiData.data)

    // console.log("Result :", result)
    return(
        <>
            <h1> Inside Drop </h1>
        </>
    )
}



export default DropDown;
