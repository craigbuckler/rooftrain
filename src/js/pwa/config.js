/*
  service worker
*/

// configuration
'use strict';

const
  domain = '/* @echo rootURL */',
  domaincdn = '/* @echo imagecdn */',
  CACHE = '/* @echo version *//* @echo PWAcache */',
  offlineURL = '/* @echo rootpath *//* @echo offlineURL */',
  installFilesEssential = [
    '/* @echo rootpath */',
    '/* @echo rootpath */manifest.webmanifest',
    '/* @echo rootpath */css/main-/* @echo versionFile */.css',
    '/* @echo rootpath */js/main-/* @echo versionFile */.js',
    '/* @echo rootpath */js/offlinepage-/* @echo versionFile */.js'
  ].concat(offlineURL),
  installFilesDesirable = [
    '/* @echo imagecdn */f_auto/v1516384857/train/offline',
    '/* @echo imagecdn */f_auto,c_scale,w_50/v1516384857/train/offline'
  ];
