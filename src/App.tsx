import MainWindow from './features/MainWindow/MainWindow'
import { makeStore } from './redux-store/makeStore'
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
