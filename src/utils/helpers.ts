export const convertToSlug = (text : string) => text.toLowerCase().split(" ").join("-")

export const shrinkText = (text : string, wordLimit : number = 9) : string => {

    const arr : string[] = text.split(" ");
    const newArr : string[] = arr.slice(0,wordLimit);
    
    return newArr.join(" ").concat("...")
}


export const addComasToNum = (num : number) : string => {
    return new Intl.NumberFormat('en-US',{ maximumSignificantDigits : 3 }).format(num)
}

// add letters like M, K at the end of the number
export const addLetterToNum = (num : number) : string => {
    if (num >= 1000000000) {
        const billion = num / 1000000000;
        return billion.toFixed(1) + "B";
    } else if (num >= 1000000) {
        const crores = num / 1000000;
        return crores.toFixed(2) + "M";
    } else if (num >= 1000) {
        const lakhs = num / 1000;
        return lakhs.toFixed(1) + "K";
    } else {
        return num.toString(); // Return the number as is if it's less than 1 lakh
    }
}