'use client'
import { useState, useEffect, useCallback} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

interface Slide {
  url: string;
}


const slides = [
    {
     url: "https://www.megautos.com/wp-content/uploads/2021/01/autorepuestos-en-linea.jpg"
    },
   
      {
     url: "https://www.comparaonline.cl/blog-statics/cl/uploads/2014/04/CC3B3mo_evitar_una_estafa_en_el_taller_mecC3A1nico__uuck6h.jpg"
    },
       {
     url: "https://www.autoparteseltaca.com.ar/img/banner-02.jpg"
    },
        {
     url: "https://www.rutamotor.com/wp-content/uploads/2022/02/Piezas-delicadas-del-vehiculo.jpg"
    },
]


const MainCarrousel: React.FC  = () => {
    
const [current, setCurrent] = useState<number>(0);

  const prev = () => {

    setCurrent(cur => cur === 0 ? slides.length - 1 : cur -1 )

  };

  const next = useCallback(() => {
   setCurrent(cur => cur === slides.length - 1 ? 0 : cur + 1  )
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [current, next]);
  
  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
          
          <div style={{backgroundImage: `url(${slides[current].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-200'></div>
          
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-background-lm text-text-dm cursor-pointer bg-opacity-40  ' onClick={prev}>
        <BsChevronCompactLeft size={30} />
        
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-background-lm text-text-dm cursor-pointer bg-opacity-40 ' onClick={next}>
        <BsChevronCompactRight size={30} />
      </div>
      <div className='flex top-4 justify-center py-2 cursor-pointer'>
        {slides.map((slide, index) => (
          <div key={index} onClick={() => setCurrent(index)} className={current===index? "text-primary-lm": "text-primary-dm"}>
            <RxDotFilled size={30}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainCarrousel
