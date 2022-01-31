"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _tasks = _interopRequireDefault(require("./routes/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);

require('dotenv').config();

var mongoose = require('mongoose'); // const MongoStore = require('connect-mongo')(session);


var dbPath = process.env.MONGODB_URI;
mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("conected to ".concat(dbPath));
})["catch"](function (error) {
  console.error(error);
});
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_tasks["default"]);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;