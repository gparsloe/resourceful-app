angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.page2', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.tools', {
    url: '/tools',
    views: {
      'tab4': {
        templateUrl: 'templates/tools.html',
        controller: 'toolsCtrl'
      }
    }
  })

  .state('tabsController.comfort', {
    url: '/comfort',
    views: {
      'tab5': {
        templateUrl: 'templates/comfort.html',
        controller: 'comfortCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.potions', {
    url: '/potions',
    views: {
      'tab2': {
        templateUrl: 'templates/potions.html',
        controller: 'potionsCtrl'
      }
    }
  })

  .state('tabsController.breathing', {
    url: '/breathing',
    views: {
      'tab5': {
        templateUrl: 'templates/breathing.html',
        controller: 'breathingCtrl'
      }
    }
  })

  .state('mmm', {
    url: '/page7',
    templateUrl: 'templates/mmm.html',
    controller: 'mmmCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')


});