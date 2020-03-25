<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('shipper_id');
            $table->timestamp('shipment_date');
            $table->timestamp('delivery_date');
            $table->string('status');
            $table->boolean('insured');
            $table->string('tracking_number');
            $table->string('delivery_address');
            $table->unsignedBigInteger('assetable_id');
            $table->string('assetable_type');
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
        Schema::dropIfExists('shipments');
    }
}
