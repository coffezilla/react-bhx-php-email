import axios from 'axios';
import { useState } from 'react';

function App() {
	const [formInput, setFormInput] = useState<any>({
		name: '',
		email: '',
		message: '',
	});

	const handleInput = (e: any) => {
		setFormInput({
			...formInput,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: any) => {
		const formData = new FormData();
		formData.append('name', formInput.name);
		formData.append('email', formInput.email);
		formData.append('message', formInput.message);

		axios({
			url: 'http://react-bhx-php-email/email/send_email_default.php',
			method: 'post',
			data: formData,
		})
			.then((responseSubmit) => {
				console.log('sending...', responseSubmit);
				if (responseSubmit.data.response === 1) {
					console.log('Sended');
				} else {
					console.log('NOT Sended');
				}
			})
			.catch((errorSubmit) => {
				console.log('error...', errorSubmit);
			});

		e.preventDefault();
		console.log('sended!');
	};

	return (
		<div>
			<h1>Sample Contact Form</h1>
			<pre>{JSON.stringify(formInput, null, 1)}</pre>
			<p>
				TIP: The PHP file of this example needs a correct e-mail in order to make this example to
				work.
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					Name:
					<br />
					<input type="text" name="name" id="name" value={formInput.name} onChange={handleInput} />
					<br />
				</label>
				<label htmlFor="email">
					E-mail:
					<br />
					<input
						type="text"
						name="email"
						id="email"
						value={formInput.email}
						onChange={handleInput}
					/>
					<br />
				</label>
				<label htmlFor="message">
					Message:
					<br />
					<textarea name="message" id="message" value={formInput.message} onChange={handleInput} />
				</label>
				<br />
				<button type="submit">Send Mail</button>
			</form>
		</div>
	);
}

export default App;
