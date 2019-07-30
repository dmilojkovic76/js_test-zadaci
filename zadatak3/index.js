// Create an algorithm that returns an array with coordinates of the
// shortest path from startCoordinate to endCoordinate avoiding
// blocks fields

// Create an algorithm that generates random block fields, but so that it
// doesn't close startCoordinate field or endCoordinate filed.

const config = require('./config.js');
const Start = {};
Start.x = config.startCoordinate[0];
Start.y = config.startCoordinate[1];
const End = {};
End.x = config.endCoordinate[0];
End.y = config.endCoordinate[1];
const blocks = config.blocks;
const field = [];
const path = [];

/**
 * Return a 10x10 field filled with randomly placed blocks:
 * 0 - empty field;
 * -1 - block field;
 * 1 - start;
 * 2 - end.
 * @param {Int} n - Number of block elements to randomly place
 */
const generateBlocks = (n) => {
	//initialize an empty field matrix
	for (let j = 0; j < 10; j++) {
		field.push([]);
		for (let i = 0; i < 10; i++) {
			field[j].push(0);
		}
	}

	// set the start and end from the config
	field[Start.y][Start.x] = 1;
	field[End.y][End.x] = 2;

	// generate and place random blocks
	for (let looper = 0, m = n; looper < m; looper++){
		const xrnd = Math.round(Math.random() * 9);
		const yrnd = Math.round(Math.random() * 9);

		// check if it will not be left, right, up or down from start or end
		if (xrnd !== Start.x && yrnd !== Start.y && xrnd !== End.x && yrnd !== End.y &&
			xrnd !== Start.x - 1 && xrnd !== Start.x + 1 && xrnd !== End.x - 1 && xrnd !== End.x + 1 &&
			yrnd !== Start.y - 1 && yrnd !== Start.y + 1 &&	yrnd !== End.y - 1 && yrnd !== End.y + 1) {
				// and if not already there, place it, else redo this loop for new random values
				(field[yrnd][xrnd] !== -1) ? field[yrnd][xrnd] = -1 : looper--;
		} else {
			// otherwise redo this loop for new random values
			looper--;
		}
	}
};

const reconstruct_path = (cameFrom, current) => {
	let total_path = current;
	while current in cameFrom.Keys { // TODO: figure this out
		current = cameFrom[current];
		total_path.shift(current);
	}
	return total_path
}

// TODO: Finish this algorithm
// A* finds a path from start to goal.
// h is the heuristic function. h(n) estimates the cost to reach goal from node n.
const findPath = (start, goal, h) => {
	// The set of discovered nodes that need to be (re-)expanded.
    // Initially, only the start node is known.
	let openSet = [start];

	// For node n, cameFrom[n] is the node immediately preceding it on the cheapest path
	// from start to n currently known.
	let cameFrom = [];

	// For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
    let gScore = [Infinity];
	gScore[start] = 0;

	// For node n, fScore[n] := gScore[n] + h(n).
    let fScore = [Infinity];
	fScore[start] = h(start); // TODO: call to a separate heuristics function

    while (openSet.length > 0) {
        current = the node in openSet having the lowest fScore[] value // TODO: figure this out
        if (current === goal) {
            return reconstruct_path(cameFrom, current);
		}

        openSet.Remove(current)
        closedSet.push(current);
        for (each neighbor of current) {
            if (neighbor in closedSet) continue;
            // d(current,neighbor) is the weight of the edge from current to neighbor
            // tentative_gScore is the distance from start to the neighbor through current
            let tentative_gScore = gScore[current] + d(current, neighbor)
            if (neighbor not in openSet) {
				openSet.push(neighbor);
			} else {
				if (tentative_gScore >= gScore[neighbor]) continue;
			}
            // This path to neighbor is better than any previous one. Record it!
			cameFrom[neighbor] = current;
			gScore[neighbor] = tentative_gScore;
			fScore[neighbor] = gScore[neighbor] + h(neighbor);
			return failure;
		}
	}
}

generateBlocks(blocks);

console.log(Start);
console.log(End);
console.log(blocks);
console.table(field);

return path;
