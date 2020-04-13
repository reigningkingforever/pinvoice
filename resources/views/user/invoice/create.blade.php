@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/select2-bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/emoji.css')}}">
@include('user.invoice.invoice_css')
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12">
                <div class="mb-2">
                    {{-- <h1>Sarah Kortney</h1> --}}

                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>


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
                                <h5 class="card-title">Drafts</h5>
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
                        <form id="invoicecreateform" action="{{route('invoice.save')}}" method="POST" enctype="multipart/form-data">@csrf
                            <div class="sortable-survey">
                                <div class="receiver">
                                    <div class="card question d-flex mb-4 edit-quesiton">
                                        <div class="d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><!--span class="heading-number d-inline-block">1 </!--span -->Receiver</div>
                                            </div>
                                            <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                {{-- <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button> --}}
                                                <button class="btn btn-outline-theme-3 icon-button rotate-icon-click rotate" type="button" data-toggle="collapse" data-target="#q1" aria-expanded="true" aria-controls="q1"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                            </div>
                                        </div>
                                        <div class="question-collapse collapse show" id="q1">
                                            <div class="card-body pt-0">
                                                <div class="edit-mode">
                                                    <div class="form-group mb-3">
                                                        <label class="d-block">Select Contacts</label>
                                                        <select name="receiver[]" class="form-control select2-multiple" data-width="100%" multiple required>
                                                            @forelse ($contacts as $contact)
                                                                <option value="{{$contact->person}}">{{$contact->mycontact->name}}</option>
                                                            @empty
                                                                <option value="0">No Contact</option>
                                                            @endforelse
                                                        </select>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="extra">
                                    <div class="card question d-flex mb-4 edit-quesiton">
                                        <div class="d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1"><!--span-- class="heading-number d-inline-block">3 </!--span-->Extra Info</div>
                                            </div>
                                            <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                {{-- <button class="btn btn-outline-theme-3 icon-button edit-button"><i class="simple-icon-pencil"></i></button>
                                                <button class="btn btn-outline-theme-3 icon-button view-button"><i class="simple-icon-eye"></i></button> --}}
                                                <button class="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3"><i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                            </div>

                                        </div>
                                        <div class="collapse question-collapse" id="q3">
                                            <div></div>
                                            <div class="card-body pt-0">
                                                <p>Invoice will automatically expire on 12/12/2020</p>
                                                <div class="edit-mode">
                                                    <div class="form-group mb-3">
                                                        <label class="d-block">Currency</label>
                                                        <select name="currency" class="form-control select2-single" data-width="100%" required>
                                                            <option value="0" disabled selected>Select Currency</option>
                                                            @forelse ($currencies as $currency)
                                                                <option value="{{$currency->id}}" label="{{$currency->symbol}}">{{$currency->name}}</option>
                                                            @empty
                                                                <option value="0">No Currency</option>
                                                            @endforelse
                                                        </select>
                                                    </div>

                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend"><span class="input-group-text">Tax</span></div>
                                                        <input type="text" name="tax" class="form-control" placeholder="0" aria-label="Text input with dropdown button">
                                                        <input type="hidden" name="tax_type" value="%">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-outline-secondary dropdown-toggle" id="tax_type" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">%</button>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#" id="tax_option">.00</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb-3">
                                                        <div class="input-group col-xs-6">
                                                            <div class="input-group-prepend"><span class="input-group-text">Discount </span></div>
                                                            <input type="text" name="discount" class="form-control" placeholder="0" aria-label="Text input with dropdown button">
                                                            <input type="hidden" name="discount_type" value=".00">
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary dropdown-toggle" id="discount_type" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">.00</button>
                                                                <div class="dropdown-menu">
                                                                    <a class="dropdown-item" href="#" id="discount_option">%</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-xs-6 mb-0">
                                                            <select name="discountexpiry" id="discountexpiry" class="form-control ">
                                                                <option value="0" selected="selected">Discount expiry</option>
                                                                <option value="0">No expiry</option>
                                                                <option value="1">24 hours</option>
                                                                <option value="2">2 days</option>
                                                                <option value="3">3 days</option>
                                                                <option value="4">4 days</option>
                                                                <option value="5">5 days</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb-3">
                                                        <div class="input-group col-xs-6">
                                                            <div class="input-group-prepend"><span class="input-group-text">Penalty </span></div>
                                                            <input type="text" name="penalty" class="form-control" placeholder="0" aria-label="Text input with dropdown button">
                                                            <input type="hidden" name="penalty_type" value=".00">
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary dropdown-toggle" id="penalty_type" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">.00</button>
                                                                <div class="dropdown-menu">
                                                                    <a class="dropdown-item" href="#" id="penalty_option">%</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-xs-6 mb-0">
                                                            <select name="penaltyperiod" id="penaltyperiod" class="form-control">
                                                                <option value="0" selected="selected">Apply after</option>
                                                                <option value="0">No penalty</option>
                                                                <option value="1">24 hours</option>
                                                                <option value="2">2 days</option>
                                                                <option value="3">3 days</option>
                                                                <option value="4">4 days</option>
                                                                <option value="5">5 days</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <label>Escrow Fees charged to?</label>
                                                        <div class="mb-4">
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" value="receiver" id="customRadio1" name="escrowfee" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio1">Receiver</label>
                                                            </div>
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" value="sender" id="customRadio2" name="escrowfee" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio2">Sender</label>
                                                            </div>
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" value="split" id="customRadio3" name="escrowfee" class="custom-control-input">
                                                                <label class="custom-control-label" for="customRadio3">Split 50/50</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <label>Add Note</label>
                                                        <input name="note" class="form-control" type="text" placeholder="About this invoice">
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <label>Attach Media</label>
                                                        <div class="btn-group d-flex justify-content-around chatbuttons" role="group" aria-label="Basic example">
                                                            <button type="button" id="upload_link" class="btn btn-light default"><i class="simple-icon-paper-clip"></i></button>
                                                            <input id="uploadfile" type="file" name="invoicefile" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" style="display:none"/>
                                                            <button type="button" id="invoicecamera" class="btn btn-light default"><i class="simple-icon-camera"></i></button>
                                                            <input type="hidden" name="invoicecamera" style="display:none"/>
                                                            <button type="button" id="invoiceaudio" class="btn btn-light default"><i class="simple-icon-microphone"></i></button>
                                                            <input type="hidden" name="invoiceaudio" style="display:none"/>
                                                            <button type="button" id="invoicevideo" class="btn btn-light default"><i class="iconsminds-video-tripod"></i></button>
                                                            <input type="hidden" name="invoicevideo" style="display:none"/>

                                                        </div>

                                                    </div>
                                                    <ul class="d-flex list-unstyled productmedia">
                                                        <li class="mx-2" id="invoicefilename" style="cursor:pointer"></li>
                                                        <li class="mx-2" id="invoiceaudioname" style="cursor:pointer"></li>
                                                        <li class="mx-2" id="invoicevideoname" style="cursor:pointer"></li>
                                                        <li class="mx-2" id="invoicecapturename" style="cursor:pointer"></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product">
                                    <div class="card question d-flex mb-4 edit-quesiton">
                                        <div class="d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                <div class="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                                    <span class="heading-number d-inline-block">1 </span>Product</div>
                                            </div>
                                            <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                <button class="btn btn-outline-danger icon-button removeproduct"><i class="simple-icon-close"></i></button>
                                                <button class="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#p1" aria-expanded="false" aria-controls="p1">
                                                    <i class="simple-icon-arrow-down with-rotate-icon"></i></button>
                                            </div>
                                        </div>
                                        <div class="collapse question-collapse" id="p1">
                                            <div class="card-body pt-0">
                                                <div class="edit-mode">
                                                    <div class="form-group mb-3">
                                                        <label>Name</label>
                                                        <input class="form-control" name="product[name][]" type="text" placeholder="product name">
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <label>Description</label>
                                                        <input class="form-control" name="product[description][]" type="text" placeholder="Optional">
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <label>Attach Media</label>
                                                        <div class="btn-group d-flex justify-content-around chatbuttons" role="group" aria-label="Basic example">
                                                            <button type="button" class="btn btn-light default productfile"><i class="simple-icon-paper-clip"></i></button>
                                                            <input type="file" name="product[file][]" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" style="display:none" onchange="getUploadFile(this)" />
                                                            <button type="button" class="btn btn-light default productcapture"><i class="simple-icon-camera"></i></button>
                                                            <input type="hidden" name="product[capture][]" style="display:none"/>
                                                            <button type="button" class="btn btn-light default productaudio"><i class="simple-icon-microphone"></i></button>
                                                            <input type="hidden" name="product[audio][]" style="display:none"/>
                                                            <button type="button" class="btn btn-light default productvideo"><i class="iconsminds-video-tripod"></i></button>
                                                            <input type="hidden" name="product[video][]" style="display:none"/>
                                                        </div>

                                                    </div>
                                                    <ul class="d-flex list-unstyled productmedia">
                                                        <li class="mx-2 productfilename" style="cursor:pointer"></li>
                                                        <li class="mx-2 productaudioname" style="cursor:pointer"></li>
                                                        <li class="mx-2 productvideoname" style="cursor:pointer"></li>
                                                        <li class="mx-2 productcapturename" style="cursor:pointer"></li>
                                                    </ul>
                                                    <div class="separator mb-4"></div>
                                                    <div class="form-row">
                                                        <div class="form-group col-xs-6">
                                                            <label for="inputEmail4">Quantity</label>
                                                            <input type="number" name="product[quantity][]" required value="1" class="form-control quantity" placeholder="1">
                                                        </div>
                                                        <div class="form-group col-xs-6">
                                                            <label for="inputPassword4">Unit Cost</label>
                                                            <input type="number" name="product[cost][]" required value="0" class="form-control cost" placeholder="0">
                                                        </div>
                                                    </div>
                                                    <label>Amount</label>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text amount">$</span>
                                                        </div>
                                                        <input type="text" name="product[amount][]" readonly  required class="form-control amount" aria-label="Amount (to the nearest dollar)">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="text-center">
                                                        <button type="button" class="btn btn-outline-primary btn-sm mb-2 addproduct">
                                                            <i class="simple-icon-plus btn-group-icon"></i> Add Product
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-outline-primary btn-sm mb-2">
                                    <i class="simple-icon-eye btn-group-icon"></i> Preview
                                </button>
                                <button type="submit" id="submitproduct" class="btn btn-outline-primary btn-sm mb-2">
                                    <i class="simple-icon-plane btn-group-icon"></i> Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="app-menu" style="width:300px !important;">
        <span class="d-block mt-3 text-center">Invoice Result</span>
        {{-- @include('user.chat.recentmessages') --}}
        <a class="app-menu-button d-inline-block d-xl-none" href="#">
            <i class="simple-icon-options"></i>
        </a>
    </div>
