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
}
export const productos:Products[] = [
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
  },
  {
    id: 'MCO552336049',
    title: 'Farola Hyundai I35 Elantra 2012 2016 Drl Tubo Led Proyector',
    state: 'Inactiva',
    stock: 26,
    price: 2389900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/Y-cAAOSwCVBj2BGl/s-l1600.jpg'],
    model: '',
    year: '',
    brand: {
      id: '9ad132a3-afd0-4790-8ac5-9b7808fb5245',
      name: 'Hyundai',
    },
    category: {
      id: '7f1a877c-67d5-4ab5-9a32-01405f41a74e',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529773',
    title: 'Farola Hyundai I35 Elantra 2012 - 2016 Drl Tubo Led laser',
    state: 'Inactiva',
    stock: 26,
    price: 2489900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/Lm4AAOSw6CRj2BGm/s-l1600.jpg'],
    model: '',
    year: '1998-2002',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Audi',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529776',
    title: 'Farola Hyundai I35 Elantra 2012  -  2016 Drl Tubo Led laser',
    state: 'Activa',
    stock: 26,
    price: 2489900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/9QgAAOSwCBFj2BGm/s-l1600.jpg'],
    model: '',
    year: '2007-2009',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529784',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led+ Secuencial Giro',
    state: 'Activa',
    stock: 26,
    price: 2289900,
    availability: 26,
    image: ['https://i.postimg.cc/hGXcvMz4/H-i3r.jpg'],
    model: '',
    year: '2002-2005',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529786',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led Full Led Negra',
    state: 'Activa',
    stock: 26,
    price: 2019900,
    availability: 26,
    image: ['https://i.postimg.cc/yN2BZ9cm/H-i3b.jpg'],
    model: '',
    year: '2012 - 2016',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529792',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led Full Led Ahumado',
    state: 'Activa',
    stock: 26,
    price: 1929900,
    availability: 26,
    image: ['https://i.postimg.cc/ZR3mFRx1/H-i3s.jpg'],
    model: '',
    year: '2012 - 2016',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas delanteras para automotores',
    },
  },
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
  },
  {
    id: 'MCO552336049',
    title: 'Farola Hyundai I35 Elantra 2012 2016 Drl Tubo Led Proyector',
    state: 'Inactiva',
    stock: 26,
    price: 2389900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/Y-cAAOSwCVBj2BGl/s-l1600.jpg'],
    model: '',
    year: '',
    brand: {
      id: '9ad132a3-afd0-4790-8ac5-9b7808fb5245',
      name: 'Hyundai',
    },
    category: {
      id: '7f1a877c-67d5-4ab5-9a32-01405f41a74e',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529773',
    title: 'Farola Hyundai I35 Elantra 2012 - 2016 Drl Tubo Led laser',
    state: 'Inactiva',
    stock: 26,
    price: 2489900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/Lm4AAOSw6CRj2BGm/s-l1600.jpg'],
    model: '',
    year: '1998-2002',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Audi',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529776',
    title: 'Farola Hyundai I35 Elantra 2012  -  2016 Drl Tubo Led laser',
    state: 'Activa',
    stock: 26,
    price: 2489900,
    availability: 26,
    image: ['https://i.ebayimg.com/images/g/9QgAAOSwCBFj2BGm/s-l1600.jpg'],
    model: '',
    year: '2007-2009',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529784',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led+ Secuencial Giro',
    state: 'Activa',
    stock: 26,
    price: 2289900,
    availability: 26,
    image: ['https://i.postimg.cc/hGXcvMz4/H-i3r.jpg'],
    model: '',
    year: '2002-2005',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529786',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led Full Led Negra',
    state: 'Activa',
    stock: 26,
    price: 2019900,
    availability: 26,
    image: ['https://i.postimg.cc/yN2BZ9cm/H-i3b.jpg'],
    model: '',
    year: '2012 - 2016',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas',
    },
  },
  {
    id: 'MCO558529792',
    title: 'Stop Hyundai i35 Elantra 2012-2016 Tubo Led Full Led Ahumado',
    state: 'Activa',
    stock: 26,
    price: 1929900,
    availability: 26,
    image: ['https://i.postimg.cc/ZR3mFRx1/H-i3s.jpg'],
    model: '',
    year: '2012 - 2016',
    brand: {
      id: '1bb83f8d-a879-4e01-9fcc-2247f70613ee',
      name: 'Hyundai',
    },
    category: {
      id: 'cece8428-2cd6-449f-8aa8-4809bbe269b1',
      name: 'Farolas delanteras para automotores',
    },
  }
];
