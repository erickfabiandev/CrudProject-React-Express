import './Header.scss'

export const Header = ()=> {

  
    return (
      <>
        <div className='header-container'>
            <div className='header-container__left-side'>
                <span></span>
                <p>My site</p>
            </div>
            <div className='header-right-side'>
                <p>Get started</p>
                <span class="material-symbols-rounded">menu</span>
            </div>
        </div>
         
      </>
    )
  }
  
  export default Header