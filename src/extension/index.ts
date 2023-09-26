import type NodeCG from '@nodecg/types';
import { klona } from 'klona';

module.exports = function (nodecg: NodeCG.ServerAPI) {

	//const [leftScore, set_leftScore] = useReplicant<number>('leftScore', 0);
	//const [rightScore, set_rightScore] = useReplicant<number>('rightScore', 0);
	//const [showScore, set_showScore] = useReplicant<boolean>('showScore', false);
	//const [showSpoilerOverlay, set_showSpoilerOverlay] = useReplicant<boolean>('showSpoilerOverlay', true);

	let _leftScore = nodecg.Replicant('leftScore')
	let _rightScore = nodecg.Replicant('rightScore')
	let _showScore = nodecg.Replicant('showScore')

	let _betweenText = nodecg.Replicant('betweenText')
	
	let leftName = nodecg.Replicant('leftName', 'aoe-4-civ-draft');
	let rightName = nodecg.Replicant('rightName', 'aoe-4-civ-draft');

	let _showSpoilerOverlay = nodecg.Replicant('showSpoilerOverlay')

	const router = nodecg.Router();
	const openRouter = nodecg.Router();
	router.use(nodecg.util.authCheck)

	router.get('/toggleScore', (req, res) => {
		_showScore.value = !_showScore.value
		res.send('OK!');
	});

	router.get('/toggleSpoiler', (req, res) => {
		_showSpoilerOverlay.value = !_showSpoilerOverlay.value
		res.send('OK!');
	});

	router.get('/addLeft', (req, res) => 
	{
		//@ts-ignore
		_leftScore.value = _leftScore.value + 1
		res.send(`Added +1 to Left Side`);
	});

	router.get('/addRight', (req, res) => 
	{
		//@ts-ignore
		_rightScore.value = _rightScore.value + 1
		res.send(`Added +1 to Right Side`);
	});

	router.get('/swapScore', (req, res) => 
	{
		let temp = klona(_leftScore.value)
		_leftScore.value = _rightScore.value
		_rightScore.value = temp
		res.send(`Swapped Scores`);
	});

	openRouter.get('/currentScore', (req, res) => 
	{
		
		_rightScore.value
		res.send(`${leftName.value} - ${_leftScore.value} (${_betweenText.value}) ${_rightScore.value} - ${rightName.value}`);
	});


	nodecg.mount('/score', router);
	nodecg.mount('/openScore', openRouter);

};
