const data = [
    {
      id: crypto.randomUUID(),
      title: "prima",
      price: 109.95,
      description:
        "first project",
      cover: "first.jpg",
      
    },
    {
      id: crypto.randomUUID(),
      title: "a doua",
      price: 22.3,
      description:
        "second project",
      cover: "second.jpg",
      
    },
    {
      id: crypto.randomUUID(),
      title: "a treia",
      price: 55.99,
      description:
        "third project",
      
      cover: "third.jpg",
      
    },
    
  ];
  
  const getProducts = () => {
    return data;
  }
  
  export {getProducts};