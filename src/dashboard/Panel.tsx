import React from 'react';
import { useReplicant } from 'use-nodecg';

export function Panel() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);

	const [flipScore, set_flipScore] = useReplicant<boolean>('flipScore', false);

	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	const FlipScore = (event: any) => {
		event.preventDefault();
		console.log("Flipping scores")
		set_flipScore(!flipScore)
	}

	const resetScore = (event: any) => {
		event.preventDefault();
		console.log("Resetting scores")
		set_leftScore(0)
		set_rightScore(0)
	}

	return (
		<div className='m-2'>
			<div>
				<label>Between Text</label>
				<input type="text" placeholder="Bo3" name="betweenText" value={betweenText} onChange={(event) => {
					set_betweenText(event.target.value)
				}} />
				<div className='flex flew-row px-12'>
					<div className='flex flew-row w-1/2 text-center justify-center items-center'>
						<label className="text-xl pr-4">Flip Score</label>
						<input type='checkbox' checked={flipScore} onChange={(() => set_flipScore(!flipScore))} className="w-6 h-6" />
					</div>

					<button onClick={FlipScore} className="swapButton w-1/2" name="swapScore">
						Flip Score
					</button>
				</div>
			</div>
			<hr className='m-4' />

			<div className='flex flex-row justify-evenly items-center'>
				<div className='flex flex-col w-1/4 justify-center items-center'>
					<button className='w-12 h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded' onClick={() => { leftScore >= 9 ? '' : set_leftScore(leftScore + 1) }}>+</button>
					<h1 className='text-center text-6xl'>{leftScore}</h1>
					<button className='w-12 h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded' onClick={() => { leftScore <= 0 ? '' : set_leftScore(leftScore - 1) }}>-</button>
				</div>

				<button onClick={resetScore} className="w-1/3 h-16 px-4 toggleButton" name="resetScore">
					Reset Score
				</button>

				<div className='flex flex-col w-1/4 items-center'>
					<button className='w-12 h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded' onClick={() => { rightScore >= 9 ? '' : set_rightScore(rightScore + 1) }}>+</button>
					<h1 className='text-center text-6xl'>{rightScore}</h1>
					<button className='w-12 h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded' onClick={() => { rightScore <= 0 ? '' : set_rightScore(rightScore - 1) }}>-</button>
				</div>
			</div>

			<hr className='m-4' />

			<div className=''>
				<label>Score Visible </label>
				<input type='checkbox' checked={showScore} onChange={(() => set_showScore(!showScore))} />
				<button onClick={(() => set_showScore(!showScore))} className="toggleButton w-36" name="toggleButton">
					Toggle Score
				</button>
			</div>
			<hr className='m-4' />
			<div>
				<label>Show Spoiler Overlay </label>
				<input type='checkbox' checked={showSpoilerOverlay} onChange={(() => set_showSpoilerOverlay(!showSpoilerOverlay))} />
			</div>
		</div>
	)
}
