'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('OpenWeather App', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000/instrumented/app/index.html');
  });


  it('should automatically redirect to /forecast when location hash/fragment is empty', function() {
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/instrumented/app/index.html#/forecast');
  });


/*
  describe('Forecast view', function() {

    beforeEach(function() {
      browser().get('#/forecast');
    });

    it('should render forecast when user navigates to /forecast', function() {
      expect(element('[ng-view] form button[type="submit"]').text()).toMatch(/Search!/);
    });

    it('should map the value of an "instant city forecast" button to the input field', function() {
      element('[ng-view] form .btn-group > button:first-child').click();
      expect(element('[ng-view] form input#location').attr('value')).toBe('Hamburg');
    });

  });

  describe('Inspect forecast data for Boston', function() {

    beforeEach(function() {
      browser().navigateTo('#/forecast');
    });

    it('city and country', function() {
      element('[ng-view] form .btn-group > button:first-child').click();
      console.log(element('h3').text());
    });

  });
*/

});
