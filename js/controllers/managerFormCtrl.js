angular.module('apiduco')
    .controller('managerFormCtrl', ['$stateParams', 'managerById', 'managers','$state', function ($stateParams, managerById, managers, $state) {

        var vm = this;

        if ($stateParams.manager == null || $stateParams.manager === null) {
            vm.butnText = 'Crear';
            vm.formTitle = 'Registrar laboratorista';
            vm.man = {
                firstName: '',
                lastName: '',
                identification: ''
            }
        } else {
            vm.butnText = 'Actualizar';
            vm.formTitle = 'Modificar laboratorista';
            //console.log($stateParams.manager);
            vm.man = managerById.show({
                id: $stateParams.manager
            });
            console.log(vm.man);
        }
        gotEmptyFields = function () {
            return vm.man.firstName == null || vm.man.firstName == '' || vm.man.lastName == null || vm.man.lastName == '' || vm.man.identification == null || vm.man.identification == '';
        }
        vm.execute = function () {
            vm.error = gotEmptyFields();
            if (vm.error) {
                vm.textError = 'Todos los campos son obligatorios';
            } else {
                if (vm.butnText == 'Actualizar') {
                    //,vm.man.toJSON
                    managerById.update({id:$stateParams.manager},vm.man);
                } else {
                    managers.create(JSON.stringify(vm.man));
                }
                $state.go('managers', {},{reload:true});
            }
        }
}]);