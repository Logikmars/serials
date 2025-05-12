import React from 'react';
import './CategoriesPage.scss';
import { useParams } from 'react-router-dom';
interface Props {
}
const CategoriesPage: React.FC<Props> = ({ }) => {

    const selectedCategory = useParams()

    return (
        <div className='CategoriesPage'>

        </div>
    )
};
export default CategoriesPage