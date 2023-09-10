import React from 'react';
import { useReplicant } from 'use-nodecg';
//@ts-ignore
import ScoreboardOverlay from './ScoreboardOverlay.png'
//@ts-ignore
import SpoilerCover from './125_Minimap.png'
import { ScoreDisplay } from './ScoreDisplay'

export function Index() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	return (
		<>
			{showScore ? <div><img className="scoreboardOverlay" src={ScoreboardOverlay} style={{
				position: 'absolute',
				width: '100vw',
				height: '100vh'
			}} />

			<div>
				<ScoreDisplay score={leftScore} rotate={true} className={'leftScore'}/>
				<ScoreDisplay score={rightScore} rotate={true} className={'rightScore'}/>
			</div>

			<h1 className='betweenText'>{betweenText}</h1> </div> : <> </>}
			{showSpoilerOverlay ? <img src={SpoilerCover} className={'spoilerCover'}/> : <> </>}
		</>
	);
}
