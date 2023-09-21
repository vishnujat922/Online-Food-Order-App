import React from 'react'
import Layout from '../components/layouts/layouts'
import { Box } from '@mui/material'

const NotFound = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </Box>
    </Layout>
  )
}

export default NotFound