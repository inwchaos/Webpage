var fs = require('fs');

new_user_name = "User_x";
new_user_pass = "Pass_x";

var new_user = {username : new_user_name, password : new_user_pass};
var json_string = JSON.stringify(new_user);

fs.writeFile('user_database.json', json_string, 'utf8');