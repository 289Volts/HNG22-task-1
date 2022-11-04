import i4g from "../assets/I4G.svg";
import zuri from "../assets/Zuri.Internship_Logo.svg";

function footer() {
	return (
		<footer>
			<a href="https://zuri.team/" target="blank">
				<img src={zuri} alt="zuri logo" />
			</a>
			<p className="footer-text">HNG Internship 9 Frontend Task</p>
			<a href="https://ingressive.org/" target="blank">
				<img src={i4g} alt="I4G logo" />
			</a>
		</footer>
	);
}

export default footer;
