# Docs

A SaaS that renders a mega website from lots of Git repositories. Built with Laravel, Livewire and Alpine.js.

## Prerequisites

1. Install [PHP, Composer, Docker](https://laravel.com/docs/10.x).
2. Create an [alias for `sail` command](https://laravel.com/docs/10.x/sail#configuring-a-shell-alias)

## Installation

1. Clone the project from GitHub:

    ```shell
    cd ~/projects
    git clone git@github.com:osmianski/docs.git
    cd docs
    npm install
    ```

2. In a separate terminal window, start the Docker containers for the project:

    ```shell
    cd ~/projects/docs
    sail up
    ```

3. In a separate terminal window, run Vite asset build script:

    ```shell
    cd ~/projects/docs
    npm run dev
    ```

4. Open the local copy of the website in the browser: <http://127.0.0.1:8000/>.

5. Copy Git hooks:

    ```shell
    cd ~/projects/docs
    chmod a+x git-hooks/*
    cp git-hooks/* .git/hooks/
    ```  

## Previous effort

[`v0.1`](https://github.com/osmianski/docs/tree/v0.1) was a SaaS that turns Notion workspaces and GitHub repositories into beautiful documentation websites. Built with Laravel, Vue.js and Inertia.js. It was abandoned in 2023. It has some good reusable bits:

* A GitHub action that auto-updates the dependencies.
* A Notion client that can be used to fetch data from Notion. 
