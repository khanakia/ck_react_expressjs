webpackJsonp([0,1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = exports.jqx = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JQXLite = window.JQXLite; /*
                              jQWidgets v5.3.2 (2017-Sep)
                              Copyright (c) 2011-2017 jQWidgets.
                              License: http://jqwidgets.com/license/
                              */
var jqx = exports.jqx = window.jqx;

var JqxGrid = function (_React$Component) {
    (0, _inherits3['default'])(JqxGrid, _React$Component);

    function JqxGrid() {
        (0, _classCallCheck3['default'])(this, JqxGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (JqxGrid.__proto__ || (0, _getPrototypeOf2['default'])(JqxGrid)).apply(this, arguments));
    }

    (0, _createClass3['default'])(JqxGrid, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var options = this.manageAttributes();
                this.createComponent(options);
            }

            return componentDidMount;
        }()
    }, {
        key: 'manageAttributes',
        value: function () {
            function manageAttributes() {
                var properties = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'selectionmode', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'disabled', 'editable', 'editmode', 'filter', 'filterable', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
                var options = {};
                for (var item in this.props) {
                    if (item === 'settings') {
                        for (var itemTwo in this.props[item]) {
                            options[itemTwo] = this.props[item][itemTwo];
                        }
                    } else {
                        if (properties.indexOf(item) !== -1) {
                            options[item] = this.props[item];
                        }
                    }
                }
                return options;
            }

            return manageAttributes;
        }()
    }, {
        key: 'createComponent',
        value: function () {
            function createComponent(options) {
                if (!this.style) {
                    for (var style in this.props.style) {
                        JQXLite(this.componentSelector).css(style, this.props.style[style]);
                    }
                }
                if (this.props.className !== undefined) {
                    var classes = this.props.className.split(' ');
                    for (var i = 0; i < classes.length; i++) {
                        JQXLite(this.componentSelector).addClass(classes[i]);
                    }
                }
                if (!this.template) {
                    JQXLite(this.componentSelector).html(this.props.template);
                }
                JQXLite(this.componentSelector).jqxGrid(options);
            }

            return createComponent;
        }()
    }, {
        key: 'setOptions',
        value: function () {
            function setOptions(options) {
                JQXLite(this.componentSelector).jqxGrid('setOptions', options);
            }

            return setOptions;
        }()
    }, {
        key: 'getOptions',
        value: function () {
            function getOptions() {
                if (arguments.length === 0) {
                    throw Error('At least one argument expected in getOptions()!');
                }
                var resultToReturn = {};
                for (var i = 0; i < arguments.length; i++) {
                    resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxGrid(arguments[i]);
                }
                return resultToReturn;
            }

            return getOptions;
        }()
    }, {
        key: 'on',
        value: function () {
            function on(name, callbackFn) {
                JQXLite(this.componentSelector).on(name, callbackFn);
            }

            return on;
        }()
    }, {
        key: 'off',
        value: function () {
            function off(name) {
                JQXLite(this.componentSelector).off(name);
            }

            return off;
        }()
    }, {
        key: 'altrows',
        value: function () {
            function altrows(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('altrows', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('altrows');
                }
            }

            return altrows;
        }()
    }, {
        key: 'altstart',
        value: function () {
            function altstart(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('altstart', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('altstart');
                }
            }

            return altstart;
        }()
    }, {
        key: 'altstep',
        value: function () {
            function altstep(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('altstep', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('altstep');
                }
            }

            return altstep;
        }()
    }, {
        key: 'autoshowloadelement',
        value: function () {
            function autoshowloadelement(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autoshowloadelement', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autoshowloadelement');
                }
            }

            return autoshowloadelement;
        }()
    }, {
        key: 'autoshowfiltericon',
        value: function () {
            function autoshowfiltericon(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon');
                }
            }

            return autoshowfiltericon;
        }()
    }, {
        key: 'autoshowcolumnsmenubutton',
        value: function () {
            function autoshowcolumnsmenubutton(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton');
                }
            }

            return autoshowcolumnsmenubutton;
        }()
    }, {
        key: 'clipboard',
        value: function () {
            function clipboard(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('clipboard', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('clipboard');
                }
            }

            return clipboard;
        }()
    }, {
        key: 'closeablegroups',
        value: function () {
            function closeablegroups(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('closeablegroups', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('closeablegroups');
                }
            }

            return closeablegroups;
        }()
    }, {
        key: 'columnsmenuwidth',
        value: function () {
            function columnsmenuwidth(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth');
                }
            }

            return columnsmenuwidth;
        }()
    }, {
        key: 'columnmenuopening',
        value: function () {
            function columnmenuopening(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnmenuopening', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnmenuopening');
                }
            }

            return columnmenuopening;
        }()
    }, {
        key: 'columnmenuclosing',
        value: function () {
            function columnmenuclosing(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnmenuclosing', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnmenuclosing');
                }
            }

            return columnmenuclosing;
        }()
    }, {
        key: 'cellhover',
        value: function () {
            function cellhover(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('cellhover', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('cellhover');
                }
            }

            return cellhover;
        }()
    }, {
        key: 'enablekeyboarddelete',
        value: function () {
            function enablekeyboarddelete(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete');
                }
            }

            return enablekeyboarddelete;
        }()
    }, {
        key: 'enableellipsis',
        value: function () {
            function enableellipsis(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enableellipsis', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enableellipsis');
                }
            }

            return enableellipsis;
        }()
    }, {
        key: 'enablemousewheel',
        value: function () {
            function enablemousewheel(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enablemousewheel', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enablemousewheel');
                }
            }

            return enablemousewheel;
        }()
    }, {
        key: 'enableanimations',
        value: function () {
            function enableanimations(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enableanimations', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enableanimations');
                }
            }

            return enableanimations;
        }()
    }, {
        key: 'enabletooltips',
        value: function () {
            function enabletooltips(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enabletooltips', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enabletooltips');
                }
            }

            return enabletooltips;
        }()
    }, {
        key: 'enablehover',
        value: function () {
            function enablehover(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enablehover', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enablehover');
                }
            }

            return enablehover;
        }()
    }, {
        key: 'enablebrowserselection',
        value: function () {
            function enablebrowserselection(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('enablebrowserselection', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('enablebrowserselection');
                }
            }

            return enablebrowserselection;
        }()
    }, {
        key: 'everpresentrowposition',
        value: function () {
            function everpresentrowposition(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('everpresentrowposition', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('everpresentrowposition');
                }
            }

            return everpresentrowposition;
        }()
    }, {
        key: 'everpresentrowheight',
        value: function () {
            function everpresentrowheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('everpresentrowheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('everpresentrowheight');
                }
            }

            return everpresentrowheight;
        }()
    }, {
        key: 'everpresentrowactions',
        value: function () {
            function everpresentrowactions(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('everpresentrowactions', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('everpresentrowactions');
                }
            }

            return everpresentrowactions;
        }()
    }, {
        key: 'everpresentrowactionsmode',
        value: function () {
            function everpresentrowactionsmode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode');
                }
            }

            return everpresentrowactionsmode;
        }()
    }, {
        key: 'filterrowheight',
        value: function () {
            function filterrowheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('filterrowheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('filterrowheight');
                }
            }

            return filterrowheight;
        }()
    }, {
        key: 'filtermode',
        value: function () {
            function filtermode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('filtermode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('filtermode');
                }
            }

            return filtermode;
        }()
    }, {
        key: 'groupsrenderer',
        value: function () {
            function groupsrenderer(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupsrenderer', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupsrenderer');
                }
            }

            return groupsrenderer;
        }()
    }, {
        key: 'groupcolumnrenderer',
        value: function () {
            function groupcolumnrenderer(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer');
                }
            }

            return groupcolumnrenderer;
        }()
    }, {
        key: 'groupsexpandedbydefault',
        value: function () {
            function groupsexpandedbydefault(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault');
                }
            }

            return groupsexpandedbydefault;
        }()
    }, {
        key: 'handlekeyboardnavigation',
        value: function () {
            function handlekeyboardnavigation(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation');
                }
            }

            return handlekeyboardnavigation;
        }()
    }, {
        key: 'pagerrenderer',
        value: function () {
            function pagerrenderer(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagerrenderer', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagerrenderer');
                }
            }

            return pagerrenderer;
        }()
    }, {
        key: 'rtl',
        value: function () {
            function rtl(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rtl', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rtl');
                }
            }

            return rtl;
        }()
    }, {
        key: 'showdefaultloadelement',
        value: function () {
            function showdefaultloadelement(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement');
                }
            }

            return showdefaultloadelement;
        }()
    }, {
        key: 'showfiltercolumnbackground',
        value: function () {
            function showfiltercolumnbackground(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground');
                }
            }

            return showfiltercolumnbackground;
        }()
    }, {
        key: 'showfiltermenuitems',
        value: function () {
            function showfiltermenuitems(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems');
                }
            }

            return showfiltermenuitems;
        }()
    }, {
        key: 'showpinnedcolumnbackground',
        value: function () {
            function showpinnedcolumnbackground(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground');
                }
            }

            return showpinnedcolumnbackground;
        }()
    }, {
        key: 'showsortcolumnbackground',
        value: function () {
            function showsortcolumnbackground(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground');
                }
            }

            return showsortcolumnbackground;
        }()
    }, {
        key: 'showsortmenuitems',
        value: function () {
            function showsortmenuitems(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showsortmenuitems', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showsortmenuitems');
                }
            }

            return showsortmenuitems;
        }()
    }, {
        key: 'showgroupmenuitems',
        value: function () {
            function showgroupmenuitems(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems');
                }
            }

            return showgroupmenuitems;
        }()
    }, {
        key: 'showrowdetailscolumn',
        value: function () {
            function showrowdetailscolumn(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn');
                }
            }

            return showrowdetailscolumn;
        }()
    }, {
        key: 'showheader',
        value: function () {
            function showheader(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showheader', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showheader');
                }
            }

            return showheader;
        }()
    }, {
        key: 'showgroupsheader',
        value: function () {
            function showgroupsheader(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showgroupsheader', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showgroupsheader');
                }
            }

            return showgroupsheader;
        }()
    }, {
        key: 'showaggregates',
        value: function () {
            function showaggregates(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showaggregates', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showaggregates');
                }
            }

            return showaggregates;
        }()
    }, {
        key: 'showgroupaggregates',
        value: function () {
            function showgroupaggregates(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showgroupaggregates', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showgroupaggregates');
                }
            }

            return showgroupaggregates;
        }()
    }, {
        key: 'showeverpresentrow',
        value: function () {
            function showeverpresentrow(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showeverpresentrow', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showeverpresentrow');
                }
            }

            return showeverpresentrow;
        }()
    }, {
        key: 'showfilterrow',
        value: function () {
            function showfilterrow(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showfilterrow', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showfilterrow');
                }
            }

            return showfilterrow;
        }()
    }, {
        key: 'showemptyrow',
        value: function () {
            function showemptyrow(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showemptyrow', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showemptyrow');
                }
            }

            return showemptyrow;
        }()
    }, {
        key: 'showstatusbar',
        value: function () {
            function showstatusbar(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showstatusbar', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showstatusbar');
                }
            }

            return showstatusbar;
        }()
    }, {
        key: 'statusbarheight',
        value: function () {
            function statusbarheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('statusbarheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('statusbarheight');
                }
            }

            return statusbarheight;
        }()
    }, {
        key: 'showtoolbar',
        value: function () {
            function showtoolbar(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('showtoolbar', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('showtoolbar');
                }
            }

            return showtoolbar;
        }()
    }, {
        key: 'selectionmode',
        value: function () {
            function selectionmode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('selectionmode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('selectionmode');
                }
            }

            return selectionmode;
        }()
    }, {
        key: 'updatefilterconditions',
        value: function () {
            function updatefilterconditions(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('updatefilterconditions', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('updatefilterconditions');
                }
            }

            return updatefilterconditions;
        }()
    }, {
        key: 'updatefilterpanel',
        value: function () {
            function updatefilterpanel(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('updatefilterpanel', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('updatefilterpanel');
                }
            }

            return updatefilterpanel;
        }()
    }, {
        key: 'theme',
        value: function () {
            function theme(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('theme', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('theme');
                }
            }

            return theme;
        }()
    }, {
        key: 'toolbarheight',
        value: function () {
            function toolbarheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('toolbarheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('toolbarheight');
                }
            }

            return toolbarheight;
        }()
    }, {
        key: 'autoheight',
        value: function () {
            function autoheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autoheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autoheight');
                }
            }

            return autoheight;
        }()
    }, {
        key: 'autorowheight',
        value: function () {
            function autorowheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autorowheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autorowheight');
                }
            }

            return autorowheight;
        }()
    }, {
        key: 'columnsheight',
        value: function () {
            function columnsheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsheight');
                }
            }

            return columnsheight;
        }()
    }, {
        key: 'deferreddatafields',
        value: function () {
            function deferreddatafields(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('deferreddatafields', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('deferreddatafields');
                }
            }

            return deferreddatafields;
        }()
    }, {
        key: 'groupsheaderheight',
        value: function () {
            function groupsheaderheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupsheaderheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupsheaderheight');
                }
            }

            return groupsheaderheight;
        }()
    }, {
        key: 'groupindentwidth',
        value: function () {
            function groupindentwidth(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupindentwidth', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupindentwidth');
                }
            }

            return groupindentwidth;
        }()
    }, {
        key: 'height',
        value: function () {
            function height(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('height', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('height');
                }
            }

            return height;
        }()
    }, {
        key: 'pagerheight',
        value: function () {
            function pagerheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagerheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagerheight');
                }
            }

            return pagerheight;
        }()
    }, {
        key: 'rowsheight',
        value: function () {
            function rowsheight(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rowsheight', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rowsheight');
                }
            }

            return rowsheight;
        }()
    }, {
        key: 'scrollbarsize',
        value: function () {
            function scrollbarsize(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('scrollbarsize', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('scrollbarsize');
                }
            }

            return scrollbarsize;
        }()
    }, {
        key: 'scrollmode',
        value: function () {
            function scrollmode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('scrollmode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('scrollmode');
                }
            }

            return scrollmode;
        }()
    }, {
        key: 'scrollfeedback',
        value: function () {
            function scrollfeedback(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('scrollfeedback', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('scrollfeedback');
                }
            }

            return scrollfeedback;
        }()
    }, {
        key: 'width',
        value: function () {
            function width(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('width', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('width');
                }
            }

            return width;
        }()
    }, {
        key: 'autosavestate',
        value: function () {
            function autosavestate(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autosavestate', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autosavestate');
                }
            }

            return autosavestate;
        }()
    }, {
        key: 'autoloadstate',
        value: function () {
            function autoloadstate(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('autoloadstate', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('autoloadstate');
                }
            }

            return autoloadstate;
        }()
    }, {
        key: 'columns',
        value: function () {
            function columns(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columns', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columns');
                }
            }

            return columns;
        }()
    }, {
        key: 'columngroups',
        value: function () {
            function columngroups(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columngroups', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columngroups');
                }
            }

            return columngroups;
        }()
    }, {
        key: 'columnsmenu',
        value: function () {
            function columnsmenu(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsmenu', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsmenu');
                }
            }

            return columnsmenu;
        }()
    }, {
        key: 'columnsresize',
        value: function () {
            function columnsresize(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsresize', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsresize');
                }
            }

            return columnsresize;
        }()
    }, {
        key: 'columnsautoresize',
        value: function () {
            function columnsautoresize(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsautoresize', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsautoresize');
                }
            }

            return columnsautoresize;
        }()
    }, {
        key: 'columnsreorder',
        value: function () {
            function columnsreorder(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('columnsreorder', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('columnsreorder');
                }
            }

            return columnsreorder;
        }()
    }, {
        key: 'disabled',
        value: function () {
            function disabled(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('disabled', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('disabled');
                }
            }

            return disabled;
        }()
    }, {
        key: 'editable',
        value: function () {
            function editable(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('editable', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('editable');
                }
            }

            return editable;
        }()
    }, {
        key: 'editmode',
        value: function () {
            function editmode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('editmode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('editmode');
                }
            }

            return editmode;
        }()
    }, {
        key: 'filter',
        value: function () {
            function filter(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('filter', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('filter');
                }
            }

            return filter;
        }()
    }, {
        key: 'filterable',
        value: function () {
            function filterable(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('filterable', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('filterable');
                }
            }

            return filterable;
        }()
    }, {
        key: 'groupable',
        value: function () {
            function groupable(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groupable', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groupable');
                }
            }

            return groupable;
        }()
    }, {
        key: 'groups',
        value: function () {
            function groups(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('groups', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('groups');
                }
            }

            return groups;
        }()
    }, {
        key: 'horizontalscrollbarstep',
        value: function () {
            function horizontalscrollbarstep(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep');
                }
            }

            return horizontalscrollbarstep;
        }()
    }, {
        key: 'horizontalscrollbarlargestep',
        value: function () {
            function horizontalscrollbarlargestep(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep');
                }
            }

            return horizontalscrollbarlargestep;
        }()
    }, {
        key: 'initrowdetails',
        value: function () {
            function initrowdetails(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('initrowdetails', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('initrowdetails');
                }
            }

            return initrowdetails;
        }()
    }, {
        key: 'keyboardnavigation',
        value: function () {
            function keyboardnavigation(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('keyboardnavigation', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('keyboardnavigation');
                }
            }

            return keyboardnavigation;
        }()
    }, {
        key: 'localization',
        value: function () {
            function localization(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('localization', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('localization');
                }
            }

            return localization;
        }()
    }, {
        key: 'pagesize',
        value: function () {
            function pagesize(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagesize', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagesize');
                }
            }

            return pagesize;
        }()
    }, {
        key: 'pagesizeoptions',
        value: function () {
            function pagesizeoptions(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagesizeoptions', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagesizeoptions');
                }
            }

            return pagesizeoptions;
        }()
    }, {
        key: 'pagermode',
        value: function () {
            function pagermode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagermode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagermode');
                }
            }

            return pagermode;
        }()
    }, {
        key: 'pagerbuttonscount',
        value: function () {
            function pagerbuttonscount(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount');
                }
            }

            return pagerbuttonscount;
        }()
    }, {
        key: 'pageable',
        value: function () {
            function pageable(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('pageable', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('pageable');
                }
            }

            return pageable;
        }()
    }, {
        key: 'rowdetails',
        value: function () {
            function rowdetails(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rowdetails', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rowdetails');
                }
            }

            return rowdetails;
        }()
    }, {
        key: 'rowdetailstemplate',
        value: function () {
            function rowdetailstemplate(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate');
                }
            }

            return rowdetailstemplate;
        }()
    }, {
        key: 'ready',
        value: function () {
            function ready(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('ready', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('ready');
                }
            }

            return ready;
        }()
    }, {
        key: 'rendered',
        value: function () {
            function rendered(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rendered', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rendered');
                }
            }

            return rendered;
        }()
    }, {
        key: 'renderstatusbar',
        value: function () {
            function renderstatusbar(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('renderstatusbar', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('renderstatusbar');
                }
            }

            return renderstatusbar;
        }()
    }, {
        key: 'rendertoolbar',
        value: function () {
            function rendertoolbar(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rendertoolbar', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rendertoolbar');
                }
            }

            return rendertoolbar;
        }()
    }, {
        key: 'rendergridrows',
        value: function () {
            function rendergridrows(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('rendergridrows', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('rendergridrows');
                }
            }

            return rendergridrows;
        }()
    }, {
        key: 'sortable',
        value: function () {
            function sortable(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('sortable', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('sortable');
                }
            }

            return sortable;
        }()
    }, {
        key: 'selectedrowindex',
        value: function () {
            function selectedrowindex(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('selectedrowindex', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('selectedrowindex');
                }
            }

            return selectedrowindex;
        }()
    }, {
        key: 'selectedrowindexes',
        value: function () {
            function selectedrowindexes(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('selectedrowindexes', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('selectedrowindexes');
                }
            }

            return selectedrowindexes;
        }()
    }, {
        key: 'source',
        value: function () {
            function source(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('source', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('source');
                }
            }

            return source;
        }()
    }, {
        key: 'sorttogglestates',
        value: function () {
            function sorttogglestates(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('sorttogglestates', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('sorttogglestates');
                }
            }

            return sorttogglestates;
        }()
    }, {
        key: 'updatedelay',
        value: function () {
            function updatedelay(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('updatedelay', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('updatedelay');
                }
            }

            return updatedelay;
        }()
    }, {
        key: 'virtualmode',
        value: function () {
            function virtualmode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('virtualmode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('virtualmode');
                }
            }

            return virtualmode;
        }()
    }, {
        key: 'verticalscrollbarstep',
        value: function () {
            function verticalscrollbarstep(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep');
                }
            }

            return verticalscrollbarstep;
        }()
    }, {
        key: 'verticalscrollbarlargestep',
        value: function () {
            function verticalscrollbarlargestep(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep');
                }
            }

            return verticalscrollbarlargestep;
        }()
    }, {
        key: 'autoresizecolumns',
        value: function () {
            function autoresizecolumns(type) {
                JQXLite(this.componentSelector).jqxGrid('autoresizecolumns', type);
            }

            return autoresizecolumns;
        }()
    }, {
        key: 'autoresizecolumn',
        value: function () {
            function autoresizecolumn(dataField, type) {
                JQXLite(this.componentSelector).jqxGrid('autoresizecolumn', dataField, type);
            }

            return autoresizecolumn;
        }()
    }, {
        key: 'beginupdate',
        value: function () {
            function beginupdate() {
                JQXLite(this.componentSelector).jqxGrid('beginupdate');
            }

            return beginupdate;
        }()
    }, {
        key: 'clear',
        value: function () {
            function clear() {
                JQXLite(this.componentSelector).jqxGrid('clear');
            }

            return clear;
        }()
    }, {
        key: 'destroy',
        value: function () {
            function destroy() {
                JQXLite(this.componentSelector).jqxGrid('destroy');
            }

            return destroy;
        }()
    }, {
        key: 'endupdate',
        value: function () {
            function endupdate() {
                JQXLite(this.componentSelector).jqxGrid('endupdate');
            }

            return endupdate;
        }()
    }, {
        key: 'ensurerowvisible',
        value: function () {
            function ensurerowvisible(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('ensurerowvisible', rowBoundIndex);
            }

            return ensurerowvisible;
        }()
    }, {
        key: 'focus',
        value: function () {
            function focus() {
                JQXLite(this.componentSelector).jqxGrid('focus');
            }

            return focus;
        }()
    }, {
        key: 'getcolumnindex',
        value: function () {
            function getcolumnindex(dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcolumnindex', dataField);
            }

            return getcolumnindex;
        }()
    }, {
        key: 'getcolumn',
        value: function () {
            function getcolumn(dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcolumn', dataField);
            }

            return getcolumn;
        }()
    }, {
        key: 'getcolumnproperty',
        value: function () {
            function getcolumnproperty(dataField, propertyName) {
                return JQXLite(this.componentSelector).jqxGrid('getcolumnproperty', dataField, propertyName);
            }

            return getcolumnproperty;
        }()
    }, {
        key: 'getrowid',
        value: function () {
            function getrowid(rowBoundIndex) {
                return JQXLite(this.componentSelector).jqxGrid('getrowid', rowBoundIndex);
            }

            return getrowid;
        }()
    }, {
        key: 'getrowdata',
        value: function () {
            function getrowdata(rowBoundIndex) {
                return JQXLite(this.componentSelector).jqxGrid('getrowdata', rowBoundIndex);
            }

            return getrowdata;
        }()
    }, {
        key: 'getrowdatabyid',
        value: function () {
            function getrowdatabyid(rowID) {
                return JQXLite(this.componentSelector).jqxGrid('getrowdatabyid', rowID);
            }

            return getrowdatabyid;
        }()
    }, {
        key: 'getrowboundindexbyid',
        value: function () {
            function getrowboundindexbyid(rowID) {
                return JQXLite(this.componentSelector).jqxGrid('getrowboundindexbyid', rowID);
            }

            return getrowboundindexbyid;
        }()
    }, {
        key: 'getrowboundindex',
        value: function () {
            function getrowboundindex(rowDisplayIndex) {
                return JQXLite(this.componentSelector).jqxGrid('getrowboundindex', rowDisplayIndex);
            }

            return getrowboundindex;
        }()
    }, {
        key: 'getrows',
        value: function () {
            function getrows() {
                return JQXLite(this.componentSelector).jqxGrid('getrows');
            }

            return getrows;
        }()
    }, {
        key: 'getboundrows',
        value: function () {
            function getboundrows() {
                return JQXLite(this.componentSelector).jqxGrid('getboundrows');
            }

            return getboundrows;
        }()
    }, {
        key: 'getdisplayrows',
        value: function () {
            function getdisplayrows() {
                return JQXLite(this.componentSelector).jqxGrid('getdisplayrows');
            }

            return getdisplayrows;
        }()
    }, {
        key: 'getdatainformation',
        value: function () {
            function getdatainformation() {
                return JQXLite(this.componentSelector).jqxGrid('getdatainformation');
            }

            return getdatainformation;
        }()
    }, {
        key: 'getsortinformation',
        value: function () {
            function getsortinformation() {
                return JQXLite(this.componentSelector).jqxGrid('getsortinformation');
            }

            return getsortinformation;
        }()
    }, {
        key: 'getpaginginformation',
        value: function () {
            function getpaginginformation() {
                return JQXLite(this.componentSelector).jqxGrid('getpaginginformation');
            }

            return getpaginginformation;
        }()
    }, {
        key: 'hidecolumn',
        value: function () {
            function hidecolumn(dataField) {
                JQXLite(this.componentSelector).jqxGrid('hidecolumn', dataField);
            }

            return hidecolumn;
        }()
    }, {
        key: 'hideloadelement',
        value: function () {
            function hideloadelement() {
                JQXLite(this.componentSelector).jqxGrid('hideloadelement');
            }

            return hideloadelement;
        }()
    }, {
        key: 'hiderowdetails',
        value: function () {
            function hiderowdetails(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('hiderowdetails', rowBoundIndex);
            }

            return hiderowdetails;
        }()
    }, {
        key: 'iscolumnvisible',
        value: function () {
            function iscolumnvisible(dataField) {
                return JQXLite(this.componentSelector).jqxGrid('iscolumnvisible', dataField);
            }

            return iscolumnvisible;
        }()
    }, {
        key: 'iscolumnpinned',
        value: function () {
            function iscolumnpinned(dataField) {
                return JQXLite(this.componentSelector).jqxGrid('iscolumnpinned', dataField);
            }

            return iscolumnpinned;
        }()
    }, {
        key: 'localizestrings',
        value: function () {
            function localizestrings(localizationObject) {
                JQXLite(this.componentSelector).jqxGrid('localizestrings', localizationObject);
            }

            return localizestrings;
        }()
    }, {
        key: 'pincolumn',
        value: function () {
            function pincolumn(dataField) {
                JQXLite(this.componentSelector).jqxGrid('pincolumn', dataField);
            }

            return pincolumn;
        }()
    }, {
        key: 'refreshdata',
        value: function () {
            function refreshdata() {
                JQXLite(this.componentSelector).jqxGrid('refreshdata');
            }

            return refreshdata;
        }()
    }, {
        key: 'refresh',
        value: function () {
            function refresh() {
                JQXLite(this.componentSelector).jqxGrid('refresh');
            }

            return refresh;
        }()
    }, {
        key: 'performRender',
        value: function () {
            function performRender() {
                JQXLite(this.componentSelector).jqxGrid('render');
            }

            return performRender;
        }()
    }, {
        key: 'scrolloffset',
        value: function () {
            function scrolloffset(top, left) {
                JQXLite(this.componentSelector).jqxGrid('scrolloffset', top, left);
            }

            return scrolloffset;
        }()
    }, {
        key: 'scrollposition',
        value: function () {
            function scrollposition() {
                return JQXLite(this.componentSelector).jqxGrid('scrollposition');
            }

            return scrollposition;
        }()
    }, {
        key: 'showloadelement',
        value: function () {
            function showloadelement() {
                JQXLite(this.componentSelector).jqxGrid('showloadelement');
            }

            return showloadelement;
        }()
    }, {
        key: 'showrowdetails',
        value: function () {
            function showrowdetails(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('showrowdetails', rowBoundIndex);
            }

            return showrowdetails;
        }()
    }, {
        key: 'setcolumnindex',
        value: function () {
            function setcolumnindex(dataField, index) {
                JQXLite(this.componentSelector).jqxGrid('setcolumnindex', dataField, index);
            }

            return setcolumnindex;
        }()
    }, {
        key: 'setcolumnproperty',
        value: function () {
            function setcolumnproperty(dataField, propertyName, propertyValue) {
                JQXLite(this.componentSelector).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
            }

            return setcolumnproperty;
        }()
    }, {
        key: 'showcolumn',
        value: function () {
            function showcolumn(dataField) {
                JQXLite(this.componentSelector).jqxGrid('showcolumn', dataField);
            }

            return showcolumn;
        }()
    }, {
        key: 'unpincolumn',
        value: function () {
            function unpincolumn(dataField) {
                JQXLite(this.componentSelector).jqxGrid('unpincolumn', dataField);
            }

            return unpincolumn;
        }()
    }, {
        key: 'updatebounddata',
        value: function () {
            function updatebounddata(type) {
                JQXLite(this.componentSelector).jqxGrid('updatebounddata', type);
            }

            return updatebounddata;
        }()
    }, {
        key: 'updating',
        value: function () {
            function updating() {
                return JQXLite(this.componentSelector).jqxGrid('updating');
            }

            return updating;
        }()
    }, {
        key: 'getsortcolumn',
        value: function () {
            function getsortcolumn() {
                return JQXLite(this.componentSelector).jqxGrid('getsortcolumn');
            }

            return getsortcolumn;
        }()
    }, {
        key: 'removesort',
        value: function () {
            function removesort() {
                JQXLite(this.componentSelector).jqxGrid('removesort');
            }

            return removesort;
        }()
    }, {
        key: 'sortby',
        value: function () {
            function sortby(dataField, sortOrder) {
                JQXLite(this.componentSelector).jqxGrid('sortby', dataField, sortOrder);
            }

            return sortby;
        }()
    }, {
        key: 'addgroup',
        value: function () {
            function addgroup(dataField) {
                JQXLite(this.componentSelector).jqxGrid('addgroup', dataField);
            }

            return addgroup;
        }()
    }, {
        key: 'cleargroups',
        value: function () {
            function cleargroups() {
                JQXLite(this.componentSelector).jqxGrid('cleargroups');
            }

            return cleargroups;
        }()
    }, {
        key: 'collapsegroup',
        value: function () {
            function collapsegroup(group) {
                JQXLite(this.componentSelector).jqxGrid('collapsegroup', group);
            }

            return collapsegroup;
        }()
    }, {
        key: 'collapseallgroups',
        value: function () {
            function collapseallgroups() {
                JQXLite(this.componentSelector).jqxGrid('collapseallgroups');
            }

            return collapseallgroups;
        }()
    }, {
        key: 'expandallgroups',
        value: function () {
            function expandallgroups() {
                JQXLite(this.componentSelector).jqxGrid('expandallgroups');
            }

            return expandallgroups;
        }()
    }, {
        key: 'expandgroup',
        value: function () {
            function expandgroup(group) {
                JQXLite(this.componentSelector).jqxGrid('expandgroup', group);
            }

            return expandgroup;
        }()
    }, {
        key: 'getrootgroupscount',
        value: function () {
            function getrootgroupscount() {
                return JQXLite(this.componentSelector).jqxGrid('getrootgroupscount');
            }

            return getrootgroupscount;
        }()
    }, {
        key: 'getgroup',
        value: function () {
            function getgroup(groupIndex) {
                return JQXLite(this.componentSelector).jqxGrid('getgroup', groupIndex);
            }

            return getgroup;
        }()
    }, {
        key: 'insertgroup',
        value: function () {
            function insertgroup(groupIndex, dataField) {
                JQXLite(this.componentSelector).jqxGrid('insertgroup', groupIndex, dataField);
            }

            return insertgroup;
        }()
    }, {
        key: 'iscolumngroupable',
        value: function () {
            function iscolumngroupable() {
                return JQXLite(this.componentSelector).jqxGrid('iscolumngroupable');
            }

            return iscolumngroupable;
        }()
    }, {
        key: 'removegroupat',
        value: function () {
            function removegroupat(groupIndex) {
                JQXLite(this.componentSelector).jqxGrid('removegroupat', groupIndex);
            }

            return removegroupat;
        }()
    }, {
        key: 'removegroup',
        value: function () {
            function removegroup(dataField) {
                JQXLite(this.componentSelector).jqxGrid('removegroup', dataField);
            }

            return removegroup;
        }()
    }, {
        key: 'addfilter',
        value: function () {
            function addfilter(dataField, filterGroup, refreshGrid) {
                JQXLite(this.componentSelector).jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
            }

            return addfilter;
        }()
    }, {
        key: 'applyfilters',
        value: function () {
            function applyfilters() {
                JQXLite(this.componentSelector).jqxGrid('applyfilters');
            }

            return applyfilters;
        }()
    }, {
        key: 'clearfilters',
        value: function () {
            function clearfilters() {
                JQXLite(this.componentSelector).jqxGrid('clearfilters');
            }

            return clearfilters;
        }()
    }, {
        key: 'getfilterinformation',
        value: function () {
            function getfilterinformation() {
                return JQXLite(this.componentSelector).jqxGrid('getfilterinformation');
            }

            return getfilterinformation;
        }()
    }, {
        key: 'getcolumnat',
        value: function () {
            function getcolumnat(index) {
                return JQXLite(this.componentSelector).jqxGrid('getcolumnat', index);
            }

            return getcolumnat;
        }()
    }, {
        key: 'removefilter',
        value: function () {
            function removefilter(dataField, refreshGrid) {
                JQXLite(this.componentSelector).jqxGrid('removefilter', dataField, refreshGrid);
            }

            return removefilter;
        }()
    }, {
        key: 'refreshfilterrow',
        value: function () {
            function refreshfilterrow() {
                JQXLite(this.componentSelector).jqxGrid('refreshfilterrow');
            }

            return refreshfilterrow;
        }()
    }, {
        key: 'gotopage',
        value: function () {
            function gotopage(pageNumber) {
                JQXLite(this.componentSelector).jqxGrid('gotopage', pageNumber);
            }

            return gotopage;
        }()
    }, {
        key: 'gotoprevpage',
        value: function () {
            function gotoprevpage() {
                JQXLite(this.componentSelector).jqxGrid('gotoprevpage');
            }

            return gotoprevpage;
        }()
    }, {
        key: 'gotonextpage',
        value: function () {
            function gotonextpage() {
                JQXLite(this.componentSelector).jqxGrid('gotonextpage');
            }

            return gotonextpage;
        }()
    }, {
        key: 'addrow',
        value: function () {
            function addrow(rowIds, data, rowPosition) {
                JQXLite(this.componentSelector).jqxGrid('addrow', rowIds, data, rowPosition);
            }

            return addrow;
        }()
    }, {
        key: 'begincelledit',
        value: function () {
            function begincelledit(rowBoundIndex, dataField) {
                JQXLite(this.componentSelector).jqxGrid('begincelledit', rowBoundIndex, dataField);
            }

            return begincelledit;
        }()
    }, {
        key: 'beginrowedit',
        value: function () {
            function beginrowedit(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('beginrowedit', rowBoundIndex);
            }

            return beginrowedit;
        }()
    }, {
        key: 'closemenu',
        value: function () {
            function closemenu() {
                JQXLite(this.componentSelector).jqxGrid('closemenu');
            }

            return closemenu;
        }()
    }, {
        key: 'deleterow',
        value: function () {
            function deleterow(rowIds) {
                JQXLite(this.componentSelector).jqxGrid('deleterow', rowIds);
            }

            return deleterow;
        }()
    }, {
        key: 'endcelledit',
        value: function () {
            function endcelledit(rowBoundIndex, dataField, confirmChanges) {
                JQXLite(this.componentSelector).jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
            }

            return endcelledit;
        }()
    }, {
        key: 'endrowedit',
        value: function () {
            function endrowedit(rowBoundIndex, confirmChanges) {
                JQXLite(this.componentSelector).jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
            }

            return endrowedit;
        }()
    }, {
        key: 'getcell',
        value: function () {
            function getcell(rowBoundIndex, datafield) {
                return JQXLite(this.componentSelector).jqxGrid('getcell', rowBoundIndex, datafield);
            }

            return getcell;
        }()
    }, {
        key: 'getcellatposition',
        value: function () {
            function getcellatposition(left, top) {
                return JQXLite(this.componentSelector).jqxGrid('getcellatposition', left, top);
            }

            return getcellatposition;
        }()
    }, {
        key: 'getcelltext',
        value: function () {
            function getcelltext(rowBoundIndex, dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcelltext', rowBoundIndex, dataField);
            }

            return getcelltext;
        }()
    }, {
        key: 'getcelltextbyid',
        value: function () {
            function getcelltextbyid(rowID, dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcelltextbyid', rowID, dataField);
            }

            return getcelltextbyid;
        }()
    }, {
        key: 'getcellvaluebyid',
        value: function () {
            function getcellvaluebyid(rowID, dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcellvaluebyid', rowID, dataField);
            }

            return getcellvaluebyid;
        }()
    }, {
        key: 'getcellvalue',
        value: function () {
            function getcellvalue(rowBoundIndex, dataField) {
                return JQXLite(this.componentSelector).jqxGrid('getcellvalue', rowBoundIndex, dataField);
            }

            return getcellvalue;
        }()
    }, {
        key: 'isBindingCompleted',
        value: function () {
            function isBindingCompleted() {
                return JQXLite(this.componentSelector).jqxGrid('isBindingCompleted');
            }

            return isBindingCompleted;
        }()
    }, {
        key: 'openmenu',
        value: function () {
            function openmenu(dataField) {
                JQXLite(this.componentSelector).jqxGrid('openmenu', dataField);
            }

            return openmenu;
        }()
    }, {
        key: 'setcellvalue',
        value: function () {
            function setcellvalue(rowBoundIndex, dataField, value) {
                JQXLite(this.componentSelector).jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
            }

            return setcellvalue;
        }()
    }, {
        key: 'setcellvaluebyid',
        value: function () {
            function setcellvaluebyid(rowID, dataField, value) {
                JQXLite(this.componentSelector).jqxGrid('setcellvaluebyid', rowID, dataField, value);
            }

            return setcellvaluebyid;
        }()
    }, {
        key: 'showvalidationpopup',
        value: function () {
            function showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
                JQXLite(this.componentSelector).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
            }

            return showvalidationpopup;
        }()
    }, {
        key: 'updaterow',
        value: function () {
            function updaterow(rowIds, data) {
                JQXLite(this.componentSelector).jqxGrid('updaterow', rowIds, data);
            }

            return updaterow;
        }()
    }, {
        key: 'clearselection',
        value: function () {
            function clearselection() {
                JQXLite(this.componentSelector).jqxGrid('clearselection');
            }

            return clearselection;
        }()
    }, {
        key: 'getselectedrowindex',
        value: function () {
            function getselectedrowindex() {
                return JQXLite(this.componentSelector).jqxGrid('getselectedrowindex');
            }

            return getselectedrowindex;
        }()
    }, {
        key: 'getselectedrowindexes',
        value: function () {
            function getselectedrowindexes() {
                return JQXLite(this.componentSelector).jqxGrid('getselectedrowindexes');
            }

            return getselectedrowindexes;
        }()
    }, {
        key: 'getselectedcell',
        value: function () {
            function getselectedcell() {
                return JQXLite(this.componentSelector).jqxGrid('getselectedcell');
            }

            return getselectedcell;
        }()
    }, {
        key: 'getselectedcells',
        value: function () {
            function getselectedcells() {
                return JQXLite(this.componentSelector).jqxGrid('getselectedcells');
            }

            return getselectedcells;
        }()
    }, {
        key: 'selectcell',
        value: function () {
            function selectcell(rowBoundIndex, dataField) {
                JQXLite(this.componentSelector).jqxGrid('selectcell', rowBoundIndex, dataField);
            }

            return selectcell;
        }()
    }, {
        key: 'selectallrows',
        value: function () {
            function selectallrows() {
                JQXLite(this.componentSelector).jqxGrid('selectallrows');
            }

            return selectallrows;
        }()
    }, {
        key: 'selectrow',
        value: function () {
            function selectrow(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('selectrow', rowBoundIndex);
            }

            return selectrow;
        }()
    }, {
        key: 'unselectrow',
        value: function () {
            function unselectrow(rowBoundIndex) {
                JQXLite(this.componentSelector).jqxGrid('unselectrow', rowBoundIndex);
            }

            return unselectrow;
        }()
    }, {
        key: 'unselectcell',
        value: function () {
            function unselectcell(rowBoundIndex, dataField) {
                JQXLite(this.componentSelector).jqxGrid('unselectcell', rowBoundIndex, dataField);
            }

            return unselectcell;
        }()
    }, {
        key: 'getcolumnaggregateddata',
        value: function () {
            function getcolumnaggregateddata(dataField, aggregates) {
                return JQXLite(this.componentSelector).jqxGrid('getcolumnaggregateddata', dataField, aggregates);
            }

            return getcolumnaggregateddata;
        }()
    }, {
        key: 'refreshaggregates',
        value: function () {
            function refreshaggregates() {
                JQXLite(this.componentSelector).jqxGrid('refreshaggregates');
            }

            return refreshaggregates;
        }()
    }, {
        key: 'renderaggregates',
        value: function () {
            function renderaggregates() {
                JQXLite(this.componentSelector).jqxGrid('renderaggregates');
            }

            return renderaggregates;
        }()
    }, {
        key: 'exportdata',
        value: function () {
            function exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
                return JQXLite(this.componentSelector).jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
            }

            return exportdata;
        }()
    }, {
        key: 'getstate',
        value: function () {
            function getstate() {
                return JQXLite(this.componentSelector).jqxGrid('getstate');
            }

            return getstate;
        }()
    }, {
        key: 'loadstate',
        value: function () {
            function loadstate(stateObject) {
                JQXLite(this.componentSelector).jqxGrid('loadstate', stateObject);
            }

            return loadstate;
        }()
    }, {
        key: 'savestate',
        value: function () {
            function savestate() {
                return JQXLite(this.componentSelector).jqxGrid('savestate');
            }

            return savestate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var id = 'jqxGrid' + JQXLite.generateID();
                this.componentSelector = '#' + id;
                return _react2['default'].createElement(
                    'div',
                    { id: id },
                    this.props.value,
                    this.props.children
                );
            }

            return render;
        }()
    }]);
    return JqxGrid;
}(_react2['default'].Component);

exports['default'] = JqxGrid;
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var APP_TITLE = exports.APP_TITLE = 'London Betexchange v1.0';

var APP_URL_USERS = exports.APP_URL_USERS = '/users';
var APP_URL_ACCOUNTS = exports.APP_URL_ACCOUNTS = '/accounts';
var APP_URL_TEAMS = exports.APP_URL_TEAMS = '/teams';
var APP_URL_MATCHES = exports.APP_URL_MATCHES = '/matches';
var APP_URL_MDI_MATCH = exports.APP_URL_MDI_MATCH = '/mdimatch';
var APP_URL_MATCH_ENTRIES = exports.APP_URL_MATCH_ENTRIES = '/match_entries';
var APP_URL_JOURNALS = exports.APP_URL_JOURNALS = '/journals';
var APP_URL_JOURNAL_ENTRIES = exports.APP_URL_JOURNAL_ENTRIES = '/journal_entries';
var APP_URL_REPORT_BSHEET = exports.APP_URL_REPORT_BSHEET = '/report_bsheet';
var APP_URL_REPORT_JOURNAL_SUMMARY = exports.APP_URL_REPORT_JOURNAL_SUMMARY = '/report_journal_summary';
var APP_URL_REPORT_PL_MATCH_WISE = exports.APP_URL_REPORT_PL_MATCH_WISE = '/reports/pl_matchwise';
var APP_URL_REPORT_PL_MATCH_ACCOUNTWISE = exports.APP_URL_REPORT_PL_MATCH_ACCOUNTWISE = '/reports/pl_match_accountwise';
var APP_URL_REPORT_CONNECT = exports.APP_URL_REPORT_CONNECT = '/reports/connect';

var APP_LOCATION_HREF_MDI_MATCH = exports.APP_LOCATION_HREF_MDI_MATCH = '/#' + APP_URL_MDI_MATCH + '/';

var API_URL_USER = exports.API_URL_USER = '/users';
var API_URL_CHANGE_PWD = exports.API_URL_CHANGE_PWD = '/users/changepassword';

var URL_MATCHES = exports.URL_MATCHES = '/matches';
var URL_MATCH_TEAMS = exports.URL_MATCH_TEAMS = '/match_teams';
var URL_MATCH_TEAMS_SET_LOSER = exports.URL_MATCH_TEAMS_SET_LOSER = '/match_teams/set_loser';
var URL_MATCH_TEAMS_SET_WINNER = exports.URL_MATCH_TEAMS_SET_WINNER = '/match_teams/set_winner';
var URL_MATCH_TEAMS_SET_UNSET_LOSER = exports.URL_MATCH_TEAMS_SET_UNSET_LOSER = '/match_teams/unset_loser';
var URL_MATCH_TEAMS_SET_UNDECLARE_MATCH = exports.URL_MATCH_TEAMS_SET_UNDECLARE_MATCH = '/match_teams/undeclare_match';
var URL_MATCH_ENTRIES = exports.URL_MATCH_ENTRIES = '/match_entries';
var URL_MATCH_ENTRIES_MATCH = exports.URL_MATCH_ENTRIES_MATCH = '/match_entries/match';
var URL_MATCH_ENTRIES_TEAM_WINLOSSS_LIST = exports.URL_MATCH_ENTRIES_TEAM_WINLOSSS_LIST = '/match_entries/team_winloss_list';
var URL_SESSIONS = exports.URL_SESSIONS = '/sessions';
var URL_SESSION_ENTRIES = exports.URL_SESSION_ENTRIES = '/session_entries';
var URL_SESSION_ENTRIES_WINLOSSS_LIST = exports.URL_SESSION_ENTRIES_WINLOSSS_LIST = '/session_entries/winlosslist';

var URL_METERS = exports.URL_METERS = '/meters';
var URL_PLAYER_ENTRIES = exports.URL_PLAYER_ENTRIES = '/meter_entries';
var URL_PLAYER_ENTRIES_WINLOSSS_LIST = exports.URL_PLAYER_ENTRIES_WINLOSSS_LIST = '/meter_entries/winlosslist';

var LIST_COMM_TYPE = exports.LIST_COMM_TYPE = [{ id: "net", text: "Net" }, { id: "entrywise", text: "Entry Wise" }];

var LIST_STATUS_BOOLEAN = exports.LIST_STATUS_BOOLEAN = [{ id: "true", text: "Yes" }, { id: "false", text: "No" }];

var LIST_MATCH_TYPE = exports.LIST_MATCH_TYPE = [{ id: "One Day", text: "One Day" }, { id: "Twenty-20", text: "Twenty-20" }, { id: "Test", text: "Test" }, { id: "Cup", text: "Cup" }];

var LIST_SESSION_YN = exports.LIST_SESSION_YN = [{ id: "Y", text: "Y" }, { id: "N", text: "N" }];

var LIST_YN = exports.LIST_YN = [{ id: "Y", text: "Y" }, { id: "N", text: "N" }];

var LIST_MATCH_LK = exports.LIST_MATCH_LK = [{ id: "L", text: "L" }, { id: "K", text: "K" }];

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchHelper = function () {
	function MatchHelper() {
		(0, _classCallCheck3['default'])(this, MatchHelper);
	}

	(0, _createClass3['default'])(MatchHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					url: "/matches"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/matches/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/matches",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/matches/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/matches/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = MatchHelper.update(id, data);
				} else {
					var ajaxObj = MatchHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return MatchHelper;
}();

exports['default'] = MatchHelper;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _localstore = __webpack_require__(322);

var _localstore2 = _interopRequireDefault(_localstore);

var _UserHelper = __webpack_require__(77);

var _UserHelper2 = _interopRequireDefault(_UserHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Auth = function () {
	function Auth() {
		(0, _classCallCheck3['default'])(this, Auth);
	}

	(0, _createClass3['default'])(Auth, null, [{
		key: 'attempt',
		value: function () {
			function attempt(_ref) {
				var _ref$username = _ref.username,
				    username = _ref$username === undefined ? null : _ref$username,
				    _ref$password = _ref.password,
				    password = _ref$password === undefined ? null : _ref$password;

				var ajaxObj = axios.post("/users/login", {
					username: username,
					password: password
				});

				ajaxObj.then(function (response) {
					Auth.login(response.data.token);
				})['catch'](function (error) {
					console.log(error);
				});

				return ajaxObj;
			}

			return attempt;
		}()
	}, {
		key: 'login',
		value: function () {
			function login() {
				var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				if (!token) return "Cannot Login";
				localStorage.setItem('token', token);
			}

			return login;
		}()
	}, {
		key: 'logout',
		value: function () {
			function logout() {
				localStorage.removeItem('token');
				_localstore2['default'].clear();
			}

			return logout;
		}()
	}, {
		key: 'check',
		value: function () {
			function check() {
				return this.getToken() ? true : false;
			}

			return check;
		}()
	}, {
		key: 'getToken',
		value: function () {
			function getToken() {
				return localStorage.getItem('token');
			}

			return getToken;
		}()
	}, {
		key: 'getTokenDecoded',
		value: function () {
			function getTokenDecoded() {
				var token = Auth.getToken();
				if (!token) return {};
				return jwt_decode(Auth.getToken());
			}

			return getTokenDecoded;
		}()
	}, {
		key: 'is_admin',
		value: function () {
			function is_admin() {
				var data = Auth.getTokenDecoded();
				return data.is_admin;
			}

			return is_admin;
		}()
	}, {
		key: 'getUserID',
		value: function () {
			function getUserID() {
				var data = Auth.getTokenDecoded();
				return data._id;
			}

			return getUserID;
		}()

		// Header which i will add to ajax request

	}, {
		key: 'header',
		value: function () {
			function header() {
				return {
					'Authorization': 'Bearer ' + Auth.getToken(),
					'x-access-token': Auth.getToken()
				};
			}

			return header;
		}()
	}, {
		key: 'getTokenBearer',
		value: function () {
			function getTokenBearer() {
				return 'Bearer ' + Auth.getToken();
			}

			return getTokenBearer;
		}()
	}, {
		key: 'getCurrentUser',
		value: function () {
			function getCurrentUser() {
				return _UserHelper2['default'].showCurrent()['catch'](function (error) {
					Auth.logout();
				});
			}

			return getCurrentUser;
		}()
	}]);
	return Auth;
}();

exports['default'] = Auth;
module.exports = exports['default'];

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CSelect = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(CSelect, _Component);

    function CSelect(props) {
        (0, _classCallCheck3["default"])(this, CSelect);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (CSelect.__proto__ || (0, _getPrototypeOf2["default"])(CSelect)).call(this, props));

        _this.handleChange = function (event) {
            // var val = parseFloat(event.target.value).toFixed(2);
            var value = event.target.value;
            _this.setState({
                value: value
            });
            _this.props.onChange(value);
        };

        _this.state = {
            value: _this.props.value
        };
        return _this;
    }

    (0, _createClass3["default"])(CSelect, [{
        key: "getSelectedValue",
        value: function () {
            function getSelectedValue() {
                var e = this.refs.select;
                var val = e.options[e.selectedIndex].value;
                return val;
            }

            return getSelectedValue;
        }()
    }, {
        key: "setSelectedValue",
        value: function () {
            function setSelectedValue(val) {
                this.refs.select.value = val;
            }

            return setSelectedValue;
        }()
    }, {
        key: "componentDidMount",
        value: function () {
            function componentDidMount() {
                // alert(this.getSelectedValue())
                // this.setSelectedValue("L")
            }

            return componentDidMount;
        }()
    }, {
        key: "componentWillReceiveProps",
        value: function () {
            function componentWillReceiveProps(nextProps) {
                if (nextProps.value !== this.props.value) {
                    this.setState({ value: nextProps.value });
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: "renderOptions",
        value: function () {
            function renderOptions() {
                var items = this.props.items;
                return items.map(function (item, i) {
                    // const selected = (this.props.selected == item.id) ? "selected" : ""
                    return _react2["default"].createElement(
                        "option",
                        { value: item.id, key: item.id },
                        item.text
                    );
                });
            }

            return renderOptions;
        }()
    }, {
        key: "render",
        value: function () {
            function render() {
                // console.log(this.state.value)
                return _react2["default"].createElement(
                    "select",
                    { ref: "select", className: this.props.className, onChange: this.handleChange,
                        value: this.state.value, name: this.props.name },
                    this.renderOptions()
                );
            }

            return render;
        }()
    }]);
    return CSelect;
}(_react.Component), _class.defaultProps = {
    name: "",
    className: "",
    width: 225,
    onChange: function () {
        function onChange() {}

        return onChange;
    }(),
    onSelect: function () {
        function onSelect() {}

        return onSelect;
    }(),
    selectedValue: null,
    items: []
}, _temp);
exports["default"] = CSelect;
module.exports = exports["default"];

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var GlobalHelper = function () {
	function GlobalHelper() {
		(0, _classCallCheck3['default'])(this, GlobalHelper);
	}

	(0, _createClass3['default'])(GlobalHelper, null, [{
		key: 'mounstrapFormInit',
		value: function () {
			function mounstrapFormInit(el) {
				// var moustrapForm = document.querySelector('.moustrapform');
				var moustrapFormClass = new Mousetrap(el);
				// console.log(moustrapFormClass)
				moustrapFormClass.stopCallback = function (e, element, combo) {
					return element.tagName == 'BUTTON' || element.tagName == 'TEXTAREA' || element.contentEditable && element.contentEditable == 'true';
				};
				moustrapFormClass.bind('enter', function (e) {
					console.log("enter");
					// Submit button was automaticall clicking on tabnext because both enter and tabnext event firing together so i delayed the tabnext event
					setTimeout(function () {
						$.tabNext();
					}, 50);
				});
				// moustrapFormClass.reset()

				return moustrapFormClass;
			}

			return mounstrapFormInit;
		}()
	}]);
	return GlobalHelper;
}();

exports['default'] = GlobalHelper;
module.exports = exports['default'];

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(370), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InputDecimal = (_temp = _class = function (_React$Component) {
  (0, _inherits3['default'])(InputDecimal, _React$Component);

  function InputDecimal(props) {
    (0, _classCallCheck3['default'])(this, InputDecimal);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (InputDecimal.__proto__ || (0, _getPrototypeOf2['default'])(InputDecimal)).call(this, props));

    _this.handleChange = function (event) {
      // var val = parseFloat(event.target.value).toFixed(2);
      var value = event.target.value.replace(/[^0-9\.\-]+/g, '');
      _this.setState({
        value: value
      });
      _this.props.onChange(value);
    };

    _this.handleBlur = function (event) {
      var zero = 0;
      var value = parseFloat(event.target.value).toFixed(_this.props.scale);
      value = isNaN(value) ? zero.toFixed(_this.props.scale) : value;
      // console.log(value)
      _this.setState({
        value: value
      });
    };

    _this.state = {
      value: parseFloat(_this.props.value).toFixed(2)
    };
    return _this;
  }

  (0, _createClass3['default'])(InputDecimal, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {}

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate() {}

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
          this.setState({ value: nextProps.value });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'isNumberKey',
    value: function () {
      function isNumberKey(evt) {
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;

        return true;
      }

      return isNumberKey;
    }()
  }, {
    key: 'handleKeypress',
    value: function () {
      function handleKeypress(evt) {
        return false;
      }

      return handleKeypress;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        // console.log(this.state.value )
        // var value = this.state.value ? parseFloat(this.state.value).toFixed(2) : 0;
        return _react2['default'].createElement('input', {
          type: this.props.type,
          name: this.props.name,
          className: this.props.className,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          value: this.state.value,
          tabIndex: this.props.tabIndex,
          min: this.props.min
        });
      }

      return render;
    }()
  }]);
  return InputDecimal;
}(_react2['default'].Component), _class.defaultProps = {
  className: '',
  type: 'text',
  name: 'input',
  value: 0,
  scale: 2,
  tabIndex: null,
  min: null,
  onChange: function () {
    function onChange() {}

    return onChange;
  }()
}, _temp);

InputDecimal.propTypes = {};

exports['default'] = InputDecimal;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxcombobox = __webpack_require__(81);

var _react_jqxcombobox2 = _interopRequireDefault(_react_jqxcombobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBoxLocal = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComboBoxLocal, _Component);

    function ComboBoxLocal() {
        (0, _classCallCheck3['default'])(this, ComboBoxLocal);
        return (0, _possibleConstructorReturn3['default'])(this, (ComboBoxLocal.__proto__ || (0, _getPrototypeOf2['default'])(ComboBoxLocal)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ComboBoxLocal, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                this.refs.Combo.on('change', function (e) {
                    var item = _this2.getSelectedItem();
                    // console.log(item)
                    if (item) {
                        _this2.refs.nameInput.value = item.label;
                        _this2.refs.idInput.value = item.value;
                    } else {
                        _this2.refs.nameInput.value = null;
                        _this2.refs.idInput.value = null;
                    }
                    _this2.props.onChange(e);
                });

                this.refs.Combo.on('select', function (e) {
                    _this2.props.onSelect(e);
                });

                this.refs.Combo.on('close', function (e) {
                    _this2.props.onClose(e);
                });

                if (this.props.selectedValue) {
                    this.setSelectedValue(this.props.selectedValue);
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.data.slice();
                this.dataAdapter.dataBind();

                if (this.props.selectedValue) {
                    this.setSelectedValue(this.props.selectedValue);
                }
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'componentWillUnmount',
        value: function () {
            function componentWillUnmount() {
                // it was giving error on route change it was still calling the change method for eg. Journal Page select account and then change route
                this.refs.Combo.off('change');
            }

            return componentWillUnmount;
        }()
    }, {
        key: 'getSelectedValue',
        value: function () {
            function getSelectedValue() {
                var item = this.refs.Combo.getSelectedItem();
                if (item) return item.value;
                return null;
            }

            return getSelectedValue;
        }()
    }, {
        key: 'getSelectedItem',
        value: function () {
            function getSelectedItem() {
                var item = this.refs.Combo.getSelectedItem();
                if (item) return item;
                return null;
            }

            return getSelectedItem;
        }()
    }, {
        key: 'setSelectedValue',
        value: function () {
            function setSelectedValue(val) {
                this.refs.Combo.selectItem(val);
            }

            return setSelectedValue;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                this.source = {
                    datatype: 'json',
                    datafields: [{ name: this.props.valueMember }, { name: this.props.displayMember }],
                    localdata: this.props.data
                    // url: this.props.url,
                    // async: false
                };
                this.dataAdapter = new $.jqx.dataAdapter(this.source, { async: false });
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement('input', { type: 'hidden', ref: 'nameInput', name: this.props.field_name }),
                    _react2['default'].createElement('input', { type: 'hidden', ref: 'idInput', name: this.props.field_id }),
                    _react2['default'].createElement(_react_jqxcombobox2['default'], { ref: 'Combo',
                        width: this.props.width, height: 22, selectedIndex: -1, source: this.dataAdapter,
                        displayMember: this.props.displayMember, valueMember: this.props.valueMember
                    })
                );
            }

            return render;
        }()
    }]);
    return ComboBoxLocal;
}(_react.Component), _class.defaultProps = {
    field_name: '',
    field_id: '',
    width: 175,
    valueMember: '_id',
    displayMember: 'name',
    data: {},
    onChange: function () {
        function onChange() {}

        return onChange;
    }(),
    onSelect: function () {
        function onSelect() {}

        return onSelect;
    }(),
    onClose: function () {
        function onClose() {}

        return onClose;
    }(),
    selectedValue: null
}, _temp);
exports['default'] = ComboBoxLocal;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(80);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class$defaultProps;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBox2 = __webpack_require__(82);

var _ComboBox3 = _interopRequireDefault(_ComboBox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBoxMember = (_temp = _class = function (_ComboBox) {
  (0, _inherits3['default'])(ComboBoxMember, _ComboBox);

  function ComboBoxMember(props) {
    (0, _classCallCheck3['default'])(this, ComboBoxMember);
    return (0, _possibleConstructorReturn3['default'])(this, (ComboBoxMember.__proto__ || (0, _getPrototypeOf2['default'])(ComboBoxMember)).call(this, props));
  }

  return ComboBoxMember;
}(_ComboBox3['default']), _class.defaultProps = (_class$defaultProps = {
  field_name: '',
  field_id: '',
  width: 225,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onSelect: function () {
    function onSelect() {}

    return onSelect;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  selectedValue: null
}, (0, _defineProperty3['default'])(_class$defaultProps, 'width', 225), (0, _defineProperty3['default'])(_class$defaultProps, 'url', '/accounts'), (0, _defineProperty3['default'])(_class$defaultProps, 'valueMember', '_id'), (0, _defineProperty3['default'])(_class$defaultProps, 'displayMember', 'account_name'), _class$defaultProps), _temp);
exports['default'] = ComboBoxMember;
module.exports = exports['default'];

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchTeamHelper = function () {
	function MatchTeamHelper() {
		(0, _classCallCheck3['default'])(this, MatchTeamHelper);
	}

	(0, _createClass3['default'])(MatchTeamHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					url: "/match_teams",
					params: data
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/match_teams/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/match_teams",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/match_teams/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/match_teams/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var dataJson = URI.parseQuery(data);
				if (dataJson._id) {
					var ajaxObj = MatchHelper.update(dataJson._id, data);
				} else {
					var ajaxObj = MatchHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return MatchTeamHelper;
}();

exports['default'] = MatchTeamHelper;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JournalEntryHelper = function () {
	function JournalEntryHelper() {
		(0, _classCallCheck3['default'])(this, JournalEntryHelper);
	}

	(0, _createClass3['default'])(JournalEntryHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					url: "/journal_entries"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/journal_entries/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/journal_entries",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/journal_entries/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/journal_entries/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = JournalEntryHelper.update(id, data);
				} else {
					var ajaxObj = JournalEntryHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return JournalEntryHelper;
}();

exports['default'] = JournalEntryHelper;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionHelper = function () {
	function SessionHelper() {
		(0, _classCallCheck3['default'])(this, SessionHelper);
	}

	(0, _createClass3['default'])(SessionHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					url: "/sessions"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/sessions/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/sessions",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/sessions/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/sessions/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = SessionHelper.update(id, data);
				} else {
					var ajaxObj = SessionHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return SessionHelper;
}();

exports['default'] = SessionHelper;
module.exports = exports['default'];

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterHelper = function () {
	function MeterHelper() {
		(0, _classCallCheck3['default'])(this, MeterHelper);
	}

	(0, _createClass3['default'])(MeterHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					url: "/meters"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/meters/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/meters",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/meters/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/meters/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = MeterHelper.update(id, data);
				} else {
					var ajaxObj = MeterHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return MeterHelper;
}();

exports['default'] = MeterHelper;
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Constant = __webpack_require__(10);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UserHelper = function () {
    function UserHelper() {
        (0, _classCallCheck3['default'])(this, UserHelper);
    }

    (0, _createClass3['default'])(UserHelper, null, [{
        key: 'index',
        value: function () {
            function index(params) {
                return axios({
                    method: 'get',
                    headers: _auth2['default'].header(),
                    url: "/users",
                    params: params
                });
            }

            return index;
        }()
    }, {
        key: 'show',
        value: function () {
            function show(id) {
                return axios({
                    method: 'get',
                    headers: _auth2['default'].header(),
                    url: "/users/" + id
                });
            }

            return show;
        }()
    }, {
        key: 'store',
        value: function () {
            function store(data) {
                return axios({
                    method: 'post',
                    url: "/users",
                    headers: _auth2['default'].header(),
                    data: data
                });
            }

            return store;
        }()
    }, {
        key: 'update',
        value: function () {
            function update(id, data) {
                return axios({
                    method: 'put',
                    url: "/users/" + id,
                    headers: _auth2['default'].header(),
                    data: data
                });
            }

            return update;
        }()
    }, {
        key: 'save',
        value: function () {
            function save(data) {
                var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                // const dataJson = URI.parseQuery(data)
                if (id) {
                    var ajaxObj = UserHelper.update(id, data);
                } else {
                    var ajaxObj = UserHelper.store(data);
                }
                return ajaxObj;
            }

            return save;
        }()
    }, {
        key: 'showCurrent',
        value: function () {
            function showCurrent() {
                return axios({
                    method: 'get',
                    url: _Constant.API_URL_USER + '/show_current',
                    headers: _auth2['default'].header()
                });
            }

            return showCurrent;
        }()
    }, {
        key: 'changePassword',
        value: function () {
            function changePassword(param) {
                return axios({
                    method: 'post',
                    url: _Constant.API_URL_CHANGE_PWD,
                    headers: _auth2['default'].header(),
                    data: param
                });
            }

            return changePassword;
        }()
    }]);
    return UserHelper;
}();

exports['default'] = UserHelper;
module.exports = exports['default'];

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxcombobox = __webpack_require__(81);

var _react_jqxcombobox2 = _interopRequireDefault(_react_jqxcombobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBox = (_temp = _class = function (_Component) {
  (0, _inherits3['default'])(ComboBox, _Component);

  function ComboBox() {
    (0, _classCallCheck3['default'])(this, ComboBox);
    return (0, _possibleConstructorReturn3['default'])(this, (ComboBox.__proto__ || (0, _getPrototypeOf2['default'])(ComboBox)).apply(this, arguments));
  }

  (0, _createClass3['default'])(ComboBox, [{
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        // it was giving error on route change it was still calling the change method for eg. Journal Page select account and then change route
        this.refs.Combo.off('change');
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _this2 = this;

        this.refs.Combo.on('change', function (e) {
          var item = _this2.getSelectedItem();
          // console.log(item)
          if (item) {
            _this2.refs.nameInput.value = item.label;
            _this2.refs.idInput.value = item.value;
          } else {
            _this2.refs.nameInput.value = null;
            _this2.refs.idInput.value = null;
          }
          _this2.props.onChange(e);
        });

        this.refs.Combo.on('select', function (e) {
          _this2.props.onSelect(e);
        });

        this.refs.Combo.on('close', function (e) {
          _this2.props.onClose(e);
        });

        if (this.props.selectedValue) {
          this.setSelectedValue(this.props.selectedValue);
        }
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate() {
        if (this.props.selectedValue) {
          this.setSelectedValue(this.props.selectedValue);
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'getSelectedValue',
    value: function () {
      function getSelectedValue() {
        var item = this.refs.Combo.getSelectedItem();
        if (item) return item.value;
        return null;
      }

      return getSelectedValue;
    }()
  }, {
    key: 'getSelectedItem',
    value: function () {
      function getSelectedItem() {
        var item = this.refs.Combo.getSelectedItem();
        if (item) return item;
        return null;
      }

      return getSelectedItem;
    }()
  }, {
    key: 'setSelectedValue',
    value: function () {
      function setSelectedValue(val) {
        this.refs.Combo.selectItem(val);
      }

      return setSelectedValue;
    }()
  }, {
    key: 'rebind',
    value: function () {
      function rebind() {
        this.dataAdapter.dataBind();
      }

      return rebind;
    }()
  }, {
    key: 'buttonClick',
    value: function () {
      function buttonClick() {
        console.log(this.refs.JqxComboBox.getSelectedItem().value);
      }

      return buttonClick;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var source = {
          datatype: 'json',
          datafields: [{ name: this.props.valueMember }, { name: this.props.displayMember }],
          url: this.props.url,
          async: false
        };
        this.dataAdapter = new $.jqx.dataAdapter(source, { async: false });

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('input', { type: 'hidden', ref: 'nameInput', name: this.props.field_name }),
          _react2['default'].createElement('input', { type: 'hidden', ref: 'idInput', name: this.props.field_id }),
          _react2['default'].createElement(_react_jqxcombobox2['default'], { ref: 'Combo',
            width: this.props.width, height: 22, selectedIndex: -1, source: this.dataAdapter,
            displayMember: this.props.displayMember, valueMember: this.props.valueMember
          })
        );
      }

      return render;
    }()
  }]);
  return ComboBox;
}(_react.Component), _class.defaultProps = {
  field_name: '',
  field_id: '',
  width: 225,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onSelect: function () {
    function onSelect() {}

    return onSelect;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  selectedValue: null,
  url: '',
  valueMember: '_id',
  displayMember: 'name'
}, _temp);
exports['default'] = ComboBox;
module.exports = exports['default'];

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionEntryHelper = function () {
	function SessionEntryHelper() {
		(0, _classCallCheck3['default'])(this, SessionEntryHelper);
	}

	(0, _createClass3['default'])(SessionEntryHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/session_entries"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/session_entries/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					headers: Auth.header(),
					url: "/session_entries",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					headers: Auth.header(),
					url: "/session_entries/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					headers: Auth.header(),
					url: "/session_entries/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = SessionEntryHelper.update(id, data);
				} else {
					var ajaxObj = SessionEntryHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}, {
		key: 'count_book',
		value: function () {
			function count_book() {
				var match_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/session_entries/count_book",
					params: {
						match_id: match_id
					}
				});
			}

			return count_book;
		}()
	}]);
	return SessionEntryHelper;
}();

exports['default'] = SessionEntryHelper;
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterEntryHelper = function () {
	function MeterEntryHelper() {
		(0, _classCallCheck3['default'])(this, MeterEntryHelper);
	}

	(0, _createClass3['default'])(MeterEntryHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/meter_entries"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/meter_entries/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					headers: Auth.header(),
					url: "/meter_entries",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					headers: Auth.header(),
					url: "/meter_entries/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					headers: Auth.header(),
					url: "/meter_entries/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = MeterEntryHelper.update(id, data);
				} else {
					var ajaxObj = MeterEntryHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}, {
		key: 'count_book',
		value: function () {
			function count_book() {
				var match_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/meter_entries/count_book",
					params: {
						match_id: match_id
					}
				});
			}

			return count_book;
		}()
	}]);
	return MeterEntryHelper;
}();

exports['default'] = MeterEntryHelper;
module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AccountHelper = function () {
	function AccountHelper() {
		(0, _classCallCheck3['default'])(this, AccountHelper);
	}

	(0, _createClass3['default'])(AccountHelper, null, [{
		key: 'index',
		value: function () {
			function index(params) {
				return axios({
					method: 'get',
					url: "/accounts",
					params: params
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					url: "/accounts/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/accounts",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					url: "/accounts/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/accounts/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = AccountHelper.update(id, data);
				} else {
					var ajaxObj = AccountHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}]);
	return AccountHelper;
}();

exports['default'] = AccountHelper;
module.exports = exports['default'];

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(313), __esModule: true };

/***/ }),
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TeamHelper = function () {
	function TeamHelper() {
		(0, _classCallCheck3['default'])(this, TeamHelper);
	}

	(0, _createClass3['default'])(TeamHelper, null, [{
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/teams",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(data) {
				return axios({
					method: 'put',
					url: "/teams/" + data.id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/teams/" + id
				});
			}

			return _delete;
		}()
	}]);
	return TeamHelper;
}();

exports['default'] = TeamHelper;
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(80);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class$defaultProps;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBox2 = __webpack_require__(82);

var _ComboBox3 = _interopRequireDefault(_ComboBox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBoxTeam = (_temp = _class = function (_ComboBox) {
  (0, _inherits3['default'])(ComboBoxTeam, _ComboBox);

  function ComboBoxTeam(props) {
    (0, _classCallCheck3['default'])(this, ComboBoxTeam);
    return (0, _possibleConstructorReturn3['default'])(this, (ComboBoxTeam.__proto__ || (0, _getPrototypeOf2['default'])(ComboBoxTeam)).call(this, props));
  }

  return ComboBoxTeam;
}(_ComboBox3['default']), _class.defaultProps = (_class$defaultProps = {
  field_name: '',
  field_id: '',
  width: 225,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onSelect: function () {
    function onSelect() {}

    return onSelect;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  selectedValue: null
}, (0, _defineProperty3['default'])(_class$defaultProps, 'width', 225), (0, _defineProperty3['default'])(_class$defaultProps, 'url', '/teams'), (0, _defineProperty3['default'])(_class$defaultProps, 'valueMember', '_id'), (0, _defineProperty3['default'])(_class$defaultProps, 'displayMember', 'team_name'), _class$defaultProps), _temp);
exports['default'] = ComboBoxTeam;
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _reactDom = __webpack_require__(19);

var _ComboBox = __webpack_require__(82);

var _ComboBox2 = _interopRequireDefault(_ComboBox);

var _MatchEntryForm = __webpack_require__(386);

var _MatchEntryForm2 = _interopRequireDefault(_MatchEntryForm);

var _MatchEntryGrid = __webpack_require__(388);

var _MatchEntryGrid2 = _interopRequireDefault(_MatchEntryGrid);

var _MatchEntryTeamGrid = __webpack_require__(389);

var _MatchEntryTeamGrid2 = _interopRequireDefault(_MatchEntryTeamGrid);

var _MatchEntryAvgBlock = __webpack_require__(390);

var _MatchEntryAvgBlock2 = _interopRequireDefault(_MatchEntryAvgBlock);

var _MatchEntryBookDdl = __webpack_require__(391);

var _MatchEntryBookDdl2 = _interopRequireDefault(_MatchEntryBookDdl);

var _MatchDeclare = __webpack_require__(392);

var _MatchDeclare2 = _interopRequireDefault(_MatchDeclare);

var _SessionEntryForm = __webpack_require__(184);

var _SessionEntryForm2 = _interopRequireDefault(_SessionEntryForm);

var _SessionEntryWinLossGrid = __webpack_require__(185);

var _SessionEntryWinLossGrid2 = _interopRequireDefault(_SessionEntryWinLossGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchEntry = (_dec = (0, _mobxReact.inject)('globalStore'), _dec2 = (0, _mobxReact.inject)('matchStore'), _dec3 = (0, _mobxReact.inject)('matchEntryStore'), _dec4 = (0, _mobxReact.inject)('sessionStore'), _dec5 = (0, _mobxReact.inject)('sessionEntryStore'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
    (0, _inherits3['default'])(MatchEntry, _React$Component);

    function MatchEntry(props) {
        (0, _classCallCheck3['default'])(this, MatchEntry);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchEntry.__proto__ || (0, _getPrototypeOf2['default'])(MatchEntry)).call(this, props));

        _this.onFormSubmitted = function () {
            _this.fetch();
        };

        _this.fetch = function () {
            _this.props.matchEntryStore.fetchPlInfo(_this.props.matchId, _this.getBookNo());
            _this.props.matchEntryStore.fetchList(_this.props.matchId, _this.getBookNo());
            _this.props.matchStore.fetchTeams(_this.props.matchId);
        };

        _this.onEditButtonClick = function (data) {
            // console.log(data)
            _this.refs.matchEntryForm.edit(data);
        };

        _this.matchGridOnDataUpdate = function () {
            _this.fetch();
        };

        _this.getBookNo = function () {
            try {
                return _this.refs.bookddl.getSelectedValue();
            } catch (err) {
                return 1;
            }
        };

        _this.onBookNoChange = function (bookNo) {
            // console.log(bookNo)
            _this.fetch();
        };

        _this.onDeclareChange = function () {
            _this.props.matchStore.fetch(_this.props.matchId);
            _this.fetch();
        };

        _this.openDeclareWindow = function () {
            var mainDemoContainer = document.getElementById('footerContainer');
            var widgetContainer = document.createElement('div');
            mainDemoContainer.appendChild(widgetContainer);
            // console.log(this.props.matchEntryStore.matchPlInfo.teamsWinLossList.length)
            (0, _reactDom.render)(_react2['default'].createElement(_MatchDeclare2['default'], { teamList: _this.props.matchStore.teamsList, onChange: _this.onDeclareChange }), widgetContainer);
        };

        _this.undeclare = function () {
            var r = confirm("Are you sure to Undeclare ?");
            if (r == true) {
                axios({
                    method: 'post',
                    headers: Auth.header(),
                    url: "/matches/undeclare/" + _this.props.matchId
                }).then(function (res) {
                    _this.props.matchStore.fetch(_this.props.matchId);
                    _this.fetch();
                })['catch'](function (err) {
                    toastr.error(err.response.data.message);
                });
            }
        };

        _this.abandon = function () {
            var r = confirm("Are you sure to Abandon ?");
            if (r == true) {
                axios({
                    method: 'post',
                    headers: Auth.header(),
                    url: "/matches/abandon/" + _this.props.matchId
                }).then(function (res) {
                    _this.props.matchStore.fetch(_this.props.matchId);
                    _this.fetch();
                })['catch'](function (err) {
                    toastr.error(err.response.data.message);
                });
            }
        };

        _this.unAbandon = function () {
            var r = confirm("Are you sure to UnAbandon ?");
            if (r == true) {
                axios({
                    method: 'post',
                    headers: Auth.header(),
                    url: "/matches/unabandon/" + _this.props.matchId
                }).then(function (res) {
                    _this.props.matchStore.fetch(_this.props.matchId);
                    _this.fetch();
                })['catch'](function (err) {
                    toastr.error(err.response.data.message);
                });
            }
        };

        _this.renderDeclareButtons = function () {
            var match = _this.props.matchStore.match;

            if (match.is_abandoned || match.is_monday_final) return null;
            if (match.is_declared) {
                return _react2['default'].createElement(
                    'button',
                    { className: 'btn btn-primary btn-sm', onClick: _this.undeclare },
                    'UnDeclare'
                );
            }
            return _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm', onClick: _this.openDeclareWindow },
                'Declare'
            );
        };

        _this.renderAbandonButtons = function () {
            var match = _this.props.matchStore.match;

            if (match.is_declared || match.is_monday_final) return null;
            if (match.is_abandoned) {
                return _react2['default'].createElement(
                    'button',
                    { className: 'btn btn-primary btn-sm ml-1', onClick: _this.unAbandon },
                    'Un Abandon'
                );
            }
            return _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm ml-1', onClick: _this.abandon },
                'Abandon'
            );
        };

        _this.comboSessionOnClose = function (e) {
            var sessionId = _this.refs.sessionEntryForm.refs.comboSession.getSelectedValue();
            _this.props.globalStore.setSessionId(sessionId);
            _this.props.sessionEntryStore.fetchAll(sessionId);
        };

        _this.sessionEntry_onFormSubmitted = function (response) {
            _this.refs.sessionEntryForm.resetForm();
            _this.props.sessionEntryStore.fetchAll(response.session_id);

            console.log(response);
            _this.props.sessionEntryStore.lastEnteredRun = response.runs;
        };

        _this.refresh1 = function () {
            // this.props.matchStore.count = Math.random()
            _this.props.matchStore.fetch(_this.props.matchId);
        };

        return _this;
    }

    (0, _createClass3['default'])(MatchEntry, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.fetch();
                this.props.matchStore.fetch(this.props.matchId);

                // For Session Form
                this.props.sessionStore.fetchList(this.props.matchId);
            }

            return componentDidMount;
        }()

        //// SESSION ENTRY FUNCTIONS ========================================================

    }, {
        key: 'render',
        value: function () {
            function render() {
                var matchId = this.props.matchId;
                var _props$matchStore = this.props.matchStore,
                    match = _props$matchStore.match,
                    teamsList = _props$matchStore.teamsList;

                if (!this.props.matchId) return null;
                if (_.isEmpty(match)) return null;
                var _props$matchEntryStor = this.props.matchEntryStore,
                    entriesList = _props$matchEntryStor.entriesList,
                    matchPlInfo = _props$matchEntryStor.matchPlInfo;
                var bookNoList = matchPlInfo.bookNoList,
                    teamsWinLossList = matchPlInfo.teamsWinLossList,
                    lastEntryAccountTeamsWinLossList = matchPlInfo.lastEntryAccountTeamsWinLossList;

                // For Session Form

                var selectedSessionId = this.props.globalStore.selectedSessionId;
                var sessionList = this.props.sessionStore.sessionList;
                var _props$sessionEntrySt = this.props.sessionEntryStore,
                    sessionWinLossList = _props$sessionEntrySt.sessionWinLossList,
                    lastEnteredRun = _props$sessionEntrySt.lastEnteredRun;


                var cssClassHidden = match.match_type == "Cup" ? ' hidden' : '';
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-2' },
                            this.renderDeclareButtons(),
                            this.renderAbandonButtons(),
                            _react2['default'].createElement(
                                'div',
                                { className: "mt-2" + cssClassHidden },
                                _react2['default'].createElement(_MatchEntryBookDdl2['default'], { ref: 'bookddl', bookNoList: bookNoList, onChange: this.onBookNoChange }),
                                _react2['default'].createElement(_MatchEntryAvgBlock2['default'], { teamsWinLossList: teamsWinLossList })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'mt-2' },
                                _react2['default'].createElement(_MatchEntryTeamGrid2['default'], { ref: 'teamGrid', teamsWinLossList: teamsWinLossList }),
                                _react2['default'].createElement(_MatchEntryTeamGrid2['default'], { ref: 'teamGrid', teamsWinLossList: lastEntryAccountTeamsWinLossList })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-10' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'mt-2 mb-2' },
                                _react2['default'].createElement(_SessionEntryForm2['default'], { ref: 'sessionEntryForm', matchId: this.props.matchId,
                                    sessionId: selectedSessionId, sessionList: sessionList,
                                    onFormSubmitted: this.sessionEntry_onFormSubmitted,
                                    comboSessionOnClose: this.comboSessionOnClose })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'mb-2' },
                                _react2['default'].createElement(_MatchEntryForm2['default'], { ref: 'matchEntryForm',
                                    matchId: matchId, match: match,
                                    onFormSubmitted: this.onFormSubmitted, getBookNo: this.getBookNo,
                                    teamsList: teamsList })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'matchEntryRow' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'acol acol1' },
                                    _react2['default'].createElement(_MatchEntryGrid2['default'], { ref: 'matchGrid',
                                        onEditButtonClick: this.onEditButtonClick, onDataUpdate: this.matchGridOnDataUpdate,
                                        entriesList: entriesList,
                                        teamsList: teamsList })
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'acol acol2' },
                                    _react2['default'].createElement(_SessionEntryWinLossGrid2['default'], { ref: 'winlossGrid', entriesList: sessionWinLossList, lastEnteredRun: lastEnteredRun })
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchEntry;
}(_react2['default'].Component), _class2.defaultProps = {
    matchId: 1
}, _temp)) || _class) || _class) || _class) || _class) || _class) || _class);
exports['default'] = MatchEntry;
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchEntryHelper = function () {
	function MatchEntryHelper() {
		(0, _classCallCheck3['default'])(this, MatchEntryHelper);
	}

	(0, _createClass3['default'])(MatchEntryHelper, null, [{
		key: 'index',
		value: function () {
			function index(data) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/match_entries"
				});
			}

			return index;
		}()
	}, {
		key: 'show',
		value: function () {
			function show(id) {
				return axios({
					method: 'get',
					headers: Auth.header(),
					url: "/match_entries/" + id
				});
			}

			return show;
		}()
	}, {
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					headers: Auth.header(),
					url: "/match_entries",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(id, data) {
				return axios({
					method: 'put',
					headers: Auth.header(),
					url: "/match_entries/" + id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					headers: Auth.header(),
					url: "/match_entries/" + id
				});
			}

			return _delete;
		}()
	}, {
		key: 'save',
		value: function () {
			function save(data) {
				var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// const dataJson = URI.parseQuery(data)
				if (id) {
					var ajaxObj = MatchEntryHelper.update(id, data);
				} else {
					var ajaxObj = MatchEntryHelper.store(data);
				}
				return ajaxObj;
			}

			return save;
		}()
	}, {
		key: 'count_book',
		value: function () {
			function count_book() {
				var match_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				return axios({
					method: 'get',
					url: "/match_entries/count_book",
					params: {
						match_id: match_id
					}
				});
			}

			return count_book;
		}()
	}]);
	return MatchEntryHelper;
}();

exports['default'] = MatchEntryHelper;
module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

// import ComboBoxSession from '../controls/ComboBoxSession.jsx'


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBoxLocal = __webpack_require__(57);

var _ComboBoxLocal2 = _interopRequireDefault(_ComboBoxLocal);

var _ComboBoxMember = __webpack_require__(58);

var _ComboBoxMember2 = _interopRequireDefault(_ComboBoxMember);

var _InputDecimal = __webpack_require__(56);

var _InputDecimal2 = _interopRequireDefault(_InputDecimal);

var _SessionEntryHelper = __webpack_require__(109);

var _SessionEntryHelper2 = _interopRequireDefault(_SessionEntryHelper);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

var _Constant = __webpack_require__(10);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionEntryForm = (_temp = _class = function (_React$Component) {
    (0, _inherits3['default'])(SessionEntryForm, _React$Component);

    function SessionEntryForm(props) {
        (0, _classCallCheck3['default'])(this, SessionEntryForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionEntryForm.__proto__ || (0, _getPrototypeOf2['default'])(SessionEntryForm)).call(this, props));

        _this.resetForm = function () {
            _this.setState({
                scount: _this.state.scount + 1,
                item: {
                    rate: 1
                }
            });
        };

        _this.onSubmit = function (e) {
            e.preventDefault();

            if (!$(_this.refs.form).valid()) {
                return false;
            }

            if (!_this.props.matchId) {
                toastr.error("Please Select Match First.");
                return false;
            }

            if (!_this.props.sessionId) {
                toastr.error("Please Select Session First.");
                return false;
            }

            var data = jQuery(_this.refs.form).serialize();
            var dataJson = URI.parseQuery(data);
            // console.log(dataJson)
            _SessionEntryHelper2['default'].save(dataJson, _this.state.item._id).then(function (response) {
                _this.props.onFormSubmitted(response.data);
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });
            return false;
        };

        _this.state = {
            matchId: _this.props.matchId,
            scount: 0,
            item: {
                rate: 1
            }

        };
        return _this;
    }

    (0, _createClass3['default'])(SessionEntryForm, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.mtrap = _GlobalHelper2['default'].mounstrapFormInit(this.refs.form);
            }

            return componentDidMount;
        }()
    }, {
        key: 'edit',
        value: function () {
            function edit(rowdata) {
                this.setState({
                    scount: this.state.scount + 1,
                    item: rowdata
                });
            }

            return edit;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = this.state.item;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'form',
                        { ref: 'form', className: 'moustrapform' },
                        _react2['default'].createElement('input', { type: 'hidden', defaultValue: this.props.matchId, name: 'match_id' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row align-items-center' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'S.N.'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { className: 'form-control form-control-sm w-50p idinput-session', readOnly: true, defaultValue: item._id, key: item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Session'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxLocal2['default'], { ref: 'comboSession', width: 150, field_id: 'session_id',
                                        data: this.props.sessionList, displayMember: 'session_name',
                                        selectedValue: this.props.sessionId, onClose: this.props.comboSessionOnClose })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Rate'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm w-50p error-hide required number', min: '0', name: 'rate', value: item.rate })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Runs'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { type: 'number', className: 'form-control form-control-sm w-50p error-hide required number', min: '0', name: 'runs', defaultValue: item.runs, key: item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Y/N'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_CSelect2['default'], { className: 'uk-select uk-form-small', name: 'yn', value: item.yn, items: _Constant.LIST_SESSION_YN })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Amount'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm w-100p error-hide required number', min: '0', name: 'amount', value: item.amount })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Party'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxMember2['default'], { width: 150, field_id: 'account_id', selectedValue: item.account_id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'btn-group', role: 'group', 'aria-label': 'Button group with nested dropdown' },
                                        _react2['default'].createElement(
                                            'button',
                                            { className: 'btn btn-primary btn-sm btnsubmit', type: 'button', onClick: this.onSubmit },
                                            _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                            ' Save'
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-danger btn-sm', type: 'button', onClick: this.resetForm },
                                        _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                        ' Cancel'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'form-check-label' },
                                        _react2['default'].createElement('input', { type: 'hidden', value: 'false', name: 'comm_yn' }),
                                        _react2['default'].createElement('input', { className: 'form-check-input', type: 'checkbox', name: 'comm_yn', value: true, defaultChecked: true }),
                                        ' Add Commission'
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return SessionEntryForm;
}(_react2['default'].Component), _class.defaultProps = {
    matchId: null,
    sessionId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    comboSessionOnClose: function () {
        function comboSessionOnClose() {}

        return comboSessionOnClose;
    }(),
    sessionList: []

}, _temp);
exports['default'] = SessionEntryForm;
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionEntryWinLossGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(SessionEntryWinLossGrid, _Component);

    function SessionEntryWinLossGrid(props) {
        (0, _classCallCheck3['default'])(this, SessionEntryWinLossGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionEntryWinLossGrid.__proto__ || (0, _getPrototypeOf2['default'])(SessionEntryWinLossGrid)).call(this, props));

        _this.refresh = function () {
            _this.refs.jqxgrid.updatebounddata();
        };

        return _this;
    }

    (0, _createClass3['default'])(SessionEntryWinLossGrid, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // window.abc = this
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log(this.props.lastEnteredRun)
                this.scrollToRow(this.props.lastEnteredRun);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'scrollToRow',
        value: function () {
            function scrollToRow(index) {
                // var rows = this.refs.jqxgrid.getrows()
                // console.log(rows.length)
                // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
                // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
                // console.log(index)
                if (index > 0) {
                    try {
                        this.refs.jqxgrid.ensurerowvisible(index);
                    } catch (err) {}
                }
            }

            return scrollToRow;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                var cellclassname_Amt = function () {
                    function cellclassname_Amt(row, column, value, data) {
                        // console.log(row, column , value, data)
                        if (data.amount < 0) {
                            return "jqx_cell_bgdanger";
                        } else {
                            return "jqx_cell_bgsuccess";
                        }
                    }

                    return cellclassname_Amt;
                }();
                var datafields = [{ name: 'runs', type: 'string' }, { name: 'amount', type: 'string' }];

                var source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    // url: URL_SESSION_ENTRIES_WINLOSSS_LIST + '/' + this.props.sessionId
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{ text: 'Runs', datafield: 'runs', width: 60, cellclassname: cellclassname_Amt }, {
                    text: 'Amount',
                    datafield: 'amount',
                    width: 100,
                    cellclassname: cellclassname_Amt
                }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', key: Math.random(),
                        source: this.dataAdapter,
                        width: '100%', height: 400,
                        sortable: false, altrows: false, enabletooltips: false,
                        editable: false, columns: columns,
                        filterable: false, showfilterrow: false, pagesize: 100, pageable: false })
                );
            }

            return render;
        }()
    }]);
    return SessionEntryWinLossGrid;
}(_react.Component), _class.defaultProps = {
    // sessionId: null,
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    lastEnteredRun: null
}, _temp);
exports['default'] = SessionEntryWinLossGrid;
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LiveCommentary = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(LiveCommentary, _Component);

    function LiveCommentary(props) {
        (0, _classCallCheck3['default'])(this, LiveCommentary);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (LiveCommentary.__proto__ || (0, _getPrototypeOf2['default'])(LiveCommentary)).call(this, props));

        _this.xdec = function (e) {
            var v = "";
            try {
                v = atob(e.substring(2));
            } catch (n) {
                v = "";
            }
            return v;
        };

        _this.state = {
            item: {}
        };
        return _this;
    }

    // static defaultProps = {
    //     item: {}
    // }


    (0, _createClass3['default'])(LiveCommentary, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                var config = {
                    apiKey: "apiKey",
                    authDomain: "cbmfu-5a56b.firebaseapp.com",
                    databaseURL: "https://cbmfu-5a56b.firebaseio.com",
                    storageBucket: "cbmfu-5a56b.appspot.com"

                };

                firebase.initializeApp(config);
                // console.log(firebase.apps.length)
                // if(firebase.apps.length) {
                // firebase.app().delete().then(function() {
                //     firebase.initializeApp(config);
                // });
                // }

                // var rootRef = firebase.database().ref();

                this.t = firebase.database().ref("/lval");
                this.t.on("value", function (e) {
                    var a = _this2.xdec(e.val());
                    var item = JSON.parse(a);
                    console.log(JSON.parse(a));
                    _this2.setState({
                        item: item
                    });
                });
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillUnmount',
        value: function () {
            function componentWillUnmount() {
                firebase.app()['delete']();
                // firebase.database().goOffline()

                console.log('Umounted');
            }

            return componentWillUnmount;
        }()
    }, {
        key: 'getCommentaryTItle',
        value: function () {
            function getCommentaryTItle(value) {
                if (value == "B") return 'Ball Start';
                if (value == "TU") return '3rd Umpire';
                if (value == "NO") return 'Not Out';
                if (value == "0") return 'Khali';
                if (value == "1") return 'Single';
                if (value == "4") return 'Four';
                if (value == "6") return 'Sixer';
                if (value > 0) return value + ' Runs';
            }

            return getCommentaryTItle;
        }()
    }, {
        key: 'renderSessionItems',
        value: function () {
            function renderSessionItems(items) {
                if (typeof items == "undefined") return null;
                return items.map(function (item, i) {
                    return _react2['default'].createElement(
                        'tr',
                        { key: 'key_' + i },
                        _react2['default'].createElement(
                            'td',
                            null,
                            item.Name,
                            ' '
                        ),
                        _react2['default'].createElement(
                            'td',
                            { className: 'skyblue w-70p' },
                            item.Back
                        ),
                        _react2['default'].createElement(
                            'td',
                            { className: 'pink w-70p' },
                            item.Lay
                        )
                    );
                });
            }

            return renderSessionItems;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = this.state.item;
                return _react2['default'].createElement(
                    'div',
                    { className: '' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'liveCommentaryBox' },
                        _react2['default'].createElement(
                            'h6',
                            { className: 'heading' },
                            'RRR: ',
                            item.RRR
                        ),
                        _react2['default'].createElement(
                            'table',
                            { className: 'table table-dark mb-0' },
                            _react2['default'].createElement(
                                'tbody',
                                null,
                                _react2['default'].createElement(
                                    'tr',
                                    { className: 'bg-warning color-dark font-weight-bold' },
                                    _react2['default'].createElement(
                                        'td',
                                        null,
                                        'CRR : ',
                                        item.CRR,
                                        ' '
                                    ),
                                    _react2['default'].createElement(
                                        'td',
                                        null,
                                        'SRR : ',
                                        item.SRR
                                    )
                                ),
                                _react2['default'].createElement(
                                    'tr',
                                    { className: 'bg-dark font-weight-bold' },
                                    _react2['default'].createElement(
                                        'td',
                                        null,
                                        item.SCORE,
                                        ' '
                                    ),
                                    _react2['default'].createElement(
                                        'td',
                                        null,
                                        this.getCommentaryTItle(item.COMM)
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'table',
                            { className: 'table font-weight-bold' },
                            _react2['default'].createElement(
                                'tbody',
                                null,
                                this.renderSessionItems(item.Sessions)
                            )
                        ),
                        _react2['default'].createElement(
                            'h6',
                            { className: 'heading' },
                            'Recent: ',
                            item.RECENT
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return LiveCommentary;
}(_react.Component)) || _class;

exports['default'] = LiveCommentary;
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(189);

__webpack_require__(190);

if (undefined === "development") {
    console.info("Development mode enabled");

    __webpack_require__(426);
}

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(61);

var _reactDom = __webpack_require__(19);

var _createHashHistory = __webpack_require__(134);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _mobxReact = __webpack_require__(13);

var _Constant = __webpack_require__(10);

var _mobxReactRouter = __webpack_require__(166);

var _GlobalStoreClass = __webpack_require__(302);

var _MatchStoreClass = __webpack_require__(306);

var _MatchTeamStoreClass = __webpack_require__(307);

var _MatchEntryStoreClass = __webpack_require__(308);

var _JournalStoreClass = __webpack_require__(309);

var _JournalEntryStoreClass = __webpack_require__(310);

var _SessionStoreClass = __webpack_require__(311);

var _SessionEntryStoreClass = __webpack_require__(312);

var _MeterStoreClass = __webpack_require__(315);

var _MeterEntryStoreClass = __webpack_require__(316);

var _AccountStoreClass = __webpack_require__(317);

var _ReportStoreClass = __webpack_require__(318);

var _BackupStoreClass = __webpack_require__(319);

var _ServerStatusStoreClass = __webpack_require__(320);

var _UserStoreClass = __webpack_require__(321);

var _LiveApiStoreClass = __webpack_require__(325);

var _Layout = __webpack_require__(326);

var _Layout2 = _interopRequireDefault(_Layout);

var _LayoutPlain = __webpack_require__(362);

var _LayoutPlain2 = _interopRequireDefault(_LayoutPlain);

var _UserLogin = __webpack_require__(363);

var _UserLogin2 = _interopRequireDefault(_UserLogin);

var _UserChangePassword = __webpack_require__(364);

var _UserChangePassword2 = _interopRequireDefault(_UserChangePassword);

var _Home = __webpack_require__(365);

var _Home2 = _interopRequireDefault(_Home);

var _Team = __webpack_require__(366);

var _Team2 = _interopRequireDefault(_Team);

var _Account = __webpack_require__(367);

var _Account2 = _interopRequireDefault(_Account);

var _JournalEntry = __webpack_require__(373);

var _JournalEntry2 = _interopRequireDefault(_JournalEntry);

var _MatchType = __webpack_require__(377);

var _MatchType2 = _interopRequireDefault(_MatchType);

var _Match = __webpack_require__(379);

var _Match2 = _interopRequireDefault(_Match);

var _MatchEntries = __webpack_require__(385);

var _MatchEntries2 = _interopRequireDefault(_MatchEntries);

var _MatchEntry = __webpack_require__(182);

var _MatchEntry2 = _interopRequireDefault(_MatchEntry);

var _MdiMatch = __webpack_require__(393);

var _MdiMatch2 = _interopRequireDefault(_MdiMatch);

var _Demo = __webpack_require__(407);

var _Demo2 = _interopRequireDefault(_Demo);

var _ReportBalanceSheet = __webpack_require__(408);

var _ReportBalanceSheet2 = _interopRequireDefault(_ReportBalanceSheet);

var _ReportJournalSummary = __webpack_require__(410);

var _ReportJournalSummary2 = _interopRequireDefault(_ReportJournalSummary);

var _ReportPlMatchAccountWise = __webpack_require__(412);

var _ReportPlMatchAccountWise2 = _interopRequireDefault(_ReportPlMatchAccountWise);

var _ReportPlMatchWise = __webpack_require__(413);

var _ReportPlMatchWise2 = _interopRequireDefault(_ReportPlMatchWise);

var _ReportConnect = __webpack_require__(414);

var _ReportConnect2 = _interopRequireDefault(_ReportConnect);

var _BackupDb = __webpack_require__(417);

var _BackupDb2 = _interopRequireDefault(_BackupDb);

var _ServerStatus = __webpack_require__(419);

var _ServerStatus2 = _interopRequireDefault(_ServerStatus);

var _User = __webpack_require__(420);

var _User2 = _interopRequireDefault(_User);

var _ActivityLog = __webpack_require__(423);

var _ActivityLog2 = _interopRequireDefault(_ActivityLog);

var _LiveMatchSchedule = __webpack_require__(424);

var _LiveMatchSchedule2 = _interopRequireDefault(_LiveMatchSchedule);

var _LiveCommentary = __webpack_require__(186);

var _LiveCommentary2 = _interopRequireDefault(_LiveCommentary);

var _RemoveAllRecord = __webpack_require__(425);

var _RemoveAllRecord2 = _interopRequireDefault(_RemoveAllRecord);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var routingStore = new _mobxReactRouter.RouterStore();
var globalStore = new _GlobalStoreClass.GlobalStoreClass();
var matchStore = new _MatchStoreClass.MatchStoreClass();
var matchTeamStore = new _MatchTeamStoreClass.MatchTeamStoreClass();
var matchEntryStore = new _MatchEntryStoreClass.MatchEntryStoreClass();
var journalStore = new _JournalStoreClass.JournalStoreClass();
var journalEntryStore = new _JournalEntryStoreClass.JournalEntryStoreClass();
var sessionStore = new _SessionStoreClass.SessionStoreClass();
var sessionEntryStore = new _SessionEntryStoreClass.SessionEntryStoreClass();
var meterStore = new _MeterStoreClass.MeterStoreClass();
var meterEntryStore = new _MeterEntryStoreClass.MeterEntryStoreClass();
var accountStore = new _AccountStoreClass.AccountStoreClass();
var reportStore = new _ReportStoreClass.ReportStoreClass();
var backupStore = new _BackupStoreClass.BackupStoreClass();
var serverStatusStore = new _ServerStatusStoreClass.ServerStatusStoreClass();
var userStore = new _UserStoreClass.UserStoreClass();
var liveApiStore = new _LiveApiStoreClass.LiveApiStoreClass();

var stores = {
  // Key can be whatever you want
  routing: routingStore,
  globalStore: globalStore,
  matchStore: matchStore,
  matchTeamStore: matchTeamStore,
  matchEntryStore: matchEntryStore,
  journalStore: journalStore,
  journalEntryStore: journalEntryStore,
  sessionStore: sessionStore,
  sessionEntryStore: sessionEntryStore,
  meterStore: meterStore,
  meterEntryStore: meterEntryStore,
  accountStore: accountStore,
  reportStore: reportStore,
  backupStore: backupStore,
  serverStatusStore: serverStatusStore,
  userStore: userStore,
  liveApiStore: liveApiStore

  // ...other stores
};

window.hashHistory = (0, _createHashHistory2['default'])();
var history = (0, _mobxReactRouter.syncHistoryWithStore)(hashHistory, routingStore);
// import State from './components/State.jsx'

window.Auth = _auth2['default'];

window.sessionId = localStorage.getItem('sessionId', null);

var Root = function Root() {
  return _react2['default'].createElement(
    _mobxReact.Provider,
    stores,
    _react2['default'].createElement(
      _reactRouterDom.Router,
      { history: history },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactRouterDom.Switch,
          null,
          _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _UserLogin2['default'] }),
          _react2['default'].createElement(_reactRouterDom.Route, { path: '/live/commentary', component: _LiveCommentary2['default'] }),
          _react2['default'].createElement(
            _Layout2['default'],
            null,
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/dashboard', component: _Home2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/changepassword', component: _UserChangePassword2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/demo', component: _Demo2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/teams', component: _Team2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/accounts', component: _Account2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/accounts/:id', component: _Account2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/match_types', component: _MatchType2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/matches', component: _Match2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/matches/:id', component: _Match2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/journal_entries', component: _JournalEntry2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/journal_entries/account/:account_id', component: _JournalEntry2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/match_entries', component: _MatchEntries2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/match_entries/match/:id', component: _MatchEntry2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/mdimatch/:id', component: _MdiMatch2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: _Constant.APP_URL_REPORT_JOURNAL_SUMMARY, component: _ReportJournalSummary2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: _Constant.APP_URL_REPORT_CONNECT, component: _ReportConnect2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: _Constant.APP_URL_REPORT_BSHEET, component: _ReportBalanceSheet2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: _Constant.APP_URL_REPORT_PL_MATCH_WISE, component: _ReportPlMatchWise2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: _Constant.APP_URL_REPORT_PL_MATCH_ACCOUNTWISE, component: _ReportPlMatchAccountWise2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/activity_log', component: _ActivityLog2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { exact: true, path: '/users', component: _User2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/users/:id', component: _User2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/backupdb', component: _BackupDb2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/remove_all_record', component: _RemoveAllRecord2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/server_status', component: _ServerStatus2['default'] }),
            _react2['default'].createElement(_reactRouterDom.Route, { path: '/live/match_schedule', component: _LiveMatchSchedule2['default'] })
          )
        )
      )
    )
  );
};

(0, _reactDom.render)(_react2['default'].createElement(Root, null), document.getElementById('root'));

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GlobalStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var GlobalStoreClass = exports.GlobalStoreClass = (_class = function () {
	function GlobalStoreClass() {
		(0, _classCallCheck3['default'])(this, GlobalStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'selectedSessionId', _descriptor2, this);

		_initDefineProp(this, 'selectedMeterId', _descriptor3, this);
	}

	(0, _createClass3['default'])(GlobalStoreClass, [{
		key: 'setSessionId',
		value: function () {
			function setSessionId(id) {
				localStorage.setItem('sessionId', id);
				this.selectedSessionId = id;
			}

			return setSessionId;
		}()
	}, {
		key: 'setMeterId',
		value: function () {
			function setMeterId(id) {
				localStorage.setItem('meterId', id);
				this.selectedMeterId = id;
			}

			return setMeterId;
		}()
	}]);
	return GlobalStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'selectedSessionId', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return localStorage.getItem('sessionId');
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'selectedMeterId', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return localStorage.getItem('meterId');
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MatchStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = __webpack_require__(14);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MatchStoreClass = exports.MatchStoreClass = (_class = function () {
	function MatchStoreClass() {
		(0, _classCallCheck3['default'])(this, MatchStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'match', _descriptor2, this);

		_initDefineProp(this, 'matchList', _descriptor3, this);

		_initDefineProp(this, 'teamsList', _descriptor4, this);
	}

	(0, _createClass3['default'])(MatchStoreClass, [{
		key: 'fetchList',
		value: function () {
			function fetchList() {
				var _this = this;

				_MatchHelper2['default'].index().then(function (res) {
					_this.matchList = res.data;
				});
			}

			return fetchList;
		}()
	}, {
		key: 'fetch',
		value: function () {
			function fetch(matchId) {
				var _this2 = this;

				_MatchHelper2['default'].show(matchId).then(function (res) {
					_this2.match = res.data;
				});
			}

			return fetch;
		}()
	}, {
		key: 'fetchTeams',
		value: function () {
			function fetchTeams(matchId) {
				var _this3 = this;

				axios.get('/match_teams', {
					params: {
						match_id: matchId
					}
				}).then(function (res) {
					_this3.teamsList = res.data;
				})['catch'](function () {
					return _this3.fetched = false;
				});
			}

			return fetchTeams;
		}()
	}]);
	return MatchStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'match', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return {};
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'matchList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'teamsList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MatchTeamStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(14);

var _MatchTeamHelper = __webpack_require__(72);

var _MatchTeamHelper2 = _interopRequireDefault(_MatchTeamHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MatchTeamStoreClass = exports.MatchTeamStoreClass = (_class = function () {
	function MatchTeamStoreClass() {
		(0, _classCallCheck3['default'])(this, MatchTeamStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'matchTeam', _descriptor2, this);

		_initDefineProp(this, 'matchTeamList', _descriptor3, this);
	}

	(0, _createClass3['default'])(MatchTeamStoreClass, [{
		key: 'fetchList',
		value: function () {
			function fetchList(matchId) {
				var _this = this;

				_MatchTeamHelper2['default'].index({
					match_id: matchId
				}).then(function (res) {
					_this.matchTeamList = res.data;
				});
			}

			return fetchList;
		}()
	}, {
		key: 'fetch',
		value: function () {
			function fetch(matchTeamId) {
				var _this2 = this;

				_MatchTeamHelper2['default'].show(matchTeamId).then(function (res) {
					_this2.matchTeam = res.data;
				});
			}

			return fetch;
		}()
	}]);
	return MatchTeamStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'matchTeam', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return {};
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'matchTeamList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MatchEntryStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = __webpack_require__(14);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _MatchTeamHelper = __webpack_require__(72);

var _MatchTeamHelper2 = _interopRequireDefault(_MatchTeamHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MatchEntryStoreClass = exports.MatchEntryStoreClass = (_class = function () {
	function MatchEntryStoreClass() {
		(0, _classCallCheck3['default'])(this, MatchEntryStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'match', _descriptor2, this);

		_initDefineProp(this, 'matchPlInfo', _descriptor3, this);

		_initDefineProp(this, 'entriesList', _descriptor4, this);
	}

	(0, _createClass3['default'])(MatchEntryStoreClass, [{
		key: 'fetchList',

		// @observable teamsList = [];


		// fetch(matchId) {
		//   axios.get('http://localhost:3000/matches/1')
		//     .then(() => this.fetched = true)
		//     .catch(() => this.fetched = false);
		// }

		value: function () {
			function fetchList(matchId) {
				var _this = this;

				var bookNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				axios.get('/match_entries', {
					params: {
						match_id: matchId,
						book_no: bookNo
					}
				}).then(function (res) {
					_this.entriesList = res.data;
					// console.log(res.data)
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchList;
		}()

		// 	fetchTeams(matchId) {
		// axios.get('/match_teams', {
		// 			params : {
		// 				match_id: matchId
		// 			}
		// 		})
		//    .then((res) => {
		//    	this.teamsList = res.data
		//    })
		//    .catch(() => this.fetched = false);
		// 	}

	}, {
		key: 'fetchPlInfo',
		value: function () {
			function fetchPlInfo(matchId) {
				var _this2 = this;

				var bookNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				axios.get('/match_entries/match_plinfo', {
					params: {
						match_id: matchId,
						book_no: bookNo
					}
				}).then(function (res) {
					return _this2.matchPlInfo = res.data;
				})['catch'](function () {
					return _this2.fetched = false;
				});
			}

			return fetchPlInfo;
		}()
	}]);
	return MatchEntryStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'match', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return {};
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'matchPlInfo', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return {
				bookNoList: [],
				teamsWinLossList: []
			};
		}

		return initializer;
	}()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'entriesList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.JournalStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

// import JournalHelper from '../helpers/JournalHelper'

var JournalStoreClass = exports.JournalStoreClass = (_class = function () {
	function JournalStoreClass() {
		(0, _classCallCheck3['default'])(this, JournalStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'journalEntriesList', _descriptor2, this);
	}

	(0, _createClass3['default'])(JournalStoreClass, [{
		key: 'fetchEntriesList',
		value: function () {
			function fetchEntriesList(params) {
				var _this = this;

				axios.get('/journals/entries', {
					params: params
				}).then(function (res) {
					_this.journalEntriesList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchEntriesList;
		}()
	}]);
	return JournalStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'journalEntriesList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.JournalEntryStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

// import JournalHelper from '../helpers/JournalHelper'


var _mobx = __webpack_require__(14);

var _JournalEntryHelper = __webpack_require__(73);

var _JournalEntryHelper2 = _interopRequireDefault(_JournalEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var JournalEntryStoreClass = exports.JournalEntryStoreClass = (_class = function () {
	function JournalEntryStoreClass() {
		(0, _classCallCheck3['default'])(this, JournalEntryStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'journal', _descriptor2, this);

		_initDefineProp(this, 'journalEntriesList', _descriptor3, this);

		_initDefineProp(this, 'selectedAccMonFinalBal', _descriptor4, this);

		_initDefineProp(this, 'selectedAccBal', _descriptor5, this);
	}
	// @observable accountBalanceList = [];


	(0, _createClass3['default'])(JournalEntryStoreClass, [{
		key: 'fetchAccountBalanceObject',
		value: function () {
			function fetchAccountBalanceObject(accountId) {
				var _this = this;

				axios.get('/journal_entries/account/' + accountId + '/balance', {}).then(function (res) {
					_this.selectedAccMonFinalBal = res.data.monFinalBal;
					_this.selectedAccBal = res.data.totalBal;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchAccountBalanceObject;
		}()

		// fetchAccountBalanceList() {
		// 	axios.get('/journal_entries/balance', {
		//  		})
		//     .then((res) => {
		//     	this.accountBalanceList = res.data
		//     })
		//     .catch(() => this.fetched = false);
		// }

	}, {
		key: 'fetchListByAccount',
		value: function () {
			function fetchListByAccount(account_id) {
				var _this2 = this;

				var is_monday_final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				axios.get('/journal_entries', {
					params: {
						account_id: account_id,
						is_monday_final: is_monday_final
					}
				}).then(function (res) {
					_this2.journalEntriesList = res.data;
				})['catch'](function () {
					return _this2.fetched = false;
				});
			}

			return fetchListByAccount;
		}()
	}]);
	return JournalEntryStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'journal', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return {};
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'journalEntriesList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'selectedAccMonFinalBal', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return 0;
		}

		return initializer;
	}()
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'selectedAccBal', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return 0;
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SessionStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

var _SessionHelper = __webpack_require__(74);

var _SessionHelper2 = _interopRequireDefault(_SessionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SessionStoreClass = exports.SessionStoreClass = (_class = function () {
	function SessionStoreClass() {
		(0, _classCallCheck3['default'])(this, SessionStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'sessionList', _descriptor2, this);
	}

	(0, _createClass3['default'])(SessionStoreClass, [{
		key: 'fetchList',
		value: function () {
			function fetchList() {
				var _this = this;

				var matchId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				axios.get('/sessions', {
					params: {
						match_id: matchId
					}
				}).then(function (res) {
					_this.sessionList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchList;
		}()
	}]);
	return SessionStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'sessionList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionEntryStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(170);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _mobx = __webpack_require__(14);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _SessionHelper = __webpack_require__(74);

var _SessionHelper2 = _interopRequireDefault(_SessionHelper);

var _SessionEntryHelper = __webpack_require__(109);

var _SessionEntryHelper2 = _interopRequireDefault(_SessionEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2['default'])(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var SessionEntryStoreClass = exports.SessionEntryStoreClass = (_class = function () {
    function SessionEntryStoreClass() {
        (0, _classCallCheck3['default'])(this, SessionEntryStoreClass);

        _initDefineProp(this, 'fetched', _descriptor, this);

        _initDefineProp(this, 'sessionEntriesList', _descriptor2, this);

        _initDefineProp(this, 'sessionPlInfo', _descriptor3, this);

        _initDefineProp(this, 'sessionWinLossList', _descriptor4, this);

        _initDefineProp(this, 'lastEnteredRun', _descriptor5, this);

        _initDefineProp(this, 'displayData', _descriptor6, this);
    }

    // this is we are using to scroll to that run in SessionEntryWinLossGrid


    (0, _createClass3['default'])(SessionEntryStoreClass, [{
        key: 'clearAll',
        value: function () {
            function clearAll() {
                this.sessionEntriesList = [];
                this.sessionPlInfo = {};
                this.sessionWinLossList = [];
            }

            return clearAll;
        }()
    }, {
        key: 'fetchAll',
        value: function () {
            function fetchAll(sessionId) {
                var _this = this;

                axios.all([this.fetchList(sessionId), this.fetchPlInfo(sessionId), this.fetchWinLossList(sessionId)]).then(axios.spread((0, _mobx.action)(function (res1, res2, res3) {

                    _this.sessionEntriesList = res1.data;
                    _this.sessionPlInfo = res2.data;
                    _this.sessionWinLossList = res3.data;
                })));
            }

            return fetchAll;
        }()
    }, {
        key: 'fetchList',
        value: function () {
            function fetchList(sessionId) {
                return axios.get('/session_entries', {
                    params: {
                        session_id: sessionId
                    }
                });
            }

            return fetchList;
        }()
    }, {
        key: 'fetchPlInfo',
        value: function () {
            function fetchPlInfo(sessionId) {
                return axios.get('/session_entries/session_plinfo', {
                    params: {
                        session_id: sessionId
                    }
                });
            }

            return fetchPlInfo;
        }()
    }, {
        key: 'fetchWinLossList',
        value: function () {
            function fetchWinLossList(sessionId) {
                return axios.get('/session_entries/winlosslist/' + sessionId, {
                    params: {
                        session_id: sessionId
                    }
                });
            }

            return fetchWinLossList;
        }()
    }]);
    return SessionEntryStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return false;
        }

        return initializer;
    }()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'sessionEntriesList', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return [];
        }

        return initializer;
    }()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'sessionPlInfo', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return {};
        }

        return initializer;
    }()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'sessionWinLossList', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return [];
        }

        return initializer;
    }()
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'lastEnteredRun', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return null;
        }

        return initializer;
    }()
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'displayData', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return {
                sessionEntriesList: [],
                sessionPlInfo: {},
                sessionWinLossList: []
            };
        }

        return initializer;
    }()
}), _applyDecoratedDescriptor(_class.prototype, 'fetchList', [_mobx.action], (0, _getOwnPropertyDescriptor2['default'])(_class.prototype, 'fetchList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetchPlInfo', [_mobx.action], (0, _getOwnPropertyDescriptor2['default'])(_class.prototype, 'fetchPlInfo'), _class.prototype)), _class);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(314);
var $Object = __webpack_require__(23).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(37);
var $getOwnPropertyDescriptor = __webpack_require__(108).f;

__webpack_require__(173)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MeterStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

var _MeterHelper = __webpack_require__(76);

var _MeterHelper2 = _interopRequireDefault(_MeterHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MeterStoreClass = exports.MeterStoreClass = (_class = function () {
	function MeterStoreClass() {
		(0, _classCallCheck3['default'])(this, MeterStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'meterList', _descriptor2, this);
	}

	(0, _createClass3['default'])(MeterStoreClass, [{
		key: 'fetchList',
		value: function () {
			function fetchList() {
				var _this = this;

				var matchId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				axios.get('/meters', {
					params: {
						match_id: matchId
					}
				}).then(function (res) {
					_this.meterList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchList;
		}()
	}]);
	return MeterStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'meterList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MeterEntryStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(170);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _mobx = __webpack_require__(14);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _MeterHelper = __webpack_require__(76);

var _MeterHelper2 = _interopRequireDefault(_MeterHelper);

var _MeterEntryHelper = __webpack_require__(110);

var _MeterEntryHelper2 = _interopRequireDefault(_MeterEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2['default'])(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MeterEntryStoreClass = exports.MeterEntryStoreClass = (_class = function () {
    function MeterEntryStoreClass() {
        (0, _classCallCheck3['default'])(this, MeterEntryStoreClass);

        _initDefineProp(this, 'fetched', _descriptor, this);

        _initDefineProp(this, 'meterEntriesList', _descriptor2, this);

        _initDefineProp(this, 'meterPlInfo', _descriptor3, this);

        _initDefineProp(this, 'meterWinLossList', _descriptor4, this);

        _initDefineProp(this, 'lastEnteredRun', _descriptor5, this);

        _initDefineProp(this, 'displayData', _descriptor6, this);
    }

    // this is we are using to scroll to that run in meterEntryWinLossGrid


    (0, _createClass3['default'])(MeterEntryStoreClass, [{
        key: 'clearAll',
        value: function () {
            function clearAll() {
                this.meterEntriesList = [];
                this.meterPlInfo = {};
                this.meterWinLossList = [];
            }

            return clearAll;
        }()
    }, {
        key: 'fetchAll',
        value: function () {
            function fetchAll(meterId) {
                var _this = this;

                axios.all([this.fetchList(meterId), this.fetchPlInfo(meterId), this.fetchWinLossList(meterId)]).then(axios.spread((0, _mobx.action)(function (res1, res2, res3) {

                    _this.meterEntriesList = res1.data;
                    _this.meterPlInfo = res2.data;
                    _this.meterWinLossList = res3.data;
                })));
            }

            return fetchAll;
        }()
    }, {
        key: 'fetchList',
        value: function () {
            function fetchList(meterId) {
                return axios.get('/meter_entries', {
                    params: {
                        meter_id: meterId
                    }
                });
            }

            return fetchList;
        }()
    }, {
        key: 'fetchPlInfo',
        value: function () {
            function fetchPlInfo(meterId) {
                return axios.get('/meter_entries/meter_plinfo', {
                    params: {
                        meter_id: meterId
                    }
                });
            }

            return fetchPlInfo;
        }()
    }, {
        key: 'fetchWinLossList',
        value: function () {
            function fetchWinLossList(meterId) {
                return axios.get('/meter_entries/winlosslist/' + meterId, {
                    params: {
                        meter_id: meterId
                    }
                });
            }

            return fetchWinLossList;
        }()
    }]);
    return MeterEntryStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return false;
        }

        return initializer;
    }()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'meterEntriesList', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return [];
        }

        return initializer;
    }()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'meterPlInfo', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return {};
        }

        return initializer;
    }()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'meterWinLossList', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return [];
        }

        return initializer;
    }()
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'lastEnteredRun', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return null;
        }

        return initializer;
    }()
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'displayData', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        function initializer() {
            return {
                meterEntriesList: [],
                meterPlInfo: {},
                meterWinLossList: []
            };
        }

        return initializer;
    }()
}), _applyDecoratedDescriptor(_class.prototype, 'fetchList', [_mobx.action], (0, _getOwnPropertyDescriptor2['default'])(_class.prototype, 'fetchList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetchPlInfo', [_mobx.action], (0, _getOwnPropertyDescriptor2['default'])(_class.prototype, 'fetchPlInfo'), _class.prototype)), _class);

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.AccountStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(14);

var _AccountHelper = __webpack_require__(111);

var _AccountHelper2 = _interopRequireDefault(_AccountHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
				if (!descriptor) return;
				(0, _defineProperty2['default'])(target, property, {
								enumerable: descriptor.enumerable,
								configurable: descriptor.configurable,
								writable: descriptor.writable,
								value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
				});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
				var desc = {};
				Object['ke' + 'ys'](descriptor).forEach(function (key) {
								desc[key] = descriptor[key];
				});
				desc.enumerable = !!desc.enumerable;
				desc.configurable = !!desc.configurable;

				if ('value' in desc || desc.initializer) {
								desc.writable = true;
				}

				desc = decorators.slice().reverse().reduce(function (desc, decorator) {
								return decorator(target, property, desc) || desc;
				}, desc);

				if (context && desc.initializer !== void 0) {
								desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
								desc.initializer = undefined;
				}

				if (desc.initializer === void 0) {
								Object['define' + 'Property'](target, property, desc);
								desc = null;
				}

				return desc;
}

function _initializerWarningHelper(descriptor, context) {
				throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AccountStoreClass = exports.AccountStoreClass = (_class = function () {
				function AccountStoreClass() {
								(0, _classCallCheck3['default'])(this, AccountStoreClass);

								_initDefineProp(this, 'fetched', _descriptor, this);

								_initDefineProp(this, 'account', _descriptor2, this);

								_initDefineProp(this, 'accountList', _descriptor3, this);
				}

				(0, _createClass3['default'])(AccountStoreClass, [{
								key: 'fetchList',
								value: function () {
												function fetchList() {
																var _this = this;

																var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { is_company: null };

																_AccountHelper2['default'].index(params).then(function (res) {
																				_this.accountList = res.data;
																});
												}

												return fetchList;
								}()
				}, {
								key: 'fetch',
								value: function () {
												function fetch(id) {
																var _this2 = this;

																_AccountHelper2['default'].show(id).then(function (res) {
																				_this2.account = res.data;
																});
												}

												return fetch;
								}()
				}]);
				return AccountStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return false;
								}

								return initializer;
				}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'account', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return {};
								}

								return initializer;
				}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'accountList', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return [];
								}

								return initializer;
				}()
})), _class);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReportStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ReportStoreClass = exports.ReportStoreClass = (_class = function () {
	function ReportStoreClass() {
		(0, _classCallCheck3['default'])(this, ReportStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'accountBalanceList', _descriptor2, this);

		_initDefineProp(this, 'plMatchAccountWiseList', _descriptor3, this);

		_initDefineProp(this, 'plMatchWiseList', _descriptor4, this);

		_initDefineProp(this, 'connectListMatches', _descriptor5, this);

		_initDefineProp(this, 'connectReportList', _descriptor6, this);

		_initDefineProp(this, 'activityLogList', _descriptor7, this);
	}

	(0, _createClass3['default'])(ReportStoreClass, [{
		key: 'fetchAccountBalanceList',
		value: function () {
			function fetchAccountBalanceList() {
				var _this = this;

				axios.get('/reports/balance_sheet', {}).then(function (res) {
					_this.accountBalanceList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchAccountBalanceList;
		}()
	}, {
		key: 'fetchConnectListMatches',
		value: function () {
			function fetchConnectListMatches() {
				var _this2 = this;

				axios.get('/reports/connect_list_matches', {}).then(function (res) {
					_this2.connectListMatches = res.data;
				})['catch'](function () {
					return _this2.fetched = false;
				});
			}

			return fetchConnectListMatches;
		}()
	}, {
		key: 'fetchConnectListMatches',
		value: function () {
			function fetchConnectListMatches() {
				var _this3 = this;

				axios.get('/reports/connect_list_matches', {}).then(function (res) {
					_this3.connectListMatches = res.data;
				})['catch'](function () {
					return _this3.fetched = false;
				});
			}

			return fetchConnectListMatches;
		}()
	}, {
		key: 'fetchConnectReportList',
		value: function () {
			function fetchConnectReportList() {
				var _this4 = this;

				var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

				axios({
					method: 'post',
					url: "/reports/connect_report",
					data: filters
				}).then(function (res) {
					_this4.connectReportList = res.data;
				})['catch'](function () {
					return _this4.fetched = false;
				});
			}

			return fetchConnectReportList;
		}()
	}, {
		key: 'fetchPlMatchAccountWiseList',
		value: function () {
			function fetchPlMatchAccountWiseList() {
				var _this5 = this;

				axios.get('/reports/pl_match_accountwise', {}).then(function (res) {
					_this5.plMatchAccountWiseList = res.data;
				})['catch'](function () {
					return _this5.fetched = false;
				});
			}

			return fetchPlMatchAccountWiseList;
		}()
	}, {
		key: 'fetchPlMatchWiseList',
		value: function () {
			function fetchPlMatchWiseList() {
				var _this6 = this;

				axios.get('/reports/pl_matchwise', {}).then(function (res) {
					_this6.plMatchWiseList = res.data;
				})['catch'](function () {
					return _this6.fetched = false;
				});
			}

			return fetchPlMatchWiseList;
		}()
	}, {
		key: 'fetchActivityLogList',
		value: function () {
			function fetchActivityLogList() {
				var _this7 = this;

				axios.get('/reports/activity_log', {}).then(function (res) {
					_this7.activityLogList = res.data;
				})['catch'](function () {
					return _this7.fetched = false;
				});
			}

			return fetchActivityLogList;
		}()
	}]);
	return ReportStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'accountBalanceList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'plMatchAccountWiseList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'plMatchWiseList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'connectListMatches', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'connectReportList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'activityLogList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BackupStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BackupStoreClass = exports.BackupStoreClass = (_class = function () {
	function BackupStoreClass() {
		(0, _classCallCheck3['default'])(this, BackupStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'dbBackupList', _descriptor2, this);
	}

	(0, _createClass3['default'])(BackupStoreClass, [{
		key: 'fetchDbBackupList',
		value: function () {
			function fetchDbBackupList() {
				var _this = this;

				var matchId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				axios.get('/backups/list_db_backup_files').then(function (res) {
					_this.dbBackupList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchDbBackupList;
		}()

		// 	backupDb() {
		// axios.get('/backups/backup_db')
		//    .then((res) => {
		//    	// this.sessionList = res.data
		//    })
		//    .catch(() => this.fetched = false);
		// 	}

		// 	fetchList(dirname=null) {
		// axios.get('/backups/restore_db', {
		// 			params : {
		// 				dirname: dirname,
		// 			}
		// 		})
		//    .then((res) => {
		//    	// this.sessionList = res.data
		//    })
		//    .catch(() => this.fetched = false);
		// 	}

	}]);
	return BackupStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'dbBackupList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ServerStatusStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ServerStatusStoreClass = exports.ServerStatusStoreClass = (_class = function () {
	function ServerStatusStoreClass() {
		(0, _classCallCheck3['default'])(this, ServerStatusStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'dbServerStatus', _descriptor2, this);
	}

	(0, _createClass3['default'])(ServerStatusStoreClass, [{
		key: 'fetchDbServerStatus',
		value: function () {
			function fetchDbServerStatus() {
				var _this = this;

				var matchId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				axios.get('/others/server_db_status', {
					params: {
						match_id: matchId
					}
				}).then(function (res) {
					_this.dbServerStatus = res.data.status;
				})['catch'](function (err) {
					console.log(err.response.data.error);
					if (err.response.data.error == 5001) {
						_this.dbServerStatus = 0;
					}
				});
			}

			return fetchDbServerStatus;
		}()
	}]);
	return ServerStatusStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'dbServerStatus', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return 0;
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.UserStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(14);

var _UserHelper = __webpack_require__(77);

var _UserHelper2 = _interopRequireDefault(_UserHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
				if (!descriptor) return;
				(0, _defineProperty2['default'])(target, property, {
								enumerable: descriptor.enumerable,
								configurable: descriptor.configurable,
								writable: descriptor.writable,
								value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
				});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
				var desc = {};
				Object['ke' + 'ys'](descriptor).forEach(function (key) {
								desc[key] = descriptor[key];
				});
				desc.enumerable = !!desc.enumerable;
				desc.configurable = !!desc.configurable;

				if ('value' in desc || desc.initializer) {
								desc.writable = true;
				}

				desc = decorators.slice().reverse().reduce(function (desc, decorator) {
								return decorator(target, property, desc) || desc;
				}, desc);

				if (context && desc.initializer !== void 0) {
								desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
								desc.initializer = undefined;
				}

				if (desc.initializer === void 0) {
								Object['define' + 'Property'](target, property, desc);
								desc = null;
				}

				return desc;
}

function _initializerWarningHelper(descriptor, context) {
				throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var UserStoreClass = exports.UserStoreClass = (_class = function () {
				function UserStoreClass() {
								(0, _classCallCheck3['default'])(this, UserStoreClass);

								_initDefineProp(this, 'fetched', _descriptor, this);

								_initDefineProp(this, 'user', _descriptor2, this);

								_initDefineProp(this, 'userList', _descriptor3, this);
				}

				(0, _createClass3['default'])(UserStoreClass, [{
								key: 'fetchList',
								value: function () {
												function fetchList() {
																var _this = this;

																var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

																_UserHelper2['default'].index(params).then(function (res) {
																				_this.userList = res.data;
																});
												}

												return fetchList;
								}()
				}, {
								key: 'fetch',
								value: function () {
												function fetch(id) {
																var _this2 = this;

																_UserHelper2['default'].show(id).then(function (res) {
																				_this2.user = res.data;
																});
												}

												return fetch;
								}()
				}]);
				return UserStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return false;
								}

								return initializer;
				}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return {};
								}

								return initializer;
				}()
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'userList', [_mobx.observable], {
				enumerable: true,
				initializer: function () {
								function initializer() {
												return [];
								}

								return initializer;
				}()
})), _class);

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _stringify = __webpack_require__(323);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * HOW TO USE
 *  Localstore.setOrg(2)
	Localstore.setUser({id: 1, name: 'aman'})
	console.log(Localstore.getItem('org'))
*/

var localstore = function () {
    function localstore() {
        (0, _classCallCheck3['default'])(this, localstore);
    }

    (0, _createClass3['default'])(localstore, null, [{
        key: 'setOrg',
        value: function () {
            function setOrg() {
                var org = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                localStorage.setItem('org', (0, _stringify2['default'])(org));
            }

            return setOrg;
        }()
    }, {
        key: 'setUser',
        value: function () {
            function setUser() {
                var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                localStorage.setItem('user', (0, _stringify2['default'])(user));
            }

            return setUser;
        }()
    }, {
        key: 'getItem',
        value: function () {
            function getItem(itemname) {
                return JSON.parse(localStorage.getItem(itemname));
            }

            return getItem;
        }()
    }, {
        key: 'clear',
        value: function () {
            function clear() {
                localStorage.removeItem('org');
                localStorage.removeItem('user');
            }

            return clear;
        }()

        // TASKLIST LOCALSTORE

    }, {
        key: 'tasklistLocalStoreDefaults',
        value: function () {
            function tasklistLocalStoreDefaults() {
                var args = {
                    show_tasks: true
                };
                return args;
            }

            return tasklistLocalStoreDefaults;
        }()
    }, {
        key: 'getTasklistLocalStore',
        value: function () {
            function getTasklistLocalStore(tasklist_id) {
                var data = JSON.parse(localStorage.getItem('tasklist_' + tasklist_id));
                return jQuery.extend(this.tasklistLocalStoreDefaults(), data);
            }

            return getTasklistLocalStore;
        }()
    }, {
        key: 'setTasklistLocalStore',
        value: function () {
            function setTasklistLocalStore(tasklist_id) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var data = jQuery.extend(this.tasklistLocalStoreDefaults(), data);
                localStorage.setItem('tasklist_' + tasklist_id, (0, _stringify2['default'])(data));
            }

            return setTasklistLocalStore;
        }()

        // TASK LOCALSTORE

    }, {
        key: 'taskLocalStoreDefaults',
        value: function () {
            function taskLocalStoreDefaults() {
                var args = {
                    show_subtasks: false
                };
                return args;
            }

            return taskLocalStoreDefaults;
        }()
    }, {
        key: 'getTaskLocalStore',
        value: function () {
            function getTaskLocalStore(task_id) {
                var data = JSON.parse(localStorage.getItem('task_' + task_id));
                return jQuery.extend(this.taskLocalStoreDefaults(), data);
            }

            return getTaskLocalStore;
        }()
    }, {
        key: 'setTaskLocalStore',
        value: function () {
            function setTaskLocalStore(task_id) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var data = jQuery.extend(this.taskLocalStoreDefaults(), data);
                localStorage.setItem('task_' + task_id, (0, _stringify2['default'])(data));
            }

            return setTaskLocalStore;
        }()
    }]);
    return localstore;
}();

exports['default'] = localstore;
module.exports = exports['default'];

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(324), __esModule: true };

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(23);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LiveApiStoreClass = undefined;

var _defineProperty = __webpack_require__(15);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2['default'])(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var LiveApiStoreClass = exports.LiveApiStoreClass = (_class = function () {
	function LiveApiStoreClass() {
		(0, _classCallCheck3['default'])(this, LiveApiStoreClass);

		_initDefineProp(this, 'fetched', _descriptor, this);

		_initDefineProp(this, 'matchScheduleList', _descriptor2, this);
	}

	(0, _createClass3['default'])(LiveApiStoreClass, [{
		key: 'fetchMatchScheduleList',
		value: function () {
			function fetchMatchScheduleList() {
				var _this = this;

				axios.get('/liveapis/match_schdules', {}).then(function (res) {
					_this.matchScheduleList = res.data;
				})['catch'](function () {
					return _this.fetched = false;
				});
			}

			return fetchMatchScheduleList;
		}()
	}]);
	return LiveApiStoreClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fetched', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return false;
		}

		return initializer;
	}()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'matchScheduleList', [_mobx.observable], {
	enumerable: true,
	initializer: function () {
		function initializer() {
			return [];
		}

		return initializer;
	}()
})), _class);

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

var _Header = __webpack_require__(360);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Layout = function (_Component) {
    (0, _inherits3['default'])(Layout, _Component);

    function Layout() {
        (0, _classCallCheck3['default'])(this, Layout);
        return (0, _possibleConstructorReturn3['default'])(this, (Layout.__proto__ || (0, _getPrototypeOf2['default'])(Layout)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Layout, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                if (!_auth2['default'].check()) {
                    hashHistory.push('/');
                }
            }

            return componentWillMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    { className: 'layout' },
                    _react2['default'].createElement(_Header2['default'], null),
                    _react2['default'].createElement(
                        'main',
                        null,
                        this.props.children
                    )
                );
            }

            return render;
        }()
    }]);
    return Layout;
}(_react.Component);

exports['default'] = Layout;
module.exports = exports['default'];

/***/ }),
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(61);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_React$Component) {
    (0, _inherits3['default'])(Header, _React$Component);

    function Header(props) {
        (0, _classCallCheck3['default'])(this, Header);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || (0, _getPrototypeOf2['default'])(Header)).call(this, props));

        _this.showLastMatch = function (e) {
            e.preventDefault();
            // console.log(this.props)
            var matchId = localStorage.getItem('matchId');
            if (matchId) {
                window.location.href = _Constant.APP_LOCATION_HREF_MDI_MATCH + matchId;
            }
        };

        _this.showServerStatuses = function (e) {
            e.preventDefault();
            console.log(window.global.nwUrl);
            // Load native UI library
            var gui = __webpack_require__(361); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

            // Get the current window
            var win = gui.Window.get();

            var win1 = nw.Window.open("index.html", {}, function () {
                function callback(nwWindow) {
                    console.log("OPENENENENENE");
                    win.close();
                }

                return callback;
            }());
        };

        return _this;
    }

    (0, _createClass3['default'])(Header, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                $("#jqxMenu").jqxMenu({ height: 30, showTopLevelArrows: true, keyboardNavigation: true });
            }

            return componentDidMount;
        }()
    }, {
        key: 'openAnydesk',
        value: function () {
            function openAnydesk(e) {
                e.preventDefault();
                axios.get('/others/start_anydesk');
            }

            return openAnydesk;
        }()
    }, {
        key: 'openAmmy',
        value: function () {
            function openAmmy(e) {
                e.preventDefault();
                axios.get('/others/start_ammy');
            }

            return openAmmy;
        }()
    }, {
        key: 'logout',
        value: function () {
            function logout(e) {
                e.preventDefault();
                _auth2['default'].logout();
                hashHistory.push('/');
            }

            return logout;
        }()
    }, {
        key: 'openLiveCommentaryWindow',
        value: function () {
            function openLiveCommentaryWindow(e) {
                e.preventDefault();
                // window.win = window.open('http://localhost:3000/#/live/commentary', 'Session Odds', "width=310,height=400,resizable=0,channelmode=0,fullscreen=0,toolbar=0")
                // win.onresize = function() 
                // {
                //     console.log("Sdfsd")
                //     win.resizeTo(500,500);
                // }
                // win.onclick = function() 
                // {
                //     console.log("Sdfsd")
                //     win.resizeTo(500,500);
                // }
                if (typeof electron !== 'undefined') {
                    var win = new electron.remote.BrowserWindow({
                        webPreferences: {
                            nodeIntegration: false
                        },
                        'minHeight': 320,
                        'minWidth': 320,
                        'maxWidth': 320,
                        width: 320,
                        height: 400
                        // type: "toolbar"
                    });
                    win.loadURL("http://localhost:3000/#/live/commentary");
                } else {
                    hashHistory.push('/live/commentary');
                }
            }

            return openLiveCommentaryWindow;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var currentUser = _auth2['default'].getTokenDecoded();
                return _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-10' },
                        _react2['default'].createElement(
                            'div',
                            { id: 'jqxMenu', className: 'jqxMenu-topmenu' },
                            _react2['default'].createElement(
                                'ul',
                                null,
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('span', { className: 'logo' }),
                                    _react2['default'].createElement(
                                        _reactRouterDom.Link,
                                        { to: '/dashboard' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'text-danger font-weight-bold' },
                                            _Constant.APP_TITLE
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-database' }),
                                    ' Master',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_ACCOUNTS },
                                                'Parties (F1)'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_TEAMS },
                                                'Teams (F2)'
                                            )
                                        ),
                                        _auth2['default'].is_admin() ? _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: "/users" },
                                                'Users'
                                            )
                                        ) : ''
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-futbol-o' }),
                                    ' Match',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_MATCHES },
                                                'Match Master (F3)'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_MATCH_ENTRIES },
                                                'Match Entry (F4)'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                'a',
                                                { href: '#', onClick: this.showLastMatch },
                                                'Last Match (F7)'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-book' }),
                                    ' Ledger',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_JOURNAL_ENTRIES },
                                                'Journal Entries (F8)'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                                    ' Reports',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_REPORT_CONNECT },
                                                'Connect Report (F6)'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_REPORT_PL_MATCH_WISE },
                                                'PL Match Wise'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_REPORT_PL_MATCH_ACCOUNTWISE },
                                                'PL Match Account Wise'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_REPORT_JOURNAL_SUMMARY },
                                                'Journal Summary'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: _Constant.APP_URL_REPORT_BSHEET },
                                                'Balance Sheet (F9)'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: '/activity_log' },
                                                'Activity Log'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-gear' }),
                                    ' Utilities',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: '/changepassword' },
                                                'Change Password'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: '/server_status' },
                                                'Server Status'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: '/backupdb' },
                                                'Backup DB'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: '/remove_all_record' },
                                                'Remove All Records'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                'a',
                                                { href: '#', onClick: this.openAnydesk },
                                                'Anydesk Online Support'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                'a',
                                                { href: '#', onClick: this.openAmmy },
                                                'Ammy Online Support'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement('i', { className: 'fa fa-globe' }),
                                    ' Live',
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouterDom.Link,
                                                { to: "/live/match_schedule" },
                                                'Match Schedule'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                'a',
                                                { href: '#', onClick: this.openLiveCommentaryWindow },
                                                'Session Odds'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'a',
                                        { href: '#', onClick: this.logout },
                                        _react2['default'].createElement('i', { className: 'fa fa-sign-out' }),
                                        ' Logout'
                                    )
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-2' },
                        'Welcome ',
                        currentUser.fullname
                    )
                );
            }

            return render;
        }()
    }]);
    return Header;
}(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = require("nw.gui");

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LayoutPlain = function (_Component) {
    (0, _inherits3["default"])(LayoutPlain, _Component);

    function LayoutPlain() {
        (0, _classCallCheck3["default"])(this, LayoutPlain);
        return (0, _possibleConstructorReturn3["default"])(this, (LayoutPlain.__proto__ || (0, _getPrototypeOf2["default"])(LayoutPlain)).apply(this, arguments));
    }

    (0, _createClass3["default"])(LayoutPlain, [{
        key: "componentWillMount",
        value: function () {
            function componentWillMount() {
                if (!Auth.check()) {
                    hashHistory.push('/');
                }
            }

            return componentWillMount;
        }()
    }, {
        key: "render",
        value: function () {
            function render() {
                return _react2["default"].createElement(
                    "div",
                    { className: "layout plain" },
                    _react2["default"].createElement(
                        "main",
                        null,
                        this.props.children
                    )
                );
            }

            return render;
        }()
    }]);
    return LayoutPlain;
}(_react.Component);

exports["default"] = LayoutPlain;
module.exports = exports["default"];

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UserLogin = function (_Component) {
    (0, _inherits3['default'])(UserLogin, _Component);

    function UserLogin() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, UserLogin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = UserLogin.__proto__ || (0, _getPrototypeOf2['default'])(UserLogin)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
            e.preventDefault();
            var valid = jQuery(".loginForm").valid();
            if (!valid) {
                return false;
            };

            _auth2['default'].attempt({ username: _this.refs.username.value, password: _this.refs.password.value }).then(function (response) {
                if (response.data.token != null) {
                    hashHistory.push('/dashboard');
                } else {
                    toastr.error(trans.invalid_credentials);
                }
            })['catch'](function (error) {
                toastr.error(error.response.data.message);
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(UserLogin, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                if (_auth2['default'].check()) {
                    hashHistory.push('/dashboard');
                    return false;
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'div',
                    { className: 'mx-2' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'loginform' },
                        _react2['default'].createElement('div', { id: 'errordiv' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'container' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'row' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'formstyle1Ct' },
                                    _react2['default'].createElement(
                                        'h3',
                                        { className: 'form_title text-center' },
                                        'Login'
                                    ),
                                    _react2['default'].createElement(
                                        'form',
                                        { className: 'form-horizontal formstyle1 loginForm', ref: 'form', onSubmit: this.handleSubmit },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'form-group' },
                                            _react2['default'].createElement(
                                                'label',
                                                { className: 'col-sm-12 col-xs-12' },
                                                'User Name'
                                            ),
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'col-sm-12 col-xs-12' },
                                                _react2['default'].createElement('input', { type: 'username', className: 'form-control required', name: 'username', id: 'username', placeholder: 'Username', ref: 'username' })
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'form-group' },
                                            _react2['default'].createElement(
                                                'label',
                                                { className: 'col-sm-12 col-xs-12' },
                                                _react2['default'].createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    _react2['default'].createElement(
                                                        'div',
                                                        { className: 'col-sm-5' },
                                                        'Password'
                                                    )
                                                )
                                            ),
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'col-sm-12 col-xs-12' },
                                                _react2['default'].createElement('input', { type: 'password', className: 'form-control required minlength', name: 'password', id: 'password', placeholder: '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', ref: 'password' })
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'text-center' },
                                            _react2['default'].createElement(
                                                'button',
                                                { type: 'submit', className: 'btn btn-primary' },
                                                'Login'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return UserLogin;
}(_react.Component);

exports['default'] = UserLogin;
module.exports = exports['default'];

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _UserHelper = __webpack_require__(77);

var _UserHelper2 = _interopRequireDefault(_UserHelper);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UserChangePassword = (_temp = _class = function (_Component) {
				(0, _inherits3['default'])(UserChangePassword, _Component);

				function UserChangePassword(props) {
								(0, _classCallCheck3['default'])(this, UserChangePassword);

								var _this2 = (0, _possibleConstructorReturn3['default'])(this, (UserChangePassword.__proto__ || (0, _getPrototypeOf2['default'])(UserChangePassword)).call(this, props));

								_this2.handleSubmit = function (e) {
												e.preventDefault();
												var _this = _this2;

												var valid = jQuery(_this2.refs.form).valid();

												if (!valid) {
																return false;
												};

												var data = jQuery(_this2.refs.form).serialize();
												var dataJson = URI.parseQuery(data);
												dataJson.id = _auth2['default'].getUserID();

												_UserHelper2['default'].changePassword(dataJson).then(function (response) {
																console.log(response);
																toastr.success("Password changed successfully.");
																_this2.props.onDataUpdate(response.data);
												})['catch'](function (error) {
																toastr.error(error.response.data.message);
												});

												return false;
								};

								return _this2;
				}

				(0, _createClass3['default'])(UserChangePassword, [{
								key: 'componentWillMount',
								value: function () {
												function componentWillMount() {}

												return componentWillMount;
								}()
				}, {
								key: 'componentDidMount',
								value: function () {
												function componentDidMount() {
																var _this = this;
																this.validator = jQuery(this.refs.form).validate({
																				rules: {
																								// password: {
																								//     required: true,
																								//     minlength: 8,
																								//     ContainsAtLeastOneCapitalLetter: true,
																								//     ContainsAtLeastOneDigit: true,
																								// },
																								// password_confirmation: {
																								//     equalTo: "#password"
																								// }
																				}
																});
												}

												return componentDidMount;
								}()
				}, {
								key: 'render',


								// this layout used on Account Page
								value: function () {
												function render() {
																return _react2['default'].createElement(
																				'div',
																				null,
																				_react2['default'].createElement(
																								'div',
																								{ className: 'loginform' },
																								_react2['default'].createElement('div', { id: 'errordiv' }),
																								_react2['default'].createElement(
																												'div',
																												{ className: 'container' },
																												_react2['default'].createElement(
																																'div',
																																{ className: 'row' },
																																_react2['default'].createElement(
																																				'div',
																																				{ className: 'formstyle1Ct changepwdCt password-form-wrapper' },
																																				_react2['default'].createElement(
																																								'h3',
																																								{ className: 'form_title text-center' },
																																								'Change Password'
																																				),
																																				_react2['default'].createElement(
																																								'form',
																																								{ className: 'form-horizontal formstyle1 ChangepwdForm', ref: 'form', onSubmit: this.handleSubmit },
																																								_react2['default'].createElement(
																																												'div',
																																												{ className: 'row' },
																																												_react2['default'].createElement(
																																																'div',
																																																{ className: 'col-md-12' },
																																																_react2['default'].createElement(
																																																				'div',
																																																				{ className: 'form-group' },
																																																				_react2['default'].createElement(
																																																								'label',
																																																								{ className: 'col-sm-12' },
																																																								'Old Password'
																																																				),
																																																				_react2['default'].createElement(
																																																								'div',
																																																								{ className: 'col-sm-12' },
																																																								_react2['default'].createElement(
																																																												'div',
																																																												{ className: 'input-group' },
																																																												_react2['default'].createElement(
																																																																'div',
																																																																{ className: 'input-group-addon' },
																																																																_react2['default'].createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true' })
																																																												),
																																																												_react2['default'].createElement('input', { type: 'password', className: 'form-control required', name: 'oldpassword', id: 'oldpassword', ref: 'oldpassword' })
																																																								)
																																																				)
																																																),
																																																_react2['default'].createElement(
																																																				'div',
																																																				{ className: 'form-group' },
																																																				_react2['default'].createElement(
																																																								'label',
																																																								{ className: 'col-sm-12' },
																																																								'New Password'
																																																				),
																																																				_react2['default'].createElement(
																																																								'div',
																																																								{ className: 'col-sm-12' },
																																																								_react2['default'].createElement(
																																																												'div',
																																																												{ className: 'input-group' },
																																																												_react2['default'].createElement(
																																																																'div',
																																																																{ className: 'input-group-addon' },
																																																																_react2['default'].createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true' })
																																																												),
																																																												_react2['default'].createElement('input', { type: 'password', className: 'form-control required', name: 'password', id: 'password', ref: 'password' })
																																																								),
																																																								_react2['default'].createElement('div', { className: 'password_field_errors is_mobile' })
																																																				)
																																																),
																																																_react2['default'].createElement(
																																																				'div',
																																																				{ className: 'form-group' },
																																																				_react2['default'].createElement(
																																																								'label',
																																																								{ className: 'col-sm-12' },
																																																								_react2['default'].createElement(
																																																												'div',
																																																												{ className: 'row' },
																																																												_react2['default'].createElement(
																																																																'div',
																																																																{ className: 'col-sm-12' },
																																																																'Confirm Password'
																																																												)
																																																								)
																																																				),
																																																				_react2['default'].createElement(
																																																								'div',
																																																								{ className: 'col-sm-12' },
																																																								_react2['default'].createElement(
																																																												'div',
																																																												{ className: 'input-group' },
																																																												_react2['default'].createElement(
																																																																'div',
																																																																{ className: 'input-group-addon' },
																																																																_react2['default'].createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true' })
																																																												),
																																																												_react2['default'].createElement('input', { type: 'password', className: 'form-control required updatePassword', name: 'password_confirmation', id: 'password_confirmation', ref: 'password_confirmation' })
																																																								),
																																																								_react2['default'].createElement('div', { className: 'password_confirmation_field_errors is_mobile' })
																																																				)
																																																),
																																																_react2['default'].createElement(
																																																				'div',
																																																				{ className: 'text-right col-md-12' },
																																																				_react2['default'].createElement(
																																																								'button',
																																																								{ type: 'submit', className: 'btn btn-primary' },
																																																								'Save'
																																																				)
																																																)
																																												)
																																								)
																																				)
																																)
																												)
																								)
																				)
																);
												}

												return render;
								}()
				}]);
				return UserChangePassword;
}(_react.Component), _class.defaultProps = {
				onDataUpdate: function () {
								function onDataUpdate(data) {}

								return onDataUpdate;
				}()
}, _temp);
exports['default'] = UserChangePassword;
module.exports = exports['default'];

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(61);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function (_Component) {
				(0, _inherits3["default"])(Home, _Component);

				function Home() {
								(0, _classCallCheck3["default"])(this, Home);
								return (0, _possibleConstructorReturn3["default"])(this, (Home.__proto__ || (0, _getPrototypeOf2["default"])(Home)).apply(this, arguments));
				}

				(0, _createClass3["default"])(Home, [{
								key: "render",
								value: function () {
												function render() {

																return _react2["default"].createElement(
																				"div",
																				{ className: "pageHome" },
																				_react2["default"].createElement(
																								"div",
																								{ className: "flex-center position-ref full-height" },
																								_react2["default"].createElement(
																												"div",
																												{ className: "content" },
																												_react2["default"].createElement("div", { className: "logo" }),
																												_react2["default"].createElement(
																																"div",
																																{ className: "title m-b-md" },
																																_Constant.APP_TITLE
																												),
																												_react2["default"].createElement(
																																"div",
																																{ className: "links" },
																																_react2["default"].createElement(
																																				_reactRouterDom.Link,
																																				{ to: _Constant.APP_URL_ACCOUNTS },
																																				"Parties"
																																),
																																_react2["default"].createElement(
																																				_reactRouterDom.Link,
																																				{ to: _Constant.APP_URL_TEAMS },
																																				"Teams"
																																),
																																_react2["default"].createElement(
																																				_reactRouterDom.Link,
																																				{ to: _Constant.APP_URL_MATCHES },
																																				"Match Master"
																																),
																																_react2["default"].createElement(
																																				_reactRouterDom.Link,
																																				{ to: _Constant.APP_URL_JOURNAL_ENTRIES },
																																				"Journal"
																																)
																												)
																								)
																				)
																);
												}

												return render;
								}()
				}]);
				return Home;
}(_react.Component);

exports["default"] = Home;
module.exports = exports["default"];

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _TeamHelper = __webpack_require__(180);

var _TeamHelper2 = _interopRequireDefault(_TeamHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Team = function (_Component) {
    (0, _inherits3['default'])(Team, _Component);

    function Team() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, Team);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Team.__proto__ || (0, _getPrototypeOf2['default'])(Team)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
            e.preventDefault();
            if (!$(e.target).valid()) {
                return false;
            }

            var data = jQuery(e.target).serialize();
            _TeamHelper2['default'].store(data).then(function (res) {
                _this.refreshComponent();
            })['catch'](function (error) {
                toastr.error("Please fill all the required fields.");
            });
            return false;
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(Team, [{
        key: 'refreshComponent',
        value: function () {
            function refreshComponent() {
                this.refs.name.value = "";
                this.refs.jqxgrid.updatebounddata();
            }

            return refreshComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var source = {
                    datatype: 'json',
                    datafields: [{ name: '_id', type: 'string' }, { name: 'team_name', type: 'string' }],

                    id: '_id',
                    url: _Constant.APP_URL_TEAMS,

                    updaterow: function () {
                        function updaterow(rowid, rowdata, commit) {
                            _TeamHelper2['default'].update({
                                id: rowdata.uid,
                                team_name: rowdata.team_name
                            });
                            commit(true);
                        }

                        return updaterow;
                    }()
                };

                var dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{ text: 'Id', datafield: '_id', width: 60 }, { text: 'Name', datafield: 'team_name', width: 200 }, {
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);

                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _TeamHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.refreshComponent();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }];
                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-users' }),
                        ' Team'
                    ),
                    _react2['default'].createElement(
                        'form',
                        { ref: 'form', onSubmit: this.onSubmit, className: 'mb-1' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'w-310px' },
                            _react2['default'].createElement(
                                'div',
                                { className: '' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'input-group' },
                                    _react2['default'].createElement('input', { type: 'text', className: 'form-control form-control-sm required error-hide', placeholder: 'Name', ref: 'name', name: 'team_name' }),
                                    _react2['default'].createElement(
                                        'span',
                                        { className: 'input-group-btn' },
                                        _react2['default'].createElement(
                                            'button',
                                            { className: 'btn btn-primary btn-sm', type: 'submit' },
                                            _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                            ' Save'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', width: 310, height: 500, source: dataAdapter,
                        pageable: false, sortable: true, altrows: true, enabletooltips: true,
                        editable: true, columns: columns, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return Team;
}(_react.Component);

exports['default'] = Team;
module.exports = exports['default'];

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _AccountGrid = __webpack_require__(368);

var _AccountGrid2 = _interopRequireDefault(_AccountGrid);

var _MemberForm = __webpack_require__(369);

var _MemberForm2 = _interopRequireDefault(_MemberForm);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Account = (_dec = (0, _mobxReact.inject)('globalStore'), _dec2 = (0, _mobxReact.inject)('accountStore'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(Account, _Component);

    function Account(props) {
        (0, _classCallCheck3['default'])(this, Account);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Account.__proto__ || (0, _getPrototypeOf2['default'])(Account)).call(this, props));

        _this.onFormSubmit = function () {
            console.log(_this.props.match.params.id);
            if (typeof _this.props.match.params.id !== "undefined" && _this.props.match.params.id) {
                console.log('1');
                // this.props.accountStore.account = {}
                _this.props.accountStore.fetch(_this.props.match.params.id);
            } else {
                console.log('2');
                _this.props.accountStore.account = {};
                // this.props.accountStore.fetch(this.props.match.params.id)
            }
            _this.props.accountStore.fetchList({ is_company: false });
        };

        _this.editItem = function (id) {
            _this.props.history.push(_Constant.APP_URL_ACCOUNTS + "/" + id);
        };

        _this.cancelFormClick = function () {
            // this.resetForm()
            _this.props.accountStore.account = {};
            _this.props.history.push(_Constant.APP_URL_ACCOUNTS);
        };

        _this.accountGrid_onDataUpdate = function () {
            _this.props.accountStore.fetchList({ is_company: false });
            if (_this.props.match.params.id) {
                _this.props.accountStore.fetch(_this.props.match.params.id);
            }
        };

        return _this;
    }

    (0, _createClass3['default'])(Account, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.accountStore.fetchList({ is_company: false });
                if (this.props.match.params.id) {
                    this.props.accountStore.fetch(this.props.match.params.id);
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                // console.log(nextProps.match.params.id, this.props.match.params.id)
                if (nextProps.match.params.id !== this.props.match.params.id) {
                    this.props.accountStore.fetch(nextProps.match.params.id);
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var _props$accountStore = this.props.accountStore,
                    accountList = _props$accountStore.accountList,
                    account = _props$accountStore.account;

                return _react2['default'].createElement(
                    'div',
                    { className: 'page1200 mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-user' }),
                        ' Account'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2['default'].createElement(_AccountGrid2['default'], { entriesList: accountList, editItem: this.editItem, onDataUpdate: this.accountGrid_onDataUpdate })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-8' },
                            _react2['default'].createElement(_MemberForm2['default'], { ref: 'memberForm',
                                item: account, accountsList: accountList,
                                onSubmit: this.onFormSubmit, cancelFormClick: function () {
                                    function cancelFormClick() {
                                        return _this2.cancelFormClick();
                                    }

                                    return cancelFormClick;
                                }() })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return Account;
}(_react.Component)) || _class) || _class) || _class);
exports['default'] = Account;
module.exports = exports['default'];

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _AccountHelper = __webpack_require__(111);

var _AccountHelper2 = _interopRequireDefault(_AccountHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AccountGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(AccountGrid, _Component);

    function AccountGrid(props) {
        (0, _classCallCheck3['default'])(this, AccountGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (AccountGrid.__proto__ || (0, _getPrototypeOf2['default'])(AccountGrid)).call(this, props));
    }

    (0, _createClass3['default'])(AccountGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
                // console.log(this.refs.jqxgrid)
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
                // this.refs.jqxgrid.refresh()
                // this.refs.jqxgrid.updatebounddata('cells')
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // console.log("DID MOUnt")
                // window.grid = this.refs.jqxgrid
                // window.grid_data = this.props.entriesList.slice()
                // window.dataAdapter = this.dataAdapter
            }

            return componentDidMount;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'limit', type: 'number' }, { name: 'status', type: 'boolean' }, { name: 'hide', type: 'boolean' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,

                    id: '_id',
                    // url: '/accounts',
                    localdata: this.props.entriesList.slice()

                    // updaterow: (rowid, rowdata, commit) => {
                    //     AccountHelper.update(rowdata.uid, {
                    //         account_name: rowdata.account_name
                    //     }).then((res) => {
                    //         this.props.onDataUpdate()
                    //     })
                    //     commit(true);
                    // },
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Del';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord.uid)
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _AccountHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, {
                    text: 'Edit',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            _this2.props.editItem(dataRecord.uid);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 70 }, { text: 'Name', datafield: 'account_name', width: 200 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', key1: Math.random(),
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 600, pageable: false, pagermode: 'simple', pagesize: 1000,
                        sortable: true, altrows: true, enabletooltips: true,
                        editable: false,
                        filterable: false, showfilterrow: false })
                );
            }

            return render;
        }()
    }]);
    return AccountGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = AccountGrid;
module.exports = exports['default'];

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(80);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
// import ComboBoxMember from '../controls/ComboBoxMember.jsx'


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _InputDecimal = __webpack_require__(56);

var _InputDecimal2 = _interopRequireDefault(_InputDecimal);

var _ComboBoxLocal = __webpack_require__(57);

var _ComboBoxLocal2 = _interopRequireDefault(_ComboBoxLocal);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

var _AccountHelper = __webpack_require__(111);

var _AccountHelper2 = _interopRequireDefault(_AccountHelper);

var _Constant = __webpack_require__(10);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MemberForm = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MemberForm, _Component);

    function MemberForm(props) {
        (0, _classCallCheck3['default'])(this, MemberForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MemberForm.__proto__ || (0, _getPrototypeOf2['default'])(MemberForm)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            // if(! $(this.refs.memberForm.refs.form).valid()) {
            //   return false;
            // }
            var data = jQuery(_this.refs.form).serialize();
            _AccountHelper2['default'].save(data, _this.props.item._id).then(function (response) {
                _this.props.onSubmit();
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });
        };

        _this.defaultItem = {
            _id: null,
            limit: 0,
            sess_comm: 0,
            match_comm: 0,
            lk_comm: 0,
            player_comm: 0,
            khada_comm: 0,
            cup_comm: 0,
            tfr_sess_comm: 0,
            tfr_match_comm: 0,
            tfr_lk_comm: 0,
            tfr_player_comm: 0,
            tfr_khada_comm: 0,
            tfr_cup_comm: 0,
            status: true,
            hide: false,
            patti: [],
            sess_comm_accounts: [],
            meter_comm_accounts: []

        };
        return _this;
    }

    (0, _createClass3['default'])(MemberForm, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.mtrap = _GlobalHelper2['default'].mounstrapFormInit(this.refs.form);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var item = (0, _assign2['default'])({}, this.defaultItem, this.props.item || {});
                return _react2['default'].createElement(
                    'div',
                    { className: '' },
                    _react2['default'].createElement(
                        'form',
                        { className: 'moustrapform', ref: 'form', key: Math.random() },
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-4' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Name'
                                ),
                                _react2['default'].createElement('input', { className: 'form-control form-control-sm error-hide required', type: 'text', name: 'account_name', defaultValue: item.account_name })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-2' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Limit:'
                                ),
                                _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', max: '100', value: item.limit, name: 'limit' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-1' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Status:'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2['default'].createElement(
                                        _CSelect2['default'],
                                        { className: 'form-control form-control-sm', name: 'status', value: item.status, items: _Constant.LIST_STATUS_BOOLEAN },
                                        ' '
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-1' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Hide:'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2['default'].createElement(
                                        _CSelect2['default'],
                                        { className: 'form-control form-control-sm', name: 'hide', value: item.hide, items: _Constant.LIST_STATUS_BOOLEAN },
                                        ' '
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'fieldset',
                            null,
                            _react2['default'].createElement(
                                'legend',
                                null,
                                'Commission:'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-row' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'form-group col-md-2' },
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'col-form-label' },
                                        'Match Comm. To:'
                                    ),
                                    _react2['default'].createElement(_ComboBoxLocal2['default'], { width: "100%", ref: 'memberDdl', field_id: 'match_comm_to', valueMember: '_id',
                                        displayMember: 'account_name', data: this.props.accountsList, selectedValue: item.match_comm_to })
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'form-group col-md-2' },
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'col-form-label' },
                                        'Match Comm. :'
                                    ),
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: item.match_comm, name: 'match_comm' })
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'form-group col-md-2' },
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'col-form-label' },
                                        'Entry Type'
                                    ),
                                    _react2['default'].createElement(
                                        _CSelect2['default'],
                                        { className: 'form-control form-control-sm', name: 'match_comm_type', value: item.match_comm_type, items: _Constant.LIST_COMM_TYPE },
                                        ' '
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: '' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'S.N.'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Meter Comm To:'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Meter Comm.(%):'
                                        )
                                    )
                                ),
                                Array.apply(0, Array(1)).map(function (x, i) {
                                    var account_id = item.meter_comm_accounts[i] == undefined ? '' : item.meter_comm_accounts[i]['account_id'];
                                    var meter_comm = item.meter_comm_accounts[i] == undefined ? 0 : item.meter_comm_accounts[i]['meter_comm'];
                                    return _react2['default'].createElement(
                                        'div',
                                        { className: 'row', key: String(item.id) + '_key_' + String(i) },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-1' },
                                            _react2['default'].createElement(
                                                'label',
                                                { className: 'col-form-label' },
                                                i + 1
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-3' },
                                            _react2['default'].createElement(_ComboBoxLocal2['default'], (0, _defineProperty3['default'])({ width: "100%", field_id: 'meter_comm_accounts[' + String(i) + '][account_id]', valueMember: '_id',
                                                displayMember: 'account_name', data: _this2.props.accountsList, selectedValue: account_id }, 'width', '100%'))
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-2' },
                                            _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: meter_comm, name: 'meter_comm_accounts[' + String(i) + '][meter_comm]' })
                                        )
                                    );
                                })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: '' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'S.N.'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Session Comm To:'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Session Comm.(%):'
                                        )
                                    )
                                ),
                                Array.apply(0, Array(2)).map(function (x, i) {
                                    var account_id = item.sess_comm_accounts[i] == undefined ? '' : item.sess_comm_accounts[i]['account_id'];
                                    var sess_comm = item.sess_comm_accounts[i] == undefined ? 0 : item.sess_comm_accounts[i]['sess_comm'];
                                    return _react2['default'].createElement(
                                        'div',
                                        { className: 'row', key: String(item.id) + '_key_' + String(i) },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-1' },
                                            _react2['default'].createElement(
                                                'label',
                                                { className: 'col-form-label' },
                                                i + 1
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-3' },
                                            _react2['default'].createElement(_ComboBoxLocal2['default'], (0, _defineProperty3['default'])({ width: "100%", field_id: 'sess_comm_accounts[' + String(i) + '][account_id]', valueMember: '_id',
                                                displayMember: 'account_name', data: _this2.props.accountsList, selectedValue: account_id }, 'width', '100%'))
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-2' },
                                            _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: sess_comm, name: 'sess_comm_accounts[' + String(i) + '][sess_comm]' })
                                        )
                                    );
                                })
                            )
                        ),
                        _react2['default'].createElement(
                            'fieldset',
                            null,
                            _react2['default'].createElement(
                                'legend',
                                null,
                                'Patti:'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: '' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'S.N.'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Patti Under:'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-2' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Match (%):'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-2' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Sess (%):'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-2' },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'col-form-label' },
                                            'Meter (%):'
                                        )
                                    )
                                ),
                                Array.apply(0, Array(3)).map(function (x, i) {
                                    var account_id = item.patti[i] == undefined ? '' : item.patti[i]['account_id'];
                                    var match = item.patti[i] == undefined ? 0 : item.patti[i]['match'];
                                    var session = item.patti[i] == undefined ? 0 : item.patti[i]['session'];
                                    var meter = item.patti[i] == undefined ? 0 : item.patti[i]['meter'];
                                    return _react2['default'].createElement(
                                        'div',
                                        { className: 'row', key: String(item.id) + '_key_' + String(i) },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-1' },
                                            _react2['default'].createElement(
                                                'label',
                                                { className: 'col-form-label' },
                                                i + 1
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-3' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'uk-form-controls' },
                                                _react2['default'].createElement(_ComboBoxLocal2['default'], (0, _defineProperty3['default'])({ width: "100%", ref: 'pattiAccountDdl_' + String(i), field_id: 'patti[' + String(i) + '][account_id]', valueMember: '_id',
                                                    displayMember: 'account_name', data: _this2.props.accountsList, selectedValue: account_id }, 'width', '100%'))
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-2' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'uk-form-controls' },
                                                _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: match, name: 'patti[' + String(i) + '][match]' })
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-2' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'uk-form-controls' },
                                                _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: session, name: 'patti[' + String(i) + '][session]' })
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'col-md-2' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'uk-form-controls' },
                                                _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm uk-form-small error-hide required number', type: 'text', value: meter, name: 'patti[' + String(i) + '][meter]' })
                                            )
                                        )
                                    );
                                })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mt-3 text-right col-md-10' },
                            _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-primary btn-sm', type: 'button', onClick: this.onSubmit },
                                _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                ' Save'
                            ),
                            _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-danger btn-sm ml-1', type: 'button', onClick: this.props.cancelFormClick },
                                _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                ' Cancel'
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MemberForm;
}(_react.Component), _class.defaultProps = {
    accountsList: [],
    onSubmit: function () {
        function onSubmit() {}

        return onSubmit;
    }(),
    cancelFormClick: function () {
        function cancelFormClick() {}

        return cancelFormClick;
    }(),
    item: {}
}, _temp);
exports['default'] = MemberForm;
module.exports = exports['default'];

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(371);
module.exports = __webpack_require__(23).Object.assign;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(34);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(372) });


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(79);
var gOPS = __webpack_require__(123);
var pIE = __webpack_require__(75);
var toObject = __webpack_require__(112);
var IObject = __webpack_require__(171);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(45)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _ComboBoxMember = __webpack_require__(58);

var _ComboBoxMember2 = _interopRequireDefault(_ComboBoxMember);

var _JournalEntryForm = __webpack_require__(374);

var _JournalEntryForm2 = _interopRequireDefault(_JournalEntryForm);

var _JournalEntryGrid = __webpack_require__(376);

var _JournalEntryGrid2 = _interopRequireDefault(_JournalEntryGrid);

var _JournalEntryHelper = __webpack_require__(73);

var _JournalEntryHelper2 = _interopRequireDefault(_JournalEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JournalEntry = (_dec = (0, _mobxReact.inject)('journalEntryStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(JournalEntry, _Component);

    function JournalEntry() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, JournalEntry);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = JournalEntry.__proto__ || (0, _getPrototypeOf2['default'])(JournalEntry)).call.apply(_ref, [this].concat(args))), _this), _this.onCloseComboMember = function () {
            var accountId = _this.refs.comboMember.getSelectedValue();
            // console.log(accountId)
            _this.props.history.push("/journal_entries/account/" + accountId);
        }, _this.fetch = function () {
            _this.props.journalEntryStore.fetchListByAccount(_this.props.match.params.account_id, _this.refs.showMondayFinalChk.checked);
            _this.props.journalEntryStore.fetchAccountBalanceObject(_this.props.match.params.account_id);
        }, _this.onFormSubmitted = function () {
            // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
            // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
            _this.fetch();
        }, _this.mondayFinal = function () {
            axios({
                method: 'post',
                url: "/journal_entries/monday_final"
            }).then(function (res) {
                _this.fetch();
            });
        }, _this.onShowMondayFinalChange = function (e) {
            // console.log(e.target.checked)
            var show = false;
            if (e.target.checked) {
                show = true;
            }
            _this.props.journalEntryStore.fetchListByAccount(_this.props.match.params.account_id, show);
        }, _this.entryGrid_onDataUpdate = function () {
            // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
            // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
            _this.fetch();
        }, _this.exportReport = function () {
            // this.refs.entryGrid.refs.jqxgrid.exportdata('pdf', 'journal');
            // var filters = this.refs.allMatchGrid.getSelectedRowsData()

            axios({
                method: 'post',
                url: "/exportreports/journal_entries",
                data: {
                    account_id: _this.props.match.params.account_id,
                    is_monday_final: _this.refs.showMondayFinalChk.checked
                }
            }).then(function (res) {
                window.location.href = res.data.fileDownloadUrl;
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(JournalEntry, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                if (this.props.match.params.account_id) {
                    this.refs.comboMember.setSelectedValue(this.props.match.params.account_id);
                    // this.props.journalEntryStore.fetchListByAccount(this.props.match.params.account_id, this.refs.showMondayFinalChk.checked)
                    // this.props.journalEntryStore.fetchAccountBalanceObject(this.props.match.params.account_id)
                    this.fetch();
                }

                axios.get("/others/create_book_account");
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                // console.log(nextProps.match.params.id, this.props.match.params.id)
                if (nextProps.match.params.account_id !== this.props.match.params.account_id) {
                    this.props.journalEntryStore.fetchListByAccount(nextProps.match.params.account_id, this.refs.showMondayFinalChk.checked);
                    this.props.journalEntryStore.fetchAccountBalanceObject(nextProps.match.params.account_id);
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var account_id = this.props.match.params.account_id;
                var _props$journalEntrySt = this.props.journalEntryStore,
                    journalEntriesList = _props$journalEntrySt.journalEntriesList,
                    selectedAccMonFinalBal = _props$journalEntrySt.selectedAccMonFinalBal,
                    selectedAccBal = _props$journalEntrySt.selectedAccBal;


                return _react2['default'].createElement(
                    'div',
                    { className: 'page mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-book' }),
                        ' Journal Entry'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-2' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-md-6' },
                                'Select Account: ',
                                _react2['default'].createElement(_ComboBoxMember2['default'], {
                                    field_id: 'from_account_id', ref: 'comboMember', onClose: this.onCloseComboMember }),
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Opening Bal: ',
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        selectedAccMonFinalBal
                                    )
                                ),
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'ml-2' },
                                    'Bal: ',
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        selectedAccBal
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-md-6 text-right' },
                                account_id ? _react2['default'].createElement(
                                    'button',
                                    { ref: 'pdfExport', onClick: this.exportReport, className: 'btn btn-sm btn-primary mr-1' },
                                    _react2['default'].createElement('i', { className: 'fa fa-file-text-o' }),
                                    ' Export'
                                ) : '',
                                _react2['default'].createElement(
                                    'button',
                                    { className: 'btn btn-primary btn-sm', onClick: this.mondayFinal },
                                    'Monday Final'
                                ),
                                _react2['default'].createElement('br', null),
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'form-check-label' },
                                    _react2['default'].createElement('input', { className: 'form-check-input', type: 'checkbox', ref: 'showMondayFinalChk', defaultChecked: false,
                                        onChange: this.onShowMondayFinalChange }),
                                    ' Show Monday Final'
                                )
                            )
                        )
                    ),
                    account_id ? _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(
                            'div',
                            { className: 'mt-3 mb-1' },
                            _react2['default'].createElement(_JournalEntryForm2['default'], { accountId: account_id, onFormSubmitted: this.onFormSubmitted })
                        ),
                        _react2['default'].createElement(_JournalEntryGrid2['default'], { ref: 'entryGrid',
                            onDataUpdate: this.entryGrid_onDataUpdate,
                            onEditButtonClick: this.onEditButtonClick,
                            entriesList: journalEntriesList })
                    ) : ''
                );
            }

            return render;
        }()
    }]);
    return JournalEntry;
}(_react.Component)) || _class) || _class);
exports['default'] = JournalEntry;
module.exports = exports['default'];

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxdatetimeinput = __webpack_require__(375);

var _react_jqxdatetimeinput2 = _interopRequireDefault(_react_jqxdatetimeinput);

var _ComboBoxMember = __webpack_require__(58);

var _ComboBoxMember2 = _interopRequireDefault(_ComboBoxMember);

var _InputDecimal = __webpack_require__(56);

var _InputDecimal2 = _interopRequireDefault(_InputDecimal);

var _JournalEntryHelper = __webpack_require__(73);

var _JournalEntryHelper2 = _interopRequireDefault(_JournalEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JournalEntryForm = (_temp = _class = function (_React$Component) {
    (0, _inherits3['default'])(JournalEntryForm, _React$Component);

    function JournalEntryForm(props) {
        (0, _classCallCheck3['default'])(this, JournalEntryForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (JournalEntryForm.__proto__ || (0, _getPrototypeOf2['default'])(JournalEntryForm)).call(this, props));

        _this.resetForm = function () {
            console.log(_this.state);
            _this.setState({
                isNew: false,
                item: {}
            });
        };

        _this.formSubmit = function (e) {
            e.preventDefault();

            if (!jQuery(_this.refs.form).valid()) {
                return false;
            }

            var dated = _this.refs.dated.getText();
            if (!dated) {
                toastr.error("Please Select Date.");
            }

            if (!_this.props.accountId) {
                toastr.error("Please Select Account First.");
            }

            var data = jQuery(_this.refs.form).serialize();

            var dataJson = URI.parseQuery(data);
            dataJson.created_at = dated;
            dataJson.from_account_id = _this.props.accountId;
            console.log(dataJson);
            _JournalEntryHelper2['default'].save(dataJson, _this.state.item._id).then(function (response) {
                _this.props.onFormSubmitted(response);
            })['catch'](function (err) {
                console.log(err);
                toastr.error(err.response.data.message);
                // console.log(error)
            });
            return false;
        };

        _this.state = {
            matchId: _this.props.matchId,
            isNew: true,
            item: {
                _id: null,
                account_id: null,
                narration: null,
                dr_amt: 0,
                cr_amt: 0
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(JournalEntryForm, [{
        key: 'edit',
        value: function () {
            function edit(rowdata) {
                this.setState({
                    isNew: false,
                    item: rowdata
                });
            }

            return edit;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = this.state.item;


                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'form',
                        { ref: 'form' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Date'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_react_jqxdatetimeinput2['default'], { ref: 'dated', width: 110, height: 25 })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Account'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxMember2['default'], { width: '150', field_id: 'account_id', selectedValue: item.account_id, key: this.state.item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Narration'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { className: 'form-control form-control-sm error-hide w-300p required', name: 'narration' })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Pay (Dr.)'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm error-hide required number', name: 'dr_amt', value: item.dr_amt })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Receive (Cr.)'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm error-hide required number', name: 'cr_amt', value: item.cr_amt })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-primary btn-sm', type: 'button', onClick: this.formSubmit },
                                        'Save'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-primary btn-sm', type: 'button', onClick: this.resetForm },
                                        'Cancel'
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return JournalEntryForm;
}(_react2['default'].Component), _class.defaultProps = {
    matchId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    getBookNo: function () {
        function getBookNo() {}

        return getBookNo;
    }()
}, _temp);
exports['default'] = JournalEntryForm;
module.exports = exports['default'];

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = exports.jqx = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JQXLite = window.JQXLite; /*
                              jQWidgets v5.3.2 (2017-Sep)
                              Copyright (c) 2011-2017 jQWidgets.
                              License: http://jqwidgets.com/license/
                              */
var jqx = exports.jqx = window.jqx;

var JqxDateTimeInput = function (_React$Component) {
    (0, _inherits3['default'])(JqxDateTimeInput, _React$Component);

    function JqxDateTimeInput() {
        (0, _classCallCheck3['default'])(this, JqxDateTimeInput);
        return (0, _possibleConstructorReturn3['default'])(this, (JqxDateTimeInput.__proto__ || (0, _getPrototypeOf2['default'])(JqxDateTimeInput)).apply(this, arguments));
    }

    (0, _createClass3['default'])(JqxDateTimeInput, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var options = this.manageAttributes();
                this.createComponent(options);
            }

            return componentDidMount;
        }()
    }, {
        key: 'manageAttributes',
        value: function () {
            function manageAttributes() {
                var properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
                var options = {};
                for (var item in this.props) {
                    if (item === 'settings') {
                        for (var itemTwo in this.props[item]) {
                            options[itemTwo] = this.props[item][itemTwo];
                        }
                    } else {
                        if (properties.indexOf(item) !== -1) {
                            options[item] = this.props[item];
                        }
                    }
                }
                return options;
            }

            return manageAttributes;
        }()
    }, {
        key: 'createComponent',
        value: function () {
            function createComponent(options) {
                if (!this.style) {
                    for (var style in this.props.style) {
                        JQXLite(this.componentSelector).css(style, this.props.style[style]);
                    }
                }
                if (this.props.className !== undefined) {
                    var classes = this.props.className.split(' ');
                    for (var i = 0; i < classes.length; i++) {
                        JQXLite(this.componentSelector).addClass(classes[i]);
                    }
                }
                if (!this.template) {
                    JQXLite(this.componentSelector).html(this.props.template);
                }
                JQXLite(this.componentSelector).jqxDateTimeInput(options);
            }

            return createComponent;
        }()
    }, {
        key: 'setOptions',
        value: function () {
            function setOptions(options) {
                JQXLite(this.componentSelector).jqxDateTimeInput('setOptions', options);
            }

            return setOptions;
        }()
    }, {
        key: 'getOptions',
        value: function () {
            function getOptions() {
                if (arguments.length === 0) {
                    throw Error('At least one argument expected in getOptions()!');
                }
                var resultToReturn = {};
                for (var i = 0; i < arguments.length; i++) {
                    resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDateTimeInput(arguments[i]);
                }
                return resultToReturn;
            }

            return getOptions;
        }()
    }, {
        key: 'on',
        value: function () {
            function on(name, callbackFn) {
                JQXLite(this.componentSelector).on(name, callbackFn);
            }

            return on;
        }()
    }, {
        key: 'off',
        value: function () {
            function off(name) {
                JQXLite(this.componentSelector).off(name);
            }

            return off;
        }()
    }, {
        key: 'animationType',
        value: function () {
            function animationType(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('animationType', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('animationType');
                }
            }

            return animationType;
        }()
    }, {
        key: 'allowNullDate',
        value: function () {
            function allowNullDate(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('allowNullDate', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('allowNullDate');
                }
            }

            return allowNullDate;
        }()
    }, {
        key: 'allowKeyboardDelete',
        value: function () {
            function allowKeyboardDelete(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('allowKeyboardDelete', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('allowKeyboardDelete');
                }
            }

            return allowKeyboardDelete;
        }()
    }, {
        key: 'clearString',
        value: function () {
            function clearString(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('clearString', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('clearString');
                }
            }

            return clearString;
        }()
    }, {
        key: 'culture',
        value: function () {
            function culture(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('culture', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('culture');
                }
            }

            return culture;
        }()
    }, {
        key: 'closeDelay',
        value: function () {
            function closeDelay(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('closeDelay', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('closeDelay');
                }
            }

            return closeDelay;
        }()
    }, {
        key: 'closeCalendarAfterSelection',
        value: function () {
            function closeCalendarAfterSelection(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('closeCalendarAfterSelection', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('closeCalendarAfterSelection');
                }
            }

            return closeCalendarAfterSelection;
        }()
    }, {
        key: 'dropDownHorizontalAlignment',
        value: function () {
            function dropDownHorizontalAlignment(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment');
                }
            }

            return dropDownHorizontalAlignment;
        }()
    }, {
        key: 'dropDownVerticalAlignment',
        value: function () {
            function dropDownVerticalAlignment(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('dropDownVerticalAlignment', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('dropDownVerticalAlignment');
                }
            }

            return dropDownVerticalAlignment;
        }()
    }, {
        key: 'disabled',
        value: function () {
            function disabled(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('disabled', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('disabled');
                }
            }

            return disabled;
        }()
    }, {
        key: 'enableBrowserBoundsDetection',
        value: function () {
            function enableBrowserBoundsDetection(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection');
                }
            }

            return enableBrowserBoundsDetection;
        }()
    }, {
        key: 'enableAbsoluteSelection',
        value: function () {
            function enableAbsoluteSelection(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('enableAbsoluteSelection', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('enableAbsoluteSelection');
                }
            }

            return enableAbsoluteSelection;
        }()
    }, {
        key: 'firstDayOfWeek',
        value: function () {
            function firstDayOfWeek(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('firstDayOfWeek', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('firstDayOfWeek');
                }
            }

            return firstDayOfWeek;
        }()
    }, {
        key: 'formatString',
        value: function () {
            function formatString(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('formatString', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('formatString');
                }
            }

            return formatString;
        }()
    }, {
        key: 'height',
        value: function () {
            function height(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('height', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('height');
                }
            }

            return height;
        }()
    }, {
        key: 'min',
        value: function () {
            function min(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('min', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('min');
                }
            }

            return min;
        }()
    }, {
        key: 'max',
        value: function () {
            function max(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('max', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('max');
                }
            }

            return max;
        }()
    }, {
        key: 'openDelay',
        value: function () {
            function openDelay(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('openDelay', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('openDelay');
                }
            }

            return openDelay;
        }()
    }, {
        key: 'placeHolder',
        value: function () {
            function placeHolder(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('placeHolder', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('placeHolder');
                }
            }

            return placeHolder;
        }()
    }, {
        key: 'popupZIndex',
        value: function () {
            function popupZIndex(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('popupZIndex', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('popupZIndex');
                }
            }

            return popupZIndex;
        }()
    }, {
        key: 'rtl',
        value: function () {
            function rtl(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('rtl', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('rtl');
                }
            }

            return rtl;
        }()
    }, {
        key: 'readonly',
        value: function () {
            function readonly(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('readonly', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('readonly');
                }
            }

            return readonly;
        }()
    }, {
        key: 'showFooter',
        value: function () {
            function showFooter(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('showFooter', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('showFooter');
                }
            }

            return showFooter;
        }()
    }, {
        key: 'selectionMode',
        value: function () {
            function selectionMode(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('selectionMode', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('selectionMode');
                }
            }

            return selectionMode;
        }()
    }, {
        key: 'showWeekNumbers',
        value: function () {
            function showWeekNumbers(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('showWeekNumbers', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('showWeekNumbers');
                }
            }

            return showWeekNumbers;
        }()
    }, {
        key: 'showTimeButton',
        value: function () {
            function showTimeButton(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('showTimeButton', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('showTimeButton');
                }
            }

            return showTimeButton;
        }()
    }, {
        key: 'showCalendarButton',
        value: function () {
            function showCalendarButton(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('showCalendarButton', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('showCalendarButton');
                }
            }

            return showCalendarButton;
        }()
    }, {
        key: 'theme',
        value: function () {
            function theme(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('theme', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('theme');
                }
            }

            return theme;
        }()
    }, {
        key: 'template',
        value: function () {
            function template(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('template', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('template');
                }
            }

            return template;
        }()
    }, {
        key: 'textAlign',
        value: function () {
            function textAlign(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('textAlign', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('textAlign');
                }
            }

            return textAlign;
        }()
    }, {
        key: 'todayString',
        value: function () {
            function todayString(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('todayString', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('todayString');
                }
            }

            return todayString;
        }()
    }, {
        key: 'value',
        value: function () {
            function value(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('value', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('value');
                }
            }

            return value;
        }()
    }, {
        key: 'width',
        value: function () {
            function width(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('width', arg);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('width');
                }
            }

            return width;
        }()
    }, {
        key: 'close',
        value: function () {
            function close() {
                JQXLite(this.componentSelector).jqxDateTimeInput('close');
            }

            return close;
        }()
    }, {
        key: 'destroy',
        value: function () {
            function destroy() {
                JQXLite(this.componentSelector).jqxDateTimeInput('destroy');
            }

            return destroy;
        }()
    }, {
        key: 'focus',
        value: function () {
            function focus() {
                JQXLite(this.componentSelector).jqxDateTimeInput('focus');
            }

            return focus;
        }()
    }, {
        key: 'getRange',
        value: function () {
            function getRange(date) {
                return JQXLite(this.componentSelector).jqxDateTimeInput('getRange', date);
            }

            return getRange;
        }()
    }, {
        key: 'getText',
        value: function () {
            function getText() {
                return JQXLite(this.componentSelector).jqxDateTimeInput('getText');
            }

            return getText;
        }()
    }, {
        key: 'getDate',
        value: function () {
            function getDate() {
                return JQXLite(this.componentSelector).jqxDateTimeInput('getDate');
            }

            return getDate;
        }()
    }, {
        key: 'getMaxDate',
        value: function () {
            function getMaxDate() {
                return JQXLite(this.componentSelector).jqxDateTimeInput('getMaxDate');
            }

            return getMaxDate;
        }()
    }, {
        key: 'getMinDate',
        value: function () {
            function getMinDate() {
                return JQXLite(this.componentSelector).jqxDateTimeInput('getMinDate');
            }

            return getMinDate;
        }()
    }, {
        key: 'open',
        value: function () {
            function open() {
                JQXLite(this.componentSelector).jqxDateTimeInput('open');
            }

            return open;
        }()
    }, {
        key: 'setRange',
        value: function () {
            function setRange(date, date2) {
                JQXLite(this.componentSelector).jqxDateTimeInput('setRange', date, date2);
            }

            return setRange;
        }()
    }, {
        key: 'setMinDate',
        value: function () {
            function setMinDate(date) {
                JQXLite(this.componentSelector).jqxDateTimeInput('setMinDate', date);
            }

            return setMinDate;
        }()
    }, {
        key: 'setMaxDate',
        value: function () {
            function setMaxDate(date) {
                JQXLite(this.componentSelector).jqxDateTimeInput('setMaxDate', date);
            }

            return setMaxDate;
        }()
    }, {
        key: 'setDate',
        value: function () {
            function setDate(date) {
                JQXLite(this.componentSelector).jqxDateTimeInput('setDate', date);
            }

            return setDate;
        }()
    }, {
        key: 'val',
        value: function () {
            function val(value, value2) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxDateTimeInput('val', value, value2);
                } else {
                    return JQXLite(this.componentSelector).jqxDateTimeInput('val');
                }
            }

            return val;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var id = 'jqxDateTimeInput' + JQXLite.generateID();
                this.componentSelector = '#' + id;
                return _react2['default'].createElement(
                    'div',
                    { id: id },
                    this.props.value,
                    this.props.children
                );
            }

            return render;
        }()
    }]);
    return JqxDateTimeInput;
}(_react2['default'].Component);

exports['default'] = JqxDateTimeInput;
;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _JournalEntryHelper = __webpack_require__(73);

var _JournalEntryHelper2 = _interopRequireDefault(_JournalEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JournalEntryGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(JournalEntryGrid, _Component);

    function JournalEntryGrid(props) {
        (0, _classCallCheck3['default'])(this, JournalEntryGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (JournalEntryGrid.__proto__ || (0, _getPrototypeOf2['default'])(JournalEntryGrid)).call(this, props));
    }

    (0, _createClass3['default'])(JournalEntryGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'dr_amt', type: 'string' }, { name: 'cr_amt', type: 'string' }, { name: 'bal', type: 'string' }, { name: 'narration', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'journal_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'is_monday_final', type: 'boolean' }, { name: 'locked', type: 'boolean' }, { name: 'type', type: 'string' }, { name: 'by_account_name', type: 'string' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                    // url: '/journal_entries?account_id='+this.props.accountId
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    exportable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.locked) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            console.log(dataRecord.uid);
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _JournalEntryHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    console.log(err);
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' }, { text: 'Type', datafield: 'type', width: 80 }, { text: 'By Account', datafield: 'by_account_name', width: 150 },
                // { text: 'Account', datafield: 'account_name', width: 150 },
                { text: 'Narration', datafield: 'narration', width: 500 }, { text: 'Debit', datafield: 'dr_amt', width: 100, cellsformat: 'd2' }, { text: 'Credit', datafield: 'cr_amt', width: 100, cellsformat: 'd2' }, { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2' }, { text: 'Is Monday Final', datafield: 'is_monday_final', width: 100, columntype: 'checkbox', filterable: false }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.props.entriesList.slice())


                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 400,
                        pageable: true, sortable: true, altrows: false, enabletooltips: false,
                        editable: false, filterable: true, showfilterrow: true,
                        columnsresize: true })
                );
            }

            return render;
        }()
    }]);
    return JournalEntryGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }()
}, _temp);
exports['default'] = JournalEntryGrid;
module.exports = exports['default'];

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MatchTypeHelper = __webpack_require__(378);

var _MatchTypeHelper2 = _interopRequireDefault(_MatchTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var State = function (_Component) {
  (0, _inherits3['default'])(State, _Component);

  function State() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3['default'])(this, State);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3['default'])(this, (_ref = State.__proto__ || (0, _getPrototypeOf2['default'])(State)).call.apply(_ref, [this].concat(args))), _this2), _this2.formSubmit = function (e) {
      e.preventDefault();
      var _this = _this2;
      if (!$(_this2.refs.form).valid()) {
        return false;
      }

      var data = jQuery(e.target).serialize();
      _MatchTypeHelper2['default'].store(data).then(function (response) {
        console.log(response);
        _this.refreshComponent();
      })['catch'](function (error) {
        toastr.error("Please fill all the required fields.");
      });
      return false;
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this2, _ret);
  }

  (0, _createClass3['default'])(State, [{
    key: 'refreshComponent',
    value: function () {
      function refreshComponent() {
        this.refs.jqxgrid.updatebounddata();
      }

      return refreshComponent;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this3 = this;

        var _this = this;
        var source = {
          datatype: 'json',
          datafields: [{ name: 'match_type_name', type: 'string' }, { name: 'match_type_val', type: 'string' }],

          id: '_id',
          url: '../match_types',

          updaterow: function () {
            function updaterow(rowid, rowdata, commit) {
              _MatchTypeHelper2['default'].update({
                id: rowdata.uid,
                match_type_name: rowdata.match_type_name,
                match_type_val: rowdata.match_type_val
              });
              commit(true);
            }

            return updaterow;
          }()
        };

        var dataAdapter = new $.jqx.dataAdapter(source);

        var columns = [{ text: 'Name', datafield: 'match_type_name', width: 150 }, { text: 'value', datafield: 'match_type_val', width: 150 }, {
          text: 'Delete', datafield: 'Delete', columntype: 'button', width: 50, filterable: false,
          cellsrenderer: function () {
            function cellsrenderer() {
              return 'Delete';
            }

            return cellsrenderer;
          }(), buttonclick: function () {
            function buttonclick(row) {
              var dataRecord = _this3.refs.jqxgrid.getrowdata(row);
              console.log(dataRecord.uid);
              _MatchTypeHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                _this.refreshComponent();
              });
            }

            return buttonclick;
          }()
        }];
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h3',
            null,
            'Match Type (ADMIN USE ONLY)'
          ),
          _react2['default'].createElement(
            'form',
            { ref: 'form', onSubmit: function () {
                function onSubmit(e) {
                  return _this3.formSubmit(e);
                }

                return onSubmit;
              }() },
            _react2['default'].createElement(
              'div',
              { className: 'uk-margin' },
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('input', { type: 'text', className: 'uk-input uk-form-width-medium uk-form-small required error-hide', placeholder: 'Name', name: 'match_type_name' }),
                _react2['default'].createElement('input', { type: 'text', className: 'uk-input uk-form-width-medium uk-form-small required error-hide', placeholder: 'Type Value', name: 'match_type_val' }),
                _react2['default'].createElement(
                  'button',
                  { className: 'uk-button uk-button-default uk-form-small', type: 'submit' },
                  'Save'
                )
              )
            )
          ),
          _react2['default'].createElement(_react_jqxgrid2['default'], {
            ref: 'jqxgrid',
            width: 400, height: 600, source: dataAdapter, pageable: true,
            sortable: true, altrows: true, enabletooltips: true,
            editable: true, columns: columns,
            filterable: true, showfilterrow: true
          })
        );
      }

      return render;
    }()
  }]);
  return State;
}(_react.Component);

exports['default'] = State;
module.exports = exports['default'];

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchTypeHelper = function () {
	function MatchTypeHelper() {
		(0, _classCallCheck3['default'])(this, MatchTypeHelper);
	}

	(0, _createClass3['default'])(MatchTypeHelper, null, [{
		key: 'store',
		value: function () {
			function store(data) {
				return axios({
					method: 'post',
					url: "/match_types",
					data: data
				});
			}

			return store;
		}()
	}, {
		key: 'update',
		value: function () {
			function update(data) {
				return axios({
					method: 'put',
					url: "/match_types/" + data.id,
					data: data
				});
			}

			return update;
		}()
	}, {
		key: 'delete',
		value: function () {
			function _delete(id) {
				return axios({
					method: 'delete',
					url: "/match_types/" + id
				});
			}

			return _delete;
		}()
	}]);
	return MatchTypeHelper;
}();

exports['default'] = MatchTypeHelper;
module.exports = exports['default'];

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _mobxReact = __webpack_require__(13);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _MatchTeam = __webpack_require__(380);

var _MatchTeam2 = _interopRequireDefault(_MatchTeam);

var _MatchForm = __webpack_require__(382);

var _MatchForm2 = _interopRequireDefault(_MatchForm);

var _MatchGrid = __webpack_require__(384);

var _MatchGrid2 = _interopRequireDefault(_MatchGrid);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Match = (_dec = (0, _mobxReact.inject)('matchStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(Match, _Component);

    function Match(props, context) {
        (0, _classCallCheck3['default'])(this, Match);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Match.__proto__ || (0, _getPrototypeOf2['default'])(Match)).call(this, props));

        _this.onFormSubmit = function () {
            if (!_this.props.match.params.id) {
                _this.props.matchStore.account = {};
            } else {
                _this.props.matchStore.fetch(_this.props.match.params.id);
            }
            _this.props.matchStore.fetchList();
        };

        _this.editItem = function (id) {
            // this.fetchMatch(id)
            _this.props.history.push(_Constant.APP_URL_MATCHES + "/" + id);
        };

        _this.cancelFormClick = function () {
            _this.props.matchStore.match = {};
            _this.props.history.push(_Constant.APP_URL_MATCHES);
        };

        _this.matchGrid_onDataUpdate = function () {
            _this.props.matchStore.fetchList();
            if (_this.props.match.params.id) {
                _this.props.matchStore.fetch(_this.props.match.params.id);
            }
        };

        return _this;
    }

    (0, _createClass3['default'])(Match, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.matchStore.fetchList();
                if (this.props.match.params.id) {
                    this.props.matchStore.fetch(this.props.match.params.id);
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                // console.log(nextProps.match.params.id, this.props.match.params.id)
                if (nextProps.match.params.id !== this.props.match.params.id) {
                    this.props.matchStore.fetch(nextProps.match.params.id);
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var _props$matchStore = this.props.matchStore,
                    matchList = _props$matchStore.matchList,
                    match = _props$matchStore.match;

                // console.log(matchList)

                return _react2['default'].createElement(
                    'div',
                    { className: 'page1200 mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-futbol-o' }),
                        ' Match'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2['default'].createElement(_MatchGrid2['default'], { entriesList: matchList, editItem: this.editItem, onDataUpdate: this.matchGrid_onDataUpdate })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-6' },
                            !match.is_declared && !match.is_abandoned ? _react2['default'].createElement(
                                'div',
                                null,
                                _react2['default'].createElement(_MatchForm2['default'], { ref: 'memberForm',
                                    item: match,
                                    onSubmit: this.onFormSubmit, cancelFormClick: function () {
                                        function cancelFormClick() {
                                            return _this2.cancelFormClick();
                                        }

                                        return cancelFormClick;
                                    }() }),
                                _react2['default'].createElement('hr', null)
                            ) : '',
                            _react2['default'].createElement(
                                'div',
                                { className: 'row' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'col-md-12' },
                                    match._id ? _react2['default'].createElement(_MatchTeam2['default'], { match: match, matchId: match._id }) : ''
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return Match;
}(_react.Component)) || _class) || _class);
exports['default'] = Match;
module.exports = exports['default'];

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _mobxReact = __webpack_require__(13);

var _MatchTeamHelper = __webpack_require__(72);

var _MatchTeamHelper2 = _interopRequireDefault(_MatchTeamHelper);

var _ComboBoxTeam = __webpack_require__(181);

var _ComboBoxTeam2 = _interopRequireDefault(_ComboBoxTeam);

var _MatchTeamGrid = __webpack_require__(381);

var _MatchTeamGrid2 = _interopRequireDefault(_MatchTeamGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchTeam = (_dec = (0, _mobxReact.inject)('matchTeamStore'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3['default'])(MatchTeam, _Component);

    function MatchTeam(props, context) {
        (0, _classCallCheck3['default'])(this, MatchTeam);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchTeam.__proto__ || (0, _getPrototypeOf2['default'])(MatchTeam)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();

            if (!_this.props.matchId) {
                toastr.error('Please Select Match first.');
                return false;
            }

            var team_id = _this.refs.comboTeam.refs.idInput.value;

            if (!team_id) {
                toastr.error('Please Select Team first.');
                return false;
            }

            _MatchTeamHelper2['default'].store({
                team_id: team_id,
                match_id: _this.props.matchId
            }).then(function (res) {
                _this.props.matchTeamStore.fetchList(_this.props.matchId);
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });
            return false;
        };

        _this.matchTeamGrid_onDataUpdate = function () {
            _this.props.matchTeamStore.fetchList(_this.props.matchId);
        };

        return _this;
    }

    (0, _createClass3['default'])(MatchTeam, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.matchTeamStore.fetchList(this.props.matchId);
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                if (nextProps.matchId !== this.props.matchId) {
                    this.props.matchTeamStore.fetchList(nextProps.matchId);
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _props$matchTeamStore = this.props.matchTeamStore,
                    matchTeamList = _props$matchTeamStore.matchTeamList,
                    matchTeam = _props$matchTeamStore.matchTeam;
                // console.log(matchTeamList)

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-users' }),
                        ' Match Teams'
                    ),
                    this.props.match && !this.props.match.is_declared && !this.props.match.is_abandoned ? _react2['default'].createElement(
                        'form',
                        { ref: 'form', className: 'mb-1', onSubmit: function () {
                                function onSubmit(e) {
                                    return e.preventDefault();
                                }

                                return onSubmit;
                            }() },
                        _react2['default'].createElement(
                            'div',
                            { className: 'row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-md-2' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'input-group' },
                                    _react2['default'].createElement(_ComboBoxTeam2['default'], { ref: 'comboTeam', field_id: 'match_id' }),
                                    _react2['default'].createElement(
                                        'span',
                                        { className: 'input-group-btn' },
                                        _react2['default'].createElement(
                                            'button',
                                            { className: 'btn btn-primary btn-sm ml-1', type: 'button', onClick: this.onSubmit },
                                            _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                            ' Add'
                                        )
                                    )
                                )
                            )
                        )
                    ) : '',
                    _react2['default'].createElement(_MatchTeamGrid2['default'], { entriesList: matchTeamList, onDataUpdate: this.matchTeamGrid_onDataUpdate })
                );
            }

            return render;
        }()
    }]);
    return MatchTeam;
}(_react.Component), _class2.defaultProps = {
    match: {},
    matchId: null,
    is_declared: null
}, _temp)) || _class) || _class);
exports['default'] = MatchTeam;
module.exports = exports['default'];

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MatchTeamHelper = __webpack_require__(72);

var _MatchTeamHelper2 = _interopRequireDefault(_MatchTeamHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchTeamGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MatchTeamGrid, _Component);

    function MatchTeamGrid(props) {
        (0, _classCallCheck3['default'])(this, MatchTeamGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (MatchTeamGrid.__proto__ || (0, _getPrototypeOf2['default'])(MatchTeamGrid)).call(this, props));
    }

    (0, _createClass3['default'])(MatchTeamGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                this.source = {
                    datatype: 'json',
                    datafields: [{ name: '_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'updated_at', type: 'date' }, { name: 'team_id', type: 'string' }, { name: 'team_name', type: 'string' }, { name: 'match_id', type: 'string' }, { name: 'is_declared', type: 'boolean' }, { name: 'status', type: 'string' }],

                    id: '_id',
                    // url: URL_MATCHES,
                    localdata: this.props.entriesList.slice()

                    // updaterow: (rowid, rowdata, commit) => {
                    //     MatchTeamHelper.update(rowdata.uid, {
                    //         match_name: rowdata.match_name
                    //     })
                    //     commit(true);
                    // },
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _MatchTeamHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Team', datafield: 'team_name', width: 150 }, { text: 'Status', datafield: 'status', width: 100 }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox' }, { text: 'Created', datafield: 'created_at', width: 120, cellsformat: 'dd/MM/yyyy' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 350,
                        pageable: false, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: false, showfilterrow: false })
                );
            }

            return render;
        }()
    }]);
    return MatchTeamGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = MatchTeamGrid;
module.exports = exports['default'];

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBoxMatchType = __webpack_require__(383);

var _ComboBoxMatchType2 = _interopRequireDefault(_ComboBoxMatchType);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _ComboBoxLocal = __webpack_require__(57);

var _ComboBoxLocal2 = _interopRequireDefault(_ComboBoxLocal);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchForm = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MatchForm, _Component);

    function MatchForm(props) {
        (0, _classCallCheck3['default'])(this, MatchForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchForm.__proto__ || (0, _getPrototypeOf2['default'])(MatchForm)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (!$(_this.refs.form).valid()) {
                return false;
            }

            var data = jQuery(_this.refs.form).serialize();

            var match_type = _this.refs.combo.getSelectedValue();
            if (!match_type) {
                toastr.error("Please Select Match Type");
                return;
            }

            _MatchHelper2['default'].save(data, _this.props.item._id).then(function (res) {
                console.log(res);
                _this.props.onSubmit();
            })['catch'](function (error) {
                toastr.error(err.response.data.message);
            });
            return false;
        };

        _this.defaultItem = {
            _id: null,
            match_name: null,
            match_type: "One Day"
        };
        return _this;
    }

    (0, _createClass3['default'])(MatchForm, [{
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var item = (0, _assign2['default'])({}, this.defaultItem, this.props.item || {});
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'form',
                        { className: '', ref: 'form', key: 'form_' + String(item._id) },
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row align-items-center' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Name'
                                ),
                                _react2['default'].createElement('input', { type: 'text', className: 'form-control form-control-sm required error-hide',
                                    name: 'match_name', defaultValue: item.match_name })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Match Type'
                                ),
                                _react2['default'].createElement(_ComboBoxLocal2['default'], { ref: 'combo', width: "100", field_id: 'match_type', valueMember: 'id',
                                    displayMember: 'text', data: _Constant.LIST_MATCH_TYPE, selectedValue: item.match_type })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-primary btn-sm', type: 'submit', onClick: this.onSubmit },
                                        _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                        ' Save'
                                    ),
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-danger btn-sm ml-1', type: 'button', onClick: function () {
                                                function onClick() {
                                                    return _this2.props.cancelFormClick();
                                                }

                                                return onClick;
                                            }() },
                                        _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                        ' Cancel'
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchForm;
}(_react.Component), _class.defaultProps = {
    onSubmit: function () {
        function onSubmit() {}

        return onSubmit;
    }(),
    cancelFormClick: function () {
        function cancelFormClick() {}

        return cancelFormClick;
    }(),
    item: {}
}, _temp);
exports['default'] = MatchForm;
module.exports = exports['default'];

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(80);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class$defaultProps;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBox2 = __webpack_require__(82);

var _ComboBox3 = _interopRequireDefault(_ComboBox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBoxMatchType = (_temp = _class = function (_ComboBox) {
  (0, _inherits3['default'])(ComboBoxMatchType, _ComboBox);

  function ComboBoxMatchType(props) {
    (0, _classCallCheck3['default'])(this, ComboBoxMatchType);
    return (0, _possibleConstructorReturn3['default'])(this, (ComboBoxMatchType.__proto__ || (0, _getPrototypeOf2['default'])(ComboBoxMatchType)).call(this, props));
  }

  return ComboBoxMatchType;
}(_ComboBox3['default']), _class.defaultProps = (_class$defaultProps = {
  field_name: '',
  field_id: '',
  width: 225,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onSelect: function () {
    function onSelect() {}

    return onSelect;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  selectedValue: null
}, (0, _defineProperty3['default'])(_class$defaultProps, 'width', 225), (0, _defineProperty3['default'])(_class$defaultProps, 'url', '/match_types'), (0, _defineProperty3['default'])(_class$defaultProps, 'valueMember', 'match_type_val'), (0, _defineProperty3['default'])(_class$defaultProps, 'displayMember', 'match_type_name'), _class$defaultProps), _temp);
exports['default'] = ComboBoxMatchType;
module.exports = exports['default'];

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MatchGrid, _Component);

    function MatchGrid(props) {
        (0, _classCallCheck3['default'])(this, MatchGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (MatchGrid.__proto__ || (0, _getPrototypeOf2['default'])(MatchGrid)).call(this, props));
    }

    (0, _createClass3['default'])(MatchGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                this.source = {
                    datatype: 'json',
                    datafields: [{ name: '_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'match_name', type: 'string' }, { name: 'match_type', type: 'string' }, { name: 'is_declared', type: 'boolean' }, { name: 'is_abandoned', type: 'boolean' }, { name: 'team_name', type: 'string' }],

                    id: '_id',
                    // url: URL_MATCHES,
                    localdata: this.props.entriesList.slice()

                    // updaterow: (rowid, rowdata, commit) => {
                    //     MatchHelper.update(rowdata.uid, {
                    //         match_name: rowdata.match_name
                    //     })
                    //     commit(true);
                    // },
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    exportable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            if (data.is_declared && data.is_abandoned) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _MatchHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, {
                    text: 'Edit',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    exportable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            _this2.props.editItem(dataRecord.uid);
                            // console.log(dataRecord.uid)
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Name', datafield: 'match_name', width: 150 }, { text: 'Match Type', datafield: 'match_type', width: 100 }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox' }, { text: 'Is Abandoned', datafield: 'is_abandoned', width: 100, columntype: 'checkbox' }, { text: 'Winner', datafield: 'team_name', width: 100 }, { text: 'Dated', datafield: 'created_at', width: 100, cellsformat: 'dd/MM/yyyy' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 500,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: false, showfilterrow: false })
                );
            }

            return render;
        }()
    }]);
    return MatchGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = MatchGrid;
module.exports = exports['default'];

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchEntries = function (_React$Component) {
    (0, _inherits3['default'])(MatchEntries, _React$Component);

    function MatchEntries() {
        (0, _classCallCheck3['default'])(this, MatchEntries);
        return (0, _possibleConstructorReturn3['default'])(this, (MatchEntries.__proto__ || (0, _getPrototypeOf2['default'])(MatchEntries)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MatchEntries, [{
        key: 'render',
        value: function () {
            function render() {
                var _this3 = this;

                var _this = this;
                var source = {
                    datatype: 'json',
                    datafields: [{ name: '_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'match_name', type: 'string' }, { name: 'match_type', type: 'string' }, { name: 'is_declared', type: 'boolean' }, { name: 'team_name', type: 'string' }],

                    id: '_id',
                    url: _Constant.URL_MATCHES,

                    updaterow: function () {
                        function updaterow(rowid, rowdata, commit) {
                            MatchHelper.update(rowdata.uid, {
                                match_name: rowdata.match_name
                            });
                            commit(true);
                        }

                        return updaterow;
                    }()
                };

                var dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [
                // {
                //     text: 'Select',
                //     datafield: 'Select',
                //     columntype: 'button',
                //     width: 50,
                //     filterable: false,
                //     cellsrenderer: () => {
                //         return 'Select';
                //     },
                //     buttonclick: (row) => {
                //         let dataRecord = this.refs.jqxgrid.getrowdata(row);
                //         _this.props.history.push(URL_MATCH_ENTRIES_MATCH + "/" + dataRecord.uid)
                //     }
                // },

                {
                    text: '',
                    datafield: 'Select1',
                    columntype: 'button',
                    width: 100,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Enter Match';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this3.refs.jqxgrid.getrowdata(row);
                            _this.props.history.push(_Constant.APP_URL_MDI_MATCH + "/" + dataRecord.uid);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Match Id', datafield: '_id', width: 100 }, { text: 'Name', datafield: 'match_name', width: 150 }, { text: 'Match Type', datafield: 'match_type', width: 100 }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox', filtertype: "boolean" }, { text: 'Winner', datafield: 'team_name', width: 100 }, { text: 'Dated', datafield: 'created_at', width: 100, cellsformat: 'dd/MM/yyyy' }];
                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-futbol-o' }),
                        ' Select Match'
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', source: dataAdapter, columns: columns,
                        width: "750", height: 500,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: true, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return MatchEntries;
}(_react2['default'].Component); /*
                                   This page will show all the matches which is not declared yet so user can enter to particular match to add entries
                                 */


exports['default'] = MatchEntries;
module.exports = exports['default'];

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBoxMatchTeam = __webpack_require__(387);

var _ComboBoxMatchTeam2 = _interopRequireDefault(_ComboBoxMatchTeam);

var _ComboBoxTeam = __webpack_require__(181);

var _ComboBoxTeam2 = _interopRequireDefault(_ComboBoxTeam);

var _ComboBoxMember = __webpack_require__(58);

var _ComboBoxMember2 = _interopRequireDefault(_ComboBoxMember);

var _InputDecimal = __webpack_require__(56);

var _InputDecimal2 = _interopRequireDefault(_InputDecimal);

var _MatchEntryHelper = __webpack_require__(183);

var _MatchEntryHelper2 = _interopRequireDefault(_MatchEntryHelper);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

var _Constant = __webpack_require__(10);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchEntryForm = (_temp = _class = function (_React$Component) {
    (0, _inherits3['default'])(MatchEntryForm, _React$Component);

    function MatchEntryForm(props) {
        (0, _classCallCheck3['default'])(this, MatchEntryForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchEntryForm.__proto__ || (0, _getPrototypeOf2['default'])(MatchEntryForm)).call(this, props));

        _this.resetForm = function () {
            // console.log(this.state)
            _this.setState({
                isNew: false,
                item: {}
            });
        };

        _this.formSubmit = function (e) {
            e.preventDefault();

            var book_no = _this.props.getBookNo();
            // console.log("book_no", book_no)

            // return false;

            if (!_this.props.matchId) {
                toastr.error("Please Select Match First.");
            }

            var data = jQuery(_this.refs.form).serialize();
            var dataJson = URI.parseQuery(data);
            dataJson.book_no = book_no;

            _MatchEntryHelper2['default'].save(dataJson, _this.state.item._id).then(function (response) {
                // If in Edit Mode then clear form after submit
                if (_this.state.item._id) {
                    _this.resetForm();
                }

                _this.props.onFormSubmitted(response);
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });

            return false;
        };

        _this.state = {
            match: {},
            matchId: _this.props.matchId,
            isNew: true,
            item: {
                _id: null,
                account_id: null,
                match_team_id: null,
                rate: 0,
                amount: 0,
                lk: "L"
            },
            teamsList: []

        };
        return _this;
    }

    (0, _createClass3['default'])(MatchEntryForm, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.mtrap = _GlobalHelper2['default'].mounstrapFormInit(this.refs.form);
            }

            return componentDidMount;
        }()
    }, {
        key: 'edit',
        value: function () {
            function edit(rowdata) {
                this.setState({
                    isNew: false,
                    item: rowdata
                });
            }

            return edit;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = this.state.item;

                var comm_yn = this.props.match.match_type == "Cup" ? false : true;
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'form',
                        { ref: 'form' },
                        _react2['default'].createElement('input', { type: 'hidden', defaultValue: this.props.matchId, name: 'match_id' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row align-items-center' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'S.N.'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { className: 'form-control form-control-sm w-50p error-hide required number idinput-match', type: 'number', readOnly: true, key: item._id, defaultValue: item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'Rate'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm w-100p error-hide required number', name: 'rate', value: item.rate })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'Amount'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm w-100p error-hide required number', name: 'amount', value: item.amount })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'L/K'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_CSelect2['default'], { className: 'form-control form-control-sm w-50p', name: 'lk', value: item.lk, items: _Constant.LIST_MATCH_LK })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'Team'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxMatchTeam2['default'], { width: 150, height: 35, selectedValue: item.match_team_id, key: this.state.item._id, data: this.props.teamsList.slice() })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    'Party'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxMember2['default'], { width: 150, field_id: 'account_id', selectedValue: item.account_id, key: this.state.item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'btn-group', role: 'group', 'aria-label': 'Button group with nested dropdown' },
                                        _react2['default'].createElement(
                                            'button',
                                            { className: 'btn btn-primary btn-sm', type: 'button', onClick: this.formSubmit },
                                            _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                            ' Save'
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-danger btn-sm', type: 'button', onClick: this.resetForm },
                                        _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                        ' Cancel'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'form-check-label' },
                                        _react2['default'].createElement('input', { type: 'hidden', value: 'false', name: 'comm_yn' }),
                                        _react2['default'].createElement('input', { className: 'form-check-input', type: 'checkbox', name: 'comm_yn', value: comm_yn, defaultChecked: comm_yn }),
                                        ' Add Commission'
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchEntryForm;
}(_react2['default'].Component), _class.defaultProps = {
    matchId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    getBookNo: function () {
        function getBookNo() {}

        return getBookNo;
    }()
}, _temp);
exports['default'] = MatchEntryForm;
module.exports = exports['default'];

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxcombobox = __webpack_require__(81);

var _react_jqxcombobox2 = _interopRequireDefault(_react_jqxcombobox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ComboBoxMatchTeam = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComboBoxMatchTeam, _Component);

    function ComboBoxMatchTeam() {
        (0, _classCallCheck3['default'])(this, ComboBoxMatchTeam);
        return (0, _possibleConstructorReturn3['default'])(this, (ComboBoxMatchTeam.__proto__ || (0, _getPrototypeOf2['default'])(ComboBoxMatchTeam)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ComboBoxMatchTeam, [{
        key: 'componentWillUnmount',
        value: function () {
            function componentWillUnmount() {
                // it was giving error on route change it was still calling the change method for eg. Journal Page select account and then change route
                this.refs.Combo.off('change');
            }

            return componentWillUnmount;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.init();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.dataAdapter.dataBind();
                this.init();

                if (this.props.selectedValue) {
                    this.setSelectedValue(this.props.selectedValue);
                }
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'init',
        value: function () {
            function init() {
                var _this2 = this;

                this.refs.Combo.on('change', function (e) {
                    var item = _this2.getSelectedItem();
                    // console.log(item)
                    if (item) {
                        _this2.refs.nameInput.value = item.label;
                        _this2.refs.idInput.value = item.value;
                        _this2.refs.teamIdInput.value = item.originalItem.team_id;
                    } else {
                        _this2.refs.nameInput.value = null;
                        _this2.refs.idInput.value = null;
                        _this2.refs.teamIdInput.value = null;
                    }
                    _this2.props.onChange(e);
                });

                this.refs.Combo.on('select', function (e) {
                    _this2.props.onSelect(e);
                });

                this.refs.Combo.on('close', function (e) {
                    _this2.props.onClose(e);
                });

                if (this.props.selectedValue) {
                    this.setSelectedValue(this.props.selectedValue);
                }
            }

            return init;
        }()
    }, {
        key: 'getSelectedValue',
        value: function () {
            function getSelectedValue() {
                var item = this.refs.Combo.getSelectedItem();
                if (item) return item.value;
                return null;
            }

            return getSelectedValue;
        }()
    }, {
        key: 'getSelectedItem',
        value: function () {
            function getSelectedItem() {
                var item = this.refs.Combo.getSelectedItem();
                if (item) return item;
                return null;
            }

            return getSelectedItem;
        }()
    }, {
        key: 'setSelectedValue',
        value: function () {
            function setSelectedValue(val) {
                this.refs.Combo.selectItem(val);
            }

            return setSelectedValue;
        }()

        // buttonClick() {
        //     console.log(this.refs.JqxComboBox.getSelectedItem().value)
        // }

    }, {
        key: 'render',
        value: function () {
            function render() {
                var source = {
                    datatype: 'json',
                    datafields: [{ name: "_id" }, { name: "team_id" }, { name: "team_name" }],
                    localdata: this.props.data
                    // url: this.props.url,
                    // async: false
                };
                this.dataAdapter = new $.jqx.dataAdapter(source, { async: false });

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement('input', { type: 'hidden', ref: 'nameInput', name: this.props.field_name }),
                    _react2['default'].createElement('input', { type: 'hidden', ref: 'idInput', name: this.props.field_id }),
                    _react2['default'].createElement('input', { type: 'hidden', ref: 'teamIdInput', name: this.props.field_team_id }),
                    _react2['default'].createElement(_react_jqxcombobox2['default'], { ref: 'Combo', key: Math.random(),
                        width: this.props.width, height: 22, selectedIndex: -1, source: this.dataAdapter,
                        displayMember: this.props.displayMember, valueMember: this.props.valueMember
                    })
                );
            }

            return render;
        }()
    }]);
    return ComboBoxMatchTeam;
}(_react.Component), _class.defaultProps = {
    field_name: '',
    field_id: 'match_team_id',
    field_team_id: 'team_id',
    width: 175,
    valueMember: '_id',
    displayMember: 'team_name',
    data: {},
    onChange: function () {
        function onChange() {}

        return onChange;
    }(),
    onSelect: function () {
        function onSelect() {}

        return onSelect;
    }(),
    onClose: function () {
        function onClose() {}

        return onClose;
    }(),
    selectedValue: null
}, _temp);
exports['default'] = ComboBoxMatchTeam;
module.exports = exports['default'];

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MatchEntryHelper = __webpack_require__(183);

var _MatchEntryHelper2 = _interopRequireDefault(_MatchEntryHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchEntryGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MatchEntryGrid, _Component);

    function MatchEntryGrid(props) {
        (0, _classCallCheck3['default'])(this, MatchEntryGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchEntryGrid.__proto__ || (0, _getPrototypeOf2['default'])(MatchEntryGrid)).call(this, props));

        _this.refresh = function () {
            // this.refs.jqxgrid.updatebounddata();
            _this.dataAdapter.dataBind();
        };

        return _this;
    }

    (0, _createClass3['default'])(MatchEntryGrid, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log("componnetDidUpdate")
                // this.refs.jqxgrid.updatebounddata();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                var teamsList = this.props.teamsList;
                var datafields = [{ name: '_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'rate', type: 'string' }, { name: 'amount', type: 'string' }, { name: 'lk', type: 'string' }, { name: 'team_name', type: 'string' }, { name: 'team_id', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'match_id', type: 'string' }, { name: 'match_team_id', type: 'number' }, { name: 'amounts', type: 'string' }, { name: 'comm_yn', type: 'boolean' }, { name: 'is_summarized', type: 'boolean' }, { name: 'created_at', type: 'date' }];

                if (teamsList.length > 0) {
                    teamsList.map(function (item, i) {
                        datafields.push({
                            name: item.team_name
                        });
                    });
                }

                var source = {
                    datatype: 'json',
                    id: '_id',
                    localdata: this.props.entriesList.slice(),
                    // url: URL_MATCH_ENTRIES + '?match_id=' + this.props.matchId
                    datafields: datafields
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{
                    text: '',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_summarized) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord.uid)
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _MatchEntryHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, {
                    text: '',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_summarized) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer(row, column, value) {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord)
                            _this2.props.onEditButtonClick(dataRecord);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Party', datafield: 'account_name', width: 150 }, { text: 'Rate', datafield: 'rate', width: 100 }, { text: 'Amount', datafield: 'amount', width: 100 }, { text: 'L/K', datafield: 'lk', width: 50 }, { text: 'Team', datafield: 'team_name', width: 100 }];

                teamsList.map(function (item, i) {
                    columns.push({
                        text: item.team_name,
                        datafield: item.team_name,
                        width: 100
                    });
                });

                columns.push({ text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Is Summarized', datafield: 'is_summarized', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' });

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(),
                        ref: 'jqxgrid',
                        width: "100%", height: 400, source: this.dataAdapter, pageable: false,
                        sortable: true, altrows: false, enabletooltips: false,
                        editable: false, columns: columns,
                        filterable: true, showfilterrow: true
                    })
                );
            }

            return render;
        }()
    }]);
    return MatchEntryGrid;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    teamsList: [],
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }()
}, _temp);
exports['default'] = MatchEntryGrid;
module.exports = exports['default'];

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MatchEntryTeamGrid = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(MatchEntryTeamGrid, _Component);

    function MatchEntryTeamGrid(props) {
        (0, _classCallCheck3["default"])(this, MatchEntryTeamGrid);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (MatchEntryTeamGrid.__proto__ || (0, _getPrototypeOf2["default"])(MatchEntryTeamGrid)).call(this, props));

        _this.renderItems = function () {
            if (_this.props.teamsWinLossList.length < 1) return null;

            var items = _this.props.teamsWinLossList;

            return items.map(function (item, i) {
                var amount = -1 * item.amount;
                var classname = amount > 0 ? "table-success" : "table-danger";
                return _react2["default"].createElement(
                    "tr",
                    { key: i, className: classname },
                    _react2["default"].createElement(
                        "td",
                        null,
                        item.team_name,
                        _react2["default"].createElement("span", { className: "ml-2", dangerouslySetInnerHTML: { __html: item.status == 'Winner' ? '<i class="fa fa-trophy" aria-hidden="true"></i>' : '' } })
                    ),
                    _react2["default"].createElement(
                        "td",
                        null,
                        amount
                    ),
                    _react2["default"].createElement(
                        "td",
                        null,
                        item.is_declared ? 'Y' : 'N'
                    )
                );
            });
        };

        return _this;
    }

    // renderItems = () => {
    //     if (this.props.teamsWinLossList.length < 1) return null;

    //     var item = this.props.teamsWinLossList[0]

    //     return Object.entries(item).map((key, i) => {
    //         if (key[0] == "_id") return null;

    //         var amount = -1 * key[1];
    //         var classname = amount > 0 ? "table-success" : "table-danger";
    //         return (
    //             <tr key={i} className={classname}>
    //                 <td>{key[0]}</td>
    //                 <td>{-1 * key[1]}</td>
    //             </tr>
    //         )
    //     });
    // }

    (0, _createClass3["default"])(MatchEntryTeamGrid, [{
        key: "render",
        value: function () {
            function render() {
                // console.log(this.props.teamsWinLossList)
                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "table",
                        { className: "table table-striped table-sm" },
                        _react2["default"].createElement(
                            "thead",
                            { className: "thead-inverse" },
                            _react2["default"].createElement(
                                "tr",
                                null,
                                _react2["default"].createElement(
                                    "th",
                                    null,
                                    "Team"
                                ),
                                _react2["default"].createElement(
                                    "th",
                                    null,
                                    "Amount"
                                ),
                                _react2["default"].createElement(
                                    "th",
                                    null,
                                    "Declared"
                                )
                            )
                        ),
                        _react2["default"].createElement(
                            "tbody",
                            null,
                            this.renderItems()
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchEntryTeamGrid;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    teamsWinLossList: [] }, _temp);
exports["default"] = MatchEntryTeamGrid;
module.exports = exports["default"];

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import MatchTeamHelper from '../../helpers/MatchTeamHelper'

var MatchEntryAvgBlock = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(MatchEntryAvgBlock, _Component);

    function MatchEntryAvgBlock(props) {
        (0, _classCallCheck3["default"])(this, MatchEntryAvgBlock);

        // this.state = {
        //     matchId: this.props.matchId,
        //     matchTeams: []
        // }
        var _this = (0, _possibleConstructorReturn3["default"])(this, (MatchEntryAvgBlock.__proto__ || (0, _getPrototypeOf2["default"])(MatchEntryAvgBlock)).call(this, props));

        _this.refresh = function () {};

        return _this;
    }

    (0, _createClass3["default"])(MatchEntryAvgBlock, [{
        key: "componentDidMount",
        value: function () {
            function componentDidMount() {
                // var _this = this;
                // console.log("PROPS", this.props.matchId)
                // MatchTeamHelper.index({
                //     // match_id: this.props.matchId
                //     match_id: this.props.matchId
                // }).then((res) => {
                //     console.log("MATCH TEAMS" , res)
                //     _this.setState({
                //         matchTeams: res.data
                //     })
                // })
            }

            return componentDidMount;
        }()
    }, {
        key: "componentDidUpdate",
        value: function () {
            function componentDidUpdate() {
                // console.log("PROPS", this.props.matchId)
            }

            return componentDidUpdate;
        }()
    }, {
        key: "render",
        value: function () {
            function render() {
                // var _this = this;
                // if (this.state.matchTeams.count > 0) {
                //     return null;
                // }

                var avgl = 0;
                var avgk = 0;

                // const matchTeams = this.state.matchTeams;
                // if (matchTeams.length >= 2) {
                //     var t1_bidamt = matchTeams[0].total_bid_amt
                //     var t2_bidamt = matchTeams[1].total_bid_amt
                //     avgl = (t1_bidamt / t2_bidamt).toFixed(2)
                //     avgk = (t2_bidamt / t1_bidamt).toFixed(2)
                // }

                var matchTeams = this.props.teamsWinLossList;
                var t1_bidamt = matchTeams[0] ? Math.abs(matchTeams[0].amount) : 0;
                var t2_bidamt = matchTeams[1] ? Math.abs(matchTeams[1].amount) : 0;
                if (t1_bidamt > 0 && t2_bidamt > 0) {
                    avgl = (t1_bidamt / t2_bidamt).toFixed(2);
                    avgk = (t2_bidamt / t1_bidamt).toFixed(2);
                }

                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "table",
                        { className: "table table-striped table-sm" },
                        _react2["default"].createElement(
                            "thead",
                            { className: "thead-inverse" },
                            _react2["default"].createElement(
                                "tr",
                                null,
                                _react2["default"].createElement(
                                    "th",
                                    null,
                                    "Avg. L"
                                ),
                                _react2["default"].createElement(
                                    "th",
                                    null,
                                    "Avg. K"
                                )
                            )
                        ),
                        _react2["default"].createElement(
                            "tbody",
                            null,
                            _react2["default"].createElement(
                                "tr",
                                null,
                                _react2["default"].createElement(
                                    "td",
                                    null,
                                    avgl
                                ),
                                _react2["default"].createElement(
                                    "td",
                                    null,
                                    avgk
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchEntryAvgBlock;
}(_react.Component), _class.defaultProps = {
    // matchId: null,
    // matchTeams: []
    teamsWinLossList: []
}, _temp);
exports["default"] = MatchEntryAvgBlock;
module.exports = exports["default"];

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

// import JqxDropDownList from '../jqwidgets-react/react_jqxdropdownlist.js';


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import MatchEntryHelper from '../../helpers/MatchEntryHelper'


var MatchEntryBookDdl = (_temp = _class = function (_Component) {
  (0, _inherits3["default"])(MatchEntryBookDdl, _Component);

  function MatchEntryBookDdl(props) {
    (0, _classCallCheck3["default"])(this, MatchEntryBookDdl);
    return (0, _possibleConstructorReturn3["default"])(this, (MatchEntryBookDdl.__proto__ || (0, _getPrototypeOf2["default"])(MatchEntryBookDdl)).call(this, props));
    // this.state = {
    //     matchId: this.props.matchId,
    //     count: 1,
    //     // scount: this.props.scount
    // }
  }

  (0, _createClass3["default"])(MatchEntryBookDdl, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        // this.sendAjax()
      }

      return componentDidMount;
    }()
  }, {
    key: "getSelectedValue",
    value: function () {
      function getSelectedValue() {
        return this.refs.dropdown.getSelectedValue();
      }

      return getSelectedValue;
    }()

    // sendAjax = () => {
    //     MatchEntryHelper.count_book(this.props.matchId).then((res) => {
    //         console.log(res)
    //         this.setState({
    //             count: res.data.count,
    //         })
    //     })
    // }

  }, {
    key: "componentWillUpdate",
    value: function () {
      function componentWillUpdate(nextProps, nextState) {
        // console.log('Component WILL UPDATE!');
        // console.log(this.props.scount, nextProps.scount);
        // if(this.props.scount!==nextProps.scount) {
        //   this.sendAjax()
        // }
      }

      return componentWillUpdate;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var source = [];
        for (var i = 0; i < this.props.bookNoList.length + 1; i++) {
          source.push({
            id: i + 1,
            text: i + 1
          });
        };
        // console.log(source)
        // console.log("count" , this.state.count)
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "table",
            { className: "table table-striped table-sm" },
            _react2["default"].createElement(
              "thead",
              { className: "thead-inverse" },
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "th",
                  null,
                  "Book No"
                )
              )
            ),
            _react2["default"].createElement(
              "tbody",
              null,
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    _CSelect2["default"],
                    { ref: "dropdown", className: "form-control form-control-sm", items: source, onChange: this.props.onChange },
                    " "
                  )
                )
              )
            )
          )
        );
      }

      return render;
    }()
  }]);
  return MatchEntryBookDdl;
}(_react.Component), _class.defaultProps = {
  // scount: 0,
  // matchId: null,
  bookNoList: [],
  onChange: function () {
    function onChange(id) {}

    return onChange;
  }()
}, _temp);
exports["default"] = MatchEntryBookDdl;
module.exports = exports["default"];

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react_jqxwindow = __webpack_require__(83);

var _react_jqxwindow2 = _interopRequireDefault(_react_jqxwindow);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MatchDeclare = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MatchDeclare, _Component);

    function MatchDeclare(props) {
        (0, _classCallCheck3['default'])(this, MatchDeclare);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MatchDeclare.__proto__ || (0, _getPrototypeOf2['default'])(MatchDeclare)).call(this, props));

        _this.setWinner = function (matchTeamId) {
            axios({
                method: 'post',
                headers: Auth.header(),
                url: _Constant.URL_MATCH_TEAMS_SET_WINNER,
                data: {
                    match_team_id: matchTeamId
                }
            }).then(function (res) {
                // console.log(res)
                _this.refs.jqxWindow.close();
                _this.props.onChange();
            });
        };

        _this.setLoser = function (matchTeamId) {
            axios({
                method: 'post',
                headers: Auth.header(),
                url: _Constant.URL_MATCH_TEAMS_SET_LOSER,
                data: {
                    match_team_id: matchTeamId
                }
            }).then(function (res) {
                // console.log(res)
                _this.refs.jqxWindow.close();
                _this.props.onChange();
            });
        };

        _this.unsetLoser = function (matchTeamId) {
            axios({
                method: 'post',
                headers: Auth.header(),
                url: _Constant.URL_MATCH_TEAMS_SET_UNSET_LOSER,
                data: {
                    match_team_id: matchTeamId
                }
            }).then(function (res) {
                // console.log(res)
                _this.refs.jqxWindow.close();
                _this.props.onChange();
            });
        };

        _this.renderItems = function () {
            var items = _this.props.teamList;
            if (items.length == 0) return null;
            return items.map(function (item, i) {
                var classname_winner = item.status == "Winner" ? " table-success" : "";
                var classname_loser = item.status == "Loser" ? " table-danger" : "";
                return _react2['default'].createElement(
                    'tr',
                    { key: i, className: classname_loser + classname_winner },
                    _react2['default'].createElement(
                        'td',
                        null,
                        item.team_name
                    ),
                    _react2['default'].createElement(
                        'td',
                        null,
                        item.is_declared
                    ),
                    _react2['default'].createElement(
                        'td',
                        null,
                        item.status
                    ),
                    _react2['default'].createElement(
                        'td',
                        null,
                        item.status == null ? _react2['default'].createElement(
                            'button',
                            { onClick: function () {
                                    function onClick() {
                                        return _this.setWinner(item._id);
                                    }

                                    return onClick;
                                }() },
                            'Winner'
                        ) : "",
                        item.status == null ? _react2['default'].createElement(
                            'button',
                            { onClick: function () {
                                    function onClick() {
                                        return _this.setLoser(item._id);
                                    }

                                    return onClick;
                                }() },
                            'Loser'
                        ) : "",
                        item.status !== null && item.status !== "Winner" ? _react2['default'].createElement(
                            'button',
                            { onClick: function () {
                                    function onClick() {
                                        return _this.unsetLoser(item._id);
                                    }

                                    return onClick;
                                }() },
                            'Undeclare'
                        ) : ""
                    )
                );
            });
        };

        return _this;
    }

    (0, _createClass3['default'])(MatchDeclare, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2);
                this.refs.jqxWindow.on('close', function (event) {
                    _reactDom2['default'].unmountComponentAtNode(_reactDom2['default'].findDOMNode(_this2).parentNode);
                });
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {}

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.props.teamList.slice())
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        _react_jqxwindow2['default'],
                        { ref: 'jqxWindow', autoOpen: true,
                            width: 400, height: 250, position: { x: "50%", y: 175, left: "-250px" },
                            minWidth: 200, minHeight: 200, maxWidth: 700,
                            maxHeight: 400, showCollapseButton: false
                        },
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'span',
                                null,
                                'Match Declaration'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'table',
                                { className: 'table table-striped table-sm' },
                                _react2['default'].createElement(
                                    'thead',
                                    { className: 'thead-inverse' },
                                    _react2['default'].createElement(
                                        'tr',
                                        null,
                                        _react2['default'].createElement(
                                            'th',
                                            null,
                                            'Team'
                                        ),
                                        _react2['default'].createElement(
                                            'th',
                                            null,
                                            'Is Declared'
                                        ),
                                        _react2['default'].createElement(
                                            'th',
                                            null,
                                            'Status'
                                        ),
                                        _react2['default'].createElement('th', null)
                                    )
                                ),
                                _react2['default'].createElement(
                                    'tbody',
                                    null,
                                    this.renderItems()
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MatchDeclare;
}(_react.Component), _class.defaultProps = {
    // matchId: null,
    onChange: function () {
        function onChange() {}

        return onChange;
    }(),
    teamList: []
}, _temp);
exports['default'] = MatchDeclare;
module.exports = exports['default'];

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _MatchInfoBlock = __webpack_require__(394);

var _MatchInfoBlock2 = _interopRequireDefault(_MatchInfoBlock);

var _MatchEntry = __webpack_require__(182);

var _MatchEntry2 = _interopRequireDefault(_MatchEntry);

var _SessionEntry = __webpack_require__(395);

var _SessionEntry2 = _interopRequireDefault(_SessionEntry);

var _MeterEntry = __webpack_require__(400);

var _MeterEntry2 = _interopRequireDefault(_MeterEntry);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MdiMatch = (_dec = (0, _mobxReact.inject)('matchStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
	(0, _inherits3["default"])(MdiMatch, _Component);

	function MdiMatch() {
		(0, _classCallCheck3["default"])(this, MdiMatch);
		return (0, _possibleConstructorReturn3["default"])(this, (MdiMatch.__proto__ || (0, _getPrototypeOf2["default"])(MdiMatch)).apply(this, arguments));
	}

	(0, _createClass3["default"])(MdiMatch, [{
		key: "componentWillMount",
		value: function () {
			function componentWillMount() {
				// console.log("Mounted")
				window.currentPage = "mdiMatchPage";
			}

			return componentWillMount;
		}()
	}, {
		key: "componentDidMount",
		value: function () {
			function componentDidMount() {
				window.$mdiTab = $(this.refs.mdiTab);

				var matchId = this.props.match.params.id;
				localStorage.setItem('matchId', matchId);
				this.props.matchStore.fetch(matchId);

				this.init();
			}

			return componentDidMount;
		}()
	}, {
		key: "componentDidUpdate",
		value: function () {
			function componentDidUpdate() {
				// GlobalHelper.mounstrapFormInit()
			}

			return componentDidUpdate;
		}()
	}, {
		key: "init",
		value: function () {
			function init() {
				var moustrapMdiPageClass = new Mousetrap();
				moustrapMdiPageClass.stopCallback = function (e, element, combo) {
					return false;
				};
				moustrapMdiPageClass.bind('ctrl+1', function (e) {
					// $('#mdi-tab li:eq(0) a').tab('show')
					$mdiTab.find('li:eq(0) a').tab('show');
				});

				moustrapMdiPageClass.bind('ctrl+2', function (e) {
					// $('#mdi-tab li:eq(1) a').tab('show')
					$mdiTab.find('li:eq(1) a').tab('show');
				});

				moustrapMdiPageClass.bind('ctrl+3', function (e) {
					// $('#mdi-tab li:eq(2) a').tab('show')
					$mdiTab.find('li:eq(2) a').tab('show');
				});

				$mdiTab.find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
					var href = jQuery(e.target).attr('href');
					// console.log(href)
					if (href == "#pills-match") {
						jQuery(".idinput-match").focus();
					}

					if (href == "#pills-session") {
						jQuery(".idinput-session").focus();
					}

					if (href == "#pills-meter") {
						jQuery(".idinput-meter").focus();
					}
				});
			}

			return init;
		}()
	}, {
		key: "render",
		value: function () {
			function render() {
				var matchId = this.props.match.params.id;
				var match = this.props.matchStore.match;


				return _react2["default"].createElement(
					"div",
					{ className: "mdiPage" },
					_react2["default"].createElement(
						"div",
						null,
						_react2["default"].createElement(_MatchInfoBlock2["default"], { item: match })
					),
					_react2["default"].createElement(
						"ul",
						{ className: "nav nav-pills mb-2", id: "mdi-tab", role: "tablist", ref: "mdiTab" },
						_react2["default"].createElement(
							"li",
							{ className: "nav-item" },
							_react2["default"].createElement(
								"a",
								{ className: "nav-link active", id: "pills-match-tab", "data-toggle": "tab", href: "#pills-match", role: "tab", "aria-controls": "pills-match", "aria-expanded": "true" },
								"Match  ",
								_react2["default"].createElement(
									"span",
									{ className: "badge badge-light" },
									"CTRL+1"
								)
							)
						),
						_react2["default"].createElement(
							"li",
							{ className: "nav-item" },
							_react2["default"].createElement(
								"a",
								{ className: "nav-link", id: "pills-session-tab", "data-toggle": "tab", href: "#pills-session", role: "tab", "aria-controls": "pills-session", "aria-expanded": "true" },
								"Session ",
								_react2["default"].createElement(
									"span",
									{ className: "badge badge-light" },
									"CTRL+2"
								)
							)
						),
						_react2["default"].createElement(
							"li",
							{ className: "nav-item" },
							_react2["default"].createElement(
								"a",
								{ className: "nav-link", id: "pills-meter-tab", "data-toggle": "tab", href: "#pills-meter", role: "tab", "aria-controls": "pills-meter", "aria-expanded": "true" },
								"Meter ",
								_react2["default"].createElement(
									"span",
									{ className: "badge badge-light" },
									"CTRL+3"
								)
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "tab-content", id: "pills-tabContent" },
						_react2["default"].createElement(
							"div",
							{ className: "tab-pane fade show active", id: "pills-match", role: "tabpanel", "aria-labelledby": "pills-match-tab" },
							_react2["default"].createElement(_MeterEntry2["default"], { matchId: matchId })
						),
						_react2["default"].createElement("div", { className: "tab-pane fade", id: "pills-session", role: "tabpanel", "aria-labelledby": "pills-session-tab" }),
						_react2["default"].createElement(
							"div",
							{ className: "tab-pane fade", id: "pills-meter", role: "tabpanel", "aria-labelledby": "pills-meter-tab" },
							"Meter"
						)
					)
				);
			}

			return render;
		}()
	}]);
	return MdiMatch;
}(_react.Component)) || _class) || _class);
exports["default"] = MdiMatch;
module.exports = exports["default"];

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _MatchHelper = __webpack_require__(30);

var _MatchHelper2 = _interopRequireDefault(_MatchHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SessionInfoBlock = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(SessionInfoBlock, _Component);

    function SessionInfoBlock(props) {
        (0, _classCallCheck3["default"])(this, SessionInfoBlock);
        return (0, _possibleConstructorReturn3["default"])(this, (SessionInfoBlock.__proto__ || (0, _getPrototypeOf2["default"])(SessionInfoBlock)).call(this, props));
    }

    (0, _createClass3["default"])(SessionInfoBlock, [{
        key: "render",
        value: function () {
            function render() {
                var item = this.props.item;
                // console.log(item.is_declared)
                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "div",
                        { className: "row info-heading-block" },
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                item.match_name,
                                " (",
                                item._id,
                                ")"
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Date:"
                            ),
                            moment(item.created_at).format('ll')
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Match Type:"
                            ),
                            item.match_type
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Is Declared:"
                            ),
                            item.is_declared ? 'Yes' : 'No'
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Is Abandoned:"
                            ),
                            item.is_abandoned ? 'Yes' : 'No'
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Is Monday Final:"
                            ),
                            item.is_monday_final ? 'Yes' : 'No'
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return SessionInfoBlock;
}(_react.Component), _class.defaultProps = {
    item: {
        is_declared: false
    }
}, _temp);
exports["default"] = SessionInfoBlock;
module.exports = exports["default"];

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _mobxReact = __webpack_require__(13);

var _SessionInfoBlock = __webpack_require__(396);

var _SessionInfoBlock2 = _interopRequireDefault(_SessionInfoBlock);

var _SessionEntryWinLossGrid = __webpack_require__(185);

var _SessionEntryWinLossGrid2 = _interopRequireDefault(_SessionEntryWinLossGrid);

var _SessionEntryGrid = __webpack_require__(397);

var _SessionEntryGrid2 = _interopRequireDefault(_SessionEntryGrid);

var _SessionEntryForm = __webpack_require__(184);

var _SessionEntryForm2 = _interopRequireDefault(_SessionEntryForm);

var _SessionGrid = __webpack_require__(398);

var _SessionGrid2 = _interopRequireDefault(_SessionGrid);

var _SessionForm = __webpack_require__(399);

var _SessionForm2 = _interopRequireDefault(_SessionForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionEntry = (_dec = (0, _mobxReact.inject)('globalStore'), _dec2 = (0, _mobxReact.inject)('matchStore'), _dec3 = (0, _mobxReact.inject)('sessionStore'), _dec4 = (0, _mobxReact.inject)('sessionEntryStore'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3['default'])(SessionEntry, _Component);

  function SessionEntry(props) {
    (0, _classCallCheck3['default'])(this, SessionEntry);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionEntry.__proto__ || (0, _getPrototypeOf2['default'])(SessionEntry)).call(this, props));

    _this.fetch = function (sessionId) {
      _this.props.sessionEntryStore.fetchAll(sessionId);
    };

    _this.showAddSessionWindow = function () {
      _this.openSessionForm();
    };

    _this.editSession = function () {
      var id = _this.refs.comboSession.getSelectedValue();
      _this.openSessionForm(id);
    };

    _this.onSessionFormSubmitted = function () {
      // this.refs.sessionGrid.refresh()
      _this.props.sessionStore.fetchList(_this.props.matchId);
    };

    _this.sessionGrid_onRowSelect = function (rowdata) {
      // this.fetchSession(rowdata._id)
      _this.props.globalStore.setSessionId(rowdata._id);
      _this.fetch(rowdata._id);
    };

    _this.sessionGrid_onEdit = function (rowdata) {
      _this.openSessionForm(rowdata._id);
    };

    _this.openDeclareWindow = function () {
      var rowdata = _this.refs.sessionGrid.getSelectedRowData();
      console.log(rowdata);
      var declared_runs = prompt("Enter Declared Runs");

      if (declared_runs >= 0) {
        axios({
          method: 'post',
          headers: Auth.header(),
          url: "/sessions/declare/" + rowdata._id,
          data: {
            declared_runs: declared_runs
          }
        }).then(function (res) {
          // this.refs.sessionGrid.refresh()
          _this.props.sessionStore.fetchList(_this.props.matchId);
          if (_this.props.globalStore.selectedSessionId) {
            _this.fetch(_this.props.globalStore.selectedSessionId);
          }
        });
      }
    };

    _this.sessionUndeclare = function () {
      var rowdata = _this.refs.sessionGrid.getSelectedRowData();
      var r = confirm("Are you sure to Undeclare ?");
      if (r == true) {
        axios({
          method: 'post',
          headers: Auth.header(),
          url: "/sessions/undeclare/" + rowdata._id
        }).then(function (res) {
          // this.refs.sessionGrid.refresh()
          _this.props.sessionStore.fetchList(_this.props.matchId);
          if (_this.props.globalStore.selectedSessionId) {
            _this.fetch(_this.props.globalStore.selectedSessionId);
          }
        })['catch'](function (err) {
          toastr.error(err.response.data.message);
        });
      }
    };

    _this.comboSessionOnClose = function (e) {
      var sessionId = _this.refs.entryForm.refs.comboSession.getSelectedValue();

      _this.props.globalStore.setSessionId(sessionId);
      _this.fetch(sessionId);
      _this.refs.sessionGrid.selectRowBySessonId(sessionId);
    };

    _this.sessionEntry_onFormSubmitted = function (response) {
      _this.refs.entryForm.resetForm();
      // console.log(response.session_id)
      _this.fetch(response.session_id);

      _this.props.sessionEntryStore.lastEnteredRun = response.runs;
    };

    _this.entryGrid_onEditButtonClick = function (data) {
      _this.refs.entryForm.edit(data);
    };

    _this.entryGrid_onDataUpdate = function () {
      _this.fetch(_this.props.globalStore.selectedSessionId);
    };

    return _this;
  }

  (0, _createClass3['default'])(SessionEntry, [{
    key: 'componentWillMount',
    value: function () {
      function componentWillMount() {

        // Check if different Match is Selected then clear the sessionId to prevent show wrong Session Data under Wrong Match ID
        var matchId = this.props.matchId;
        var storedMatchId = localStorage.getItem('matchId');
        // console.log(storedMatchId)
        if (storedMatchId !== matchId) {
          localStorage.removeItem('sessionId');
          this.props.globalStore.selectedSessionId = null;
        }
      }

      return componentWillMount;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.props.matchStore.fetchTeams(this.props.matchId);
        this.props.sessionStore.fetchList(this.props.matchId);
        if (this.props.globalStore.selectedSessionId) {
          this.fetch(this.props.globalStore.selectedSessionId);
        } else {
          this.props.sessionEntryStore.clearAll();
        }
      }

      return componentDidMount;
    }()
  }, {
    key: 'openSessionForm',


    //// Sessions Functions =======================================
    value: function () {
      function openSessionForm() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var teamsList = this.props.matchStore.teamsList;

        var mainDemoContainer = document.getElementById('footerContainer');
        var widgetContainer = document.createElement('div');
        mainDemoContainer.appendChild(widgetContainer);
        (0, _reactDom.render)(_react2['default'].createElement(_SessionForm2['default'], { onFormSubmitted: this.onSessionFormSubmitted, matchId: this.props.matchId, id: id, teamsList: teamsList }), widgetContainer);
      }

      return openSessionForm;
    }()

    //// SESSION ENTRY FUNCTIONS ========================================================

  }, {
    key: 'render',
    value: function () {
      function render() {
        var selectedSessionId = this.props.globalStore.selectedSessionId;
        var sessionList = this.props.sessionStore.sessionList;
        var _props$sessionEntrySt = this.props.sessionEntryStore,
            sessionEntriesList = _props$sessionEntrySt.sessionEntriesList,
            sessionPlInfo = _props$sessionEntrySt.sessionPlInfo,
            sessionWinLossList = _props$sessionEntrySt.sessionWinLossList,
            lastEnteredRun = _props$sessionEntrySt.lastEnteredRun;

        // console.log(selectedSessionId)

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'row info-heading-block' },
            _react2['default'].createElement(
              'div',
              { className: 'col-md-12' },
              _react2['default'].createElement(_SessionInfoBlock2['default'], { plInfo: sessionPlInfo })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row mt-2 mb-2' },
            _react2['default'].createElement(
              'div',
              { className: 'col-md-12' },
              _react2['default'].createElement(_SessionEntryForm2['default'], { ref: 'entryForm', matchId: this.props.matchId,
                sessionId: selectedSessionId, sessionList: sessionList,
                onFormSubmitted: this.sessionEntry_onFormSubmitted,
                comboSessionOnClose: this.comboSessionOnClose })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row sessionGridsRow' },
            _react2['default'].createElement(
              'div',
              { className: 'acol acol1' },
              _react2['default'].createElement(_SessionEntryGrid2['default'], { ref: 'entryGrid', entriesList: sessionEntriesList,
                onEditButtonClick: this.entryGrid_onEditButtonClick, onDataUpdate: this.entryGrid_onDataUpdate })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'acol acol2' },
              _react2['default'].createElement(_SessionEntryWinLossGrid2['default'], { ref: 'winlossGrid', entriesList: sessionWinLossList, lastEnteredRun: lastEnteredRun })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'acol acol3' },
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm mr-2', type: 'button', onClick: this.showAddSessionWindow },
                'Add'
              ),
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm mr-2', onClick: this.openDeclareWindow },
                'Declare'
              ),
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm', onClick: this.sessionUndeclare },
                'Un Declare'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'mt-2 mb-2' },
                _react2['default'].createElement(_SessionGrid2['default'], { ref: 'sessionGrid', entriesList: sessionList, sessionId: selectedSessionId,
                  onRowSelect: this.sessionGrid_onRowSelect, onEditButtonClick: this.sessionGrid_onEdit })
              )
            )
          )
        );
      }

      return render;
    }()
  }]);
  return SessionEntry;
}(_react.Component), _class2.defaultProps = {
  matchId: null,
  sessionId: null
}, _temp)) || _class) || _class) || _class) || _class) || _class);
exports['default'] = SessionEntry;
module.exports = exports['default'];

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SessionInfoBlock = function (_Component) {
    (0, _inherits3["default"])(SessionInfoBlock, _Component);

    function SessionInfoBlock(props) {
        (0, _classCallCheck3["default"])(this, SessionInfoBlock);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (SessionInfoBlock.__proto__ || (0, _getPrototypeOf2["default"])(SessionInfoBlock)).call(this, props));

        _this.defaultItem = {
            yes: 0,
            no: 0,
            yes_after_patti: 0,
            no_after_patti: 0,
            comm_rec: 0,
            comm_pay: 0
        };
        return _this;
    }

    (0, _createClass3["default"])(SessionInfoBlock, [{
        key: "render",
        value: function () {
            function render() {
                var item = (0, _assign2["default"])({}, this.defaultItem, this.props.plInfo);

                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "div",
                        { className: "form-row sessioninfo-block" },
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Yes: ",
                                item.yes
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "No: ",
                                item.no
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Yes After Patti: ",
                                item.yes_after_patti
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "No After Patti: ",
                                item.no_after_patti
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Comm. Rec.: ",
                                item.comm_rec
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Comm. Pay: ",
                                item.comm_pay
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return SessionInfoBlock;
}(_react.Component);

exports["default"] = SessionInfoBlock;
module.exports = exports["default"];

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _SessionEntryHelper = __webpack_require__(109);

var _SessionEntryHelper2 = _interopRequireDefault(_SessionEntryHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionEntryGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(SessionEntryGrid, _Component);

    function SessionEntryGrid(props) {
        (0, _classCallCheck3['default'])(this, SessionEntryGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionEntryGrid.__proto__ || (0, _getPrototypeOf2['default'])(SessionEntryGrid)).call(this, props));

        _this.refresh = function () {
            // this.refs.jqxgrid.updatebounddata();
            // this.dataAdapter.dataBind()
        };

        return _this;
    }

    (0, _createClass3['default'])(SessionEntryGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'rate', type: 'string' }, { name: 'runs', type: 'string' }, { name: 'amount', type: 'string' }, { name: 'amount_patti', type: 'string' }, { name: 'yn', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'match_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'comm_yn', type: 'boolean' }, { name: 'session_id', type: 'Number' }, { name: 'is_declared', type: 'boolean' }, { name: 'is_summarized', type: 'boolean' }, { name: 'patti_total_per', type: 'string' },
                // { name: 'sess_comm', type: 'string' },
                { name: 'comm_amt', type: 'string' }, { name: 'comm_total_per', type: 'string' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    // url: URL_SESSION_ENTRIES + '?session_id=' + this.props.sessionId,
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: '',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord.uid)
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _SessionEntryHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, {
                    text: '',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer(row, column, value) {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord)
                            _this2.props.onEditButtonClick(dataRecord);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 70 }, { text: 'Party', datafield: 'account_name', width: 120 }, { text: 'Rate', datafield: 'rate', width: 60, cellsformat: 'd2' }, { text: 'Runs', datafield: 'runs', width: 60 }, { text: 'L/K', datafield: 'yn', width: 50 }, { text: 'Amount', datafield: 'amount', width: 80, cellsformat: 'd2' }, { text: 'Patti Amt.', datafield: 'amount_patti', width: 80, cellsformat: 'd2' }, { text: 'Comm Amt.', datafield: 'comm_amt', width: 100, cellsformat: 'd2' }, { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Patti (%)', datafield: 'patti_total_per', width: 100, cellsformat: 'd2' }, { text: 'Comm (%)', datafield: 'comm_total_per', width: 100, cellsformat: 'd2' }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Is Summarized', datafield: 'is_summarized', width: 120, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid',
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 400, pageable: false, pagermode: 'simple', pagesize: 1000,
                        sortable: false, altrows: false, enabletooltips: true,
                        editable: false,
                        filterable: true, showfilterrow: false
                    })
                );
            }

            return render;
        }()
    }]);
    return SessionEntryGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }()
}, _temp);
exports['default'] = SessionEntryGrid;
module.exports = exports['default'];

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _SessionHelper = __webpack_require__(74);

var _SessionHelper2 = _interopRequireDefault(_SessionHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(SessionGrid, _Component);

    function SessionGrid(props) {
        (0, _classCallCheck3['default'])(this, SessionGrid);

        // this.state = {
        //     matchId: this.props.matchId,
        //     // sessionId: this.props.sessionId
        // }
        var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionGrid.__proto__ || (0, _getPrototypeOf2['default'])(SessionGrid)).call(this, props));

        _this.refresh = function () {
            // this.refs.jqxgrid.updatebounddata();
            _this.dataAdapter.dataBind();
            _this.onRowSelect();
        };

        return _this;
    }

    (0, _createClass3['default'])(SessionGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {

                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                this.refs.jqxgrid.on('bindingcomplete', function () {
                    _this2.selectRowBySessonId(_this2.props.sessionId);
                    _this2.onRowSelect();
                    // console.log("bindingcomplete")
                });
                window.grid = this.refs.jqxgrid;
                window.grid_data = this.props.entriesList.slice();
                window.dataAdapter = this.dataAdapter;
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillUpdate',
        value: function () {
            function componentWillUpdate() {}

            return componentWillUpdate;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log("componentDidUpdate")
                // this.selectRowBySessonId()
                // this.onRowSelect()

                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
                // console.log(this.dataAdapter)

            }

            return componentDidUpdate;
        }()
    }, {
        key: 'onRowSelect',
        value: function () {
            function onRowSelect() {
                var _this3 = this;

                this.refs.jqxgrid.off('rowselect');
                this.refs.jqxgrid.on('rowselect', function (event) {
                    var args = event.args;
                    _this3.props.onRowSelect(args.row);
                });
            }

            return onRowSelect;
        }()
    }, {
        key: 'selectRowBySessonId',
        value: function () {
            function selectRowBySessonId(sessionId) {
                this.refs.jqxgrid.off('rowselect');
                var rows = this.refs.jqxgrid.getrows();
                var rowsCount = rows.length;
                for (var i = 0; i < rowsCount; i++) {
                    var value = this.refs.jqxgrid.getcellvalue(i, "_id");
                    if (value == sessionId) {
                        this.refs.jqxgrid.selectrow(i);
                        break;
                    };
                };
            }

            return selectRowBySessonId;
        }()
    }, {
        key: 'getSelectedRowData',
        value: function () {
            function getSelectedRowData() {
                var getselectedrowindex = this.refs.jqxgrid.getselectedrowindex();
                console.log(getselectedrowindex);
                if (getselectedrowindex !== -1) {
                    // returns the selected row's data.
                    var selectedRowData = this.refs.jqxgrid.getrowdata(getselectedrowindex);
                    return selectedRowData;
                }
                return {};
            }

            return getSelectedRowData;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this4 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'session_name', type: 'string' }, { name: 'declared_runs', type: 'Boolean' }, { name: 'is_declared', type: 'Boolean' }, { name: 'team_name', type: 'Boolean' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                    // url: URL_SESSIONS + '?match_id=' + this.props.matchId
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this4.refs.jqxgrid.getrowdata(row);
                            console.log(dataRecord.uid);
                            _SessionHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                _this4.refresh();
                            })['catch'](function (res) {
                                toastr.error("Cannot Remove Item.");
                            });
                        }

                        return buttonclick;
                    }()
                }, {
                    text: 'Edit',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer(row, column, value) {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this4.refs.jqxgrid.getrowdata(row);
                            console.log(dataRecord);
                            _this4.props.onEditButtonClick(dataRecord);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Session', datafield: 'session_name', width: 100 }, { text: 'Runs', datafield: 'declared_runs', width: 50 }, { text: 'Team', datafield: 'team_name', width: 100 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.dataAdapter)


                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid',
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 365, pageable: false,
                        sortable: true, altrows: false, enabletooltips: true,
                        editable: false,
                        filterable: false, showfilterrow: false
                    })
                );
            }

            return render;
        }()
    }]);
    return SessionGrid;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    sessionId: null,
    entriesList: [],

    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onRowSelect: function () {
        function onRowSelect(rowdata) {}

        return onRowSelect;
    }()
}, _temp);
exports['default'] = SessionGrid;
module.exports = exports['default'];

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
// import ComboBoxTeam from '../controls/ComboBoxTeam'


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react_jqxwindow = __webpack_require__(83);

var _react_jqxwindow2 = _interopRequireDefault(_react_jqxwindow);

var _ComboBoxLocal = __webpack_require__(57);

var _ComboBoxLocal2 = _interopRequireDefault(_ComboBoxLocal);

var _SessionHelper = __webpack_require__(74);

var _SessionHelper2 = _interopRequireDefault(_SessionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SessionForm = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(SessionForm, _Component);

    function SessionForm(props) {
        (0, _classCallCheck3['default'])(this, SessionForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SessionForm.__proto__ || (0, _getPrototypeOf2['default'])(SessionForm)).call(this, props));

        _this.formSubmit = function (e) {
            e.preventDefault();

            if (!_this.props.matchId) {
                toastr.error("Please Select Match First.");
            }

            var data = jQuery(e.target).serialize();
            var dataJson = URI.parseQuery(data);
            // console.log(dataJson)
            _SessionHelper2['default'].save(dataJson, _this.props.id).then(function (response) {
                _this.refs.jqxWindow.close();
                _this.props.onFormSubmitted(response);
            })['catch'](function (error) {
                // console.log(error)
                toastr.error("Validation Failed");
            });
            return false;
        };

        _this.state = {
            scount: 0,
            item: {}
        };
        return _this;
    }

    (0, _createClass3['default'])(SessionForm, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                // $("#jqxwindow").jqxWindow("move", $(window).width() / 2 - $("#jqxwindow").jqxWindow("width") / 2, $(window).height() / 2 - $("#jqxwindow").jqxWindow("height") / 2);

                this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2);

                this.refs.jqxWindow.on('close', function (event) {
                    _reactDom2['default'].unmountComponentAtNode(_reactDom2['default'].findDOMNode(_this2).parentNode);
                });

                if (this.props.id) {
                    _SessionHelper2['default'].show(this.props.id).then(function (res) {
                        _this2.setState({
                            scount: _this2.state.scount + 1,
                            item: res.data
                        });
                        console.log(res);
                    })['catch'](function (error) {
                        toastr.error("Validation Failed");
                    });
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {}

            return componentWillMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this3 = this;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        _react_jqxwindow2['default'],
                        { ref: 'jqxWindow', autoOpen: true,
                            width: 400, height: 250, position: { x: "50%", y: 175, left: "-250px" },
                            minWidth: 200, minHeight: 200, maxWidth: 700,
                            maxHeight: 400, showCollapseButton: false
                        },
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'span',
                                null,
                                'Session Form ',
                                this.state.item.session_name
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'form',
                                { ref: 'form', onSubmit: function () {
                                        function onSubmit(e) {
                                            return _this3.formSubmit(e);
                                        }

                                        return onSubmit;
                                    }(), className: 'sessionForm' },
                                _react2['default'].createElement('input', { type: 'hidden', name: 'match_id', defaultValue: this.props.matchId }),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'row11' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-611' },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'form-group' },
                                            _react2['default'].createElement(
                                                'label',
                                                null,
                                                'Sesion Name'
                                            ),
                                            _react2['default'].createElement('input', { className: 'form-control form-control-sm', type: 'text', name: 'session_name', defaultValue: this.state.item.session_name, key: this.state.scount })
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'form-group' },
                                            _react2['default'].createElement(
                                                'label',
                                                null,
                                                'Team'
                                            ),
                                            _react2['default'].createElement(_ComboBoxLocal2['default'], { width: "100%", field_id: 'team_id', valueMember: 'team_id',
                                                displayMember: 'team_name', data: this.props.teamsList, selectedValue: this.state.item.team_id })
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'text-right' },
                                            _react2['default'].createElement(
                                                'button',
                                                { className: 'btn btn-primary btn-sm text-right', type: 'submit' },
                                                'Save Session'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return SessionForm;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    id: null,
    teamsList: []
}, _temp);
exports['default'] = SessionForm;
module.exports = exports['default'];

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _mobxReact = __webpack_require__(13);

var _MeterInfoBlock = __webpack_require__(401);

var _MeterInfoBlock2 = _interopRequireDefault(_MeterInfoBlock);

var _MeterEntryWinLossGrid = __webpack_require__(402);

var _MeterEntryWinLossGrid2 = _interopRequireDefault(_MeterEntryWinLossGrid);

var _MeterEntryGrid = __webpack_require__(403);

var _MeterEntryGrid2 = _interopRequireDefault(_MeterEntryGrid);

var _MeterEntryForm = __webpack_require__(404);

var _MeterEntryForm2 = _interopRequireDefault(_MeterEntryForm);

var _MeterGrid = __webpack_require__(405);

var _MeterGrid2 = _interopRequireDefault(_MeterGrid);

var _MeterForm = __webpack_require__(406);

var _MeterForm2 = _interopRequireDefault(_MeterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterEntry = (_dec = (0, _mobxReact.inject)('globalStore'), _dec2 = (0, _mobxReact.inject)('matchStore'), _dec3 = (0, _mobxReact.inject)('meterStore'), _dec4 = (0, _mobxReact.inject)('meterEntryStore'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3['default'])(MeterEntry, _Component);

  function MeterEntry(props) {
    (0, _classCallCheck3['default'])(this, MeterEntry);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterEntry.__proto__ || (0, _getPrototypeOf2['default'])(MeterEntry)).call(this, props));

    _this.fetch = function (meterId) {
      _this.props.meterEntryStore.fetchAll(meterId);
    };

    _this.showAddMeterWindow = function () {
      _this.openMeterForm();
    };

    _this.editMeter = function () {
      var id = _this.refs.comboMeter.getSelectedValue();
      _this.openMeterForm(id);
    };

    _this.onMeterFormSubmitted = function () {
      _this.props.meterStore.fetchList(_this.props.matchId);
    };

    _this.meterGrid_onRowSelect = function (rowdata) {
      _this.props.globalStore.setMeterId(rowdata._id);
      _this.fetch(rowdata._id);
    };

    _this.meterGrid_onEdit = function (rowdata) {
      _this.openMeterForm(rowdata._id);
    };

    _this.meterGrid_onDataUpdate = function () {
      _this.props.meterStore.fetchList(_this.props.matchId);
    };

    _this.openDeclareWindow = function () {
      var rowdata = _this.refs.meterGrid.getSelectedRowData();
      console.log(rowdata);
      var declared_runs = prompt("Enter Declared Runs");

      if (declared_runs >= 0) {
        axios({
          method: 'post',
          headers: Auth.header(),
          url: "/meters/declare/" + rowdata._id,
          data: {
            declared_runs: declared_runs
          }
        }).then(function (res) {
          _this.props.meterStore.fetchList(_this.props.matchId);
          if (_this.props.globalStore.selectedMeterId) {
            _this.fetch(_this.props.globalStore.selectedMeterId);
          }
        });
      }
    };

    _this.meterUndeclare = function () {
      var rowdata = _this.refs.meterGrid.getSelectedRowData();
      var r = confirm("Are you sure to Undeclare ?");
      if (r == true) {
        axios({
          method: 'post',
          headers: Auth.header(),
          url: "/meters/undeclare/" + rowdata._id
        }).then(function (res) {
          // this.refs.meterGrid.refresh()
          _this.props.meterStore.fetchList(_this.props.matchId);
          if (_this.props.globalStore.selectedMeterId) {
            _this.fetch(_this.props.globalStore.selectedMeterId);
          }
        })['catch'](function (err) {
          toastr.error(err.response.data.message);
        });
      }
    };

    _this.comboMeterOnClose = function (e) {
      var meterId = _this.refs.entryForm.refs.comboMeter.getSelectedValue();

      _this.props.globalStore.setMeterId(meterId);
      _this.fetch(meterId);
      _this.refs.meterGrid.selectRowByMeterId(meterId);
    };

    _this.meterEntry_onFormSubmitted = function (response) {
      _this.refs.entryForm.resetForm();
      _this.fetch(response.meter_id);

      _this.props.meterEntryStore.lastEnteredRun = response.runs;
    };

    _this.entryGrid_onEditButtonClick = function (data) {
      _this.refs.entryForm.edit(data);
    };

    _this.entryGrid_onDataUpdate = function () {
      _this.fetch(_this.props.globalStore.selectedMeterId);
    };

    return _this;
  }

  (0, _createClass3['default'])(MeterEntry, [{
    key: 'componentWillMount',
    value: function () {
      function componentWillMount() {
        var matchId = this.props.matchId;
        var storedMatchId = localStorage.getItem('matchId');
        // console.log(storedMatchId)
        if (storedMatchId !== matchId) {
          localStorage.removeItem('meterId');
          this.props.globalStore.selectedMeterId = null;
        }
      }

      return componentWillMount;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.props.matchStore.fetchTeams(this.props.matchId);
        this.props.meterStore.fetchList(this.props.matchId);
        if (this.props.globalStore.selectedMeterId) {
          this.fetch(this.props.globalStore.selectedMeterId);
        } else {
          this.props.meterEntryStore.clearAll();
        }
      }

      return componentDidMount;
    }()
  }, {
    key: 'openMeterForm',


    //// Meters Functions =======================================
    value: function () {
      function openMeterForm() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var teamsList = this.props.matchStore.teamsList;

        var mainDemoContainer = document.getElementById('footerContainer');
        var widgetContainer = document.createElement('div');
        mainDemoContainer.appendChild(widgetContainer);
        (0, _reactDom.render)(_react2['default'].createElement(_MeterForm2['default'], { onFormSubmitted: this.onMeterFormSubmitted, matchId: this.props.matchId, id: id, teamsList: teamsList }), widgetContainer);
      }

      return openMeterForm;
    }()

    //// Meter ENTRY FUNCTIONS ========================================================

  }, {
    key: 'render',
    value: function () {
      function render() {
        var selectedMeterId = this.props.globalStore.selectedMeterId;
        var meterList = this.props.meterStore.meterList;
        var _props$meterEntryStor = this.props.meterEntryStore,
            meterEntriesList = _props$meterEntryStor.meterEntriesList,
            meterPlInfo = _props$meterEntryStor.meterPlInfo,
            meterWinLossList = _props$meterEntryStor.meterWinLossList,
            lastEnteredRun = _props$meterEntryStor.lastEnteredRun;

        // console.log(selectedMeterId)

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'row info-heading-block' },
            _react2['default'].createElement(
              'div',
              { className: 'col-md-12' },
              _react2['default'].createElement(_MeterInfoBlock2['default'], { plInfo: meterPlInfo })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row mt-2 mb-2' },
            _react2['default'].createElement(
              'div',
              { className: 'col-md-12' },
              _react2['default'].createElement(_MeterEntryForm2['default'], { ref: 'entryForm', matchId: this.props.matchId,
                meterId: selectedMeterId, meterList: meterList,
                onFormSubmitted: this.meterEntry_onFormSubmitted,
                comboMeterOnClose: this.comboMeterOnClose })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row sessionGridsRow' },
            _react2['default'].createElement(
              'div',
              { className: 'acol acol1' },
              _react2['default'].createElement(_MeterEntryGrid2['default'], { ref: 'entryGrid', entriesList: meterEntriesList,
                onEditButtonClick: this.entryGrid_onEditButtonClick, onDataUpdate: this.entryGrid_onDataUpdate })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'acol acol2' },
              _react2['default'].createElement(_MeterEntryWinLossGrid2['default'], { ref: 'winlossGrid', entriesList: meterWinLossList, lastEnteredRun: lastEnteredRun })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'acol acol3' },
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm mr-2', type: 'button', onClick: this.showAddMeterWindow },
                'Add'
              ),
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm mr-2', onClick: this.openDeclareWindow },
                'Declare'
              ),
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-primary btn-sm', onClick: this.meterUndeclare },
                'Un Declare'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'mt-2 mb-2' },
                _react2['default'].createElement(_MeterGrid2['default'], { ref: 'meterGrid', entriesList: meterList, sessionId: selectedMeterId,
                  onRowSelect: this.meterGrid_onRowSelect, onEditButtonClick: this.meterGrid_onEdit, onDataUpdate: this.meterGrid_onDataUpdate })
              )
            )
          )
        );
      }

      return render;
    }()
  }]);
  return MeterEntry;
}(_react.Component), _class2.defaultProps = {
  matchId: null,
  meterId: null
}, _temp)) || _class) || _class) || _class) || _class) || _class);
exports['default'] = MeterEntry;
module.exports = exports['default'];

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MeterInfoBlock = function (_Component) {
    (0, _inherits3["default"])(MeterInfoBlock, _Component);

    function MeterInfoBlock(props) {
        (0, _classCallCheck3["default"])(this, MeterInfoBlock);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (MeterInfoBlock.__proto__ || (0, _getPrototypeOf2["default"])(MeterInfoBlock)).call(this, props));

        _this.defaultItem = {
            rate_sum: 0,
            comm_rec: 0,
            comm_pay: 0
        };
        return _this;
    }

    (0, _createClass3["default"])(MeterInfoBlock, [{
        key: "render",
        value: function () {
            function render() {
                var item = (0, _assign2["default"])({}, this.defaultItem, this.props.plInfo);

                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "div",
                        { className: "form-row sessioninfo-block" },
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Rate: ",
                                item.rate_sum
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Comm. Rec.: ",
                                item.comm_rec
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-auto" },
                            _react2["default"].createElement(
                                "label",
                                null,
                                "Comm. Pay: ",
                                item.comm_pay
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MeterInfoBlock;
}(_react.Component);

exports["default"] = MeterInfoBlock;
module.exports = exports["default"];

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterEntryWinLossGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MeterEntryWinLossGrid, _Component);

    function MeterEntryWinLossGrid(props) {
        (0, _classCallCheck3['default'])(this, MeterEntryWinLossGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterEntryWinLossGrid.__proto__ || (0, _getPrototypeOf2['default'])(MeterEntryWinLossGrid)).call(this, props));

        _this.refresh = function () {
            _this.refs.jqxgrid.updatebounddata();
        };

        return _this;
    }

    (0, _createClass3['default'])(MeterEntryWinLossGrid, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // window.abc = this
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log(this.props.lastEnteredRun)
                this.scrollToRow(this.props.lastEnteredRun);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'scrollToRow',
        value: function () {
            function scrollToRow(index) {
                // var rows = this.refs.jqxgrid.getrows()
                // console.log(rows.length)
                // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
                // this.refs.jqxgrid.ensurerowvisible(rows.length-1)
                // console.log(index)
                if (index > 0) {
                    try {
                        this.refs.jqxgrid.ensurerowvisible(index);
                    } catch (err) {}
                }
            }

            return scrollToRow;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                var cellclassname_Amt = function () {
                    function cellclassname_Amt(row, column, value, data) {
                        // console.log(row, column , value, data)
                        if (data.amount < 0) {
                            return "jqx_cell_bgdanger";
                        } else {
                            return "jqx_cell_bgsuccess";
                        }
                    }

                    return cellclassname_Amt;
                }();
                var datafields = [{ name: 'runs', type: 'string' }, { name: 'amount', type: 'string' }];

                var source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    // url: URL_SESSION_ENTRIES_WINLOSSS_LIST + '/' + this.props.sessionId
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{ text: 'Runs', datafield: 'runs', width: 60, cellclassname: cellclassname_Amt }, {
                    text: 'Amount',
                    datafield: 'amount',
                    width: 100,
                    cellclassname: cellclassname_Amt
                }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', key: Math.random(),
                        source: this.dataAdapter,
                        width: '100%', height: 400,
                        sortable: false, altrows: false, enabletooltips: false,
                        editable: false, columns: columns,
                        filterable: false, showfilterrow: false, pagesize: 100, pageable: false })
                );
            }

            return render;
        }()
    }]);
    return MeterEntryWinLossGrid;
}(_react.Component), _class.defaultProps = {
    // sessionId: null,
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    lastEnteredRun: null
}, _temp);
exports['default'] = MeterEntryWinLossGrid;
module.exports = exports['default'];

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MeterEntryHelper = __webpack_require__(110);

var _MeterEntryHelper2 = _interopRequireDefault(_MeterEntryHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterEntryGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MeterEntryGrid, _Component);

    function MeterEntryGrid(props) {
        (0, _classCallCheck3['default'])(this, MeterEntryGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterEntryGrid.__proto__ || (0, _getPrototypeOf2['default'])(MeterEntryGrid)).call(this, props));

        _this.refresh = function () {
            // this.refs.jqxgrid.updatebounddata();
            // this.dataAdapter.dataBind()
        };

        return _this;
    }

    (0, _createClass3['default'])(MeterEntryGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'rate', type: 'string' }, { name: 'runs', type: 'string' }, { name: 'amount', type: 'string' }, { name: 'amount_patti', type: 'string' }, { name: 'yn', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'match_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'comm_yn', type: 'boolean' }, { name: 'meter_id', type: 'Number' }, { name: 'is_declared', type: 'boolean' }, { name: 'is_summarized', type: 'boolean' }, { name: 'patti_total_per', type: 'string' }, { name: 'comm_amt', type: 'string' }, { name: 'comm_total_per', type: 'string' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: '',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            // console.log(dataRecord.uid)
                            var r = confirm("Are you sure!");
                            if (r == true) {
                                _MeterEntryHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                    _this2.props.onDataUpdate();
                                })['catch'](function (err) {
                                    toastr.error(err.response.data.message);
                                });
                            }
                        }

                        return buttonclick;
                    }()
                }, {
                    text: '',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer(row, column, value) {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            _this2.props.onEditButtonClick(dataRecord);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 70 }, { text: 'Party', datafield: 'account_name', width: 120 }, { text: 'Rate', datafield: 'rate', width: 60, cellsformat: 'd2' }, { text: 'Runs', datafield: 'runs', width: 60 }, { text: 'Y/N', datafield: 'yn', width: 50 }, { text: 'Patti Amt.', datafield: 'amount_patti', width: 80, cellsformat: 'd2' }, { text: 'Comm Amt.', datafield: 'comm_amt', width: 100, cellsformat: 'd2' }, { text: 'Comm YN', datafield: 'comm_yn', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Patti (%)', datafield: 'patti_total_per', width: 100, cellsformat: 'd2' }, { text: 'Comm (%)', datafield: 'comm_total_per', width: 100, cellsformat: 'd2' }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Is Summarized', datafield: 'is_summarized', width: 120, columntype: 'checkbox', filtertype: 'bool' }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid',
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 400, pageable: false, pagermode: 'simple', pagesize: 1000,
                        sortable: false, altrows: false, enabletooltips: true,
                        editable: false,
                        filterable: true, showfilterrow: false
                    })
                );
            }

            return render;
        }()
    }]);
    return MeterEntryGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }()
}, _temp);
exports['default'] = MeterEntryGrid;
module.exports = exports['default'];

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ComboBoxLocal = __webpack_require__(57);

var _ComboBoxLocal2 = _interopRequireDefault(_ComboBoxLocal);

var _ComboBoxMember = __webpack_require__(58);

var _ComboBoxMember2 = _interopRequireDefault(_ComboBoxMember);

var _InputDecimal = __webpack_require__(56);

var _InputDecimal2 = _interopRequireDefault(_InputDecimal);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

var _MeterEntryHelper = __webpack_require__(110);

var _MeterEntryHelper2 = _interopRequireDefault(_MeterEntryHelper);

var _Constant = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterEntryForm = (_temp = _class = function (_React$Component) {
    (0, _inherits3['default'])(MeterEntryForm, _React$Component);

    function MeterEntryForm(props) {
        (0, _classCallCheck3['default'])(this, MeterEntryForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterEntryForm.__proto__ || (0, _getPrototypeOf2['default'])(MeterEntryForm)).call(this, props));

        _this.resetForm = function () {
            _this.setState({
                scount: _this.state.scount + 1,
                item: {
                    rate: 1
                }
            });
        };

        _this.onSubmit = function (e) {
            e.preventDefault();

            if (!$(_this.refs.form).valid()) {
                return false;
            }

            if (!_this.props.matchId) {
                toastr.error("Please Select Match First.");
                return false;
            }

            if (!_this.props.meterId) {
                toastr.error("Please Select Meter First.");
                return false;
            }

            var data = jQuery(_this.refs.form).serialize();
            var dataJson = URI.parseQuery(data);
            // console.log(dataJson)
            _MeterEntryHelper2['default'].save(dataJson, _this.state.item._id).then(function (response) {
                _this.props.onFormSubmitted(response.data);
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });
            return false;
        };

        _this.state = {
            matchId: _this.props.matchId,
            scount: 0,
            item: {
                rate: 1
            }

        };
        return _this;
    }

    (0, _createClass3['default'])(MeterEntryForm, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.mtrap = _GlobalHelper2['default'].mounstrapFormInit(this.refs.form);
            }

            return componentDidMount;
        }()
    }, {
        key: 'edit',
        value: function () {
            function edit(rowdata) {
                this.setState({
                    scount: this.state.scount + 1,
                    item: rowdata
                });
            }

            return edit;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = this.state.item;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'form',
                        { ref: 'form', className: 'moustrapform' },
                        _react2['default'].createElement('input', { type: 'hidden', defaultValue: this.props.matchId, name: 'match_id' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row align-items-center' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'S.N.'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { className: 'form-control form-control-sm w-50p idinput-meter', readOnly: true, defaultValue: item._id, key: item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Meter'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxLocal2['default'], { ref: 'comboMeter', width: 150, field_id: 'meter_id',
                                        data: this.props.meterList, displayMember: 'meter_name',
                                        selectedValue: this.props.meterId, onClose: this.props.comboMeterOnClose })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Runs'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement('input', { type: 'number', className: 'form-control form-control-sm w-50p error-hide required number', min: '0', name: 'runs', defaultValue: item.runs, key: item._id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Y/N'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_CSelect2['default'], { className: 'uk-select uk-form-small', name: 'yn', value: item.yn, items: _Constant.LIST_YN })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Rate'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_InputDecimal2['default'], { className: 'form-control form-control-sm w-50p error-hide required number', min: '0', name: 'rate', value: item.rate })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto' },
                                _react2['default'].createElement(
                                    'label',
                                    null,
                                    'Party'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(_ComboBoxMember2['default'], { width: 150, field_id: 'account_id', selectedValue: item.account_id })
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'btn-group', role: 'group', 'aria-label': 'Button group with nested dropdown' },
                                        _react2['default'].createElement(
                                            'button',
                                            { className: 'btn btn-primary btn-sm btnsubmit', type: 'button', onClick: this.onSubmit },
                                            _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                            ' Save'
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'button',
                                        { className: 'btn btn-danger btn-sm', type: 'button', onClick: this.resetForm },
                                        _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                        ' Cancel'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-auto ' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: '' },
                                    '\xA0'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    null,
                                    _react2['default'].createElement(
                                        'label',
                                        { className: 'form-check-label' },
                                        _react2['default'].createElement('input', { type: 'hidden', value: 'false', name: 'comm_yn' }),
                                        _react2['default'].createElement('input', { className: 'form-check-input', type: 'checkbox', name: 'comm_yn', value: true, defaultChecked: true }),
                                        ' Add Commission'
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MeterEntryForm;
}(_react2['default'].Component), _class.defaultProps = {
    matchId: null,
    meterId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    comboMeterOnClose: function () {
        function comboMeterOnClose() {}

        return comboMeterOnClose;
    }(),
    meterList: []

}, _temp);
exports['default'] = MeterEntryForm;
module.exports = exports['default'];

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _MeterHelper = __webpack_require__(76);

var _MeterHelper2 = _interopRequireDefault(_MeterHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MeterGrid, _Component);

    function MeterGrid(props) {
        (0, _classCallCheck3['default'])(this, MeterGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterGrid.__proto__ || (0, _getPrototypeOf2['default'])(MeterGrid)).call(this, props));

        _this.refresh = function () {
            // this.refs.jqxgrid.updatebounddata();
            _this.dataAdapter.dataBind();
            _this.onRowSelect();
        };

        return _this;
    }

    (0, _createClass3['default'])(MeterGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {

                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                this.refs.jqxgrid.on('bindingcomplete', function () {
                    _this2.selectRowByMeterId(_this2.props.meterId);
                    _this2.onRowSelect();
                    // console.log("bindingcomplete")
                });
                window.grid = this.refs.jqxgrid;
                window.grid_data = this.props.entriesList.slice();
                window.dataAdapter = this.dataAdapter;
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillUpdate',
        value: function () {
            function componentWillUpdate() {}

            return componentWillUpdate;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log("componentDidUpdate")
                // this.selectRowByMeterId()
                // this.onRowSelect()

                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
                // console.log(this.dataAdapter)

            }

            return componentDidUpdate;
        }()
    }, {
        key: 'onRowSelect',
        value: function () {
            function onRowSelect() {
                var _this3 = this;

                this.refs.jqxgrid.off('rowselect');
                this.refs.jqxgrid.on('rowselect', function (event) {
                    var args = event.args;
                    _this3.props.onRowSelect(args.row);
                });
            }

            return onRowSelect;
        }()
    }, {
        key: 'selectRowByMeterId',
        value: function () {
            function selectRowByMeterId(meterId) {
                this.refs.jqxgrid.off('rowselect');
                var rows = this.refs.jqxgrid.getrows();
                var rowsCount = rows.length;
                for (var i = 0; i < rowsCount; i++) {
                    var value = this.refs.jqxgrid.getcellvalue(i, "_id");
                    if (value == meterId) {
                        this.refs.jqxgrid.selectrow(i);
                        break;
                    };
                };
            }

            return selectRowByMeterId;
        }()
    }, {
        key: 'getSelectedRowData',
        value: function () {
            function getSelectedRowData() {
                var getselectedrowindex = this.refs.jqxgrid.getselectedrowindex();
                console.log(getselectedrowindex);
                if (getselectedrowindex !== -1) {
                    // returns the selected row's data.
                    var selectedRowData = this.refs.jqxgrid.getrowdata(getselectedrowindex);
                    return selectedRowData;
                }
                return {};
            }

            return getSelectedRowData;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this4 = this;

                var datafields = [{ name: '_id', type: 'string' }, { name: 'meter_name', type: 'string' }, { name: 'declared_runs', type: 'Number' }, { name: 'is_declared', type: 'Boolean' }, { name: 'inn', type: 'Number' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Delete',
                    datafield: 'Delete',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Delete';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this4.refs.jqxgrid.getrowdata(row);
                            console.log(dataRecord.uid);
                            _MeterHelper2['default']['delete'](dataRecord.uid).then(function (res) {
                                _this4.props.onDataUpdate();
                            })['catch'](function (res) {
                                toastr.error("Cannot Remove Item.");
                            });
                        }

                        return buttonclick;
                    }()
                }, {
                    text: 'Edit',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellclassname: function () {
                        function cellclassname(row, column, value, data) {
                            // console.log(row, column , value, data)
                            if (data.is_declared) {
                                return "jqx_cell_disabled";
                            }
                        }

                        return cellclassname;
                    }(),
                    cellsrenderer: function () {
                        function cellsrenderer(row, column, value) {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this4.refs.jqxgrid.getrowdata(row);
                            console.log(dataRecord);
                            _this4.props.onEditButtonClick(dataRecord);
                        }

                        return buttonclick;
                    }()
                }, { text: 'Id', datafield: '_id', width: 50 }, { text: 'Meter', datafield: 'meter_name', width: 100 }, { text: 'Inn', datafield: 'inn', width: 50 }, { text: 'Runs', datafield: 'declared_runs', width: 50 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.dataAdapter)


                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid',
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 365, pageable: false,
                        sortable: true, altrows: false, enabletooltips: true,
                        editable: false,
                        filterable: false, showfilterrow: false
                    })
                );
            }

            return render;
        }()
    }]);
    return MeterGrid;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    meterId: null,
    entriesList: [],

    onDataUpdate: function () {
        function onDataUpdate(data) {}

        return onDataUpdate;
    }(),
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }(),
    onRowSelect: function () {
        function onRowSelect(rowdata) {}

        return onRowSelect;
    }()
}, _temp);
exports['default'] = MeterGrid;
module.exports = exports['default'];

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react_jqxwindow = __webpack_require__(83);

var _react_jqxwindow2 = _interopRequireDefault(_react_jqxwindow);

var _MeterHelper = __webpack_require__(76);

var _MeterHelper2 = _interopRequireDefault(_MeterHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MeterForm = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(MeterForm, _Component);

    function MeterForm(props) {
        (0, _classCallCheck3['default'])(this, MeterForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MeterForm.__proto__ || (0, _getPrototypeOf2['default'])(MeterForm)).call(this, props));

        _this.formSubmit = function (e) {
            e.preventDefault();

            if (!_this.props.matchId) {
                toastr.error("Please Select Match First.");
            }

            var data = jQuery(e.target).serialize();
            var dataJson = URI.parseQuery(data);
            // console.log(dataJson)
            _MeterHelper2['default'].save(dataJson, _this.props.id).then(function (response) {
                _this.refs.jqxWindow.close();
                _this.props.onFormSubmitted(response);
            })['catch'](function (error) {
                // console.log(error)
                toastr.error("Validation Failed");
            });
            return false;
        };

        _this.state = {
            scount: 0,
            item: {}
        };
        return _this;
    }

    (0, _createClass3['default'])(MeterForm, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                this.refs.jqxWindow.move($(window).width() / 2 - this.refs.jqxWindow.width() / 2, $(window).height() / 2 - this.refs.jqxWindow.height() / 2);

                this.refs.jqxWindow.on('close', function (event) {
                    _reactDom2['default'].unmountComponentAtNode(_reactDom2['default'].findDOMNode(_this2).parentNode);
                });

                if (this.props.id) {
                    _MeterHelper2['default'].show(this.props.id).then(function (res) {
                        _this2.setState({
                            scount: _this2.state.scount + 1,
                            item: res.data
                        });
                        console.log(res);
                    })['catch'](function (error) {
                        toastr.error("Validation Failed");
                    });
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {}

            return componentWillMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this3 = this;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        _react_jqxwindow2['default'],
                        { ref: 'jqxWindow', autoOpen: true,
                            width: 200, height: 150, position: { x: "50%", y: 175, left: "-250px" },
                            minWidth: 100, minHeight: 150, maxWidth: 200,
                            maxHeight: 150, showCollapseButton: false
                        },
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'span',
                                null,
                                'Meter Form ',
                                this.state.item.meter_name
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'form',
                                { ref: 'form', onSubmit: function () {
                                        function onSubmit(e) {
                                            return _this3.formSubmit(e);
                                        }

                                        return onSubmit;
                                    }(), className: 'sessionForm' },
                                _react2['default'].createElement('input', { type: 'hidden', name: 'match_id', defaultValue: this.props.matchId }),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'row11' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'col-md-611' },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'form-group' },
                                            _react2['default'].createElement(
                                                'label',
                                                null,
                                                'Meter Name'
                                            ),
                                            _react2['default'].createElement('input', { className: 'form-control form-control-sm', type: 'text', name: 'meter_name', defaultValue: this.state.item.meter_name, key: this.state.scount })
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'text-right' },
                                            _react2['default'].createElement(
                                                'button',
                                                { className: 'btn btn-primary btn-sm text-right', type: 'submit' },
                                                'Save'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return MeterForm;
}(_react.Component), _class.defaultProps = {
    matchId: null,
    onFormSubmitted: function () {
        function onFormSubmitted() {}

        return onFormSubmitted;
    }(),
    id: null
}, _temp);
exports['default'] = MeterForm;
module.exports = exports['default'];

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _TeamHelper = __webpack_require__(180);

var _TeamHelper2 = _interopRequireDefault(_TeamHelper);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Demo = function (_Component) {
    (0, _inherits3['default'])(Demo, _Component);

    function Demo() {
        (0, _classCallCheck3['default'])(this, Demo);
        return (0, _possibleConstructorReturn3['default'])(this, (Demo.__proto__ || (0, _getPrototypeOf2['default'])(Demo)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Demo, [{
        key: 'render',
        value: function () {
            function render() {

                var items = [{ id: "L", text: "laga" }, { id: "K", text: "khai" }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'h3',
                        null,
                        'Demo'
                    ),
                    _react2['default'].createElement(_CSelect2['default'], { items: items, selectedValue: 'K' })
                );
            }

            return render;
        }()
    }]);
    return Demo;
}(_react.Component);

exports['default'] = Demo;
module.exports = exports['default'];

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _ReportBalanceSheetGrid = __webpack_require__(409);

var _ReportBalanceSheetGrid2 = _interopRequireDefault(_ReportBalanceSheetGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportBalanceSheet = (_dec = (0, _mobxReact.inject)('reportStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(ReportBalanceSheet, _Component);

    function ReportBalanceSheet() {
        (0, _classCallCheck3['default'])(this, ReportBalanceSheet);
        return (0, _possibleConstructorReturn3['default'])(this, (ReportBalanceSheet.__proto__ || (0, _getPrototypeOf2['default'])(ReportBalanceSheet)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ReportBalanceSheet, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.reportStore.fetchAccountBalanceList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var accountBalanceList = this.props.reportStore.accountBalanceList;

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - Balance Sheet'
                    ),
                    _react2['default'].createElement(_ReportBalanceSheetGrid2['default'], { entriesList: accountBalanceList })
                );
            }

            return render;
        }()
    }]);
    return ReportBalanceSheet;
}(_react.Component)) || _class) || _class);
exports['default'] = ReportBalanceSheet;
module.exports = exports['default'];

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportBalanceSheetGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(ReportBalanceSheetGrid, _Component);

    function ReportBalanceSheetGrid(props) {
        (0, _classCallCheck3['default'])(this, ReportBalanceSheetGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ReportBalanceSheetGrid.__proto__ || (0, _getPrototypeOf2['default'])(ReportBalanceSheetGrid)).call(this, props));

        _this.refresh = function () {
            _this.dataAdapter.dataBind();
        };

        _this.exportReport = function () {
            // this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');

            axios.get('/exportreports/balance_sheet', {}).then(function (res) {
                window.location.href = res.data.fileDownloadUrl;
            });
        };

        return _this;
    }

    (0, _createClass3['default'])(ReportBalanceSheetGrid, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                console.log(this.props.entriesList.slice());

                var datafields = [{ name: 'account_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'bal', type: 'string' }, { name: 'account_id1', type: 'string' }, { name: 'account_name1', type: 'string' }, { name: 'bal1', type: 'string' }, { name: 'empty', type: 'string' }];

                var source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [

                // { text: 'AccountId', datafield: 'account_id', width: 100 },
                { text: 'Account', datafield: 'account_name', width: 150 }, { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: '', datafield: 'empty', width: 100, filterable: false },
                // { text: 'AccountId', datafield: 'account_id1', width: 100 },
                { text: 'Account', datafield: 'account_name1', width: 150 }, { text: 'Balance', datafield: 'bal1', width: 100, cellsformat: 'd2', aggregates: ['sum'] }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-1 text-right' },
                        _react2['default'].createElement(
                            'button',
                            { ref: 'pdfExport', onClick: this.exportReport, className: 'btn btn-sm btn-primary mr-1' },
                            _react2['default'].createElement('i', { className: 'fa fa-file-text-o' }),
                            ' Export'
                        )
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid',
                        width: "600", height: 400, source: this.dataAdapter,
                        pageable: false, sortable: false, altrows: false, enabletooltips: false,
                        editable: false, columns: columns, filterable: false, showfilterrow: false, columnsresize: true,
                        showstatusbar: true, showaggregates: true, statusbarheight: 25 })
                );
            }

            return render;
        }()
    }]);
    return ReportBalanceSheetGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: []
}, _temp);
exports['default'] = ReportBalanceSheetGrid;
module.exports = exports['default'];

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _JournalEntryListGrid = __webpack_require__(411);

var _JournalEntryListGrid2 = _interopRequireDefault(_JournalEntryListGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportJournalSummary = (_dec = (0, _mobxReact.inject)('journalStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(ReportJournalSummary, _Component);

    function ReportJournalSummary() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, ReportJournalSummary);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ReportJournalSummary.__proto__ || (0, _getPrototypeOf2['default'])(ReportJournalSummary)).call.apply(_ref, [this].concat(args))), _this), _this.exportToPdf = function () {
            _this.refs.entryGrid.refs.jqxgrid.exportdata('pdf', 'journal_summary');
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(ReportJournalSummary, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.journalStore.fetchEntriesList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                // console.log(nextProps.match.params.id, this.props.match.params.id)
                // if(nextProps.match.params.account_id!==this.props.match.params.account_id) {
                //     this.props.journalEntryStore.fetchListByAccount(nextProps.match.params.account_id, this.refs.showMondayFinalChk.checked)
                //     this.props.journalEntryStore.fetchAccountBalanceObject(nextProps.match.params.account_id)
                // }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var journalEntriesList = this.props.journalStore.journalEntriesList;


                return _react2['default'].createElement(
                    'div',
                    { className: 'page mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - Journal Summary'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-1 text-right' },
                        _react2['default'].createElement(
                            'button',
                            { ref: 'pdfExport', onClick: this.exportToPdf, className: 'btn btn-sm btn-primary mr-1' },
                            'Print'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-2' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2['default'].createElement(_JournalEntryListGrid2['default'], { ref: 'entryGrid', entriesList: journalEntriesList })
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return ReportJournalSummary;
}(_react.Component)) || _class) || _class);
exports['default'] = ReportJournalSummary;
module.exports = exports['default'];

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JournalEntryListGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(JournalEntryListGrid, _Component);

    function JournalEntryListGrid(props) {
        (0, _classCallCheck3['default'])(this, JournalEntryListGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (JournalEntryListGrid.__proto__ || (0, _getPrototypeOf2['default'])(JournalEntryListGrid)).call(this, props));

        _this.refresh = function () {
            _this.dataAdapter.dataBind();
        };

        return _this;
    }

    (0, _createClass3['default'])(JournalEntryListGrid, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log("DID Update")
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.props.entriesList.slice())

                var datafields = [{ name: '_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'dr_amt', type: 'string' }, { name: 'cr_amt', type: 'string' }, { name: 'bal', type: 'string' }, { name: 'narration', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'match_id', type: 'string' }, { name: 'journal_id', type: 'string' }, { name: 'created_at', type: 'date' }, { name: 'is_monday_final', type: 'boolean' }, { name: 'ref_type', type: 'string`' }, { name: 'ref_id', type: 'string' }];

                var source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                    // url: '/journal_entries?account_id='+this.props.accountId
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{ text: 'Id', datafield: '_id', width: 50 }, { text: 'Match Id', datafield: 'match_id', width: 100 }, { text: 'Ref. Type', datafield: 'ref_type', width: 100 }, { text: 'Ref. Id', datafield: 'ref_id', width: 100 }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' }, { text: 'Account', datafield: 'account_name', width: 150 }, { text: 'Narration', datafield: 'narration', width: 500 }, { text: 'Debit', datafield: 'dr_amt', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: 'Credit', datafield: 'cr_amt', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: 'Balance', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: 'Is Monday Final', datafield: 'is_monday_final', width: 100, columntype: 'checkbox', filterable: false }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid',
                        width: "100%", height: 400, source: this.dataAdapter,
                        pageable: true, sortable: true, altrows: false, enabletooltips: false,
                        editable: false, columns: columns, filterable: true, showfilterrow: true,
                        columnsresize: true,
                        showstatusbar: true, showaggregates: true, statusbarheight: 25, pagesize: 500 })
                );
            }

            return render;
        }()
    }]);
    return JournalEntryListGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onEditButtonClick: function () {
        function onEditButtonClick(data) {}

        return onEditButtonClick;
    }()
}, _temp);
exports['default'] = JournalEntryListGrid;
module.exports = exports['default'];

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportPlMatchAccountWise = (_dec = (0, _mobxReact.inject)('reportStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(ReportPlMatchAccountWise, _Component);

    function ReportPlMatchAccountWise() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, ReportPlMatchAccountWise);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ReportPlMatchAccountWise.__proto__ || (0, _getPrototypeOf2['default'])(ReportPlMatchAccountWise)).call.apply(_ref, [this].concat(args))), _this), _this.exportReport = function () {
            // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
            axios.get('/exportreports/pl_match_accountwise', {}).then(function (res) {
                window.location.href = res.data.fileDownloadUrl;
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(ReportPlMatchAccountWise, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.reportStore.fetchPlMatchAccountWiseList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice()
                // this.dataAdapter.dataBind()
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                this.source = {
                    datatype: 'json',
                    datafields: [{ name: 'match_id', type: 'string' }, { name: 'match_name', type: 'string' }, { name: 'account_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'bal', type: 'string' }],

                    // id: '_id',
                    // url: URL_MATCHES,
                    localdata: this.props.reportStore.plMatchAccountWiseList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{ text: 'MatchId', datafield: 'match_id', width: 100 }, { text: 'Match Name', datafield: 'match_name', width: 150 }, { text: 'AccountId', datafield: 'account_id', width: 100 }, { text: 'Account Name', datafield: 'account_name', width: 150 }, { text: 'Balance', datafield: 'bal', width: 100 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
                // plMatchWiseList when i call this variable then mobx will update the component otherwise not
                this.source.localdata = this.props.reportStore.plMatchAccountWiseList.slice();
                this.dataAdapter.dataBind();

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - PL Match AccountWise'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-1 text-right' },
                        _react2['default'].createElement(
                            'button',
                            { ref: 'pdfExport', onClick: this.exportReport, className: 'btn btn-sm btn-primary mr-1' },
                            _react2['default'].createElement('i', { className: 'fa fa-file-text-o' }),
                            ' Export'
                        )
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "600", height: 500,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return ReportPlMatchAccountWise;
}(_react.Component)) || _class) || _class);
exports['default'] = ReportPlMatchAccountWise;
module.exports = exports['default'];

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportPlMatchWise = (_dec = (0, _mobxReact.inject)('reportStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(ReportPlMatchWise, _Component);

    function ReportPlMatchWise() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, ReportPlMatchWise);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ReportPlMatchWise.__proto__ || (0, _getPrototypeOf2['default'])(ReportPlMatchWise)).call.apply(_ref, [this].concat(args))), _this), _this.exportReport = function () {
            // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
            axios.get('/exportreports/pl_matchwise', {}).then(function (res) {
                window.location.href = res.data.fileDownloadUrl;
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(ReportPlMatchWise, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.reportStore.fetchPlMatchWiseList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                // console.log(this.props.reportStore.plMatchWiseList.slice())
                // this.source.localdata = this.props.reportStore.plMatchWiseList.slice()
                // this.dataAdapter.dataBind()
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                this.source = {
                    datatype: 'json',
                    datafields: [{ name: 'match_id', type: 'string' }, { name: 'match_name', type: 'string' }, { name: 'comm_match', type: 'string' }, { name: 'patti_match', type: 'string' }, { name: 'pl_match', type: 'string' }, { name: 'comm_session', type: 'string' }, { name: 'patti_session', type: 'string' }, { name: 'pl_session', type: 'string' }, { name: 'bal', type: 'string' }],

                    // id: '_id',
                    // url: URL_MATCHES,
                    localdata: this.props.reportStore.plMatchWiseList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{ text: 'MatchId', datafield: 'match_id', width: 100 }, { text: 'Match Name', datafield: 'match_name', width: 150 }, { text: 'Match - Comm', datafield: 'comm_match', width: 150 }, { text: 'Match - Patti', datafield: 'patti_match', width: 100 }, { text: 'Match - PL', datafield: 'pl_match', width: 100 }, { text: 'Session - Comm', datafield: 'comm_session', width: 150 }, { text: 'Session - Patti', datafield: 'patti_session', width: 150 }, { text: 'Session - PL', datafield: 'pl_session', width: 100 }, { text: 'Balance', datafield: 'bal', width: 100 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
                // plMatchWiseList when i call this variable then mobx will update the component otherwise not

                this.source.localdata = this.props.reportStore.plMatchWiseList.slice();
                this.dataAdapter.dataBind();

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - PL MatchWise'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-1 text-right' },
                        _react2['default'].createElement(
                            'button',
                            { ref: 'pdfExport', onClick: this.exportReport, className: 'btn btn-sm btn-primary mr-1' },
                            _react2['default'].createElement('i', { className: 'fa fa-file-text-o' }),
                            ' Export'
                        )
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "1100", height: 500, pagesize: 100,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return ReportPlMatchWise;
}(_react.Component)) || _class) || _class);
exports['default'] = ReportPlMatchWise;
module.exports = exports['default'];

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _dec3, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _AllMatchGrid = __webpack_require__(415);

var _AllMatchGrid2 = _interopRequireDefault(_AllMatchGrid);

var _ReportConnectGrid = __webpack_require__(416);

var _ReportConnectGrid2 = _interopRequireDefault(_ReportConnectGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportConnect = (_dec = (0, _mobxReact.inject)('reportStore'), _dec2 = (0, _mobxReact.inject)('sessionStore'), _dec3 = (0, _mobxReact.inject)('matchStore'), _dec(_class = _dec2(_class = _dec3(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(ReportConnect, _Component);

    function ReportConnect() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, ReportConnect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ReportConnect.__proto__ || (0, _getPrototypeOf2['default'])(ReportConnect)).call.apply(_ref, [this].concat(args))), _this), _this.connectReport = function () {
            var items = _this.refs.allMatchGrid.getSelectedRowsData();
            // console.table(items)
            _this.props.reportStore.fetchConnectReportList(items);
        }, _this.exportConnectReport = function () {
            // this.refs.jqxgrid.exportdata('pdf', 'balance_sheet');

            var filters = _this.refs.allMatchGrid.getSelectedRowsData();

            axios({
                method: 'post',
                url: "/exportreports/connect_report",
                data: filters
            }).then(function (res) {
                window.location.href = res.data.fileDownloadUrl;
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(ReportConnect, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // this.props.matchStore.fetchList()
                // this.props.sessionStore.fetchList()
                this.props.reportStore.fetchConnectListMatches();
                this.props.reportStore.fetchConnectReportList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // const {matchList} = this.props.matchStore
                // const {sessionList} = this.props.sessionStore
                var _props$reportStore = this.props.reportStore,
                    connectListMatches = _props$reportStore.connectListMatches,
                    connectReportList = _props$reportStore.connectReportList;


                return _react2['default'].createElement(
                    'div',
                    { className: 'page mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - Connect'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: '' },
                        _react2['default'].createElement(
                            'div',
                            { className: '' },
                            _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-sm btn-primary', onClick: this.connectReport },
                                'Connect'
                            ),
                            _react2['default'].createElement(_AllMatchGrid2['default'], { ref: 'allMatchGrid', entriesList: connectListMatches })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: '' },
                            _react2['default'].createElement(_ReportConnectGrid2['default'], { entriesList: connectReportList, exportReportClick: this.exportConnectReport })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return ReportConnect;
}(_react.Component)) || _class) || _class) || _class) || _class);
exports['default'] = ReportConnect;
module.exports = exports['default'];

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AllMatchGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(AllMatchGrid, _Component);

    function AllMatchGrid(props) {
        (0, _classCallCheck3['default'])(this, AllMatchGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AllMatchGrid.__proto__ || (0, _getPrototypeOf2['default'])(AllMatchGrid)).call(this, props));

        _this.getSelectedRowsData = function () {
            var getselectedrowindexes = _this.refs.jqxgrid.getselectedrowindexes();
            // console.log(getselectedrowindexes)
            var selectedRowsData = [];
            if (getselectedrowindexes.length > 0) {

                selectedRowsData = getselectedrowindexes.map(function (item, i) {
                    return _this.refs.jqxgrid.getrowdata(item);
                });
                return selectedRowsData;
            }

            return selectedRowsData;
        };

        return _this;
    }

    (0, _createClass3['default'])(AllMatchGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                this.source = {
                    datatype: 'json',
                    datafields: [{ name: 'created_at', type: 'date' }, { name: 'match_id', type: 'string' }, { name: 'id', type: 'string' }, { name: 'name', type: 'string' }, { name: 'ref_type', type: 'string' }, { name: 'is_declared', type: 'boolean' }],

                    id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{ text: 'MatchId', datafield: 'match_id', width: 100 }, { text: 'Dated', datafield: 'created_at', width: 100, cellsformat: 'dd/MM/yyyy' }, { text: 'Id', datafield: 'id', width: 50 }, { text: 'Name', datafield: 'name', width: 150 }, { text: 'Type', datafield: 'ref_type', width: 150 }, { text: 'Is Declared', datafield: 'is_declared', width: 100, columntype: 'checkbox' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "700", height: 150,
                        pageable: false, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: false, showfilterrow: false,
                        selectionmode: 'checkbox' })
                );
            }

            return render;
        }()
    }]);
    return AllMatchGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = AllMatchGrid;
module.exports = exports['default'];

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReportConnectGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(ReportConnectGrid, _Component);

    function ReportConnectGrid(props) {
        (0, _classCallCheck3['default'])(this, ReportConnectGrid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ReportConnectGrid.__proto__ || (0, _getPrototypeOf2['default'])(ReportConnectGrid)).call(this, props));

        _this.refresh = function () {
            _this.dataAdapter.dataBind();
        };

        return _this;
    }

    (0, _createClass3['default'])(ReportConnectGrid, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // console.log(this.props.entriesList.slice())

                var datafields = [{ name: 'account_id', type: 'string' }, { name: 'account_name', type: 'string' }, { name: 'bal', type: 'string' }, { name: 'patti_amt', type: 'string' }, { name: 'after_patti', type: 'string' }, { name: 'account_id1', type: 'string' }, { name: 'account_name1', type: 'string' }, { name: 'bal1', type: 'string' }, { name: 'after_patti1', type: 'string' }, { name: 'empty', type: 'string' }];

                var source = {
                    datatype: 'json',
                    datafields: datafields,
                    // id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(source);

                var columns = [{ text: 'AccountId', datafield: 'account_id', width: 100 }, { text: 'Account', datafield: 'account_name', width: 150 }, { text: 'Amount', datafield: 'bal', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: 'With Patti', datafield: 'after_patti', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: '', datafield: 'empty', width: 200, filterable: false }, { text: 'AccountId', datafield: 'account_id1', width: 100 }, { text: 'Account', datafield: 'account_name1', width: 150 }, { text: 'Amount', datafield: 'bal1', width: 100, cellsformat: 'd2', aggregates: ['sum'] }, { text: 'With Patti', datafield: 'after_patti1', width: 100, cellsformat: 'd2', aggregates: ['sum'] }];

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'mt-3 mb-1 text-left' },
                        _react2['default'].createElement(
                            'button',
                            { ref: 'pdfExport', onClick: this.props.exportReportClick, className: 'btn btn-sm btn-primary mr-1' },
                            _react2['default'].createElement('i', { className: 'fa fa-file-text-o' }),
                            ' Export'
                        )
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid',
                        width: "1100", height: 400, source: this.dataAdapter,
                        pageable: false, sortable: false, altrows: false, enabletooltips: false,
                        editable: false, columns: columns, filterable: false, showfilterrow: false, columnsresize: true,
                        showstatusbar: true, showaggregates: true, statusbarheight: 25 })
                );
            }

            return render;
        }()
    }]);
    return ReportConnectGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    exportReportClick: function () {
        function exportReportClick() {}

        return exportReportClick;
    }()
}, _temp);
exports['default'] = ReportConnectGrid;
module.exports = exports['default'];

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _BackupDbGrid = __webpack_require__(418);

var _BackupDbGrid2 = _interopRequireDefault(_BackupDbGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BackupDb = (_dec = (0, _mobxReact.inject)('backupStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(BackupDb, _Component);

    function BackupDb() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, BackupDb);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = BackupDb.__proto__ || (0, _getPrototypeOf2['default'])(BackupDb)).call.apply(_ref, [this].concat(args))), _this), _this.backupDb = function () {
            axios.get('/backups/backup_db').then(function (res) {
                _this.props.backupStore.fetchDbBackupList();
            })['catch'](function () {
                return _this.fetched = false;
            });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(BackupDb, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.backupStore.fetchDbBackupList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var dbBackupList = this.props.backupStore.dbBackupList;

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Backup Database'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mb-1' },
                        _react2['default'].createElement(
                            'button',
                            { className: 'btn btn-sm btn-primary', onClick: this.backupDb },
                            'Backup DB'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2['default'].createElement(_BackupDbGrid2['default'], { entriesList: dbBackupList, onDataUpdate: this.backupDbGrid_onDataUpdate })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return BackupDb;
}(_react.Component)) || _class) || _class);
exports['default'] = BackupDb;
module.exports = exports['default'];

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BackupDbGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(BackupDbGrid, _Component);

    function BackupDbGrid(props) {
        (0, _classCallCheck3['default'])(this, BackupDbGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (BackupDbGrid.__proto__ || (0, _getPrototypeOf2['default'])(BackupDbGrid)).call(this, props));
    }

    (0, _createClass3['default'])(BackupDbGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {}

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [{ name: 'name', type: 'string' }, { name: 'created_at', type: 'date' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Restore',
                    datafield: 'Restore',
                    columntype: 'button',
                    width: 100,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Restore';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            axios.get('/backups/restore_db', {
                                params: {
                                    dirname: dataRecord.name
                                }
                            }).then(function (res) {
                                // this.sessionList = res.data
                            })['catch'](function () {
                                return _this2.fetched = false;
                            });
                        }

                        return buttonclick;
                    }()
                }, { text: 'Created At', datafield: 'created_at', width: 200, cellsformat: 'dd/MM/yyyy Thh:mm tt' }, { text: 'Name', datafield: 'name', width: 150 }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', key1: Math.random(),
                        source: this.dataAdapter, columns: this.columns,
                        width: "450", height: 600, pageable: false, pagermode: 'simple', pagesize: 1000,
                        sortable: true, altrows: false, enabletooltips: true,
                        editable: false,
                        filterable: false, showfilterrow: false })
                );
            }

            return render;
        }()
    }]);
    return BackupDbGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = BackupDbGrid;
module.exports = exports['default'];

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _mobxReact = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ServerStatus = (_dec = (0, _mobxReact.inject)('serverStatusStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
				(0, _inherits3['default'])(ServerStatus, _Component);

				function ServerStatus() {
								var _ref;

								var _temp, _this, _ret;

								(0, _classCallCheck3['default'])(this, ServerStatus);

								for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
												args[_key] = arguments[_key];
								}

								return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ServerStatus.__proto__ || (0, _getPrototypeOf2['default'])(ServerStatus)).call.apply(_ref, [this].concat(args))), _this), _this.checkStatuses = function () {
												_this.props.serverStatusStore.fetchDbServerStatus();
								}, _this.startDbServer = function () {
												// console.log('startDbServer')
												axios.get('/others/server_startdb').then(function (res) {
																setTimeout(function () {
																				_this.props.serverStatusStore.fetchDbServerStatus();
																}, 2000);
												});
								}, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
				}

				(0, _createClass3['default'])(ServerStatus, [{
								key: 'componentDidMount',
								value: function () {
												function componentDidMount() {
																this.props.serverStatusStore.fetchDbServerStatus();
												}

												return componentDidMount;
								}()
				}, {
								key: 'render',
								value: function () {
												function render() {
																var dbServerStatus = this.props.serverStatusStore.dbServerStatus;

																return _react2['default'].createElement(
																				'div',
																				{ className: 'page mx-w-600px mx-2' },
																				_react2['default'].createElement(
																								'h6',
																								null,
																								_react2['default'].createElement('i', { className: 'fa fa-server' }),
																								' Server Status'
																				),
																				_react2['default'].createElement(
																								'div',
																								{ className: 'row' },
																								_react2['default'].createElement(
																												'div',
																												{ className: 'col-md-12' },
																												_react2['default'].createElement(
																																'div',
																																{ className: 'mt-2 mb-2' },
																																_react2['default'].createElement(
																																				'button',
																																				{ className: 'btn btn-sm btn-primary', onClick: this.checkStatuses },
																																				'Check Statues'
																																)
																												),
																												_react2['default'].createElement(
																																'table',
																																{ className: 'table table-striped' },
																																_react2['default'].createElement(
																																				'thead',
																																				null,
																																				_react2['default'].createElement(
																																								'tr',
																																								null,
																																								_react2['default'].createElement(
																																												'th',
																																												{ scope: 'col' },
																																												'#'
																																								),
																																								_react2['default'].createElement(
																																												'th',
																																												{ scope: 'col' },
																																												'Type'
																																								),
																																								_react2['default'].createElement(
																																												'th',
																																												{ scope: 'col' },
																																												'Status'
																																								),
																																								_react2['default'].createElement('th', { scope: 'col' })
																																				)
																																),
																																_react2['default'].createElement(
																																				'tbody',
																																				null,
																																				_react2['default'].createElement(
																																								'tr',
																																								null,
																																								_react2['default'].createElement(
																																												'th',
																																												{ scope: 'row' },
																																												'1'
																																								),
																																								_react2['default'].createElement(
																																												'td',
																																												null,
																																												'DB Server'
																																								),
																																								_react2['default'].createElement(
																																												'td',
																																												{ className: 'db_server_status' },
																																												dbServerStatus
																																								),
																																								_react2['default'].createElement(
																																												'td',
																																												null,
																																												dbServerStatus == 0 ? _react2['default'].createElement(
																																																'button',
																																																{ className: 'btn btn-sm btn-primary', onClick: this.startDbServer },
																																																'Start'
																																												) : ''
																																								)
																																				)
																																)
																												)
																								)
																				)
																);
												}

												return render;
								}()
				}]);
				return ServerStatus;
}(_react.Component)) || _class) || _class);
exports['default'] = ServerStatus;
module.exports = exports['default'];

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _UserGrid = __webpack_require__(421);

var _UserGrid2 = _interopRequireDefault(_UserGrid);

var _UserForm = __webpack_require__(422);

var _UserForm2 = _interopRequireDefault(_UserForm);

var _Constant = __webpack_require__(10);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var User = (_dec = (0, _mobxReact.inject)('globalStore'), _dec2 = (0, _mobxReact.inject)('userStore'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(User, _Component);

    function User(props) {
        (0, _classCallCheck3['default'])(this, User);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (User.__proto__ || (0, _getPrototypeOf2['default'])(User)).call(this, props));

        _this.onFormSubmit = function () {
            // console.log(this.props.match.params.id)
            if (typeof _this.props.match.params.id !== "undefined" && _this.props.match.params.id) {
                // console.log('1')
                // this.props.userStore.user = {}
                _this.props.userStore.fetch(_this.props.match.params.id);
            } else {
                // console.log('2')
                _this.props.userStore.user = {};
                // this.props.userStore.fetch(this.props.match.params.id)
            }
            _this.props.userStore.fetchList();
        };

        _this.editItem = function (id) {
            // console.log(id)
            _this.props.history.push(_Constant.APP_URL_USERS + "/" + id);
        };

        _this.cancelFormClick = function () {
            // this.resetForm()
            _this.props.userStore.user = {};
            _this.props.history.push(_Constant.APP_URL_USERS);
        };

        _this.userGrid_onDataUpdate = function () {
            _this.props.userStore.fetchList();
            if (_this.props.match.params.id) {
                _this.props.userStore.fetch(_this.props.match.params.id);
            }
        };

        return _this;
    }

    (0, _createClass3['default'])(User, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.userStore.fetchList();
                if (this.props.match.params.id) {
                    this.props.userStore.fetch(this.props.match.params.id);
                }
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillReceiveProps',
        value: function () {
            function componentWillReceiveProps(nextProps) {
                // console.log(nextProps.match.params.id, this.props.match.params.id)
                if (nextProps.match.params.id !== this.props.match.params.id) {
                    this.props.userStore.fetch(nextProps.match.params.id);
                }
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                if (!_auth2['default'].is_admin()) {
                    return null;
                }
                var _props$userStore = this.props.userStore,
                    userList = _props$userStore.userList,
                    user = _props$userStore.user;

                return _react2['default'].createElement(
                    'div',
                    { className: 'page1200 mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-user' }),
                        ' User'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2['default'].createElement(_UserGrid2['default'], { entriesList: userList, editItem: this.editItem, onDataUpdate: this.userGrid_onDataUpdate })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-8' },
                            _react2['default'].createElement(_UserForm2['default'], { ref: 'userForm',
                                item: user, accountsList: userList,
                                onSubmit: this.onFormSubmit, cancelFormClick: function () {
                                    function cancelFormClick() {
                                        return _this2.cancelFormClick();
                                    }

                                    return cancelFormClick;
                                }() })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return User;
}(_react.Component)) || _class) || _class) || _class);
exports['default'] = User;
module.exports = exports['default'];

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UserGrid = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(UserGrid, _Component);

    function UserGrid(props) {
        (0, _classCallCheck3['default'])(this, UserGrid);
        return (0, _possibleConstructorReturn3['default'])(this, (UserGrid.__proto__ || (0, _getPrototypeOf2['default'])(UserGrid)).call(this, props));
    }

    (0, _createClass3['default'])(UserGrid, [{
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.source.localdata = this.props.entriesList.slice();
                this.dataAdapter.dataBind();
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {}

            return componentDidMount;
        }()
    }, {
        key: 'initDataAdapter',
        value: function () {
            function initDataAdapter() {
                var _this2 = this;

                var datafields = [
                // { name: '_id', type: 'string' },
                { name: 'username', type: 'string' }, { name: 'fullname', type: 'string' }, { name: 'status', type: 'boolean' }];

                this.source = {
                    datatype: 'json',
                    datafields: datafields,
                    id: '_id',
                    localdata: this.props.entriesList.slice()
                };

                this.dataAdapter = new $.jqx.dataAdapter(this.source);

                this.columns = [{
                    text: 'Edit',
                    datafield: 'Edit',
                    columntype: 'button',
                    width: 50,
                    filterable: false,
                    cellsrenderer: function () {
                        function cellsrenderer() {
                            return 'Edit';
                        }

                        return cellsrenderer;
                    }(),
                    buttonclick: function () {
                        function buttonclick(row) {
                            var dataRecord = _this2.refs.jqxgrid.getrowdata(row);
                            _this2.props.editItem(dataRecord.uid);
                        }

                        return buttonclick;
                    }()
                },
                // { text: 'Id', datafield: '_id', width: 70 },
                { text: 'UserName', datafield: 'username', width: 100 }, { text: 'FullName', datafield: 'fullname', width: 150 }, { text: 'Status', datafield: 'status', width: 50, columntype: 'checkbox' }];
            }

            return initDataAdapter;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_react_jqxgrid2['default'], { ref: 'jqxgrid', key1: Math.random(),
                        source: this.dataAdapter, columns: this.columns,
                        width: "100%", height: 600, pageable: false, pagermode: 'simple', pagesize: 1000,
                        sortable: true, altrows: true, enabletooltips: true,
                        editable: false,
                        filterable: false, showfilterrow: false })
                );
            }

            return render;
        }()
    }]);
    return UserGrid;
}(_react.Component), _class.defaultProps = {
    entriesList: [],
    onDataUpdate: function () {
        function onDataUpdate() {}

        return onDataUpdate;
    }(),
    editItem: function () {
        function editItem(account_id) {}

        return editItem;
    }()

}, _temp);
exports['default'] = UserGrid;
module.exports = exports['default'];

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _CSelect = __webpack_require__(39);

var _CSelect2 = _interopRequireDefault(_CSelect);

var _UserHelper = __webpack_require__(77);

var _UserHelper2 = _interopRequireDefault(_UserHelper);

var _Constant = __webpack_require__(10);

var _GlobalHelper = __webpack_require__(47);

var _GlobalHelper2 = _interopRequireDefault(_GlobalHelper);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UserForm = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(UserForm, _Component);

    function UserForm(props) {
        (0, _classCallCheck3['default'])(this, UserForm);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (UserForm.__proto__ || (0, _getPrototypeOf2['default'])(UserForm)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();

            if (!_auth2['default'].is_admin()) {
                toastr.error('Permission denied.');
                return;
            }

            if (!$(_this.refs.form).valid()) {
                return false;
            }
            var data = jQuery(_this.refs.form).serialize();
            _UserHelper2['default'].save(data, _this.props.item._id).then(function (response) {
                _this.props.onSubmit();
            })['catch'](function (err) {
                toastr.error(err.response.data.message);
            });
        };

        _this.defaultItem = {
            _id: null,
            fullname: null,
            username: null,
            password: null,
            status: true

        };
        return _this;
    }

    (0, _createClass3['default'])(UserForm, [{
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {
                this.mtrap = _GlobalHelper2['default'].mounstrapFormInit(this.refs.form);
            }

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var item = (0, _assign2['default'])({}, this.defaultItem, this.props.item || {});
                return _react2['default'].createElement(
                    'div',
                    { className: '' },
                    _react2['default'].createElement(
                        'form',
                        { className: 'moustrapform', ref: 'form', key: Math.random() },
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-4' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Name'
                                ),
                                _react2['default'].createElement('input', { className: 'form-control form-control-sm error-hide required', type: 'text', name: 'fullname', defaultValue: item.fullname })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-4' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'User Name'
                                ),
                                _react2['default'].createElement('input', { className: 'form-control form-control-sm error-hide required', type: 'text', name: 'username', defaultValue: item.username })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-4' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Password'
                                ),
                                _react2['default'].createElement('input', { className: 'form-control form-control-sm error-hide', type: 'text', name: 'password' })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'form-row' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group col-md-1' },
                                _react2['default'].createElement(
                                    'label',
                                    { className: 'col-form-label' },
                                    'Status:'
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2['default'].createElement(
                                        _CSelect2['default'],
                                        { className: 'form-control form-control-sm', name: 'status', value: item.status, items: _Constant.LIST_STATUS_BOOLEAN },
                                        ' '
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mt-3 text-right col-md-4' },
                            _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-primary btn-sm', type: 'button', onClick: this.onSubmit },
                                _react2['default'].createElement('i', { className: 'fa fa-floppy-o' }),
                                ' Save'
                            ),
                            _react2['default'].createElement(
                                'button',
                                { className: 'btn btn-danger btn-sm ml-1', type: 'button', onClick: this.props.cancelFormClick },
                                _react2['default'].createElement('i', { className: 'fa fa-undo' }),
                                ' Cancel'
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return UserForm;
}(_react.Component), _class.defaultProps = {
    onSubmit: function () {
        function onSubmit() {}

        return onSubmit;
    }(),
    cancelFormClick: function () {
        function cancelFormClick() {}

        return cancelFormClick;
    }(),
    item: {}
}, _temp);
exports['default'] = UserForm;
module.exports = exports['default'];

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _dec, _class2;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(13);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RenderTable = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(RenderTable, _Component);

    function RenderTable() {
        (0, _classCallCheck3['default'])(this, RenderTable);
        return (0, _possibleConstructorReturn3['default'])(this, (RenderTable.__proto__ || (0, _getPrototypeOf2['default'])(RenderTable)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RenderTable, [{
        key: 'render_matchEntry',
        value: function () {
            function render_matchEntry(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match Name'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Party'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.account_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Rate'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.rate
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Amount'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.amount
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'LK'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.lk
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Team'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.team_name
                            )
                        )
                    )
                );
            }

            return render_matchEntry;
        }()
    }, {
        key: 'render_sessionEntry',
        value: function () {
            function render_sessionEntry(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match Name'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Session'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.session_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Party'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.account_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Rate'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.rate
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Amount'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.amount
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Runs'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.runs
                            )
                        )
                    )
                );
            }

            return render_sessionEntry;
        }()
    }, {
        key: 'render_meterEntry',
        value: function () {
            function render_meterEntry(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match Name'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Meter'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.meter_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Party'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.account_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Rate'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.rate
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Runs'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.runs
                            )
                        )
                    )
                );
            }

            return render_meterEntry;
        }()
    }, {
        key: 'render_match',
        value: function () {
            function render_match(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data._id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match Name'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Winner Team'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.team_name
                            )
                        )
                    )
                );
            }

            return render_match;
        }()
    }, {
        key: 'render_session',
        value: function () {
            function render_session(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'SessionId'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data._id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Session'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.session_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Declared Runs'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.declared_runs
                            )
                        )
                    )
                );
            }

            return render_session;
        }()
    }, {
        key: 'render_meter',
        value: function () {
            function render_meter(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'MeterId'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data._id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Meter'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.meter_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Declared Runs'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.declared_runs
                            )
                        )
                    )
                );
            }

            return render_meter;
        }()
    }, {
        key: 'render_matchTeam',
        value: function () {
            function render_matchTeam(data) {
                return _react2['default'].createElement(
                    'table',
                    { className: 'table table-striped table-sm' },
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Id'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data._id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Status'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.status
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match ID'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_id
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Match Name'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.match_name
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            _react2['default'].createElement(
                                'th',
                                null,
                                'Team'
                            ),
                            _react2['default'].createElement(
                                'td',
                                null,
                                data.team_name
                            )
                        )
                    )
                );
            }

            return render_matchTeam;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _props$record = this.props.record,
                    data = _props$record.data,
                    type = _props$record.type;


                if (type == "Match Entry") {
                    return this.render_matchEntry(data);
                }

                if (type == "Session Entry") {
                    return this.render_sessionEntry(data);
                }

                if (type == "Meter Entry") {
                    return this.render_meterEntry(data);
                }

                if (type == "Match") {
                    return this.render_match(data);
                }

                if (type == "Session") {
                    return this.render_session(data);
                }

                if (type == "Meter") {
                    return this.render_meter(data);
                }

                if (type == "Match Team") {
                    return this.render_matchTeam(data);
                }
            }

            return render;
        }()
    }]);
    return RenderTable;
}(_react.Component), _class.defaultProps = {
    record: {}
}, _temp);
var ActivityLog = (_dec = (0, _mobxReact.inject)('reportStore'), _dec(_class2 = (0, _mobxReact.observer)(_class2 = function (_Component2) {
    (0, _inherits3['default'])(ActivityLog, _Component2);

    function ActivityLog() {
        var _ref;

        var _temp2, _this2, _ret;

        (0, _classCallCheck3['default'])(this, ActivityLog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp2 = (_this2 = (0, _possibleConstructorReturn3['default'])(this, (_ref = ActivityLog.__proto__ || (0, _getPrototypeOf2['default'])(ActivityLog)).call.apply(_ref, [this].concat(args))), _this2), _this2.renderTable = function (item) {
            if (item.type == "Match") {
                return _react2['default'].createElement(
                    'div',
                    null,
                    item.type
                );
            }

            return null;
        }, _this2.onDataCellHover = function (row) {
            console.log('Hovered');
        }, _this2.initDataAdapter = function () {
            _this2.source = {
                datatype: 'json',
                datafields: [{ name: 'created_at', type: 'date' }, { name: 'type', type: 'string' }, { name: 'action', type: 'string' }, { name: 'username', type: 'string' }, { name: 'description', type: 'string' }, { name: 'data' }],

                // id: '_id',
                // url: URL_MATCHES,
                localdata: _this2.props.reportStore.activityLogList.slice()
            };

            _this2.dataAdapter = new $.jqx.dataAdapter(_this2.source);

            _this2.columns = [{ text: 'Created At', datafield: 'created_at', width: 150, cellsformat: 'dd/MM/yyyy Thh:mm tt' }, { text: 'Type', datafield: 'type', width: 100 }, { text: 'Action', datafield: 'action', width: 100 }, { text: 'UserName', datafield: 'username', width: 100 }, {
                text: '',
                datafield: 'Edit',
                columntype: 'custom',
                width: 100,
                filterable: false,
                cellsrenderer: function () {
                    function cellsrenderer(row, column, value) {
                        // console.log(row)
                        return '<div class="itemPopoverParent" onmouseover="onDataCellHover(this,' + row + ')">View Data</div>';
                    }

                    return cellsrenderer;
                }()
                // buttonclick: (row) => {
                //     let dataRecord = this.refs.jqxgrid.getrowdata(row);
                //     console.log(dataRecord)
                // }
            }, { text: 'Description', datafield: 'description', width: 500 }];
        }, _temp2), (0, _possibleConstructorReturn3['default'])(_this2, _ret);
    }

    (0, _createClass3['default'])(ActivityLog, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.reportStore.fetchActivityLogList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                var _this3 = this;

                window.onDataCellHover = function (cell, row) {
                    // console.log(row)
                    var dataRecord = _this3.refs.jqxgrid.getrowdata(row);

                    var div = document.createElement('div');
                    _reactDom2['default'].render(_react2['default'].createElement(RenderTable, { record: dataRecord }), div);
                    var html = jQuery(div).html();

                    jQuery(cell).jqxTooltip({
                        content: html,
                        position: 'top',
                        name: 'movieTooltip',
                        width: 300
                    });
                    jQuery(cell).jqxTooltip('open');
                };
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {}

            return componentDidUpdate;
        }()

        // exportReport = () => {
        //     // this.refs.jqxgrid.exportdata('pdf', 'pl_match_wise');
        //     axios.get('/exportreports/pl_matchwise', {
        //     })
        //     .then((res) => {
        //         window.location.href = res.data.fileDownloadUrl  
        //     })
        // }


    }, {
        key: 'render',
        value: function () {
            function render() {
                // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
                // plMatchWiseList when i call this variable then mobx will update the component otherwise not

                this.source.localdata = this.props.reportStore.activityLogList.slice();
                this.dataAdapter.dataBind();

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - User Activity Log'
                    ),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "1100", height: 500, pagesize: 100,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return ActivityLog;
}(_react.Component)) || _class2) || _class2);
exports['default'] = ActivityLog;
module.exports = exports['default'];

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(13);

var _react_jqxgrid = __webpack_require__(9);

var _react_jqxgrid2 = _interopRequireDefault(_react_jqxgrid);

var _LiveCommentary = __webpack_require__(186);

var _LiveCommentary2 = _interopRequireDefault(_LiveCommentary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LiveMatchSchedule = (_dec = (0, _mobxReact.inject)('liveApiStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3['default'])(LiveMatchSchedule, _Component);

    function LiveMatchSchedule() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, LiveMatchSchedule);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = LiveMatchSchedule.__proto__ || (0, _getPrototypeOf2['default'])(LiveMatchSchedule)).call.apply(_ref, [this].concat(args))), _this), _this.initDataAdapter = function () {
            _this.source = {
                datatype: 'json',
                datafields: [{ name: '_id', type: 'number' }, { name: 'dated', type: 'date' }, { name: 'match_name', type: 'string' }, { name: 'time', type: 'string' }, { name: 'series_name', type: 'string' }, { name: 'location', type: 'string' }],

                id: '_id',
                // url: URL_MATCHES,
                localdata: _this.props.liveApiStore.matchScheduleList.slice()
            };

            _this.dataAdapter = new $.jqx.dataAdapter(_this.source);

            _this.columns = [{ text: 'ID', datafield: '_id', width: 70 }, { text: 'Date', datafield: 'dated', width: 150, cellsformat: 'dd/MM/yyyy Thh:mm tt' }, { text: 'Time', datafield: 'time', width: 70 }, { text: 'Match', datafield: 'match_name', width: 250 }, { text: 'Series', datafield: 'series_name', width: 250 }, { text: 'Location', datafield: 'location', width: 250 }];
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(LiveMatchSchedule, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                this.props.liveApiStore.fetchMatchScheduleList();
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentWillMount',
        value: function () {
            function componentWillMount() {
                this.initDataAdapter();
            }

            return componentWillMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function () {
            function componentDidUpdate() {}

            return componentDidUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                // this i put here becuase mobx does not call componentDidUpdate until you call the variable in render method for eg.
                // plMatchWiseList when i call this variable then mobx will update the component otherwise not

                this.source.localdata = this.props.liveApiStore.matchScheduleList.slice();
                this.dataAdapter.dataBind();

                return _react2['default'].createElement(
                    'div',
                    { className: 'page d-inline-block mx-2' },
                    _react2['default'].createElement(
                        'h6',
                        null,
                        _react2['default'].createElement('i', { className: 'fa fa-bar-chart' }),
                        ' Report - User Activity Log'
                    ),
                    _react2['default'].createElement(_LiveCommentary2['default'], null),
                    _react2['default'].createElement(_react_jqxgrid2['default'], { key: Math.random(), ref: 'jqxgrid', source: this.dataAdapter, columns: this.columns,
                        width: "1100", height: 500, pagesize: 100,
                        pageable: true, sortable: true, altrows: true, enabletooltips: true,
                        editable: false, filterable: true, showfilterrow: true })
                );
            }

            return render;
        }()
    }]);
    return LiveMatchSchedule;
}(_react.Component)) || _class) || _class);
exports['default'] = LiveMatchSchedule;
module.exports = exports['default'];

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RemoveAllRecord = function (_Component) {
				(0, _inherits3["default"])(RemoveAllRecord, _Component);

				function RemoveAllRecord() {
								var _ref;

								var _temp, _this, _ret;

								(0, _classCallCheck3["default"])(this, RemoveAllRecord);

								for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
												args[_key] = arguments[_key];
								}

								return _ret = (_temp = (_this = (0, _possibleConstructorReturn3["default"])(this, (_ref = RemoveAllRecord.__proto__ || (0, _getPrototypeOf2["default"])(RemoveAllRecord)).call.apply(_ref, [this].concat(args))), _this), _this.removeAllRecords = function () {
												var r = confirm("Are you sure!");
												if (r == true) {
																axios({
																				method: 'get',
																				headers: Auth.header(),
																				url: "/others/remove_all_records"
																}).then(function (res) {
																				toastr.success(res.data.message);
																})["catch"](function (err) {
																				toastr.error(err.response.data.message);
																});
												}
								}, _this.removeLedgerRecords = function () {
												var r = confirm("Are you sure!");
												if (r == true) {
																axios({
																				method: 'get',
																				headers: Auth.header(),
																				url: "/others/remove_ledger_records"
																}).then(function (res) {
																				toastr.success(res.data.message);
																})["catch"](function (err) {
																				toastr.error(err.response.data.message);
																});
												}
								}, _this.removeEverything = function () {
												var r = confirm("Are you sure!");
												if (r == true) {
																axios({
																				method: 'get',
																				headers: Auth.header(),
																				url: "/others/clear_wholedb"
																}).then(function (res) {
																				toastr.success(res.data.message);
																})["catch"](function (err) {
																				toastr.error(err.response.data.message);
																});
												}
								}, _temp), (0, _possibleConstructorReturn3["default"])(_this, _ret);
				}

				(0, _createClass3["default"])(RemoveAllRecord, [{
								key: "render",
								value: function () {
												function render() {
																return _react2["default"].createElement(
																				"div",
																				{ className: "page mx-w-600px mx-2" },
																				_react2["default"].createElement(
																								"h6",
																								null,
																								_react2["default"].createElement("i", { className: "fa fa-trash" }),
																								" Remove Data"
																				),
																				_react2["default"].createElement(
																								"div",
																								{ className: "row" },
																								_react2["default"].createElement(
																												"div",
																												{ className: "col-md-12" },
																												_react2["default"].createElement(
																																"table",
																																{ className: "table table-striped" },
																																_react2["default"].createElement(
																																				"thead",
																																				null,
																																				_react2["default"].createElement(
																																								"tr",
																																								null,
																																								_react2["default"].createElement(
																																												"th",
																																												{ scope: "col" },
																																												"#"
																																								),
																																								_react2["default"].createElement(
																																												"th",
																																												{ scope: "col" },
																																												"Type"
																																								),
																																								_react2["default"].createElement("th", { scope: "col" })
																																				)
																																),
																																_react2["default"].createElement(
																																				"tbody",
																																				null,
																																				_react2["default"].createElement(
																																								"tr",
																																								null,
																																								_react2["default"].createElement(
																																												"th",
																																												{ scope: "row" },
																																												"2"
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												"Remove All Records",
																																												_react2["default"].createElement(
																																																"h6",
																																																null,
																																																_react2["default"].createElement(
																																																				"span",
																																																				{ className: "badge badge-light" },
																																																				"Note: Accounts, Team, Ledger entries will not be removed."
																																																)
																																												)
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												_react2["default"].createElement(
																																																"button",
																																																{ className: "btn btn-sm btn-primary", onClick: this.removeAllRecords },
																																																"Remove"
																																												)
																																								)
																																				),
																																				_react2["default"].createElement(
																																								"tr",
																																								null,
																																								_react2["default"].createElement(
																																												"th",
																																												{ scope: "row" },
																																												"1"
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												"Remove Ledger Records",
																																												_react2["default"].createElement(
																																																"h6",
																																																null,
																																																_react2["default"].createElement(
																																																				"span",
																																																				{ className: "badge badge-light" },
																																																				"Note: It will merge the Final Balance as Opening Balance."
																																																)
																																												)
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												_react2["default"].createElement(
																																																"button",
																																																{ className: "btn btn-sm btn-primary", onClick: this.removeLedgerRecords },
																																																"Remove"
																																												)
																																								)
																																				),
																																				_react2["default"].createElement(
																																								"tr",
																																								null,
																																								_react2["default"].createElement(
																																												"th",
																																												{ scope: "row" },
																																												"1"
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												"Remove Everything",
																																												_react2["default"].createElement(
																																																"h6",
																																																null,
																																																_react2["default"].createElement(
																																																				"span",
																																																				{ className: "badge badge-light" },
																																																				"Note: It will remove everything."
																																																)
																																												)
																																								),
																																								_react2["default"].createElement(
																																												"td",
																																												null,
																																												_react2["default"].createElement(
																																																"button",
																																																{ className: "btn btn-sm btn-primary", onClick: this.removeEverything },
																																																"Remove"
																																												)
																																								)
																																				)
																																)
																												)
																								)
																				)
																);
												}

												return render;
								}()
				}]);
				return RemoveAllRecord;
}(_react.Component);

exports["default"] = RemoveAllRecord;
module.exports = exports["default"];

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.10.0
(function() {
  var chokidar, err1, err2, error, error1, ignore, ignored, nwgui, nwwin, watcher,
    hasProp = {}.hasOwnProperty;

  window.CRASHED = false;

  if (typeof process !== "undefined" && process !== null) {
    nwgui = window.require("nw.gui");
    nwwin = nwgui.Window.get(window);
    process.removeAllListeners("uncaughtException");
    process.on("uncaughtException", function(e) {
      var ref;
      if (!window.CRASHED) {
        window.CRASHED = true;
        if (typeof console !== "undefined" && console !== null) {
          if (typeof console.warn === "function") {
            console.warn("CRASH");
          }
        }
        nwwin.showDevTools();
      }
      if (((ref = nwgui.App.manifest.window) != null ? ref.show : void 0) === false) {
        return nwwin.show();
      }
    });
    window.addEventListener("keydown", function(e) {
      var ref;
      switch ((ref = e.key) != null ? ref : e.keyIdentifier) {
        case "F12":
          return nwwin.showDevTools();
        case "F5":
          return window.location.reload();
      }
    });
    ignored = [/node_modules|npm-debug\.log|\.git|\.hg|\.svn/];
    ignore = document.currentScript.dataset.ignore;
    if (ignore) {
      ignored.push(ignore);
    }
    try {
      chokidar = window.require("nw-dev/node_modules/chokidar/");
    } catch (error) {
      err1 = error;
      try {
        chokidar = window.require("chokidar");
      } catch (error1) {
        err2 = error1;
        console.warn("Live reload disabled:", [err1.stack, err2.stack]);
      }
    }
    if (chokidar) {
      watcher = chokidar.watch(".", {
        ignored: ignored
      });
      watcher.on("change", function(path) {
        var fs, height, k, newwin, newwin_options, pkg, ref, ref1, ref2, v, width, x, y;
        watcher.close();
        ref = Object({}).require.cache;
        for (k in ref) {
          if (!hasProp.call(ref, k)) continue;
          delete Object({}).require.cache[k];
        }
        nwwin.removeAllListeners();
        nwwin.closeDevTools();
        if (path === "package.json") {
          fs = __webpack_require__(427);
          pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
          Object.defineProperty(nwgui.App, "manifest", {
            value: pkg,
            configurable: true
          });
          x = nwwin.x, y = nwwin.y;
          width = window.innerWidth;
          height = window.innerHeight;
          window.close();
          newwin_options = {};
          ref1 = pkg.window;
          for (k in ref1) {
            v = ref1[k];
            newwin_options[k] = v;
          }
          ref2 = {
            x: x,
            y: y,
            width: width,
            height: height
          };
          for (k in ref2) {
            v = ref2[k];
            newwin_options[k] = v;
          }
          return newwin = nwgui.Window.open(window.location.href, newwin_options);
        } else {
          return typeof location !== "undefined" && location !== null ? location.reload() : void 0;
        }
      });
    }
  }

  window.onerror = function(e) {
    if (!window.CRASHED) {
      window.CRASHED = true;
      if (typeof console !== "undefined" && console !== null) {
        if (typeof console.warn === "function") {
          console.warn("CRASH");
        }
      }
      if (nwwin != null) {
        nwwin.showDevTools();
      }
    }
    return false;
  };

}).call(this);


/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
],[187]);
//# sourceMappingURL=js.js.map