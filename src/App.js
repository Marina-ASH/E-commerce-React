import './App.css';
import Router from "./components/Router";
import {GlobalContext, GlobalProvider} from "./components/GlobalContext";


function App() {

  return (
      <GlobalProvider>
      <Router/>
      </GlobalProvider>
  );
}
 

export default App;
