const Header = ({ score, bestScore }) => {
	return (
		<header>
			<nav className="container">
				<div className="nav-left">
					<h1>Chihab&apos;s Memory Game</h1>
				</div>
				<div className="nav-right">
					<ul>
						<li>Score: {score}</li>
						<li>Best score: {bestScore}</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
