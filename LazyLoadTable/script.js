var userTable = document.getElementsById("userTable");

var trParam = document.createElement('tr');
var tdParam = document.createElement('td');
var node    = document.createTextNode('hello');
tdParam.appendChild(node);
trParam.appendChild(tdParam);
userTable.appendChild(trParam);