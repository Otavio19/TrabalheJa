//MUI Component
import TextField from '@mui/material/TextField';

import './style.css'

export const InputField = ({ iconInput, typeInput, labelInput, idInput }) => {
    return (
        <div className="inpt_box">
            <div className='iconBox'>
                {iconInput}
            </div>
            <TextField id={idInput} type={typeInput} label={labelInput} variant="standard" />
        </div>
    )
}

export const ButtonField = ({ iconButton, textButton, idInput }) => {
    return (
        <div className="inpt_box btn_box">
            <div className="iconBox">
                { iconButton }
            </div>
            <button>{ textButton }</button>
        </div>
    )
}