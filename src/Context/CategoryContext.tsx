import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type CategoryContextType = {
    currentlySelected : string,
    setCurrentlySelected : Dispatch<SetStateAction<string>>
}

type ChildrenType = {
    children : ReactNode
}

const initState : string = 'New'


const initContextState : CategoryContextType = {
    currentlySelected : "New",
    setCurrentlySelected : () => {}
}
const CategoryContext = createContext<CategoryContextType>(initContextState);



export const CategoryContextProvider = ({ children } : ChildrenType ) : JSX.Element => {

    const [ currentlySelected, setCurrentlySelected ] = useState<string>(initState);

    return <CategoryContext.Provider value={{
            currentlySelected,
            setCurrentlySelected
        }} >

        {children}
    </CategoryContext.Provider>

}


export const useCategoryContext = () => useContext(CategoryContext)

