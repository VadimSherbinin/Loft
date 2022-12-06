import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { PageCard } from '../../page/PageCard/PageCard'
import { MainLayoit } from '../../layout/MainLayoit'
import { PageHome } from '../../page/PageHome/PageHome'

export function App() {
  return (
    <div className="App">
      <MainLayoit>
        <div className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/products/:productId" element={<PageCard />} />
            </Routes>
          </div>
        </div>
      </MainLayoit>
    </div>
  )
}
