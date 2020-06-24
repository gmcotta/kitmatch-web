import React, { useState, useEffect } from 'react';
import { Field, FormikProps, FormikBag, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { FormContainer, FieldsWrapper, Paragraph } from './styles';

import HomeSelect from '../HomeSelect';
import HomeButton from '../HomeButton';

interface FormValues {
  uf: string;
  city: string;
  owner: boolean;
}

interface IBGEUfResponse {
  sigla: string;
  nome: string;
}

interface IBGECityResponse {
  nome: string;
}

interface SelectData {
  value: string;
  label: string;
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    uf: Yup.string().required('Estado é obrigatório!'),
    city: Yup.string().required('Cidade é obrigatória!'),
  }),
  mapPropsToValues: () => ({
    uf: '',
    city: '',
    owner: false,
  }),
  handleSubmit: (
    values: FormValues,
    formikBag: FormikBag<RouteComponentProps, FormValues>,
  ) => {
    const { history } = formikBag.props;
    if (values.owner) {
      history.push('/create');
    } else {
      history.push('/search');
    }
  },
});

const MyForm = (props: FormikProps<FormValues>) => {
  const { values, errors, touched, setFieldValue, handleSubmit } = props;

  const [UFs, setUFs] = useState<SelectData[]>([]);
  const [cities, setCities] = useState<SelectData[]>([]);

  const sortSelectOptions = (a: SelectData, b: SelectData) => {
    if (a.label > b.label) {
      return 1;
    }
    if (a.label < b.label) {
      return -1;
    }
    return 0;
  };

  useEffect(() => {
    axios
      .get<IBGEUfResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const resultedUFs = response.data
          .map(data => {
            return {
              value: data.sigla,
              label: data.nome,
            };
          })
          .sort(sortSelectOptions);
        setUFs(resultedUFs);
      });
  }, []);

  useEffect(() => {
    if (values.uf !== '') {
      axios
        .get<IBGECityResponse[]>(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${values.uf}/municipios`,
        )
        .then(response => {
          const resultedCities = response.data
            .map(data => {
              return {
                value: data.nome,
                label: data.nome,
              };
            })
            .sort(sortSelectOptions);
          setCities(resultedCities);
        });
    } else {
      setCities([]);
    }
  }, [values.uf]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paragraph>
        Ajudamos pessoas a encontrarem kitnets, e proprietários a anunciarem de
        forma fácil!
      </Paragraph>
      <FieldsWrapper>
        <Field
          name="uf"
          options={UFs}
          component={HomeSelect}
          placeholder="Selecione um estado..."
          error={errors.uf}
          touched={touched.uf}
        />
        <Field
          name="city"
          options={cities}
          component={HomeSelect}
          placeholder="Selecione uma cidade..."
          error={errors.city}
          touched={touched.city}
        />
        <label htmlFor="owner">
          <input
            type="checkbox"
            name="owner"
            onChange={() => setFieldValue('owner', !values.owner)}
          />
          <span />
          Eu sou proprietário
        </label>
      </FieldsWrapper>
      <br />
      <HomeButton type="submit">
        {values.owner ? 'Anuncie minha kitnet' : 'Encontre minha kitnet'}
      </HomeButton>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
    </FormContainer>
  );
};

const HomeForm = formikEnhancer(MyForm);

export default withRouter(HomeForm);
