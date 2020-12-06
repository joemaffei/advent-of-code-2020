// parts 1 and 2 in node.js
[1,2]
.map((part) => {
  var ids = (
    require('fs')
    .readFileSync('day05.txt','utf8')
    .trim()
    .split(/\n/)
    .map((partition) => (
      parseInt(
        partition
        .replace(/F|L/g, 0)
        .replace(/B|R/g, 1), 2
      )
    ))
  );
  return `part${part}: ${
    part === 1 ? (
      Math.max.apply(null, ids)
    ) : (
      ids
      .sort((a, b) => a - b)
      .find((id, index) => ids[index+1] - id > 1) + 1
    )
  }`;
})
.forEach(console.log);
