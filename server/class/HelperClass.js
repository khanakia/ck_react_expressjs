// NOTE ONLY NODE MODULES CAN BE INCLUDED IN THAT CLASS DO NOT INCLUDE CUSTOM MODULES

var async = require("async");
var await = require("async").await;
var _ = require('lodash');

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

module.exports = {

    // Results:
    // niceBytes(435)                 // 435 bytes
    // niceBytes(3398)                // 3.3 KB
    // niceBytes(490398)              // 479 KB
    // niceBytes(6544528)             // 6.2 MB
    // niceBytes(23483023)            // 22 MB
    // niceBytes(3984578493)          // 3.7 GB
    // niceBytes(30498505889)         // 28 GB
    // niceBytes(9485039485039445)    // 8.4 PB

    niceBytes(x) {
        let l = 0,
            n = parseInt(x, 10) || 0;
        while (n >= 1024) {
            n = n / 1024;
            l++;
        }
        return (n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + units[l]);
    },


    createDirIfNotExists(dirPath) {
        if (!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
        } else {
          console.log(dirPath)
        }
    }
};