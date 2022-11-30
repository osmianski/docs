<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\NotionPage
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $workspace_id
 * @property int $parent_id
 * @property string $uuid
 * @property mixed|null $data
 * @property mixed|null $children
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage query()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereChildren($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereWorkspaceId($value)
 * @mixin \Eloquent
 * @property string $type
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereType($value)
 */
class NotionPage extends Model
{
    use HasFactory;

}
