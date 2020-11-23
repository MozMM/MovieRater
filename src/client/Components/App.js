import { Routes } from './Routes'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store'

// const getIT = async function() {
//   const response = await fetch('/api/ratings/', {
//     method: 'GET',
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // },
//     // body: JSON.stringify({ post: '' }),
//   });
//   const body = await response.text();
//   console.log('------>>>>>>>>>>>>> ',body);
// }

// getIT();

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
