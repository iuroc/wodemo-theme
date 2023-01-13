const { execSync } = require('child_process')
const fs = require('fs')

/**
 * 生成主题文件
 * @param {string} jsFilePath JS 文件路径
 * @param {string} htmlFilePath HTML 文件路径
 * @param {string} outFilePath 导出文件的路径
 */
function makeFile(jsFilePath, htmlFilePath, outFilePath) {
    buildJS(jsFilePath)
    const htmlCodeStr = fs.readFileSync(htmlFilePath).toString()
    const jsCodeStr = fs.readFileSync(jsFilePath).toString()
    const newCodeStr = compressCode(htmlCodeStr) + `<script>${jsCodeStr}</script>`
    fs.writeFileSync(outFilePath, newCodeStr)
    fs.unlinkSync(jsFilePath)
}

/**
 * 
 * @param {string} jsFilePath JS 文件路径
 */
function buildJS(jsFilePath) {
    execSync(`browserify ${jsFilePath} -o ${jsFilePath} && uglifyjs ${jsFilePath} -m -c -o ${jsFilePath}`)
}

/**
 * 压缩代码
 * @param {string} codeStr 代码文本
 */
function compressCode(codeStr) {
    return codeStr.replace(/^\s+/gm, '').replace(/[\r\n]/g, '')
}

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

execSync('tsc')
makeFile('js/home.js', 'html/home.html', 'dist/home.html')
makeFile('js/page.js', 'html/page.html', 'dist/page.html')

console.log(`主题文件已生成，请访问对应文件：
👉 主页模板：/dist/home.html
👉 文章页模板：/dist/page.html`);