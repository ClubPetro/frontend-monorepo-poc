import React from 'react'
import { Search } from '@material-ui/icons'
import { InputAdornment } from '@material-ui/core'

import Input from './styles'

const SearchInput = ({ ...props }) => {
  return (
    <Input
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      {...props}
    />
  )
}

export default SearchInput
