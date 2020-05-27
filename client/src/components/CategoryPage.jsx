import React, { useEffect, useState } from 'react'
import CategoryEvent from './CategoryEvent'
import { useParams } from 'react-router-dom'
import { Grid, Box, Heading, Stack } from 'grommet'

const CategoryPage = () => {
  const { categoryId } = useParams()
  const [categoryEvents, setCategoryEvents] = useState([])
  const [categoryName, setCategoryName] = useState('')

  // This function will take in a categoryId, which will be provided by the Categories/Topics component as
  // a prop since that component will be making a fetch request to get all categories, which includes the id.
  useEffect(() => {
    async function getEventsByCategory() {
      const response = await fetch(`/api/categories/${categoryId}`)
      const json = await response.json()
      setCategoryEvents(json)
      setCategoryName(json[0].name)
    }
    getEventsByCategory()
  }, [])

  console.log(categoryEvents)

  return (
    <Box>
      <Box>
        <Heading color='#444444' id='categoryHeader' text-align='center'>
          {categoryName}
        </Heading>
      </Box>

      <Box direction='column'>
        <Grid
          rows='medium'
          columns={['auto', '1/2']}
          gap='small'
          responsive='true'
          align='center'
        >
          {categoryEvents &&
            categoryEvents.map((event) => <CategoryEvent event={event} />)}
        </Grid>
      </Box>
    </Box>
  )
}

export default CategoryPage
