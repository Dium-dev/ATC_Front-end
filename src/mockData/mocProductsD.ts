interface Brand {
    id: string;
    name: string;
  }
  
  interface Category {
    id: string;
    name: string;
  }
  
  interface Products {
    id: string;
    title: string;
    state: string;
    stock: number;
    price: number;
    availability: number;
    image: string[];
    model: string;
    year: string;
    brand: Brand;
    category: Category;
    description: String;
  }
  export const product:Products[] = [
    {
      id: 'MCO564861395',
      title: 'Farola Hyundai I35 Elantra 2012 - 2016 tipo OEM Halogena',
      state: 'Inactiva',
      stock: 26,
      price: 1079900,
      availability: 10,
      image: ['https://i.ebayimg.com/images/g/rcgAAOSw~2Jjhupf/s-l1600.jpg'],
      model: 'Elantra',
      year: '2012 a 2016',
      brand: {
        id: '425dee5e-5b8a-4d95-9a7b-90bc90ced574',
        name: 'Hyundai',
      },
      category: {
        id: '7f1a877c-67d5-4ab5-9a32-01405f41a74e',
        name: 'Farolas',
      },
      description: ` BA9S T4W 363 1895 233 Super brillante redondo 3D COB LED blanco luces de matrícula de coche bombilla Moto lámpara marcador luz DC 12V
  
  
      Descripción:
       
      Modelo: Ba9s
      Voltaje: 12V DC
      Actual: 0.05A
      Tamaño: 2,45 cm * 0,8 cm (0,96 "* 0,31")
      Lúmenes de flujo: 200LM
      Color: blanco (6000K-6500K)
      Referencia cruzada: BA9S: 53, 57, 182, 257, 1895, 6253, 64111, 64113 ,T11 T4W...
      
      Aplicación: indicador luminoso de grupo de indicadores, luces de estacionamiento, luces traseras, luces de mapa, luces de escenario, luces de maletero, lámpara de placa de matrícula, luz de señal de giro, luz de curva, luz de indicador lateral, luz trasera y luces de respaldo, etc
       
      Paquete incluye:
      1x Ba9s bombilla Led
       
       
      Bajo consumo de energía y baja temperatura.
      Vida útil de larga duración: 50000 horas de trabajo.
      LED ultrabrillante, color único y más vivo.
      Fácil instalación, solo tienes que conectarlo y jugar. `
    },
  ]