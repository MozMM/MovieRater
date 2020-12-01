import { Routes } from './Routes'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
