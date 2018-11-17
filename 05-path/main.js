const path = require('path')

console.log(path.relative('/data/test/aaa', '/data/run/bbb')) // relative paths
console.log(path.resolve('/data/test', './bar')) // joining and resolving with absolte path
console.log(path.normalize('/foo/bar//baz/baz/query/..')) // normalizes bad writen path
console.log(path.parse('/home/user/dir/file.txt')) //parsing
console.log(path.join('/data/foo', 'bar', 'test', '..')) //joining paths
console.log(path.sep) //separator