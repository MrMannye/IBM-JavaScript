import { Beach } from "./type";

interface SearchPlacesProps {
	results: Beach[];
}

export default function SearchPlaces({ results }: SearchPlacesProps) {
	return (
		<aside className="absolute w-[40%] h-full right-20 top-24 flex flex-col space-y-4">
			{results.map((result) => {
				return (
					<div className="h-[400px] w-full bg-white rounded-lg shadow-2xl shadow-black">
						<img className="h-64 w-full rounded-tr-lg rounded-tl-lg" src={result.imageUrl} alt={result.name} />
						<div className="p-4 text-black">
							<h3 className="font-bold mb-2">{result.name}</h3>
							<p className="text-sm">{result.description}</p>
							<button className="bg-blue-900 text-white p-2 px-4 rounded-lg mt-2 shadow-2xl shadow-black">Visitar</button>
						</div>
					</div>
				)
			})
			}
		</aside>
	)
}
