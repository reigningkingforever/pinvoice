<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('mobile')->nullable();
            $table->string('password');
            $table->smallInteger('role_id')->default(2);
            $table->unsignedBigInteger('country_id');
            $table->boolean('business')->default(0);
            $table->string('website')->nullable();
            $table->string('address')->nullable();
            $table->string('place')->nullable();
            $table->string('about')->nullable();
            $table->date('dob')->nullable();
            $table->unsignedBigInteger('currency_id')->nullable();
            $table->unsignedBigInteger('language_id')->nullable();
            $table->boolean('face_auth')->default(0);
            $table->boolean('auto_accept_invitation')->default(0);
            $table->boolean('notify_email')->default(0);
            $table->boolean('notify_sms')->default(0);
            $table->integer('question1')->nullable();
            $table->string('answer1')->nullable();
            $table->integer('question2')->nullable();
            $table->string('answer2')->nullable();
            $table->integer('question3')->nullable();
            $table->string('answer3')->nullable();
            $table->string('access_code')->nullable();
            $table->string('photo')->nullable();
            $table->string('gender')->nullable();


            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
