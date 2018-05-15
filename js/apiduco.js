/**
 * Nicolás Eduardo Aldana
 * Modulo principal de la aplicacion
 */

var apiducoApp = angular.module('apiduco',['ui.router','ngResource']);
//Constantes de la aplicación
apiducoApp.constant('CONFIG', {
    //endpoint: 'http://127.0.0.1:3000/',
    endpoint: 'http://9.86.159.217:3000/',
    templates: '../templates/'
});
//Configuración de la aplicacion
//rutas basadas en estados
apiducoApp.config(['$stateProvider', '$urlRouterProvider', 'CONFIG', function($stateProvider, $urlRouterProvider, CONFIG){
	$stateProvider
    .state('home', {
        url:'/home',
        templateUrl: CONFIG.templates + 'home.html',
        controller: 'homeCtrl as home',
      })
    .state('managers', {
        url:'/managers',
        templateUrl: CONFIG.templates + 'managers/managers.html',
        controller: 'managersCtrl as managers',
      });
    $urlRouterProvider.otherwise('/home');
}]);