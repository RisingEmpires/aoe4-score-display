import React, { useEffect, useState } from 'react';
import { useReplicant } from 'use-nodecg';
//@ts-ignore
import StreamOverlay from './2v2IOU.png'
//@ts-ignore
import ScoreboardOverlay from './2v2IOU_Score.png'
//@ts-ignore
import SpoilerCover from './125_Minimap.png'
import { ScoreDisplay } from './ScoreDisplay'

interface DropdownOption {
	value: string;
	label: string;
}

export function TeamGameIOU() {

	const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);
	const [betweenText, set_betweenText] = useReplicant<string>('betweenText', '')

	const [flipScore, set_flipScore] = useReplicant<boolean>('flipScore', false);

	//
	const [leftName, set_leftName] = useReplicant<string>('leftName', '', { namespace: 'aoe-4-civ-draft' });
	const [rightName, set_rightName] = useReplicant<string>('rightName', '', { namespace: 'aoe-4-civ-draft' });

	const [extraInfo1, set_extraInfo1] = useReplicant<string>('extraInfo1', '')
	const [extraInfo2, set_extraInfo2] = useReplicant<string>('extraInfo2', '')

	//Used if you have the Aoe-4-team-games bundle
	const [leftSideIcon, set_leftSideIcon] = useReplicant<DropdownOption>('leftSideIcon', { value: '', label: '' }, { namespace: 'aoe-4-team-games' });
	const [rightSideIcon, set_rightSideIcon] = useReplicant<DropdownOption>('rightSideIcon', { value: '', label: '' }, { namespace: 'aoe-4-team-games' });
	const [showIcons, set_showIcons] = useReplicant<boolean>('showIcons', true, { namespace: 'aoe-4-team-games' });

	const [theme, set_theme] = useReplicant<{ value: string; label: string; }>('theme', { value: '../../../assets/nodecg-themer/themes/default.css', label: 'default' }, { namespace: 'nodecg-themer' });

	const [themeDiv, set_themeDiv] = useState(<></>)

	useEffect(() => {
		console.log(theme)
		if (!theme) return;
		console.log(theme)
		set_themeDiv(<link rel='stylesheet' type='text/css' href={theme.value} />)
	}, [theme])

	return (
		<>
			{themeDiv}
			<img src={StreamOverlay} className="teamGameImprovedObserverUI-scoreboardOverlay" style={{
				position: 'absolute',
				width: '100vw',
				height: '100vh'
			}} />

			<h1 className='teamGameImprovedObserverUI-teamName teamGameImprovedObserverUI-leftName'>{leftName}</h1>
			<h1 className='teamGameImprovedObserverUI-teamName teamGameImprovedObserverUI-rightName'>{rightName}</h1>

			{showScore ? <div>
				<img src={ScoreboardOverlay} style={{
					position: 'absolute',
					width: '100vw',
					height: '100vh'
				}} />

				<div>
					<ScoreDisplay score={leftScore} rotate={true} className={`teamGameImprovedObserverUI-scoreContainer ${flipScore ? 'teamGameImprovedObserverUI-rightScore' : 'teamGameImprovedObserverUI-leftScore'}`} />
					<ScoreDisplay score={rightScore} rotate={true} className={`teamGameImprovedObserverUI-scoreContainer ${flipScore ? 'teamGameImprovedObserverUI-leftScore' : 'teamGameImprovedObserverUI-rightScore'}`} />
				</div>

				<h1 className='teamGameImprovedObserverUI-betweenText'>{betweenText}</h1>
			</div> : <> </>}

			{showIcons ? <div>
				<img src={leftSideIcon.value} className='teamGameImprovedObserverUI-leftSideIcon' />

				<img src={rightSideIcon.value} className='teamGameImprovedObserverUI-rightSideIcon' />

			</div> : <> </>}

			<h1 className='teamGameImprovedObserverUI-extraInfo teamGameImprovedObserverUI-extraInfo1 hidden absolute'>{extraInfo1}</h1>
			<h1 className='teamGameImprovedObserverUI-extraInfo teamGameImprovedObserverUI-extraInfo2 hidden absolute'>{extraInfo2}</h1>
		</>
	);
}
