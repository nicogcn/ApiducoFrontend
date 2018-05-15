var managerSrvc = angular.module('apiduco');

managerSrvc.factory('managersAll', function($resource, CONFIG){
	return $resource(CONFIG.endpoint + 'manager', {}, {
		query:{ method:'GET', params:{}, isArray: true }
	});
});