/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-image: url(https://hotelsvillasdirect.com/wp-content/uploads/121219219_0.jpg); }\n\nh3 {\n  text-align: center; }\n\n*::-webkit-scrollbar-track {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); }\n\n*::-webkit-scrollbar {\n  background: #ffffff;\n  width: 12px; }\n\n*::-webkit-scrollbar-thumb {\n  background-color: #ffffff;\n  border-radius: 10px; }\n\n.avaiable-room {\n  position: relative;\n  margin: 20px;\n  height: 300px;\n  width: 250px;\n  border: #ffffff 1px solid;\n  background-color: #96e9e9;\n  opacity: .9;\n  box-shadow: 3px 3px 10px #000000; }\n\n#avaiable-rooms-date {\n  cursor: pointer; }\n\n.avaiable-results {\n  overflow-y: scroll;\n  height: 470px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.book-room {\n  cursor: pointer; }\n\n.booking-section {\n  height: 100%;\n  width: 40%; }\n  .booking-section .total-revenue {\n    text-align: center;\n    margin: 1.5vw;\n    padding: 5px;\n    background-color: #DEB99287;\n    box-shadow: 0px 0px 10px #ffffff; }\n  .booking-section .hotel-percent-occupied {\n    text-align: center;\n    margin: 1vw;\n    padding: 5px;\n    background-color: #DEB99287;\n    box-shadow: 0px 0px 10px #ffffff; }\n  .booking-section .avaiable-bookings {\n    text-align: center;\n    margin: 1vw; }\n\n.booking-card {\n  background: #8ceaea;\n  opacity: .9;\n  padding: 10px 20px;\n  margin: 30px;\n  box-shadow: 3px 3px 10px #000000; }\n\n.container {\n  text-align: center;\n  padding: 16px; }\n\n.customer-dashboard {\n  display: flex;\n  justify-content: space-around;\n  margin: 5vw;\n  background-color: rgba(255, 255, 255, 0.6); }\n\n#date-input, .cancel-room, .login-button, .search-avaiable-rooms, .search-button, .search-customer-bookings {\n  cursor: pointer; }\n\nform {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.hidden {\n  display: none !important; }\n\nimg.avatar {\n  width: 30%;\n  border-radius: 50%; }\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0; }\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\n.landing {\n  display: flex;\n  justify-content: center;\n  font-family: 'Pacifico', cursive;\n  font-size: 40px;\n  color: #ffffff;\n  text-shadow: 1px 1px #8ceaea; }\n\n.login-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.manager-dashboard {\n  display: flex;\n  justify-content: space-around;\n  margin: 5vw;\n  background-color: rgba(255, 255, 255, 0.6); }\n\n#room-image {\n  cursor: pointer;\n  top: 0px;\n  height: 175px;\n  width: 250px; }\n\n#room-image-name-card {\n  background: #8ceaea;\n  opacity: .9;\n  cursor: pointer;\n  top: 162px;\n  margin: 5px;\n  align-items: center; }\n\n.room-image-price {\n  cursor: pointer;\n  font-size: 14px;\n  font-style: italic;\n  margin: 10px;\n  width: 220px; }\n\n.search-section {\n  width: 60%;\n  margin: 1vw; }\n  .search-section .search-results {\n    overflow-y: scroll;\n    height: 600px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center; }\n\n.spending-results {\n  text-align: center; }\n\n.user-bookings {\n  overflow-y: scroll;\n  height: 500px;\n  text-align: center; }\n\n.user-results {\n  overflow-y: scroll;\n  height: 695px; }\n\n.user-spending {\n  text-align: center;\n  margin: 1vw;\n  padding: 5px;\n  background-color: #DEB99287;\n  box-shadow: 0px 0px 10px #ffffff; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");

class Customer extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(roomData, bookingData, userData, userDetails) {
    super(roomData, bookingData, userData);
    this.id = userDetails.id;
    this.name = userDetails.name;
  }
  filterByRoomType(roomType, roomsArray) {
    const filteredRooms = roomsArray.filter(room => room.roomType === roomType);
    return filteredRooms;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Customer);


/***/ }),

/***/ "./src/DOM-updates.js":
/*!****************************!*\
  !*** ./src/DOM-updates.js ***!
  \****************************/
/*! exports provided: domUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domUpdates", function() { return domUpdates; });
let domUpdates = {
  displayManagerLogin(manager) {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.manager-dashboard').classList.remove('hidden');
    domUpdates.displayCalculatedRevenue(manager);
    domUpdates.displayedPercentOccupied(manager);
  },
  displayCalculatedRevenue(manager) {
    let date = domUpdates.getTodaysDate();
    document.querySelector('.revenue-today').innerText = `$${manager.calculateDailyRevenue(date)}`;
  },
  displayedPercentOccupied(manager) {
    let date = domUpdates.getTodaysDate();
    document.querySelector('.percent-occupied').innerText = `${manager.getPercentOccupied(date)}%`;
  },
  getTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    return today;
  },
  compareDates(date) {
    let today = domUpdates.getTodaysDate();
    if(today > date) {
    return true;
    } else {
    return false;
    }
  },
  createRoomBlocks(room, date) {
    const roomBlock =
    `<div class="avaiable-room">
      <img id="room-image" src='http://i2.cdn.cnn.com/cnnnext/dam/assets/130212160829-romantic-hotel-rooms-sandals-st-lucia-view-horizontal-large-gallery.jpg' alt="Room">
      <h3 id="room-image-name-card">${room.roomType} #${room.number}</h3>
      <p class="room-image-price">This room has ${room.numBeds} ${room.bedSize} beds. The price of this room is $${room.costPerNight} per night.</p>
      <button id=${room.number} class="book-room" type="button">Book Room</button>
    </div>`
    return roomBlock;
  },
  createBookingCards(booking, roomData) {
    let currentRoom = roomData.find(room => booking.roomNumber === room.number)
    if (!currentRoom) return;
    var bookingCard = `
    <div class="booking-card">
      <div>
        <p>Booking on ${booking.date}.</p>
        <p> ${currentRoom.roomType} with ${currentRoom.numBeds} ${currentRoom.bedSize} at a price of $${currentRoom.costPerNight} per night.</p>
        <button id=${currentRoom.number} value="${booking.date}" class="cancel-room" type="button">Cancel Booking</button>
      </div>
    </div>
    `;
    return bookingCard;
  },
  updateSearchResultsCount(resultsCount) {
    document.querySelector('.results-count').innerText = `${resultsCount} Results`;
  },
  updateCustomerSpending(customer) {
    let customerData = customer.getUserBookings(customer.id);
    customer.calculateTotalAmountSpent(customerData);
    document.querySelector('.customer-spending').innerText = `$${customer.totalSpent}`;
  },
  updateSpendingResultsCounter(customer) {
    let customerData = customer.getUserBookings(customer.id);
    customer.calculateTotalAmountSpent(customerData);
    document.querySelector('.spending-results').innerText = `${customer.name} has spent $${customer.totalSpent}.`
  }
}




/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");

class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(roomData, bookingData, userData) {
    super(roomData, bookingData, userData);
  }
  searchUsers(userName) {
    let user = this.userData.find(user => user.name === userName)
    let usersData = this.bookings.filter(booking => booking.userID === user.id);
    return usersData;
  }
  getPercentOccupied(date) {
    let roomsAvilable = this.searchAvailibility(date);
    let amount = (this.bookings.length - roomsAvilable.length) / this.bookings.length;
    return (amount * 100).toFixed(2);
  }
  calculateDailyRevenue(date) {
    let bookedRoomNumbers = this.findBookedRooms(date);
    let bookedRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
    let revenue = bookedRooms.reduce((totalReveune, room) => {
      totalReveune += room.costPerNight;
      return totalReveune;
    }, 0);
    return revenue.toFixed(2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Manager);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/fetchAPI.js");


class User {
  constructor(roomData, bookingData, userData) {
    this.bookings = bookingData;
    this.rooms = roomData;
    this.totalSpent = 0;
    this.userData = userData;
  }
  searchAvailibility(date) {
    let formattedDate = date.split(/[-]+/).join('/');
    let bookedRoomNumbers = this.bookings.reduce((bookingNumbers, booking) => {
      if (booking.date === formattedDate) {
        bookingNumbers.push(booking.roomNumber)
      }
      return bookingNumbers;
    }, []);
   let searchResults = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
   return searchResults;
  }
  findBookedRooms(date) {
    let formattedDate = date.split(/[-]+/).join('/');
    let bookedBookings = this.bookings.reduce((totalBookings, booking) => {
      booking.date === formattedDate ? totalBookings.push(booking) : null;
      return totalBookings;
    }, []);
    return bookedBookings;
  }
  calculateTotalAmountSpent(bookingData) {
    this.totalSpent = bookingData.reduce((totalSpent, booking) => {
      this.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          totalSpent += room.costPerNight;
        }
      });
      return totalSpent;
    }, 0);
    this.totalSpent = (this.totalSpent).toFixed(2)
  }
  getUserBookings(userID) {
    let userBookings = this.bookings.filter(booking => booking.userID === userID);
    return userBookings;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/fetchAPI.js":
/*!*************************!*\
  !*** ./src/fetchAPI.js ***!
  \*************************/
