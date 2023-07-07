import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalInformation.scss'

const ModalInformation =(props)=>{

    const {show,handleClose,isOption}=props;

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isOption==='About'?'About':'Development team'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isOption=='About'
            ?
            <p>Project of a web application that allows to perform basic CRUD operations 
                (Create, Read, Update and Delete) with APIS consumption, 
                it was developed using the following technologies: React- Express </p>
            :
            <div className='container_contact_Card'>
              <div className='Contact_Card'>
                <img src='https://res.cloudinary.com/dkddd5aky/image/upload/v1688753661/Victor_fec0aw.jpg' className='Contact_Card_image'></img>
                <h5>Victor Mazo</h5>
                <div className='Contact_Card-button'>
                    <a  href="https://www.linkedin.com/in/viamazoba/">
                            <img className="Contact_Card--linkedin" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/linkedin.svg"/>
                     </a>
                    <a  href="https://www.linkedin.com/in/viamazoba/">                    
                            <img className="Contact_Card--github" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/github.svg"/>   
                    </a>    
                </div>                       
               
              </div>

              <div className='Contact_Card'>
                <img src='https://res.cloudinary.com/dkddd5aky/image/upload/v1688432994/portafolio/img-profile.jpg' className='Contact_Card_image'></img>
                <h5>Erick Carrasco</h5>
                <div className='Contact_Card-button'>
                    <a  href="https://www.linkedin.com/in/erickfabiandev/">
                        <img className="Contact_Card--linkedin" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/linkedin.svg"/>
                    </a>
                    <a  href="https://github.com/erickfabiandev">                    
                        <img className="Contact_Card--github" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/github.svg"/>   
                    </a>    
                </div>                
              </div>  
            </div>
            }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )    
}

export default ModalInformation