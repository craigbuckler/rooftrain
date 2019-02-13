/*
  service worker
*/

// configuration
'use strict';

const
  domain = '/* @echo rootURL */',
  version = '/* @echo version */',
  CACHE = version + '/* @echo PWAcache */',
  offlineURL = '/* @echo rootpath *//* @echo offlineURL */',
  installFilesEssential = [
    '/* @echo rootpath */',
    '/* @echo rootpath */manifest.json',
    '/* @echo rootpath */css/main.css',
    '/* @echo rootpath */js/main.js',
    '/* @echo rootpath */js/offlinepage.js'
  ].concat(offlineURL),
  installFilesDesirable = [
    '/* @echo imagecdn */f_auto/v1516384857/train/offline',
    '/* @echo imagecdn */f_auto,c_scale,w_50/v1516384857/train/offline'
  ];
