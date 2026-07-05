import { useState, useEffect } from 'react';
import displayImg1 from '../assets/display1.jpg';
import displayImg2 from '../assets/display2.jpg';
import displayImg3 from '../assets/display3.jpg';
import resortIcon from '../assets/resort-icon.png';
import scubaIcon from '../assets/scuba-icon.png';
import ferryIcon from '../assets/ferry-icon.png';
import resortLogo from '../assets/PayaBeachResort-logo.png';
import scubaLogo from '../assets/B&JDivingCentre-logo.png';
import ferryLogo from '../assets/redBus-logo.png';
import './Display.css';

export function Display() {
	const [current, setCurrent] = useState(0);
	const [incoming, setIncoming] = useState(null);
	const [leaving, setLeaving] = useState(null);
	const [isHoveringPaya, setIsHoveringPaya] = useState(false);
	const [isHoveringBJ, setIsHoveringBJ] = useState(false);
	const [isHoveringRedBus, setIsHoveringRedBus] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const next = (current + 1) % 3;

			// Start fade in
			setIncoming(next);

			// After fade in completes (1s)
			setTimeout(() => {
				setLeaving(current);

				// After fade out completes (1s)
				setTimeout(() => {
					setCurrent(next);
					setIncoming(null);
					setLeaving(null);
				}, 1000);

			}, 1000);

		}, 3000);

		return () => clearInterval(interval);
	}, [current]);

	return (
		<section className='display'>
			<div className="photos">
				<div className={`wrapper first ${current === 0 ? 'current' : ''} ${incoming === 0 ? 'incoming' : ''} ${leaving === 0 ? 'leaving' : ''}`}>
					<img src={displayImg1} alt="photo" />
					<img src={displayImg2} alt="photo" />
					<img src={displayImg3} alt="photo" />
				</div>
				<div className={`wrapper second ${current === 1 ? 'current' : ''} ${incoming === 1 ? 'incoming' : ''} ${leaving === 1 ? 'leaving' : ''}`}>
					<img src={displayImg1} alt="photo" />
					<img src={displayImg2} alt="photo" />
					<img src={displayImg3} alt="photo" />
				</div>
				<div className={`wrapper third ${current === 2 ? 'current' : ''} ${incoming === 2 ? 'incoming' : ''} ${leaving === 2 ? 'leaving' : ''}`}>
					<img src={displayImg1} alt="photo" />
					<img src={displayImg2} alt="photo" />
					<img src={displayImg3} alt="photo" />
				</div>
			</div>
			<div className="line"></div>
			<div className="text">
				<h2>Plan Your Trip</h2>
				<div>
					<div className="item">
						<div className="icon-logo">
							<img src={resortIcon} alt="icon" className="icon"  style={{opacity: isHoveringPaya ? '0' : '1'}}/>
							<img src={resortLogo} alt="logo" className='logo' style={{opacity: isHoveringPaya ? '1' : '0'}}/>
						</div>
						<p>Experience beachfront relaxation and stunning ocean views at <a href="https://www.payabeach.com/home" target='_blank' onMouseEnter={() => setIsHoveringPaya(true)} onMouseLeave={() => setIsHoveringPaya(false)}>Paya Beach Resort</a>.</p>
					</div>
					<div className="item">
						<p>Dive into adventure with <a href="https://www.divetioman.com/" target='_blank' onMouseEnter={() => setIsHoveringBJ(true)} onMouseLeave={() => setIsHoveringBJ(false)}>B&J Diving Centre</a>, Tioman's top-rated scuba experience.</p>
						<div className="icon-logo">
							<img src={scubaIcon} alt="icon" className="icon" style={{opacity: isHoveringBJ ? '0' : '1'}}/>
							<img src={scubaLogo} alt="logo" className='logo' style={{opacity: isHoveringBJ ? '1' : '0'}}/>
						</div>
					</div>
					<div className="item">
						<div className="icon-logo">
							<img src={ferryIcon} alt="icon" className="icon"  style={{opacity: isHoveringRedBus ? '0' : '1'}}/>
							<img src={ferryLogo} alt="logo" className='logo small'  style={{opacity: isHoveringRedBus ? '1' : '0'}}/>
						</div>
						<p>Book your hassle-free ferry ride to Tioman with <a href="https://www.redbus.my/" target='_blank' onMouseEnter={() => setIsHoveringRedBus(true)} onMouseLeave={() => setIsHoveringRedBus(false)}>redBus</a> for a smooth journey.</p>
					</div>
				</div>
			</div>
		</section>
	)
}