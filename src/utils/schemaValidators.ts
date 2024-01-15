export const getErrorMassagesByPropertyName=(obj:Record<string,any>,propertypath: string)=>{
    let value = obj;
    const properties = propertypath.split(".")
    for(let prop of properties){
        if(value[prop]){
            value = value[prop]
        }
        else{
            return undefined
        }
    }
    return value.message

}