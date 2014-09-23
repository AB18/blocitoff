## Nitrous Blocitoff

Hey Ashrita,

A couple of things to know when working with this custom version of the blocitoff app.

#### Automatic CSS compiling

Everytime you save, you Sass will be compiled into CSS in the `public/styles` folder in a single file called `app.css`. I've included the `<link>` tag for this in the header so you won't have to do anything to get the CSS included in your app, assuming you follow these directions.

If you want to create new styles outside of `app.scss`, you will need to include them in `app.scss` with an `@import` statement. For example, if you create a `home.scss` in the `styles` directory, then make sure to include this in `app.scss`

```scss
@import 'home.scss';
```

Grunt looks for all `@import` statements in `app.scss` _only_ so that it knows what styles to build.

#### Linking to other files

When linking templates, use the normal file path. This will be applicable in places like your `ui.router` state declarations. As an example, if you want to link to your `home.html` template in your `$stateProvider` call, do something like this:

```js
$stateProvider.state('home', {
  url: '/',
  templateUrl: 'app/templates/home.html'
})
```

For JavaScript, you're going to need to link the files directly using a `script` tag in the `head` or at the bottom of the page. For example, if you put all of your JavaScript in `app.js` all you need is:

```html
  <script src="app/app.js">
</head>
```

If you create more files, you'll need to link them individually as well.

#### Running the server

To run the server and see your content, simply run:

```bash
grunt
```

And navigate to port 3000 in the Nitrous preview.

#### Index.html

The base HTML file is index.html, and it has a `ui-view` in it. Feel free to change this as you please. It's there to get your started.

> Don't move or delete it though, because it's the base view of the app. Any additional markup should be done in `app/templates`.