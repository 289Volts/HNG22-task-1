import React from "react";
import Footer from "../components/footer";
import "../contact.css";

function contact() {
	const [formData, setFormData] = React.useState({ firstName: "", lastName: "", email: "", message: "", checkbox: false });


	// console.log(formData.lastName);
	function handleChange(e) {
		const { name, value, type, checked } = e.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.message === "") {
			alert("Please fill all fields");
		} else {
			alert("Thank you for your message");
		}
	}

	return (
		<div className="container">
			<div className="wrapper">
				<div className="form-header">
					<h1 className="form-heading">Contact Me</h1>
					<p className="form-subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
				</div>
				<form action="" method="post" onSubmit={handleSubmit}>
					<div className="form-input">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							id="first_name"
							placeholder="Enter your first name"
							onChange={handleChange}
						/>
						<span className="error"><em>Error Message</em></span>
					</div>
					<div className="form-input">
						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							id="last_name"
							placeholder="Enter your last name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							id="email"
							placeholder="yourname@email.com"
							onChange={handleChange}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="message">Your Message</label>
						<textarea
							name="message"
							value={formData.message}
							id="message"
							rows="8"
							placeholder="Send me a message and I'll reply you as soon as possible..."
							onChange={handleChange}
						></textarea>
					</div>
					<div className="form-input checkbox">
						<input
							type="checkbox"
							name="checkbox"
							value={formData.value}
							id="agree"
							checked={formData.checkbox}
							onChange={handleChange}
						/>
						<p htmlFor="agree"> You agree to providing your data to who may contact you.</p>
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
