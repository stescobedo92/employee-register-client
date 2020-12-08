import React, {useState, useEffect} from 'react';

const initialFieldValues = {
    employeeId:0,
    employeeName:'',
    ocuppation:'',
    imageName:'',
    imageSource:'',
    imageFileName:null
}

export default function Employee() {
    const [values,setValues] = useState();

    return(
        <>
            <di className="container text-center">
                <p className="lead">An Employee</p>
            </di>
            <form autocomplete="off" novalidate>
                <div className="card">
                    <div className="card-body">
                    
                    </div> 
                </div>
            </form>
        </>
    )
}