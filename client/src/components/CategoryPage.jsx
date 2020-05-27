import React, { useEffect, useState, useContext } from 'react'
import CategoryEvent from './CategoryEvent'
import { useParams } from 'react-router-dom'
import { Grid, Box, Heading, Text } from 'grommet'
import CategoriesContext from '../contexts/CategoriesContext'

const CategoryPage = () => {
  const { categoryId } = useParams()
  const { categoryDescriptions } = useContext(CategoriesContext)
  const [categoryEvents, setCategoryEvents] = useState([])
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    async function getEventsByCategory () {
      const response = await fetch(`/api/categories/${categoryId}`)
      const json = await response.json()
      setCategoryEvents(json)
      console.log(json)
      setCategoryName(json[0].name)
    }
    getEventsByCategory()
  }, [])

  return (
    <Box responsive='true'>
      <Box responsive='true'>
        <Heading color='#444444' className='categoryHeader' text-align='center'>
          {categoryName}
        </Heading>
        {categoryName === 'General' ? (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[0]}
          </Text>
        ) : categoryName === 'Gaming' ? (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[1]}
          </Text>
        ) : categoryName === 'Beauty' ? (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[2]}
          </Text>
        ) : categoryName === 'Sports' ? (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[3]}
          </Text>
        ) : categoryName === 'Food' ? (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[4]}
          </Text>
        ) : (
          <Text size='large' textAlign='center'>
            {categoryDescriptions[5]}
          </Text>
        )}
      </Box>

      <Box responsive='true' direction='column'>
        <Grid
          rows='medium'
          columns={['auto', '1/2']}
          gap='small'
          responsive='true'
          align='center'
        >
          {categoryEvents &&
            categoryEvents.map(event => <CategoryEvent event={event} />)}
        </Grid>
      </Box>
    </Box>
  )
}

export default CategoryPage
