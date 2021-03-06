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


</script>
