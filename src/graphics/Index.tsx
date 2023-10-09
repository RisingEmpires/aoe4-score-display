import React, { useEffect, useState } from 'react';
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
	const [flipScore, set_flipScore] = useReplicant<boolean>('flipScore', false);

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
			{showScore ? <div><img className="score-scoreboardOverlay" src={ScoreboardOverlay} style={{
				position: 'absolute',
				width: '100vw',
				height: '100vh'
			}} />

				<div>
					<ScoreDisplay score={leftScore} rotate={true} className={`score-scoreContainer ${flipScore ? 'score-rightScore' : 'score-leftScore'}`} />
					<ScoreDisplay score={rightScore} rotate={true} className={`score-scoreContainer ${flipScore ? 'score-leftScore' : 'score-rightScore'}`} />
				</div>

				<h1 className='score-betweenText'>{betweenText}</h1> </div> : <> </>}
			{showSpoilerOverlay ? <img src={SpoilerCover} className={'score-spoilerCover'} /> : <> </>}
		</>
	);
}
