import dayjs from 'dayjs';
import { useState } from 'react';
import './Form.css';

export function Form() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [homeAddress, setHomeAddress] = useState('');
	const [dob, setDob] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [sdate, setSdate] = useState('');
	const [edate, setEdate] = useState('');
	const [memberCount, setMemberCount] = useState('1');
	const [travelPref, setTravelPref] = useState('Paya Beach Resort, B&J Diving Centre and redBus');
	const [membership, setMembership] = useState({
		paya: false,
		diving: false,
		redBus: false,
		none: false,
	});
	const [spReq, setSpReq] = useState('');
	// const [selectIsOpen, setSelectIsOpen] = useState(false);
	const [declared, setDeclared] = useState(false);
	const [isShaking, setIsShaking] = useState(false);
	const [submitpass, setSubmitPass] = useState(false);

	const hasMembershipSelection = Object.values(membership).some(Boolean);
	const today = dayjs().format('YYYY-MM-DD');
	const eighteenYearsOld = dayjs().subtract(18, 'year').endOf('year').format('YYYY-MM-DD');

	const openDatePicker = (event) => event.target.showPicker?.();
	const membershipStatus = (key) => {
		if (key === 'none') {
			setMembership({
				paya: false,
				diving: false,
				redBus: false,
				none: !membership.none,
			});
		} else {
			setMembership({
				...membership,
				[key]: !membership[key],
				none: false,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const firstNameInput = document.getElementById('fname');
		const lastNameInput = document.getElementById('lname');
		const homeAddressInput = document.getElementById('home-addr');
		const dobInput = document.getElementById('dob');
		const emailAddressInput = document.getElementById('email');
		const contactNumberInput = document.getElementById('contact-num');
		const sdateInput = document.getElementById('strip');
		const edateInput = document.getElementById('etrip');

		const requiredInputs = [
			firstNameInput,
			lastNameInput,
			homeAddressInput,
			dobInput,
			emailAddressInput,
			contactNumberInput,
			sdateInput,
			edateInput,
		];

		if (requiredInputs.some(input => !input.value.trim())) {
			alert('Please fill in the required field.');
			return;
		}

		if (emailAddressInput.validity.typeMismatch) {
			alert('Please enter a valid email address.');
			return;
		}

		if (!hasMembershipSelection) {
			alert('Please select your membership status.');
			return;
		}

		if (!declared) {
			setIsShaking(true);
			return;
		}

		setSubmitPass(true);
	}

	const selectedMemberships = [
		membership.paya && 'Paya Beach Resort',
		membership.diving && 'B&J Diving Centre',
		membership.redBus && 'redBus',
	].filter(Boolean);

	const existingMembershipText =
		membership.none
			? 'None'
			: selectedMemberships.length === 1
				? `Only ${selectedMemberships[0]}`
				: selectedMemberships.length === 2
					? selectedMemberships.join(' and ')
					: selectedMemberships.length === 3
						? `${selectedMemberships.slice(0, -1).join(', ')} and ${selectedMemberships.at(-1)}`
						: '';

	const clearform = () => {
		setFirstName('');
		setLastName('');
		setHomeAddress('');
		setDob('');
		setEmailAddress('');
		setContactNumber('');
		setSdate('');
		setEdate('');
		setMemberCount('1');
		setTravelPref('Paya Beach Resort, B&J Diving Centre and redBus');
		setMembership({
			paya: false,
			diving: false,
			redBus: false,
			none: false,
		});
		setDeclared(false);
		setSpReq('');
	}

	const bookingDetails = [
		...(homeAddress.trim() ? [['Home Address:', homeAddress]] : []),
		...(dob ? [['Date of Birth:', dob]] : []),
		...(contactNumber ? [['Contact Number:', contactNumber]] : []),
		...(sdate || edate ? [['Trip Duration:', sdate && edate ? `From ${sdate} to ${edate}` : sdate ? `From ${sdate}` : `To ${edate}`]] : []),
		['Travel Preferences:', travelPref],
		...(existingMembershipText ? [['Existing Memberships:', existingMembershipText]] : []),
		['Number of members:', memberCount],
	];

	return (
		<section className="form" id='form'>
			<div className='bg' />
			<form noValidate action="" method="post" onSubmit={handleSubmit} className={submitpass ? 'back' : 'front'}>
				<div className='personal-details'>
					<h2>Personal Details</h2>
					<div className='grid-two-col'>
						<div>
							<label htmlFor="fname">First Name {!firstName && (<span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="text" name="first-name" id="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
						</div>
						<div>
							<label htmlFor="lname">Last Name {!lastName && (<span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="text" name="last-name" id="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
						</div>
						<div>
							<label htmlFor="home-addr">Home Address {!homeAddress && (<span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="text" name="home-address" id="home-addr" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} required />
						</div>
						<div>
							<label htmlFor="dob">Date of Birth {!dob && (<span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="date"
								name="date-of-birth"
								id="dob"
								max={eighteenYearsOld}
								value={dob}
								onClick={openDatePicker}
								onChange={(e) => {
									const value = e.target.value;

									if (value > eighteenYearsOld) {
										return;
									}

									setDob(value);
								}}
								className={dob ? 'has-date' : ''}
								required />
						</div>
						<div>
							<label htmlFor="email">Email Address {(!emailAddress && <span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="email" name="email-address" id="email" placeholder="example@domain.com" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
						</div>
						<div>
							<label htmlFor="contact-num">Contact Number {(!contactNumber && <span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="tel" name="contact-number" id="contact-num" placeholder='0123456789' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
						</div>
					</div>
				</div>
				<div className='trip-details'>
					<h2>Trip Details</h2>
					<div className='grid-two-col'>
						<div>
							<label htmlFor="strip">Trip Start Date {(!sdate && <span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="date"
								name="trip-start-date"
								id="strip"
								value={sdate}
								min={today}
								max={edate || undefined}
								onClick={openDatePicker}
								onChange={(e) => {
									const value = e.target.value;

									if (value < today) {
										return;
									}

									if (edate && value > edate) {
										return;
									}

									setSdate(value);
								}}
								className={sdate ? 'has-date' : ''}
								required />
						</div>
						<div>
							<label htmlFor="etrip">Trip End Date {(!edate && <span className='must-fill-in'>*</span>)}</label>
							<br />
							<input type="date"
								name="trip-end-date"
								id="etrip"
								value={edate}
								min={sdate || today}
								onClick={openDatePicker}
								onChange={(e) => {
									const value = e.target.value;

									if (value < today) {
										return;
									}

									if (sdate && value < sdate) {
										return;
									}

									setEdate(value);
								}}
								className={edate ? 'has-date' : ''}
								required />
						</div>
						<div>
							<label htmlFor="member-num">Number of Members</label>
							<br />
							{/* <div className={`select-wrapper ${selectIsOpen ? 'open' : ''}`}> */}
							<div className='select-wrapper'>
								<select name="number-of-members" id="member-num" value={memberCount} onChange={(e) => setMemberCount(e.target.value)}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3-10">3-10</option>
									<option value="More than 10">More than 10</option>
								</select>
							</div>
						</div>
						<div>
							<label htmlFor="travel-pref">Travel Preferences</label>
							<br />
							<div className="select-wrapper">
								<select name="travel-preferences" id="travel-pref" value={travelPref} onChange={(e) => setTravelPref(e.target.value)}>
									<option value="Paya Beach Resort, B&J Diving Centre and redBus">Paya Beach Resort, B&J Diving Centre and redBus</option>
									<option value="Paya Beach Resort and B&J Diving Centre">Paya Beach Resort and B&J Diving Centre</option>
									<option value="Paya Beach Resort and redBus">Paya Beach Resort and redBus</option>
									<option value="B&J Diving Centre and redBus">B&J Diving Centre and redBus</option>
									<option value="Only Paya Beach Resort">Only Paya Beach Resort</option>
									<option value="Only B&J Diving Centre">Only B&J Diving Centre</option>
									<option value="Only redBus">Only redBus</option>
								</select>
							</div>
						</div>
					</div>
					<div className='addition-margin'>
						<p>Do you hold a membership with any of these? {(!hasMembershipSelection && <span className='must-fill-in'>*</span>)}</p>
						<div className="checkboxes">
							<div>
								<input type="checkbox" name="membership" id="Paya-Beach-Resort" checked={membership.paya} onChange={() => membershipStatus('paya')} />
								<div className="checkmark" />
								<label htmlFor="Paya-Beach-Resort">Paya Beach Resort</label>
							</div>
							<div>
								<input type="checkbox" name="membership" id="B&J-Diving-Centre" checked={membership.diving} onChange={() => membershipStatus('diving')} />
								<div className="checkmark" />
								<label htmlFor="B&J-Diving-Centre">B&J Diving Centre</label>
							</div>
							<div>
								<input type="checkbox" name="membership" id="redBus" checked={membership.redBus} onChange={() => membershipStatus('redBus')} />
								<div className="checkmark" />
								<label htmlFor="redBus">redBus</label>
							</div>
							<div>
								<input type="checkbox" name="membership" id="None-of-these" checked={membership.none} onChange={() => membershipStatus('none')} />
								<div className="checkmark" />
								<label htmlFor="None-of-these">None of these</label>
							</div>
						</div>
					</div>
					<div>
						<label htmlFor="sp-request">Special Request</label>
						<br />
						<textarea name="special-request" id="sp-request" placeholder='Enter any special requests here...' onChange={(e) => setSpReq(e.target.value)} />
					</div>
					<div className='declare'>
						<input type="checkbox" name="declaration" id="declare" checked={declared} onChange={(e) => setDeclared(e.target.checked)} />
						<div className="checkmark" />
						<label htmlFor="declare" className={isShaking ? 'shake' : ''} onAnimationEnd={() => setIsShaking(false)}>I understand this is a demo project. No personal data or choices are recorded.</label>
					</div>
				</div>
				<div className='btn'>
					<button type='submit' className="confirm-btn">Comfirm Booking</button>
					<div className="clear-btn" onClick={clearform}>Clear Booking</div>
				</div>
			</form>
			<div className={`result ${submitpass ? 'front' : 'back'}`}>
				<h2>Booking Details</h2>
				<h3>{`Dear ${firstName} ${lastName},`}</h3>
				<p className='tq'>Thank you for registering with us! Below are your booking details:</p>
				<div className='details-one'>
					<div className='title'>
						{bookingDetails.map(([title], index) => (
							<div key={`${title}-one`} className={index % 2 === 0 ? 'alpha' : 'beta'} >
								{title}
							</div>
						))}
						{spReq.trim() ? <div className='beta'>Special Requests:</div> : null}
					</div>
					<div className='ans'>
						{bookingDetails.map(([, value], index) => (
							<div key={`${value}-${index}-one`} className={index % 2 === 0 ? 'alpha' : 'beta'}>
								{value}
							</div>
						))}
						{spReq.trim() ? <div className='beta'>{spReq}</div> : null}
					</div>
				</div>
				<div className='details-two'>
					{bookingDetails.map(([title, value], index) => (
						<div key={`${title}-${value}-${index}`}>
							<div key={`${title}-two`} className={index % 2 === 0 ? 'title alpha' : 'title beta'} >
								{title}
							</div>
							<div key={`${value}-${index}-two`} className={index % 2 === 0 ? 'ans alpha' : 'ans beta'}>
								{value}
							</div>
						</div>
					))}
					{spReq.trim() ?
						<div>
							<div className='title beta'>Special Requests:</div>
							<div className='ans beta'>{spReq}</div>
						</div> : null}
				</div>
				<p className='email-copy'>{`A copy of your submitted form will be emailed to ${emailAddress}. Enjoy your trip and create unforgettable memories!`}</p>
				<p className='red'>*Please note that this is a project demo. No personal data or choices are recorded.</p>
			</div>
		</section>
	)
}