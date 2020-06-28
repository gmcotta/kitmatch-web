import React from 'react';
import { Field, FormikProps, FormikBag, withFormik } from 'formik';
import * as Yup from 'yup';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  FormContainer,
  FieldsWrapper,
  Paragraph,
  ForgotText,
  SwitchLogin,
} from './styles';

import FacebookButton from '../FacebookButton';
import CustomInput from '../CustomInput';
import HomeButton from '../HomeButton';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  isLogin: boolean;
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido!')
      .required('Email é obrigatório!'),
    password: Yup.string().when('isLogin', {
      is: false,
      then: Yup.string()
        .required('Senha é obrigatória!')
        .min(8, 'Mínimo de 8 caracteres')
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          'Senha precisa de 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo',
        ),
      otherwise: Yup.string().required('Senha é obrigatória!'),
    }),
    confirmPassword: Yup.string().when('isLogin', {
      is: false,
      then: Yup.string()
        .required('Confirmação é obrigatória!')
        .equals([Yup.ref('password')], 'As senhas não são iguais!'),
    }),
    isLogin: Yup.boolean(),
  }),
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
    const { history } = formikBag.props;
    if (values.isLogin) {
      history.push('/dashboard');
    } else {
      history.push('/register');
    }
  },
});

const MyForm = (props: FormikProps<FormValues>) => {
  const { values, errors, touched, setFieldValue, handleSubmit } = props;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paragraph>
        {values.isLogin ? 'Bom ter você de volta!' : 'Cadastre-se, é grátis!'}
      </Paragraph>
      <FieldsWrapper>
        <FacebookButton />
        <span className="divider">OU</span>
        <Field
          name="email"
          placeholder="Digite seu email..."
          component={CustomInput}
          error={errors.email}
          touched={touched.email}
        />
        <Field
          name="password"
          placeholder="Digite sua senha..."
          component={CustomInput}
          error={errors.password}
          touched={touched.password}
          isPassword
        />
        {values.isLogin && (
          <ForgotText to="/login">Esqueceu sua senha?</ForgotText>
        )}
        {!values.isLogin && (
          <Field
            name="confirmPassword"
            placeholder="Digite novamente sua senha..."
            component={CustomInput}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            isPassword
          />
        )}
      </FieldsWrapper>
      <div className="button-area">
        <HomeButton type="submit">
          {values.isLogin ? 'Login' : 'Cadastrar'}
        </HomeButton>
        <SwitchLogin>
          <span>
            {values.isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
          </span>
          <button
            type="button"
            onClick={() => {
              values.confirmPassword = '';
              setFieldValue('isLogin', !values.isLogin);
            }}
          >
            {values.isLogin ? 'Cadastre-se' : 'Faça login'}
          </button>
        </SwitchLogin>
      </div>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
    </FormContainer>
  );
};

const HomeForm = formikEnhancer(MyForm);

export default withRouter(HomeForm);
