'use client'

import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <Image src='/assets/loading-spinner.svg' alt='Loading...' width={200} height={200} />
  )
}

export default Loading
