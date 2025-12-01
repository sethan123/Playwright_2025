"use strict";

var _require = require('@playwright/test'),
    test = _require.test,
    expect = _require.expect,
    request = _require.request;

var _require2 = require('../utils/APiUtils'),
    APiUtils = _require2.APiUtils;

var loginPayLoad = {
  userEmail: "anshika@gmail.com",
  userPassword: "Iamking@000"
};
var orderPayLoad = {
  orders: [{
    country: "Cuba",
    productOrderedId: "67a8dde5c0d3e6622a297cc8"
  }]
};
var response;
test.beforeAll(function _callee() {
  var apiContext, apiUtils;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(request.newContext());

        case 2:
          apiContext = _context.sent;
          apiUtils = new APiUtils(apiContext, loginPayLoad);
          _context.next = 6;
          return regeneratorRuntime.awrap(apiUtils.createOrder(orderPayLoad));

        case 6:
          response = _context.sent;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}); //create order is success

test('@API Place the order', function _callee2(_ref) {
  var page, rows, i, rowOrderId, orderIdDetails;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          page = _ref.page;
          _context2.next = 3;
          return regeneratorRuntime.awrap(page.addInitScript(function (value) {
            window.localStorage.setItem('token', value);
          }, response.token));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(page["goto"]("https://rahulshettyacademy.com/client"));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(page.locator("button[routerlink*='myorders']").click());

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(page.locator("tbody").waitFor());

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(page.locator("tbody tr"));

        case 11:
          rows = _context2.sent;
          i = 0;

        case 13:
          _context2.t0 = i;
          _context2.next = 16;
          return regeneratorRuntime.awrap(rows.count());

        case 16:
          _context2.t1 = _context2.sent;

          if (!(_context2.t0 < _context2.t1)) {
            _context2.next = 28;
            break;
          }

          _context2.next = 20;
          return regeneratorRuntime.awrap(rows.nth(i).locator("th").textContent());

        case 20:
          rowOrderId = _context2.sent;

          if (!response.orderId.includes(rowOrderId)) {
            _context2.next = 25;
            break;
          }

          _context2.next = 24;
          return regeneratorRuntime.awrap(rows.nth(i).locator("button").first().click());

        case 24:
          return _context2.abrupt("break", 28);

        case 25:
          ++i;
          _context2.next = 13;
          break;

        case 28:
          _context2.next = 30;
          return regeneratorRuntime.awrap(page.locator(".col-text").textContent());

        case 30:
          orderIdDetails = _context2.sent;
          //await page.pause();
          expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //Verify if order created is showing in history page
// Precondition - create order -