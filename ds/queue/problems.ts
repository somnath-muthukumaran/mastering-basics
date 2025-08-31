import { ArrayBasedLinearQueue } from ".";

/**
 * Simulates the "Hot Potato" game using a queue.
 *
 * A group of players sit in a circle and pass a "potato" around.
 * After k passes, the player holding the potato is eliminated.
 * The process repeats until only one player remains, who is the winner.
 *
 * @param players - An array of player names.
 * @param k - The number of passes before elimination.
 * @returns The name of the last remaining player (the winner).
 *
 * @example
 * hotPotato(["Alice", "Bob", "Charlie", "David", "Eve"], 3);
 * // returns "David"
 */
function hotPotato(players: string[], k: number): string | undefined {
  const queue = new ArrayBasedLinearQueue(players);

  let i = 1;
  while (queue.size > 1) {
    const pass = queue.dequeue();
    if (pass && i % k !== 0) {
      queue.enqueue(pass);
    }
    i++;
  }

  // can achieve the same problem with a for loop till k -1 and dequeue the element after that
  return queue.peekFront();
}

console.log(hotPotato(["Alice", "Bob", "Charlie", "David", "Eve"], 3));
