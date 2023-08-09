import { Link, useParams } from "react-router-dom";
import { Category, categories } from "../../utils/constants";
import { Stack } from "@mui/material";
import { convertToSlug } from "../../utils/helpers";

type CategorySelectorType = {
    name : string,
    icon : JSX.Element,
}

const isActiveLink = (pageSlug : string = 'new', linkSlug : string) => {
    return pageSlug === linkSlug
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
    const href = name === 'Home' ? "/" : `/category/${convertToSlug(name)}`
    const { id : pageSlug } = useParams()
    
    const isActive = isActiveLink(pageSlug, convertToSlug(name));

    return <Link to={href} 
            className={`category-btn ${isActive && 'is-selected'}`} 
        >
        <span>{icon}</span>
        <span>{name}</span>
    </Link>
}
