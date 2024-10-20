import './App.css'
import Autentificar from './components/autentificador'
import Botao from './components/botao'
import Desconto from './components/Desconto'
import VerificadorAluno from './components/Estudante'
import Idade from './components/Idade'
import Nivel from './components/Nivel'
import Saudacao from './components/Saudacao'
import Saudacao02 from './components/SaudacaocProps'
import User from './components/User'
import VerificadorNotas from './components/VerificarNotas'

function App() {

  return (
    <>
      <Saudacao/>
      <Saudacao02 ola=" menzinho!"/>
      <Autentificar senha="1"/>
      <Idade idade="19"/>
      <VerificadorAluno ra="01"/>
      <VerificadorNotas notas="99"/>
      <Desconto desconto={true} />
      <Desconto desconto={false} />
      <br/>
      <User online={true}/>
      <User online={false}/>
      <br/>
      <Nivel nivel="iniciante" />
      <Nivel nivel="intermediário" />
      <Nivel nivel="avançado" />
      <Nivel nivel="desconhecido" />
      <br/>
      <Botao login={true} />
      <Botao login={false} />
    </>
  )
}

export default App
