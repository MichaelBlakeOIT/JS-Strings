const { traverse } = require('shift-traverser');

module.exports = function(ast) {
  const strings = [];
  traverse(ast, {
    enter(node, parent) {
      if (node.type === 'LiteralStringExpression' && !(/^\s+$/.test(node.value)) && node.value !== '') {
        strings.push(node.value.trim());
      }
    }
  });
  return strings;
};
