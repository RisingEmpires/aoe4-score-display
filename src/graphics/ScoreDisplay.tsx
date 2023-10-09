import React from 'react';
//@ts-ignore
import GoldenCircle from './GoldenCircles.png'

type ScoreDisplayProps = {
    score: number;
    rotate?: boolean;
    className?: string;
}

export const ScoreDisplay = ({ score, rotate, className }: ScoreDisplayProps) => {
    return (
        <div className={className}>
            <h1>{score}</h1>
            <img src={GoldenCircle} className={rotate ? 'score-goldCircle score-rotate' : 'score-goldCircle'}/>
        </div>
    )
}