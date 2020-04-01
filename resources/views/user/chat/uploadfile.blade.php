<script>
    $(function(){
        $(document).on('click','#upload_link',function(e){
            e.preventDefault();
            $("#uploadfile:hidden").trigger('click');
        });

        $(document).on('change','#uploadfile',function () {
            alert('hi');
            var invoice_id = $('[name="invoice"]').val();
            var formData = new FormData();
            formData.append('file', $('#uploadfile')[0].files[0]);
            formData.append('type', 'invoice');
            formData.append('id', invoice_id);
            $.ajax({
                type:'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url:'{{ route("chatsendfile") }}',
                data: formData,
                processData: false,  // tell jQuery not to process the data
                contentType: false,  // tell jQuery not to set contentType
                success:function(data) {
                    $('#converse').append(data);
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
            });
            $('#uploadfile').val('');// set the value to empty of myfile control.
        });
    });
</script>
