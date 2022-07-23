/* eslint-disable no-param-reassign */
import React from 'react';
import { Editor }  from '@tinymce/tinymce-react';


interface IProps  {
  initialValue?:string;
  onChange?: (params?:any) => void;
  defaultSetUp?:any;
  toolbar?:string;
  height?:number;
  setting?:any;
}

const domUtil= {
  wrapper: (content: string) => {
    const dom = document.createElement('div');
    dom.innerHTML = content;
    return dom;
  },
  changeDomTagName: (dom: HTMLElement, tagName: string, ) => {
    let domString = dom.outerHTML;
    domString = domString.replace(/^<[^>\s]*/i, `<${tagName}`);
    // eslint-disable-next-line no-useless-escape
    domString = domString.replace(/\/[^\s\/]*>$/i, `/${tagName}>`);
    // eslint-disable-next-line no-param-reassign
    dom.outerHTML = domString
  },
  elementsChangeTagName: (elements: HTMLElement[], tagName: string) => {
    const len = elements.length;
    const eles = [...elements]
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i< len; i++){
      domUtil.changeDomTagName(eles[i] as HTMLElement, tagName)
    }
  },
  each: (elements: HTMLElement[], fn: (element: HTMLElement) => void) => {
    const len = elements.length;
    const eles = [...elements]
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i< len; i++){
      fn(eles[i] as HTMLElement)
    }
  }
}



const TinyEditor:React.FC<IProps> = (props) => {
  const {
    onChange = () => {},
    initialValue : originInitialValue = '',
    defaultSetUp,
    toolbar,
    setting,
    height = 200
  } = props;

  const fontReg = /<span\s*style="color: #ff0000;"><u>(.+?)<\/u><\/span>/ig
  const change = (params:any) => {
    onChange(params.replace(fontReg, '$1'))
  }

  const formats = {
    emphasis: { inline: 'span', classes: 'under_spot'},
    wave: { inline: 'span', classes: 'under_spot'},
  }

  const style_formats = [
    {title: '着重号', inline: 'span', classes: 'under_spot'},
    {title: '波浪线', inline: 'span', classes: 'wave'},
  ]

  const setup = (ed:any) => {
    ed.ui.registry.addButton('answer', {
      text: '答',
      onAction: () => {
        ed.insertContent('&nbsp;<div class="answer">&nbsp;&nbsp;</div>&nbsp;');
      }
    });
    ed.ui.registry.addButton('mark', {
      text: '标',
      onAction: () => {
        ed.insertContent('&nbsp;<span class="mark">[标志位]</span>&nbsp;');
      }
    });
  }


  const editorProps = {
    init: {
      forced_root_block: "",
      force_br_newlines : true,
      force_p_newlines : false,
      language:'zh_CN',
      content_css : '/question-bank/editor.css',
      statusbar: false,
      external_plugins: {
        tiny_mce_wiris: '//web.ewt360.com/common/tinymce/plugins/tiny_mce_wiris/plugin.min.js'
      },
      wiriseditorsavemode: '',
      wiriseditorparsexml: true,
      wirisimagebgcolor: '#FFFFFF',
      wirisimagesymbolcolor: '#000000',
      wiristransparency: 'true',
      wirisimagefontsize: '16',
      wirisimagenumbercolor: '#000000',
      wirisimageidentcolor: '#000000',
      style_formats_merge: true,
      style_formats,
      formats,
      setup:defaultSetUp || setup,
      height,
      noneditable_noneditable_class: 'mark',
      font_formats: '默认字体=sans-serif;宋体=宋体,SimSun;仿宋=仿宋,FangSong;楷体=楷体,楷体_GB2312, SimKai;微软雅黑=微软雅黑,Microsoft YaHei;黑体=黑体, SimHei;隶书=隶书, SimLi;arial=arial, helvetica,sans-serif;Times New Roman;',
      ...setting,
    },
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
  }

  return <Editor
    {...editorProps}
  />
};

export default TinyEditor;
