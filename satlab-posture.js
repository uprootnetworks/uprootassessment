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
                url: 'https://satlab.dreamhosters.com/doublezip.zip',
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
                url: 'https://qwkcheckout.com/favicon.ico',
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
    });
});
