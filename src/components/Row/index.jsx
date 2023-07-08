import './Row.scss'
import Loading from '../Loading/Loading'


export const Row = (props) => {
    const { productos,loading, isProductSelect, onDeleteProduct} = props;
  
    return (
      <>
        { loading ? <Loading/>:
          (
            productos.length===0
            ?
            <tr>
              <td colSpan="4" align="center">No hay productos registrados</td>
            </tr>        
            :        
            productos.map((producto) => (
              <tr key={producto.id}>
                <th scope="row">{producto.name}</th>
                <td>{producto.color}</td>
                <td>{producto.category}</td>
                <td>{producto.price}</td>
                <td>
                  <a onClick={()=>isProductSelect(producto,'edit')}>Edit</a> | <a onClick={()=>onDeleteProduct(producto)}>Delete</a>
                </td>
              </tr>
            ))
          )
        }      
      </>
    );
  };
  
  
  
  export default Row