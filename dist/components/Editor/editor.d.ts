import React from 'react';
interface IProps {
    initialValue?: string;
    onChange?: (params?: any) => void;
    defaultSetUp?: any;
    toolbar?: string;
    height?: number;
    setting?: any;
}
declare const TinyEditor: React.FC<IProps>;
export default TinyEditor;
