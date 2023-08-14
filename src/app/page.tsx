import icon from '../components/icons/icon1.svg'
import Image from 'next/image';
export default function Home() {
  return <>
    <Image src={icon} width={100} height={100} alt='icono de prueba 1' />
  </>;
}
