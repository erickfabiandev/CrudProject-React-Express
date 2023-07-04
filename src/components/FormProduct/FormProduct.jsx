import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonAction from '../Buttons/ButtonAction';
import './FormProduct.scss'

const FormProduct = ({idProductEdit}) => {

    const [ product, setProduct ] = useState({
        productName: '',
        color: '',
        category: '',
        price:''
      });

    
      const datCategory=['categ1','categ2','categ3','categ4']

      const handleChange =(event)=>{
            const {name,value}=event.target
            setProduct({...product,[name]:value})
      }

      const handleProduct =(event)=>{
        event.preventDefault();
        console.log(event)
        console.log(product)
        /**
         * add,update
         */


     }

     const handleCancel = (event)=>{
        setProduct({
            productName: '',
            color: '',
            category: '',
            price:''
        })
     }


    return(
        <div className='container-form'>
            <h2 className='container-form__title'>{idProductEdit?'Edit Product':'Add Product'}</h2>
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
                            name='productName'
                            value={product.productName} 
                            onChange={handleChange}
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
                            value={product.color} 
                            onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>                    
                    {/** input Category */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <label htmlFor='Category'className='product-form__subtitle'>CATEGORY: </label>
                            <Form.Select aria-label="Default select example" id='category' name='category' onChange={handleChange}>
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
                {idProductEdit? (<>
                    <ButtonAction name='Cancel' type='button' onClick= {handleCancel}/>
                    <ButtonAction name='Update' type='submit' onClick= {undefined}/>
                    </>):<ButtonAction name='Add' type='submit' onClick= {undefined}/>}
                </div>               
            </form>

        </div>

    )
}

export default FormProduct