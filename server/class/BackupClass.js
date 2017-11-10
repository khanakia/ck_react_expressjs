var async = require("async");
var await = require("async").await;
var _ = require('lodash');

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var HelperClass = require('./HelperClass')

var rootPath = path.resolve('./')
var backupDir = rootPath + "/backup"
module.exports = {
    
    async listDbBackupFiles() {
        
        if (!fs.existsSync(backupDir)){
            fs.mkdirSync(backupDir);
        }

        var filesArray = []
        var files = await fs.readdirSync(backupDir);

         // await fs.stat("package.json", function (err, stats) {
         //        console.log(err)
         //        console.log(stats)
         //       // var fileInfo = { fileDate: stats.birthtime, filename: file };
              
         //    }); 

        await Promise.all(
        files.map( async (filename , i) => {
            var filePath = backupDir + "/" + filename
            // console.log(filePath)
            var fileStat = await fs.statSync(filePath)
            // console.log(fileStat)
            filesArray.push({
                name: filename,
                created_at: fileStat.birthtime,
                size: HelperClass.niceBytes(fileStat.size)
            })            
        }))


        filesArray = _.sortBy(filesArray, ["created_at"])
        filesArray = _.reverse(filesArray)
        // console.log(filesArray)

        // for(var i in files) {
        //    if(path.extname(files[i]) === ".archive") {
        //         filesArray.push(files[i])
        //        //do something
        //    }
        // }

        return filesArray
    },

    async backupDb() {
        var dirName = Date.now()
        var dirPath = backupDir + "/" + dirName
        if (!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
        }

        var command = `cd backup && ..\\mongodb\\mongodump --db ckdb --gzip --out ${dirName}`

        // var filename = "ckdb_"+ Date.now()+".archive"
        // var command = `cd backup && ..\\mongodb\\mongodump -d ckdb --archive=${filename}`
        // var commandExec = exec('cd backup && ..\\mongodb\\mongodump -d ckdb --archive=ckdb.archive', { silent: true })

        var commandExec = exec(command, { silent: true })
        commandExec.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        commandExec.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        return 'done'
    },


    async restoreDb(dirName) {
        if(!dirName) return false
        var command = `cd backup && ..\\mongodb\\mongorestore --db ckdb --drop --gzip --dir ${dirName}/ckdb`
        // var command = `cd backup && ..\\mongodb\\mongorestore --archive=${filename}`
        var commandExec = exec(command, { silent: true })
        commandExec.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        commandExec.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        return true
    }

};