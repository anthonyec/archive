# [Archive](https://anthonycossins.com/archive)

An archive of projects that I've worked on. This does not contain everything and this is **not** a portfolio. It's a place of preservation to say "hey, these things existed".

It is built to work as a separate website from [my main one](https://anthonycossins.com). This is so the archive can be a bit more resilient, hosted independently which allows my main site to change without affecting this.

## Setup

The site uses my own static site generator called [static_build](https://github.com/anthonyec/static_build). Another thing to hopefully improve resiliency (or cause headaches).

```sh
npm ci
```

Run the dev server.

```sh
NODE_ENV=dev npm run start
```

The `NODE_ENV=dev` is required to ensure it does not use the `baseUrl` and `assetsBaseUrl`.

Use a separate HTTP server to view the site locally. I like using `http-server`.

```sh
npx http-server -c-1 ./dist -p 8081
```

## Hosting

It is available at [anthonycossins.com/archive](https://anthonycossins.com/archive) using some Netfliy `_redirect` magic and [hacked together](src/config.js) [URL stuff](/src/_layouts/project.html) found the HTML templates.

