import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const ListaPerros = () => {
	const [raza, setRaza] = useState([]);
	let { id } = useParams();
	const apibreeds = async () => {
		const res = await axios.get('https://dog.ceo/api/breeds/list/all');
		console.log(res.data.message);
		Object.entries(res.data.message).map(([key, value]) => {
			if (value.length > 0) {
				value.map((item) => {
					setRaza((raza) => [...raza, `${key} ${item}`]);
				});
			} else {
				setRaza((raza) => [...raza, key]);
			}
			// console.log(key, value);
		});
	};

	useEffect(() => {
		apibreeds();
	}, [setRaza]);

	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">Lista de razas</h1>
			<div className="flex gap-2 flex-wrap justify-center">
				{raza &&
					raza.map((raza, index) => {
						const razas = raza.startsWith(id.toLowerCase()) && (
							<Link
								className=" w-40 h-10 bg-lime-500 text-white py-2 px-2 rounded-lg  text-center"
								to={`/breed/${id.toLocaleLowerCase()}/${raza}/image`}
								key={index}
							>
								{raza}
							</Link>
						);
						return razas;
					})}
			</div>
		</div>
	);
};

export default ListaPerros;
