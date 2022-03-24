//const names = require("./4-names")
const traverse = require("./3-function-traverseList")

// console.log(names)
/*
Module {
  id: 'C:\\Users\\localadmin\\Desktop\\node_tutorial\\4-names.js',
  path: 'C:\\Users\\localadmin\\Desktop\\node_tutorial',
  exports: {},
  filename: 'C:\\Users\\localadmin\\Desktop\\node_tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\localadmin\\Desktop\\node_tutorial\\node_modules',
    'C:\\Users\\localadmin\\Desktop\\node_modules',
    'C:\\Users\\localadmin\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
{ fe_lang: 'Javascript', be_lang: 'Python' }
*/


traverse.sayHello("Tuan Vu");

employeeList = ["Rong", "Jiang", "Wei", "JunDa", "KeDa"];
traverse.traverseForEachArrow(employeeList);
