<?php

namespace App\Enums;

/**
 * Specifies what happens if Notion rate-limits us. For more information, see
 * <https://developers.notion.com/reference/request-limits>.
 */
enum OnNotionRateLimit
{
    /**
     * Wait until when Notion is ready to handle our requests,
     * and then continue in the same process. This is the default mode of the
     * `php artisan notion:sync` command.
     */
    case Wait;

    /**
     * Stop immediately, and let the user continuing manually later. This mode
     * is activated by the `php artisan notion:sync --no-wait` switch.
     */
    case Stop;

    /**
     * Put a job into queue that should activate when Notion is ready
     * to handle our requests, and stop. This mode is used when syncing
     * is executed by a job queue.
     */
    case Queue;
}
