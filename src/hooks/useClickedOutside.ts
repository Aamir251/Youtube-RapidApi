import { useEffect, useState } from 'react';


type ReturnType = {
    isClickedOutside : boolean
}

export const useClickedOutside = (ref  : React.RefObject<HTMLElement>) : ReturnType => {

    const [ isClickedOutside, setIsClickedOutside ] = useState<boolean>(false)
    
    useEffect(() => {
        
        const handleClick = (e : MouseEvent) : void => {
            const clickedElement = e.target as HTMLElement;
            // this means the target was clicked inside
            if(ref.current && ref.current.contains(clickedElement)) {
                setIsClickedOutside(false)
                return
            }
            // else user clicked outside our target element
            setIsClickedOutside(true)
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)

    },[ref])

    return {
        isClickedOutside
    }

}