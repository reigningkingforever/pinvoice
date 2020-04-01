<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('front.welcome');
});

Auth::routes();

Route::get('setup','User\HomeController@setup')->name('user.setup');
Route::post('setup-complete','User\HomeController@setupcomplete')->name('user.setupcomplete');
Route::get('enterprise/profile','Auth\LoginController@enterpriseForm')->name('enterpriseForm');
Route::post('enterprise_login','Auth\LoginController@enterpriseLogin')->name('enterpriseLogin');
Route::get('suspicious/login','Auth\LoginController@securityForm')->name('securityForm');
Route::post('suspicious/pass','Auth\LoginController@securityPass')->name('securityPass');

Route::group(['namespace' => 'Admin','prefix' => 'admin'],function() {
    Route::get('dashboard','DashboardController@index')->name('admin.dashboard');

    Route::get('settings','SettingsController@index')->name('admin.settings');
    Route::get('security','SecurityController@index')->name('admin.security');
    Route::post('ipwhitelist','SecurityController@ipwhitelist')->name('admin.ipwhitelist');
    Route::post('ipblacklist','SecurityController@ipblacklist')->name('admin.ipblacklist');
    Route::post('userwhitelist','SecurityController@userwhitelist')->name('admin.userwhitelist');
    Route::post('userblacklist','SecurityController@userblacklist')->name('admin.userblacklist');
    Route::post('whotoban','SecurityController@whotoban');


    Route::get('templates','AssetController@templates')->name('admin.templates');
    Route::post('template/create','AssetController@saveTemplates')->name('admin.savetemplate');
    Route::get('invoice','AssetController@invoice')->name('admin.invoice');
    Route::get('escrow','AssetController@escrow')->name('admin.escrow');
    Route::get('disputes','AssetController@disputes')->name('admin.disputes');
    Route::get('disputes/details','AssetController@disputeDetails')->name('admin.disputesdetails');

    Route::get('support','TicketController@index')->name('admin.tickets');
    Route::get('support/ticket','TicketController@details')->name('admin.ticketdetails');
    Route::get('partners','PartnerController@index')->name('admin.partners');
});

Route::group(['namespace' => 'User','middleware'=>['auth','suspicion','enterprise']], function () {

    Route::get('dashboard','HomeController@index')->name('home');
    Route::get('profile','HomeController@profile')->name('profile');
    Route::post('profile/update','HomeController@updateprofile')->name('profile.update');
    Route::post('password/update','HomeController@updatepassword')->name('password.update');

    Route::post('enterprise/newprofile','HomeController@newEnterpriseProfile')->name('enterprise.profile.new');
    Route::post('enterprise/deleteprofile','HomeController@deleteEnterpriseProfile')->name('enterprise.profile.delete');
    Route::post('enterprise/updateprofile','HomeController@updateEnterpriseProfile')->name('enterprise.profile.update');

    Route::get('contact','ContactController@index')->name('contact');
    Route::post('searchcontact','ContactController@search');
    Route::post('sendrequest','ContactController@sendRequest');
    Route::post('acceptrequest','ContactController@acceptRequest');
    Route::post('rejectrequest','ContactController@rejectRequest');
    Route::get('contactresponse','ContactController@requestResponse'); //test link
    Route::post('removecontact','ContactController@remove');
    Route::post('blockcontact','ContactController@block');

    Route::get('invoice','InvoiceController@index')->name('invoice');
    Route::post('invoice/showconversation','InvoiceController@showconversation')->name('invoiceconversation');
    Route::get('escrow','EscrowController@index')->name('escrow');
    Route::get('payment','PaymentController@index')->name('payment');
    Route::post('chat','ChatController@index')->name('chat');


    Route::post('chat/sendMessage','ChatController@sendMessage')->name('chatsendmessage');
    Route::post('chat/getMessage','ChatController@getMessage')->name('chatgetmessages');
    Route::post('chat/sendFile','ChatController@sendFile')->name('chatsendfile');
    Route::post('chat/sendCaptured','ChatController@sendCaptured')->name('chatsendCaptured');
    Route::post('chat/sendAudio','ChatController@sendAudio')->name('chatsendAudio');
    Route::post('chat/sendVideo','ChatController@sendVideo')->name('chatsendVideo');

    Route::get('support','SupportController@index')->name('support');
    Route::post('support/new','SupportController@newSupport')->name('newsupport');
    Route::post('support/update','SupportController@updateSupport')->name('updatesupport');
    Route::get('support/{ticket}','SupportController@details')->name('supportdetails');
});
