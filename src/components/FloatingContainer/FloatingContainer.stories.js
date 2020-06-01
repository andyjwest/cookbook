import React from 'react';
import FloatingContainer from "./FloatingContainer";


export default {
    title: 'Floating',
    component: FloatingContainer,
};

export const TopRight = () => {
    return <FloatingContainer hPosition='right' vPosition='top'
                              floatingPanelRender={() => <>TopRight</>}
                              childRender={() => <div style={{width: '500px', height: '500px'}}>Test</div>}
    />
}

export const TopLeft = () => {
    return <FloatingContainer hPosition='left' vPosition='top' floatingPanelRender={() => <>TopLeft</>}
                              childRender={() => <div style={{width: '500px', height: '500px'}}>Test</div>}
    />
}

export const BottomRight = () => {
    return <FloatingContainer hPosition='right' vPosition='bottom' floatingPanelRender={() => <>BottomRight</>}
                              childRender={() => <div style={{width: '500px', height: '500px'}}>Test</div>}
    />
}

export const BottomLeft = () => {
    return <FloatingContainer hPosition='left' vPosition='bottom' floatingPanelRender={() => <>BottomLeft</>}
                              childRender={() => <div style={{width: '500px', height: '500px'}}>Test</div>}
    />
}