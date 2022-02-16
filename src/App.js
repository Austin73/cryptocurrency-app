
import './App.css';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk' ;
import allReducers from './reducers';
import { Provider } from 'react-redux';
import InputContainer from './components/InputContainer';
const store =createStore(allReducers,applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <InputContainer/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
