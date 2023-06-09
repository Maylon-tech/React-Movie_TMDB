import React from 'react'

import RMDBLogo from '../../assets/images/react-movie-logo.svg'
import TMDBLogo from '../../assets/images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './index'


const Header = () => {
  return (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} />
            <TMDBLogoImg src={TMDBLogo} />

        </Content>
    </Wrapper>
  )
}

export default Header