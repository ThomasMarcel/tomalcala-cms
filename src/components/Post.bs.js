// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Gatsby$ReactTemplate = require("../bindings/Gatsby.bs.js");

function str(prim) {
  return prim;
}

function Post(Props) {
  var post = Props.post;
  var index = Props.index;
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "bg-image bg" + String(index)
                }, React.createElement("div", {
                      className: "layer opacity-dark"
                    })), React.createElement("div", {
                  key: post.id,
                  className: "content",
                  style: {
                    borderBottom: "1px solid #333",
                    padding: "2em 4em",
                    position: "relative"
                  }
                }, React.createElement("p", undefined, ReasonReact.element(undefined, undefined, Gatsby$ReactTemplate.Link[/* make */0](post.fields.slug, "has-text-light bold", undefined, /* array */[post.frontmatter.title]))), React.createElement("p", undefined, post.excerpt), React.createElement("div", {
                      className: "columns"
                    }, React.createElement("div", {
                          className: "column"
                        }, ReasonReact.element(undefined, undefined, Gatsby$ReactTemplate.Link[/* make */0](post.fields.slug, "btn parallelogram has-background-link", undefined, /* array */[React.createElement("div", {
                                        className: "skew-fix"
                                      }, "Read More", React.createElement("i", {
                                            className: "fas fa-caret-right",
                                            style: {
                                              marginLeft: "10px"
                                            }
                                          }))]))), React.createElement("div", {
                          className: "column"
                        }, React.createElement("div", {
                              className: "is-pulled-right"
                            }, React.createElement("i", {
                                  className: "far fa-clock"
                                }), React.createElement("small", undefined, "  " + post.frontmatter.date))))));
}

var make = Post;

var $$default = Post;

exports.str = str;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
