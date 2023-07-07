import { useState,useEffect } from 'react'
import './App.css'
import { Main } from './components/Main'
import Header from './components/Header'
import FormProduct from './components/FormProduct/FormProduct'


function App() {

  const [productos,setProducts]=useState([]);
  const [isProductSelect,setIsProductSelect]=useState(undefined);
  const [isModeSelect,setIsModeSelect]=useState(undefined)
  const [showForm, setShowForm] = useState(true);

 
  const handleAddProduct=(newProduct)=>{ 
    setProducts([...productos,newProduct]);
  }

  const handleEditProduct=(productEdit)=>{
      const indexProduct = productos.findIndex((item)=>item.id===productEdit.id)
      const UpdateProducts = [...productos]
      UpdateProducts[indexProduct]=productEdit
      setProducts(UpdateProducts)
      handleResetSelect()
  }
  const hanldeDeleteProduct=()=>{
     /**logic to delete product */
  } 
  const handleProductSelect=(product,modeSelect)=>{
    setIsProductSelect(product);
    modeSelect==='edit'?setIsModeSelect('edit'):setIsModeSelect('delete')
  }
  const handleResetSelect=()=>{
    setIsModeSelect('')
    setIsProductSelect(undefined)
  }
  

  const handleShowForm = ()=>{
    if(showForm){
      setShowForm(false)
    }else{
      setShowForm(true)
    }
    
  }
  
  return (
    <>      
      <Header></Header>
      <div className='container_main-app'>
        <Main 
        productos={productos} 
        onShowForm = {handleShowForm} 
        isProductSelect={handleProductSelect}
        />
        {!showForm && 
        <FormProduct 
        productSelect={isProductSelect}
        modeSelect={isModeSelect} 
        onAddProduct={handleAddProduct} 
        onEditProduct={handleEditProduct}
        onResetSelect={handleResetSelect}
        />}
      </div>
      
    </>
  )
}

export default App
