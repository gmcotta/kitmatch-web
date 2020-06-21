import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import HomeSelect from '../../components/HomeSelect';
import HomeButton from '../../components/HomeButton';

import {
  Title,
  Container,
  BackgroundImage,
  FlexContainer,
  SelectWrapper,
  ButtonWrapper,
} from './styles';

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

interface SelectData {
  value: string;
}

interface FormData {
  handleSubmit: any;
}

const Home: React.FC = () => {
  const [UFs, setUFs] = useState<UFSelect[]>([]);
  const [selectedUF, setSelectedUF] = useState('');
  const [cities, setCities] = useState<UFSelect[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

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
    if (selectedUF !== '0') {
      axios
        .get<IBGECityResponse[]>(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`,
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
  }, [selectedUF]);

  const handleUFChange = (event: SelectData) => {
    setSelectedUF(event.value);
  };

  const handleCityChange = (event: SelectData) => {
    setSelectedCity(event.value);
  };

  return (
    <Container>
      <Header />
      <Title>
        <span>Aluguel</span>
        &nbsp;de forma simples
      </Title>
      <BackgroundImage />
      <FlexContainer>
        <p>
          Ajudamos pessoas a encontrarem kitnets, e proprietários a anunciarem
          de forma fácil!
        </p>

        <SelectWrapper>
          {/* <HomeSelect
            name="Estado"
            values={UFs}
            placeholder="Selecione o estado..."
            onChange={handleUFChange}
          />
          <HomeSelect
            name="Cidade"
            values={cities}
            placeholder="Selecione a cidade..."
            onChange={handleCityChange}
          /> */}
        </SelectWrapper>
        <ButtonWrapper>
          <HomeButton>Encontre minha kitnet</HomeButton>
          <HomeButton>Anuncie minha kitnet</HomeButton>
        </ButtonWrapper>
      </FlexContainer>
    </Container>
  );
};

export default Home;
