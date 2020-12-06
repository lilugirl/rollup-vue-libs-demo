const path=require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss =require('rollup-plugin-postcss')

const { terser }=require('rollup-plugin-terser')


const inputPath=path.resolve(__dirname,'./src/index.js')
const outputUmdPath=path.resolve(__dirname,'./dist/datav.libs.min.js')
const outputEsPath=path.resolve(__dirname,'./dist/datav.libs.es.min.js')
console.log(inputPath)

module.exports= {
  input: inputPath,
  output:[
    {
      file:outputUmdPath,
      format:'umd',
      name:'rollupDatav',
      globals: {
        vue:'Vue'
      }
    },
    {
      file:outputEsPath,
      format:'es',
      globals: {
        vue:'Vue'
      }
    }
  ],
  plugins:[
    resolve(),
    commonjs(),
    babel({
      exclude:'node_modules/**'
    }),
    json(),
    vue(),
    postcss({
      plugins:[]
    }),
    terser()
  ],
  external: [
    'vue'
  ]
}