import React, { useState, useEffect } from 'react';
import { Field, FormikProps, FormikHelpers, withFormik } from 'formik';
import axios from 'axios';
// import * as Yup from 'yup';

import HomeSelect from '../../components/HomeSelect';

interface FormValues {
  uf: string;
  city: string;
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
  mapPropsToValues: () => ({
    uf: '',
    city: '',
  }),
  handleSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    actions.setSubmitting(false);
  },
});

const MyForm = (props: FormikProps<FormValues>) => {
  const { values, handleSubmit } = props;

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
    if (values.uf !== '0') {
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
      />
      <Field
        name="city"
        options={cities}
        component={HomeSelect}
        placeholder="Selecione uma cidade..."
      />
      <button type="submit">Enviar</button>
      <p>{JSON.stringify(values, null, 2)}</p>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
