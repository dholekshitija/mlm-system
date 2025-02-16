import React from 'react'
import UserSidebar from '../../components/sidebar/UserSidebar'
import Navbar from '../../components/sidebar/Navbar'
import { Box } from '@mui/material'
import Lists from '../Setting/Lists'

export default function UserSetting() {
  return (
    <div>
      <Navbar/>
      <Box height={30}/>
      <Box sx={{display: "flex"}}>
      <UserSidebar/>
      <Box component="main" sx={{flexGrow: 1, p:3}}>
        <Lists/>

      </Box>
      </Box>
      

    </div>
  )
}
