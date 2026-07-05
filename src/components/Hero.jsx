import './Hero.css'

export function Hero() {

	return (
		<section className='hero'>
			<div className='bg' />
			<div className="text">
				<h1>Plan Your Perfect <br /> Tioman Island Getaway</h1>
				<p>Discover Tioman Island with our curated travel picks! From luxury resort stays and vibrant dive spots to scenic ferry rides, planning your dream vacation is just a few clicks away. Book your escape today!</p>
				<div>
					<a className='btn black' href="#content">Learn More</a>
					<a className='btn white' href="#form">Book Now</a>
				</div>
			</div>
		</section>
	)
}