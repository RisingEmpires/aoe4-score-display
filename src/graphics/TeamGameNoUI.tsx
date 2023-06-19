import React from 'react';
import { useReplicant } from 'use-nodecg';
//@ts-ignore
import StreamOverlay from './2v2NO_IOU.png'
//@ts-ignore
import ScoreboardOverlay from './2v2IOU_Score.png'
//@ts-ignore
import SpoilerCover from './125_Minimap.png'
import { ScoreDisplay } from './ScoreDisplay'

interface DropdownOption {
	value: string;
	label: string;
}

export function TeamGameNoUI() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	//
	const [leftName, set_leftName] = useReplicant<string>('leftName', '', { namespace: 'aoe-4-civ-draft' });
	const [rightName, set_rightName] = useReplicant<string>('rightName', '', { namespace: 'aoe-4-civ-draft' });

	//Used if you have the Aoe-4-team-games bundle
	const [leftSideIcon, set_leftSideIcon] = useReplicant<DropdownOption>('leftSideIcon', { value: '', label: '' }, { namespace: 'aoe-4-team-games' });
	const [rightSideIcon, set_rightSideIcon] = useReplicant<DropdownOption>('rightSideIcon', { value: '', label: '' }, { namespace: 'aoe-4-team-games' });
	const [showIcons, set_showIcons] = useReplicant<boolean>('showIcons', true, { namespace: 'aoe-4-team-games' });


	return (
		<>
			<img src={StreamOverlay} style={{
				position: 'absolute',
				width: '100vw',
				height: '100vh'
			}} />

			<h1 className='teamName leftName'>{leftName}</h1>
			<h1 className='teamName rightName'>{rightName}</h1>

			{showScore ? <div>

				<div>
					<ScoreDisplay score={leftScore} rotate={true} className={'leftScore'} />
					<ScoreDisplay score={rightScore} rotate={true} className={'rightScore'} />
				</div>

				<h1 className='betweenText'>{betweenText}</h1>
			</div> : <> </>}

			{showIcons ? <div>
				<img src={leftSideIcon.value} className='leftSideIcon' />

				<img src={rightSideIcon.value} className='rightSideIcon' />

			</div> : <> </>}
		</>
	);
}
