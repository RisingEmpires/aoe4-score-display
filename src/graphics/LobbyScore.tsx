import React, { useEffect, useState } from 'react';
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

	const [extraInfo1, set_extraInfo1] = useReplicant<string>('extraInfo1', '')
	const [extraInfo2, set_extraInfo2] = useReplicant<string>('extraInfo2', '')

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
			<div className='lobbyScore-extraInfo lobbyScore-extraInfo1'>{extraInfo1}</div>
			<div className='lobbyScore-extraInfo lobbyScore-extraInfo2'>{extraInfo2}</div>
			<div className='lobbyScore-betweenText'>{betweenText}</div>
			<ScoreDisplay score={leftScore} rotate={true} className={'lobbyScore-scoreContainer lobbyScore-leftScore'} />
			<ScoreDisplay score={rightScore} rotate={true} className={'lobbyScore-scoreContainer lobbyScore-rightScore'} />
		</>
	);
}
