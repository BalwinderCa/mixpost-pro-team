<?php

namespace Inovector\Mixpost\Support;

use Illuminate\Http\File as HttpFile;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;

class File
{
    public static function fromBase64(string $base64File): UploadedFile
    {
        // Get file data base64 string
        $fileData = base64_decode(Arr::last(explode(',', $base64File)));

        // Create temporary file
        $tempFilePath = tempnam(sys_get_temp_dir(), 'mixpost_temp');
        if (!$tempFilePath) {
            throw new \Exception('Failed to create temporary file.');
        }

        // Save file data in file
        if (file_put_contents($tempFilePath, $fileData) === false) {
            throw new \Exception('Failed to write data to temporary file.');
        }

        $tempFileObject = new HttpFile($tempFilePath);

        $file = new UploadedFile(
            $tempFileObject->getPathname(),
            $tempFileObject->getFilename(),
            $tempFileObject->getMimeType(),
            0,
            true // Mark it as test, since the file isn't from real HTTP POST.
        );

        // Close this file after response is sent.
        // Closing the file will cause to remove it from temp directory!
        app()->terminating(function () use ($tempFilePath) {
            unlink($tempFilePath);
        });

        // Return UploadedFile object
        return $file;
    }
}
