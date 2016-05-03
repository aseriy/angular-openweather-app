#!/bin/bash

SCRIPTS_DIR=`dirname $0`
BASE_DIR=`dirname $SCRIPTS_DIR`
BOWER_DIR=${BASE_DIR}/bower_components
APP_LIB_DIR=${BASE_DIR}/app/lib

# Angular
cp -v ${BOWER_DIR}/angular-animate/angular-animate.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-cookies/angular-cookies.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular/angular.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-loader/angular-loader.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-resource/angular-resource.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-route/angular-route.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-sanitize/angular-sanitize.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-touch/angular-touch.* ${APP_LIB_DIR}/angular
cp -v ${BOWER_DIR}/angular-i18n/*.* ${APP_LIB_DIR}/angular/i18n
cp -v ${BOWER_DIR}/bootstrap/dist/js/bootstrap.* ${APP_LIB_DIR}/bootstrap
cp -v ${BOWER_DIR}/jquery/dist/jquery.* ${APP_LIB_DIR}/jquery
cp -v ${BOWER_DIR}/iso-3166-country-codes-angular/dist/iso-3166-country-codes-angular.min.js \
			${APP_LIB_DIR}/iso-3166-country-codes-angular/iso-3166-country-codes-angular.min.js
cp -v ${BOWER_DIR}/iso-3166-country-codes-angular/dist/iso-3166-country-codes-angular.min.js \
			${APP_LIB_DIR}/iso-3166-country-codes-angular/iso-3166-country-codes-angular.js

