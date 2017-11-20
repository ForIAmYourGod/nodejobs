console.log('Starting up the microbase...');


var addJob = (title, jobN) => {
  console.log('Adding Job:', title);
  console.log('Adding Job Number:', jobN);
};

var getAll = () => {
  console.log('Getting all Jobs:');
};

var readJob = (title, jobN) => {
  console.log('Read Out:');

};

var deleteJob = (title, jobN) => {
  console.log('Deleting Job:',title, 'Associated Job Number:', jobN);
};


module.exports = {
  addJob,
  getAll,
  readJob,
  deleteJob

};
