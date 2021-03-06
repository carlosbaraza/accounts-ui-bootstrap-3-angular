Package.describe({
  name: "carlosbaraza:accounts-ui-bootstrap-3-angular",
  summary: "AngularJS wrapper for ian:accounts-ui-bootstrap-3 package",
  version: "0.1.2",
  documentation: 'README.md',
  git: "https://github.com/carlosbaraza/accounts-ui-bootstrap-3-angular"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('spacebars-compiler');
  api.use('session');
  api.use('blaze-html-templates', 'client');

  // Add package with templates if installed
  if (typeof Package['accounts-ui-bootstrap-3-angular-templates'] !== "undefined")
    api.use('accounts-ui-bootstrap-3-angular-templates');

  api.addFiles([
    'accounts-ui-angular.js',
    'login-buttons-directive.js'
  ], 'client');

  api.imply('ian:accounts-ui-bootstrap-3@1.2.84');
});
