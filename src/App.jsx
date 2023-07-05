import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import Header from './components/Header'
import FormProduct from './components/FormProduct/FormProduct'


function App() {

  const [productos,setProduct]=useState({});
  const [idProductActivated,setIdProductActivated]=useState({undefined})
  
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
  const productActivated=(id)=>{
    setIdProductActivated(id);
  } 
  
  return (

    <>
      
      <Header></Header>
      <div className='container_main-app'>
        <Main></Main>
        <FormProduct idProductEdit={1}/>
      </div>
      
    </>
  )
}

export default App
