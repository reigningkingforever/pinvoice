@extends('layouts.user')
@section('head')

@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1>Invoice</h1>
                <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                    <ol class="breadcrumb pt-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div class="separator mb-5"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card mb-5">
                    <div class="card-body">
                        {{-- <p>Invoice use inline styling and table layout to be downloaded
                            as an html and can be converted to pdf format easily.
                            To prevent the template inheriting some styles from the
                            project stylesheets, you may use below button to view standalone
                            version. You may also take a look at print version with the button below.
                        </p> --}}
                        <a class="btn btn-primary" target="_blank" href="#">Open in new window</a>
                        <a onclick="window.print(); return false;" class="btn btn-primary" href="#">Print</a></div>
                </div>
            </div>
        </div>
        <div class="row invoice">
            <div class="col-12">
                <div class="invoice-contents" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color:#ffffff; max-width:830px; font-family: Helvetica,Arial,sans-serif !important; position: relative;">
                    <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px;" heigth="auto">
                        <tbody>
                            <tr>
                                <td align="left" valign="center" style="padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;"><img src="{{asset('img/dore.png')}}"></td>
                                <td align="right" valign="center" style="padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;">
                                    <p style="color: #8f8f8f; font-weight: normal; line-height: 1.2; font-size: 12px; white-space: nowrap;">ColoredStrategies Inc
                                        <br>35 Little Russell St. Bloomsburg London,UK
                                        <br>784 451 12 47</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding-top:30px; border-top:1px solid #f1f0f0">
                                    <table style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td style="vertical-align:middle; border-radius: 3px; padding:30px; background-color: #f9f9f9; border-right: 5px solid white;">
                                                    <p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">Latashia Nagy
                                                        <br>100-148 Warwick Trfy, Kansas City, USA</p>
                                                </td>
                                                <td style="text-align: right; padding-top:0px; padding-bottom:0; vertical-align:middle; padding:30px; background-color: #f9f9f9; border-radius: 3px; border-left: 5px solid white;">
                                                    <p style="color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0;">Invoice #: 741
                                                        <br>02.02.2019</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="border-top:1px solid #f1f0f0">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="text-align:center;">
                                                    <p style="color: #909090; font-size:11px; text-align:center;">Invoice was created on a computer and is valid without the signature and seal.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="text-align:center;">
                                                    <p class="d-sm-inline-block text-center">
                                                        <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">PLAY VIDEO</button>
                                                        <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">PLAY AUDIO</button>
                                                        <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">SHOW IMAGE</button>
                                                        <a href="" class="btn badge badge-pill badge-outline-primary mb-1">FILE</a>
                                                    </p>
                                                    {{-- <p style="color: #909090; font-size:11px; text-align:center;">
                                                        Invoice was created on a computer and is valid without the signature and seal.
                                                    </p> --}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="border-bottom:1px solid #f1f0f0">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style="width: 100%; margin-top:40px;">
                                        <thead>
                                            <tr>
                                                <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px;">ITEM NAME</th>
                                                <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px;">COUNT</th>
                                                <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px;">PRICE</th>
                                                <th style="text-align:right; font-size: 10px; color:#8f8f8f; padding-bottom: 15px;">AMOUNT</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Marble Cake</h4></a>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 14.82</p>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td colspan="4">
                                                    <div class="collapse" id="collapseExample" style="">
                                                        <div class="p-4 border my-2">
                                                            <p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                                                            <p class="d-sm-inline-block">
                                                                <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">PLAY VIDEO</button>
                                                                <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">PLAY AUDIO</button>
                                                                <button class="btn badge badge-pill badge-outline-primary mb-1" data-toggle="modal" data-target="#bd-example-modal-sm">SHOW IMAGE</button>
                                                                <a href="" class="btn badge badge-pill badge-outline-primary mb-1">FILE</a>
                                                            </p>
                                                            <div class="modal fade" id="bd-example-modal-sm" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
                                                                <div class="modal-dialog modal-sm">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title">Modal title</h5>
                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">×</span>
                                                                            </button>
                                                                        </div>
                                                                        <div class="modal-body">...</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Chocolate Cake</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 8.97</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Fat Rascal</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 18.24</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cremeschnitte</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 4.24</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cheesecake</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 6.27</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Magdalena</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 10.97</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td style="padding-top:0px; padding-bottom:5px;">
                                                    <a class="mb-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"><i class="simple-icon-plus"></i></a>
                                                    <h4 class="d-inline" style="font-size: 16px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Genoise</h4></td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2 pcs</p>
                                                </td>
                                                <td>
                                                    <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">$ 14.82</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:0; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$ 21.24</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;" heigth="auto">
                        <tr>
                            <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 100%">
                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">Subtotal :</p>
                            </td>
                            <td style="padding-top:0px; text-align: right;">
                                <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$ 61.82</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 100%">
                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">Tax :</p>
                            </td>
                            <td style="padding-top:0px; text-align: right;">
                                <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$ 2.18</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 100%">
                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">Shipping :</p>
                            </td>
                            <td style="padding-top:0px; text-align: right;">
                                <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$ 3.21</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 100%; padding-bottom:15px;">
                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;"><strong>Total :</strong></p>
                            </td>
                            <td style="padding-top:0px; text-align: right; padding-bottom:15px;">
                                <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px"><strong>$ 68.14</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align:center;">
                                <p style="color: #909090; font-size:11px; text-align:center;">This Invoice was created from https://www.pinvoice.com. Click here to create yours</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
@push('scripts')

@endpush
