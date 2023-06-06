const isArry=(arr)=>{
    if(arr===undefined || arr=== null || arr.length===0){
        return true;
    }
    return false;
}

const dumpLogs=(message)=>{
    console.log(message);

    //send it to a tool for tracking
}

export {isArry, dumpLogs};