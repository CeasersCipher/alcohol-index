import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const TypeOfAlcohol = () => {
  const {cocktails, loading} = useGlobalContext();
  console.log(cocktails);
  if(loading){
    return <Loading/>
  }
  if(cocktails.length < 1){
    return(
    <h2 className='section-title'>
      No Cocktails Match The Criteria
    </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default TypeOfAlcohol