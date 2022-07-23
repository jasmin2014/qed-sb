import React, { useEffect, useState } from "react";

import ContentForm from "./ContentForm";
import OptionForm from "./OptionForm";

/**
 * 注意点1：react 18中，children字段需要先声明，FC中不再默认提供这个参数;
 * 注意点2：react 18中，interface里面的参数结尾的“;”不能缺少，否则没加“;”的话，后面的参数就不会生效了，切记
 * 试题组件的参数
 */
export interface QuestionFormProps {
    editors?: any[];
    children?: React.ReactNode; // 注意： react 18中，children字段需要先声明，FC中不再默认提供这个参数
    questionType?: number;
}
const QuestionForm:React.FC<QuestionFormProps> = (props) => {
    
    const { editors, children, questionType } = props;
    const [ contentTitle, setContentTitle ] = useState<string>('题干');
    const [ optionTitle, setOptionTitle ] = useState<string>('选项');

    const [ contentValue, setContentValue ] = useState<string>('');
    const [ optionValue, setOptionValue ] = useState<string>('');
    const [ optionChecked, setOptionChecked ] = useState<boolean>(false);
    const [ contentFocusType, setContentFocusType ] = useState<any>('default');
    const [ optionFocusType, setOptionFocusType] = useState<any>('default');

    useEffect(() => {
        if(editors && Array.isArray(editors) && editors.length) {
            for(let i = 0; i < editors.length; i++) {
                switch(editors[i].key){
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
    }, [ editors ]);

    return <div>
        {
            questionType && questionType === 1 && <>
                <ContentForm title={contentTitle} value={contentValue} focusType={contentFocusType} />
                <OptionForm title={optionTitle} value={optionValue} checked={optionChecked} focusType={optionFocusType} />
                {children}
            </> 
        }
        {
            questionType && questionType === 30 && <>
                <ContentForm title={contentTitle} />
                {children}
            </>
        }
        
    </div>

}

export default QuestionForm;