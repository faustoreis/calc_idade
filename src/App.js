import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const calcula_idade = (ano) => {
    console.log('Calculou a idade.');
    if (!ano) {
      return 0;
    }
    const date = new Date();
    const AnoAtual = date.getFullYear();
    return AnoAtual - ano;
  };

  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');

  const idade = useMemo(() => calcula_idade(ano), [ano]);

  return (
    <div className="App">
      <input
        placeholder="Nome"
        value={nome}
        onChange={(ev) => setNome(ev.target.value)}
      />
      <input
        placeholder="Ano"
        value={ano}
        onChange={(ev) => setAno(ev.target.value)}
      />
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
      </ul>
    </div>
  );
}

export default App;
