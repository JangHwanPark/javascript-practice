function BfsExam(graph, start, visited) {
    let queue = [];
    queue.push(start);
    visited[start] = start;


    while (queue.length) {
        const node = queue.shift();

        graph[node].forEach((idx) => {
            if (!visited[idx]) {
                queue.push(idx);
                visited[i] = true;
            }
        })
    }
}