//Exercício 09

const Nivel = ({ nivel }) => {
    return (
      <div>
        {nivel === 'iniciante' ? ('Bem-vindo, iniciante!') : nivel === 'intermediário' ? ('Você está progredindo!') : nivel === 'avançado' ? ('Parabéns, especialista!') : ('Nível desconhecido.')}
      </div>
    );
  };

export default Nivel;