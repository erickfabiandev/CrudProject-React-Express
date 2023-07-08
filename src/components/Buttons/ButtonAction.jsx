import Button from 'react-bootstrap/Button';

const ButtonAction = ({name , type ,onClick}) =>{

    return(
        type==='button' ?
        <Button type={type} onClick={onClick} variant={name==='Add'?'primary':'secondary'}>{name}</Button>
        : <Button type={type} variant={name==='Add'?'primary':'success'}>{name}</Button>
    )
    
}

export default ButtonAction

