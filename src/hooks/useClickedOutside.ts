import { useEffect, useState, RefObject } from 'react';


type ReturnType = {
    isClickedOutside : boolean,
}

export const useClickedOutside = (ref  : RefObject<HTMLElement>, callback : Function) : ReturnType => {

    const [ isClickedOutside, setIsClickedOutside ] = useState<boolean>(false)
    
    useEffect(() => {
        let timeoutId : NodeJS.Timeout;

        const handleClick = (e : MouseEvent) : void => {
            setIsClickedOutside(false)
            const clickedElement = e.target as HTMLElement;
            // this means the target was clicked inside
            if(ref.current && ref.current.contains(clickedElement)) return 
            
            // else user clicked outside our target element
            setIsClickedOutside(true);
            callback()
            timeoutId = setTimeout(() => {
                setIsClickedOutside(false)
            },50)
        }

        if(ref.current) {
            document.addEventListener('click', handleClick)
        }

        return () => {
            document.removeEventListener('click', handleClick)
            clearTimeout(timeoutId)
        }

    },[ref])


    return {
        isClickedOutside
    }

}