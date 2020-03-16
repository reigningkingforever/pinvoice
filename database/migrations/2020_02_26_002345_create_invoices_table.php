<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('template_id');
            $table->unsignedBigInteger('seller');
            $table->unsignedBigInteger('buyer');
            $table->string('format');
            $table->string('path')->nullable();
            $table->string('item')->nullable();
            $table->string('quantity')->nullable();
            $table->float('amount')->default(0);
            $table->string('currency');
            $table->string('status')->default('waiting'); //waiting, cancelled, accepted,
            $table->timestamp('expiry');
            $table->softDeletes();
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
        Schema::dropIfExists('invoices');
    }
}
