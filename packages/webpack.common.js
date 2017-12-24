const path = require('path')

const atoms = {
  rules: {
    javascript: { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  }
}

module.exports = function(root) {
  return [{
    entry: {
      client: path.join(root, 'client.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(root, 'public'),
    },
    module: {
      rules: [
        atoms.rules.javascript,
      ],
    },
  }, {
    target: 'node',
    entry: {
      server: path.join(root, 'server.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(root, 'public'),
    },
    module: {
      noParse: /node_modules\/express\/lib\/view.js/,
      rules: [
        atoms.rules.javascript,
      ],
    },
  }]
}
