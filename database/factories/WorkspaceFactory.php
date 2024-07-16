<?php

namespace Inovector\Mixpost\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Inovector\Mixpost\Models\Workspace;

class WorkspaceFactory extends Factory
{
    protected $model = Workspace::class;

    public function definition()
    {
        return [
            'uuid' => $this->faker->uuid(),
            'name' => $this->faker->domainName(),
            'hex_color' => Str::after($this->faker->hexColor(), '#')
        ];
    }
}