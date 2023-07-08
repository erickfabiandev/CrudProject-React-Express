import { useState,useEffect } from 'react'
import './App.css'
import { Main } from './components/Main'
import Header from './components/Header'
import FormProduct from './components/FormProduct/FormProduct'
import { getAllProducts, deleteProduct} from './service/service'


function App() {


  const [productos,setProducts]=useState([]);
  const [isProductSelect,setIsProductSelect]=useState(undefined);
  const [isModeSelect,setIsModeSelect]=useState(undefined)
  const [showForm, setShowForm] = useState(true);
  const [loading,setLoading]=useState(false);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(`Ups! Ocurrió algo, inténtalo más tarde. Error: ${error}`);
      }
      finally{
        setLoading(false);
      }
    };  
    fetchProducts();
  }, []);

 
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
  const hanldeDeleteProduct=(productDelete)=>{
    const indexProduct = productos.findIndex((item)=>item.id===productDelete.id)
    const UpdateProducts = [...productos]
    UpdateProducts.splice(indexProduct,1);
    setProducts(UpdateProducts)
    deleteProduct(productDelete)
    handleResetSelect()
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
        loading ={loading} 
        onShowForm = {handleShowForm} 
        isProductSelect={handleProductSelect}
        onDeleteProduct={hanldeDeleteProduct}
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
