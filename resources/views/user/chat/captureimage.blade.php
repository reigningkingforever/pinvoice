<script src="{{asset('js/webcam.min.js')}}"></script>
<script>
    $(document).on('click','#startcamera',function(){
        $("#imageCapture").modal();
        Webcam.set({
            width: 400,
            height: 350,
            image_format: 'jpeg',
            jpeg_quality: 90,
        });
        Webcam.attach('#my_camera1');
        $('#my_camera1').width('100%');
        $('#my_camera1 video').width('100%');
        $('#my_camera1 video').height('100%');

    });

    $('.retakepicture').hide();

    function take_snapshot1() {
        // take snapshot and get image data
        Webcam.snap( function(data_uri) {
            // display results in page
            //var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
            $("#image1").val(data_uri);
            document.getElementById('my_camera1').innerHTML ='<img src="'+data_uri+'"/>';
        } );
        $('#takepicture').hide();
        $('.retakepicture').show();
    }

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;

        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);

        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {
            type: mimeString
        });
    }

    function retake(){
        document.getElementById('my_camera1').innerHTML ='';
        Webcam.attach( '#my_camera1' );
        $('#my_camera1').width('100%');
        $('#my_camera1 video').width('100%');
        $('#my_camera1 video').height('100%');

        $('.retakepicture').hide();
        $('#takepicture').show();
    }

    function getRandomString() {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }

    function getFileName(fileExtension) {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        return year + month + date + '-' + getRandomString() + '.' + fileExtension;
    }

    $('#sendCapture').click(function(){
        var invoice_id = $('[name="invoice"]').val();
        var captured = $('#image1').val();
        var blob = dataURItoBlob(captured);
        var file = new File([blob], getFileName('jpg'), {
            type: 'image/jpeg'
        });
        var formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'invoice');
        formData.append('id', invoice_id);

        $.ajax({
            type:'POST',
            url:'{{ route("chatsendCaptured") }}',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            success:function(data) {
                $('#converse').append(data);
                $("#imageCapture").modal('hide');
                Webcam.reset();
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });
    });
</script>
