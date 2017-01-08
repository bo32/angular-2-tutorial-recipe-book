import { browser, element, by } from 'protractor';

export class RecipeBookAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('recipe-root h1')).getText();
  }
}
