@extends('layouts.user')
@section('head')

@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12" data-check-all="checkAll">
                <div class="mb-2">
                    <h1><i class="simple-icon-refresh heading-icon"></i> <span class="align-middle d-inline-block pt-1">Creating Wireframes</span></h1>
                    <div class="float-md-right">
                        <button type="button" class="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACTIONS</button>
                        <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                    </div>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">DETAILS</a></li>
                    <li class="nav-item"><a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">CONTRIBUTIONS</a></li>
                </ul>
                <div class="tab-content mb-4">
                    <div class="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-4">
                                <div class="card mb-4">
                                    <div class="position-absolute card-top-buttons">
                                        <button class="btn btn-header-light icon-button"><i class="simple-icon-pencil"></i></button>
                                    </div>
                                    <div class="card-body">
                                        <p class="list-item-heading mb-4">Summary</p>
                                        <p class="text-muted text-small mb-2">Info</p>
                                        <p class="mb-3">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly. If we are able to properly define a wireframe for our project, then we can share it with your entire.
                                            <br>
                                            <br>Development team and we can benefit from their feedback and ideas and work towards refining our final product.</p>
                                        <p class="text-muted text-small mb-2">Date</p>
                                        <p class="mb-3">12.05.2018 - 18.05.2018</p>
                                        <p class="text-muted text-small mb-2">Asigned To</p>
                                        <div class="mb-3">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Sarah Kortney"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"> </a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Latarsha Gama"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                        </div>
                                        <p class="text-muted text-small mb-2">Labels</p>
                                        <div>
                                            <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span></a></p>
                                            <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body d-flex justify-content-between align-items-center">
                                        <h6 class="mb-0">Project Status</h6>
                                        <div role="progressbar" class="progress-bar-circle position-relative" data-color="#922c88" data-trailcolor="#d7d7d7" aria-valuemax="100" aria-valuenow="40" data-show-percent="true"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="card">
                                    <div class="position-absolute card-top-buttons">
                                        <button class="btn btn-header-light icon-button"><i class="simple-icon-refresh"></i></button>
                                    </div>
                                    <div class="card-body">
                                        <p class="list-item-heading mb-4">Process</p>
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Joisse Kaycee</p>
                                                    <p class="text-semi-muted mb-1">Of course you want a great mobile UX, but do you know what UX actually is?</p>
                                                    <p class="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Williemae Lagasse</p>
                                                    <p class="text-semi-muted mb-1">Now you’ve defined what you want to do and what it involves. You have a clear destination in mind.</p>
                                                    <p class="text-muted mb-0 text-small">04.04.2018 - 01:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-7.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Laree Munsch</p>
                                                    <p class="text-semi-muted mb-1">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly.</p>
                                                    <p class="text-muted mb-0 text-small">15.08.2018 - 14:12</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-6.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Latarsha Gama</p>
                                                    <p class="text-semi-muted mb-1">Without a wireframe, you’ll end up lost and with digital writer’s block. This is how you’ll figure out what works and what doesn’t early on in the process.</p>
                                                    <p class="text-muted mb-0 text-small">18.09.2018 - 02:50</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-6.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Latarsha Gama</p>
                                                    <p class="text-semi-muted mb-1">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly.Development team and we can benefit from their feedback and ideas and work towards refining our final product.</p>
                                                    <p class="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row">
                                            <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                            <div class="pl-3">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-2">Joisse Kaycee</p>
                                                    <p class="text-semi-muted mb-1">No more waiting, no more anticipation, no more overdone metaphors about maps or journeys. Now it’s time to wire that frame!</p>
                                                    <p class="text-muted mb-0 text-small">22.04.2018 - 10:03</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-4">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <p class="list-item-heading mb-4">Overview</p>
                                        <div class="mb-4">
                                            <p class="mb-2">Pull Requests <span class="float-right text-muted">12/18</span></p>
                                            <div class="progress mb-3">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div class="progress-bar bg-theme-2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <table class="table table-sm table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td class="p-0 pb-1 w-10"><span class="log-indicator border-theme-1 align-middle"></span></td>
                                                        <td class="p-0 pb-1"><span class="font-weight-medium text-muted text-small">3 Merged Requests</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="p-0 pb-1 w-10"><span class="log-indicator border-theme-2 align-middle"></span></td>
                                                        <td class="p-0 pb-1"><span class="font-weight-medium text-muted text-small">2 Proposed Requests</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <p class="mb-2">Issues <span class="float-right text-muted">24/32</span></p>
                                            <div class="progress mb-3">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                <div class="progress-bar bg-theme-2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <table class="table table-sm table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td class="p-0 pb-1 w-10"><span class="log-indicator border-theme-1 align-middle"></span></td>
                                                        <td class="p-0 pb-1"><span class="font-weight-medium text-muted text-small">24 Closed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="p-0 pb-1 w-10"><span class="log-indicator border-theme-2 align-middle"></span></td>
                                                        <td class="p-0 pb-1"><span class="font-weight-medium text-muted text-small">6 Active</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="mb-4">Frequency</h6>
                                        <div class="dashboard-donut-chart chart">
                                            <canvas id="frequencyChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex flex-row mb-2 mb-4">
                                            <a class="d-flex" href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"></a>
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                                    <div class="min-width-zero">
                                                        <a href="#">
                                                            <p class="mb-0 truncate">Sarah Kortney</p>
                                                        </a>
                                                        <p class="text-muted mb-0 text-small">315 Commits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-line-chart">
                                            <canvas id="contributionChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="d-flex flex-row mb-2 mb-4">
                                            <a class="d-flex" href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"></a>
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                                    <div class="min-width-zero">
                                                        <a href="#">
                                                            <p class="mb-0 truncate">Latarsha Gama</p>
                                                        </a>
                                                        <p class="text-muted mb-0 text-small">482 Commits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-line-chart">
                                            <canvas id="contributionChart2"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row mb-2 mb-4">
                                            <a class="d-flex" href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"></a>
                                            <div class="d-flex flex-grow-1 min-width-zero">
                                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                                    <div class="min-width-zero">
                                                        <a href="#">
                                                            <p class="mb-0 truncate">Williemae Lagasse</p>
                                                        </a>
                                                        <p class="text-muted mb-0 text-small">102 Commits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-line-chart">
                                            <canvas id="contributionChart3"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="app-menu">
        <div class="p-4 h-100">
            <div class="scroll">
                <p class="text-muted text-small">Status</p>
                <ul class="list-unstyled mb-5">
                    <li class="active"><a href="#"><i class="simple-icon-refresh"></i> Pending Tasks <span class="float-right">12</span></a></li>
                    <li><a href="#"><i class="simple-icon-check"></i> Completed Tasks <span class="float-right">24</span></a></li>
                </ul>
                <p class="text-muted text-small">Categories</p>
                <ul class="list-unstyled mb-5">
                    <li>
                        <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="category1">
                            <label class="custom-control-label" for="category1">Flexbox</label>
                        </div>
                    </li>
                    <li>
                        <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="category2">
                            <label class="custom-control-label" for="category2">Sass</label>
                        </div>
                    </li>
                    <li>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="category3">
                            <label class="custom-control-label" for="category3">React</label>
                        </div>
                    </li>
                </ul>
                <p class="text-muted text-small">Labels</p>
                <div>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-primary mb-1">NEW FRAMEWORK</span></a></p>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span></a></p>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span></a></p>
                </div>
            </div>
        </div><a class="app-menu-button d-inline-block d-xl-none" href="#"><i class="simple-icon-options"></i></a></div>
</main>
@endsection
@push('scripts')

@endpush

