webpackJsonp([1],{

/***/ 9:
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

/***/ })

},[9]);
//# sourceMappingURL=grid.js.map