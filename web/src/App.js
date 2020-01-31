import React, { useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
/*
Componente: Função que retorna algum conteudo 
Propriedade: Componente Pai que passar par o componente Filho as propriedades 
Estado: Informaçoes mantidas pelo componente 
*/

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block" >
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block" >
            <label htmlFor="techs">Tecnologias </label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div className="input-block" >
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block" >
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>

          </div>

          <button type="submit" >Salvar</button>
        </form>

      </aside>

      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43018177?s=460&v=4" alt="Nathan Gabriel" />
              <div className="user-info">
                <strong>Nathan Gabriel</strong>
                <span>Iniciante em : React, React Native, Node.js</span>
              </div>
            </header>
            <p>Futuro desenvolvedor FullStack</p>
            <a href="https://github.com/nathangabriel27">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43018177?s=460&v=4" alt="Nathan Gabriel" />
              <div className="user-info">
                <strong>Nathan Gabriel</strong>
                <span>Iniciante em : React, React Native, Node.js</span>
              </div>
            </header>
            <p>Futuro desenvolvedor FullStack</p>
            <a href="https://github.com/nathangabriel27">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43018177?s=460&v=4" alt="Nathan Gabriel" />
              <div className="user-info">
                <strong>Nathan Gabriel</strong>
                <span>Iniciante em : React, React Native, Node.js</span>
              </div>
            </header>
            <p>Futuro desenvolvedor FullStack</p>
            <a href="https://github.com/nathangabriel27">Acessar perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/43018177?s=460&v=4" alt="Nathan Gabriel" />
              <div className="user-info">
                <strong>Nathan Gabriel</strong>
                <span>Iniciante em : React, React Native, Node.js</span>
              </div>
            </header>
            <p>Futuro desenvolvedor FullStack</p>
            <a href="https://github.com/nathangabriel27">Acessar perfil do Github</a>
          </li>

        </ul>

      </main>
    </div>
  );
}

export default App;
