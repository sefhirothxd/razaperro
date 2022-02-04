import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import ListaPerros from './ListaPerros';
const ListaLetras = () => {
	const letras = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	return (
		<div className="container mx-auto border-2 border-slate-900">
			<h1 className="text-3xl font-bold my-4 ml-4">
				Filtrodo de raza por letras:
			</h1>
			<div className="flex flex-wrap gap-2 justify-center mb-4">
				{letras &&
					letras.map((letra, index) => {
						return (
							<Link
								className="w-28 bg-lime-500 text-white py-2 px-2 rounded-lg  text-center"
								to={`breed/${letra.toLowerCase()}`}
								key={index}
							>
								{letra}
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default ListaLetras;
