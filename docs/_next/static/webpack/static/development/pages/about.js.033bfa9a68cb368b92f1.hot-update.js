webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/daniel/workspace/danielburer/pages/about.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      About.handleScroll();
      window.addEventListener('scroll', About.handleScroll);
      About.lazyLoadImages();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', About.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile__photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile__photo__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "profilePhoto",
        "data-lazy-load": "/static/portrait.jpg",
        className: "unloaded",
        src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABgAAAAAQAAAGAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIACAAIAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/3QAEAAL/2gAMAwEAAhEDEQA/APlb4tfsX+MPhh8fNC+FKz6frGva3HDLYTW0/lwyJJ5nzPuGY9vkyk5B4XI3ZxXsPwQ/YU0/4hfDvxrf6h4s0y31zw7LPA9nayieNjFkM3mcZXcCoIHbtXxjJ428QXviGDW21jUpdZg2GK/e9me4j2DC4lLl1AGcYYYBOMZNev8AhX4narBpb+G49Xbw8dau4hPqt4X8u1szGHmJ4GQWAPJyd+MgHI8XHU8U7Rpy0/H8O2j21se9l9TDLmlOOv3r8e+q8rm34Z/Yg8c+NvEGj6VYQWX23xDZte6PDLfqhaAMD58+1XMSFAxUcltykhea+f8AxV4WvvBniXV9C1VEt9R0q8nsLqNZA4SaGRo5BkdQGRue45rtfH3jXxD4U8dxQaZ4o1FoNEjSHSL2zu57crbmIFHiIYOgZXPAPGSo44rz9dYnOsR6jcSNczi5W5kedjI0jCQOSxY5JJySSckkknk161HmcE29/wDI8rEun7VqCsl/mf/Q/Oez8M3ct5b2oju7dZlR5jcQNAVXPYH7w64Pc9uK7vxbcRalZS2Gn2qabPp8Wxp7jKedGACVRvQBVJJ68CstJr/WbKTVxbzw2VxcG1juWmzGk4Acxxl3JGAQ4Tpg55GayvEK3Lw3zXM7y3syh7jI2rsTnhc8Anb04NeVJzqVouTtbb1636PT+up68fZ06UlFXv8Al0t1Wv8AXQ5OWeS42NI7yMFCguxJAHQc9h0x2q1opsodRibUTdLa4O5rMIZVOPlKh/lOGAyDjIzyDitjTdIEWni4k0xbl5iqIJ5HXZgqS2MKMMp4ILEenOasf8S27jvjfQaVYyMzoJEkZmhIxgRRKyqceo5OT6163N0PH5Xuf//Z",
        alt: "Me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "scrollIndicator",
        className: "no-indicator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Hey, I\u2019m Daniel. Right now I'm working as a full-stack developer in Statesboro, Georgia."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "I\u2019m currently pursing a Master of Science at the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.gatech.edu/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "The Georgia Institute of Technology"), ", specializing in Machine Learning. Outside of work or school, I love working on side projects, producing music, and graphic design."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Want to talk business, education, or anything else? Feel free to drop me an email or connect with me on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/daniel-burer-452963118/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "LinkedIn"), " and we'll be in touch."))));
    }
  }], [{
    key: "handleScroll",
    value: function handleScroll() {
      var contentHeight = document.querySelector('.profile__text').getBoundingClientRect().top;
      var scrollIndicator = document.querySelector('#scrollIndicator');

      if (contentHeight < window.innerHeight * 0.75) {
        if (!scrollIndicator.classList.contains('no-indicator')) {
          scrollIndicator.classList.add('no-indicator');
        }
      } else {
        if (scrollIndicator.classList.contains('no-indicator')) {
          scrollIndicator.classList.remove('no-indicator');
        }
      }
    }
  }, {
    key: "lazyLoadImages",
    value: function lazyLoadImages() {
      var profilePhoto = document.querySelector('#profilePhoto');
      var fullResPhoto = new Image();
      fullResPhoto.src = profilePhoto.dataset.lazyLoad; //
      // newImage.onerror = function(){
      //     // Decide what to do on error
      // };

      fullResPhoto.onload = function () {
        profilePhoto.classList.remove('unloaded');
        profilePhoto.src = fullResPhoto.src;
      };
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.033bfa9a68cb368b92f1.hot-update.js.map