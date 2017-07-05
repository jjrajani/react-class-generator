#!/usr/bin/env node
const react_class_template = require('./react_class_tmpl.js');
const react_class_store_template = require('./react_class_store_tmpl.js');

let checkFileExists = require('./fsUtility').checkFileExists;
let createFile = require('./fsUtility').createFile;

let class_name = process.argv[2];
let classTemplate = react_class_template(class_name);
let classStoreTemplate = react_class_store_template(class_name);
let classFileName = class_name.charAt(0).toUpperCase() + class_name.slice(1) + '.jsx';
let storeFileName = class_name.charAt(0).toUpperCase() + class_name.slice(1) + 'Store.jsx';

let generateClass = function(filename, template) {
  let exists = checkFileExists(filename);

  if (!exists) {
    createFile(filename, template)
  } else {
    console.log("File not created");
  }
}

generateClass(classFileName, classTemplate);
generateClass(storeFileName, classStoreTemplate);
