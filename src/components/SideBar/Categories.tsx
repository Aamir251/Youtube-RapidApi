import { useCategoryContext } from "../../Context/CategoryContext";
import { Category, categories } from "../../utils/constants";
import { Stack } from "@mui/material";

type CategorySelectorType = {
    name : string,
    icon : JSX.Element,
}
const Categories = () => {

  return (
    <Stack gap={1} >
        {
            categories.map((category : Category) => (
                <CategorySelector
                    key={category.name}
                    name={category.name}
                    icon={category.icon}
                /> 
            ))
        }
    </Stack>
  )
}

export default Categories;

const CategorySelector = ({ name, icon } : CategorySelectorType) => {
    const { currentlySelected, setCurrentlySelected } = useCategoryContext();
    const isCurrentlySelected = currentlySelected === name;

    return <button onClick={() => setCurrentlySelected(name)} className={`category-btn ${isCurrentlySelected && 'is-selected'}`} >
        <span>{icon}</span>
        <span>{name}</span>
    </button>
}
