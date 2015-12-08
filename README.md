# accounts-ui-angular
AngularJS wrapper for
[ian:accounts-ui-bootstrap-3](https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3)
package. You can get full instructions about how to use the package
there.

# How to install
1. Make sure you have the `angular` package installed.

2. Add the package:
`meteor add carlosbaraza:accounts-ui-bootstrap-3-angular`

3. Add a dependency on your AngularJS module. For example:
```javascript
angular.module('myApp', ['angular-meteor', 'accounts.ui']);
```

# How to use
Use it in your app, for example:
```html
<login-buttons></login-buttons>
```

A full example might be:
```html
<div class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">Project name</a>
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </div>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Link</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <login-buttons></login-buttons>
    </ul>
  </div>
</div>
```
