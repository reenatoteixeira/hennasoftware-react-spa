function Nav(props) {
  return (
    <nav className={'hidden md:block'}>
      <ul className={'flex gap-x-12'}>
        {props.links.map((link) => <li className={'text-sm/6 font-semibold hover:text-blue-500 transition-colors'}>
          <a href={link.target}>{link.name}</a>
        </li>)}
      </ul>
    </nav>
  )
}

export default Nav;
