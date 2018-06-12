angular.module('app').controller('validaFormulario', function ($scope){
  $scope.model = {
    user:null,
    senha:null
  };

  $scope.onSubmit = function()
  {
    alert('Teste');
  }

});
