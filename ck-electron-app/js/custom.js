// var async = require("async");
// var await = require("async").await;
var exec = require('child_process').exec;
const spawn = require('child_process').spawn;
window.async = require("async");
var await = require("async").await;

window.Papa = require('./papaparse')
window.jQuery = require('./jquery')

var initInterval = null
var exeCk = "ck-server.exe"
var exeMongod = "mongod.exe"
var localhostUrl = "http://localhost:3000"

module.exports = {
    async init() {
        var _this = this;

        
        // await _this._init()

        var hideInterval = setInterval(function() {
            _this.hideWindow(exeCk)
        }, 1000)


        initInterval = setInterval(async function() {
            // console.log("Start _Init")
            // await _this.hideWindow(exeCk)
            await _this._init()
            // await _this.startCkServer()
        }, 2000)

        // var myVar = setInterval(function(){ 
        //     Custom.checkIfTaskRunning('mongod.exe').then(function(item){
        //         console.log(item)
        //         _this.startCkServer()
        //     }).catch(function(err) {
        //         console.log(err)
        //         _this._startMongoDB()
        //     })
        // }, 2000);
    },

    async _init() {
        var isMongoServerRunning = await this.checkIfTaskRunning(exeMongod)
        console.log("isMongoServerRunning", isMongoServerRunning)
        if(!isMongoServerRunning) {
            await this.deleteMongoLockFile()
            await this.startMongDbServer()
            return null;
        }

        var isCkServerRunning = await this.checkIfTaskRunning(exeCk)
        console.log("isCkServerRunning", isCkServerRunning)
        if(!isCkServerRunning) {
            // var hideWindow = this.hideWindow(exeCk)
            await this.startCkServer()
            return null;
        }

        // var isLocalhostRunning = await this.isLocalhostRunning()
        // console.log("isLocalhostRunning", isLocalhostRunning)
        // if(isLocalhostRunning) {
        //     // clearInterval(initInterval)
        //     window.location.href = localhostUrl
        //     return null;
        // }

        jQuery(".launchAppBtn").show()
        clearInterval(initInterval)
    },

    deleteMongoLockFile() {
        return new Promise(function(resolve, reject) {
            exec(`cd mongodb\\data && del /f mongod.lock` , function(err, stdout, stderr) {
                console.log('DELETING LOCK FILE')
                resolve('done')
            })
        })

    },

    startMongDbServer() {
        return new Promise(function(resolve, reject) {
            exec(`cd mongodb && mongod --dbpath "data" --storageEngine=mmapv1`, function(err, stdout, stderr) {
                // console.log(stdout)
                if (err) {
                    console.log("ERROR STARTING DB SERVER")
                    return resolve(false); // Failure
                }

                console.log("DB SERVER STARTED")
                resolve(true)     
            });
        });
    },


    checkIfTaskRunning(taskName) {
        return new Promise(function(resolve, reject) {
           exec('TASKLIST /FO CSV', function(err, stdout, stderr) {
                if (err) {
                    // reject(err); // Failure
                    return resolve(false)
                }
                
                // console.log(stdout)
                var json = Papa.parse(stdout, {
                    delimiter: ",",
                    header: true
                })
                var task = _.find(json.data, { 'Image Name': taskName });

                // if(typeof task == "undefined") reject('Service not running')
                if(typeof task == "undefined") return resolve(false)

                // console.log(task)
                // resolve(task); // Success
                resolve(true)
            });
        });
    },

    hideWindow(exeName) {
        return new Promise(function(resolve, reject) {
           exec(`nircmd.exe win hide ititle "${exeName}"`, function(err, stdout, stderr) {
                if (err) {
                   return resolve(false)
                }
                
                resolve(true)
            });
        });
    },

    startCkServer() {
        var _this = this;
        return new Promise(function(resolve, reject) {
           exec(`start ck-server.exe`, function(err, stdout, stderr) {
                // console.log('AMAAMMAMAM')
                if (err) {
                    return resolve(false)
                }
                // _this.hideWindow(exeCk)
                return resolve(true)
            });
        });
    },

    async isLocalhostRunning() {
        return fetch(localhostUrl)
                .then((res) => {
                    return true;
                    // window.location.href = "http://localhost:3000"
                    // remote.getCurrentWindow().loadUrl(myUrl)
                })
                .catch((err) => {
                    return false;
                })
    },


    // startCkServer11() {

    //     Custom.checkIfTaskRunning('ck-server.exe').then(function(item){
        
    //     }).catch(function(err) {
    //         exec("start ck-server.exe", { silent: true })
    //         setTimeout(function() {
    //             exec('nircmd.exe win hide ititle "ck-server.exe"', function(err, out) {
    //                 console.log(err)
    //                 console.log(out)
    //             })
    //         }, 1000)            
    //     })


    //     // var _this = this;
    //     // _this.checkCkStatus(function() {
    //     //     setTimeout(function() {
    //     //         _this.startCkServer()
    //     //     }, 1000)
    //     //     console.log("Errro Starting Server")
    //     // })

    // },
    // checkCkStatus11(cb) {
    //     fetch("http://localhost:3000")
    //     .then((res) => {
    //         window.location.href = "http://localhost:3000"
    //         // remote.getCurrentWindow().loadUrl(myUrl)
    //     })
    //     .catch((err) => {
    //         cb('err')
    //     })
    // },

    startMongo() {
        console.log("Trying to start Mongo")
        var _this = this
        Custom._startMongoDB()
            .then(function(item){
                console.log(item)
            })
            .catch(function(err) {
                console.log("Cannot Start DB Server.", err)
                setTimeout(function() {
                    console.log("Timeout Running")
                    _this.startMongo()
                }, 1000)
            })
    },

 


    _startMongoDB() {
        new Promise(function(resolve, reject) {
            exec(`cd mongodb\\data && del /f mongod.lock` , function(err, stdout, stderr) {
                console.log(stdout)
                console.log('DELETING LOCK FILE')
                resolve('done')
            })
        })
        return new Promise(function(resolve, reject) {
            exec(`cd mongodb && mongod --dbpath "data" --storageEngine=mmapv1`, function(err, stdout, stderr) {
                if (err) {
                    // console.log(stdout)
                    console.log("ERROR STARTING DB SERVER")
                    return reject(err); // Failure
                }
                
                // console.log('DB Server is Running')
                // resolve('DB Server is Running'); // Success
                
            });
        });
    }


   

    // function promiseExample(filter) {
    //     // Promise wrapper function
    //     return new Promise(function(resolve, reject) {
    //         var options = {
    //             url: 'http://endpoint:port',
    //             method: ‘GET’,
    //             json: filter
    //         };
    //         request(options, function(err, res, body) {
    //             if (err) {
    //                 reject(err); // Failure
    //             }
    //             resolve(body); // Success
    //         });
    //     });
    // }

};