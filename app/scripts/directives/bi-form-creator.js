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

          var mobileColumnName = '', mobileRowId = '', oldValue = '', newValue = '';
          $scope.str = '';
          $scope.answer = '';

          var ObjectModel = function(fieldid, columnname, rowid, Answer, CreatedBy) {
                this.fieldid = fieldid;
                this.columnname = columnname;
                this.rowid = rowid;
                this.Answer = Answer;
                this.CreatedBy = CreatedBy;
            };
            element.bind('blur', function() {
              // the following variables are for the accordion.
              // DO NOT change the number since it corresponds to the position in the html
              mobileColumnName = this.attributes[0].textContent;
              mobileRowId = this.attributes[1].textContent;
              oldValue = this.defaultValue;
              newValue = this.value;
                $timeout(function() {
                  if ($scope.datasrc.FieldType === 'TEXT'){
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'TEXT-AREA') {
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'RADIO-LIST') {
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'CHECK-LIST') {
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'DROPDOWN') {
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'TYPEAHEAD') {
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, '', '', $scope.datasrc.Answer, 'Admin');
                  } else if ($scope.datasrc.FieldType === 'GRID') {
                    // this will only work for mobile Grid.
                    // latptops and desktops have their own saving method shown in directive 'biGrid' at line 540
                    $scope.response = new ObjectModel($scope.datasrc.FieldTypeId, mobileColumnName, mobileRowId, newValue, 'Admin');
                  }

                  // this piece of code is used to remove the array and send the information as a string
                  if($scope.response.Answer.length > 0){
                    $scope.str = JSON.stringify($scope.response.Answer);
                    $scope.answer = $scope.str.replace('[', '');
                    $scope.answer = $scope.answer.replace(']', '');
                    for(var i = 0; i < $scope.response.Answer.length; i++ ){
                      $scope.answer = $scope.answer.replace('","', ',');
                    }
                  }else{
                    $scope.answer = JSON.stringify($scope.response.Answer);
                  }

                  // USED for converting JSON string of fieldid to integer
                  $scope.str = JSON.stringify($scope.response.fieldid);
                  $scope.fieldid = $scope.str.replace('"', '');
                  $scope.fieldid = $scope.fieldid.replace('"', '');

                  // USED for converting JSON string to integer
                  if(JSON.stringify($scope.response.rowid) !== '""'){
                    $scope.str = JSON.stringify($scope.response.rowid);
                    $scope.rowid = $scope.str.replace('"', '');
                    $scope.rowid = $scope.rowid.replace('"', '');
                  }else{
                    $scope.rowid = JSON.stringify($scope.response.rowid);
                  }

                  var data = '[dbo].[pd_AddAnswer]' + ' '+ $scope.fieldid + ',' +
                  JSON.stringify($scope.response.columnname) + ',' + $scope.rowid + ',' +
                  $scope.answer+ ',' + JSON.stringify($scope.response.CreatedBy);
                  console.log(data);
                }, 0);
            });
            element.bind('onblurSave', function() {
                $timeout(function() {
                    $scope.$apply(attrs.focus + '=true');
                }, 0);
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
            }
          }
          var answer = self.selectedAnswer.join(',');
          var answer = '';

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
        controllerAs:'grid',
      templateUrl: 'views/components/bi-grid.html',
      controller: function($scope, $http){
       var self =this
       var webBaseUrl;
       webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
       webBaseUrl = 'http://localhost:64378/';
       self.gridOptions = {};
       self.mobileDataSrc= {};
       var _FiledId =$scope.datasrc.FieldTypeId;
       var mobileGridHeaderSql = JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGridHeader] '+ _FiledId);
       var GridSql = JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetRegularGrid] '+ _FiledId);
       var mobileGridSql = JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGrid] '+ _FiledId);
       var apiCall = 'api/BiFormCreator/';

        $http.post(webBaseUrl + apiCall, JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFieldtype]')).success(function(results) {
          self.mobileDataSrc.header=results;
        });
        //
        // $http.post(webBaseUrl + apiCall, mobileGridSql).success(function(results) {
        //     self.mobileDataSrc=results;
        // });
        //
        // $http.post(webBaseUrl + apiCall, GridSql).success(function(results) {
        //   self.gridOptions.data=results;
        //   self.gridOptions.headerTemplate= '<div class="ui-grid-top-panel" style="padding: 5px; height: 30px;">'+
        //     '  <a class="glyphicon glyphicon-plus" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-pencil" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-remove" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-trash" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-floppy-save" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-open" style="width: 4%;"></a></div>'+
        //     '  <div class="ui-grid-top-panel ui-grid-header-cell sortable"'+
        //     '  ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"'+
        //     '  ui-grid-header-cell="" col="col">'+
        //     '  </div>';
        // });


        //
        // getProjectData.getHeaders(JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGridHeader] '+ _FiledId))
        // .then(function (results) {
        //   self.mobileDataSrc.header=results;
        // })
        //
        // getProjectData.getRegularGrid(JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetRegularGrid] '+ _FiledId))
        // .then(function (results) {
        //   self.gridOptions.data=results;
        //   self.gridOptions.headerTemplate= '<div class="ui-grid-top-panel" style="padding: 5px; height: 30px;">'+
        //     '  <a class="glyphicon glyphicon-plus" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-pencil" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-remove" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-trash" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-floppy-save" style="width: 4%;"></a>'+
        //     '  <a class="glyphicon glyphicon-open" style="width: 4%;"></a></div>'+
        //     '  <div class="ui-grid-top-panel ui-grid-header-cell sortable"'+
        //     '  ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"'+
        //     '  ui-grid-header-cell="" col="col">'+
        //     '  </div>';
        // })
        //
        // getProjectData.getMobileGrid(JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGrid] '+ _FiledId))
        // .then(function (results) {
        //   self.mobileDataSrc=results;
        // })

        //
        //
        // self.mobileDataSrc = [{
        //   "id": [
        //     1,
        //     2,
        //     3,
        //     4
        //   ],
        //   "appropriately": [
        //     "Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",
        //     "Not Applicable",
        //     "",
        //     ""
        //   ],
        //   "dosage": [
        //     "Dosage Form/Route of Administration",
        //     "None",
        //     "",
        //     ""
        //   ],
        //   "dosing": [
        //     "Interval",
        //     "None",
        //     "",
        //     ""
        //   ],
        //   "number": [
        //     "0",
        //     "1",
        //     "2",
        //     "3"
        //   ],
        //   "product": [
        //     "Product Name/Medical Term/Prescription Abbreviation",
        //     "None",
        //     "",
        //     ""
        //   ],
        //   "testNames": [
        //     "Instructions ->",
        //     "ANSLARA",
        //     "ANZYLARA",
        //     "LARTRANA"
        //   ],
        //   "projectId": [
        //     "10023",
        //     "10023",
        //     "10023",
        //     "10023"
        //   ],
        //   "projectInputControlId": [
        //     "10643",
        //     "10643",
        //     "10643",
        //     "10643"
        //   ],
        //   "rowId": [
        //     "1437499370066",
        //     "1437499432516",
        //     "1437499437886",
        //     "1440188008566"
        //   ]
        // }, {
        //   "header": [
        //     "id",
        //     "appropriately",
        //     "dosage",
        //     "dosing",
        //     "number",
        //     "product",
        //     "testNames",
        //     "projectId",
        //     "projectInputControlId",
        //     "rowId"
        //   ]
        // }];
        //
        // self.gridOptions = {
        //   headerTemplate: '<div class="ui-grid-top-panel" style="padding: 5px; height: 30px;">'+
        //   '  <a class="glyphicon glyphicon-plus" style="width: 4%;"></a>'+
        //   '  <a class="glyphicon glyphicon-pencil" style="width: 4%;"></a>'+
        //   '  <a class="glyphicon glyphicon-remove" style="width: 4%;"></a>'+
        //   '  <a class="glyphicon glyphicon-trash" style="width: 4%;"></a>'+
        //   '  <a class="glyphicon glyphicon-floppy-save" style="width: 4%;"></a>'+
        //   '  <a class="glyphicon glyphicon-open" style="width: 4%;"></a></div>'+
        //   '  <div class="ui-grid-top-panel ui-grid-header-cell sortable"'+
        //   '  ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"'+
        //   '  ui-grid-header-cell="" col="col">'+
        //   '  </div>',
        //   data: [{
        //     id: '1',
        //     appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
        //     dosage: 'Dosage Form/Route of Administration',
        //     dosing: 'Interval',
        //     number: '0',
        //     product: 'Product Name/Medical Term/Prescription Abbreviation',
        //     testNames: 'Instructions ->',
        //     projectId: '10023',
        //     projectInputControlId: '10643',
        //     rowId: '1437499370066'
        //   }]
        // };
        self.gridOptions.onRegisterApi = function(gridApi) {
          //set desktop gridApi on scope
          self.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue){
            $scope.rowEntity = rowEntity;
            $scope.colDef = colDef;
            $scope.newValue = newValue;
            $scope.oldValue = oldValue;

            //Do your REST call here via $http.get or $http.post
          });
        };
      }
    }
  });
