<?php

namespace App\Models;

use App\NotionClient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\NotionWorkspace
 *
 * @property string $uuid
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $user_id
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace query()
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereUuid($value)
 * @mixin \Eloquent
 * @property int $id
 * @property mixed $data
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereId($value)
 * @property string $title
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereTitle($value)
 * @property-read \App\Models\User|null $user
 * @property string $bearer_token
 * @method static \Illuminate\Database\Eloquent\Builder|NotionWorkspace whereBearerToken($value)
 */
class NotionWorkspace extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function client(): NotionClient {
        return new NotionClient($this->bearer_token);
    }
}
