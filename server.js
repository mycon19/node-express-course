// myCon 

const express = require('express');
const app = express();

const mockUserData=[
	{name:'Govi'},
	{name:'Sakthi'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})


// The app.listen method will start up the server locally on the port you give as its first argument 
// (in this case the base url is: http://localhost:8000)

app.listen(8000,function(){console.log('server is listening')})