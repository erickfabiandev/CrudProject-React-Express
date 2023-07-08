import { useState } from 'react';
import ModalInformation from '../ModalInformation/ModalInformation';
import { Dropdown } from 'react-bootstrap';
import './Header.scss'

export const Header = ()=> {

     const menu = <span className="material-symbols-rounded">menu</span>
     const [show, setShow] = useState(false);
     const [isOption,setIsOption]=useState('');
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     

  
    return (
      <>
        <div className='header-container'>
            <div className='header-container__left-side'>
                <span></span>
                <p>My site</p>
            </div>
            <div className='header-right-side'>
                <p>Get started</p>
                <Dropdown>
                    <Dropdown.Toggle className="hide-arrow">{menu}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>{handleShow() ,setIsOption('About')}}>About</Dropdown.Item>
                      <Dropdown.Item onClick={()=>{handleShow() ,setIsOption('Teams')}}>Teams</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>                        
            </div>
        </div>
        <ModalInformation show={show} handleClose={handleClose} isOption={isOption}/>
        
         
      </>
    )
  }
  
  export default Header