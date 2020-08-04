// myCon 

const express = require('express');
const app = express();

// DB Data - mock up here ... 

const mockUserData=[
	{name:'Govi'},
	{name:'Sakthi'}
]
const mockRoleData=[
	{name:'admin'},
	{name:'program manager'},
	{name:'CTO'},
	{name:'product manager'}
]


app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
app.get('/roles',function(req,res){
	res.json({
		success: true,
		message: 'successfully got Roles. Nice!',
		users: mockRoleData
	})
})

// The app.listen method will start up the server locally on the port you give as its first argument 
// (in this case the base url is: http://localhost:8000)

app.listen(8000,function(){console.log('server is listening')})