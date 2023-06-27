
import './app.css';
import './sidebar.css';
import './global.css';
import './main.css';

import Notes from "./components/Notes/Notes"

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form action="
        ">
          <div className="input-block">
             <label htmlFor="title">Titulo</label>
             <input/>
          </div>
          <div className="input-block">
             <label htmlFor="nota">Anotações</label>
             <textarea></textarea>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes></Notes>
        </ul>
      </main>
    </div>
  );
}

export default App;
