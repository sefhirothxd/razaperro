import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaLetras from './components/ListaLetras';
import ListaPerros from './components/ListaPerros';
import Image from './components/ImgDog';

function App() {
	return (
		<div className="App container mx-auto">
			<h1 className="text-3xl font-bold my-4 ml-4">Api Raza de perros</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListaLetras />} />
					<Route path="/breed/:id" element={<ListaPerros />} />
					<Route path="/breed/:id/:id/image" element={<Image />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
