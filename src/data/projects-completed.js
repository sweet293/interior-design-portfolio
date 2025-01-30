const data = [
    {
      id: "eclectic-bohemian-living-room",
      title: "Eclectic Bohemian Living Room",
      dimension: "30 m²",
      description:
      "The clients requested a vibrant and eclectic living room that reflects their"+ 
      "free-spirited personalities. The design incorporates a mix of vintage finds,"+ 
      "colorful textiles, and natural materials, creating a space that is both inviting"+
      " and unique.",
      cover: "living1.jpg",
      additionalImages: ["living1.jpg", "living2.jpg", "living3.jpg", "living4.jpg"]
      
    },
    {
      id: "minimalist-modern-kitchen",
      title: "Minimalist Modern Kitchen in a 2-Story House",
      dimension: "25 m²",
      description:
        "The clients desired a sleek and functional kitchen with a minimalist aesthetic."+ 
        "The design emphasizes clean lines, neutral colors, and high-quality materials, "+
        "creating a sophisticated and timeless space.",
      cover: "kitchen1.jpg",
      additionalImages: ["kitchen1.jpg", "kitchen2.jpg", "kitchen3.jpg", "kitchen3.jpg", "kitchen4.jpg", "kitchen5.jpg", "kitchen6.jpg", "kitchen7.jpg", "kitchen8.jpg", "kitchen9.jpg"]

    },
    {
      id: "rustic-farmhouse-bedroom",
      title: "Rustic Farmhouse Bedroom",
      dimension: "20 m²",
      description:
        "The clients requested a cozy and inviting bedroom that evokes the feeling of a"+
        " charming farmhouse. The design incorporates natural wood, soft linens, and vintage"+
        " accents, creating a tranquil and relaxing retreat.",
      
      cover: "bedroom1.jpg",
      additionalImages: ["bedroom1.jpg", "bedroom2.jpg", "bedroom3.jpg"]

    },
    
  ];
  
  const getProducts = () => {
    return data;
  }
  
  export {getProducts};