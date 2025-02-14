import logo from '../assets/logo.png'
import Nav from "./Nav.jsx";

function Header(props) {
  return (
    <header className={'text-white py-4 px-4 md:px-6 lg:px-8'}>
      <div className={'container flex justify-between items-center mx-auto'}>
        <img src={logo} alt="Henna Software logo" className={'w-20'}/>

        <Nav links={props.navLinks}></Nav>

        <a href={props.btnTarget}
           className={'rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'}>
          {props.btnLabel}
        </a>
      </div>
    </header>
  )
}

export default Header;
