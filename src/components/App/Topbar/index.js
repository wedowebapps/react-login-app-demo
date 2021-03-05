import React from 'react';

import { TopbarContainer, LogoutButton, Title, TopbarContent } from './styles';

const Topbar = (props) => {
  return (
    <TopbarContainer>
      <TopbarContent>
        <Title>Demo Login Application</Title>
        <LogoutButton variant='danger' onClick={() => props.logoutUser()}>
          Logout
        </LogoutButton>
      </TopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
