const url = `${import.meta.env.VITE_APIVITE_API_BASE_URL}/products`

export const getAllProducts= async ()=>{
  
  try {
    const response = await fetch(url)
    const productData = await response.json();
    return await productData.data
  } catch(error) {
    console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
  }

}

export const createProduct= async (product,onAddProduct)=>{
    const configFetch = {
        method:'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        },
      }

      try {
        const response = await fetch(url, configFetch)
        const productData = await response.json();
        onAddProduct(productData.data);  
      } catch(error) {
        console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
      }
}

export const updateProduct= async (product,onEditProduct)=>{
    const configFetch = {
        method:'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        },
      }

      try {
        const response = await fetch(`${url}/${product.id}`, configFetch)
        const productdata = await response.json();
        onEditProduct(productdata.data);
  
      } catch(error) {
        console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
      }
}


export const deleteProduct= async (product)=>{
  const configFetch = {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    try {
      const response = await fetch(`${url}/${product.id}`, configFetch)
      const productdata = await response.json();
      // onDeleteProduct(productdata.data);

    } catch(error) {
      console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
    }
}

