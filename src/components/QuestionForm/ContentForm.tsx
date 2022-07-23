import React from 'react';
import Editor from '../Editor'
import classNames from 'classnames';

/**
 * 注意点1：react 18中，children字段需要先声明，FC中不再默认提供这个参数;
 * 注意点2：react 18中，interface里面的参数结尾的“;”不能缺少，否则没加“;”的话，后面的参数就不会生效了，切记
 */
export interface ContentFormProps {
  onChange?: (params: any) => void;
  value?: string;
  children?: React.ReactNode; 
  title?: string;
  className?: string;
  focusType?: 'active' | 'danger' | 'default';
}

const ContentForm:React.FC<ContentFormProps> = (props) => {
  const { onChange = () => {}, value = '', children, title, className, focusType } = props;

  const classes = classNames('pm-form-box', {
    [`pm-form-box-${focusType}`]: focusType
}, className)

  return <div className={classes}>
    <div className='pm-form-title'>{title}</div>
    <Editor
        initialValue={value}
        height={400}
        onChange={onChange}
    />
    {children}
  </div>
}

ContentForm.defaultProps = {
    title: "题干",
    focusType: 'default'
}

export default ContentForm;
