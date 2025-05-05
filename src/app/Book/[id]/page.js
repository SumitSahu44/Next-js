"use client"
import React from 'react'
import BookPage from '@/components/pages/Book'
const page = ({params}) => {
  return (
    <div>
       <BookPage id={params.id}/>
     </div>
  )
}

export default page
