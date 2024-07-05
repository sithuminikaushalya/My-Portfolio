"use client"

import React from 'react'
import UseScreemSize from './hooks/UseScreemSize'

const ResponsiveComponent = ({children}) => {

const size = UseScreemSize();

  return (
    <>
    {children(size)}
    </>
  )
}

export default ResponsiveComponent