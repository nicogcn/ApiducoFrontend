angular.module('apiduco')
    .controller('managersCtrl', ['managers', '$state', 'managerById', function(managers, $state, managerById){
    
    var vm = this;
    
    vm.managers = managers.query();
    vm.update = function(id){        
        $state.go('managerForm', {manager: id});
    }
    vm.delete = function(manager){
        vm.del = true;
        vm.idToDelete = manager.idManager;
        console.log(vm.idToDelete);
        vm.textDelete = manager.firstName + ' ' + manager.lastName;
    }
    
    vm.cancelDelete = function(){
        vm.del = false;
    }
    
    vm.confirmDelete = function(){
        console.log(vm.idToDelete);
        managerById.delete({id:vm.idToDelete});
    }
    
}]);