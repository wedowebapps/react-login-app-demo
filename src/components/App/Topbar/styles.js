import styled from 'styled-components';

import { color } from '../../../config/styles';
import { Button } from '../../../components/shared';

export const TopbarContainer = styled.div`
  background-color: ${color.backgroundMedium};
  padding: 20px;
`;

export const TopbarContent = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const LogoutButton = styled(Button)`
  align-self: flex-end;
`;