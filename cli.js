#!/usr/bin/env node
const program = require('commander')
const api = require('./index.js')
const pkg = require('./package.json')


if(process.argv.length === 2) {
  // 说明用户直接运行 node cli.js
  void api.showAll()
}
program
  .version(pkg.version)
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0, -1).join(' ')
    api.add(words).then(()=>{console.log('添加成功')}, ()=>{console.log('添加失败')})
  })
program
  .command('clear')
  .description('clear a task')
  .action((...args) => {
    api.clear().then(()=>{console.log('清空成功')}, ()=>{console.log('清空失败')})
  })

program.parse(process.argv)
