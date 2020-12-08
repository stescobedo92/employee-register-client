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
    const [values,setValues] = useState(initialFieldValues);

    const handleInputChange = e=> {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    return(
        <>
            <di className="container text-center">
                <p className="lead">An Employee</p>
            </di>
            <form autocomplete="off" novalidate>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control" placeholder="Employee Name" name="employeeName" value={values.employeeName} 
                                    onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Ocuppation" name="occupation" value={values.ocuppation} 
                                    onChange={handleInputChange} />
                        </div>
                    </div> 
                </div>
            </form>
        </>
    )
}