@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/select2-bootstrap.min.css')}}">
<style>

.slider a:hover {
  color: #7f8c8d;
  text-decoration: underline;
}
.slider .contain {
  width: 100%;
}
.slider .row::-webkit-scrollbar { width: 0 !important }
.slider .row {
  /*overflow: scroll;
  width: 100%;*/
  overflow-x:auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.slider .row__inner {
  -webkit-transition: 450ms -webkit-transform;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 40px 0;
  padding-bottom: 10px;
}
.tile {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: 450ms all;
  transition: 450ms all;
  -webkit-transform-origin: center left;
          transform-origin: center left;
}
.tile__img {
  width: 250px;
  height: 140.625px;
  -o-object-fit: cover;
     object-fit: cover;
}
.tile__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,0.9)), to(rgba(0,0,0,0)));
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  -webkit-transition: 450ms opacity;
  transition: 450ms opacity;
}


.tile:hover .tile__details {
  opacity: 1;
}
.tile__title {
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.row__inner:hover {
  -webkit-transform: translate3d(-62.5px, 0, 0);
          transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .tile {
  opacity: 0.3;
}
.row__inner:hover .tile:hover {
  -webkit-transform: scale(1.5);
          transform: scale(1.5);
  opacity: 1;
}
.tile:hover ~ .tile {
  -webkit-transform: translate3d(125px, 0, 0);
          transform: translate3d(125px, 0, 0);
}
/* .list-thumbnail{height:100px !important;} */
.text-responsive{font-size:calc(100% + 1vw + 1vh);}
</style>
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12">
                <div class="mb-2">
                    {{-- <h1>Sarah Kortney</h1> --}}
                    <div class="text-zero top-right-button-container">
                        <button type="button" class="btn btn-primary btn-lg top-right-button mr-1">ADD NEW</button>
                        <div class="btn-group">
                            <div class="btn btn-primary btn-lg pl-4 pr-0 check-button">
                                <label class="custom-control custom-checkbox mb-0 d-inline-block">
                                    <input type="checkbox" class="custom-control-input" id="checkAll"> <span class="custom-control-label">&nbsp;</span></label>
                            </div>
                            <button type="button" class="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                        </div>
                    </div>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">RECENT</a></li>
                    <li class="nav-item"><a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">SEND NEW </a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-2">
                                    <a class="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">Display Options <i class="simple-icon-arrow-down align-middle"></i></a>
                                    <div class="collapse dont-collapse-sm" id="displayOptions">
                                        <span class="mr-3 mb-2 d-inline-block float-md-left">
                                            <a href="#" class="mr-2 view-icon active">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"/>
                                                    <path class="view-icon-svg" d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"/>
                                                    <path class="view-icon-svg" d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"/>
                                                    <path class="view-icon-svg" d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"/>
                                                    <path class="view-icon-svg" d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"/>
                                                    <path class="view-icon-svg" d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"/>
                                                </svg>
                                            </a>
                                        </span>
                                        <div class="d-block d-md-inline-block">
                                            <div class="btn-group float-md-left mr-1 mb-1">
                                                <button class="btn btn-outline-dark btn-xs active" type="button" id="switchsent" >Sent Invoices</button>
                                                <button class="btn btn-outline-dark btn-xs " type="button" id="switchreceived">Received Invoices</button>

                                            </div>
                                            <div class="search-sm calendar-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                                <input class="form-control datepicker" placeholder="Search by day">
                                            </div>
                                        </div>
                                        <div class="float-md-right"><span class="text-muted text-small">Displaying 1-10 of 210 items </span>
                                            <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">20</button>
                                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">10</a> <a class="dropdown-item active" href="#">20</a> <a class="dropdown-item" href="#">30</a> <a class="dropdown-item" href="#">50</a> <a class="dropdown-item" href="#">100</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 list" data-check-all="checkAll" id="sentinvoice">
                                @forelse ($sentInvoice as $sent)
                                    <div class="card d-flex flex-row mb-3">
                                        <a class="d-flex" href="Pages.Product.Detail.html">
                                            <img src="{{asset('img/fat-rascal-thumb.jpg')}}" alt="Fat Rascal" class="list-thumbnail responsive border-0 card-img-left">
                                        </a>
                                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                                <div class="d-flex justify-content-between w-40 w-sm-100">
                                                    <a href="Pages.Product.Detail.html">
                                                        <p class="list-item-heading mb-0 truncate">Invoice#{{$sent->id}}</p>
                                                    </a>
                                                    <a class="bg-primary text-white rounded-circle h4" style="cursor:pointer;" onclick="event.preventDefault();
                                                    document.getElementById('chat-form-{{$sent->id}}').submit();"><i class="iconsminds-speach-bubbles" ></i></a>
                                                    <form id="chat-form-{{$sent->id}}" action="{{ route('chat') }}" method="POST" style="display: none;">
                                                        <input type="hidden" name="invoice" value="{{$sent->id}}">
                                                        @csrf
                                                    </form>
                                                </div>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">Cupcakes</p>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">13.04.2018</p>
                                                <div class="w-15 w-sm-100"><span class="badge badge-pill badge-primary">PROCESSED</span></div>
                                            </div>
                                            <label class="custom-control custom-checkbox mb-1 align-self-center pr-4">
                                                <input type="checkbox" class="custom-control-input">
                                                <span class="custom-control-label">&nbsp;</span>
                                            </label>
                                        </div>
                                    </div>
                                    <nav class="mt-4 mb-3">
                                        <ul class="pagination justify-content-center mb-0">
                                            <li class="page-item"><a class="page-link first" href="#"><i class="simple-icon-control-start"></i></a></li>
                                            <li class="page-item"><a class="page-link prev" href="#"><i class="simple-icon-arrow-left"></i></a></li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link next" href="#" aria-label="Next"><i class="simple-icon-arrow-right"></i></a></li>
                                            <li class="page-item"><a class="page-link last" href="#"><i class="simple-icon-control-end"></i></a></li>
                                        </ul>
                                    </nav>
                                @empty
                                <div class="card d-flex flex-row mb-3">
                                    No sent invoice
                                </div>
                                @endforelse

                            </div>
                            <div class="col-12 list" data-check-all="checkAll" id="receivedinvoice">
                                @forelse ($receivedInvoice as $received)
                                    <div class="card d-flex flex-row mb-3">
                                        <a class="d-flex" href="Pages.Product.Detail.html">
                                            <img src="{{asset('img/fat-rascal-thumb.jpg')}}" alt="Fat Rascal" class="list-thumbnail responsive border-0 card-img-left">
                                        </a>
                                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                                <div class="d-flex justify-content-between w-40 w-sm-100">
                                                    <a href="Pages.Product.Detail.html">
                                                        <p class="list-item-heading mb-0 truncate">Invoice#{{$received->id}}</p>
                                                    </a>
                                                    <a class="bg-primary text-white rounded-circle h4" style="cursor:pointer;" onclick="event.preventDefault();
                                                    document.getElementById('chat-form-{{$received->id}}').submit();"><i class="iconsminds-speach-bubbles" ></i></a>
                                                    <form id="chat-form-{{$received->id}}" action="{{ route('chat') }}" method="POST" style="display: none;">
                                                        <input type="hidden" name="invoice" value="{{$received->id}}">
                                                        @csrf
                                                    </form>
                                                </div>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">Cupcakes</p>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">13.04.2018</p>
                                                <div class="w-15 w-sm-100"><span class="badge badge-pill badge-primary">PROCESSED</span></div>
                                            </div>
                                            <label class="custom-control custom-checkbox mb-1 align-self-center pr-4">
                                                <input type="checkbox" class="custom-control-input">
                                                <span class="custom-control-label">&nbsp;</span>
                                            </label>
                                        </div>
                                    </div>
                                    <nav class="mt-4 mb-3">
                                        <ul class="pagination justify-content-center mb-0">
                                            <li class="page-item"><a class="page-link first" href="#"><i class="simple-icon-control-start"></i></a></li>
                                            <li class="page-item"><a class="page-link prev" href="#"><i class="simple-icon-arrow-left"></i></a></li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link next" href="#" aria-label="Next"><i class="simple-icon-arrow-right"></i></a></li>
                                            <li class="page-item"><a class="page-link last" href="#"><i class="simple-icon-control-end"></i></a></li>
                                        </ul>
                                    </nav>
                                @empty
                                <div class="card d-flex flex-row mb-3">
                                    No received invoice
                                </div>
                                @endforelse

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">

                        <div class="row">
                            <div class="col-12 slider">
                                <h5>Use Template</h5>
                                <div class="row">
                                    <div class="row__inner">

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="{{asset('img/fruitcake-thumb.jpg')}}" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="{{asset('img/napoleonshat-thumb.jpg')}}" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="{{asset('img/genoise-thumb.jpg')}}" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="{{asset('img/gingerbread-thumb.jpg')}}" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="{{asset('img/goose-breast-thumb.jpg')}}" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                      <div class="tile">
                                        <div class="tile__media">
                                          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
                                        </div>
                                        <div class="tile__details">
                                          <div class="tile__title">
                                            Top Gear
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-5 col-xl-4 col-left">
                                <div class="card mb-4 d-none d-lg-block">
                                    <div class="position-absolute card-top-buttons">
                                        <button class="btn btn-header-light icon-button"><i class="simple-icon-refresh"></i></button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Recently Used Template</h5>
                                        <div>
                                            <div class="d-flex flex-row mb-3">
                                                <a class="d-block position-relative" href="#"><img src="{{asset('img/marble-cake-thumb.jpg')}}" alt="Marble Cake" class="list-thumbnail border-0"> <span class="badge badge-pill badge-theme-2 position-absolute badge-top-right">NEW</span></a>
                                                <div class="pl-3 pt-2 pr-2 pb-2">
                                                    <a href="#">
                                                        <p class="list-item-heading">Progressively Maintain Extensive Infomediaries</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row mb-3">
                                                <a class="d-block position-relative" href="#"><img src="{{asset('img/fruitcake-thumb.jpg')}}" alt="Fruitcake" class="list-thumbnail border-0"></a>
                                                <div class="pl-3 pt-2 pr-2 pb-2">
                                                    <a href="#">
                                                        <p class="list-item-heading">Assertively Iterate Resource Maximizing</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row mb-3">
                                                <a class="d-block position-relative" href="#"><img src="{{asset('img/chocolate-cake-thumb.jpg')}}" alt="Chocolate Cake" class="list-thumbnail border-0"></a>
                                                <div class="pl-3 pt-2 pr-2 pb-2">
                                                    <a href="#">
                                                        <p class="list-item-heading">Podcasting Operational Change</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row">
                                                <a class="d-block position-relative" href="#"><img src="{{asset('img/fat-rascal-thumb.jpg')}}" alt="Fat Rascal" class="list-thumbnail border-0"></a>
                                                <div class="pl-3 pt-2 pr-2 pb-2">
                                                    <a href="#">
                                                        <p class="list-item-heading">Manufactured Products</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 col-lg-7 col-xl-8 col-right survey-app">
                                <div class="sortable-survey">
                                    <div>
                                        <div class="card question d-flex mb-4 edit-quesiton">
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                    <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><span class="heading-number d-inline-block">1 </span>Age</div>
                                                </div>
                                                <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                    <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button rotate-icon-click rotate" type="button" data-toggle="collapse" data-target="#q1" aria-expanded="true" aria-controls="q1"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                                </div>
                                            </div>
                                            <div class="question-collapse collapse show" id="q1">
                                                <div class="card-body pt-0">
                                                    <div class="edit-mode">
                                                        <div class="form-group mb-3">
                                                            <label>Title</label>
                                                            <input class="form-control" type="text" value="Age">
                                                        </div>
                                                        <div class="form-group mb-5">
                                                            <label>Question</label>
                                                            <input class="form-control" type="text" value="How old are you?">
                                                        </div>
                                                        <div class="separator mb-4"></div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answer Type</label>
                                                            <select class="form-control select2-single" data-width="100%">
                                                                <option label="&nbsp;">&nbsp;</option>
                                                                <option value="0">Text Input</option>
                                                                <option value="1" selected="selected">Single Select</option>
                                                                <option value="2">Multiple Select</option>
                                                                <option value="3">Checkbox</option>
                                                                <option value="4">Radiobutton</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answers</label>
                                                            <div class="answers mb-3 sortable">
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="18-24">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="24-30">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="30-40">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="40-50">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="50+">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-outline-primary btn-sm mb-2"><i class="simple-icon-plus btn-group-icon"></i> Add Answer</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-mode">
                                                        <label>How old are you?</label>
                                                        <select class="form-control select2-single" data-width="100%">
                                                            <option label="&nbsp;">&nbsp;</option>
                                                            <option value="0">18-24</option>
                                                            <option value="1">24-30</option>
                                                            <option value="2">30-40</option>
                                                            <option value="3">40-50</option>
                                                            <option value="4">50+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card question d-flex mb-4 edit-quesiton">
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                    <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><span class="heading-number d-inline-block">2 </span>Gender</div>
                                                </div>
                                                <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                    <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q2" aria-expanded="false" aria-controls="q2"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                                </div>
                                            </div>
                                            <div class="collapse question-collapse" id="q2">
                                                <div class="card-body pt-0">
                                                    <div class="edit-mode">
                                                        <div class="form-group mb-3">
                                                            <label>Title</label>
                                                            <input class="form-control" type="text" value="Gender">
                                                        </div>
                                                        <div class="form-group mb-5">
                                                            <label>Question</label>
                                                            <input class="form-control" type="text" value="What is your gender?">
                                                        </div>
                                                        <div class="separator mb-4"></div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answer Type</label>
                                                            <select class="form-control select2-single" data-width="100%">
                                                                <option label="&nbsp;">&nbsp;</option>
                                                                <option value="0">Text Input</option>
                                                                <option value="1">Single Select</option>
                                                                <option value="2">Multiple Select</option>
                                                                <option value="3">Checkbox</option>
                                                                <option value="4" selected="selected">Radiobutton</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answers</label>
                                                            <div class="answers mb-3 sortable">
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Male">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Female">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Other">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-outline-primary btn-sm mb-2"><i class="simple-icon-plus btn-group-icon"></i> Add Answer</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-mode">
                                                        <label>What is your gender?</label>
                                                        <div class="mb-4">
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio1">Male</label>
                                                            </div>
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio2">Female</label>
                                                            </div>
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio3">Other</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card question d-flex mb-4 edit-quesiton">
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                    <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><span class="heading-number d-inline-block">3 </span>Work</div>
                                                </div>
                                                <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                    <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                                </div>
                                            </div>
                                            <div class="collapse question-collapse" id="q3">
                                                <div class="card-body pt-0">
                                                    <div class="edit-mode">
                                                        <div class="form-group mb-3">
                                                            <label>Title</label>
                                                            <input class="form-control" type="text" value="Work">
                                                        </div>
                                                        <div class="form-group mb-5">
                                                            <label>Question</label>
                                                            <input class="form-control" type="text" value="What is your employment status?">
                                                        </div>
                                                        <div class="separator mb-4"></div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answer Type</label>
                                                            <select class="form-control select2-single" data-width="100%">
                                                                <option label="&nbsp;">&nbsp;</option>
                                                                <option value="0">Text Input</option>
                                                                <option value="1" selected="selected">Single Select</option>
                                                                <option value="2">Multiple Select</option>
                                                                <option value="3">Checkbox</option>
                                                                <option value="4">Radiobutton</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answers</label>
                                                            <div class="answers mb-3 sortable">
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Employed for wages">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Self-employed">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Out of work and looking for work">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Retired">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-outline-primary btn-sm mb-2"><i class="simple-icon-plus btn-group-icon"></i> Add Answer</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-mode">
                                                        <label>What is your employment status?</label>
                                                        <select class="form-control select2-single" data-width="100%">
                                                            <option label="&nbsp;">&nbsp;</option>
                                                            <option value="0">Employed for wages</option>
                                                            <option value="1">Self-employed</option>
                                                            <option value="2">Out of work and looking for work</option>
                                                            <option value="3">Retired</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card question d-flex mb-4 edit-quesiton">
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                    <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><span class="heading-number d-inline-block">4 </span>Coding</div>
                                                </div>
                                                <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                    <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button>
                                                    <button class="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q4" aria-expanded="false" aria-controls="q4"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                                </div>
                                            </div>
                                            <div class="collapse question-collapse" id="q4">
                                                <div class="card-body pt-0">
                                                    <div class="edit-mode">
                                                        <div class="form-group mb-3">
                                                            <label>Title</label>
                                                            <input class="form-control" type="text" value="Coding">
                                                        </div>
                                                        <div class="form-group mb-5">
                                                            <label>Question</label>
                                                            <input class="form-control" type="text" value="What programming languages do you use?">
                                                        </div>
                                                        <div class="separator mb-4"></div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answer Type</label>
                                                            <select class="form-control select2-single" data-width="100%">
                                                                <option label="&nbsp;">&nbsp;</option>
                                                                <option value="0">Text Input</option>
                                                                <option value="1">Single Select</option>
                                                                <option value="2">Multiple Select</option>
                                                                <option value="3" selected="selected">Checkbox</option>
                                                                <option value="4">Radiobutton</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="d-block">Answers</label>
                                                            <div class="answers mb-3 sortable">
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Python">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="JavaScript">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="PHP">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="Java">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                                <div class="mb-1 position-relative">
                                                                    <input class="form-control" type="text" value="C#">
                                                                    <div class="input-icons"><span class="badge badge-pill handle pr-0 mr-0"><i class="simple-icon-cursor-move"></i> </span><span class="badge badge-pill"><i class="simple-icon-ban"></i></span></div>
                                                                </div>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-outline-primary btn-sm mb-2"><i class="simple-icon-plus btn-group-icon"></i> Add Answer</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-mode">
                                                        <label>What programming languages do you use?</label>
                                                        <div class="mb-4">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="lang1">
                                                                <label class="custom-control-label" for="lang1">Python</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="lang2">
                                                                <label class="custom-control-label" for="lang2">JavaScript</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="lang3">
                                                                <label class="custom-control-label" for="lang3">PHP</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="lang4">
                                                                <label class="custom-control-label" for="lang4">Java</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="lang5">
                                                                <label class="custom-control-label" for="lang5">C#</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-outline-primary btn-sm mb-2"><i class="simple-icon-plus btn-group-icon"></i> Add Question</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="app-menu" style="width:300px !important;">
        <span class="d-block mt-3 text-center">Recent Messages</span>

        <div class="p-4 h-100">
            <div class="form-group">
                <input type="text" class="form-control rounded" placeholder="Search">
            </div>
            <div class="tab-content h-100">
                <div class="scroll">
                    {{-- <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                        <a class="d-flex" href="#">
                            <img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                        </a>
                        <div class="d-flex flex-grow-1 min-width-zero">
                            <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div class="min-width-zero"><a href="#"><p class="mb-0 truncate">Sarah Kortney</p></a>
                                    <p class="mb-1 text-muted text-small">14:20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                        <a class="d-flex" href="#">
                            <img alt="Profile Picture" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                        </a>
                        <div class="d-flex flex-grow-1 min-width-zero">
                            <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div class="min-width-zero">
                                    <a href="#"><p class="mb-0 truncate">Rasheeda Vaquera</p></a>
                                    <p class="mb-1 text-muted text-small">11:10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                        <a class="d-flex" href="#">
                            <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                        </a>
                        <div class="d-flex flex-grow-1 min-width-zero">
                            <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div class="min-width-zero">
                                    <a href="#"><p class="mb-0 truncate">Shelia Otterson</p></a>
                                    <p class="mb-1 text-muted text-small">09:50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row mb-1 pb-3 mb-3">
                        <a class="d-flex" href="#">
                            <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                        </a>
                        <div class="d-flex flex-grow-1 min-width-zero">
                            <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div class="min-width-zero">
                                    <a href="#">
                                        <p class="mb-0 truncate">Latarsha Gama</p>
                                    </a>
                                    <p class="mb-1 text-muted text-small">09:10</p>
                                </div>
                            </div>
                        </div>
                    </div> --}}
                    <div class="scroll-content" id="converse">
                        <div class="card d-inline-block mb-3 mr-2">
                            <div class="card-body" style="padding:0.75rem">
                                <div class="">
                                    <p class="mb-0 text-muted">It looks to me like you have a lot planned before your deadline. I would suggest you push your deadline back so you have time to run a successful advertising campaign.</p>
                                    <div class="position-absolute pt-1 pr-2 r-0 tick text-extra-small text-muted" style="bottom: 1px;">
                                        12:45
                                        <span class="text-extra-small text-muted"><i class="fas fa-check-double"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card d-inline-block mb-3 mr-2">
                            <div class="card-body bg-light" style="padding:0.75rem">
                                <div class="">
                                    <p class="mb-0 text-semi-muted">How do you think we should move forward with this project?
                                        As you know, we are expected to present it to our clients next week.</p>
                                    <div class="position-absolute pt-1 pr-2 r-0 tick text-extra-small text-muted" style="bottom: 1px;">
                                        12:45
                                        <span class="text-extra-small text-muted"><i class="fa fa-check"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="app-menu-button d-inline-block d-xl-none" href="#">
            <i class="simple-icon-options"></i>
        </a>
    </div>
</main>

@endsection
@push('scripts')
<script src="{{asset('js/vendor/progressbar.min.js')}}"></script>
<script src="{{asset('js/vendor/jquery.autoellipsis.js')}}"></script>
<script src="{{asset('js/vendor/Sortable.js')}}"></script>
<script src="{{asset('js/vendor/select2.full.js')}}"></script>
<script>
    $(document).ready(function(){
        $('#receivedinvoice').hide();
    });
    $('#switchreceived').click(function(){
        $('#switchsent').removeClass('active');
        $('#switchreceived').addClass('active');
        $('#sentinvoice').hide();
        $('#receivedinvoice').fadeIn();
    });
    $('#switchsent').click(function(){
        $('#switchreceived').removeClass('active');
        $('#switchsent').addClass('active');
        $('#receivedinvoice').hide();
        $('#sentinvoice').fadeIn();
    });
</script>
@endpush
