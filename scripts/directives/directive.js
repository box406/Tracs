app.directive('addTrac', function ($parse) {
  return {
    restrict: 'A',
    require: ['?ngModel'],
    replace: true,
    templateUlr: 'tracTemplate.html',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.ngModel, function (newVal) {
        var getter = $parse(attrs.ngModel);
        var model = getter(scope);

        element.html(model);
      });
    }
  };
});