if (!angular) {
  throw 'AngularJS could not be found, please load the `angular` package in the root project!'
} else {
  angular.module('accounts.ui', []);
 
  var customizablePartials = [
    '_loginButtonsAdditionalLoggedInDropdownActions'
  ];

  customizablePartials.forEach(function (partialName) {
    var templateName = 'Template.' + partialName; 
    var templateContent = Session.get('accounts-ui.' + templateName);
    if (typeof templateContent !== "undefined") {
      var compiledTemplate = eval(SpacebarsCompiler.compile(templateContent));
      Template[partialName] = new Template(templateName, compiledTemplate);
    } 
  })
}
