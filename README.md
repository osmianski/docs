A SaaS website for publishing product documentation from Notion, GitHub, or other provider.

* [Developing Locally](#developing-locally)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Run The Project](#run-the-project)

## Developing Locally

### Prerequisites

1. Install [PHP, Composer, Docker](https://laravel.com/docs/9.x).
2. Create an [alias for `sail` command](https://laravel.com/docs/9.x/sail#configuring-a-shell-alias)

### Installation

Clone the project from GitHub:

```shell
cd ~/projects
git clone git@github.com:osmianski/docs.git
cd docs
npm install
```

### Run The Project

Start the Docker containers for the project:

```shell
cd ~/projects/docs
sail up
```

In a separate terminal window, run Vite asset build script:

```shell
cd ~/projects/docs
npm run dev
```

Alternatively, run Vite in production mode with SSR support:

```shell
cd ~/projects/docs
npm run build
sail node bootstrap/ssr/ssr.mjs
```

Open the local copy of the website in the browser: <http://127.0.0.1:8000/>.
 
