<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEscrowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('escrows', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('template_id');
            $table->unsignedBigInteger('seller');
            $table->unsignedBigInteger('buyer');
            $table->unsignedBigInteger('currency');
            $table->float('amount')->default(0);
            $table->unsignedBigInteger('shipment_id')->nullable();
            $table->string('charge'); // 50.50, buyer 100, seller 100
            $table->string('status')->default('waiting'); // rejected, waiting, paid, shipped, received, refunded, completed
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
        Schema::dropIfExists('escrows');
    }
}
