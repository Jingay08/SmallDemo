const path = require('path')
import { Configuration } from 'webpack' 

/**
 * @type {Configuration}
 */
const config = {
    entry: __dirname + 'src/index.js',
    output: {
        filename: 'bundle.js',
        // path: path.join(__dirname, 'output')
        path: path.join(__dirname, 'bundle')
    }
}

module.exports = config