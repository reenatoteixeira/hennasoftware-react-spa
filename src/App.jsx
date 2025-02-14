import './styles/tailwind.css'
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header navLinks={[
        {name: 'Home', target: '#'},
        {name: 'About', target: '#about'},
        {name: 'Projects', target: '#projects'},
        {name: 'Collab', target: '#collab'},
        {name: 'Contact', target: '#contact'},
      ]} btnLabel={'Join Our Discord'} btnTarget={'https://discord.gg/ZfFnhhHDhK'}></Header>
    </>
  )
}

export default App
