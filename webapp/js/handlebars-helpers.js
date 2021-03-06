/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 © NVISIA, LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * jgitter 1-24-2014
 */
 (function() {
    "use strict";

    Ember.Handlebars.helper('showPrice', function(price) {
        var index, out = "";
        for (index = 1; index <= price; index++) {
            out += "$";
        }

        return out;
    });

    Ember.Handlebars.helper('showRating', function(rating) {
        var index, out = "";
        for (index = 1; index <= Math.round(rating / 20); index++) {
            out += "*";
        }

        return out;
    });

    Ember.Handlebars.helper('showTime', function(millis) {
        var date = new Date(1 * millis);
        var str = date.toLocaleTimeString("en-US");
        var arr = str.split(/[ :]/);
        return arr[0] + ":" + arr[1] + " " + arr[arr.length - 1];
    });
})();
