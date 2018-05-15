angular.module('apiduco')
    .controller('homeCtrl', function($state){
    
    var vm = this;
    console.log("ctrl ...");
    
    vm.toManagers = function(){
        $state.go('managers',{},{reload:true});
    }
});