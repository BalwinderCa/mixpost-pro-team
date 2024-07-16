<?php

namespace Inovector\Mixpost\Http\Base\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HashtagGroupResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        return [
            'id' => $this->uuid,
            'name' => $this->name,
            'content' => $this->content,
        ];
    }
}
