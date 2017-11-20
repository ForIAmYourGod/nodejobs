const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const colors = require('colors');
//my local requirements
const jobAPI = require('./jobs.js'); //connects to your job.js API file

//only used for logging to the console for setup purposes
var argv = yargs.argv; //parsing of the arguments (npm)
var command = process.argv[2];//looks for the argument within the terminal input
// console.log('Command:', command);
// console.log('Process',process.argv); //calling args
// console.log('Yargs', argv); //calling yargs

if (command === 'add'){
  jobAPI.addJob(argv.title, argv.jobN);
} else if (command === 'list'){
  jobAPI.getAll();
} else if (command === 'read') {
  jobAPI.readJob(argv.title, argv.jobN);
} else if (command === 'delete') {
  jobAPI.deleteJob(argv.title, argv.jobN);
} else {
  console.log('Problem Encountered:'.bold.red);
  console.log('-Task Unknown-'.bold.red ,'-Recheck Parameters-'.bold.red);
}
