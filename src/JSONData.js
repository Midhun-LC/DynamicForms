import React from 'react';


const JSONData=(props)=>{
    return(
        <div>
            <h3>JSON Data for the form</h3>
            <textarea style={{margin:"0 20%",width:"60%",height:"300px"}}rows="30" cols="100" value={props.json} onChange={props.edit}/>
            <button onClick={props.validate}>Validate and update Form</button>
        </div>
    )
}

export default JSONData;