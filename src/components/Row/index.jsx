import './Row.scss'


export const Row = (props) => {
    const { productos, isProductSelect, onDeleteProduct} = props;
  
    return (
      <>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <th scope="row">{producto.name}</th>
            <td>{producto.color}</td>
            <td>{producto.category}</td>
            <td>{producto.price}</td>
            <td>
              <a onClick={()=>isProductSelect(producto,'edit')}>Edit</a> | <a onClick={()=>onDeleteProduct(producto)}>Delete</a>
            </td>
          </tr>
        ))}
      </>
    );
  };
  
  
  
  export default Row