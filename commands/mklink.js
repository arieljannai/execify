var mklink = {
	program : [ { win32 : 'mklink.exe' } ],
	name : 'mklink',
	description : 'Creates a symbolic link.',
	help : '/?',
	commands : {
	}
	options : {
		single : {
			directory : '/D',
			hard : '/H',
			junction : '/J'
		}
	},
	args : {
		link : '<<1><string>>',
		target : '<<2><string>>'
	}
};

module.exports = mklink;
