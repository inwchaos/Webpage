/**
 * Created by pongsakorn on 8/09/16.
 */

// if(some_value === configuration[i].username) console.log("Data-Match");

var fs, file_name;

file_name = 'user_database.json';
var fs = require('fs');

var configuration = JSON.parse(
    fs.readFileSync(file_name)
);

for(var i=0; i<configuration.length; i++)
{
    console.log(configuration[i].username);
    console.log(configuration[i].password);
}

new_user_name = "User_x";
new_user_pass = "Pass_x";

var new_user = {username : new_user_name, password : new_user_pass};
var json_string = JSON.stringify(new_user);

fs.appendFile('user_database.json', json_string, 'utf8');