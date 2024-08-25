import { useEffect, useState } from 'react'
import './App.css'
import { Beach } from './type'
import SearchPlaces from './SearchPlaces'

function App() {

	const [state, setState] = useState<string>('')
	const [search, setSearch] = useState<string>('')
	const [countries, setCountries] = useState<Beach[]>([])

	const toggleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		setSearch('')
	}

	useEffect(() => {
		fetch('https://randomuser.me/api/')
			.then(response => response.json())
			.then(data => {
				console.log(data.results[0].picture.thumbnail)
				setState(data.results[0].picture.thumbnail)
			}).catch(error => {
				console.error('There was an error!', error)
			})
	}, [])
	useEffect(() => {
		fetch('../travel.json')
			.then(response => response.json())
			.then(data => {
				console.log(data[search])
				setCountries(data[search])
			}).catch(error => {
				console.error('There was an error!', error)
			})
	}, [search])
	return (
		<>
			<div className="background-absolute"></div>
			<header>
				<nav>
					<a href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
						<h1>TravelBloom</h1>
					</a>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#about-us">About Us</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
					<div className="search-bar">
						<input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Enter a destination or keyword" />
						<button>Search</button>
						<button onClick={e => toggleClear(e)}>Clear</button>
					</div>
				</nav>
			</header>
			<main className="container">
				<section className="hero min-h-screen flex flex-col items-start mt-10 w-1/3">
					<h1 className='font-extrabold'>EXPLORE DREAM DESTINATION</h1>
					<p className='hero-description'>It encourages exploration of unfamiliar territories, embracing diverse cultures and landscapes, while pursuing the desired destination that captivates the heart and ignites a sense of wonder.</p>
					<button className='hero-button'>BOOK NOW</button>

					{!countries ? <p>Loading...</p> : <SearchPlaces results={countries} />}

				</section>
				<section id='about-us' className='flex flex-col items-center justify-center space-y-4 py-24'>
					<div>
						<h1 className='font-extrabold uppercase text-5xl mb-12'>About Us</h1>
						<p>
							TravelBloom is a travel agency that offers a wide range of travel services to clients. We provide a variety of travel packages to suit the needs of our clients. Our services include booking flights,
							hotels, car rentals, and cruises. We also offer travel insurance and assistance with visa applications. Our team of experienced travel agents is dedicated to providing excellent customer service and
							ensuring that our clients have a memorable travel experience. Whether you are planning a family vacation, a romantic getaway, or a business trip, TravelBloom can help you find the perfect travel package at an affordable price.
						</p>
						<p>Contact us today to start planning your next adventure!</p>
					</div>
					<div className='flex items-center space-x-4'>
						<h2 className='font-extrabold uppercase text-4xl mb-12'>Our Team</h2>
						<div className='bg-slate-800 flex flex-col items-start bg-opacity-50 p-8'>
							<img src={state} className='rounded-full' alt="team member" />
							<h3>John Doe</h3>
							<p>Jonh is responsable for...</p>
							<button className='p-1 text-white bg-blue-900 w-full text-sm border border-white rounded-lg mt-3'>CEO</button>
						</div>
						<div className='bg-slate-800 flex flex-col items-start bg-opacity-50 p-8'>
							<img src={state} className='rounded-full' alt="team member" />
							<h3>John Doe</h3>
							<p>Jonh is responsable for...</p>
							<button className='p-1 text-white bg-blue-900 w-full text-sm border border-white rounded-lg mt-3'>CEO</button>
						</div>
						<div className='bg-slate-800 flex flex-col items-start bg-opacity-50 p-8'>
							<img src={state} className='rounded-full' alt="team member" />
							<h3>John Doe</h3>
							<p>Jonh is responsable for...</p>
							<button className='p-1 text-white bg-blue-900 w-full text-sm border border-white rounded-lg mt-3'>CEO</button>
						</div>
					</div>
				</section>
				<section className='flex items-center justify-between w-full mt-20'>
					<h2 className='font-extrabold uppercase text-4xl mb-12'>Contact Us</h2>
					<form action="" className='flex flex-col space-y-2 w-2/3'>
						<input className='p-4 bg-slate-900 bg-opacity-60 focus:outline-none rounded-md focus:text-gray-500' type="text" placeholder="Name" />
						<input className='p-4 bg-slate-900 bg-opacity-60 focus:outline-none rounded-md focus:text-gray-500' type="email" placeholder="Email" />
						<textarea className='p-4 bg-slate-900 bg-opacity-60 focus:outline-none rounded-md focus:text-gray-500' name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
						<button className='bg-blue-900 p-3 rounded-lg'>Submit</button>
					</form>
				</section>
			</main>
		</>
	)
}

export default App
