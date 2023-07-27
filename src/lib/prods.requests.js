const PRODS = [
    {
      id: 1,
      title: "Dragon Ball Z - Son Goku Entrenando",
      category: "Banpresto",
      price: 959.00,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://megamitoys.com.mx/cdn/shop/products/19487-DRAGON-BALL-Z-CHOSENSHIRETSUDEN-III-vol-3-A-SON-GOKU-01_2400x2400_2351305c-bf4e-4d54-a22a-8f4fe6ef9034_1024x1024.webp?v=1663723467",
      stock: 10,
    },
    {
      id: 2,
      title: "Bardock Figura De Accion",
      category: "Bandai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 1549.00,
      img: "https://megamitoys.com.mx/cdn/shop/products/BLFBAS60333-1_1200x1200_cbb184ab-4939-42e8-bbb4-89f3eb5ef322_1024x1024.webp?v=1682025451",
      stock: 10,
    },
    {
      id: 3,
      title: "Dragon Ball Super - Gohan Beast Special XIV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      category: "Banpresto ",
      price: 809.00,
      stock: 5,
      img: "https://megamitoys.com.mx/cdn/shop/products/88296-Dragon-Ball-Super-Super-Hero-Blood-Of-Saiyans-Specialxiv-00_2400x2400_ee4f0989-9f9d-4ac0-851e-ec2feaab118c_1024x1024.webp?v=1678216897",
    },
    {
      id: 4,
      title: "Dragon Ball Z - Shenlong",
      category: "Banpresto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 1199.00,
      img: "https://megamitoys.com.mx/cdn/shop/products/17047-DragonBallZ-CreatorxCreator-Shenron-_ver.A_-Repeat-1_1345x1943_dc6e510f-2ffb-42a4-b2a4-3e5614ac1fdc_1024x1024.png?v=1665521698",
      stock: 0,
    },
    {
      id: 5,
      title: "Dragon Ball Z - Majin Buu",
      category: "Banpresto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 959.00,
      img: "https://megamitoys.com.mx/cdn/shop/products/19484-DRAGON-BALL-Z-Gxmateria-THE-MAJIN-BUU-01_2400x2400_b7623f01-3445-4766-bcdf-c38be2d3239a_1024x1024.webp?v=1663723922",
      stock: 6,
    },
    {
      id: 6,
      title: "Dragon Ball Z - Freezer Segunda Forma Battle Planet Namek",
      category: "Bandai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
  
      price: 2099.00,
      img: "https://megamitoys.com.mx/cdn/shop/products/6c125519e5c54a1f87c3ffa6e9d3c4e1xl_1200x1200_6b20a8c2-867b-4514-a70b-5eee768b66f8_1024x1024.webp?v=1679097864",
      stock: 6,
    },
  ];
  //ESTO VA A CAMABIAR
  //Simulación de una petición de red que nunca falla
  export const getProds = () => {
    //Las promesas reciben como parametro una funcion
    //Esta funcion a su vez recibe como parametro resolve y rejected, con el fin de mandar un dato correcto o un error.
    return new Promise((res) => {
      setTimeout(() => {
        res(PRODS); //Se resuelve con el array de libros
      }, 5000);
    });
  };
  
  export const getProd = () => {
    //Las promesas reciben como parametro una funcion
    //Esta funcion a su vez recibe como parametro resolve y rejected, con el fin de mandar un dato correcto o un error.
    return new Promise((res) => {
      setTimeout(() => {
        res(PRODS[0]); //Se resuelve con el array con el libro de la posicion [0]
      }, 1500);
    });
  };