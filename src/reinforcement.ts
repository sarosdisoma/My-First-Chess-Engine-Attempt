/*import { ChessBoard } from "./ChessBoard";

async function playGames(
  agent: RLAgent,
  numGames: number,
  maxMoves: number,
  temperature: number,
  explorationRate: number,
  heuristic: (board: ChessBoard) => number,
  logInterval: number,
  verbose: boolean
): Promise<number[]> {
  const rewards: number[] = [];
  for (let i = 0; i < numGames; i++) {
    const board = new ChessBoard();
    let reward = 0;
    let done = false;
    let moveNum = 0;
    let logNum = 0;

    while (!done && moveNum < maxMoves) {
      const player = board.turn() === 'w' ? 'white' : 'black';
      const action = await agent.getAction(board, temperature, explorationRate);
      const result = board.makeMove(action);
      if (!result.success) {
        break;
      }
      reward += result.reward;
      done = result.done;
      moveNum++;

      // Log the game state every logInterval moves
      if (verbose && moveNum % logInterval === 0) {
        console.log(`Game ${i + 1}, Move ${moveNum}:`);
        console.log(`Player: ${player}`);
        console.log(`Action: ${ChessBoard.moveToString(action)}`);
        console.log(`Board:`);
        console.log(board.toString());
        console.log(`Reward: ${reward}`);
        console.log('----------------------');
        logNum++;
      }
    }

    rewards.push(reward);
    if (verbose) {
      console.log(`Game ${i + 1} result: ${reward}`);
    }

    // Add the game state to the agent's memory
    agent.memory.push({
      state: board.getGameState(),
      action: null,
      reward,
      done: true,
    });

    // Train the agent on the memory batch every 10 games
    if ((i + 1) % 10 === 0) {
      await agent.train(heuristic);
    }
  }

  return rewards;
}
*/