import styled from 'styled-components'


export const Wrapper = styled.div`
  border: 2px solid orange;
  background-color: var(--darkGray);
  height: 100px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--maxWidth);
  padding:20px 0;
  margin: 0 auto;
`


export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`