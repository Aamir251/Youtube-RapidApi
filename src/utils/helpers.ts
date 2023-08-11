export const convertToSlug = (text : string) => text.toLowerCase().split(" ").join("-")

export const shrinkText = (text : string, wordLimit : number = 9) : string => {

    const arr : string[] = text.split(" ");
    const newArr : string[] = arr.slice(0,wordLimit);
    
    return newArr.join(" ").concat("...")
}


export const addComasToNum = (num : number) : string => {
    return new Intl.NumberFormat('en-US',{ maximumSignificantDigits : 3 }).format(num)
}