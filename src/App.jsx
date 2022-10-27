import React from "react";
import "./App.css";
import profileImg from "./assets/profile-img.jpg";
import share from "./assets/share-button.svg";
import dots from "./assets/dots.svg";
import github from "./assets/icon.svg";
import slack from "./assets/slack.svg";
import i4g from "./assets/I4G.svg";
import zuri from "./assets/Zuri.Internship_Logo.svg";

function App() {
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
					</div>
					<img className="float-desktop" src={share} alt="" />
					<img className="float" src={dots} alt="" />
					{/* <p id="slack">Slack Username: @289Volts</p> */}
				</header>
				<main>
					<a href="https://twitter.com/289volts" id="twitter" target="blank">
						Twitter
					</a>
					<a href="https://training.zuri.team/" id="btn__zur" target="blank">
						Zuri Team
					</a>
					<a href="http://books.zuri.team" id="books" target="blank">
						Zuri Books
					</a>
					<a href="https://books.zuri.team/python-for-beginners?ref_id=289volts" id="book__python" target="blank">
						Python Books
					</a>
					<a href="https://backgroundcheck.zuri.team/" id="pitch" target="blank">
						Background Check for Coders
					</a>
					<a href="https://books.zuri.team/design-rules" id="book__design" target="blank">
						Design Books
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
				<footer>
					<a href="https://zuri.team/" target="blank">
						<img src={zuri} alt="zuri logo" />
					</a>
					<p className="footer-text">HNG Internship 9 Frontend Task</p>
					<a href="https://ingressive.org/" target="blank">
						<img src={i4g} alt="I4G logo" />
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
