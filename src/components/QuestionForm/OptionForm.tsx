import React, { useEffect, useState } from "react";
import { Radio } from 'antd';
import Editor from '../Editor';
import classNames from 'classnames';

/**
 * 注意点1：react 18中，children字段需要先声明，FC中不再默认提供这个参数;
 * 注意点2：react 18中，interface里面的参数结尾的“;”不能缺少，否则没加“;”的话，后面的参数就不会生效了，切记
 */
export interface OptionFormProps {
    value?: string;
    checked?: boolean;
    children?: React.ReactNode; // 注意： react 18中，children字段需要先声明，FC中不再默认提供这个参数
    title?: string;
    className?: string;
    focusType?: 'active' | 'danger' | 'default';
    onChange?: (params: any) => void;
}
/**
 * 选项组件
 * @param props 入参
 * @returns 
 */
const OptionForm:React.FC<OptionFormProps> = (props) => {
    const { checked = false, value, children, title, focusType, className, onChange = () => {}, } = props;
    const [curChecked, setChecked] = useState<boolean>(false);
    const [initialValue, setInitialValue] = useState<string>('');

    useEffect(() => {
        if(value && value !== '') setInitialValue(value);
    }, [value])

    useEffect(() => {
        setChecked(checked);
    }, [checked]);


    const classes = classNames('pm-form-box', {
        [`pm-form-box-border-${focusType}`]: focusType
    }, className)

    return <>
        <div className={classes}>{title}</div>
        <div>
            <Radio checked={curChecked} />
            <Editor initialValue={initialValue} onChange={onChange} />
        </div>
        {children}
    </>
}

/**
 * 组件的默认入参
 */
OptionForm.defaultProps = {
    checked: false,
    value: ""
}
export default OptionForm;
