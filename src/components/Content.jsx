import resortBg from '../assets/PayaBeachResort.jpg';
import scubaBg from '../assets/B&JDivingCentre.jpg';
import ferryBg from '../assets/redBus.jpg';
import './Content.css';

export function Content() {

    return (
        <section className='content' id='content'>
            <div className='wrapper'>
                <div className="card">
                    <div className="bg">
                        <img src={resortBg} alt="background" />
                    </div>
                    <div className='text'>
                        <h3>Paya Beach Resort</h3>
                        <p>Enjoy stunning ocean views and elegant rooms alongside a variety of resort highlights</p>
                    </div>
                    <div className="item-container">
                        <ul>
                            <li><span>2 nights at Paya Beach Spa & Dive Resort</span></li>
                            <li><span>Daily breakfast, BBQ dinner, and themed lunch</span></li>
                            <li><span>Snorkeling trip to Ringgis Island & Marine Park</span></li>
                            <li><span>Eco Educational & Survival Program</span></li>
                            <li><span>And more...</span></li>
                        </ul>
                    </div>
                    <a className='btn' href="https://www.payabeach.com/pulau_tioman_packages" target="_blank">Grab the Deals</a>
                </div>
                <div className="card">
                    <div className="bg">
                        <img src={scubaBg} alt="background" />
                    </div>
                    <div className='text'>
                        <h3>B&J Diving Centre</h3>
                        <p>Explore stunning coral reefs and vibrant marine life with a custom underwater adventure.</p>
                    </div>
                    <div className="item-container">
                        <ul>
                            <li><span>Feb: Fish Identification - <span className='strikethrough'>MYR 700</span> MYR 550</span></li>
                            <li><span>Mar: Deep Diver - <span className='strikethrough'>MYR 1000</span> MYR 900</span></li>
                            <li><span>Apr: Wreck Diver - <span className='strikethrough'>MYR 1000</span> MYR 900</span></li>
                            <li><span>May: <span className="delete">Enriched Air </span>Nitrox Diver - <span className='strikethrough'>MYR 700</span> MYR 650</span></li>
                            <li><span>And more...</span></li>
                        </ul>
                    </div>
                    <a className='btn' href="https://www.divetioman.com/rates-packages/promotions/" target="_blank">Grab the Deals</a>
                </div>
                <div className="card">
                    <div className="bg">
                        <img src={ferryBg} alt="background" />
                    </div>
                    <div className='text'>
                        <h3>redBus</h3>
                        <p>Enjoy a smooth journey from the mainland to the island and do away with travel stress.</p>
                    </div>
                    <div className="item-container">
                        <ul>
                            <li><span>Get 10% Discount</span></li>
                            <li><span>Save Up to 50%</span></li>
                            <li><span>Get 25% Cashback Up to RM10</span></li>
                            <li><span>Get RM5 Off</span></li>
                            <li><span>And more...</span></li>
                        </ul>
                    </div>
                    <a className='btn' href="https://www.redbus.my/offers#RBFERRY" target="_blank">Grab the Deals</a>
                </div>
            </div>
        </section>
    )
}