<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Auth;

trait MediaProcessorTrait
{
    public function processAudio($audio){
        $audioname = Auth::id().rand().'.webm';
        file_put_contents('storage/asset/'.$audioname, file_get_contents($audio));
        return $audioname;
    }
    public function processVideo($video){
        $videoname = Auth::id().rand().'.webm';
        file_put_contents('storage/asset/'.$videoname, file_get_contents($video));
        return $videoname;
    }
    public function processImage($image){
        $imagename = Auth::id().rand().'.jpg';
        file_put_contents('storage/asset/'.$imagename, file_get_contents($image));
        return $imagename;
    }
    // public function processFile($file){
    //     //$fileType = $request->file('file')->getClientOriginalExtension();
    //     $fileName = $file->file('file')->getClientOriginalName();
    //     return ('something');
    // }

}

