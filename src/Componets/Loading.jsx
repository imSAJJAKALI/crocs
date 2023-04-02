import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div style={{height:"100vh",textAlign:"center"}} >
        <Spinner size={'xl'}/>
    </div>
  )
}

export default Loading