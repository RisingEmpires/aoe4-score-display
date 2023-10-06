import React from 'react';
import { useReplicant } from 'use-nodecg';
//@ts-ignore
import ScoreboardOverlay from './ScoreboardOverlay.png'
//@ts-ignore
import SpoilerCover from './125_Minimap.png'
import { ScoreDisplay } from './ScoreDisplay'

export function LobbyScore() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')
	const [flipScore, set_flipScore] = useReplicant<boolean>('flipScore', false);

	return (
		<>
			<div>
				<ScoreDisplay score={leftScore} rotate={true} className={'leftScore'}/>
				<ScoreDisplay score={rightScore} rotate={true} className={'rightScore'}/>
			</div>
		</>
	);
}
