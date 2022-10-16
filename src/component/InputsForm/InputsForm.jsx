import React,{useState} from 'react'
import "./InputsForm.css"



  const InputsForm = ({className,label,type,name,placeholder,value,error,error2,onChange,expresion}) => {

      const[valid,setValid]=useState(true)

      //Valida si las expresiones son iguales al valor del input
        const validation=()=>{
            if(expresion){
              if(!expresion.test(value)){
                  setValid(false)
                }
                else{
                  setValid(true)
                }
              }
          }


        return(
                <div className={className}>
                  <label htmlFor={name}>{label}</label>
                  <input type={type} name={name} placeholder={placeholder} value={value} className="input" onChange={onChange} onBlur={validation} onKeyUp={validation}/>
                    {
                    valid? <span></span>
                    :<span className='span'>{[error, error2]}</span>
                    } 
                </div>
  )
  }


export default InputsForm