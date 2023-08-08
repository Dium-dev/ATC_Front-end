import React from 'react'
import ButtonCarrete from '../buttonCarrete/button'
// const title = (texto : string) => {
//     return (
//         <button>{texto}</button>
//     )
// }

const categories = [
    "Categorías", "Marcas", "Precio"
]

const FilterBar = () => {
  
  return (
      <div className='h-fit w-[1080px] w-fit min-w-[800px] flex flex-row justify-between items-center bg-text-dm'>
          <div className='flex flex-row'>
              {categories.map((e,id) => {
                    return (
                        <div className='pr-8' key={id}>
                            <ButtonCarrete type='white' text={e}/>
                        </div>
                    )
              })}
          </div>
          <div>
              <ButtonCarrete type='search'/>
          </div>

          
    </div>
  )
}

export default FilterBar
