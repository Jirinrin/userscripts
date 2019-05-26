// ==UserScript==
// @name         BandcampEmailDownload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically fills in the 3 fields when email downloading on bandcamp or sth
// @author       You
// @match        https://*.bandcamp.com/album/*
// @match        https://*.bandcamp.com/track/*
// @grant        none
// ==/UserScript==

const EMAIL_FIELD_ID = '#fan_email_address';
const EMAIL_VALUE = 'jiri.ei@hotmail.com';
const COUNTRY_FIELD_ID = '#fan_email_country';
const COUNTRY_VALUE = 'NL';
const POSTALCODE_FIELD_ID = '#fan_email_postalcode';
const POSTALCODE_VALUE = '2641KC';

(function() {
    'use strict';

    document.addEventListener('DOMNodeInserted', () => {
      if (document.querySelector(EMAIL_FIELD_ID)) {
        const emailField = document.querySelector(EMAIL_FIELD_ID);
        const countryField = document.querySelector(COUNTRY_FIELD_ID);
        const postalcodeField = document.querySelector(POSTALCODE_FIELD_ID);

        emailField.value = EMAIL_VALUE;
        countryField.value = COUNTRY_VALUE;
        postalcodeField.value = POSTALCODE_VALUE;
      }
    })
})();