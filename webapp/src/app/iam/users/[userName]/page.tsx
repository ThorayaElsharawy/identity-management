import { Metadata } from 'next'
import React from 'react'

type MetadataProps = {
  params: {
    userName: string
  }
}

export const generateMetadata = ({ params }: MetadataProps): Metadata => {
  return {
    title: `${params.userName}`
  }
}

type UserProps = {
  params: {
    userName: string
  }
}

export default function User({ params }: UserProps) {

  console.log('cjkern', params.userName)
  return (
    <div>{params.userName}</div>
  )
}
