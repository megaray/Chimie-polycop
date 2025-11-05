// CommonJS wrapper to enable Babel transpilation
require('@babel/register')({
  extensions: ['.js', '.jsx'],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
});

// Now require the actual generator
require('./src/generate-main.js');
