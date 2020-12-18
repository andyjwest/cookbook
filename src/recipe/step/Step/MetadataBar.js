import React from 'react'
import EquipmentList from "./EquipmentList";
import TextWithHeader from "../../../components/TextAreaWithHeader/TextWithHeader";
import './metadata-bar.scss'
import Time from "../../../components/Time";
import Amount from "../../../components/Amount/Amount";

export default function MetadataBar({equipment, time, temperature}) {
    return <div className='metadata-bar'>
        {equipment ? <div><h3>Equipment</h3><EquipmentList equipment={equipment}/></div> : <div/>}
        <div>
            {!!temperature && <div><h3>Temp</h3><Amount value={temperature.value} units={temperature.units}/></div>}
            {!!time && <div><h3>Time</h3><Time time={time}/></div>}
        </div>
    </div>
}
