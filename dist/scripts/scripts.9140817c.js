"use strict";angular.module("biprojectDevelopmentApp").controller("MainCtrl",["$scope","$http","queryString","testFactory",function(a,b,c,d){var e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[],n=[],o=[],p=[],q=[],r=[],s=[],t=[],u=[],v=[],w=[],x=[],y=[],z=[],A=[],B=[],C=[],D=[],E=[],F=[],G=[];b.get("https://tools.brandinstitute.com/BIWebServices/api/TemplateItems").success(function(b){e.push(c),f.push(b[0].Class),g.push(b[0].Color),h.push(b[0].Created),i.push(b[0].CreatedBy),j.push(b[0].DataSourceUrl),k.push(b[0].DataType),l.push(b[0].DefaultValue),m.push(b[0].GridConfig),n.push(b[0].Group),o.push(b[0].Input),p.push(b[0].InputControlStatus),q.push(b[0].FieldTypeId),r.push(b[0].ProjectFieldId),s.push(b[0].IsActive),t.push(b[0].Label),u.push(b[0].ListOrientation),v.push(b[0].Name),w.push(b[0].Option),x.push(b[0].PlaceHolder),y.push(b[0].Question),z.push(b[0].SortValue),A.push(b[0].TemplateId),B.push(b[0].TemplateItemId),C.push(b[0].TemplateName),D.push(b[0].ToolTip),E.push(b[0].ToolTipPlacement),F.push(b[0].Updated),G.push(b[0].UpdatedBy),a.myData=[{Id:e[0],Class:f[0],Color:g[0],Created:h[0],CreatedBy:i[0],DataSourceUrl:j[0],DataType:k[0],DefaultValue:l[0],GridConfig:m[0],Group:n[0],Input:o[0],InputControlStatus:p[0],FieldTypeId:q[0],ProjectFieldId:r[0],IsActive:s[0],Label:t[0],ListOrientation:u[0],Name:v[0],PlaceHolder:x[0],Question:y[0],SortValue:z[0],TemplateId:A[0],TemplateItemId:B[0],TemplateName:C[0],ToolTip:D[0],ToolTipPlacement:E[0],Updated:F[0],UpdatedBy:G[0]}]}),a.buttonInstance={},a.settings={width:150,height:30},a.onClick=function(b){a.buttonData.text="Clicked"},a.buttonData={text:"Click me"},a.checked=!0,a.componentModel=[{ProjectId:Id,ProjetFieldId:FieldId,Type:Type,Access:Access,Status:Status,Answer:Answer,OptionList:OptionList,OptionListOrientation:OptionListOrientation,ToolTip:ToolTip,ToolTipPlacement:ToolTipPlacement,ToolTipTrigger:ToolTipTrigger,PlaceHolder:PlaceHolder,Label:Label,Name:Name,GirdConfiguration:GridConfiguration,GridValue:GridValue}],a.fromFactory=d.test()}]),angular.module("biprojectDevelopmentApp").controller("ProjectCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("biprojectDevelopmentApp").controller("TemplateCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("biprojectDevelopmentApp").run(["$templateCache",function(a){a.put("views/main.html",'<!doctype html> <style type="text/css" src="">.grid {\r\n  width: 3000px;\r\n  height: 500px;\r\n}</style> <div ng-controller="MainCtrl"> <!-- SEARCH PROJECT --> <div class="container-fluid"> <div class="row"> <div class="col-lg-12" style="margin:10px"> <div class="col-lg-6"> <div class="input-group"> <span class="input-group-addon" id="basic-addon2">Search</span> <input type="search" id="projectSearch" class="form-control" placeholder="project name" ng-keyup="chooseProject.search($event)" autofocus ng-model="chooseProject.searchKey"> </div><!-- /input-group --> </div> <div class="col-lg-6" style="cursor:pointer"> <!--     <ng-md-icon popover="Type the first 3 letters of the name of the project" icon="help" style="fill: #242F65" size="32" style="float:right; cursor: pointer;"></ng-md-icon> --> </div> </div> <!-- /.col-lg-12 --> <hr> </div> <!-- /.row --> </div> <!-- END OF SEARCHING PROJECT --> <!-- PICK TEMPLATE --> <div class="jumbotron" style="text-align:left"> <div ng-repeat="project in chooseProject.projects "><div><span><strong>Project : </strong></span><a ng-click="chooseProject.gotToProject(project.ProjectName)" style="cursor:pointer">{{project.ProjectName}}</a></div></div> </div> <div class="row"> <div class="col-md-12" style="margin: 10px 0px 0px 11px"> <div class="row"> <div class="col-md-3"> <div class="row"> <!-- old dropdown --> <div class="btn-group" dropdown> <button type="button" class="btn btn-default"> Choose a template</button> <button type="button" class="btn btn-info dropdown-toggle" dropdown-toggle> <span class="caret"></span> <span class="sr-only">Split button!</span> </button> <ul class="dropdown-menu" role="menu"> <li ng-repeat="choice in chooseTemplate.items"> <a href data-templateid="{{choice.TemplateId}}" ng-click="chooseTemplate.selectedTemplate($event)">{{choice.Description}}</a> </li> </ul> </div> <!-- new dropdown --> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Dropdown <span class="caret"></span> </button> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li><a href="#">Action</a></li> <li><a href="#">Another action</a></li> <li><a href="#">Something else here</a></li> <li role="separator" class="divider"></li> <li><a href="#">Separated link</a></li> </ul> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-info">Project Name </span></h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-info">{{chooseTemplate.projectName}}</span> </h4> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-success">Template Name</span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-{{chooseTemplate.templateTextClassFill}}">{{chooseTemplate.templateName}}</span></h4> </div> </div> </div> </div> <hr> <ng-md-icon tooltip="{{chooseTemplate.tooltip}}" tooltip-trigger="mouseenter" icon="{{chooseTemplate.icon}}" ng-click="chooseTemplate.goToLayout()" ng-attr-style="{{chooseTemplate.iconFill}}; cursor: pointer;" size="42" class="pull-right"></ng-md-icon> </div> </div> <!-- END OF PICKING TEMPLATE --> <!-- TEMPLATE --> <div class="page page-table col-lg-12"> <!--  --> <div class="row clearfix"> <!--Header--> <div class="col-md-12 column" style="padding-bottom: 15px;padding-top: 10px"> <div class="row clearfix"> <div class="col-md-2 column"> <div class="glyphicon glyphicon-home" popover-title="Home" style="font-size: 36px; cursor:pointer;color:grey" ng-click="formCreator.goHome()"></div> <div class="glyphicon glyphicon-cog" style="font-size: 36px; cursor:pointer;color:grey" ng-click="formCreator.goEditTemplate()"></div> </div> <div class="col-md-4 column"> <div class="btn btn-primary" style="margin: 10px" type="button"> Project Name : <span class="badge">{{formCreator.projectName}}</span> </div> </div> <div class="col-md-3 column"> <div class="btn btn-success" style="margin: 10px" type="button"> Template: <span class="badge">{{formCreator.template}}</span> </div> </div> <div class="col-md-3 column"> <img ng-src="{{formCreator.projectLogoImagePath}}" width="125" class="pull-right"> </div> </div> </div> </div> <!--Body--> <hr> <form class="form-horizontal" role="form"> <div ng-repeat="formElement in  formCreator.formElementsData track by $index"> <div xv-form-creator source-data="formElement"> </div> </div> </form> </div> <!--Footer--> <div class="page page-table col-lg-12"> <span tooltip="{{btnToolTip}}" class="{{btnColorClass}}" ng-class="toggleEditClass" ng-click="edit(ctrl.field)" style="float:right; cursor: pointer;width:79px">&nbsp{{btnToolTip}}</span> </div> <!-- END OF TEMPLATE --> <!-- EDITING TEMPLATE --> <div class="col-md-12 column" style="padding-bottom: 15px;padding-top: 10px"> <div class="row clearfix"> <div class="col-md-6 column"> <a ng-click="goHome()"> <ng-md-icon icon="home" size="48" style="fill: #286090; cursor:pointer"></ng-md-icon><a> </a></div> <div class="col-md-6 column"> <div class="btn btn-primary" style="margin: 10px" type="button"> Editing Template For : <span class="badge">{{projectName}}</span> </div> </div> </div> </div> <ngx-grid-view ngx-on-row-begin-edit="rowBeginEdit(edit)" ngx-on-row-select="rowSelect(event)" ngx-on-row-un-select="rowUnselect(event)" ngx-on-row-end-edit="rowEndEdit(event)" ngx-settings="gridSettings" ngx-theme="theme" ngx-watch="gridSettings.disabled" ngx-on-row-double-click="rowDoubleClick(event)"> </ngx-grid-view> <ngx-window ngx-on-close="close()" ngx-create="dialogSettings" ngx-settings="dialogSettings"> <!--    <tabset justified="true">\r\n            <tab heading="Text and Text Area"> --> <div class="container-fluid"> <br> <div class="row"> <div class="col-md-12"> <div class="row"> <div class="col-md-6"> <span class="label label-primary">Is Control Active</span> <br> <ngx-drop-down-list ngx-settings="IsActiveSettings" ngx-create="IsActiveSettings" ng-minlength="2"></ngx-drop-down-list> </div> <div class="col-md-6" ng-show="inputType == \'xxx\'"><span class="label label-primary">Project Name: </span> <br> <ngx-input ngx-settings="ProjectNameSettings" ngx-create="ProjectNameSettings"></ngx-input> </div> <div class="col-md-6"><span class="label label-primary">Sort Value:</span> <br> <ngx-input ngx-settings="SortValueSettings" ngx-create="SortValueSettings"></ngx-input> </div> </div> <br> <div class="row"> <div class="col-md-6"> <span class="label label-primary">Tool-Tip:</span> <br> <ngx-input ngx-settings="ToolTipSettings" placeholder="optional" ngx-create="ToolTipSettings"></ngx-input> </div> <div class="col-md-6"> <span class="label label-primary">ToolTip-Placement:</span> <br> <ngx-input ngx-settings="ToolTipPlacementSettings" placeholder="optional (top, bottom, left or right)" ngx-create="ToolTipPlacementSettings"></ngx-input> </div> </div> <br> <div class="row"> <div class="col-md-6"><span class="label label-primary">Input Type:</span> <br> <ngx-drop-down-list ngx-instance="listBox" ngx-settings="InputTypeSettings" ng-model="inputType" ngx-create="InputTypeSettings"> </ngx-drop-down-list> </div> <div class="col-md-6" ng-show="inputType == \'input\'"> <span class="label label-primary">Data Input Type \'HTML5\'</span> <br> <ngx-drop-down-list ngx-settings="DataTypeSettings" tooltip="If not selected the input will be text type by default" tooltip-placement="bottom" ngx-create="DataTypeSettings"> </ngx-drop-down-list> </div> <div class="col-md-6" ng-show="inputType == \'grid\'"> <span class="label label-primary">Table ID</span> <br> <ngx-input ngx-settings="NameSettings" tooltip="The ID must be unique or it will over write an existing table" tooltip-placement="bottom" ngx-create="NameSettings"> </ngx-input> </div> </div> <hr> <div class="row" ng-show="inputType == \'input\' || inputType == \'textarea\'\r\n                              || inputType == \'address\'  || inputType == \'state\' || inputType == \'country\' || inputType == \'select\'  || inputType == \'checkbox\'"> <div class="col-md-6"> <span class="label label-primary">Question:</span> <br> <textarea ngx-input ngx-settings="QuestionSettings" ngx-create="QuestionSettings"></textarea> </div> <div class="col-md-6"> <span class="label label-primary">Place Holder:</span> <br> <ngx-input ngx-settings="PlaceHolderSettings" placeholder="optional" ngx-create="PlaceHolderSettings"></ngx-input> </div> </div> <div class="row"> <div class="col-md-12" ng-show="inputType == \'label\' || inputType == \'sub-label\'"> <span class="label label-primary">Label Or Sub-label:</span> <br> <textarea ngx-input ngx-settings="LabelSettings" ngx-create="LabelSettings"></textarea> </div> <div class="col-md-6" ng-show="inputType == \'radio\' || inputType == \'checkbox\'|| inputType == \'image\'"> <span class="label label-primary" ng-show=" inputType == \'radio\' || inputType == \'checkbox\'">Radio/Checkbox Options</span> <span class="label label-primary" ng-show=" inputType == \'image\'">Image Width</span> <br> <textarea ngx-input ngx-settings="DefaultValueSettings" tooltip="Please enter the values with comas e.g. Uno, Dos, Tres" tooltip-placement="bottom" ngx-create="DefaultValueSettings">\r\n                            </textarea> </div> <!-- NEW STUFF *********************************************************************************************************************** --> <div class="col-md-6" ng-show="inputType == \'image\'"> <span class="label label-primary">Image Url:</span> <br> <textarea ngx-input ngx-settings="DataSourceURLSettings" ng-model="imageUrl" ngx-create="DataSourceURLSettings"></textarea> </div> <div class="col-md-6" ng-show="inputType == \'select\'"> <span class="label label-primary">Drop Down Options:</span> <br> <textarea ngx-input ngx-settings="OptionSelectSettings" ngx-create="OptionSelectSettings" placeholder="e.g. Option one, Option two, Option three"></textarea> </div> </div> <div class="row" ng-show="inputType == \'grid\'"> <div class="col-md-6"> <span class="label label-primary">Table Configuration</span> <br> <json-editor schema="mySchema" startval="myStartVal" on-change="onChange()"> </json-editor></div> <div class="col-md-6"> <span class="label label-primary">Table Configuration JSON</span> <br> <textarea ngx-input ngx-settings="GridSettings" ngx-create="GridSettings">\r\n                            </textarea> </div> </div> <div class="row"> <div class="col-md-6" ng-show=" inputType == \'image\'" style="display: block;    margin: 10px auto"> <button ngf-select ng-model="file" class="btn btn-info center-block" ngf-max-size="2MB" style="height: 30; width: 80">Select Image</button> </div> <div class="col-md-6"> <div ng-show=" inputType == \'image\' && file !== undefined" style="display: block;    margin: 10px auto"> <button ng-model="file" class="btn btn-success center-block" ng-click="upload(file)" ngf-max-size="2MB" style="height: 30; width: 80">Upload Image</button> </div> </div> </div> <div class="row"> <div class="col-md-12" ng-show=" inputType == \'image\'" style="display: block;    margin: 10px auto"> <div ng-show=" inputType == \'image\'" style="display: block;    margin: 10px auto"> <img width="300" style="display: block;    margin: 10px auto" ngf-src="file || imageUrl || \'images/thumb.jpg\'"> </div> </div> </div> <hr> <div class="row"> <div class="col-md-12"> <div style="display: block; margin: 10px auto" class="pull-right"> <button type="submit" class="btn btn-success" ng-click="save()" style="height: 30; width: 80">Save</button> <button class="btn btn-danger" ng-click="cancel()" style="margin-left: 5px; height: 30; width: 80">Cancel</button> </div> </div> </div> </div> </div> </div> <!--    </tab> --> <!--  <tab heading="tab 2"> --> <ngx-input ngx-settings="ProjectIdSettings" ngx-create="ProjectIdSettings"></ngx-input> <ngx-input ngx-settings="InputTypeSettings" ngx-create="InputTypeSettings"></ngx-input> <ngx-input ngx-settings="ProjectInputControlIdSettings" ngx-create="ProjectInputControlIdSettings"></ngx-input> <ngx-input ngx-settings="InputControlStatusSettings" ngx-create="InputControlStatusSettings"></ngx-input> <ngx-input ngx-settings="InputSettings" ngx-create="InputSettings"></ngx-input> <ngx-input ngx-settings="InputTypeIdSettings" ngx-create="InputTypeIdSettings"></ngx-input> <ngx-input ngx-settings="ClassSettings" ngx-create="ClassSettings"></ngx-input> <ngx-input ngx-settings="OptionSettings" ngx-create="OptionSettings"></ngx-input> <ngx-input ngx-settings="GroupSettings" ngx-create="GroupSettings"></ngx-input> <ngx-input ngx-settings="ListOrientationSettings" ngx-create="ListOrientationSettings"></ngx-input> <ngx-input ngx-settings="popover_titleSettings" ngx-create="popover_titleSettings"></ngx-input> <ngx-input ngx-settings="popover_placementSettings" ngx-create="popover_placementSettings"></ngx-input> <ngx-input ngx-settings="ColorSettings" ngx-create="ColorSettings"></ngx-input> <ngx-input ngx-settings="CreatedSettings" ngx-create="CreatedSettings"></ngx-input> <ngx-input ngx-settings="CreatedBySettings" ngx-create="CreatedBySettings"></ngx-input> <ngx-input ngx-settings="UpdatedSettings" ngx-create="UpdatedSettings"></ngx-input> <ngx-input ngx-settings="UpdatedBySettings" ngx-create="UpdatedBySettings"></ngx-input> <!-- </tab>\r\n            <tab heading=" tab 3">Long Labeled Justified content</tab>\r\n            <tab heading="tab 4">Long Labeled Justified content</tab>\r\n            <tab heading="tab 5">Long Labeled Justified content</tab>\r\n        </tabset> --> </ngx-window> <!-- END OF EDITING TEMPLATE --> </div>'),a.put("views/project.html",'<p ng-repeat="item in project.awesomeThings">{{item}}</p>'),a.put("views/template.html",'<h1>hello world</h1> <p ng-repeat="item in template.awesomeThings"> {{item}} </p>')}]);