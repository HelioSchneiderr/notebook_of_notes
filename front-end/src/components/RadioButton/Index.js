import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import './style.css'


function RadioButton(){

    const CustomRadio = withStyles({
        root: {
          color: '#FFD3CA'[400],
          '&$checked': {
          color: "#eB8F7A"[600],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);


    return(
        <div  className='radioOptions'>
            <div>
                <CustomRadio/>
                <span>Todos</span>
            </div>
            <div>
                <CustomRadio/>
                <span>Todos</span>
            </div>
            <div>
                <CustomRadio/>
                <span>Todos</span>
            </div>
        </div>
    )
}

export default RadioButton;