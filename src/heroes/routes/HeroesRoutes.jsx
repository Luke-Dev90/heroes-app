import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPage/>}/>

            {/* Search, Hero by id */}
            <Route path='hero/:id' element={<HeroPage/>}/>
            <Route path='search' element={<SearchPage/>} />

            <Route path='/' element={<Navigate to="/marvel" />} />
        </Routes>
        </div>
    </>
  )
}
