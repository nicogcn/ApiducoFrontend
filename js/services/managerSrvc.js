var managerSrvc = angular.module('apiduco');

managerSrvc.factory('managers', function($resource, CONFIG){
	return $resource(CONFIG.endpoint + 'manager', {}, {
		query:{method:'GET', params:{}, isArray: true},
        create:{method:'POST'}
	});
});
managerSrvc.factory('managerById', function($resource, CONFIG){
	return $resource(CONFIG.endpoint + 'manager/:id', {}, {
		show:{method:'GET', params:{id: '@id'}},
        update:{ method:'PUT', params:{id: '@id'}},
        delete:{ method:'DELETE', params:{id: '@id'}}
	});
});
