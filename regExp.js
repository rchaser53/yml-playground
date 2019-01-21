const input = `
a
-------------------
b
---------
c: 
  - 1
  - 2
  - 3
  - "----- abc ----"
`;

const CommentRegExp = /(\-{2,})*/g;
const result = input.replace(CommentRegExp, '');

console.log(result);