// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Gatsby$ReactTemplate = require("../bindings/Gatsby.bs.js");

function str(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Simple");

function make(title, body, direction, icon, background, action, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, React.createElement("div", {
                              className: "bg-image " + background,
                              style: {
                                maxHeight: "241px"
                              }
                            }, React.createElement("div", {
                                  className: "layer opacity-dark"
                                })), React.createElement("div", {
                              className: "content",
                              style: {
                                borderBottom: "1px solid #333",
                                padding: "2em 4em",
                                position: "relative"
                              }
                            }, React.createElement("div", {
                                  className: "columns"
                                }, React.createElement("div", {
                                      className: "column"
                                    }, React.createElement("h1", undefined, title), React.createElement("p", undefined, body), ReasonReact.element(undefined, undefined, Gatsby$ReactTemplate.Link[/* make */0](Caml_option.some(action), "btn parallelogram has-background-link", undefined, /* array */[React.createElement("div", {
                                                    className: "skew-fix"
                                                  }, "Read More", React.createElement("i", {
                                                        className: "fas fa-caret-right",
                                                        style: {
                                                          marginLeft: "10px"
                                                        }
                                                      }))]))), React.createElement("div", {
                                      className: "column"
                                    }, React.createElement("h1", {
                                          className: "is-centered"
                                        }, React.createElement("i", {
                                              className: "fa-5x " + icon
                                            }))))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.title, jsProps.body, jsProps.direction, jsProps.icon, jsProps.background, jsProps.action, /* array */[]);
      }));

exports.str = str;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */