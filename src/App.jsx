import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header/Header'

const Container = styled.div`
  background-color: #eee;
  height: 100vh; 
`


const App = () => {
  
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <h1>Nemoto Movie React app</h1>
      </Container>
    </>
  )
}

export default App