/*! exports provided: fetchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApi", function() { return fetchApi; });
let fetchApi = {
  fetchUserData() {
    let fetchedUsers = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error.message));
      return fetchedUsers;
  },
  fetchRoomData() {
    let fetchedRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log(error.message));
    return fetchedRooms;
  },
  fetchBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log(error.message));
  },
  deleteBookingData(booking, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(booking)
      })
      .then(response => response.json())
      .then(response => onSuccess())
      .catch(error => console.log(error.message))
  },
  postBookingData(roomNumber, userID, formattedDate, onSuccess) {
    let newBooking = fetchApi.buildBookingData(roomNumber, userID, formattedDate);
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBooking)
      })
      .then(response => response.json())
      .then(respone => onSuccess())
      .catch(error => console.log(error.message))
  },
  buildBookingData(roomNumber, userID, formattedDate) {
    let bookingObject = {
      userID : userID,
      date : formattedDate,
      roomNumber : roomNumber
    };
    return bookingObject;
  }
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchAPI */ "./src/fetchAPI.js");
/* harmony import */ var _DOM_updates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM-updates */ "./src/DOM-updates.js");








let userData;
let roomData;
let bookingData;
let customer;
let manager;
let fetchedBookingData;

function reAssignData() {
  const fetchedUserData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchUserData();
  const fetchedRoomData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchRoomData();
  fetchedBookingData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchBookingData();
  Promise.all([fetchedUserData, fetchedRoomData, fetchedBookingData]).then(values => {
    userData = values[0];
    roomData = values[1];
    bookingData = values[2];
  })
}

const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.login-button');
const searchButton = document.querySelector('.search-button');
const singleRoomOption = document.querySelector('.single-room');
const suiteOption = document.querySelector('.suite');
const juniorSuiteOption = document.querySelector('.junior-suite');
const resSuiteOption = document.querySelector('.residential-suite');
const searchResults = document.querySelector('.search-results');
const searchUserBookingsButton = document.querySelector('.search-customer-bookings');
const searchAvailableRoomsButton = document.querySelector('.search-avaiable-rooms');

window.onload = () => {
  reAssignData();
}
loginButton.addEventListener('click', checkLogin);
///// Customer Controls /////
searchButton.addEventListener('click', checkInputs);

///// Manager Controls /////
searchAvailableRoomsButton.addEventListener('click', displayAvaiableRooms);
searchUserBookingsButton.addEventListener('click', displaySearchedCustomer);

function checkLogin() {
  if (userNameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    instantiateManager();
    _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].displayManagerLogin(manager);
  } else if (userNameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let user = getUserFromLogin(userNameInput.value);
    instantiateCustomer(user);
    customerDisplayLogin();
  } else {
    alert('You have enterd an incorrect username or password!')
  }
}

function getUserFromLogin(userInput) {
  let splitUserName = userInput.split('customer');
  let userID = parseInt(splitUserName[1]);
  return userData.find(user => user.id === userID);
}

////////////////////////CUSTOMER LOGIN/////////////////////////////////

function instantiateCustomer(user) {
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](roomData, bookingData, userData, user);
  _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].updateCustomerSpending(customer);
}

function customerDisplayLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.customer-dashboard').classList.remove('hidden');
  document.querySelector('.welcome').innerText = `Welcome ${customer.name}, to the Hotel California!`
  searchResults.innerHTML = "<h4> Please select a room type and a future date to search available bookings!</h4>";
  customerBookingsDisplay();
}

function customerBookingsDisplay() {
  let customerBookings = customer.getUserBookings(customer.id)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].createBookingCards(booking, roomData));
  });
  addCancelRoomsEventListener();
}

function checkInputs() {
  let date = document.getElementById('date-input').value;
  let dateSearchResults = customer.searchAvailibility(date);
  let filterResults = getFilterResults(dateSearchResults);
  if(filterResults.length === 0) {
    alert("We are so so sorry there are no rooms avaiable for that date & room type!")
    return;
  }
  buildSearchResults(filterResults, date);
}

function getFilterResults(dateSearchResults) {
  if (singleRoomOption.selected) {
    return customer.filterByRoomType("single room", dateSearchResults);
  } else if (suiteOption.selected) {
    return customer.filterByRoomType("suite", dateSearchResults);
  } else if (juniorSuiteOption.selected) {
    return customer.filterByRoomType("junior suite", dateSearchResults);
  } else if (resSuiteOption.selected) {
    return customer.filterByRoomType("residential suite", dateSearchResults);
  }
}

function buildSearchResults(filterResults, date) {
  searchResults.innerText = "";
  filterResults.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].createRoomBlocks(room, date));
  });
  _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].updateSearchResultsCount(filterResults.length);
  addBookedRoomsEventListener();
}

////////////////////////////////MANAGER LOGIN////////////////////////////////

function instantiateManager() {
  manager = new _Manager__WEBPACK_IMPORTED_MODULE_3__["default"](roomData, bookingData, userData);
  return manager;
}

function getCusomterInfo(elementID) {
  let customerName = document.getElementById(elementID).value;
  let formattedCustomerName = formatCustomerName(customerName);
  let customer = userData.find(user => user.name === formattedCustomerName);
  return customer;
}

function formatCustomerName(customerName) {
  let words = customerName.split(" ")
  let firstName = words[0][0].toUpperCase() + words[0].substring(1);
  let lastName = words[1][0].toUpperCase() + words[1].substring(1);
  let formattedName = firstName.concat(" " + lastName);
  return formattedName;
}

function displaySearchedCustomer() {
  document.querySelector('.user-results').innerHTML = "";
  let user = getCusomterInfo('customer-name');
  if (userData.includes(user)) {
    customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](roomData, bookingData, userData, user)
    _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].updateSpendingResultsCounter(customer);
    displayCustomerBookings();
  } else {
    document.querySelector('.user-results').innerHTML = "";
    alert('Customer infomation not found.')
  }
}

function displayAvaiableRooms() {
  document.querySelector('.avaiable-results').innerHTML = "";
  let user = getCusomterInfo('customer-name-avaiable');
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](roomData, bookingData, userData, user)
  let date = document.getElementById('avaiable-rooms-date').value;
  let formattedDate = date.split(/[-]+/).join('/');
  if(_DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].compareDates(formattedDate)) {
    alert("No avaiable bookings in the past.");
    return;
  }
  createAvailableRooms(date);
}

