<?php

namespace App\Enums;

enum SourcePlatform: string
{
    case GitHub = 'github';
    case Notion = 'notion';
}
