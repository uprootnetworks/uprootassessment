var fail="<img src='images/pass.png' width='50' height='50'>";
var pass="<img src='images/fail.png' width='50' height='50'>";

$(function () {
    $('#testSelector').on('submit', function (e) {
        e.preventDefault();
        var formdata = $(this).serialize();
        var results = $.ajax({
            url: 'ajaxpost.php',
            type: 'post',
            async: false,
            data: formdata,
            success: function(data){
                return data;
            }
        }).responseText;
        if (results.includes("bittorrent")) {
            $.ajax({
                url: 'https://www.bittorrent.com/',
                type: 'GET',
                dataType: 'jsonp',
                success:function(data) {},
                error:function(parsedjson, textStatus, errorThrown){
                    status = parsedjson.status;
                    //1 means failed, 2 means passed; 3 means error
    
                    if(status==200 ){
                        $('#bittorrentStatus').append(pass)
                    } else if(status==403 || status==0 || status==404){
                        $('#bittorrentStatus').append(fail)
                        } else{
                        $('#bittorrentStatus').append(fail)
                    }
                }
            });
        };
        if (results.includes("geo")) {
            $.ajax({
                url: 'https://taobao.com',
                type: 'GET',
                dataType: 'jsonp',
                success:function(data) {},
                error:function(parsedjson, textStatus, errorThrown){
                    status = parsedjson.status;
                    if(status==200 ){
                        $('#geoStatus').append(pass)
                    } else if(status==403 || status==0 || status==404){
                        $('#geoStatus').append(fail)
                    } else{
                        $('#geoStatus').append(fail)
                    }
                }
            });
        };
        if(results.includes("av")) {
            $.ajax({
                url: 'https://secure.eicar.org/eicar.com',
                timeout: 5000,
                type: 'GET',
                dataType: 'jsonp',
                success:function(data) {},
                error:function(parsedjson, textStatus, errorThrown){
                    status = parsedjson.status;
                    if(status==200 ){
                        $('#avStatus').append(pass)
                    } else if(status==403 || status==0 || status==404){
                        $('#avStatus').append(fail)
                    } else{
                        $('#avStatus').append(fail)
                    }
                }
            });
        };
        if(results.includes("zip")) {
            $.ajax({
                url: 'https://secure.eicar.org/eicarcom2.zip',
                timeout: 5000,
                type: 'GET',
                dataType: 'jsonp',
                success:function(data) {},
                error:function(parsedjson, textStatus, errorThrown){
                    status = parsedjson.status;
                    if(status==200 ){
                        $('#zipStatus').append(pass)
                    } else if(status==403 || status==0 || status==404){
                        $('#zipStatus').append(fail)
                    } else{
                        $('#zipStatus').append(fail)
                    }
                }
            });
        };
        if(results.includes("botnet")) {
            $.ajax({  
                url: 'https://ssgoldtravel.com',
                type: 'GET',
                    dataType: 'jsonp',
                success:function(status, data) {
                    alert(status)
                },
                error:function(parsedjson, textStatus, errorThrown){
                    status = parsedjson.status;
                    if(status==200 || status==307 || status==302){
                        $('#botnetStatus').append(pass)
                    } else if(status==403 || status==0 || status==404){
                        $('#botnetStatus').append(fail)
                    } else{
                        $('#botnetStatus').append(fail)
                    }
                }
            });
        };
        if(results.includes("adult")) {
            var http = jQuery.ajax({  
                url: 'https://static-lvlt.xhcdn.com/xh-desktop/images/favicon/favicon.ico?1',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.overrideMimeType('text/plain; charset=x-user-defined');
                },
                success: function (result, textStatus, jqXHR) {       
                    if(result.length < 1){
                        alert("The thumbnail doesn't exist");
                        $("#thumbnail").attr("src", "data:image/png;base64,");
                        return
                    }
                },
                async: false
            });
            if(http.status==200 || http.status==307 || http.status==302){
                $('#adultStatus').append(pass)
            } else if(http.status==403 || http.statuss==0 || http.status==404){
                $('#adultStatus').append(fail)
            } else{
                $('#adultStatus').append(fail)
            };
        };
        if(results.includes("phish")) {
            var http = jQuery.ajax({  
                url: 'https://bt-home.weebly.com/favicon.ico',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.overrideMimeType('text/plain; charset=x-user-defined');
                },
                success: function (result, textStatus, jqXHR) {       
                    if(result.length < 1){
                        alert("The thumbnail doesn't exist");
                        $("#thumbnail").attr("src", "data:image/png;base64,");
                        return
                    }
                },
                async: false
            });
            if(http.status==200 || http.status==307 || http.status==302){
                $('#phishStatus').append(pass)
            } else if(http.status==403 || http.statuss==0 || http.status==404){
                $('#phishStatus').append(fail)
            } else{
                $('#phishStatus').append(fail)
            };
        };
        if(results.includes("src")) {
	        var srccode = 't=#include <iostream> using namespace std; int main() { int rows, number = 1; cout << "Enter number of rows: "; cin >> rows; for(int i = 1; i <= rows; i++) { for(int j = 1; j <= i; ++j) { cout << number << " "; ++number; } cout << endl; } return 0; }'
	        $.ajax({
		    url: 'exfiltrate.php',
    	    	type: 'POST',
 	    	    data: srccode,
	        }).done(function(data, statusText, xhr){
		        var status=xhr.status;
	    	    if(status==200 || status==307 || status==302){
			        $('#srcStatus').append(pass)
		        } else if (status==403 || status==0 || status==404){
			        $('#srcStatus').append(fail)
		        } else {
			        $('#srcStatus').append(fail)
		        };
	        });
	    };
        if(results.includes("ssn")) {
	        var socials = 't=ssn:514-14-8905, ssn:624-84-9181, ssn:044-34-6954'
	        $.ajax({
		    url: 'exfiltrate.php',
    	    	type: 'POST',
 	    	    data: socials,
	        }).done(function(data, statusText, xhr){
		        var status=xhr.status;
	    	    if(status==200 || status==307 || status==302){
			        $('#ssnStatus').append(pass)
		        } else if (status==403 || status==0 || status==404){
			        $('#ssnStatus').append(fail)
		        } else {
			        $('#ssnStatus').append(fail)
		        };
	        });
	    };
        if(results.includes("xss")) {
	        $.ajax({
		        url: 'exfiltrate.php?t=%3Cscript%20type=%22text/javascript%22%20language=%22javascript%22%3Ealert(%22success%22)%3C/script%3E&test=xss',
    	        type: 'GET',
                dataType: 'text',
                async: false,
                success: function(data) {
                    if (data.includes("success")) {
                        $('#xssStatus').append(pass)
                    } else {
                        $('#xssStatus').append(fail)
                    };
                }
            });
        };
    });
});
