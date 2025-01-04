function getImageURL(name) {
    return new URL(`../assets/website/${name}`, import.meta.url).href
  }
  
  export {getImageURL};