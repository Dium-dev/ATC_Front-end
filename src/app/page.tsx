import MainCarousel from '~/components/carousels/mainCarousel';
import Card from '../components/Card/card';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="flex justify-center items-center m-16 gap-5">
        <Card
          title="Llanta de caucho tamaño mediano para marcas mazda"
          price="55.20"
          nota="Garantie"
          imageSrc="/Actualizatucarro_Avatar_N.jpg"
        />
        <Card
          title="Llanta de caucho tamaño mediano para marcas mazda "
          price="55.20"
          nota="Garantie"
          imageSrc="/Actualizatucarro_Avatar_N.jpg"
        />
        <Card
          title="Llanta de caucho tamaño mediano para marcas mazda"
          price="55.20"
          nota="Garantie"
          imageSrc="/Actualizatucarro_Avatar_N.jpg"
        />
        <Card
          title="Llanta de caucho tamaño mediano para marcas mazda"
          price="55.20"
          nota="Garantie"
          imageSrc="/Actualizatucarro_Avatar_N.jpg"
        />
      </div>
    </>
  );
}
