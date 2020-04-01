<script>
    var video = document.querySelector('video');

    function captureCamera(callback) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function(camera) {
            callback(camera);
        }).catch(function(error) {
            alert('Unable to capture your camera. Please check console logs.');
            console.error(error);
        });
    }

    function stopRecordingCallback() {
        video.src = video.srcObject = null;
        video.muted = false;
        video.volume = 1;
        video.src = URL.createObjectURL(recorder.getBlob());

        recorder.camera.stop();
        // recorder.destroy();
        // recorder = null;
        document.getElementById('btn-upload-video').disabled = false;
    }

    var recorder; // globally accessible

    document.getElementById('btn-start-video-recording').onclick = function() {
        this.disabled = true;
        captureCamera(function(camera) {
            video.muted = true;
            video.volume = 0;
            video.srcObject = camera;

            var myOptions = {
                type: 'video',
                video: {
                    width: 320,
                    height: 240
                },
                canvas: {
                    width: 320,
                    height: 240
                }
            };
            recorder = RecordRTC(camera, myOptions);
            // var recordingDuration = 5000;
            // recorder.setRecordingDuration(recordingDuration).onRecordingStopped(stopRecordingCallback);

            recorder.startRecording();

            // release camera on stopRecording
            recorder.camera = camera;

            document.getElementById('btn-stop-video-recording').disabled = false;
            document.getElementById('btn-upload-video').disabled = true;
        });
    };

    document.getElementById('btn-stop-video-recording').onclick = function() {
        this.disabled = true;
        document.getElementById('btn-start-video-recording').disabled = false;
        recorder.stopRecording(stopRecordingCallback);

    };

    document.getElementById('btn-upload-video').onclick = function() {
        this.disabled = true;
        if(!recorder || !recorder.getBlob()) return;
        var blob = recorder.getBlob();
        var file = new File([blob], getFileName('webm'), {
            type: 'video/webm'
        });
        sendVideo(file);
        
    };

    // this function is used to generate random file name
    function getFileName(fileExtension) {
        var d = new Date();
        var year = d.getUTCFullYear();
        var month = d.getUTCMonth();
        var date = d.getUTCDate();
        return 'RecordRTC-' + year + month + date + '-' + getRandomString() + '.' + fileExtension;
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

</script>
