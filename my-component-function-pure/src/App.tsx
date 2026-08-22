import "./App.css";
// import { DoubleNumber } from './components/DoubleNumber'
// import { SquareNumber } from './components/SquareNumber'

interface StepProps {
  step: number;
  instruction: string;
}

function Step({ step, instruction }: StepProps) {
  return (
    <li>Passo {step}: {instruction} </li>
  );
}

const stepsInstruction = [
  "Criar função do componente",
  "Exportar e importar função criada",
  "Finalizara estrutura do componente",
  "Adicionar iterações",
  "Testar aplicação"
];

function App() {
  const steps = [];
  for(let i =1; i<=stepsInstruction.length; i++){
    steps.push(<Step key={i} step={i} instruction={stepsInstruction[i-1]} />);
  }
  return (
    <>
      <h1> Estrutura de Um Componente</h1>
      <ul>
        {steps}
      </ul>
    </>
    //  <>
    //   < DoubleNumber number={10} />
    //   < SquareNumber number={10} />
    // </>
  );
}

export default App;
