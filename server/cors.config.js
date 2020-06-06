const  XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        // Kiểm tra XMLHttpRequest object có thuộc tính
		// withCredentials hay không
        // Thuộc tính này chỉ có ở XMLHttpRequest2
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
        // Kiểm tra XDomainRequest
        // Đây là đối tượng chỉ có ở IE và
		// là cách để IE thực hiện truy vấn CORS
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
 
const request = createCORSRequest('GET', 
	'http://localhost:1020/shop');
if (!request) {
    throw new Error('CORS is not supported');
}

module.exports = request;
