function indexPage2(){
  this.AppTitle = function(){
    return browser.getTitle();
  };

  this.AppUrl = function(url) {
      browser.get(url);
  };

  this.AppDisplaysInformation = function(elementTest, typeOfInformation) {
    if (typeOfInformation === 'isPresent'){
      return this.elementFinder(elementTest).isPresent();
    }else if (typeOfInformation === 'isDisplayed'){
      return this.elementFinder(elementTest).isDisplayed();
    }

  };

  this.AppSleep = function(time){
    browser.sleep(time);
  };

  // ************** Finds elements *********************************************************************************************************
  this.elementFinder = function (elementTest){
    var foundElement;
    if(elementTest.id !== undefined){
      foundElement = element(by.id(elementTest.id));
      return foundElement;
    }else if(elementTest.className !== undefined){
      foundElement = element(by.className(elementTest.className));
      return foundElement;
    }else if(elementTest.css !== undefined){
      foundElement = element(by.css(elementTest.css));
      return foundElement;
    }else if(elementTest.binding !== undefined){
      foundElement = element(by.binding(elementTest.binding));
      return foundElement;
    }else if(elementTest.tagName !== undefined){
      foundElement = element(by.tagName(elementTest.tagName));
      return foundElement;
    }else if(elementTest.name !== undefined){
      foundElement = element(by.name(elementTest.name));
      return foundElement;
    }else if(elementTest.model !== undefined){
      foundElement = element(by.model(elementTest.model));
      return foundElement;
    }
  };

  // ************** Sends Information to Intupoxes, TextArea, etc by providing Element to be Found and String or Integer to Send ***********
  this.sendStringToBox = function(elementTest, string){
    var foundElement = this.elementFinder(elementTest);
    foundElement.sendKeys(string);
  };

  // ************** Clicks Element After Finding it ****************************************************************************************
  this.elementClick = function(elementTest){
    this.elementFinder(elementTest).click();
  };

  // ************** Switches to popup and performs an action (accept, cancel, read text from popup or sendskeys for inputbox) **************
  this.switchToPopupString = function(string){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000);
    browser.switchTo().alert().sendKeys(string);
  };

  this.switchToPopup = function(typeOfPopup){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000);
    if(typeOfPopup === 'accept'){
      browser.switchTo().alert().accept();
    }else if(typeOfPopup === 'cancel'){
      browser.switchTo().alert().dismiss();
    }else if(typeOfPopup === 'readText'){
      browser.switchTo().alert().getText();
    }
  };

  // ************** Sends keyboard events **************************************************************************************************
  this.sendKeyBoard = function(typeOfKeyBoard){
    if(typeOfKeyBoard === 'ARROW_UP'){
      browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
    }else if(typeOfKeyBoard === 'ARROW_RIGHT'){
      browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
    }else if(typeOfKeyBoard === 'ARROW_DOWN'){
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    }else if(typeOfKeyBoard === 'ARROW_LEFT'){
      browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
    }else if(typeOfKeyBoard === 'ESCAPE'){
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }else if(typeOfKeyBoard === 'ENTER'){
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
  };

  // ************** Hover over an element and performs all sorted actions ******************************************************************
  this.moveMouseToElement = function(elementTest){
    browser.actions().mouseMove(elementTest).perform();
  };

  // ************** Obtains Text from inputbox, label, button, etc *************************************************************************

  this.obtainText = function (elementTest){
    return  this.elementFinder(elementTest).getText();
  };

  // ************** General functions ******************************************************************************************************

}//end of the function

module.exports = indexPage2;
