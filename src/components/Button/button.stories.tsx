import React from "react";
import Button from "./button";
import { ComponentMeta, ComponentStory } from '@storybook/react';


const buttonMeta: ComponentMeta<typeof Button> = {
    title: "按钮样式",
    component: Button
}

export default buttonMeta;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}></Button>
)

export const Default = Template.bind({});
Default.args = {
    children: '默认按钮'
}
Default.storyName = "默认按钮";

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary按钮',
    btnType: 'primary'
}
Primary.storyName = "Primary按钮";


