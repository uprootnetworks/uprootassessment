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
	if(results.includes("src")) {
	    var srccode = '#ifdef HAVE_CONFIG_H #include <config.h> #elif defined(_MSC_VER) #include <config-msvc.h> #endif #include <syshead.h> #include <common.h> #include <buffer.h> #include <error.h> #include <mtu.h> #include <misc.h> #include <memdbg.h> size_t array_mult_safe (const size_t m1, const size_t m2, const size_t extra) { const size_t limit = 0xFFFFFFFF; unsigned long long res = (unsigned long long)m1 * (unsigned long long)m2 + (unsigned long long)extra; if (unlikely(m1 > limit) || unlikely(m2 > limit) || unlikely(extra > limit) || unlikely(res > (unsigned long long)limit)) msg (M_FATAL, "<attemped allocation of excessively large array>"); return (size_t) res; } void buf_size_error (const size_t size) { msg (M_FATAL, "<fatal buffer size error, size=%lu<, (unsigned long)size); } struct buffer #ifdef DMALLOC alloc_buf_debug (size_t size, const char *file, int line) #else alloc_buf (size_t size) #endif { struct buffer buf; if (!buf_size_valid (size)) buf_size_error (size); buf.capacity = (int)size; buf.offset = 0; buf.len = 0; #ifdef DMALLOC buf.data = openvpn_dmalloc (file, line, size); #else buf.data = calloc (1, size); #endif check_malloc_return(buf.data); return buf; } struct buffer #ifdef DMALLOC alloc_buf_gc_debug (size_t size, struct gc_arena *gc, const char *file, int line) #else alloc_buf_gc (size_t size, struct gc_arena *gc) #endif { struct buffer buf; if (!buf_size_valid (size)) buf_size_error (size); buf.capacity = (int)size; buf.offset = 0; buf.len = 0; #ifdef DMALLOC buf.data = (uint8_t *) gc_malloc_debug (size, false, gc, file, line); #else buf.data = (uint8_t *) gc_malloc (size, false, gc); #endif if (size) *buf.data = 0; return buf; } struct buffer #ifdef DMALLOC clone_buf_debug (const struct buffer* buf, const char *file, int line) #else clone_buf (const struct buffer* buf) #endif { struct buffer ret; ret.capacity = buf->capacity; ret.offset = buf->offset; ret.len = buf->len; #ifdef DMALLOC ret.data = (uint8_t *) openvpn_dmalloc (file, line, buf->capacity); #else ret.data = (uint8_t *) malloc (buf->capacity); #endif check_malloc_return (ret.data); memcpy (BPTR (&ret), BPTR (buf), BLEN (buf)); return ret; } #ifdef BUF_INIT_TRACKING bool buf_init_debug (struct buffer *buf, int offset, const char *file, int line) { buf->debug_file = file; buf->debug_line = line; return buf_init_dowork (buf, offset); } static inline int buf_debug_line (const struct buffer *buf) { return buf->debug_line; } static const char * buf_debug_file (const struct buffer *buf) { return buf->debug_file; } #else #define buf_debug_line(buf) 0 #define buf_debug_file(buf) "<[UNDEF]<" #endif void buf_clear (struct buffer *buf) { if (buf->capacity > 0) memset (buf->data, 0, buf->capacity); buf->len = 0; buf->offset = 0; } bool buf_assign (struct buffer *dest, const struct buffer *src) { if (!buf_init (dest, src->offset)) return false; return buf_write (dest, BPTR (src), BL'
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
    });
});
