const fe_lang = "Javascript";
const be_lang = "Python"

const credentials = {
  "name": "tuantuan1234",
  "account_type": ["Github", "GitLab"],
  "createdAt": "2022-3-24"
}

// console.log(module)
/*
Module {
  id: '.',
  path: 'C:\\Users\\localadmin\\Desktop\\node_tutorial',
  exports: {},
  filename: 'C:\\Users\\localadmin\\Desktop\\node_tutorial\\app.js',
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
 */

module.exports = { fe_lang, be_lang }
module.exports.credentials = credentials;