import './Main.scss'
import Row from '../Row'
import ButtonAction from '../Buttons/ButtonAction'

export const Main = (props)=> {

  const {productos, loading ,onShowForm, isProductSelect, onDeleteProduct} = props
  
    return (
      <>
      <div className='container__main'>
        <div className='text-container'>
          <h1>Product List</h1>
          <ButtonAction name='Add' type='button' onClick= {onShowForm}></ButtonAction>
        </div>
        <div className='table-container'>
          <table className="table">
              <thead>
                  <tr>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">COLOR</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                  <Row productos = {productos} loading={loading} isProductSelect={isProductSelect} onDeleteProduct = {onDeleteProduct}></Row>
                  
              </tbody>
          </table> 

        </div>

      </div>
         
      </>
    )
  }
  
  export default Main