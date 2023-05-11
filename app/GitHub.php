<?php

namespace App;

use App\Exceptions\NoGitHubToken;
use App\GitHub\Repo;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;

class GitHub
{
    const VERSION = '2022-11-28';

    public function __construct(protected ?string $token = null, User $user = null)
    {
        $this->token ??= $user->data['github']['access_token'] ?? null;
    }

    /**
     * @return Collection<Repo>
     */
    public function getRepositories(): Collection
    {
        return collect($this->get('/user/repos'))
            ->map(fn (array $repo) => new Repo(['raw' => $repo]));
    }

    protected function get(string $url)
    {
        if (! $this->token) {
            throw new NoGitHubToken(redirect('_github?'.http_build_query([
                'to' => Crypt::encrypt(url()->full()),
            ])));
        }

        $response = Http::acceptJson()
            ->contentType('application/json')
            ->withHeaders([
                'Authorization' => "Bearer {$this->token}",
                'X-GitHub-Api-Version' => static::VERSION,
            ])
            ->get("https://api.github.com{$url}");

        $response->throw();

        return $response->json();
    }
}
