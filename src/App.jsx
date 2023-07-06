import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import Header from './components/Header'
import FormProduct from './components/FormProduct/FormProduct'


function App() {

  const arrayProducts = [
    { 
      'id':1,
      'name':'Recycled Steel Sausages',
      'color':'white',
      'category':'Music',
      'price':'$386.00'
    },
    { 
      'id':2,
      'name':'Fantastic Frozen Shirt',
      'color':'pink',
      'category':'Clothing',
      'price':'$20.00'
    }
  ]

  const [productos,setProduct]=useState(arrayProducts);
  const [isProductSelect,setIsProductSelect]=useState(undefined);
  const [showForm, setShowForm] = useState(true);

  
  const handleAddProduct=(newProduct)=>{ 
     /** logic to add product - POST*/   
  }
  const handleEditProduct=(productEdit)=>{
    /** logic to add product - POST*/
  } 
  const hanldeDeleteProduct=()=>{
     /**logic to delete product */
  } 
  const hanldeSearchProduct=(id)=>{
     /** logic to search product */
  }
  const handleProductSelect=(product)=>{
    setIsProductSelect(product);
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
        <Main productos={productos} onShowForm = {handleShowForm} isProductEdit={handleProductSelect}></Main>
        {!showForm && <FormProduct productSelect={isProductSelect} />}
      </div>
      
    </>
  )
}

export default App
