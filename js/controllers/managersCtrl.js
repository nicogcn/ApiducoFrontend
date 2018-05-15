angular.module('apiduco')
    .controller('managersCtrl', ['managersAll', function(managersAll){
    
    var vm = this;
    
    vm.managers = managersAll.query();
    vm.update = function(id){
        console.log(id);
    }
    vm.delete = function(id){
        console.log(id);
    }
}]);