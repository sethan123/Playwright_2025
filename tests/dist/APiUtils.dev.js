"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var APiUtils =
/*#__PURE__*/
function () {
  function APiUtils(apiContext, loginPayLoad) {
    _classCallCheck(this, APiUtils);

    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
  }

  _createClass(APiUtils, [{
    key: "getToken",
    value: function getToken() {
      var loginResponse, loginResponseJson, token;
      return regeneratorRuntime.async(function getToken$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
                data: this.loginPayLoad
              }));

            case 2:
              loginResponse = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(loginResponse.json());

            case 5:
              loginResponseJson = _context.sent;
              token = loginResponseJson.token;
              console.log(token);
              return _context.abrupt("return", token);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createOrder",
    value: function createOrder(orderPayLoad) {
      var response, orderResponse, orderResponseJson, orderId;
      return regeneratorRuntime.async(function createOrder$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              response = {};
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.getToken());

            case 3:
              response.token = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
                data: orderPayLoad,
                headers: {
                  'Authorization': response.token,
                  'Content-Type': 'application/json'
                }
              }));

            case 6:
              orderResponse = _context2.sent;
              _context2.next = 9;
              return regeneratorRuntime.awrap(orderResponse.json());

            case 9:
              orderResponseJson = _context2.sent;
              console.log(orderResponseJson);
              orderId = orderResponseJson.orders[0];
              response.orderId = orderId;
              return _context2.abrupt("return", response);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }]);

  return APiUtils;
}();

module.exports = {
  APiUtils: APiUtils
};