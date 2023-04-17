<?php

namespace App\Enums\Notion;

enum ObjectType: string
{
    case Page = 'page';
    case Database = 'database';
    case Workspace = 'workspace';

    public function parent(): string {
        return match($this) {
            ObjectType::Workspace => $this->value,
            default => "{$this->value}_id",
        };
    }
}
