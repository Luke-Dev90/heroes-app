import React, { useMemo } from 'react'
import { getHereosByPublisher } from '../helpers'
import { HeroeCard } from './';

export const HeroList = ( {publisher}) => {

    const heroes = useMemo( () =>  getHereosByPublisher(publisher) , [publisher]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map( hero => (
            <HeroeCard 
              key={hero.id}
              {...hero}
            />
        ))
      }
    </div>
  )
}
