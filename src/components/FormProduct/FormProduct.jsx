import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonAction from '../Buttons/ButtonAction';
import {createProduct , updateProduct} from '../../service/service';
import './FormProduct.scss'

const FormProduct = (props) => {

    const{
        productSelect,
        modeSelect,
        onAddProduct,
        onEditProduct,
        onResetSelect,
    } = props;

    const [ product, setProduct ] = useState({
        name: '',
        color: '',
        category: '',
        price:''
      });

      const datCategory=['Music','Clothing','Home','Baby']

    useEffect(()=>{
        if(productSelect!=undefined && modeSelect==='edit')
        {
            const priceCast=productSelect.price;
            setProduct({...productSelect,price:Number(priceCast.replace(/\$/g, ''))});
        }}
        ,[productSelect]);

      
    const handleChange =(event)=>{
            const {name,value}=event.target
            setProduct({...product,[name]:value})
    }

    const handleProduct =(event)=>{
        event.preventDefault();
        if(modeSelect==='edit')
        {
            const productEdit= {
                ...product,
                price: `$${product.price}`
            }
            updateProduct(productEdit,onEditProduct)
        }
        else
        {
            const newProduct = {
                ...product,
                id: Date.now(),
                price: `$${product.price}`
              }            
            createProduct(newProduct,onAddProduct)
        }       

        setProduct({
            name: '',
            color: '',
            category: '',
            price:''
        })        
     }

    const handleCancel = (event)=>{
        setProduct({
           name: '',
            color: '',
            category: '',
            price:''
        })
        onResetSelect()
     }


    return(
        <div className='container-form'>
            <h2 className='container-form__title'>{modeSelect==='edit'?'Edit Product':'Add Product'}</h2>
            <form className='product-form' onSubmit={handleProduct}>
                <div>
                    {/** input productName */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <label htmlFor='productName' className='product-form__subtitle'>PRODUCT NAME:</label>
                            <Form.Control
                            id= 'productName'
                            type='text'
                            placeholder="your product name"
                            name='name'
                            value={product.name} 
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>

                    </Row>                    
                    {/** input color */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <label htmlFor='color'className='product-form__subtitle'>COLOR: </label>
                            <Form.Control
                            id='color'
                            type='text' 
                            placeholder="silver,black, white, etc"
                            name='color'
                            required
                            value={product.color} 
                            onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>                    
                    {/** input Category */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <label htmlFor='category'className='product-form__subtitle'>CATEGORY: </label>
                            <Form.Select 
                            aria-label="Default select example" 
                            id='category' 
                            name='category'
                            required
                            value={product.category}
                            onChange={handleChange}>                                
                                <option>Open this select menu</option>
                                {datCategory.map( (category,index)=>{
                                    return <option key={index} value={category} >{category}</option>
                                    })}
                            </Form.Select>    
                        </Form.Group>
                    </Row>                                       
                    {/** input price */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <label htmlFor='price'className='product-form__subtitle'>PRICE: </label>
                            <Form.Control
                            id='price'
                            type='number' 
                            placeholder="$1999.99"
                            name='price'
                            required                
                            step='any'
                            min={0}
                            value={product.price}
                            onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>                    
                </div>
                <div className='product--buttons'>
                {/** buttons */}
                {modeSelect==='edit'? (<>
                    <ButtonAction name='Cancel' type='button' onClick= {handleCancel}/>
                    <ButtonAction name='Update' type='submit' onClick= {undefined}/>
                    </>):<ButtonAction name='Add' type='submit' onClick= {undefined}/>}
                </div>               
            </form>

        </div>

    )
}

export default FormProduct