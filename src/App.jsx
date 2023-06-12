import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header/Header'
import Home from './components/Home'

const Container = styled.div`
  background-color: #eee;
  height: 100vh; 
`


const App = () => {
  
  return (
    <>
      <Container>
        <Header />
        <Home />
        <GlobalStyles />
      </Container>
    </>
  )
}

export default App
