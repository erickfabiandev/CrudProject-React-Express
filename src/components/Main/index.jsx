import './Main.scss'
import Row from '../Row'

export const Main = ()=> {

  
    return (
      <>
      <div className='text-container'>
        <h1>Product List</h1>
        <button>Add</button>
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
         
      </>
    )
  }
  
  export default Main