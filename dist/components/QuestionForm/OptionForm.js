var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Radio } from 'antd';
import Editor from '../Editor';
import classNames from 'classnames';
/**
 * 选项组件
 * @param props 入参
 * @returns
 */
var OptionForm = function (props) {
    var _a;
    var _b = props.checked, checked = _b === void 0 ? false : _b, value = props.value, children = props.children, title = props.title, focusType = props.focusType, className = props.className, _c = props.onChange, onChange = _c === void 0 ? function () { } : _c;
    var _d = useState(false), curChecked = _d[0], setChecked = _d[1];
    var _e = useState(''), initialValue = _e[0], setInitialValue = _e[1];
    useEffect(function () {
        if (value && value !== '')
            setInitialValue(value);
    }, [value]);
    useEffect(function () {
        setChecked(checked);
    }, [checked]);
    var classes = classNames('pm-form-box', (_a = {},
        _a["pm-form-box-border-".concat(focusType)] = focusType,
        _a), className);
    return _jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes }, { children: title })), _jsxs("div", { children: [_jsx(Radio, { checked: curChecked }), _jsx(Editor, { initialValue: initialValue, onChange: onChange })] }), children] });
};
/**
 * 组件的默认入参
 */
OptionForm.defaultProps = {
    checked: false,
    value: ""
};
export default OptionForm;
