module.exports = function(class_name) {
  return (
`export default class ${class_name.charAt(0).toUpperCase() + class_name.slice(1)}Store {

  state = {};

}`

  );
};
