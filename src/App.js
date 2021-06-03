import { LeitorDeArquivo } from './Components/LeitorDeArquivo/LeitorDeArquivo.jsx'

import 'fontsource-roboto';

function App() {
    return (
        
<div className="Header">
  <div className="Header-background"></div>
  <div className="Header-content">
    <div className="Header-hero">
      <h1>Validador de Arquivos <br/> de Remessa</h1>
      <LeitorDeArquivo></LeitorDeArquivo>
      <p>Simples e fácil de usar.</p>
    </div>
    <div className="Header-visuals">
    </div>
  </div>
</div>
    );
}

export default App;