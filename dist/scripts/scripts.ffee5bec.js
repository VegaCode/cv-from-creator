"use strict";angular.module("biprojectDevelopmentApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.grid","ui.grid.resizeColumns","jqwidgets"]).config(["$routeProvider",function(a){a.when("/project",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project"}).when("/template",{templateUrl:"views/template.html",controller:"TemplateCtrl",controllerAs:"template"}).when("/:projectId",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",resolve:{queryString:["$q","$location","$route",function(a,b,c){var d=a.defer(),e=c.current.params.projectId;return void 0!==e?d.resolve(e):d.reject("not_id"),d.promise}]}}).otherwise({redirectTo:"/"})}]),angular.module("biprojectDevelopmentApp").controller("MainCtrl",["$scope","$http","getProjectFields","queryString",function(a,b,c,d){a._ProjectId=[],a._ProjectFieldId=[],a._FieldTypeId=[],a._SortValue=[],a._Access=[],a._Status=[],a._IsActive=[],a._OptionList=[],a._OptionListOrientation=[],a._ToolTip=[],a._ToolTipPlacement=[],a._ToolTipTrigger=[],a._Label=[],a._PlaceHolder=[],a._Answer=[],a._VersionControl=[],a._TemplateName=[],a._GridConfig=[],a.buttonInstance={},a.settings={width:150,height:30},a.onClick=function(b){a.buttonData.text="Clicked"},a.buttonData={text:"Click me"},a.checked=!0,a.fromFactory=c.getProjectFields(),a.fromFactory.map=function(b){a._ProjectId.push(b.ProjectId),a._ProjectFieldId.push(b.ProjectFieldId),a._FieldTypeId.push(b.FieldTypeId),a._SortValue.push(b.SortValue),a._Access.push(b.Access),a._Status.push(b.Status),a._IsActive.push(b.IsActive),a._OptionList.push(b.OptionList),a._OptionListOrientation.push(b.OptionListOrientation),a._ToolTip.push(b.ToolTip),a._ToolTipPlacement.push(b.ToolTipPlacement),a._ToolTipTrigger.push(b.ToolTipTrigger),a._Label.push(b.Label),a._PlaceHolder.push(b.PlaceHolder),a._Answer.push(b.Answer),a._VersionControl.push(b.VersionControl),a._TemplateName.push(b.TemplateName),a._GridConfig.push(b.GridConfig)}}]),angular.module("biprojectDevelopmentApp").controller("ProjectCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("biprojectDevelopmentApp").controller("TemplateCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("biprojectDevelopmentApp").factory("getProjectFields",function(){return{getProjectFields:function(){return[{ProjectId:"0",ProjectFieldId:"1210",FieldTypeId:"101",SortValue:"2",Access:"YES",Status:"In Progress",IsActive:"1In Progress",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"General Information",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"2",ProjectFieldId:"122",FieldTypeId:"TextArea",SortValue:"2",Access:"YES",Status:"Done",IsActive:"1Done",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"Gretting",PlaceHolder:"Text Place holder",Answer:"Hello World!",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"3",ProjectFieldId:"123",FieldTypeId:"CheckList",SortValues:"2",Access:"No",Status:"Done",IsActive:"1Done",OptionList:"1,2,3,4",OptionListOrientation:"inline",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"General List",PlaceHolder:"Text Place holder",Answer:"1",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"4",ProjectFieldId:"124",FieldTypeId:"RadioList",SortValue:"2",Access:"YES",Status:"Not Started",IsActive:"1Not Started",OptionList:"1,2,3,4",OptionListOrientation:"inline",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"General Radio List",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"5",ProjectFieldId:"125",FieldTypeId:"Grid",SortValue:"2",Access:"YES",Status:"",IsActive:"1",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"General Grid",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:"C"},{ProjectId:"6",ProjectFieldId:"126",FieldTypeId:"DropDown",SortValues:"2",Access:"No",Status:"In Progress",IsActive:"1In Progress",OptionList:"Start, Complete",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"General DropDown",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"7",ProjectFieldId:"127",FieldTypeId:"Title",SortValue:"2",Access:"Yes",Status:"",IsActive:"1",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"Title of Project",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"8",ProjectFieldId:"128",FieldTypeId:"Subtitle",SortValue:"2",Access:"YES",Status:"",IsActive:"1",OptionList:"",OptionListOrientation:"",ToolTip:"hello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"Subtitle of Project",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""},{ProjectId:"9",ProjectFieldId:"129",FieldTypeId:"Picture",SortValue:"2",Access:"YES",Status:"",IsActive:"1",OptionList:"",OptionListOrientation:"",ToolTip:"Logo of the Companyhello tooltip",ToolTipPlacement:"right",ToolTipTrigger:"hover",Label:"Picture/ Logo of Company",PlaceHolder:"Text Place holder",Answer:"",VersionControl:"<span>hello version</span>",TemplateName:"RX",GridConfig:""}]}}}),angular.module("biprojectDevelopmentApp").directive("biFormCreator",function(){return{restrict:"EA",scope:{sourceData:"="},link:function(a,b,c){},controllerAs:"biForm",template:'<h1 ng-style="{{biForm.mystyle}}">hello world</h1>',controller:function(){var a=this;a.mystyle='{color:"blue"}'}}}),angular.module("biprojectDevelopmentApp").run(["$templateCache",function(a){a.put("views/main.html",'<!doctype html> <style type="text/css" src="">.grid {\r\n  width: 3000px;\r\n  height: 500px;\r\n}</style> <div ng-controller="MainCtrl"> <!-- SEARCH PROJECT --> <div class="container-fluid"> <div class="row"> <div class="col-lg-12" style="margin:10px"> <div class="col-lg-6"> <div class="input-group"> <span class="input-group-addon" id="basic-addon2">Search</span> <input type="search" id="projectSearch" class="form-control" placeholder="project name" ng-keyup="chooseProject.search($event)" autofocus ng-model="chooseProject.searchKey"> </div><!-- /input-group --> </div> <div class="col-lg-6" style="cursor:pointer"> <!--     <ng-md-icon popover="Type the first 3 letters of the name of the project" icon="help" style="fill: #242F65" size="32" style="float:right; cursor: pointer;"></ng-md-icon> --> </div> </div> <!-- /.col-lg-12 --> <hr> </div> <!-- /.row --> </div> <div class="jumbotron" style="text-align:left"> <div ng-repeat="project in main.projects "><div><span><strong>Project : </strong></span><a ng-click="chooseProject.gotToProject(main._ProjectId)" style="cursor:pointer">{{main._ProjectId}}</a></div></div> </div> <!-- END OF SEARCHING PROJECT --> </div>'),a.put("views/project.html",'<p ng-repeat="item in project.awesomeThings">{{item}}</p> <!-- TEMPLATE --> <div class="page page-table col-lg-12"> <div class="row clearfix"> <!--Header--> <div class="col-md-12 column" style="padding-bottom: 15px;padding-top: 10px"> <div class="row clearfix"> <div class="col-md-2 column"> <div class="glyphicon glyphicon-home" popover-title="Home" style="font-size: 36px; cursor:pointer;color:grey" ng-click="formCreator.goHome()"></div> <div class="glyphicon glyphicon-cog" style="font-size: 36px; cursor:pointer;color:grey" ng-click="formCreator.goEditTemplate()"></div> </div> <div class="col-md-4 column"> <div class="btn btn-primary" style="margin: 10px" type="button"> Project Name : <span class="badge">{{formCreator.projectName}}</span> </div> </div> <div class="col-md-3 column"> <div class="btn btn-success" style="margin: 10px" type="button"> Template: <span class="badge">{{formCreator.template}}</span> </div> </div> <div class="col-md-3 column"> <img ng-src="{{formCreator.projectLogoImagePath}}" width="125" class="pull-right"> </div> </div> </div> </div> <!--Body--> <hr> <form class="form-horizontal" role="form"> <div ng-repeat="formElement in  formCreator.formElementsData track by $index"> <div xv-form-creator source-data="formElement"> </div> </div> </form> </div> <!--Footer--> <div class="page page-table col-lg-12"> <span tooltip="{{btnToolTip}}" class="{{btnColorClass}}" ng-class="toggleEditClass" ng-click="edit(ctrl.field)" style="float:right; cursor: pointer;width:79px">&nbsp{{btnToolTip}}</span> </div> <!-- END OF EDITING TEMPLATE -->'),a.put("views/template.html",'<h1>hello world</h1> <p ng-repeat="item in template.awesomeThings"> {{item}} </p> <!-- PICK TEMPLATE --> <div class="row"> <div class="col-md-12" style="margin: 10px 0px 0px 11px"> <div class="row"> <div class="col-md-3"> <div class="row"> <div class="btn-group" dropdown> <button type="button" class="btn btn-default"> Choose a template</button> <button type="button" class="btn btn-info dropdown-toggle" dropdown-toggle> <span class="caret"></span> <span class="sr-only">Split button!</span> </button> <ul class="dropdown-menu" role="menu"> <li ng-repeat="choice in chooseTemplate.items"> <a href data-templateid="{{choice.TemplateId}}" ng-click="chooseTemplate.selectedTemplate($event)">{{choice.Description}}</a> </li> </ul> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-info">Project Name </span></h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-info">{{chooseTemplate.projectName}}</span> </h4> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-success">Template Name</span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-{{chooseTemplate.templateTextClassFill}}">{{chooseTemplate.templateName}}</span></h4> </div> </div> </div> </div> <hr> <ng-md-icon tooltip="{{chooseTemplate.tooltip}}" tooltip-trigger="mouseenter" icon="{{chooseTemplate.icon}}" ng-click="chooseTemplate.goToLayout()" ng-attr-style="{{chooseTemplate.iconFill}}; cursor: pointer;" size="42" class="pull-right"></ng-md-icon> </div> </div> <!-- END OF PICKING TEMPLATE -->')}]);