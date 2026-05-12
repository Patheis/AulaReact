import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>
      <div className="card">
        <h3>Chamadas para o Componentes Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />
      </div>

      <div className="card">
          <h3>Exercício 1</h3>
          <Exercicio1 numero={12} />
          <Exercicio1 numero={67} />
          <Exercicio1 numero={-5} />
      </div>

      <div className="card">
        <h3>Exercício 2</h3>
        <Exercicio2 peso={53.5} altura={1.58} />
      </div>

    </div>
  )
}