function createAvailableRooms(date) {
  let avaibleRooms = manager.searchAvailibility(date);
  avaibleRooms.forEach((room) => {
    document.querySelector('.avaiable-results').insertAdjacentHTML('beforeend', _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].createRoomBlocks(room, date));
  });
  addBookedRoomsEventListener();
}

////////////////////////////////BOOK & CANCEL ROOMS////////////////////////////////

function bookARoom(e) {
  let roomNumber = parseInt(e.target.id);
  let userID = customer.id;
  let onCustomerSuccess = () => {
    updateBookingData();
  }
  let onManagerSuccess = () => {
    updateAvaiableRooms()
  }
  checkWhatToBook(roomNumber, userID, onCustomerSuccess, onManagerSuccess)
}

function checkWhatToBook(roomNumber, userID, onCustomerSuccess, onManagerSuccess) {
  if(!manager) {
    let date = getCorrectDate('date-input');
    if(_DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].compareDates(date)) {
      alert("You cannot cancel a booking from the past");
      return;
    }
    _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].postBookingData(roomNumber, userID, date, onCustomerSuccess);
    alert("You've successfuly booked a room!")
  } else {
    let date = getCorrectDate('avaiable-rooms-date');
    _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].postBookingData(roomNumber, userID, date, onManagerSuccess);
    alert("You've successfuly booked a room!")
  }
}

function getCorrectDate(elementID) {
  let date = document.getElementById(elementID).value;
  let formattedDate = date.split(/[-]+/).join('/');
  return formattedDate;
}

function updateBookingData() {
 fetchedBookingData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchBookingData();
 fetchedBookingData.then(value => {
   bookingData = value
  })
  .then(() => displayUpdatedCustomerBookings())
  .catch(error => console.log(error.message))
}

function displayUpdatedCustomerBookings() {
  document.querySelector('.user-bookings').innerHTML = ""
  customer.bookings = bookingData;
  _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].updateCustomerSpending(customer);
  customerBookingsDisplay();
}

function updateAvaiableRooms() {
  fetchedBookingData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchBookingData();
  fetchedBookingData.then(value => {
   bookingData = value
  })
  .then(() => displayUpdatedAvaiableRooms())
  .catch(error => console.log(error.message))
}

function displayUpdatedAvaiableRooms() {
  document.querySelector('.avaiable-results').innerHTML = "";
  customer.bookings = bookingData;
  displayUpdatedSearchedCustomer();
  displayAvaiableRooms();
}

function displayUpdatedSearchedCustomer() {
  document.querySelector('.user-results').innerHTML = "";
  customer.bookings = bookingData;
  _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].updateSpendingResultsCounter(customer);
  displayCustomerBookings();
}

function displayCustomerBookings() {
  let customerBookings = customer.getUserBookings(customer.id);
  customerBookings.forEach((booking) => {
    document.querySelector('.user-results').insertAdjacentHTML('beforeend', _DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].createBookingCards(booking, roomData));
  });
  addCancelRoomsEventListener();
}

function cancelARoom(e) {
  let roomNumber = parseInt(e.target.id);
  let userID = customer.id;
  let date = e.target.value;
  if(_DOM_updates__WEBPACK_IMPORTED_MODULE_5__["domUpdates"].compareDates(date)) {
    alert("You cannot cancel a booking from the past");
    return;
  }
  let booking = getBookingData(date, roomNumber, userID);
  checkWhatToCancel(booking);
  alert("You've successfuly canceled a room!")
}

function getBookingData(date, roomNumber, userID) {
  let formattedDate = date.split(/[-]+/).join('/');
  let booking = bookingData.find(booking => booking.roomNumber === roomNumber && booking.userID === userID && booking.date === formattedDate);
  return booking;
}

function checkWhatToCancel(booking) {
  let onCustomerSuccess = () => {
    updateBookingData();
  }
  let onManagerSuccess = () => {
    updateManagerSearchResults();
  }
  if(!manager) {
    _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].deleteBookingData(booking, onCustomerSuccess);
  } else {
    _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].deleteBookingData(booking, onManagerSuccess);
  }
}

function updateManagerSearchResults() {
  fetchedBookingData = _fetchAPI__WEBPACK_IMPORTED_MODULE_4__["fetchApi"].fetchBookingData();
  fetchedBookingData.then(value => {
   bookingData = value
   })
   .then(() => displayUpdatedSearchedCustomer())
   .catch(error => console.log(error.message))
}

function addBookedRoomsEventListener() {
  let bookRoomButtons = document.getElementsByClassName('book-room');
  for(let i=0; i < bookRoomButtons.length; i++) {
    bookRoomButtons[i].addEventListener('click', bookARoom);
  }
}

