import React from 'react'

const title = (texto : string) => {
    return (
        <button>{texto}</button>
    )
}

const categories = [
    "Categorías", "Marcas", "Precio"
]

const FilterBar = () => {
  
  return (
      <div className='min-h-[44px] w-[1080px] h-fit flex flex-row justify-between bg-text-dm'>
          <div className='flex flex-row'>
              {categories.map((e,id) => {
                    return (
                        <div className='pr-8'key={id}>
                            <h1 >{title(e)}</h1>
                        </div>
                    )
              })}
          </div>
          <div>
              <button>Search</button>
          </div>

          
    </div>
  )
}

export default FilterBar
