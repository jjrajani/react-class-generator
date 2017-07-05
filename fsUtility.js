const fs = require('fs');
const path = require('path');

module.exports = {
  checkFileExists: function(filename) {
    let exists = fs.existsSync(filename);
    if (exists) {
      console.log("file already exists");
      return true;
    } else {
      console.log("Free to create");
      return false;
    }
  },

  createFile: function(filename, classTemplate) {
    fs.writeFile(filename, classTemplate, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("the file was saved!!");
    });
  }
}
