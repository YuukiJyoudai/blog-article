const path = require('path')
const fs = require('fs')

// 读取相对路径下的 md 文件并进行输出


const target = './test.md'

fs.readFile(target, 'utf-8', (error, data) => {
    if (error) {
        console.log('error:', error)
        return
    }

    console.log('data:', data)
})