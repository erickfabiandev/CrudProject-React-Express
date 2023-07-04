import Button from 'react-bootstrap/Button';

const ButtonAction = ({name , type ,onClick}) =>{

    return(
        name==='Cancel'?
        <Button type={type} onClick={onClick} variant='secondary'>{name}</Button>
        :<Button type={type} variant={name==='Add'?'primary':'success'}>{name}</Button>
    )
    
}

export default ButtonAction
