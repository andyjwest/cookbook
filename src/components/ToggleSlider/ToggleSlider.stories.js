import React, {useState} from 'react';
import ToggleSlider from "./ToggleSlider";


export default {
    title: 'Toggle Slider',
    component: ToggleSlider,
};

export const SmallTest = () => {
    const [checked, setChecked] = useState(false)
    return <ToggleSlider callback={()=>setChecked(!checked)} checked={checked}/>
}
