const dfs = (graph, start) => {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);

      // 방문할 노드 출력
      console.log(node)

      // 인접 노드를 스택에 추가
      for (let neighbor of graph[node]) {
        if (!visited.has[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// 그래프 예시 (인접 리스트 형태)
let graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

dfs(graph, 2)