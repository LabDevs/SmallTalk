import React from 'react'
import { Box, Text } from 'grommet'

const CategoryCard = props => {
  return (
    <div>
      <Box direction='row' justify='center' align='center' pad='large'>
        <Box
          border
          pad='xlarge'
          align='center'
          alignContent='center'
          width='medium'
          round='small'
          border={{ color: '#17539D', size: 'medium' }}
          hoverIndicator={{ color: '#D3EBF9' }}
          onClick={() =>
            window.location.replace(`/categories/${props.category.id}`)
          }
        >
          {props.icon}
          <Text margin={{ top: 'small' }} size='xlarge' textAlign='end'>
            {props.category.name}
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default CategoryCard
