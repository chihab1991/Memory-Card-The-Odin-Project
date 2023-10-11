import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";

function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://back-dragon-ballzs-mwfw-dev.fl0.io/api`
				);
				if (res.status === 200) {
					setLoading(false);
					setError(false);
					const actualData = await res.json();
					const dataArr = actualData.characters
						.map((d) => ({
							id: d.id,
							charName: d.name,
							imgUrl: d.img,
							clicked: false,
						}))
						.slice(0, 12);
					setData(dataArr);
				}
				if (res.status === 404) {
					setLoading(false);
					setError(true);
					throw new Error("something went wrong!");
				}
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<main>
				<div className="container">
					{loading && <Loading />}
					{data && (
						<p className="game-rules">
							Get points by clicking on an image but don&apos;t click on any
							more than once!
						</p>
					)}
					<div className="cards-grid">
						{data &&
							data.map((d) => (
								<Card
									key={d.id}
									character={d}
									data={data}
									setData={setData}
									setScore={setScore}
									setBestScore={setBestScore}
									score={score}
									bestScore={bestScore}
								/>
							))}
					</div>
					{error && <ErrorMsg />}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
