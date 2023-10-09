import React from 'react';
import { useReplicant } from 'use-nodecg';
import { Tooltip as ReactTooltip } from "react-tooltip";

export function Panel() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);

	const [flipScore, set_flipScore] = useReplicant<boolean>('flipScore', false);

	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	const [extraInfo1, set_extraInfo1] = useReplicant<string>('extraInfo1', '')
	const [extraInfo2, set_extraInfo2] = useReplicant<string>('extraInfo2', '')


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
				<label className='extraInfo'><span className='text-3xl align-middle'>🛈</span>Round Info</label>
				<input type="text" placeholder="Extra Info 1" name="extraInfo1" value={extraInfo1} onChange={(event) => {
					set_extraInfo1(event.target.value)
				}} />
				<input type="text" placeholder="Extra Info 2" name="extraInfo2" value={extraInfo2} onChange={(event) => {
					set_extraInfo2(event.target.value)
				}} />
				<ReactTooltip
					anchorSelect=".extraInfo"
					id="tooltip1"
					place="bottom"
					//@ts-ignore
					content={<span>2 Boxes for Extra Info displayed in the Lobby Score</span>}
				/>
			</div>

			<div>
				<label className='betweenText'><span className='text-3xl align-middle'>🛈</span>Between Text</label>
				<input type="text" placeholder="Bo3" name="betweenText" value={betweenText} onChange={(event) => {
					set_betweenText(event.target.value)
				}} />

				<ReactTooltip
					anchorSelect=".betweenText"
					id="tooltip1"
					place="bottom"
					//@ts-ignore
					content={<span>The text between the scores InGame. Can be anything</span>}
				/>

				<div className='flex flew-row px-6'>
					<div className='flipScore flex flew-row w-4/6 pr-6 text-center justify-center items-center'>
						<label className="text-xl w-full"><span className='text-3xl align-middle'>🛈</span> Flip Score</label>
						<input type='checkbox' checked={flipScore} onChange={(() => set_flipScore(!flipScore))} className="w-6 h-6 pr-4" />
						<ReactTooltip
							anchorSelect=".flipScore"
							id="tooltip1"
							place="bottom"
							//@ts-ignore
							content={<span>Flips the Score Displayed in the Ingame Score Displays. <br /> Doesn't affect the Lobby Score</span>}
						/>
					</div>

					<button onClick={FlipScore} className="swapButton w-2/6" name="swapScore">
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
				<label className='scoreVisible'><span className='text-3xl align-middle'>🛈</span>Score Visible </label>
				<ReactTooltip
					anchorSelect=".scoreVisible"
					id="tooltip1"
					place="bottom"
					//@ts-ignore
					content={<span>Shows or Hides the score in the Ingame Score Displays.<br /> Doesn't affect the Lobby Score<br />Useful when not casting a Series</span>}
				/>
				<input type='checkbox' checked={showScore} onChange={(() => set_showScore(!showScore))} />
				<button onClick={(() => set_showScore(!showScore))} className="toggleButton w-36" name="toggleButton">
					Toggle Score
				</button>
			</div>
			<hr className='m-4' />
			<div className='spoilerOverlay'>
				<label><span className='text-3xl align-middle'>🛈</span>Show Spoiler Overlay </label>
				<input type='checkbox' checked={showSpoilerOverlay} onChange={(() => set_showSpoilerOverlay(!showSpoilerOverlay))} />
				<ReactTooltip
					anchorSelect=".spoilerOverlay"
					id="tooltip1"
					place="bottom"
					//@ts-ignore
					content={<span>Shows or Hides the "Spoiler Overlay" in the bottom right <br />in the 1v1 Ingame Scene.<br /> Covers the speed controls which can spoil that a game <br />will end soon</span>}
				/>
			</div>
		</div>
	)
}
