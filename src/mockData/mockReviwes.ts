interface Reviews {
    description: string;
    userImage: string;
    rating: number;
    userName: string;
  }

const reviews: Reviews[] = [
    {
      description: '¡Me encantó el producto! La calidad es excelente y el servicio al cliente fue muy amable. Definitivamente lo recomendaré¡Me encantó el producto! La calidad es excelente y el servicio al cliente fue muy amable. Definitivamente lo recomendaré.¡Me encantó el producto! La calidad es excelente y el servicio al cliente fue muy amable. Definitivamente lo recomendaré.¡Me encantó el producto! La calidad es excelente y el servicio al cliente fue muy amable. Definitivamente lo recomendaré.',
      userImage: 'https://i.ebayimg.com/images/g/Lm4AAOSw6CRj2BGm/s-l1600.jpg',
      rating: 5,
      userName: 'Juan Pérez',
    },
    {
      description: 'El producto superó mis expectativas. La entrega fue rápida y todo llegó en perfecto estado. ¡Gracias!',
      userImage: 'URL_IMAGEN_USUARIO_2',
      rating: 4,
      userName: 'María González',
    },
    {
      description: 'Estoy muy satisfecho con mi compra. El producto es de alta calidad y el proceso de compra fue muy fácil.',
      userImage: 'URL_IMAGEN_USUARIO_3',
      rating: 5,
      userName: 'Carlos Rodríguez',
    },
    {
      description: 'El producto llegó tarde y tenía algunos defectos. No estoy contento con la experiencia de compra.',
      userImage: 'URL_IMAGEN_USUARIO_4',
      rating: 2,
      userName: 'Laura López',
    },
    {
      description: 'Buena relación calidad-precio. Estoy satisfecho con el producto y el servicio.',
      userImage: 'URL_IMAGEN_USUARIO_5',
      rating: 4,
      userName: 'Ana Martínez',
    },
  ];
  
  export default reviews;
  