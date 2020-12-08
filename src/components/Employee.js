import React, {useState, useEffect} from 'react';

const defaultImageSource = '/img/img-init.png';

const initialFieldValues = {
    employeeId:0,
    employeeName:'',
    ocuppation:'',
    imageName:'',
    imageSource:defaultImageSource,
    imageFileName:null
}

export default function Employee() {
    const [values,setValues] = useState(initialFieldValues);
    const [errors,setErrors] = useState({});

    const handleInputChange = e=> {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e=> {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload =x=>{
                setValues({
                    ...values,
                    imageFile,
                    imageSource: x.target.result
                })
            };
            reader.readAsDataURL(imageFile);
        }
        else{
            setValues({
                ...values,
                imageFile:null,
                imageSource: defaultImageSource
            })
        }
    }

    const validate = ()=> {
        let temp = {};
        temp.employeeName = values.employeeName === "" ? false : true;
        temp.imageSource = values.imageSource === defaultImageSource ? false : true;
        setErrors(temp);

        return Object.values(temp).every(x => x == true);
    }

    const handleFormSubmit = e=> {
        e.preventDefault();
        if(validate()){

        }
    }

    const applyErrorClass = filed => ((field in errors && errors[field]==false)?'invalid-field': '' )

    return(
        <>
            <di className="container text-center">
                <p className="lead">An Employee</p>
            </di>
            <form autocomplete="off" novalidate onsubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSource} className="card-img-top"/>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSource')}
                                    onChange={showPreview} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('imageSource')} placeholder="Employee Name" name="employeeName" value={values.employeeName} 
                                    onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('imageSource')} placeholder="Ocuppation" name="occupation" value={values.ocuppation} 
                                    onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div> 
                </div>
            </form>
        </>
    )
}