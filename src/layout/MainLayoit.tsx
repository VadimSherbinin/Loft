import React, { FC } from 'react'
import { Asside } from '../components/Asside/Asside'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

interface IMainLayoit {
  children: React.ReactNode;
}

export const MainLayoit: FC<IMainLayoit> = ({ children }) => {
  return (
    <>
      <Asside />
      <Header />
      {children}
      <Footer />
    </>
  )
}
