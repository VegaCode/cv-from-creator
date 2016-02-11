'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.directive:biFormCreator
 * @description
 * # Directives
 * Directives of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .directive('onblurSave', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, element, attrs ) {
          var ObjectModel = function(fieldid, columnname, rowid, Answer, CreatedBy) {
                this.fieldid = fieldid;
                this.columnname = columnname;
                this.rowid = rowid;
                this.Answer = Answer;
                this.CreatedBy = CreatedBy;
            };
            element.bind('blur', function() {
                  if ($scope.datasrc.FieldType === 'Text'){
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'Textarea') {
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'Radio') {
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'Check') {
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'Dropdown') {
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'Typeahead') {
                    $scope.Answer = new ObjectModel($scope.datasrc.ProjectFieldId, '', '', $scope.datasrc.Answer, 'Admin');
                  }
                    // factoryToSendInformation.addAnswerObject(answerModel);
                    console.log($scope.Answer);

            });
        }
      };
  }])
  .directive('biAutoExpand', function() {
        return {
            restrict: 'A',
            link: function($scope, elem) {
                elem.bind('keyup', function($event) {
                    var element = $event.target;

                    if($event.keyCode === 13){
                                    var t = $event.currentTarget;
                                    var text =  t.value;
                                    var ls = text.split('\n');
                                    var i = ls.length - 1;
                                    ls[i] = '• ' + ls[i];
                                    t.value=   ls.join('\n');
                    }

                    $(element).height(0);
                    var height = $(element)[0].scrollHeight;

                    // 8 is for the padding
                    if (height < 20) {
                        height = 28;
                    }
                    $(element).height(height-8);
                });

                // Expand the textarea as soon as it is added to the DOM
                setTimeout( function() {
                    var element = elem;

                    $(element).height(0);
                    var height = $(element)[0].scrollHeight;

                    // 8 is for the padding
                    if (height < 20) {
                        height = 28;
                    }
                    $(element).height(height+2);
                }, 0);
            }
        };
    })
  .directive('biFormCreator', function($compile) {
    return {
      restrict: "EA",
      scope: {
        datasrc: '='
      },
      link: function(scope, element) {
        element.empty().append($compile(scope.datasrc.Directive)(scope));
      }
    };
  })
  .directive('toolBarMenu', function($compile) {
    return {
      restrict: "EA",
      templateUrl: 'views/components/tool-bar-menu.html'
    };
  })
  .directive('biVersionControl', function($compile) {
    return {
      restrict: "EA",
      scope: {
        src: '='
      },
      link: function(scope, element) {
        var template = '';
        var templateFinal = '';

        var createVersionControl = function(versionControlArrray) {
          var counter = 0;
          versionControlArrray.forEach(function(obj) {
            template +=
              '<md-card>' +
              '<div  class="flex-one">' +
              '<h5>' + obj.oldValue + '</h5>' +
              '</div>' +
              '<md-card-actions layout="row" layout-align="end center" class="layout-align-end-center layout-row">' +
              '<md-button class="md-raised md-primary" aria-label="' +
              obj.adminUser + '"><span class="ng-scope">' +
              obj.adminUser + '</span></md-button>' +
              '<md-button class="md-raised md-default" aria-label="' +
              obj.datetime + '"><span class="ng-scope">' +
              obj.datetime + '</span></md-button>' +
              '</md-card-actions>' +
              '</md-card>';
          });

          templateFinal += '<div>' + template + '</div>';
        };
        createVersionControl(JSON.parse(scope.src.VersionControl));
        element.append($compile(templateFinal)(scope));
      }
    };
  })
  .directive('biText', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-text.html',
      controller: function($scope) {
        var self = this;
        self.answer = $scope.datasrc.Answer;
        //self.componentDisplay = $scope.datasrc.access;
      }
    };
  })
  .directive('biDropdown', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-dropdown.html',
      controller: function($scope) {
        var self = this;

        $scope.optionSelected = function(answer){
          $scope.datasrc.Answer = answer;
        };
      }
    };
  })
  .directive('biTextArea', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-text-area.html',
      controller: function($scope) {
        var self = this;
      }
    };
  })
  .directive('biLabel', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-label.html',
      controller: function() {
        var self = this;
      }
    };
  })
  .directive('biTitle', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-title.html',
      controller: function() {
        var self = this;
      }
    };
  })
  .directive('biSubTitle', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-sub-title.html',
      controller: function() {
        var self = this;
      }
    };
  })
  .directive('biTypeahead', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-typeahead.html',
      controller: function($scope) {
        var self = this;
        $scope.selected = '';

        self.logKey = function(event) {
          if (event.keyCode === 13) {
            self.onSelect($scope.selected);
          }
        };

        self.onSelect = function (selection) {
           $scope.datasrc.Answer = selection;
        };
        // $scope.optionSelected = function(answer){
        //   $scope.datasrc.Answer = answer;
        // };
      },
      controllerAs: 'typeAheadCtrl'
    };
  })
  .directive('biImage', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-image.html',
      controller: function() {
        var self = this;
      }
    };
  })
  .directive('biCheckList', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-check-list.html',
      controller: function($scope) {
        var self = this;

        self.selectedAnswer = [];
        self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
        self.optionsArrayToDisplay = self.arraysOfOptions;
        self.labelSize = (self.arraysOfOptions.reduce(function (a, b) { return a.length > b.length ? a : b; }).length * 9) + 'px';

        self.selectedCheckBoxValue = function(selectedOption) {
          var idx = self.selectedAnswer.indexOf(selectedOption);
          if (idx < 0) {
            self.selectedAnswer.push(selectedOption);
            $scope.datasrc.Answer = self.selectedAnswer;
          } else {
            if (idx > -1) {
              self.selectedAnswer.splice(idx, 1);
              console.log(self.selectedAnswer);
            }
          }
        };
      },
      controllerAs: 'CheckListCtrl'
    };
  })
  .directive('biRadioList', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-radio-list.html',
      controller: function($scope) {
        var self = this;
        self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
        self.optionsArrayToDisplay = self.arraysOfOptions;
        self.labelSize = (self.arraysOfOptions.reduce(function (a, b) { return a.length > b.length ? a : b; }).length * 9) + 'px';
      },
      controllerAs: 'RadioListCtrl'
    };
  })
  .directive('pinkMe', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.bind('click', function() {
          var color = element.css('color');
          if (color === 'rgb(255, 255, 255)' || color === '#ffffff' ||
            color === 'hsl(0, 100%, 100%)' || color === 'rgb(255, 255, 255)' ||
            color === 'hsl(360, 100%, 100%)' || color === '#ffffff') { //test if color is black or white

            element.css('color', '#F65489');
          } else {
            element.css('color', '#ffffff');
          }
        });
      }
    };
  })
  .directive('biGrid', function() {
    return {
      restrict: "EA",
      templateUrl: 'views/components/bi-grid.html',
      controller: function($scope) {
        $scope.mobileDataSrc = [{
          "id": [
            1,
            2,
            3,
            4
          ],
          "appropriately": [
            "Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",
            "Not Applicable",
            "",
            ""
          ],
          "dosage": [
            "Dosage Form/Route of Administration",
            "None",
            "",
            ""
          ],
          "dosing": [
            "Interval",
            "None",
            "",
            ""
          ],
          "number": [
            "0",
            "1",
            "2",
            "3"
          ],
          "product": [
            "Product Name/Medical Term/Prescription Abbreviation",
            "None",
            "",
            ""
          ],
          "testNames": [
            "Instructions ->",
            "ANSLARA",
            "ANZYLARA",
            "LARTRANA"
          ],
          "projectId": [
            "10023",
            "10023",
            "10023",
            "10023"
          ],
          "projectInputControlId": [
            "10643",
            "10643",
            "10643",
            "10643"
          ],
          "rowId": [
            "1437499370066",
            "1437499432516",
            "1437499437886",
            "1440188008566"
          ]
        }, {
          "header": [
            "id",
            "appropriately",
            "dosage",
            "dosing",
            "number",
            "product",
            "testNames",
            "projectId",
            "projectInputControlId",
            "rowId"
          ]
        }];

        $scope.gridOptions = {
          headerTemplate: '<div class="ui-grid-top-panel" style="padding: 5px; height: 30px;">'+
          '  <a class="glyphicon glyphicon-plus" style="width: 4%;"></a>'+
          '  <a class="glyphicon glyphicon-pencil" style="width: 4%;"></a>'+
          '  <a class="glyphicon glyphicon-remove" style="width: 4%;"></a>'+
          '  <a class="glyphicon glyphicon-trash" style="width: 4%;"></a>'+
          '  <a class="glyphicon glyphicon-floppy-save" style="width: 4%;"></a>'+
          '  <a class="glyphicon glyphicon-open" style="width: 4%;"></a></div>'+
          '  <div class="ui-grid-top-panel ui-grid-header-cell sortable"'+
          '  ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"'+
          '  ui-grid-header-cell="" col="col">'+
          '  </div>',
          data: [{
            id: '1',
            appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
            dosage: 'Dosage Form/Route of Administration',
            dosing: 'Interval',
            number: '0',
            product: 'Product Name/Medical Term/Prescription Abbreviation',
            testNames: 'Instructions ->',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499370066'
          }, {
            id: '2',
            appropriately: 'Not Applicable',
            dosage: 'None',
            dosing: 'None',
            number: '1',
            product: 'None',
            testNames: 'ANSLARA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499432516'
          }, {
            id: '3',
            appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
            dosage: 'Dosage Form/Route of Administration',
            dosing: 'Interval',
            number: '0',
            product: 'Product Name/Medical Term/Prescription Abbreviation',
            testNames: 'Instructions ->',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499370066'
          }, {
            id: '4',
            appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
            dosage: 'Dosage Form/Route of Administration',
            dosing: 'Interval',
            number: '0',
            product: 'Product Name/Medical Term/Prescription Abbreviation',
            testNames: 'Instructions ->',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499370066'
          }, {
            id: '5',
            appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
            dosage: 'Dosage Form/Route of Administration',
            dosing: 'Interval',
            number: '0',
            product: 'Product Name/Medical Term/Prescription Abbreviation',
            testNames: 'Instructions ->',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499370066'
          }, {
            id: '6',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '2',
            product: '',
            testNames: 'ANZYLARA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1437499437886'
          }, {
            id: '7',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, {
            id: '8',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, {
            id: '9',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, {
            id: '10',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, {
            id: '11',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, {
            id: '12',
            appropriately: '',
            dosage: '',
            dosing: '',
            number: '3',
            product: '',
            testNames: 'LARTRANA',
            projectId: '10023',
            projectInputControlId: '10643',
            rowId: '1440188008566'
          }, ]
        };
      }
    };
  });
