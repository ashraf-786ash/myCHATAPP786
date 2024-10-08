import React from 'react'

const GenderCheckbox = ({oncheckboxchange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender==="male"? "selected": ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox"  className="checkbox checkbox-primary" 
                checked={selectedGender === "male"}
                onChange={()=> oncheckboxchange("male")}/>
            </label>
        </div>  
        <div className="form-control">
        <label className={`label cursor-pointer ${selectedGender==="female"? "selected": ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-secondary"
                    checked={selectedGender === "female"}
                    onChange={()=> oncheckboxchange("female")}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;



{/*

*********STARTER CODE*****

import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            </label>
        </div>  
        <div className="form-control">
            <label className="cursor-pointer label">
                <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;
    
    
    */}

