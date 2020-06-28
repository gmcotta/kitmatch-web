const elementLabel = (name: string) => {
  switch (name) {
    case 'uf':
      return 'Estado';
    case 'city':
      return 'Cidade';
    case 'email':
      return 'E-mail';
    case 'password':
      return 'Senha';
    case 'confirmPassword':
      return 'Confirmar senha';
    default:
      return name;
  }
};

export default elementLabel;
