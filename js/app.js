app=angular.module("memoficha",[]);
app.controller("mainController",function($http,$scope){
  $scope.articulo={};
  function actualizar()
  {
    $http.get(laUrl).success(
      function(data){
        $scope.articulo=data;
      }
    );
  }
  laUrl="http://127.0.0.1:8000/memoficha/contenido/index.json";
  actualizar();
  $scope.siguiente=function(){
    laUrl="http://127.0.0.1:8000/memoficha/contenido/index1.json"
    actualizar();
  }


});
