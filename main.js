const displayData = (content)=>{
    result.value += content
}

const clearCalcScreen = ()=>{
    result.value = ""
}

const evaluateExpr = ()=>{
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "Invalid Expression"
    }
}

const removeLastCalcItem = ()=>{
    result.value = result.value.slice(0,-1)
}