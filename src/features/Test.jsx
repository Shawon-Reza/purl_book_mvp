import React from 'react'
import { api } from '../services/axios_instances'
import { useQuery } from '@tanstack/react-query'

const Test = () => {

  const response = api.get('/').then((res) => {
    console.log(res.data)
    console.log("first")
  })

  const { ispending, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await api.get('/')
      return response.data
    }
  })
  console.log("tanstack post:",data)


  


  return (
    <div className='text-7xl'>Test</div>
  )
}

export default Test