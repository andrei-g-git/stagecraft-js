

export const checkIfStringIsNumeric = (value?: string): boolean =>{
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
}

export const checkTypeOfStringified = (value: string) => {
    const stringValue = String(value);
    if(stringValue === "null"){
        return stringValue;
    } else if((stringValue === "true") || (stringValue === "false")){
        return "boolean";
    } else if(checkIfStringIsNumeric(stringValue)){
        return "number"
    } else return "string";
}    