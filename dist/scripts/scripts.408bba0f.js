"use strict";angular.module("biprojectDevelopmentApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.grid","ui.grid.resizeColumns","jqwidgets","ngMdIcons","ui.bootstrap","ngMaterial","vAccordion"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/project/:project/:template/:templateid",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project",resolve:{queryStringCheck:["$q","$location","$route",function(a,b,c){var d=a.defer(),e=c.current.params.project,f=c.current.params.template,g=c.current.params.templateid;return void 0!==f?d.resolve(e+","+g):(d.reject("not_id"),b.path("/chooseProject")),d.promise}]}}).when("/chooseTemplate/:projectChosen",{templateUrl:"views/template.html",controller:"TemplateCtrl",controllerAs:"template",resolve:{route:["$q","$window","$route",function(a,b,c){var d=a.defer(),e=c.current.params.projectChosen;return void 0!==e?d.resolve(e):d.reject("not_id"),d.promise}]}}).otherwise({redirectTo:"/"})}]);var webBaseUrl;webBaseUrl="https://tools.brandinstitute.com/BIWebServices/",angular.module("biprojectDevelopmentApp").factory("bidocsGetProject",["$http","$q",function(a,b){var c,d,e,f;return e={},d=b.defer(),c="api/BIDOCS_GetProject/?projectName=",f=function(b){return a.get(webBaseUrl+c+b).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},e.getProject=f,e}]).factory("bidocsGetNRDGTemplates",["$http","$q",function(a,b){var c,d,e,f;return e={},d=b.defer(),c="api/BIDOCS_ProjectPreSearch/",f=function(){return a.get(webBaseUrl+c).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},e.getTemplates=f,e}]).factory("globalVariables",[function(){var a,b,c,d=[],e=[];return a={},b=function(a,b){d.push(a),e.push(b)},c=function(){var a=d[0]+e[0];return a},a.setVariable=b,a.getVariable=c,a}]).factory("getProjectFields",function(){return{getProjectFields:function(){return[{ProjectId:"3",ProjecName:"3",ProjectFieldId:"122",FieldTypeId:"Grid",SortValues:"2",Access:"true",Status:"Done",IsActive:"1",OptionList:"1,2,3,4",OptionListOrientation:"inline",ToolTip:"hello tooltip",ToolTipPlacement:"top",ToolTipTrigger:"mouseenter",Label:"Grid Directive",PlaceHolder:"Text Place holder",Answer:"1",VersionControl:'[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',TemplateName:"RX",width:"100%",ImageUrl:"",directive:"<bi-grid>grid Directive</bi-grid>"},{ProjectId:"0",ProjectName:"0",ProjectFieldId:"1210",FieldTypeId:"Text",SortValue:"2",Access:"true",Status:"In Progress",IsActive:"0",OptionList:"",OptionListOrientation:"",ToolTip:"<h1>hello world</h1>",ToolTipPlacement:"top",ToolTipTrigger:"mouseenter",Label:"General Information questions labelGeneral Information Text Directive questions labelGeneral Information Text Directive questions label",PlaceHolder:"Text Place holder",Answer:"I'm an answer",VersionControl:'[{"oldValue":"cesar oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',TemplateName:"RX",width:"100%",ImageUrl:"",directive:"<bi-text>Text Directive</bi-text>"},{ProjectId:"2",ProjectName:"2",ProjectFieldId:"122",FieldTypeId:"101",SortValue:"2",Access:"true",Status:"Done",IsActive:"1",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"top",ToolTipTrigger:"mouseenter",Label:"Text Area Directive",PlaceHolder:"Text Place holder",Answer:"Hello World!",VersionControl:'[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',TemplateName:"RX",width:"100%",ImageUrl:"",directive:"<bi-text-area>Text area directive</bi-text-area>"}]}}}),angular.module("biprojectDevelopmentApp").directive("biFormCreator",["$compile",function(a){return{restrict:"EA",scope:{datasrc:"="},link:function(b,c){c.empty().append(a(b.datasrc.directive)(b))}}}]).directive("toolBarMenu",["$compile",function(a){return{restrict:"EA",templateUrl:"views/components/tool-bar-menu.html"}}]).directive("biVersionControl",["$compile","$window",function(a,b){return{restrict:"EA",scope:{src:"="},link:function(b,c){var d="",e="",f=function(a){a.forEach(function(a){d+='<md-card><div  class="flex-one"><h5>'+a.oldValue+'</h5></div><md-card-actions layout="row" layout-align="end center" class="layout-align-end-center layout-row"><md-button class="md-raised md-primary" aria-label="'+a.adminUser+'"><span class="ng-scope">'+a.adminUser+'</span></md-button><md-button class="md-raised md-default" aria-label="'+a.datetime+'"><span class="ng-scope">'+a.datetime+"</span></md-button></md-card-actions></md-card>"}),e+="<div>"+d+"</div>"};f(JSON.parse(b.src.VersionControl)),c.append(a(e)(b))}}}]).directive("biText",function(){return{restrict:"EA",templateUrl:"views/components/bi-text.html",controller:["$scope",function(a){}]}}).directive("biDropdown",function(){return{restrict:"EA",templateUrl:"views/components/bi-dropdown.html",controller:function(){}}}).directive("biTextArea",function(){return{restrict:"EA",templateUrl:"views/components/bi-text-area.html",controller:["$scope",function(a){}]}}).directive("biLabel",function(){return{restrict:"EA",templateUrl:"views/components/bi-label.html",controller:function(){}}}).directive("biTitle",function(){return{restrict:"EA",templateUrl:"views/components/bi-title.html",controller:function(){}}}).directive("biSubTitle",function(){return{restrict:"EA",templateUrl:"views/components/bi-sub-title.html",controller:function(){}}}).directive("biTypeahead",function(){return{restrict:"EA",templateUrl:"views/components/bi-typeahead.html",controller:function(){}}}).directive("biImage",function(){return{restrict:"EA",templateUrl:"views/components/bi-image.html",controller:function(){}}}).directive("biCheckList",function(){return{restrict:"EA",templateUrl:"views/components/bi-check-list.html",controller:["$scope",function(a){var b=this;b.selectedAnswer=[],b.arraysOfOptions=a.datasrc.OptionList.split(","),b.optionsArrayToDisplay=b.arraysOfOptions,b.selectedCheckBoxValue=function(a){var c=b.selectedAnswer.indexOf(a);0>c?b.selectedAnswer.push(a):c>-1&&b.selectedAnswer.splice(c,1)}}],controllerAs:"CheckListCtrl"}}).directive("biRadioList",function(){return{restrict:"EA",templateUrl:"views/components/bi-radio-list.html",controller:["$scope",function(a){var b=this;b.arraysOfOptions=a.datasrc.OptionList.split(","),b.optionsArrayToDisplay=b.arraysOfOptions,b.selectedRadioButtonValue=function(a){b.selectedRadioButton="",b.selectedRadioButton=a}}],controllerAs:"RadioListCtrl"}}).directive("pinkMe",function(){return{restrict:"A",link:function(a,b){b.bind("click",function(){var a=b.css("color");"rgb(255, 255, 255)"===a||"#ffffff"===a||"hsl(0, 100%, 100%)"===a||"rgb(255, 255, 255)"===a||"hsl(360, 100%, 100%)"===a||"#ffffff"===a?b.css("color","#F65489"):b.css("color","#ffffff")})}}}).directive("biGrid",function(){return{restrict:"EA",templateUrl:"views/components/bi-grid.html",controller:["$scope",function(a){a.mobileDataSrc=[{id:[1,2,3,4],appropriately:["Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No","Not Applicable","",""],dosage:["Dosage Form/Route of Administration","None","",""],dosing:["Interval","None","",""],number:["0","1","2","3"],product:["Product Name/Medical Term/Prescription Abbreviation","None","",""],testNames:["Instructions ->","ANSLARA","ANZYLARA","LARTRANA"],projectId:["10023","10023","10023","10023"],projectInputControlId:["10643","10643","10643","10643"],rowId:["1437499370066","1437499432516","1437499437886","1440188008566"]},{header:["id","appropriately","dosage","dosing","number","product","testNames","projectId","projectInputControlId","rowId"]}],a.gridOptions={headerTemplate:"views/components/header-template.html",data:[{id:"1",appropriately:"Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",dosage:"Dosage Form/Route of Administration",dosing:"Interval",number:"0",product:"Product Name/Medical Term/Prescription Abbreviation",testNames:"Instructions ->",projectId:"10023",projectInputControlId:"10643",rowId:"1437499370066"},{id:"2",appropriately:"Not Applicable",dosage:"None",dosing:"None",number:"1",product:"None",testNames:"ANSLARA",projectId:"10023",projectInputControlId:"10643",rowId:"1437499432516"},{id:"3",appropriately:"Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",dosage:"Dosage Form/Route of Administration",dosing:"Interval",number:"0",product:"Product Name/Medical Term/Prescription Abbreviation",testNames:"Instructions ->",projectId:"10023",projectInputControlId:"10643",rowId:"1437499370066"},{id:"4",appropriately:"Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",dosage:"Dosage Form/Route of Administration",dosing:"Interval",number:"0",product:"Product Name/Medical Term/Prescription Abbreviation",testNames:"Instructions ->",projectId:"10023",projectInputControlId:"10643",rowId:"1437499370066"},{id:"5",appropriately:"Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",dosage:"Dosage Form/Route of Administration",dosing:"Interval",number:"0",product:"Product Name/Medical Term/Prescription Abbreviation",testNames:"Instructions ->",projectId:"10023",projectInputControlId:"10643",rowId:"1437499370066"},{id:"6",appropriately:"",dosage:"",dosing:"",number:"2",product:"",testNames:"ANZYLARA",projectId:"10023",projectInputControlId:"10643",rowId:"1437499437886"},{id:"7",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"},{id:"8",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"},{id:"9",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"},{id:"10",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"},{id:"11",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"},{id:"12",appropriately:"",dosage:"",dosing:"",number:"3",product:"",testNames:"LARTRANA",projectId:"10023",projectInputControlId:"10643",rowId:"1440188008566"}]}}]}}),angular.module("biprojectDevelopmentApp").controller("MainCtrl",["$http","$location","getProjectFields","bidocsGetProject",function(a,b,c,d){var e=this,f="https://tools.brandinstitute.com/BIWebServices/",g="api/BIDOCS_ProjectPreSearch/";e.searchKey="",e.search=function(){""!==e.searchKey&&a.get(f+g+e.searchKey).success(function(a){e.projects=a,e.fromFactory=a})},e.gotToProject=function(c){var d="api/BIDOCS_GetProject/?projectName=";a.get(f+d+c).then(function(a){return a.data}).then(function(a){a.length>0?b.path("/setProject/"+a[0].ProjectName+"/"+a[0].Description+"/"+a[0].TemplateId):b.path("/chooseTemplate/"+c)})}}]),angular.module("biprojectDevelopmentApp").controller("ProjectCtrl",["getProjectFields","$routeParams","$http",function(a,b,c){var d=this;d.toggleEditClass="glyphicon glyphicon-save ",d.btnColorClass="btn btn-success",d.textFieldFocus=!0,d.isReadOnly=!0,d.btnToolTip="Save",d.someFocusVariable=!0,d.projectName=b.project,d.template=b.template,d.projectLogoImagePath="images/Samsung-Logo.jpg",d.inputControlItemsService={},d.goHome=function(){$location.path("/chooseProject")},d.goEditTemplate=function(){$location.path("/projectTemplate/"+d.ProjectIdForTemplate)},this.componentConfig=a.getProjectFields()}]),angular.module("biprojectDevelopmentApp").controller("TemplateCtrl",["$routeParams","bidocsGetNRDGTemplates","$location",function(a,b,c){var d=this;d.projectName=a.projectChosen,d.iconFill="fill: #ff0000",d.templateTextClassFill="danger",d.templateName="NO TEMPLATE",d.goButtonEnable=!0,d.icon="lock_outline",d.labelColor="danger",d.tooltip="Please select a template before continue";var e="";b.getTemplates().then(function(a){d.items=a}),d.selectedTemplate=function(a){d.templateName=a.currentTarget.innerHTML,d.iconFill="fill: #5CB85C",d.templateTextClassFill="success",d.goButtonEnable=!1,d.icon="play_circle_fill",d.tooltip="GO!",e=a.target.dataset.templateid,d.labelColor="success"},d.goToLayout=function(){if("NO TEMPLATE"!==d.templateName){var a=d.templateName,b=d.projectName;c.path("/project/"+b+"/"+a+"/"+e)}}}]),angular.module("biprojectDevelopmentApp").controller("generalController",["$scope",function(a){a.showMenuToggle=function(){a.hideToggle!==!0?(a.hideToggle=!0,a.showToggle=!0):(a.hideToggle=!1,a.showToggle=!1)}}]),angular.module("biprojectDevelopmentApp").controller("toolBarMenu",["$mdDialog",function(a){var b;this.openMenu=function(a,c){b=c,a(c)},this.notificationsEnabled=!0,this.toggleNotifications=function(){this.notificationsEnabled=!this.notificationsEnabled},this.redial=function(){a.show(a.alert().targetEvent(b).clickOutsideToClose(!0).parent("body").title("Suddenly, a redial").textContent("You just called a friend; who told you the most amazing story. Have a cookie!").ok("That was easy")),b=null},this.checkVoicemail=function(){}}]),angular.module("biprojectDevelopmentApp").run(["$templateCache",function(a){a.put("views/components/bi-check-list.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px">{{datasrc.Label}}</span> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4 col-xs-12"> <md-radio-group layout="row" ng-repeat="option in CheckListCtrl.optionsArrayToDisplay track by $index"> <md-checkbox class="reponsive-display-list md-primary" data-projectfieldid="{{datasrc.ProjectFieldId}}" data-projectid=" {{datasrc.ProjectId}}" ng-click="CheckListCtrl.selectedCheckBoxValue(option)" value="{{option}}"> {{option}} </md-checkbox> </md-radio-group> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-dropdown.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <select name="{{datasrc.Label}} " class="form-control" focus="someFocusVariable" data-projectid=" {{datasrc.ProjectID}}" data-projectinputcontrolid="{{datasrc.ProjectInputControlId}}" ng-model="answer" ng-show="datasrc.IsActive" ng-options="item for item in datasrc.OptionList.split(\',\')"> <option value="">Choose One</option> </select> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-grid.html",'<div class="container-fluid"> <div class="row visible-md visible-lg"> <div class="grid" data-projectfieldid="{{mobileDataSrc.ProjectFieldId}}" data-projectid=" {{mobileDataSrc.ProjectId}}" ui-grid="gridOptions"></div> </div> <md-card class="visible-xs visible-sm"> <!-- <md-card> --> <md-card-content> <v-accordion class="vAccordion--default" multiple> <!-- add expanded attribute to open the section --> <v-pane data-projectfieldid="{{mobileDataSrc.ProjectFieldId}}" data-projectid=" {{mobileDataSrc.ProjectId}}" enabled ng-model="mobileDataSrc[1].header" ng-repeat="item in mobileDataSrc[0] track by $index"> <v-pane-header> {{mobileDataSrc[1].header[$index]}} </v-pane-header> <v-pane-content> <div ng-repeat="content in item track by $index"> {{content}}<br> </div> </v-pane-content> </v-pane> </v-accordion> </md-card-content> </md-card> </div>'),a.put("views/components/bi-image.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <tool-bar-menu></tool-bar-menu> </div> </div> <div class="row"> <div class="col-md-12"> <img ng-src="{{datasrc.ImageUrl}}" style="display: block; margin-left: auto; margin-right: auto; padding:10px" uib-tooltip="{{datasrc.ToolTip}}" tooltip-trigger="hover" tooltip-placement="{{datasrc.ToolTipPlacement}}" width="{{datasrc.width}}" data-projectid=" {{datasrc.ProjectId}}" data-projectfieldid="{{datasrc.ProjectFieldId}}"> </div> </div> </div>'),a.put("views/components/bi-label.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <label class="text-primary" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</label> </div> </div> </div>'),a.put("views/components/bi-radio-list.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" ng-show="datasrc.IsActive" style="font-size:18px">{{datasrc.Label}}</span> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4 col-xs-12"> <md-radio-group ng-model="datasrc.Answer" ng-repeat="option in RadioListCtrl.optionsArrayToDisplay track by $index"> <md-radio-button class="reponsive-display-list" data-projectfieldid="{{datasrc.ProjectFieldId}}" data-projectid=" {{datasrc.ProjectId}}" ng-value="option" ng-click="RadioListCtrl.selectedRadioButtonValue(option)"> {{option}} </md-radio-button> </md-radio-group> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-sub-title.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <h3 class="text-muted" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</h3> </div> </div> </div>'),a.put("views/components/bi-text-area.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <textarea type="{{datasrc.DataType}}" class="form-control" ng-attr-placeholder="{{datasrc.PlaceHolder}}" value="{{datasrc.Answer}}" uib-tooltip="{{datasrc.ToolTip}}" tooltip-placement="{{datasrc.ToolTipPlacement}}" tooltip-trigger="{{datasrc.ToolTipTrigger}}" data-projectid=" {{datasrc.ProjectId}}" data-projectfieldid="{{datasrc.ProjectFieldId}}" ng-readonly="false" ng-model="datasrc.Answer" ng-show="datasrc.IsActive"></textarea> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-text.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <input type="{{datasrc.DataType}}" class="form-control" placeholder="{{datasrc.PlaceHolder}}" value="{{datasrc.Answer}}" uib-tooltip="{{datasrc.ToolTip}}" tooltip-placement="{{datasrc.ToolTipPlacement}}" tooltip-trigger="{{datasrc.ToolTipTrigger}}" data-projectid=" {{datasrc.ProjectId}}" data-projectfieldid="{{datasrc.ProjectFieldId}}" ng-model="datasrc.Answer" ng-disabled="{{datasrc.Access}}"> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-title.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <h1 class="text-mute text-center" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</h1> </div> </div> </div>'),a.put("views/components/bi-typeahead.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <input type="text" uib-typeahead="option for option in datasrc.OptionList.split(\',\') | filter:$viewValue | limitTo:8" class="form-control ng-valid ng-dirty ng-valid-parse ng-touched" style="height: 100%" placeholder="{{datasrc.PlaceHolder}}" data-projectid=" {{datasrc.ProjectId}}" data-projectfieldid="{{datasrc.ProjectFieldId}}" ng-model="selected"> </div> </div> </md-card-content> </div>'),a.put("views/components/header-template.html",'<div class="ui-grid-top-panel" style="padding: 5px; height: 30px"> <a class="glyphicon glyphicon-plus" style="width: 4%"></a> <a class="glyphicon glyphicon-pencil" style="width: 4%"></a> <a class="glyphicon glyphicon-remove" style="width: 4%"></a> <a class="glyphicon glyphicon-trash" style="width: 4%"></a> <a class="glyphicon glyphicon-floppy-save" style="width: 4%"></a> <a class="glyphicon glyphicon-open" style="width: 4%"></a> </div> <div class="ui-grid-top-panel ui-grid-header-cell sortable" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" ui-grid-header-cell="" col="col"> </div>'),a.put("views/components/tool-bar-menu.html",'<div class="row custom" ng-controller="generalController" style="float:right"> <div class="col-md-12"> <div class="row"> <div ng-if="!hideToggle" style="height:4px;background-color:white;text-align:left;margin:0 5px"> <span class="glyphicon glyphicon-minus text-primary" ng-click="showMenuToggle()" ng-hide="hideToggle" style="font-size:25px;cursor:pointer;position: absolute; top: -10px;right: -3px"></span> </div> </div> <div class="row"> <div ng-if="hideToggle" style="height:30px; width:114px; padding-right:6px"> <div class="row" style="padding:4px 10px; float:left"> <div class="col-xs-4"> <md-checkbox aria-label class="bi-blue white-frame"></md-checkbox> </div> <div class="col-xs-4"> <ng-md-icon class="bi-blue" icon="clear" ng-click="showMenuToggle()" style="color:#ffffff; font-size: 20px"></ng-md-icon> </div> <div class="col-xs-4 custom"> <ng-md-icon class="bi-blue" aria-hidden="true" data-projectid=" {{datasrc.ProjectId}}" icon="history" style="float: left; color:#ffffff;font-size:20px" tooltip-trigger="click" tooltip-placement="bottom" class="bottom-left" uib-tooltip-template="\'views/components/tool-tip-template.html\'"></ng-md-icon> </div> </div> </div> </div> </div> </div>'),a.put("views/components/tool-tip-template.html",'<bi-version-control src="datasrc"></bi-version-control>'),a.put("views/main.html",'<!doctype html> <div> <!-- SEARCH PROJECT --> <div class="container-fluid"> <div class="row"> <div class="col-lg-12" style="margin:10px"> <div class="col-lg-6"> <div class="input-group"> <span class="input-group-addon" id="basic-addon2">Search</span> <input type="search" class="form-control" placeholder="type project name" autofocus ng-keyup="main.search($event)" ng-model="main.searchKey"> </div> </div> </div> <hr> </div> </div> <!-- LIST PROJECTS --> <div class="jumbotron" style="text-align:left"> <div ng-repeat="project in main.projects track by $index"><div><span><strong>Project : </strong></span> <a ng-click="main.gotToProject(project.ProjectName)" style="cursor:pointer">{{project.ProjectName}}</a></div></div> </div> </div>'),a.put("views/project.html",'<form class="form-horizontal" role="form"> <div ng-repeat="component in  project.componentConfig track by $index" ng-show="{{component.Access}}" style="padding-top: 20px"> <div ng-if="component.FieldTypeId !== \'Title\' && component.FieldTypeId !== \'Subtitle\'\r\n'+"                && component.FieldTypeId !== 'Grid' && component.FieldTypeId !== 'Label'\"> <md-card> <div bi-form-creator datasrc=\"component\"></div> </md-card> </div> <div ng-if=\"component.FieldTypeId === 'Title' || component.FieldTypeId === 'Subtitle'\r\n                || component.FieldTypeId === 'Grid' || component.FieldTypeId === 'Label'\"> <div bi-form-creator datasrc=\"component\"></div> </div> </div> </form>"),a.put("views/template.html",'<!-- PICK TEMPLATE --> <div class="container-fluid"> <div class="row"> <div class="col-md-12" style="margin: 10px 0px 0px 11px"> <div class="row"> <div class="col-md-2"> <div class="row"> <div class="btn-group dropdown" uib-dropdown=""> <button id="split-button" type="button" class="btn btn-default">Template</button> <button type="button" class="btn btn-info dropdown-toggle" uib-dropdown-toggle="" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Split button!</span> </button> <ul uib-dropdown-menu="" role="menu" aria-labelledby="split-button" class="dropdown-menu"> <li ng-repeat="choice in template.items"> <a href data-templateid="{{choice.TemplateId}}" ng-click="template.selectedTemplate($event)">{{choice.Description}}</a> </li> </ul> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-info">Project Name </span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-info">{{template.projectName}}</span> </h4> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-{{template.labelColor}}">Template Name</span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-{{template.templateTextClassFill}}">{{template.templateName}}</span> </h4> </div> </div> </div> </div> <hr> <ng-md-icon tooltip="{{template.tooltip}}" tooltip-trigger="mouseenter" icon="{{template.icon}}" ng-click="template.goToLayout()" ng-attr-style="{{template.iconFill}}; cursor: pointer;" size="42" class="pull-right"></ng-md-icon> </div> </div> </div> <!-- END OF PICKING TEMPLATE -->')}]);