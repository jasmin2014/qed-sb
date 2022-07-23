import React from 'react';
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
declare const ContentForm: React.FC<ContentFormProps>;
export default ContentForm;