function addCancelRoomsEventListener() {
  let cancelRoomButtons = document.getElementsByClassName('cancel-room');
  for(let i=0; i < cancelRoomButtons.length; i++) {
    cancelRoomButtons[i].addEventListener('click', cancelARoom);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2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QUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxrREFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGtEQUFRO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtEQUFRO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsdURBQVU7QUFDdEYsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVEQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLEdBQUc7QUFDSCxJQUFJLGtEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBUTtBQUMvQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9ob3RlbHN2aWxsYXNkaXJlY3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8xMjEyMTkyMTlfMC5qcGcpOyB9XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDEycHg7IH1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcblxcbi5hdmFpYWJsZS1yb29tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXI6ICNmZmZmZmYgMXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZTllOTtcXG4gIG9wYWNpdHk6IC45O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICMwMDAwMDA7IH1cXG5cXG4jYXZhaWFibGUtcm9vbXMtZGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYXZhaWFibGUtcmVzdWx0cyB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDQ3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJvb2stcm9vbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYm9va2luZy1zZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA0MCU7IH1cXG4gIC5ib29raW5nLXNlY3Rpb24gLnRvdGFsLXJldmVudWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS41dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFQjk5Mjg3O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmZmZmZjsgfVxcbiAgLmJvb2tpbmctc2VjdGlvbiAuaG90ZWwtcGVyY2VudC1vY2N1cGllZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxdnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFQjk5Mjg3O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmZmZmZjsgfVxcbiAgLmJvb2tpbmctc2VjdGlvbiAuYXZhaWFibGUtYm9va2luZ3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXZ3OyB9XFxuXFxuLmJvb2tpbmctY2FyZCB7XFxuICBiYWNrZ3JvdW5kOiAjOGNlYWVhO1xcbiAgb3BhY2l0eTogLjk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzAwMDAwMDsgfVxcblxcbi5jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDsgfVxcblxcbi5jdXN0b21lci1kYXNoYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiA1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7IH1cXG5cXG4jZGF0ZS1pbnB1dCwgLmNhbmNlbC1yb29tLCAubG9naW4tYnV0dG9uLCAuc2VhcmNoLWF2YWlhYmxlLXJvb21zLCAuc2VhcmNoLWJ1dHRvbiwgLnNlYXJjaC1jdXN0b21lci1ib29raW5ncyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuaW1nLmF2YXRhciB7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuXFxuLmltZ2NvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7IH1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5sYW5kaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjOGNlYWVhOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5tYW5hZ2VyLWRhc2hib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTsgfVxcblxcbiNyb29tLWltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMHB4O1xcbiAgaGVpZ2h0OiAxNzVweDtcXG4gIHdpZHRoOiAyNTBweDsgfVxcblxcbiNyb29tLWltYWdlLW5hbWUtY2FyZCB7XFxuICBiYWNrZ3JvdW5kOiAjOGNlYWVhO1xcbiAgb3BhY2l0eTogLjk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDE2MnB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnJvb20taW1hZ2UtcHJpY2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgd2lkdGg6IDIyMHB4OyB9XFxuXFxuLnNlYXJjaC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDF2dzsgfVxcbiAgLnNlYXJjaC1zZWN0aW9uIC5zZWFyY2gtcmVzdWx0cyB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5zcGVuZGluZy1yZXN1bHRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi51c2VyLWJvb2tpbmdzIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udXNlci1yZXN1bHRzIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogNjk1cHg7IH1cXG5cXG4udXNlci1zcGVuZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDF2dztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERUI5OTI4NztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmZmZmZmOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcihyb29tRGF0YSwgYm9va2luZ0RhdGEsIHVzZXJEYXRhLCB1c2VyRGV0YWlscykge1xuICAgIHN1cGVyKHJvb21EYXRhLCBib29raW5nRGF0YSwgdXNlckRhdGEpO1xuICAgIHRoaXMuaWQgPSB1c2VyRGV0YWlscy5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyRGV0YWlscy5uYW1lO1xuICB9XG4gIGZpbHRlckJ5Um9vbVR5cGUocm9vbVR5cGUsIHJvb21zQXJyYXkpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFJvb21zID0gcm9vbXNBcnJheS5maWx0ZXIocm9vbSA9PiByb29tLnJvb21UeXBlID09PSByb29tVHlwZSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUm9vbXM7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyO1xuIiwibGV0IGRvbVVwZGF0ZXMgPSB7XG4gIGRpc3BsYXlNYW5hZ2VyTG9naW4obWFuYWdlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItZGFzaGJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FsY3VsYXRlZFJldmVudWUobWFuYWdlcik7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5ZWRQZXJjZW50T2NjdXBpZWQobWFuYWdlcik7XG4gIH0sXG4gIGRpc3BsYXlDYWxjdWxhdGVkUmV2ZW51ZShtYW5hZ2VyKSB7XG4gICAgbGV0IGRhdGUgPSBkb21VcGRhdGVzLmdldFRvZGF5c0RhdGUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2ZW51ZS10b2RheScpLmlubmVyVGV4dCA9IGAkJHttYW5hZ2VyLmNhbGN1bGF0ZURhaWx5UmV2ZW51ZShkYXRlKX1gO1xuICB9LFxuICBkaXNwbGF5ZWRQZXJjZW50T2NjdXBpZWQobWFuYWdlcikge1xuICAgIGxldCBkYXRlID0gZG9tVXBkYXRlcy5nZXRUb2RheXNEYXRlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcmNlbnQtb2NjdXBpZWQnKS5pbm5lclRleHQgPSBgJHttYW5hZ2VyLmdldFBlcmNlbnRPY2N1cGllZChkYXRlKX0lYDtcbiAgfSxcbiAgZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICB0b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkO1xuICAgIHJldHVybiB0b2RheTtcbiAgfSxcbiAgY29tcGFyZURhdGVzKGRhdGUpIHtcbiAgICBsZXQgdG9kYXkgPSBkb21VcGRhdGVzLmdldFRvZGF5c0RhdGUoKTtcbiAgICBpZih0b2RheSA+IGRhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZVJvb21CbG9ja3Mocm9vbSwgZGF0ZSkge1xuICAgIGNvbnN0IHJvb21CbG9jayA9XG4gICAgYDxkaXYgY2xhc3M9XCJhdmFpYWJsZS1yb29tXCI+XG4gICAgICA8aW1nIGlkPVwicm9vbS1pbWFnZVwiIHNyYz0naHR0cDovL2kyLmNkbi5jbm4uY29tL2Nubm5leHQvZGFtL2Fzc2V0cy8xMzAyMTIxNjA4Mjktcm9tYW50aWMtaG90ZWwtcm9vbXMtc2FuZGFscy1zdC1sdWNpYS12aWV3LWhvcml6b250YWwtbGFyZ2UtZ2FsbGVyeS5qcGcnIGFsdD1cIlJvb21cIj5cbiAgICAgIDxoMyBpZD1cInJvb20taW1hZ2UtbmFtZS1jYXJkXCI+JHtyb29tLnJvb21UeXBlfSAjJHtyb29tLm51bWJlcn08L2gzPlxuICAgICAgPHAgY2xhc3M9XCJyb29tLWltYWdlLXByaWNlXCI+VGhpcyByb29tIGhhcyAke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemV9IGJlZHMuIFRoZSBwcmljZSBvZiB0aGlzIHJvb20gaXMgJCR7cm9vbS5jb3N0UGVyTmlnaHR9IHBlciBuaWdodC48L3A+XG4gICAgICA8YnV0dG9uIGlkPSR7cm9vbS5udW1iZXJ9IGNsYXNzPVwiYm9vay1yb29tXCIgdHlwZT1cImJ1dHRvblwiPkJvb2sgUm9vbTwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgICByZXR1cm4gcm9vbUJsb2NrO1xuICB9LFxuICBjcmVhdGVCb29raW5nQ2FyZHMoYm9va2luZywgcm9vbURhdGEpIHtcbiAgICBsZXQgY3VycmVudFJvb20gPSByb29tRGF0YS5maW5kKHJvb20gPT4gYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcilcbiAgICBpZiAoIWN1cnJlbnRSb29tKSByZXR1cm47XG4gICAgdmFyIGJvb2tpbmdDYXJkID0gYFxuICAgIDxkaXYgY2xhc3M9XCJib29raW5nLWNhcmRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkJvb2tpbmcgb24gJHtib29raW5nLmRhdGV9LjwvcD5cbiAgICAgICAgPHA+ICR7Y3VycmVudFJvb20ucm9vbVR5cGV9IHdpdGggJHtjdXJyZW50Um9vbS5udW1CZWRzfSAke2N1cnJlbnRSb29tLmJlZFNpemV9IGF0IGEgcHJpY2Ugb2YgJCR7Y3VycmVudFJvb20uY29zdFBlck5pZ2h0fSBwZXIgbmlnaHQuPC9wPlxuICAgICAgICA8YnV0dG9uIGlkPSR7Y3VycmVudFJvb20ubnVtYmVyfSB2YWx1ZT1cIiR7Ym9va2luZy5kYXRlfVwiIGNsYXNzPVwiY2FuY2VsLXJvb21cIiB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsIEJvb2tpbmc8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuIGJvb2tpbmdDYXJkO1xuICB9LFxuICB1cGRhdGVTZWFyY2hSZXN1bHRzQ291bnQocmVzdWx0c0NvdW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtY291bnQnKS5pbm5lclRleHQgPSBgJHtyZXN1bHRzQ291bnR9IFJlc3VsdHNgO1xuICB9LFxuICB1cGRhdGVDdXN0b21lclNwZW5kaW5nKGN1c3RvbWVyKSB7XG4gICAgbGV0IGN1c3RvbWVyRGF0YSA9IGN1c3RvbWVyLmdldFVzZXJCb29raW5ncyhjdXN0b21lci5pZCk7XG4gICAgY3VzdG9tZXIuY2FsY3VsYXRlVG90YWxBbW91bnRTcGVudChjdXN0b21lckRhdGEpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1zcGVuZGluZycpLmlubmVyVGV4dCA9IGAkJHtjdXN0b21lci50b3RhbFNwZW50fWA7XG4gIH0sXG4gIHVwZGF0ZVNwZW5kaW5nUmVzdWx0c0NvdW50ZXIoY3VzdG9tZXIpIHtcbiAgICBsZXQgY3VzdG9tZXJEYXRhID0gY3VzdG9tZXIuZ2V0VXNlckJvb2tpbmdzKGN1c3RvbWVyLmlkKTtcbiAgICBjdXN0b21lci5jYWxjdWxhdGVUb3RhbEFtb3VudFNwZW50KGN1c3RvbWVyRGF0YSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZW5kaW5nLXJlc3VsdHMnKS5pbm5lclRleHQgPSBgJHtjdXN0b21lci5uYW1lfSBoYXMgc3BlbnQgJCR7Y3VzdG9tZXIudG90YWxTcGVudH0uYFxuICB9XG59XG5cbmV4cG9ydCB7ZG9tVXBkYXRlc307XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcihyb29tRGF0YSwgYm9va2luZ0RhdGEsIHVzZXJEYXRhKSB7XG4gICAgc3VwZXIocm9vbURhdGEsIGJvb2tpbmdEYXRhLCB1c2VyRGF0YSk7XG4gIH1cbiAgc2VhcmNoVXNlcnModXNlck5hbWUpIHtcbiAgICBsZXQgdXNlciA9IHRoaXMudXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gdXNlck5hbWUpXG4gICAgbGV0IHVzZXJzRGF0YSA9IHRoaXMuYm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4gYm9va2luZy51c2VySUQgPT09IHVzZXIuaWQpO1xuICAgIHJldHVybiB1c2Vyc0RhdGE7XG4gIH1cbiAgZ2V0UGVyY2VudE9jY3VwaWVkKGRhdGUpIHtcbiAgICBsZXQgcm9vbXNBdmlsYWJsZSA9IHRoaXMuc2VhcmNoQXZhaWxpYmlsaXR5KGRhdGUpO1xuICAgIGxldCBhbW91bnQgPSAodGhpcy5ib29raW5ncy5sZW5ndGggLSByb29tc0F2aWxhYmxlLmxlbmd0aCkgLyB0aGlzLmJvb2tpbmdzLmxlbmd0aDtcbiAgICByZXR1cm4gKGFtb3VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgfVxuICBjYWxjdWxhdGVEYWlseVJldmVudWUoZGF0ZSkge1xuICAgIGxldCBib29rZWRSb29tTnVtYmVycyA9IHRoaXMuZmluZEJvb2tlZFJvb21zKGRhdGUpO1xuICAgIGxldCBib29rZWRSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKHJvb20gPT4gIWJvb2tlZFJvb21OdW1iZXJzLmluY2x1ZGVzKHJvb20ubnVtYmVyKSk7XG4gICAgbGV0IHJldmVudWUgPSBib29rZWRSb29tcy5yZWR1Y2UoKHRvdGFsUmV2ZXVuZSwgcm9vbSkgPT4ge1xuICAgICAgdG90YWxSZXZldW5lICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgcmV0dXJuIHRvdGFsUmV2ZXVuZTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gcmV2ZW51ZS50b0ZpeGVkKDIpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjtcbiIsImltcG9ydCB7ZmV0Y2hBcGl9IGZyb20gJy4vZmV0Y2hBUEknO1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3Iocm9vbURhdGEsIGJvb2tpbmdEYXRhLCB1c2VyRGF0YSkge1xuICAgIHRoaXMuYm9va2luZ3MgPSBib29raW5nRGF0YTtcbiAgICB0aGlzLnJvb21zID0gcm9vbURhdGE7XG4gICAgdGhpcy50b3RhbFNwZW50ID0gMDtcbiAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gIH1cbiAgc2VhcmNoQXZhaWxpYmlsaXR5KGRhdGUpIHtcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGUuc3BsaXQoL1stXSsvKS5qb2luKCcvJyk7XG4gICAgbGV0IGJvb2tlZFJvb21OdW1iZXJzID0gdGhpcy5ib29raW5ncy5yZWR1Y2UoKGJvb2tpbmdOdW1iZXJzLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSBmb3JtYXR0ZWREYXRlKSB7XG4gICAgICAgIGJvb2tpbmdOdW1iZXJzLnB1c2goYm9va2luZy5yb29tTnVtYmVyKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2tpbmdOdW1iZXJzO1xuICAgIH0sIFtdKTtcbiAgIGxldCBzZWFyY2hSZXN1bHRzID0gdGhpcy5yb29tcy5maWx0ZXIocm9vbSA9PiAhYm9va2VkUm9vbU51bWJlcnMuaW5jbHVkZXMocm9vbS5udW1iZXIpKTtcbiAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICB9XG4gIGZpbmRCb29rZWRSb29tcyhkYXRlKSB7XG4gICAgbGV0IGZvcm1hdHRlZERhdGUgPSBkYXRlLnNwbGl0KC9bLV0rLykuam9pbignLycpO1xuICAgIGxldCBib29rZWRCb29raW5ncyA9IHRoaXMuYm9va2luZ3MucmVkdWNlKCh0b3RhbEJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgICBib29raW5nLmRhdGUgPT09IGZvcm1hdHRlZERhdGUgPyB0b3RhbEJvb2tpbmdzLnB1c2goYm9va2luZykgOiBudWxsO1xuICAgICAgcmV0dXJuIHRvdGFsQm9va2luZ3M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBib29rZWRCb29raW5ncztcbiAgfVxuICBjYWxjdWxhdGVUb3RhbEFtb3VudFNwZW50KGJvb2tpbmdEYXRhKSB7XG4gICAgdGhpcy50b3RhbFNwZW50ID0gYm9va2luZ0RhdGEucmVkdWNlKCh0b3RhbFNwZW50LCBib29raW5nKSA9PiB7XG4gICAgICB0aGlzLnJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmKGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbFNwZW50ICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0b3RhbFNwZW50O1xuICAgIH0sIDApO1xuICAgIHRoaXMudG90YWxTcGVudCA9ICh0aGlzLnRvdGFsU3BlbnQpLnRvRml4ZWQoMilcbiAgfVxuICBnZXRVc2VyQm9va2luZ3ModXNlcklEKSB7XG4gICAgbGV0IHVzZXJCb29raW5ncyA9IHRoaXMuYm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4gYm9va2luZy51c2VySUQgPT09IHVzZXJJRCk7XG4gICAgcmV0dXJuIHVzZXJCb29raW5ncztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImxldCBmZXRjaEFwaSA9IHtcbiAgZmV0Y2hVc2VyRGF0YSgpIHtcbiAgICBsZXQgZmV0Y2hlZFVzZXJzID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS51c2VycylcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG4gICAgICByZXR1cm4gZmV0Y2hlZFVzZXJzO1xuICB9LFxuICBmZXRjaFJvb21EYXRhKCkge1xuICAgIGxldCBmZXRjaGVkUm9vbXMgPSBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEucm9vbXMpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgICByZXR1cm4gZmV0Y2hlZFJvb21zO1xuICB9LFxuICBmZXRjaEJvb2tpbmdEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3MpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgfSxcbiAgZGVsZXRlQm9va2luZ0RhdGEoYm9va2luZywgb25TdWNjZXNzKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tpbmcpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gb25TdWNjZXNzKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG4gIH0sXG4gIHBvc3RCb29raW5nRGF0YShyb29tTnVtYmVyLCB1c2VySUQsIGZvcm1hdHRlZERhdGUsIG9uU3VjY2Vzcykge1xuICAgIGxldCBuZXdCb29raW5nID0gZmV0Y2hBcGkuYnVpbGRCb29raW5nRGF0YShyb29tTnVtYmVyLCB1c2VySUQsIGZvcm1hdHRlZERhdGUpO1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9va2luZylcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25lID0+IG9uU3VjY2VzcygpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICB9LFxuICBidWlsZEJvb2tpbmdEYXRhKHJvb21OdW1iZXIsIHVzZXJJRCwgZm9ybWF0dGVkRGF0ZSkge1xuICAgIGxldCBib29raW5nT2JqZWN0ID0ge1xuICAgICAgdXNlcklEIDogdXNlcklELFxuICAgICAgZGF0ZSA6IGZvcm1hdHRlZERhdGUsXG4gICAgICByb29tTnVtYmVyIDogcm9vbU51bWJlclxuICAgIH07XG4gICAgcmV0dXJuIGJvb2tpbmdPYmplY3Q7XG4gIH1cbn07XG5cbmV4cG9ydCB7ZmV0Y2hBcGl9XG4iLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gJy4vQ3VzdG9tZXInO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcblxuaW1wb3J0IHtmZXRjaEFwaX0gZnJvbSAnLi9mZXRjaEFQSSc7XG5pbXBvcnQge2RvbVVwZGF0ZXN9IGZyb20gJy4vRE9NLXVwZGF0ZXMnO1xuXG5sZXQgdXNlckRhdGE7XG5sZXQgcm9vbURhdGE7XG5sZXQgYm9va2luZ0RhdGE7XG5sZXQgY3VzdG9tZXI7XG5sZXQgbWFuYWdlcjtcbmxldCBmZXRjaGVkQm9va2luZ0RhdGE7XG5cbmZ1bmN0aW9uIHJlQXNzaWduRGF0YSgpIHtcbiAgY29uc3QgZmV0Y2hlZFVzZXJEYXRhID0gZmV0Y2hBcGkuZmV0Y2hVc2VyRGF0YSgpO1xuICBjb25zdCBmZXRjaGVkUm9vbURhdGEgPSBmZXRjaEFwaS5mZXRjaFJvb21EYXRhKCk7XG4gIGZldGNoZWRCb29raW5nRGF0YSA9IGZldGNoQXBpLmZldGNoQm9va2luZ0RhdGEoKTtcbiAgUHJvbWlzZS5hbGwoW2ZldGNoZWRVc2VyRGF0YSwgZmV0Y2hlZFJvb21EYXRhLCBmZXRjaGVkQm9va2luZ0RhdGFdKS50aGVuKHZhbHVlcyA9PiB7XG4gICAgdXNlckRhdGEgPSB2YWx1ZXNbMF07XG4gICAgcm9vbURhdGEgPSB2YWx1ZXNbMV07XG4gICAgYm9va2luZ0RhdGEgPSB2YWx1ZXNbMl07XG4gIH0pXG59XG5cbmNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcbmNvbnN0IHNpbmdsZVJvb21PcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXJvb20nKTtcbmNvbnN0IHN1aXRlT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1aXRlJyk7XG5jb25zdCBqdW5pb3JTdWl0ZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qdW5pb3Itc3VpdGUnKTtcbmNvbnN0IHJlc1N1aXRlT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2lkZW50aWFsLXN1aXRlJyk7XG5jb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZXN1bHRzJyk7XG5jb25zdCBzZWFyY2hVc2VyQm9va2luZ3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWN1c3RvbWVyLWJvb2tpbmdzJyk7XG5jb25zdCBzZWFyY2hBdmFpbGFibGVSb29tc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYXZhaWFibGUtcm9vbXMnKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgcmVBc3NpZ25EYXRhKCk7XG59XG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrTG9naW4pO1xuLy8vLy8gQ3VzdG9tZXIgQ29udHJvbHMgLy8vLy9cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrSW5wdXRzKTtcblxuLy8vLy8gTWFuYWdlciBDb250cm9scyAvLy8vL1xuc2VhcmNoQXZhaWxhYmxlUm9vbXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QXZhaWFibGVSb29tcyk7XG5zZWFyY2hVc2VyQm9va2luZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2VhcmNoZWRDdXN0b21lcik7XG5cbmZ1bmN0aW9uIGNoZWNrTG9naW4oKSB7XG4gIGlmICh1c2VyTmFtZUlucHV0LnZhbHVlID09PSAnbWFuYWdlcicgJiYgcGFzc3dvcmRJbnB1dC52YWx1ZSA9PT0gJ292ZXJsb29rMjAyMCcpIHtcbiAgICBpbnN0YW50aWF0ZU1hbmFnZXIoKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNYW5hZ2VyTG9naW4obWFuYWdlcik7XG4gIH0gZWxzZSBpZiAodXNlck5hbWVJbnB1dC52YWx1ZS5pbmNsdWRlcygnY3VzdG9tZXInKSAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSAnb3Zlcmxvb2syMDIwJykge1xuICAgIGxldCB1c2VyID0gZ2V0VXNlckZyb21Mb2dpbih1c2VyTmFtZUlucHV0LnZhbHVlKTtcbiAgICBpbnN0YW50aWF0ZUN1c3RvbWVyKHVzZXIpO1xuICAgIGN1c3RvbWVyRGlzcGxheUxvZ2luKCk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1lvdSBoYXZlIGVudGVyZCBhbiBpbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQhJylcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVc2VyRnJvbUxvZ2luKHVzZXJJbnB1dCkge1xuICBsZXQgc3BsaXRVc2VyTmFtZSA9IHVzZXJJbnB1dC5zcGxpdCgnY3VzdG9tZXInKTtcbiAgbGV0IHVzZXJJRCA9IHBhcnNlSW50KHNwbGl0VXNlck5hbWVbMV0pO1xuICByZXR1cm4gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IHVzZXJJRCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0NVU1RPTUVSIExPR0lOLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlQ3VzdG9tZXIodXNlcikge1xuICBjdXN0b21lciA9IG5ldyBDdXN0b21lcihyb29tRGF0YSwgYm9va2luZ0RhdGEsIHVzZXJEYXRhLCB1c2VyKTtcbiAgZG9tVXBkYXRlcy51cGRhdGVDdXN0b21lclNwZW5kaW5nKGN1c3RvbWVyKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tZXJEaXNwbGF5TG9naW4oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1kYXNoYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUnKS5pbm5lclRleHQgPSBgV2VsY29tZSAke2N1c3RvbWVyLm5hbWV9LCB0byB0aGUgSG90ZWwgQ2FsaWZvcm5pYSFgXG4gIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID0gXCI8aDQ+IFBsZWFzZSBzZWxlY3QgYSByb29tIHR5cGUgYW5kIGEgZnV0dXJlIGRhdGUgdG8gc2VhcmNoIGF2YWlsYWJsZSBib29raW5ncyE8L2g0PlwiO1xuICBjdXN0b21lckJvb2tpbmdzRGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBjdXN0b21lckJvb2tpbmdzRGlzcGxheSgpIHtcbiAgbGV0IGN1c3RvbWVyQm9va2luZ3MgPSBjdXN0b21lci5nZXRVc2VyQm9va2luZ3MoY3VzdG9tZXIuaWQpXG4gIGN1c3RvbWVyQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWJvb2tpbmdzJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkb21VcGRhdGVzLmNyZWF0ZUJvb2tpbmdDYXJkcyhib29raW5nLCByb29tRGF0YSkpO1xuICB9KTtcbiAgYWRkQ2FuY2VsUm9vbXNFdmVudExpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JykudmFsdWU7XG4gIGxldCBkYXRlU2VhcmNoUmVzdWx0cyA9IGN1c3RvbWVyLnNlYXJjaEF2YWlsaWJpbGl0eShkYXRlKTtcbiAgbGV0IGZpbHRlclJlc3VsdHMgPSBnZXRGaWx0ZXJSZXN1bHRzKGRhdGVTZWFyY2hSZXN1bHRzKTtcbiAgaWYoZmlsdGVyUmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGVydChcIldlIGFyZSBzbyBzbyBzb3JyeSB0aGVyZSBhcmUgbm8gcm9vbXMgYXZhaWFibGUgZm9yIHRoYXQgZGF0ZSAmIHJvb20gdHlwZSFcIilcbiAgICByZXR1cm47XG4gIH1cbiAgYnVpbGRTZWFyY2hSZXN1bHRzKGZpbHRlclJlc3VsdHMsIGRhdGUpO1xufVxuXG5mdW5jdGlvbiBnZXRGaWx0ZXJSZXN1bHRzKGRhdGVTZWFyY2hSZXN1bHRzKSB7XG4gIGlmIChzaW5nbGVSb29tT3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGN1c3RvbWVyLmZpbHRlckJ5Um9vbVR5cGUoXCJzaW5nbGUgcm9vbVwiLCBkYXRlU2VhcmNoUmVzdWx0cyk7XG4gIH0gZWxzZSBpZiAoc3VpdGVPcHRpb24uc2VsZWN0ZWQpIHtcbiAgICByZXR1cm4gY3VzdG9tZXIuZmlsdGVyQnlSb29tVHlwZShcInN1aXRlXCIsIGRhdGVTZWFyY2hSZXN1bHRzKTtcbiAgfSBlbHNlIGlmIChqdW5pb3JTdWl0ZU9wdGlvbi5zZWxlY3RlZCkge1xuICAgIHJldHVybiBjdXN0b21lci5maWx0ZXJCeVJvb21UeXBlKFwianVuaW9yIHN1aXRlXCIsIGRhdGVTZWFyY2hSZXN1bHRzKTtcbiAgfSBlbHNlIGlmIChyZXNTdWl0ZU9wdGlvbi5zZWxlY3RlZCkge1xuICAgIHJldHVybiBjdXN0b21lci5maWx0ZXJCeVJvb21UeXBlKFwicmVzaWRlbnRpYWwgc3VpdGVcIiwgZGF0ZVNlYXJjaFJlc3VsdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2VhcmNoUmVzdWx0cyhmaWx0ZXJSZXN1bHRzLCBkYXRlKSB7XG4gIHNlYXJjaFJlc3VsdHMuaW5uZXJUZXh0ID0gXCJcIjtcbiAgZmlsdGVyUmVzdWx0cy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgc2VhcmNoUmVzdWx0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRvbVVwZGF0ZXMuY3JlYXRlUm9vbUJsb2Nrcyhyb29tLCBkYXRlKSk7XG4gIH0pO1xuICBkb21VcGRhdGVzLnVwZGF0ZVNlYXJjaFJlc3VsdHNDb3VudChmaWx0ZXJSZXN1bHRzLmxlbmd0aCk7XG4gIGFkZEJvb2tlZFJvb21zRXZlbnRMaXN0ZW5lcigpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL01BTkFHRVIgTE9HSU4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBpbnN0YW50aWF0ZU1hbmFnZXIoKSB7XG4gIG1hbmFnZXIgPSBuZXcgTWFuYWdlcihyb29tRGF0YSwgYm9va2luZ0RhdGEsIHVzZXJEYXRhKTtcbiAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmZ1bmN0aW9uIGdldEN1c29tdGVySW5mbyhlbGVtZW50SUQpIHtcbiAgbGV0IGN1c3RvbWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkudmFsdWU7XG4gIGxldCBmb3JtYXR0ZWRDdXN0b21lck5hbWUgPSBmb3JtYXRDdXN0b21lck5hbWUoY3VzdG9tZXJOYW1lKTtcbiAgbGV0IGN1c3RvbWVyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gZm9ybWF0dGVkQ3VzdG9tZXJOYW1lKTtcbiAgcmV0dXJuIGN1c3RvbWVyO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRDdXN0b21lck5hbWUoY3VzdG9tZXJOYW1lKSB7XG4gIGxldCB3b3JkcyA9IGN1c3RvbWVyTmFtZS5zcGxpdChcIiBcIilcbiAgbGV0IGZpcnN0TmFtZSA9IHdvcmRzWzBdWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3Jkc1swXS5zdWJzdHJpbmcoMSk7XG4gIGxldCBsYXN0TmFtZSA9IHdvcmRzWzFdWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3Jkc1sxXS5zdWJzdHJpbmcoMSk7XG4gIGxldCBmb3JtYXR0ZWROYW1lID0gZmlyc3ROYW1lLmNvbmNhdChcIiBcIiArIGxhc3ROYW1lKTtcbiAgcmV0dXJuIGZvcm1hdHRlZE5hbWU7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZWFyY2hlZEN1c3RvbWVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1yZXN1bHRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHVzZXIgPSBnZXRDdXNvbXRlckluZm8oJ2N1c3RvbWVyLW5hbWUnKTtcbiAgaWYgKHVzZXJEYXRhLmluY2x1ZGVzKHVzZXIpKSB7XG4gICAgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIocm9vbURhdGEsIGJvb2tpbmdEYXRhLCB1c2VyRGF0YSwgdXNlcilcbiAgICBkb21VcGRhdGVzLnVwZGF0ZVNwZW5kaW5nUmVzdWx0c0NvdW50ZXIoY3VzdG9tZXIpO1xuICAgIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItcmVzdWx0cycpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYWxlcnQoJ0N1c3RvbWVyIGluZm9tYXRpb24gbm90IGZvdW5kLicpXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlhYmxlUm9vbXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmFpYWJsZS1yZXN1bHRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHVzZXIgPSBnZXRDdXNvbXRlckluZm8oJ2N1c3RvbWVyLW5hbWUtYXZhaWFibGUnKTtcbiAgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIocm9vbURhdGEsIGJvb2tpbmdEYXRhLCB1c2VyRGF0YSwgdXNlcilcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhaWFibGUtcm9vbXMtZGF0ZScpLnZhbHVlO1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGUuc3BsaXQoL1stXSsvKS5qb2luKCcvJyk7XG4gIGlmKGRvbVVwZGF0ZXMuY29tcGFyZURhdGVzKGZvcm1hdHRlZERhdGUpKSB7XG4gICAgYWxlcnQoXCJObyBhdmFpYWJsZSBib29raW5ncyBpbiB0aGUgcGFzdC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNyZWF0ZUF2YWlsYWJsZVJvb21zKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdmFpbGFibGVSb29tcyhkYXRlKSB7XG4gIGxldCBhdmFpYmxlUm9vbXMgPSBtYW5hZ2VyLnNlYXJjaEF2YWlsaWJpbGl0eShkYXRlKTtcbiAgYXZhaWJsZVJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhaWFibGUtcmVzdWx0cycpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZG9tVXBkYXRlcy5jcmVhdGVSb29tQmxvY2tzKHJvb20sIGRhdGUpKTtcbiAgfSk7XG4gIGFkZEJvb2tlZFJvb21zRXZlbnRMaXN0ZW5lcigpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0JPT0sgJiBDQU5DRUwgUk9PTVMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiBib29rQVJvb20oZSkge1xuICBsZXQgcm9vbU51bWJlciA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgbGV0IHVzZXJJRCA9IGN1c3RvbWVyLmlkO1xuICBsZXQgb25DdXN0b21lclN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgdXBkYXRlQm9va2luZ0RhdGEoKTtcbiAgfVxuICBsZXQgb25NYW5hZ2VyU3VjY2VzcyA9ICgpID0+IHtcbiAgICB1cGRhdGVBdmFpYWJsZVJvb21zKClcbiAgfVxuICBjaGVja1doYXRUb0Jvb2socm9vbU51bWJlciwgdXNlcklELCBvbkN1c3RvbWVyU3VjY2Vzcywgb25NYW5hZ2VyU3VjY2Vzcylcbn1cblxuZnVuY3Rpb24gY2hlY2tXaGF0VG9Cb29rKHJvb21OdW1iZXIsIHVzZXJJRCwgb25DdXN0b21lclN1Y2Nlc3MsIG9uTWFuYWdlclN1Y2Nlc3MpIHtcbiAgaWYoIW1hbmFnZXIpIHtcbiAgICBsZXQgZGF0ZSA9IGdldENvcnJlY3REYXRlKCdkYXRlLWlucHV0Jyk7XG4gICAgaWYoZG9tVXBkYXRlcy5jb21wYXJlRGF0ZXMoZGF0ZSkpIHtcbiAgICAgIGFsZXJ0KFwiWW91IGNhbm5vdCBjYW5jZWwgYSBib29raW5nIGZyb20gdGhlIHBhc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZldGNoQXBpLnBvc3RCb29raW5nRGF0YShyb29tTnVtYmVyLCB1c2VySUQsIGRhdGUsIG9uQ3VzdG9tZXJTdWNjZXNzKTtcbiAgICBhbGVydChcIllvdSd2ZSBzdWNjZXNzZnVseSBib29rZWQgYSByb29tIVwiKVxuICB9IGVsc2Uge1xuICAgIGxldCBkYXRlID0gZ2V0Q29ycmVjdERhdGUoJ2F2YWlhYmxlLXJvb21zLWRhdGUnKTtcbiAgICBmZXRjaEFwaS5wb3N0Qm9va2luZ0RhdGEocm9vbU51bWJlciwgdXNlcklELCBkYXRlLCBvbk1hbmFnZXJTdWNjZXNzKTtcbiAgICBhbGVydChcIllvdSd2ZSBzdWNjZXNzZnVseSBib29rZWQgYSByb29tIVwiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvcnJlY3REYXRlKGVsZW1lbnRJRCkge1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCkudmFsdWU7XG4gIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZS5zcGxpdCgvWy1dKy8pLmpvaW4oJy8nKTtcbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvb2tpbmdEYXRhKCkge1xuIGZldGNoZWRCb29raW5nRGF0YSA9IGZldGNoQXBpLmZldGNoQm9va2luZ0RhdGEoKTtcbiBmZXRjaGVkQm9va2luZ0RhdGEudGhlbih2YWx1ZSA9PiB7XG4gICBib29raW5nRGF0YSA9IHZhbHVlXG4gIH0pXG4gIC50aGVuKCgpID0+IGRpc3BsYXlVcGRhdGVkQ3VzdG9tZXJCb29raW5ncygpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVcGRhdGVkQ3VzdG9tZXJCb29raW5ncygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItYm9va2luZ3MnKS5pbm5lckhUTUwgPSBcIlwiXG4gIGN1c3RvbWVyLmJvb2tpbmdzID0gYm9va2luZ0RhdGE7XG4gIGRvbVVwZGF0ZXMudXBkYXRlQ3VzdG9tZXJTcGVuZGluZyhjdXN0b21lcik7XG4gIGN1c3RvbWVyQm9va2luZ3NEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF2YWlhYmxlUm9vbXMoKSB7XG4gIGZldGNoZWRCb29raW5nRGF0YSA9IGZldGNoQXBpLmZldGNoQm9va2luZ0RhdGEoKTtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhLnRoZW4odmFsdWUgPT4ge1xuICAgYm9va2luZ0RhdGEgPSB2YWx1ZVxuICB9KVxuICAudGhlbigoKSA9PiBkaXNwbGF5VXBkYXRlZEF2YWlhYmxlUm9vbXMoKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXBkYXRlZEF2YWlhYmxlUm9vbXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmFpYWJsZS1yZXN1bHRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgY3VzdG9tZXIuYm9va2luZ3MgPSBib29raW5nRGF0YTtcbiAgZGlzcGxheVVwZGF0ZWRTZWFyY2hlZEN1c3RvbWVyKCk7XG4gIGRpc3BsYXlBdmFpYWJsZVJvb21zKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVcGRhdGVkU2VhcmNoZWRDdXN0b21lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItcmVzdWx0cycpLmlubmVySFRNTCA9IFwiXCI7XG4gIGN1c3RvbWVyLmJvb2tpbmdzID0gYm9va2luZ0RhdGE7XG4gIGRvbVVwZGF0ZXMudXBkYXRlU3BlbmRpbmdSZXN1bHRzQ291bnRlcihjdXN0b21lcik7XG4gIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKCkge1xuICBsZXQgY3VzdG9tZXJCb29raW5ncyA9IGN1c3RvbWVyLmdldFVzZXJCb29raW5ncyhjdXN0b21lci5pZCk7XG4gIGN1c3RvbWVyQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXJlc3VsdHMnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRvbVVwZGF0ZXMuY3JlYXRlQm9va2luZ0NhcmRzKGJvb2tpbmcsIHJvb21EYXRhKSk7XG4gIH0pO1xuICBhZGRDYW5jZWxSb29tc0V2ZW50TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsQVJvb20oZSkge1xuICBsZXQgcm9vbU51bWJlciA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgbGV0IHVzZXJJRCA9IGN1c3RvbWVyLmlkO1xuICBsZXQgZGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICBpZihkb21VcGRhdGVzLmNvbXBhcmVEYXRlcyhkYXRlKSkge1xuICAgIGFsZXJ0KFwiWW91IGNhbm5vdCBjYW5jZWwgYSBib29raW5nIGZyb20gdGhlIHBhc3RcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBib29raW5nID0gZ2V0Qm9va2luZ0RhdGEoZGF0ZSwgcm9vbU51bWJlciwgdXNlcklEKTtcbiAgY2hlY2tXaGF0VG9DYW5jZWwoYm9va2luZyk7XG4gIGFsZXJ0KFwiWW91J3ZlIHN1Y2Nlc3NmdWx5IGNhbmNlbGVkIGEgcm9vbSFcIilcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2luZ0RhdGEoZGF0ZSwgcm9vbU51bWJlciwgdXNlcklEKSB7XG4gIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZS5zcGxpdCgvWy1dKy8pLmpvaW4oJy8nKTtcbiAgbGV0IGJvb2tpbmcgPSBib29raW5nRGF0YS5maW5kKGJvb2tpbmcgPT4gYm9va2luZy5yb29tTnVtYmVyID09PSByb29tTnVtYmVyICYmIGJvb2tpbmcudXNlcklEID09PSB1c2VySUQgJiYgYm9va2luZy5kYXRlID09PSBmb3JtYXR0ZWREYXRlKTtcbiAgcmV0dXJuIGJvb2tpbmc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hhdFRvQ2FuY2VsKGJvb2tpbmcpIHtcbiAgbGV0IG9uQ3VzdG9tZXJTdWNjZXNzID0gKCkgPT4ge1xuICAgIHVwZGF0ZUJvb2tpbmdEYXRhKCk7XG4gIH1cbiAgbGV0IG9uTWFuYWdlclN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgdXBkYXRlTWFuYWdlclNlYXJjaFJlc3VsdHMoKTtcbiAgfVxuICBpZighbWFuYWdlcikge1xuICAgIGZldGNoQXBpLmRlbGV0ZUJvb2tpbmdEYXRhKGJvb2tpbmcsIG9uQ3VzdG9tZXJTdWNjZXNzKTtcbiAgfSBlbHNlIHtcbiAgICBmZXRjaEFwaS5kZWxldGVCb29raW5nRGF0YShib29raW5nLCBvbk1hbmFnZXJTdWNjZXNzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNYW5hZ2VyU2VhcmNoUmVzdWx0cygpIHtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhID0gZmV0Y2hBcGkuZmV0Y2hCb29raW5nRGF0YSgpO1xuICBmZXRjaGVkQm9va2luZ0RhdGEudGhlbih2YWx1ZSA9PiB7XG4gICBib29raW5nRGF0YSA9IHZhbHVlXG4gICB9KVxuICAgLnRoZW4oKCkgPT4gZGlzcGxheVVwZGF0ZWRTZWFyY2hlZEN1c3RvbWVyKCkpXG4gICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tlZFJvb21zRXZlbnRMaXN0ZW5lcigpIHtcbiAgbGV0IGJvb2tSb29tQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jvb2stcm9vbScpO1xuICBmb3IobGV0IGk9MDsgaSA8IGJvb2tSb29tQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGJvb2tSb29tQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tBUm9vbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2FuY2VsUm9vbXNFdmVudExpc3RlbmVyKCkge1xuICBsZXQgY2FuY2VsUm9vbUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW5jZWwtcm9vbScpO1xuICBmb3IobGV0IGk9MDsgaSA8IGNhbmNlbFJvb21CdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FuY2VsUm9vbUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBUm9vbSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=