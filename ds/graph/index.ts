export interface IGraphEdge<T> {
  node: IGraphNode<T>;
  weight?: number; // optional, for weighted graphs
}

export interface IGraphNode<T> {
  value: T;
  neighbors: IGraphEdge<T>[]; // adjacency list of edges
}

export interface IGraph<T> {
  nodes: Map<T, IGraphNode<T>>;

  // Node operations
  addNode(value: T): void;
  removeNode(value: T): void;

  // Edge operations
  addEdge(from: T, to: T, weight?: number): void;
  removeEdge(from: T, to: T): void;

  // Traversals
  bfs(start: T): T[];
  dfs(start: T): T[];

  // Utilities
  hasNode(value: T): boolean;
  hasEdge(from: T, to: T): boolean;
  isEmpty(): boolean;
}

export interface IDirectedGraph<T> extends IGraph<T> {
  // edges have direction; A -> B
}

export interface IUndirectedGraph<T> extends IGraph<T> {
  // edges are bidirectional; A <-> B
}

export interface IWeightedGraph<T> extends IGraph<T> {
  // all edges have weight
  getEdgeWeight(from: T, to: T): number | undefined;
}

/**
 * Directed Acyclic Graph (DAG)
 */
export interface IDAG<T> extends IDirectedGraph<T> {
  topologicalSort(): T[];
}

/**
 * Bipartite Graph
 */
export interface IBipartiteGraph<T> extends IGraph<T> {
  setPartitionA(values: T[]): void;
  setPartitionB(values: T[]): void;
  isBipartite(): boolean;
}
