import React from 'react'
import EquipmentList from "./EquipmentList";
import TextWithHeader from "../../../components/TextAreaWithHeader/TextWithHeader";

export default function MetadataBar({equipment, time, temperature}) {
    return <div className='metadata-bar'>
        <TextWithHeader header='Equipment'><EquipmentList equipment={equipment}/></TextWithHeader>
        <div>
            {!!temperature && <TextWithHeader header='Temp'>{temperature.value}</TextWithHeader>}
            {!!time && <TextWithHeader header='Time'>{time.value}</TextWithHeader>}
        </div>
    </div>
}