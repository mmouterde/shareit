angular.module("app").directive("glue", function(){
  return {
    restrict: "E",
    replace:true,
    template:'<div flex="20" shrink="20" class="glue"></div>'
  };
});
