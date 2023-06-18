import React from 'react';
import { useReplicant } from 'use-nodecg';

export function Panel() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	const handleSubmit = (event) => {
		event.preventDefault();
		set_leftScore(event.target.leftScore.value)
		set_leftScore(event.target.rightScore.value)
	}

	const swapScore = (event: any) => {
		event.preventDefault();
		console.log("Swapping scores")
		let temp = leftScore
		set_leftScore(rightScore)
		set_rightScore(temp)
	}

	const resetScore = (event: any) => {
		event.preventDefault();
		console.log("Resetting scores")
		set_leftScore(0)
		set_rightScore(0)
	}

	return (
		<>
			<div>
				<label>Between Text</label>
				<input type="text" placeholder="Bo3" name="betweenText" value={betweenText} onChange={(event) => {
					set_betweenText(event.target.value)
				}} />
			</div>
			<hr />
			<div>
				<label>Left Score: </label>
				<input type="number"
					min={0}
					max={9}
					placeholder="0"
					name="leftScore"
					value={leftScore ?? 0}
					onChange={(event) => {
						set_leftScore(parseInt(event.target.value, 10));
					}} />
				<div style={{
					padding: '5px 0px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					width: '100%'
				}}>
					<hr style={{
						margin: '2rem',
						width: '33.3%'
					}} />
					<button onClick={swapScore} className="swapButton" name="swapScore" style={{margin:'2px 2px'}}>
						Swap Score
					</button>
					<button onClick={resetScore} className="toggleButton" name="resetScore" style={{margin:'2px 2px'}}>
						Reset Score
					</button>
					<hr style={{
						margin: '2rem',
						width: '33.3%'
					}} />
				</div>
				<label>Right Score: </label>
				<input type="number"
					min={0}
					max={9}
					placeholder="0"
					name="rightScore"
					value={rightScore ?? 0}
					onChange={(event) => {
						set_rightScore(parseInt(event.target.value, 10));
					}} />
			</div>

			<hr />

			<div className=''>
				<label>Score Visible </label>
				<input type='checkbox' checked={showScore} onChange={(() => set_showScore(!showScore))}/>
				<button onClick={(() => set_showScore(!showScore))} className="toggleButton w-36" name="toggleButton">
					Toggle Score
				</button>
			</div>
			<hr />
			<div>
				<label>Show Spoiler Overlay </label>
				<input type='checkbox' checked={showSpoilerOverlay} onChange={(() => set_showSpoilerOverlay(!showSpoilerOverlay))}/> 
			</div>
		</>
	)
}
