<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
 * @property-read int|null $children_count
 * @property-read NotionPage|null $parent
 * @property-read \App\Models\NotionWorkspace $workspace
 * @property string|null $parent_uuid
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereParentUuid($value)
 * @property-read NotionPage|null $parentByUuid
 * @property string $title
 * @method static \Illuminate\Database\Eloquent\Builder|NotionPage whereTitle($value)
 */
class NotionPage extends Model
{
    use HasFactory, SoftDeletes;

    public function workspace() {
        return $this->belongsTo(NotionWorkspace::class);
    }

    public function children() {
        return $this->hasMany(NotionPage::class, 'parent_id');
    }

    public function parent() {
        return $this->belongsTo(NotionPage::class, 'parent_id');
    }

    public function parentByUuid() {
        return $this->belongsTo(NotionPage::class, 'parent_uuid', 'uuid');
    }
}
