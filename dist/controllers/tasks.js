"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.saveTask = exports.getTasks = exports.getTask = exports.deleteTask = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Task = require('../models/Task');

var getTasks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _getTasks;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Task.find();

          case 3:
            _getTasks = _context.sent;

            if (!(_getTasks.length > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json(_getTasks));

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTask = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var idTask, _getTask;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idTask = req.params.idTask;
            console.log("Lo que se envía por params", req.params);
            _context2.prev = 2;
            _context2.next = 5;
            return Task.findById(idTask);

          case 5:
            _getTask = _context2.sent;
            return _context2.abrupt("return", res.json(_getTask));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function getTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // export const getTaskCount = (req, res) => {
//     res.send('Hello world')
// }


exports.getTask = getTask;

var saveTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, title, description, newTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            _context3.prev = 1;
            _context3.next = 4;
            return Task.create({
              title: title,
              description: description
            });

          case 4:
            newTask = _context3.sent;
            return _context3.abrupt("return", res.json(newTask));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function saveTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.saveTask = saveTask;

var updateTask = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var idTask, _req$body2, title, description, modifyTask;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idTask = req.params.idTask;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
            _context4.prev = 2;
            _context4.next = 5;
            return Task.findByIdAndUpdate({
              _id: idTask
            }, {
              title: title,
              description: description
            });

          case 5:
            modifyTask = _context4.sent;
            return _context4.abrupt("return", res.json(modifyTask));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));

  return function updateTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var idTask, _deleteTask;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idTask = req.params.idTask;
            _context5.prev = 1;
            _context5.next = 4;
            return Task.findByIdAndDelete(idTask);

          case 4:
            _deleteTask = _context5.sent;
            return _context5.abrupt("return", res.json(_deleteTask));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;