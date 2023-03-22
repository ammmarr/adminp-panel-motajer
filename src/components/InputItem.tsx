import { ChangeEvent, useEffect, useState } from "react"

interface Features {
    label: string | number, inputType: string, handleChange: (arg0: ChangeEvent<HTMLInputElement>) => void, name: string,value: string | number,
}
export default function InputItem(props: Features) {


    const [inputData, setInputData] = useState<string | number>("")
    useEffect(() => setInputData(props.value))

    return (
        <div className="input-item">
            <label>{props.label}</label>
            <input type={props.inputType} name={props.name} value={inputData} onChange={(e: ChangeEvent<HTMLInputElement>) =>  props.handleChange(e)} required/>
        </div>
    )
}