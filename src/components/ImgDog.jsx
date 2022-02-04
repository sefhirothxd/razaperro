import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ImgDog() {
	const [img, setImg] = useState();
	let { id } = useParams();

	let parts = id.split(' ');
	let breed = parts[0];
	let subBreed = parts[1];

	const resImgDog = async () => {
		if (breed !== undefined && subBreed !== undefined) {
			const res = await axios.get(
				`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
			);
			setImg(res.data.message);
		} else {
			const res2 = await axios.get(
				`https://dog.ceo/api/breed/${breed}/images/random`
			);
			setImg(res2.data.message);
		}
	};

	useEffect(() => {
		resImgDog();
	}, []);

	return (
		<div>
			{img !== undefined ? (
				<>
					<h1 className="text-3xl font-bold mb-4">Raza: {id} </h1>
					<picture className="max-w-xs">
						<img
							className="object-cover h-96"
							src={img}
							alt="imagen de perro"
						/>
					</picture>
				</>
			) : (
				<h2 className="text-3xl font-bold text-center">Cargando...</h2>
			)}
		</div>
	);
}

export default ImgDog;
