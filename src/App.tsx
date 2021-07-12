import MainWindow from './components/MainWindow/MainWindow'
import './App.scss'
import { makeStore } from './redux/makeStore'
import { Provider } from 'react-redux';

const store = makeStore();

function App() {

	return (
		<div className='App'>
			<Provider store={store}>
				<MainWindow />				
			</Provider>

		</div>
	)
}

export default App
