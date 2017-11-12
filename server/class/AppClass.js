// NOTE ONLY NODE MODULES CAN BE INCLUDED IN THAT CLASS DO NOT INCLUDE CUSTOM MODULES

var winston = require('winston'); // https://github.com/flatiron/winston
var exec = require('child_process').exec;

var mongoose = require('mongoose');
var  autoIncrement = require('mongoose-auto-increment');

module.exports = {
    async init() {
        HelperClass.createDirIfNotExists(DIR_LOG)
        HelperClass.createDirIfNotExists(DIR_BACKUP)
        this.connectDb()
    },

    logger() {
        const transport = new winston.transports.Console();
        const transportFile = new (winston.transports.File)({ filename : LOGFILE_APP, timestamp: true, /*maxsize: 2000, maxFiles: 5*/ })
        var logger = winston.createLogger({
            transports: [
                // transport,
                transportFile

                // new (winston.transports.Console)(),
                // new (winston.transports.File)({ filename : 'winston.log', timestamp: true, /*maxsize: 2000, maxFiles: 5*/ })
            ]
        });
        return logger;
    },
    
    startNwJsApp() {
        var commandExec = exec(`start ${APP_NWJS_START_FILE}`, { silent: true })
    },

    startMongoDBServer() {
        var deleteLockFile = exec(`cd ${DIR_MONGODB_DATA} && rm -f mongod.lock` )
        var start = exec(`cd ${DIR_MONGODB} && mongod --dbpath "data" --storageEngine=mmapv1`)
        start.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        start.stdout.on('data', (data) => {
            // console.log(`stdout: ${data}`);
        });

        setTimeout(() => {
            this.connectDb()
        }, 1000)
    },



    connectDb() {
        if(mongoose.connection.readyState!==1) {
            console.log("connectDB Called")
            db = mongoose.connect(MONGO_DB_URI, function(err) {
                console.log(`ConnectDB ERR  ${err}`)
            });
        }
    },

    // createDbConnection() {  
    //     // console.log('createDbConnection')
  
        
    //     // Connect to Mongo on start
    //     // db.connect('mongodb://localhost:27017/ckdb', function(err) {
    //     //   // if (err) {
    //     //   //   console.log('Unable to connect to Mongo.')
    //     //   //   process.exit(1)
    //     //   // } else {
    //     //   //   app.listen(3000, function() {
    //     //   //     console.log('Listening on port 3000...')
    //     //   //   })
    //     //   // }
    //     // })
       
    //     // global.db = mongoose.createConnection(MONGO_DB_URI);

    //     db = mongoose.connect(MONGO_DB_URI, function(err) {
    //         console.log(err)
    //     });
        
    //     autoIncrement.initialize(db);
    //     // db.on('error', function(err){
    //     //     console.log(err)
    //     //     Logger.error('uncaughtException', { message : err.message, stack : err.stack, exit: true  }); // logging with MetaData
    //     //     // throw(err)
    //     // });


    //     // db.on('connecting', function() {
    //     //     console.log('connecting to MongoDB...');
    //     // });

    //     // db.on('error', function(error) {
    //     //     console.error('Error in MongoDb connection: ' + error);
    //     //     mongoose.disconnect();
    //     // });
    //     // db.on('connected', function() {
    //     //     console.log('MongoDB connected!');
    //     // });
    //     //     db.once('open', function() {
    //     //     console.log('MongoDB connection opened!');
    //     // });
    //     // db.on('reconnected', function () {
    //     //     console.log('MongoDB reconnected!');
    //     // });
    //     // db.on('disconnected', function() {
    //     //     console.log('MongoDB disconnected!');
    //     //     mongoose.connect(dbURI, {server:{auto_reconnect:true}});
    //     // });

    // }

};