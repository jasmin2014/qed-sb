import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ContentForm from "./ContentForm";
import OptionForm from "./OptionForm";
var QuestionForm = function (props) {
    var editors = props.editors, children = props.children, questionType = props.questionType;
    var _a = useState('题干'), contentTitle = _a[0], setContentTitle = _a[1];
    var _b = useState('选项'), optionTitle = _b[0], setOptionTitle = _b[1];
    var _c = useState(''), contentValue = _c[0], setContentValue = _c[1];
    var _d = useState(''), optionValue = _d[0], setOptionValue = _d[1];
    var _e = useState(false), optionChecked = _e[0], setOptionChecked = _e[1];
    var _f = useState('default'), contentFocusType = _f[0], setContentFocusType = _f[1];
    var _g = useState('default'), optionFocusType = _g[0], setOptionFocusType = _g[1];
    useEffect(function () {
        if (editors && Array.isArray(editors) && editors.length) {
            for (var i = 0; i < editors.length; i++) {
                switch (editors[i].key) {
                    case 'content':
                        setContentTitle(editors[i].name);
                        setContentValue(editors[i].value);
                        setContentFocusType(editors[i].focusType);
                        break;
                    case 'option':
                        setOptionTitle(editors[i].name);
                        setOptionValue(editors[i].value);
                        setOptionChecked(editors[i].checked);
                        setOptionFocusType(editors[i].focusType);
                        break;
                    default:
                        break;
                }
            }
        }
    }, [editors]);
    return _jsxs("div", { children: [questionType && questionType === 1 && _jsxs(_Fragment, { children: [_jsx(ContentForm, { title: contentTitle, value: contentValue, focusType: contentFocusType }), _jsx(OptionForm, { title: optionTitle, value: optionValue, checked: optionChecked, focusType: optionFocusType }), children] }), questionType && questionType === 30 && _jsxs(_Fragment, { children: [_jsx(ContentForm, { title: contentTitle }), children] })] });
};
export default QuestionForm;
