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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Editor from '../Editor';
import classNames from 'classnames';
var ContentForm = function (props) {
    var _a;
    var _b = props.onChange, onChange = _b === void 0 ? function () { } : _b, _c = props.value, value = _c === void 0 ? '' : _c, children = props.children, title = props.title, className = props.className, focusType = props.focusType;
    var classes = classNames('pm-form-box', (_a = {},
        _a["pm-form-box-".concat(focusType)] = focusType,
        _a), className);
    return _jsxs("div", __assign({ className: classes }, { children: [_jsx("div", __assign({ className: 'pm-form-title' }, { children: title })), _jsx(Editor, { initialValue: value, height: 400, onChange: onChange }), children] }));
};
ContentForm.defaultProps = {
    title: "题干",
    focusType: 'default'
};
export default ContentForm;
