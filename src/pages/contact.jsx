import Footer from "../components/footer";
import "../contact.css";

function contact() {
	return (
		<div className="container">
			<div className="wrapper">
				<div className="form-header">
					<h1 className="form-heading">Contact Me</h1>
					<p className="form-subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
				</div>
				<form action="" method="post">
					<div className="form-input">
						<label htmlFor="first_name">First Name</label>
						<input type="text" name="firstName" id="first_name" placeholder="Enter your first name" />
					</div>
					<div className="form-input">
						<label htmlFor="last_name">Last Name</label>
						<input type="text" name="lastName" id="last_name" placeholder="Enter your last name" />
					</div>
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" placeholder="yourname@email.com" />
					</div>
					<div className="form-input">
						<label htmlFor="message">Your Message</label>
						<textarea
							name="message"
							id="message"
							rows="8"
							placeholder="Send me a message and I'll reply you as soon as possible..."
						></textarea>
					</div>
					<div className="form-input checkbox">
						<input type="checkbox" name="checkbox" id="agree" />
						<p htmlFor="agree">You agree to providing your data to {name} who may contact you.</p>
					</div>
					<div className="form-cta">
						<button type="submit">Send Message</button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default contact;
