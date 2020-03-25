@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/select2-bootstrap.min.css')}}">
<style>
    .suggest{
        min-height:30px;
        max-height:150px;
        width:100%;
        padding: .25rem .7rem;
        overflow-y: auto;
        overflow-x:hidden;
    }
    .suggest li{
        height:30px;
        width: 100%;
        cursor:pointer;
        padding:5px;
        border-bottom:1px solid #eee;
    }
    .suggest li:hover{
        background-color: #b0b9b8;
    }
</style>
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Security</h1>

                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>

                            <li class="breadcrumb-item active" aria-current="page">Security</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="firewall-tab" data-toggle="tab" href="#firewall" role="tab" aria-controls="firewall" aria-selected="true">IP FIREWALL</a></li>
                    <li class="nav-item"><a class="nav-link" id="ban-tab" data-toggle="tab" href="#ban" role="tab" aria-controls="ban" aria-selected="false">USER FIREWALL </a></li>

                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="firewall" role="tabpanel" aria-labelledby="firewall-tab">
                        <div class="row">
                            <div class="col-12">
                                <h5>IP Blacklist</h5>

                                <table class="table table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>IP Address</th>
                                            <th>Date Blacklisted</th>
                                            <th>History</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($blacklists->where('ipAddress','!=',null) as $blacklist)
                                            <tr>
                                                <td><a href="#" class="text-primary">{{$blacklist->ipAddress}}</a></td>
                                                <td>{{date_format($blacklist->created_at,'M d,Y')}}</td>

                                                <td>
                                                    <a href="#" class="btn btn-outline btn-info btn-pill btn-outline-1x btn-sm">View History</a>
                                                </td>
                                                <td>
                                                    <a onclick="event.preventDefault();
                                                        document.getElementById('white-{{$blacklist->id}}').submit();"
                                                        class="btn btn-outline btn-primary btn-pill btn-outline-1x btn-sm">Whitelist IP
                                                    </a>
                                                        <form id="white-{{$blacklist->id}}" action="{{route('admin.ipwhitelist')}}" method="POST" style="display: none;">
                                                            @csrf
                                                            <input type="hidden" name="ipAddress" value="{{$blacklist->ipAddress}}">
                                                        </form>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr><td colspan="4" class="text-center">No Blacklisted IP</td></tr>
                                        @endforelse
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="ban" role="tabpanel" aria-labelledby="ban-tab">
                        <div class="row">
                            <div class="col-12">
                                <h5>Banned</h5>
                                <table class="table table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th>Date Banned</th>
                                                <th>User</th>
                                                <th>Country</th>
                                                <th>Reason</th>
                                                <th>Action</th>
                                            </tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($blacklists->where('user_id','!=',null) as $ban)
                                        <tr>
                                            <td>{{date_format($ban->created_at,'M d,Y')}}</td>
                                            <td>{{$ban->user->name}}</td>
                                            <td>{{$ban->user->country->name}}</td>
                                            <td>{{$ban->reason}}</td>
                                            <td>
                                                <a onclick="event.preventDefault();
                                                document.getElementById('unban-{{$ban->id}}').submit();"
                                                class="btn btn-outline btn-primary btn-pill btn-outline-1x btn-sm">
                                                 Unban
                                                </a>
                                                <form id="unban-{{$ban->id}}" action="{{ route('admin.userwhitelist') }}" method="POST" style="display: none;">
                                                    @csrf
                                                    <input type="hidden" name="user_id" value="{{$ban->user_id}}">
                                                </form>
                                            </td>

                                        </tr>

                                        @empty
                                            <tr><td colspan="4" class="text-center">No Banned User</td></tr>
                                        @endforelse
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-menu">
            <ul class="nav nav-tabs card-header-tabs ml-0 mr-0 mb-1" role="tablist">
                <li class="nav-item w-50 text-center">
                    <a class="nav-link active" id="first-tab" data-toggle="tab" href="#firstFull" role="tab" aria-selected="true">IP Firewall</a>
                </li>
                <li class="nav-item w-50 text-center">
                    <a class="nav-link" id="second-tab" data-toggle="tab" href="#secondFull" role="tab" aria-selected="false">Ban Users</a>
                </li>
            </ul>
            <div class="p-4 h-100">
                <div class="tab-content h-100">
                    <div class="tab-pane fade show active h-100" id="firstFull" role="tabpanel" aria-labelledby="first-tab">
                        <form id="general" action="{{route('admin.ipblacklist')}}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label class="col-form-label ">Enter IP Address</label>
                                    @error('ipaddress')
                                    <span class="invalid-feedback d-inline" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <textarea name="ipaddress" class="form-control" rows="2"
                                    placeholder="Enter multiple IP Addresses seperated by comma.
                                    "></textarea>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Add to Blacklist</button>
                            </div>

                        </form>
                    </div>
                    <div class="tab-pane fade h-100" id="secondFull" role="tabpanel" aria-labelledby="second-tab">
                        <form action="{{route('admin.userblacklist')}}" method="POST">
                            @csrf
                            <div class="form-group">
                                <input type="text" name="newban" class="form-control rounded" placeholder="Search Name or Email">
                                <ul class="dropdown-menu suggest" id="userz">

                                </ul>
                            </div>

                            <div class="form-group">
                                <label class="col-form-label">Reason</label>
                                <div class="">
                                    @error('reason')
                                    <span class="invalid-feedback d-inline" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <textarea name="reason" class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                            <div class="">
                               <button type="submit" class="btn btn-primary ">Ban User</button>
                            </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <a class="app-menu-button d-inline-block d-xl-none" href="#">
                <i class="simple-icon-options"></i>
            </a>
        </div>
    </div>
</main>

@endsection
@push('scripts')
<script src="{{asset('js/vendor/select2.full.js')}}"></script>
<script>
    $('input[name="newban"]').keyup(function(){
        var query = $(this).val();
        $('#userz li').remove();
        $('#userz').css('display','none');
        if(query.length > 2){
            $.ajax({
            type:'POST',
            dataType: "json",
            url:'/admin/whotoban',
            data:{
                '_token' : $('meta[name="csrf-token"]').attr('content'),
                'query': query,
            },
            success:function(data) {
                $('#userz li').remove();
                if(data.length != 0){
                    $.each(data, function(i,val) {
                        $("#userz").append("<li id='"+val.email+"' class='user_option'>"+val.name+" | "+ val.email+"</li>");
                    });
                    $("#userz").fadeIn();
                }
                //console.log(data);
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
            });
        }

    });

    $(document).on('click', '.user_option', function(){
        $('input[name="newban"]').val($(this).attr('id'));
        $('#userz').fadeOut();
    });
</script>
@endpush
