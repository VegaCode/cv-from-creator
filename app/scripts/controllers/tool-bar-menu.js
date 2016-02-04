'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
.controller('toolBarMenu', function($mdDialog){
  var originatorEv;
     this.openMenu = function($mdOpenMenu, ev){
       originatorEv = ev;
       $mdOpenMenu(ev);
     };
     this.notificationsEnabled = true;
     this.toggleNotifications = function() {
       this.notificationsEnabled = !this.notificationsEnabled;
     };
     this.redial = function() {
       $mdDialog.show(
         $mdDialog.alert()
           .targetEvent(originatorEv)
           .clickOutsideToClose(true)
           .parent('body')
           .title('Suddenly, a redial')
           .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
           .ok('That was easy')
       );
       originatorEv = null;
     };
     this.checkVoicemail = function() {
       // This never happens.
     };
  });

  // TEMPLATE DROP DOWN
  // <div class="md-menu-demo" ng-controller="toolBarMenu as ctrl" ng-cloak>
  //   <div class="menu-demo-container" layout-align="center center" layout="column">
  //     <h2 class="md-title">Simple dropdown menu</h2>
  //     <p>Applying the <code>md-menu-origin</code> and <code>md-menu-align-target</code> attributes ensure that the menu elements align.
  //     Note: If you select the Redial menu option, then a modal dialog will zoom out of the phone icon button.</p>
  //     <md-menu>
  //       <md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="ctrl.openMenu($mdOpenMenu, $event)">
  //         <md-icon md-menu-origin md-svg-icon="call:phone"></md-icon>
  //       </md-button>
  //       <md-menu-content width="4">
  //         <md-menu-item>
  //           <md-button ng-click="ctrl.redial($event)">
  //             <md-icon md-svg-icon="call:dialpad" md-menu-align-target></md-icon>
  //             Redial
  //           </md-button>
  //         </md-menu-item>
  //         <md-menu-item>
  //           <md-button disabled="disabled" ng-click="ctrl.checkVoicemail()">
  //             <md-icon md-svg-icon="call:voicemail"></md-icon>
  //             Check voicemail
  //           </md-button>
  //         </md-menu-item>
  //         <md-menu-divider></md-menu-divider>
  //         <md-menu-item>
  //           <md-button ng-click="ctrl.toggleNotifications()">
  //             <md-icon md-svg-icon="social:notifications-{{ctrl.notificationsEnabled ? 'off' : 'on'}}"></md-icon>
  //             {{ctrl.notificationsEnabled ? 'Disable' : 'Enable' }} notifications
  //           </md-button>
  //         </md-menu-item>
  //       </md-menu-content>
  //     </md-menu>
  //   </div>
  // </div>