</main>
<div class="modal fade" id="audioRecord" tabindex="-1" role="dialog" aria-labelledby="audioRecordLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="call-container">
                    <div class="d-flex justify-content-center"><audio controls autoplay playsinline></audio></div>
                    <div id="controls" class="d-flex justify-content-around mt-1">
                        <button id="btn-start-recording" class="btn btn-primary">Start</button>
                        <button id="btn-stop-recording" class="btn btn-danger" disabled>Stop</button>
                        <button id="btn-release-microphone" disabled style="display:none">Release Microphone</button>
                        <button id="btn-upload-recording" class="btn btn-success" disabled>Add</button>
                        <button data-dismiss="modal" class="btn btn-danger">Cancel</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="videoRecord" tabindex="-1" role="dialog" aria-labelledby="videoRecordLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="call-container">
                    <div class="d-flex justify-content-center"><video controls autoplay playsinline></video></div>
                    <div id="controls" class="d-flex justify-content-around mt-1">
                        <button id="btn-start-video-recording" class="btn btn-primary">Start</button>
                        <button id="btn-stop-video-recording" class="btn btn-danger" disabled>Stop </button>
                        <button id="btn-upload-video" class="btn btn-success" disabled>Add</button>
                        <button data-dismiss="modal" class="btn btn-danger">Discard</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="imageCapture" tabindex="-1" role="dialog" aria-labelledby="imageCaptureLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div id="capturecontainer" class="d-flex flex-column justify-content-center" style="width:100%">
                    <h5 class="calling-user-name">
                         <span class="calling">Image Capturing...</span>
                    </h5>
                    <div id="my_camera1" class="d-flex flex-column justify-content-center"></div>
                    <button id="takepicture" type='button' class="btn btn-primary mt-2" onClick="take_snapshot1()">Take Snapshot</button>
                    <input type="hidden" name="image1" id="image1">
                    <div class="d-flex justify-content-around">
                        <button type='button' class="retakepicture btn btn-warning mt-2" onClick="retake()">Retake Snapshot</button>
                        <button type="button" class="retakepicture btn btn-success mt-2" id="sendCapture">
                            <span>Add Image</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script src="{{asset('js/vendor/jquery.autoellipsis.js')}}"></script>
