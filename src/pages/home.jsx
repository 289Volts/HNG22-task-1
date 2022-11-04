import "../home.css";
import profileImg from "../assets/profile-img.jpg";
import share from "../assets/share-button.svg";
import dots from "../assets/dots.svg";
import github from "../assets/github.svg";
import slack from "../assets/slack.svg";
import Footer from "../components/footer";

function homePage() {
	return (
		<div className="App">
			<div className="container">
				<header>
					<div className="profile">
						<div className="profile-img">
							<img id="profile__img" src={profileImg} alt="profile picture" />
						</div>
						<a href="https://twitter.com/289volts" id="twitter" target="blank" title="Link to my Twitter handle">
							@289Volts
						</a>
						{/* <p id="slack">Slack Username: @289Volts</p> */}
					</div>
					<img className="float-desktop" src={share} alt="" />
					<img className="float" src={dots} alt="" />
				</header>
				<main>
					<a href="https://twitter.com/289volts" id="twitter" target="blank" title="Link to my Twitter handle">
						Twitter
					</a>
					<a
						href="https://training.zuri.team/"
						id="btn__zur"
						target="blank"
						title="Click here to explore the world of Zuri"
					>
						Zuri Team
					</a>
					<a href="http://books.zuri.team" id="books" target="blank" title="Get books on Design and coding here">
						Zuri Books
					</a>
					<a
						href="https://books.zuri.team/python-for-beginners?ref_id=289volts"
						id="book__python"
						target="blank"
						title="We've got the best books on Python for Beginners and Experts"
					>
						Python Books
					</a>
					<a
						href="https://backgroundcheck.zuri.team/"
						id="pitch"
						target="blank"
						title="Need to verify your employees? Let's help you do that."
					>
						Background Check for Coders
					</a>
					<a
						href="https://books.zuri.team/design-rules"
						id="book__design"
						target="blank"
						title="Learn Design through our curated list of books."
					>
						Design Books
					</a>
					<a href='' id="contact" target="blank" title="Learn Design through our curated list of books.">
						Contact Me
					</a>

					<div className="social-links">
						<a href="#">
							<img src={slack} alt="zuri logo" />
						</a>
						<a href="https://github.com/289volts" target="blank">
							<img src={github} alt="zuri logo" />
						</a>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default homePage;
