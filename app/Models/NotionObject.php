<?php

namespace App\Models;

use App\Enums\Notion\ObjectType;
use Illuminate\Database\Eloquent\Casts\Attribute;
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
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject query()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereChildren($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereWorkspaceId($value)
 * @mixin \Eloquent
 * @property string $type
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereType($value)
 * @property-read int|null $children_count
 * @property-read NotionObject|null $parent
 * @property-read \App\Models\NotionWorkspace $workspace
 * @property string|null $parent_uuid
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereParentUuid($value)
 * @property-read NotionObject|null $parentByUuid
 * @property string $title
 * @method static \Illuminate\Database\Eloquent\Builder|NotionObject whereTitle($value)
 */
class NotionObject extends Model
{
    use HasFactory, SoftDeletes;

    protected $casts = [
        'data' => 'object',
        'children' => 'object',
    ];

    protected function data(): Attribute
    {
        return Attribute::make(
            set: fn (\stdClass $value) => [
                'data' => json_encode($value),
                'type' => $value->object,
                'title' => match($value->object) {
                    ObjectType::Database->value =>
                        mb_substr($this->formatTitle($value), 0, 255),
                    ObjectType::Page->value =>
                        ($title = $this->getTitleProperty($value))
                            ? mb_substr($title, 0, 255)
                            : null,
                    default => null,
                },
            ],
        );
    }

    public function workspace() {
        return $this->belongsTo(NotionWorkspace::class);
    }

    public function children() {
        return $this->hasMany(NotionObject::class, 'parent_id');
    }

    public function parent() {
        return $this->belongsTo(NotionObject::class, 'parent_id');
    }

    public function parentByUuid() {
        return $this->belongsTo(NotionObject::class, 'parent_uuid', 'uuid');
    }

    protected function getTitleProperty(\stdClass $data): ?string
    {
        foreach ($data->properties as $property) {
            if ($property->type === 'title') {
                return $this->formatTitle($property);
            }
        }

        return null;
    }

    protected function formatTitle(\stdClass $property): string
    {
        return collect($property->title)->implode('plain_text', '');
    }
}
