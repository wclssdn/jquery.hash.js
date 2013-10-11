/*!
 * jquery.hash.js V1.0
 * operate url hash as url params
 *
 * Github: https://github.com/wclssdn/jquery.hash.js
 * Copyright (c) 2013 Wclssdn <ssdn@vip.qq.com>
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/10/11
 **/
(function($) {
	var hash = {};
	$.each(location.hash.substr(1).split('&'), function(i, d) {
		var t = d.split('=');
		if (typeof t[1] == "undefined") {
			t[1] = '';
		}
		hash[t[0]] = t[1];
	});
	$.hash = function(key, val){
		if (typeof val == "undefined"){
			return hash[key];
		}else if (val === null){
			delete hash[key];
		}else{
			hash[key] = val.toString();
		}
		location.hash = $.param(hash);
		return true;
	};
})(jQuery);