<script src="{{asset('js/vendor/Sortable.js')}}"></script>
<script src="{{asset('js/vendor/select2.full.js')}}"></script>
<script src="{{asset('js/emoji.js')}}"></script>
<script src="{{asset('plugins/recorder/js/RecordRTC.js')}}"></script>

<script>
    $(document).on('click','.addproduct',function(){
        var product = $(this).closest('.product').clone();
        // var id = product.find('.collapse').attr('id');
        product.insertAfter($('.product').last());
        $('.product').each(function(index){
            $(this).find('.heading-number').html(index+1);
            $(this).find('.collapse').attr('id','p'+index+1);
            $(this).find('.rotate-icon-click').attr('data-target','#p'+index+1);
            $(this).find('.rotate-icon-click').attr('aria-controls','p'+index+1);
        });
    });
    $(document).on('click','.removeproduct',function(){
        if($('.product').length > 1){
            $(this).closest('.product').remove();
        }
        $('.product').each(function(index){
            $(this).find('.heading-number').html(index+1);
            $(this).find('.collapse').attr('id','p'+index+1);
            $(this).find('.rotate-icon-click').attr('data-target','#p'+index+1);
            $(this).find('.rotate-icon-click').attr('aria-controls','p'+index+1);
        });
    });
</script>

@include('user.chat.uploadaudio')
@include('user.chat.uploadvideo')
@include('user.chat.captureimage')

