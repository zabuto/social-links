# Zabuto Social Links

This is a project created with [Svelte](https://svelte.dev).

*Note that you will need to have [Node.js](https://nodejs.org) installed for development. Svelte compiles the code to tiny, framework-less vanilla JS for use in production.*

## Get started

Install the dependencies...

```bash
cd /path/to/project-directory
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000) or the mentioned port if 5000 is already in use. You should see the app running. 

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Configuration

The variables for this project are located in the ``src/main.js`` file. Edit as needed.
These configuration settings also contain the path to the JSON data for the links.

``` javascript
props: {
    profile_handle: '@myhandle',
    profile_url: 'https://www.instagram.com/myhandle/',
    social_url: './data/links.json',
}
```

You can place the profile picture and icons for use in the links in the ``public/images`` directory.

The links themselves need to defined in the following structure. `title ` and `url` are required. If you use an `icon` you can specifiy the `position` using value `left` or `right`. 

```json
[
    {
        "title" : "Example One",
        "url" : "https://example-one.com/",
        "icon": "icon-star.png",
        "position": "right"
    },
    {
        "title" : "Example Two",
        "url" : "https://example-two.com/mysite/information",
        "icon" : null,
        "position" : null
    }
]
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
