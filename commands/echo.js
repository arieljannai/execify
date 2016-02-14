var echo = {
	program : [ { win32 : 'echo.exe' } ],
	name : 'echo',
	description : 'echo',
	help : '/?',
	options : {
		single : {
			on : 'on',
			off : 'off',
			message : '<message>'
		}
	}
};

module.exports = echo;
