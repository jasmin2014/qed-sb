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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Editor } from '@tinymce/tinymce-react';
var domUtil = {
    wrapper: function (content) {
        var dom = document.createElement('div');
        dom.innerHTML = content;
        return dom;
    },
    changeDomTagName: function (dom, tagName) {
        var domString = dom.outerHTML;
        domString = domString.replace(/^<[^>\s]*/i, "<".concat(tagName));
        // eslint-disable-next-line no-useless-escape
        domString = domString.replace(/\/[^\s\/]*>$/i, "/".concat(tagName, ">"));
        // eslint-disable-next-line no-param-reassign
        dom.outerHTML = domString;
    },
    elementsChangeTagName: function (elements, tagName) {
        var len = elements.length;
        var eles = __spreadArray([], elements, true);
        // eslint-disable-next-line no-plusplus
        for (var i = 0; i < len; i++) {
            domUtil.changeDomTagName(eles[i], tagName);
        }
    },
    each: function (elements, fn) {
        var len = elements.length;
        var eles = __spreadArray([], elements, true);
        // eslint-disable-next-line no-plusplus
        for (var i = 0; i < len; i++) {
            fn(eles[i]);
        }
    }
};
var TinyEditor = function (props) {
    var _a = props.onChange, onChange = _a === void 0 ? function () { } : _a, _b = props.initialValue, originInitialValue = _b === void 0 ? '' : _b, defaultSetUp = props.defaultSetUp, toolbar = props.toolbar, setting = props.setting, _c = props.height, height = _c === void 0 ? 200 : _c;
    var fontReg = /<span\s*style="color: #ff0000;"><u>(.+?)<\/u><\/span>/ig;
    var change = function (params) {
        onChange(params.replace(fontReg, '$1'));
    };
    var formats = {
        emphasis: { inline: 'span', classes: 'under_spot' },
        wave: { inline: 'span', classes: 'under_spot' },
    };
    var style_formats = [
        { title: '着重号', inline: 'span', classes: 'under_spot' },
        { title: '波浪线', inline: 'span', classes: 'wave' },
    ];
    var setup = function (ed) {
        ed.ui.registry.addButton('answer', {
            text: '答',
            onAction: function () {
                ed.insertContent('&nbsp;<div class="answer">&nbsp;&nbsp;</div>&nbsp;');
            }
        });
        ed.ui.registry.addButton('mark', {
            text: '标',
            onAction: function () {
                ed.insertContent('&nbsp;<span class="mark">[标志位]</span>&nbsp;');
            }
        });
    };
    var editorProps = {
        init: __assign({ forced_root_block: "", force_br_newlines: true, force_p_newlines: false, language: 'zh_CN', content_css: '/question-bank/editor.css', statusbar: false, external_plugins: {
                tiny_mce_wiris: '//web.ewt360.com/common/tinymce/plugins/tiny_mce_wiris/plugin.min.js'
            }, wiriseditorsavemode: '', wiriseditorparsexml: true, wirisimagebgcolor: '#FFFFFF', wirisimagesymbolcolor: '#000000', wiristransparency: 'true', wirisimagefontsize: '16', wirisimagenumbercolor: '#000000', wirisimageidentcolor: '#000000', style_formats_merge: true, style_formats: style_formats, formats: formats, setup: defaultSetUp || setup, height: height, noneditable_noneditable_class: 'mark', font_formats: '默认字体=sans-serif;宋体=宋体,SimSun;仿宋=仿宋,FangSong;楷体=楷体,楷体_GB2312, SimKai;微软雅黑=微软雅黑,Microsoft YaHei;黑体=黑体, SimHei;隶书=隶书, SimLi;arial=arial, helvetica,sans-serif;Times New Roman;' }, setting),
        tinymceScriptSrc: '//web.ewt360.com/common/tinymce/tinymce.min.js',
        onEditorChange: change,
        initialValue: originInitialValue,
        value: originInitialValue,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks  code fullscreen",
            "insertdatetime media table contextmenu paste wordcount",
            "noneditable"
        ],
        toolbar: toolbar || "fullscreen undo redo code | styleselect | fontselect | mark answer | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | charmap image tiny_mce_wiris_formulaEditor",
    };
    return _jsx(Editor, __assign({}, editorProps));
};
export default TinyEditor;
