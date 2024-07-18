<?php

namespace Inovector\Mixpost\Http\Base\Controllers\Workspace;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Inovector\Mixpost\Http\Base\Resources\MediaResource;
use Inovector\Mixpost\Models\Media;
use Inovector\Mixpost\Models\Globals;

class MediaFetchUploadsController extends Controller
{
    public function __invoke(): AnonymousResourceCollection
    {
        $records = Media::latest('created_at')->simplePaginate(30);

        return MediaResource::collection($records);
    }

    public function media(): AnonymousResourceCollection
    {
        $records = Globals::where('workspace_id', 5)->latest('created_at')->simplePaginate(30); //linked to hello@healthinomics.com account
        return MediaResource::collection($records);
    }
}
