import React from 'react'
import NavBar from './components/Navbar'

const App = () => {
  const optionsMenu = ['Sobre Mi', 'Poryectos', 'CV']

  return (
    <>
      <NavBar options={optionsMenu} />
    </>

  )
}

export default App
