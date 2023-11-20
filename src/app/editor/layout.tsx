import { Navigationbar } from '@/components/UI/AppBar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function layout({ children }: Props) {
  return (
    <>
      <Navigationbar />
      {children}
    </>
  )
}

export default layout