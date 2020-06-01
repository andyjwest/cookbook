import React from 'react';
import {FlexFooter} from "./FlexFooter";


export default {
    title: 'FlexFooter',
    component: FlexFooter,
};

export const basic = () => {
    return <FlexFooter footerRender={() => <div>Footer</div>}>
        <div>Here is a test</div>
    </FlexFooter>
}

export const Nested = () => {
    return <FlexFooter footerRender={() => <div>Footer</div>}>
        <div>Here is a test</div>
        <FlexFooter footerRender={()=> <div>Nested Footer</div>}>
            <div>Here is test!</div>
        </FlexFooter>
    </FlexFooter>
}