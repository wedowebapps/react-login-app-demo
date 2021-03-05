import React, { Component } from 'react';
import { Form } from '../../../../components/shared';

import {
  PageWrapper,
  FormWrapper,
  FormElement,
  ActionButton,
  InfoText,
} from './styles';

export class LoginView extends Component {
  render() {
    return (
      <PageWrapper>
        <FormWrapper>
          <Form
            enableReinitialize
            initialValues={{
              username: '',
              password: '',
            }}
            validations={{
              username: [Form.is.required(), Form.is.email()],
              password: [Form.is.required()],
            }}
            onSubmit={async (values, form) => {
              this.props.loginUser(values);
            }}
          >
            <FormElement>
              <InfoText>Login to your account</InfoText>
              <Form.Field.Input name='username' label='Email Address' />
              <Form.Field.Input name='password' type="password" label='Password' />
              <ActionButton type="submit" variant='success' isWorking={this.props.isLoading}>
                Login
              </ActionButton>
            </FormElement>
          </Form>
        </FormWrapper>
      </PageWrapper>
    );
  }
}

export default LoginView;
