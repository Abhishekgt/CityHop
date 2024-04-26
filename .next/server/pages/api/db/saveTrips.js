"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db/saveTrips";
exports.ids = ["pages/api/db/saveTrips"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: process.env.SANITY_PROJECT_ID,\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: process.env.SANITY_TOKEN,\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0QscURBQVksQ0FBQyxDQUFDO0lBQ2xDRSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7SUFDeENDLE9BQU8sRUFBRSxDQUFZO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBSTtJQUNoQkMsS0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssWUFBWTtJQUMvQkMsTUFBTSxFQUFFLEtBQUs7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vbGliL3Nhbml0eS5qcz9kOGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICBhcGlWZXJzaW9uOiAndjEnLFxyXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfVE9LRU4sXHJcbiAgdXNlQ2RuOiBmYWxzZSxcclxufSlcclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidG9rZW4iLCJTQU5JVFlfVE9LRU4iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/saveTrips.js":
/*!***********************************!*\
  !*** ./pages/api/db/saveTrips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst saveTrips = async (req, res)=>{\n    try {\n        const tripDoc = {\n            _type: 'trips',\n            _id: `${req.body.userWalletAddress}-${Date.now()}`,\n            pickup: req.body.pickupLocation,\n            dropoff: req.body.dropoffLocation,\n            rideTimestamp: new Date(Date.now()).toISOString(),\n            // price: parseFloat(req.body.price),\n            price: 10,\n            rideCategory: req.body.selectedRide.service,\n            passenger: {\n                _key: `passenger-${req.body.userWalletAddress} - ${new Date(Date.now()).toISOString()}`,\n                _ref: req.body.userWalletAddress,\n                _type: 'reference'\n            }\n        };\n        await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.createIfNotExists(tripDoc);\n        res.status(200).send({\n            message: 'success'\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTrips);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvc2F2ZVRyaXBzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRTVDLEtBQUssQ0FBQ0MsU0FBUyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNmQyxLQUFLLEVBQUUsQ0FBTztZQUNkQyxHQUFHLEtBQUtKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztZQUM5Q0MsTUFBTSxFQUFFVCxHQUFHLENBQUNLLElBQUksQ0FBQ0ssY0FBYztZQUMvQkMsT0FBTyxFQUFFWCxHQUFHLENBQUNLLElBQUksQ0FBQ08sZUFBZTtZQUNqQ0MsYUFBYSxFQUFFLEdBQUcsQ0FBQ04sSUFBSSxDQUFDQSxJQUFJLENBQUNDLEdBQUcsSUFBSU0sV0FBVztZQUMvQyxFQUFxQztZQUNyQ0MsS0FBSyxFQUFFLEVBQUU7WUFDVEMsWUFBWSxFQUFFaEIsR0FBRyxDQUFDSyxJQUFJLENBQUNZLFlBQVksQ0FBQ0MsT0FBTztZQUMzQ0MsU0FBUyxFQUFFLENBQUM7Z0JBQ1ZDLElBQUksR0FBRyxVQUFVLEVBQUVwQixHQUFHLENBQUNLLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxDQUN6REEsSUFBSSxDQUFDQyxHQUFHLElBQ1JNLFdBQVc7Z0JBQ2JPLElBQUksRUFBRXJCLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxpQkFBaUI7Z0JBQ2hDSCxLQUFLLEVBQUUsQ0FBVztZQUNwQixDQUFDO1FBQ0gsQ0FBQztRQUVELEtBQUssQ0FBQ0wsaUVBQXdCLENBQUNJLE9BQU87UUFFdENELEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFTO1FBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmekIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQU87WUFBRUUsSUFBSSxFQUFFRCxLQUFLLENBQUNELE9BQU87UUFBQyxDQUFDO0lBQ2hFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUxQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vcGFnZXMvYXBpL2RiL3NhdmVUcmlwcy5qcz8yZTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zYW5pdHknXHJcblxyXG5jb25zdCBzYXZlVHJpcHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdHJpcERvYyA9IHtcclxuICAgICAgX3R5cGU6ICd0cmlwcycsXHJcbiAgICAgIF9pZDogYCR7cmVxLmJvZHkudXNlcldhbGxldEFkZHJlc3N9LSR7RGF0ZS5ub3coKX1gLFxyXG4gICAgICBwaWNrdXA6IHJlcS5ib2R5LnBpY2t1cExvY2F0aW9uLFxyXG4gICAgICBkcm9wb2ZmOiByZXEuYm9keS5kcm9wb2ZmTG9jYXRpb24sXHJcbiAgICAgIHJpZGVUaW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIC8vIHByaWNlOiBwYXJzZUZsb2F0KHJlcS5ib2R5LnByaWNlKSxcclxuICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICByaWRlQ2F0ZWdvcnk6IHJlcS5ib2R5LnNlbGVjdGVkUmlkZS5zZXJ2aWNlLFxyXG4gICAgICBwYXNzZW5nZXI6IHtcclxuICAgICAgICBfa2V5OiBgcGFzc2VuZ2VyLSR7cmVxLmJvZHkudXNlcldhbGxldEFkZHJlc3N9IC0gJHtuZXcgRGF0ZShcclxuICAgICAgICAgIERhdGUubm93KCksXHJcbiAgICAgICAgKS50b0lTT1N0cmluZygpfWAsXHJcbiAgICAgICAgX3JlZjogcmVxLmJvZHkudXNlcldhbGxldEFkZHJlc3MsXHJcbiAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNsaWVudC5jcmVhdGVJZk5vdEV4aXN0cyh0cmlwRG9jKVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ2Vycm9yJywgZGF0YTogZXJyb3IubWVzc2FnZSB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZVRyaXBzXHJcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJzYXZlVHJpcHMiLCJyZXEiLCJyZXMiLCJ0cmlwRG9jIiwiX3R5cGUiLCJfaWQiLCJib2R5IiwidXNlcldhbGxldEFkZHJlc3MiLCJEYXRlIiwibm93IiwicGlja3VwIiwicGlja3VwTG9jYXRpb24iLCJkcm9wb2ZmIiwiZHJvcG9mZkxvY2F0aW9uIiwicmlkZVRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwicHJpY2UiLCJyaWRlQ2F0ZWdvcnkiLCJzZWxlY3RlZFJpZGUiLCJzZXJ2aWNlIiwicGFzc2VuZ2VyIiwiX2tleSIsIl9yZWYiLCJjcmVhdGVJZk5vdEV4aXN0cyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZXJyb3IiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/saveTrips.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/saveTrips.js"));
module.exports = __webpack_exports__;

})();