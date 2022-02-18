
import './App.css';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import InputContainer from './components/InputContainer';

const store = createStore(allReducers, applyMiddleware(thunk))
const styles = {
  header: {
    
    margin: 'auto',
    textAlign:"center",
    backgroundColor:"lightblue"
  }
}
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div style={styles.header}>
          <h2>Crypto currency Prices</h2>
        </div>
        <header className="App-header">
          <InputContainer />

        </header>
      </div>
    </Provider>
  );
}

export default App;
