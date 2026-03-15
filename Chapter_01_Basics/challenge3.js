
//Normalized: locator not found after timeout Category: TIMEOUT

function locatorTextChange(message){
    const normalizedMessage = message.trim().toLowerCase()

    let category ="GENERAL";
    if(normalizedMessage.includes("timeout")){
        category = "TIMEOUT"
    }else if(normalizedMessage.includes("locator")){
        category = "LOCATOR"
    }

    console.log(`Normalized: ${normalizedMessage} Category: ${category}` )
}


rawMessage = " Locator not found after TIMEOUT "
locatorTextChange(rawMessage)
