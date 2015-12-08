angular
  .module('accounts.ui')
  .directive('loginButtons', loginButtons);
  
function loginButtons () {
  return {
    restrict: 'EA',
    scope: true,
    link: function (scope, element, attributes) {
      var template = Template['_loginButtons'];

      var renderOpts = [template, scope, element.parent()[0], element[0]],
          view = Blaze.renderWithData.apply(null, renderOpts);
      element.remove();

      scope.$on('$destroy', function() {
        Blaze.remove(view);
      });
    }
  };
}
