import React from 'react'
import ButtonComponent from '../button/button'
// const title = (texto : string) => {
//     return (
//         <button>{texto}</button>
//     )
// }

const navigation = [
    {
        label: "Categorías",
        route: ""
    },
    {
        label: "Marcas",
        route: "",
    },
    {
        label: "Precio",
        route: "",
    }
    
]

const FilterBar = () => {
  
  return (
      <div className='h-fit w-[1080px] w-fit min-w-[800px] flex flex-row justify-between items-center bg-text-dm'>
          <div className='flex flex-row'>
              {navigation.map((e,id) => {
                    return (
                        <div className='pr-8' key={id}>
                            <ButtonComponent type='white' text={e.label}/>
                        </div>
                    )
              })}
          </div>
          <div>
              <ButtonComponent type='search'/>
          </div>

          
    </div>
  )
}

export default FilterBar
