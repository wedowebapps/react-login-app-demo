import styled from 'styled-components';
import { color } from '../../../../config/styles';

import { Form, Button } from '../../../../components/shared';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  flex-direction: column;
  background: ${color.background};
  height: 100vh;
`;

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
  display: block;
  width: 100%;
`;

export const InfoText = styled.p`
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 500px;
  height: auto;
  background: ${color.backgroundDarkPrimary};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  margin-top: 40px;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;
