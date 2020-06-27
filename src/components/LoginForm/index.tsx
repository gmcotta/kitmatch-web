import React, { useState, useEffect } from 'react';
import { Field, FormikProps, FormikBag, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { FormContainer, FieldsWrapper, Paragraph } from './styles';

import HomeButton from '../HomeButton';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  isLogin: boolean;
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email é obrigatório!'),
    password: Yup.string().required('Senha é obrigatória!'),
    confirmPassword: Yup.string().required('Senha é obrigatória!'),
  }),
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    isLogin: true,
  }),
  handleSubmit: (
    values: FormValues,
    formikBag: FormikBag<RouteComponentProps, FormValues>,
  ) => {
    console.log(values);
    // const { history } = formikBag.props;
    // if (values.owner) {
    //   history.push('/create');
    // } else {
    //   history.push('/search');
    // }
  },
});

const MyForm = (props: FormikProps<FormValues>) => {
  const { values, errors, setFieldValue, handleSubmit } = props;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paragraph>
        {values.isLogin ? 'Bom ter você de volta!' : 'Cadastre-se, é grátis!'}
      </Paragraph>
      <FieldsWrapper>
        <Field
          name="email"
          placeholder="Digite seu email..."
          error={errors.email}
        />
        <Field
          name="password"
          placeholder="Digite sua senha..."
          error={errors.password}
        />
        {!values.isLogin && (
          <Field
            name="confirmPassword"
            placeholder="Digite novamente sua senha..."
            error={errors.confirmPassword}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setFieldValue('isLogin', !values.isLogin);
          }}
        >
          {values.isLogin ? 'Cadastre-se' : 'Faça login'}
        </button>
      </FieldsWrapper>
      <HomeButton type="submit">
        {values.isLogin ? 'Login' : 'Cadastrar'}
      </HomeButton>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
    </FormContainer>
  );
};

const HomeForm = formikEnhancer(MyForm);

export default withRouter(HomeForm);
