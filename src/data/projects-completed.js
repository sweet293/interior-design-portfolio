const data = [
    {
      id: crypto.randomUUID(),
      title: "Eclectic Bohemian Living Room",
      dimension: "30 m²",
      description:
      "The clients requested a vibrant and eclectic living room that reflects their"+ 
      "free-spirited personalities. The design incorporates a mix of vintage finds,"+ 
      "colorful textiles, and natural materials, creating a space that is both inviting"+
      " and unique.",
      cover: "first.jpg",
      additionalImages: ["second.jpg", "third.jpg"]
      
    },
    {
      id: crypto.randomUUID(),
      title: "Minimalist Modern Kitchen in a 2-Story House",
      dimension: "25 m²",
      description:
        "The clients desired a sleek and functional kitchen with a minimalist aesthetic."+ 
        "The design emphasizes clean lines, neutral colors, and high-quality materials, "+
        "creating a sophisticated and timeless space.",
      cover: "second.jpg",
      
    },
    {
      id: crypto.randomUUID(),
      title: "Rustic Farmhouse Bedroom",
      dimension: "20 m²",
      description:
        "The clients requested a cozy and inviting bedroom that evokes the feeling of a"+
        " charming farmhouse. The design incorporates natural wood, soft linens, and vintage"+
        " accents, creating a tranquil and relaxing retreat.",
      
      cover: "third.jpg",
      
    },
    
  ];
  
  const getProducts = () => {
    return data;
  }
  
  export {getProducts};