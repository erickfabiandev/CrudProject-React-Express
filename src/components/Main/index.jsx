import './Main.scss'
import Row from '../Row'
import ButtonAction from '../Buttons/ButtonAction'

export const Main = ()=> {

  
    return (
      <>
      <div className='container__main'>
        <div className='text-container'>
          <h1>Product List</h1>
          <ButtonAction name='Add' type='submit' onClick= {undefined}></ButtonAction>
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
                  <Row></Row>
              </tbody>
          </table> 

        </div>

      </div>
         
      </>
    )
  }
  
  export default Main