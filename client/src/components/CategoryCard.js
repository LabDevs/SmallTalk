import React from 'react'
import { Box, Text } from 'grommet'

const CategoryCard = props => {
  return (
    <div>
      <Box direction='row' justify='space-around' align='center' pad='large'>
        <Box
          border
          pad='xlarge'
          align='center'
          alignContent='center'
          round
          gap='medium'
          hoverIndicator
          onClick={() =>
            window.location.replace(`/categories/${props.category.id}`)}
        >
          {props.icon}
          <Text textAlign='end'>{props.category.name}</Text>
        </Box>
      </Box>
    </div>
  )
}

export default CategoryCard
