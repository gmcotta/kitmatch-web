import React, { useState, useEffect } from 'react';
import { Field, FormikProps, FormikBag, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { RouteComponentProps } from 'react-router-dom';

import HomeSelect from '../../components/HomeSelect';
import HomeButton from '../../components/HomeButton';

interface FormValues {
  uf: string;
  city: string;
  owner: boolean;
}

interface IBGEUfResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface UFSelect {
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
    formikBag.setSubmitting(false);
    values.owner ? history.push('/create') : history.push('/search');
  },
});

const MyForm = (props: FormikProps<FormValues>) => {
  const { values, errors, setFieldValue, handleSubmit } = props;

  const [UFs, setUFs] = useState<UFSelect[]>([]);
  const [cities, setCities] = useState<UFSelect[]>([]);

  useEffect(() => {
    axios
      .get<IBGEUfResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufAbbreviations = response.data.map(data => data.sigla).sort();
        const selectOptions = ufAbbreviations.map(uf => {
          return {
            value: uf,
            label: uf,
          };
        });
        setUFs(selectOptions);
      });
  }, []);

  useEffect(() => {
    if (values.uf !== '') {
      axios
        .get<IBGECityResponse[]>(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${values.uf}/municipios`,
        )
        .then(response => {
          const resultedCities = response.data.map(data => data.nome).sort();
          const selectOptions = resultedCities.map(city => {
            return {
              value: city,
              label: city,
            };
          });
          setCities(selectOptions);
        });
    } else {
      setCities([]);
    }
  }, [values.uf]);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="uf"
        options={UFs}
        component={HomeSelect}
        placeholder="Selecione um estado..."
        error={errors.uf}
      />
      <Field
        name="city"
        options={cities}
        component={HomeSelect}
        placeholder="Selecione uma cidade..."
        error={errors.city}
      />
      <label htmlFor="owner">
        <input
          name="owner"
          type="checkbox"
          onChange={() => setFieldValue('owner', !values.owner)}
        />
        Eu sou proprietário
      </label>
      <br />
      <HomeButton type="submit">
        {values.owner ? 'Anunciar minha kitnet' : 'Encontre minha kitnet'}
      </HomeButton>
      {/* <p>{JSON.stringify(props, null, 2)}</p> */}
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
