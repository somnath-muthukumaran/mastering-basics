export interface ITrieNode {
  children: Map<string, ITrieNode>;
  isEndOfWord: boolean;
}

export interface ITrie {
  root: ITrieNode;

  insert(word: string): void;
  search(word: string): boolean;
  startsWith(prefix: string): boolean;
}
