import { useState, type ChangeEvent } from "react"
import { useDispatch } from "react-redux";
import { saveSettingsAC } from "./settings-reducer";

export const Settings = () => {
    const[minValue, setMinValue] = useState(0);
    const[maxValue, setMaxValue] = useState(5);
    const dispatch = useDispatch();

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value);
    }

    const onClickSaveHandler = () => {
        dispatch(saveSettingsAC({minValue, maxValue}))
    }


    return (
        <div>
            <label >
                max-value
                <input type="number" onChange={onChangeMaxValueHandler} value={maxValue}/>
            </label>
            <label>
                min-value
                <input type="number" onChange={onChangeMinValueHandler} value={minValue}/>
            </label>
        
            <button onClick={onClickSaveHandler}>save</button>
        </div>
    )
}