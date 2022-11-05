import React from "react";
import Footer from "../components/footer";
import "../contact.css";
import {  useNavigate } from "react-router-dom";

function contact() {
	const [formErrors, setFormErrors] = React.useState({});
	const [isSubmit, setIsSubmit] = React.useState(false);
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		checkbox: false,
	});

	const navigate = useNavigate();
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
		setFormErrors(validate(formData));
		setIsSubmit(true);
		setFormData(() => {
			return {
				firstName: "",
				lastName: "",
				email: "",
				message: "",
				checkbox: false,
			};
		});

	}

	React.useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstName) {
			errors.firstName = "First name is required!";
		}
		if (!values.lastName) {
			errors.lastName = "Last name is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.message) {
			errors.message = "Please enter a message";
		}
		if (!values.checkbox) {
			errors.checkbox = "Please check the box";
		}
		return errors;
	};

	return (
		<div className="container">
			<div className="wrapper">
				{Object.keys(formErrors).length === 0 && isSubmit ? (
					<div className="success-message">Message sent successfully</div>
				) : (
					""
				)}
				<div className="form-header">
					<h1 className="form-heading">Contact Me</h1>
					<p className="form-subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
				</div>
				<form action="/" method="post" onSubmit={handleSubmit}>
					<div className="form-input">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							id="first_name"
							placeholder="Enter your first name"
							onChange={handleChange}
							{...(formErrors.firstName && { style: { border: "1px solid red" } })}
						/>

						<span className="error">{formErrors.firstName}</span>
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
							{...(formErrors.lastName && { style: { border: "1px solid red" } })}
						/>
						<span className="error">{formErrors.lastName}</span>
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
							{...(formErrors.email && { style: { border: "1px solid red" } })}
						/>
						<span className="error">{formErrors.email}</span>
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
							{...(formErrors.message && { style: { border: "1px solid red" } })}
						></textarea>
						<span className="error">{formErrors.message}</span>
					</div>
					<div className="form-input">
						<div className="checkbox">
							<input
								type="checkbox"
								name="checkbox"
								value={formData.value}
								id="agree"
								checked={formData.checkbox}
								onChange={handleChange}
								{...(formErrors.checkbox && { style: { border: "1px solid red" } })}
							/>
							<p htmlFor="agree"> You agree to providing your data to {} who may contact you.</p>
						</div>
						<div className="terms-error__wrapper">
							<span className="error">{formErrors.checkbox}</span>
						</div>
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
