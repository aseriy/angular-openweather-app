'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('OpenWeather App', function() {

  var urlServer = 'http://localhost:8000';
  var urlApp = urlServer + '/instrumented/app/index.html';

  beforeEach(function() {
    browser.get(urlApp);
  });


  it('should automatically redirect to /forecast when location hash/fragment is empty', function() {
    expect(browser.getCurrentUrl()).toBe(urlApp + '#/forecast');
  });


  describe('Forecast view', function() {

    beforeEach(function() {
      browser.get(urlApp + '#/forecast');
    });

    it('should render forecast when user navigates to /forecast', function() {
      expect(element(by.css('[ng-click="getForecastByLocation(location)"]')).getText()).toBe("Search!");
    });

    it('should map the value of an "instant city forecast" button to the input field', function() {
      let cities =
        element(by.tagName('form')).element(by.css('.btn-group')).all(by.repeater('item in exampleLocations'));
      let location = element(by.model('location'));
      cities.each(function(e) {
        e.click();
        expect(location.getAttribute('value')).toBe(e.getText());
      });
    }, jasmine.DEFAULT_TIMEOUT_INTERVAL * 10);


    it('should render forecast in Paris', function() {
	  let location = element(by.model('location'));
      let searchBtn = element(by.css('[ng-click="getForecastByLocation(location)"]'));
      let weatherData = element(by.css('.weather-data')).all(by.css('.row'));
      let weatherLocation = weatherData.get(0);
      let weatherCity = weatherLocation.element(by.tagName('h3'));

      let weatherCurrent = weatherData.get(1).element(by.css('.panel-body'));
      let weatherForecast = weatherData.get(2);
      let forecastDay1 = weatherForecast.element(by.css('[show-entry="forecast.list[1]"]')).element(by.css('.panel-body'));
      let forecastDay2 = weatherForecast.element(by.css('[show-entry="forecast.list[2]"]')).element(by.css('.panel-body'));
      let forecastDay3 = weatherForecast.element(by.css('[show-entry="forecast.list[3]"]')).element(by.css('.panel-body'));

      location.sendKeys('Paris');
      searchBtn.click();

	  expect(weatherCity.getText()).toBe('Paris, FRANCE Lon: 2.35 Lat: 48.85 Population: 0');

      expect(weatherCurrent.all(by.tagName('p')).get(0).getText()).toBe('9.9°C light rain');
      expect(weatherCurrent.all(by.tagName('p')).get(1).getText()).toBe('light rain ~  High: 9.92°C ~  Low: 4.28°C');

      expect(forecastDay1.all(by.tagName('p')).get(0).getText()).toBe('10.9°C clear sky');
      expect(forecastDay1.all(by.tagName('p')).get(1).getText()).toBe('clear sky ~  High: 12.29°C ~  Low: 1.5°C');

      expect(forecastDay2.all(by.tagName('p')).get(0).getText()).toBe('9.5°C light rain');
      expect(forecastDay2.all(by.tagName('p')).get(1).getText()).toBe('light rain ~  High: 10.7°C ~  Low: 5.75°C');

      expect(forecastDay3.all(by.tagName('p')).get(0).getText()).toBe('8.6°C moderate rain');
      expect(forecastDay3.all(by.tagName('p')).get(1).getText()).toBe('moderate rain ~  High: 10.06°C ~  Low: 6.33°C');

    });

  });

  describe('Wind Conditions view', function() {

    beforeEach(function() {
      browser.get(urlApp + '#/storm');
    });

    it('should render wind conditions when user navigates to /storm', function() {
      expect(element(by.css('[ng-click="getForecastByLocation(location)"]')).getText()).toBe("Search!");
    });

    it('should map the value of an "instant city forecast" button to the input field', function() {
      let cities =
        element(by.tagName('form')).element(by.css('.btn-group')).all(by.repeater('item in exampleLocations'));
      let location = element(by.model('location'));
      cities.each(function(e) {
        e.click();
        expect(location.getAttribute('value')).toBe(e.getText());
      });
    }, jasmine.DEFAULT_TIMEOUT_INTERVAL * 10);

    it('should render forecast in Paris', function() {
	  let location = element(by.model('location'));
      let searchBtn = element(by.css('[ng-click="getForecastByLocation(location)"]'));
      let weatherData = element(by.css('.weather-data')).all(by.css('.row'));
      let weatherLocation = weatherData.get(0);
      let weatherCity = weatherLocation.element(by.tagName('h3'));

      let weatherCurrent = weatherData.get(1).element(by.css('.panel-body'));
      let weatherForecast = weatherData.get(2);
      let forecastDay1 = weatherForecast.element(by.css('[show-entry="forecast.list[1]"]')).element(by.css('.panel-body'));
      let forecastDay2 = weatherForecast.element(by.css('[show-entry="forecast.list[2]"]')).element(by.css('.panel-body'));
      let forecastDay3 = weatherForecast.element(by.css('[show-entry="forecast.list[3]"]')).element(by.css('.panel-body'));

      location.sendKeys('Moscow');
      searchBtn.click();

	  expect(weatherCity.getText()).toBe('Moscow, RUSSIAN FEDERATION Lon: 37.62 Lat: 55.75 Population: 0');

      expect(weatherCurrent.all(by.tagName('p')).get(0).getText()).toBe("Speed: 19.48 km/h (5.41 m/s)\nPressure: 997.82 hPa");
      expect(weatherCurrent.all(by.tagName('p')).get(1).getText()).toBe('-1.8°C snow ~  snow ~  High: -1.83°C ~  Low: -5.77°C');

      expect(forecastDay1.all(by.tagName('p')).get(0).getText())
          .toBe("Speed: 25.81 km/h (7.17 m/s)\nPressure: 1000.78 hPa");
      expect(forecastDay1.all(by.tagName('p')).get(1).getText())
          .toBe('-0.5°C clear sky ~  clear sky ~  High: 0.29°C ~  Low: -8.49°C');

      expect(forecastDay2.all(by.tagName('p')).get(0).getText())
          .toBe("Speed: 16.78 km/h (4.66 m/s)\nPressure: 1005.88 hPa");
      expect(forecastDay2.all(by.tagName('p')).get(1).getText())
          .toBe('-2.5°C broken clouds ~  broken clouds ~  High: -1.37°C ~  Low: -11.59°C');

      expect(forecastDay3.all(by.tagName('p')).get(0).getText())
          .toBe("Speed: 19.62 km/h (5.45 m/s)\nPressure: 1006.67 hPa");
      expect(forecastDay3.all(by.tagName('p')).get(1).getText())
          .toBe('-2.7°C few clouds ~  few clouds ~  High: -1.51°C ~  Low: -9.89°C');

   });

  });

});
