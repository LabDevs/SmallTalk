import React, { useEffect, useContext } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import CategoriesContext from './CategoryContext'

const CategoryList = () => {
  const { categories, setCategories } = useContext(CategoriesContext)
  console.log(CategoriesContext)

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`/api/categories`)
      const data = await response.json()
      setCategories(data)
      console.log(data)
    }
    getCategories()
  }, [])

  return (
    <div className='categories'>
      <CardGroup>
        {categories && categories.map((category) => (
           <Card style={{ width: '18rem' }} key={category.category_id}>
             <Card.Img variant='top' src='https://via.placeholder.com/150' />
             <Card.Body>
               <Card.Title>
                 {category.name}
               </Card.Title>
               <Button variant='info'>
                 Events
               </Button>
             </Card.Body>
           </Card>
         ))}
      </CardGroup>
    </div>
  )
}

export default CategoryList
