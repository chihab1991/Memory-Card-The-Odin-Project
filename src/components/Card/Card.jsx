import shuffleArray from "../../functions/shuffleArray";
import resetArray from "../../functions/resetArray";
const Card = ({
	data,
	setData,
	character,
	score,
	setScore,
	bestScore,
	setBestScore,
}) => {
	const shuffleTheArray = () => {
		if (!character.clicked) {
			setScore(score + 1);
			bestScore < score + 1 ? setBestScore(score + 1) : setBestScore(bestScore);
			const newArr = data.map((el) => {
				if (el.id === character.id) {
					return { ...el, clicked: true };
				}
				return el;
			});
			shuffleArray(newArr);
			console.log(newArr);
			setData(newArr);
		}
		if (character.clicked) {
			setScore(0);
			const reseted = resetArray([...data]);
			shuffleArray(reseted);
			setData(reseted);
		}
	};

	return (
		<div className="card" onClick={shuffleTheArray}>
			<img src={character.imgUrl} alt={character.charName} />
			<h2>{character.charName}</h2>
		</div>
	);
};

export default Card;
