import React from 'react';

export default function EmployeeList(){
    return(
        <div className="row">
            <div className="col-md-4">
                <Employee />
            </div>
            <div className="col-md-8">
                <div>List of employee records</div>
            </div>

        </div>
    )
}