import logo from './logo.svg';
import './App.css';
import AddCharacters from './Components/AddCharacters';
import styles from "./Components/stylesheet.module.css"

function App() {
  return (

    <body>
      <h1>Final Space Character Wizard</h1>

      <div className={styles.mainContainer} >

        <AddCharacters/>

      </div>
    </body>
  );
}

export default App;