<script>
    var formElement = document.getElementById('invoicecreateform');
    var formData = new FormData(formElement);
    var caller;
    //currency//
    $('select[name="currency"]').change(function(){
       var symbol = $(this).find("option:selected").attr('label');
        $('.amount').html(symbol);
    });
    $('#tax_option').click(function(e){
        e.preventDefault();
       let new_option = $(this).html();
       $('input[name="tax_type"]').val(new_option);
       let old_option = $('#tax_type').html();
        $('#tax_type').html(new_option);
        $(this).html(old_option);
    });
    $('#discount_option').click(function(e){
        e.preventDefault();
       let new_option = $(this).html();
       $('input[name="discount_type"]').val(new_option);
       let old_option = $('#discount_type').html();
        $('#discount_type').html(new_option);
        $(this).html(old_option);
    });
    $('#penalty_option').click(function(e){
        e.preventDefault();
       let new_option = $(this).html();
       $('input[name="penalty_type"]').val(new_option);
       let old_option = $('#penalty_type').html();
        $('#penalty_type').html(new_option);
        $(this).html(old_option);
    });

    $(document).on('input','.cost',function(){
        let amount = $(this).closest('.product').find('.amount');
        let quantity = $(this).closest('.product').find('.quantity');
        let cost = $(this);
        amount.val(parseInt(quantity.val()) * parseInt(cost.val()));
    });
    $(document).on('input','.quantity',function(){
        let amount = $(this).closest('.product').find('.amount');
        let cost = $(this).closest('.product').find('.cost');
        let quantity = $(this);
        amount.val(parseInt(quantity.val()) * parseInt(cost.val()));
    });

    $('#upload_link').click(function(e){
        e.preventDefault();
        $("#uploadfile:hidden").trigger('click');
    });
    $('#uploadfile').change(function () {
        $('#invoicefilename').html($(this)[0].files[0].name +'<i class="simple-icon-close text-danger ml-1"></i>');
    });
    $('#invoicefilename').click(function(){
        $("#uploadfile:hidden").val('');
        $(this).html('');
    });
    $('#invoicecamera').click(function(){
        caller = $(this).attr('id');
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
    $('#invoicecapturename').click(function(){
        $("#uploadfile:hidden").val('');
        $(this).html('');
    });
    $('#invoiceaudio').click(function(){
        caller = $(this).attr('id');
        $("#audioRecord").modal();
    });
    $('#invoiceaudioname').click(function(){
        $("input[name='invoiceaudio']:hidden").val('');
        $(this).html('');
    });
    $('#invoicevideo').click(function(){
        caller = $(this).attr('id');
        $("#videoRecord").modal();
    });
    $('#invoicevideoname').click(function(){
        $("input[name='invoicevideo']:hidden").val('');
        $(this).html('');
    });
</script>

<script>
    //product file
    $(document).on('click','.productfile',function(e){
        // e.preventDefault();
        $(this).next("input[type='file']:hidden").trigger('click');
    });
    function getUploadFile(el){
        // var element = event.srcElement;
       $(el).closest('.product').find('.productfilename').html(el.files.item(0).name +'<i class="simple-icon-close text-danger ml-1"></i>');
    }
    $(document).on('click','.productfilename',function(e){
        // e.preventDefault();
        $(this).closest('.product').find("input[name='product[file][]']:hidden").val('');
        $(this).html('');
    });
</script>
<script>
    $(document).on('click','.productaudio',function(){
        caller = this;
        $("#audioRecord").modal();
    });
    function sendAudio(adata){
        var reader = new FileReader();
        reader.readAsDataURL(adata);
        reader.onloadend = function() {
            var base64data = reader.result;
            if(caller == 'invoiceaudio'){
                $("input[name='invoiceaudio']:hidden").val(data_uri);
                $('#invoiceaudioname').html('audio.mp3 <i class="simple-icon-close text-danger ml-1"></i>');
            }
            else{
                $(caller).next("input[name='product[audio][]']:hidden").val(base64data);
                $(caller).closest('.product').find('.productaudioname').html('audio.mp3 <i class="simple-icon-close text-danger ml-1"></i>');
            }
            console.log(base64data);
        }
        $("#audioRecord").modal('hide');
    }

    $(document).on('click','.productaudioname',function(e){
        $(this).closest('.product').find("input[name='product[audio][]']:hidden").val('');
        $(this).html('');
    });
</script>
<script>
    $(document).on('click','.productvideo',function(){
        caller = this;
        $("#videoRecord").modal();
    });

    function sendVideo(vdata){
        var reader = new FileReader();
        reader.readAsDataURL(vdata);
        reader.onloadend = function() {
            var base64data = reader.result;
            if(caller == 'invoicevideo'){
                $("input[name='invoicevideo']:hidden").val(data_uri);
                $('#invoicevideoname').html('video.mp4 <i class="simple-icon-close text-danger ml-1"></i>');
            }
            else{
                $(caller).next("input[name='product[video][]']:hidden").val(base64data);
                $(caller).closest('.product').find('.productvideoname').html('video.mp4 <i class="simple-icon-close text-danger ml-1"></i>');
            }
            console.log(base64data);
        }
        $("#videoRecord").modal('hide');

    }

    $(document).on('click','.productvideoname',function(e){
        $(this).closest('.product').find("input[name='product[video][]']:hidden").val('');
        $(this).html('');
    });
</script>
<script>
    //product capture
    $(document).on('click','.productcapture',function(){
        caller = this;
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

    $('#sendCapture').click(function(){
        Webcam.reset();
        $('#takepicture').show();
        $('.retakepicture').hide();
        $("#imageCapture").modal('hide');
    });

    function take_snapshot1() {
        // take snapshot and get image data
        Webcam.snap( function(data_uri) {
            if(caller == 'invoicecamera'){
                $("input[name='invoicecamera']:hidden").val(data_uri);
                $('#invoicecapturename').html('image.jpg <i class="simple-icon-close text-danger ml-1"></i>');
            }
            else{
                $(caller).next("input[name='product[capture][]']:hidden").val(data_uri);
                $(caller).closest('.product').find('.productcapturename').html('image.jpg <i class="simple-icon-close text-danger ml-1"></i>');
            }
            document.getElementById('my_camera1').innerHTML ='<img src="'+data_uri+'"/>';
        });
        $('#takepicture').hide();
        $('.retakepicture').show();

    }

    $(document).on('click','.productcapturename',function(e){
        $(this).closest('.product').find("input[name='product[capture][]']:hidden").val('');
        $(this).html('');
    });
</script>
@endpush
