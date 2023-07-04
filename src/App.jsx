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
      <h1>CRUD PROJECT </h1>
      <Header></Header>
      <Main></Main>
      <FormProduct idProductEdit={1}/>
    </>
  )
}

export default App
