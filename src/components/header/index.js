import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import { Background } from './background';
import bannerUrl from '../../assets/cover.png';
import pipUrl from '../../assets/profile.jpg';
import { headerHeight } from '../../styleguide/breakpoints'

const StyledHeader = styled.header`
  position:relative;
  height: ${headerHeight};
`

export const Header = () =>
  (
    <StyledHeader>
      <Background imageUrl={bannerUrl} />
      <ProfileImage imageUrl={pipUrl} />
    </StyledHeader>
  )
