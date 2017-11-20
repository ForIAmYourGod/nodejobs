console.log('Starting up the microbase...'.underline.bold.blue);


var addJob = (title, jobN) => {
  console.log('Adding Job:'.bold, title);
  console.log('Adding Job Number:'.bold, jobN);
};

var getAll = () => {
  console.log('Getting all Jobs:'.bold);
};

var readJob = (title, jobN) => {
  console.log('Read Out:'.bold);

};

var deleteJob = (title, jobN) => {
  console.log('Deleting Job:'.bold,title, 'Associated Job Number:'.bold, jobN);
};


module.exports = {
  addJob,
  getAll,
  readJob,
  deleteJob

};
