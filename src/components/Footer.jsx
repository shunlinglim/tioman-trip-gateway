import './Footer.css'

export function Footer() {

	return (
		<footer>
			<div className='item'>
				<p><a href="https://www.payabeach.com/home" target='_blank' className='bold'>Paya Beach Resort</a></p>
				<p>Email: <a href="mailto: sales@payabeach.com" target='_blank'>sales@payabeach.com</a></p>
				<p>Tel: +60 94197100</p>
			</div>
			<div className='item'>
				<p><a href="https://www.divetioman.com/" target='_blank' className='bold'>B&J Diving Centre</a></p>
				<p>Email: <a href="mailto: info@divetioman.com" target='_blank'>info@divetioman.com</a></p>
				<p>Tel: +60 94191218</p>
			</div>
			<div className='item'>
				<p><a href="https://www.redbus.my/" target='_blank' className='bold'>redBus</a></p>
				<p>Email: <a href="mailto: partner.support@redbus.my" target='_blank'>partner.support@redbus.my</a></p>
				<p>Tel: +60 392121628</p>
			</div>
			<div className='item'>
				<p className="bold">Created by:</p>
				<p>Lim Shun Ling</p>
				<p>MAT2209099</p>
				<p>Mathematics and Applied Mathematics</p>
			</div>
		</footer>
	)
}