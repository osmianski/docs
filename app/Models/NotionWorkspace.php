<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\NotionWorkspace
 *
 * @property string $uuid
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $user_id
 * @property mixed|null $bot
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace query()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereBot($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUuid($value)
 * @mixin \Eloquent
 * @property int $id
 * @property mixed $data
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereId($value)
 */
class NotionWorkspace extends Model
{
    use HasFactory;
}
