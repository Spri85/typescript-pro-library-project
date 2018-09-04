export default {
  input: './dist/index.js',
  output: {
    file: 'build/index.umd.js',
    format: 'umd',
    name: 'typeScriptProLibrary'
  },
  sourceMap: true
};
