import React, { useEffect, useState } from "react"
import { TextField , InputLabel, MenuItem,Select} from "@mui/material"
import Button from "@mui/material/Button"
function Register()
{
   const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    gender:"",
    email:"",
    cellPhone:"",
    city:"",
    address:"",
    state:"",
    zipCode:"",
    comments:""
   }) 
   const [errors,setError]=useState({})
   const [statelist,setStateList]=useState([{'id':'','stateName':''}])
   useEffect(()=>{
    const fetchData=async()=>
    {
        const response=await fetch('http://localhost:8081/getStateList');
        const newData=await response.json();
        setStateList(newData);
    };
    fetchData();
   },[])
   function handleChange(e)
   {
    setUser({...user,[e.target.name]:e.target.value})
    setError(Validation(user));
   }
   function handleSubmit(e)
   {
    e.preventDefault();
    setError(Validate(user));
   }
   const [focus, setFocused] = useState(false);
   const onFocus = () => setFocused(true);
//    Responsive Validation
   const Validation=(user)=>
   {
    const errors={};
    if(!user.firstName)
    {
        errors.firstName="First name is Required";
    }

    if(!user.lastName)
    {
        errors.lastName="Last name is Required";
    }

    if(!user.dateOfBirth)
    {
        errors.dateOfBirth="Date of Birth is Required";
    }

    if(!user.gender)
    {
        errors.gender="Gender is Required";
    }

    if(!user.email)
    {
        errors.email="Email is Required";
    }
    if(user.email)
    {
    if(!new RegExp(/\S+@\S+\.\S+/).test(user.email))
    {
        errors.email="Incorrect format"   
    }
    }

    if(!user.cellPhone)
    {
        errors.cellPhone="Cell Phone is Required";
    }
    if(user.cellPhone)
    {
        if(!new RegExp(/^[0-9]/).test(user.cellPhone))
        {
          errors.cellPhone="It should be a number"  
        }
        else if(user.cellPhone.length>10||user.cellPhone.length<10)
        {
          errors.cellPhone="Enter 10 digit numbers" ;  
        }
    } 

    if(!user.city)
    {
        errors.city="City is Required";
    }

    if(!user.address)
    {
        errors.address="Address is Required";
    }

    if(!user.state)
    {
        errors.state="State is Required";
    }

    if(!user.zipCode)
    {
        errors.zipCode="Zip Code is Required";
    }
    if(user.zipCode)
    {
    if(!new RegExp(/^[0-9]/).test(user.zipCode))
    {
      errors.zipCode="It should be a number"  
    }
    else if(user.zipCode.length>10||user.zipCode.length<5)
    {
        errors.zipCode="Max limit of 10 digits and Min of 5 digits";   
    }
    } 
    return errors;
   }

//    Registration form Validation
   const Validate=(user)=>
   {
    const errors={};
    if(!user.firstName)
    {
        errors.firstName="First name is Required";
    }

    if(!user.lastName)
    {
        errors.lastName="Last name is Required";
    }

    if(!user.dateOfBirth)
    {
        errors.dateOfBirth="Date of Birth is Required";
    }

    if(!user.gender)
    {
        errors.gender="Gender is Required";
    }

    if(!user.email)
    {
        errors.email="Email is Required";
    }
    if(user.email)
    {
    if(!new RegExp(/\S+@\S+\.\S+/).test(user.email))
    {
        errors.email="Incorrect format"   
    }
    }

    if(!user.cellPhone)
    {
        errors.cellPhone="Cell Phone is Required";
    }
    if(user.cellPhone)
    {
        if(!new RegExp(/^[0-9]/).test(user.cellPhone))
        {
          errors.cellPhone="It should be a number"  
        }
        else if(user.cellPhone.length>10||user.cellPhone.length<10)
        {
          errors.cellPhone="Enter 10 digit numbers" ;  
        }
    } 
     

    if(!user.city)
    {
        errors.city="City is Required";
    }

    if(!user.address)
    {
        errors.address="Address is Required";
    }

    if(!user.state)
    {
        errors.state="State is Required";
    }

    if(!user.zipCode)
    {
        errors.zipCode="Zip Code is Required";
    }
    if(user.zipCode)
    {
    if(!new RegExp(/^[0-9]/).test(user.zipCode))
    {
      errors.zipCode="It should be a number"  
    }
    else if(user.zipCode.length>10||user.zipCode.length<5)
    {
        errors.zipCode="Max limit of 10 digits and Min of 5 digits";   
    }
    } 

    if (!errors.firstName  && !errors.lastName && !errors.dateOfBirth && !errors.gender && !errors.email && !errors.cellPhone && !errors.city && !errors.address && !errors.state && !errors.zipCode)
    {
        alert("Submitted successfuly");
        const data = {

            firstName:user.firstName,
            lastName:user.lastName,
            dateOfBirth:user.dateOfBirth,
            gender:user.gender,
            email: user.email,
            cellPhone:user.cellPhone,
            city:user.city,
            address:user.address,
            state:user.state,
            zipCode:user.zipCode,
            comments:user.comments
          };
          console.log("data",data);
         fetch('http://localhost:8081/saveUser',{
         method:'POST',
         headers:{
            'Accept':'Application/json',
            'content-Type':'Application/json',
            },
          body:JSON.stringify(data)
          }).then((response)=>console.log(response)).catch(console.log("error"));
    }
    return errors;
   }
   return(
    <div>
        <form>
          <h1><center>Patient Registration Form</center></h1>
            <br></br>
            <center>
            <div className="container" >
            <h3 style={{color:"rgb(90,181,181)"}}><center>Please fill out your details</center></h3>
                <div className="field1">
                <TextField variant="standard" type="text" name="firstName" value={user.firstName} label="First Name *" onChange={handleChange}/>
                <div className="text-danger1">
                {errors.firstName&&<p style={{color:"red" , fontSize:"15px" }}>{errors.firstName}</p>}
                </div>
                <TextField variant="standard" type="text" name="lastName" value={user.lastName} label="Last Name *" onChange={handleChange}/>
                <div className="text-danger2">
                {errors.lastName&&<p style={{color:"red" , fontSize:"15px" }}>{errors.lastName}</p>}
                </div>
                </div>
                <br></br>

                <div className="field2">
                <TextField variant="standard"  onFocus={onFocus} type={focus ? "date" : "text"}  id="datecss" name="dateOfBirth" value={user.dateOfBirth} label="Date Of Birth *" onChange={handleChange}  />
                <div className="text-danger3">
                {errors.dateOfBirth&&<p style={{color:"red" , fontSize:"15px" }}>{errors.dateOfBirth}</p>}
                </div>
                <InputLabel variant="standard"  id="gendercss" name="gender" value={user.gender} label="Gender *" onChange={handleChange}>Gender * </InputLabel >
                <Select  variant="standard" name="gender"  value={user.gender} onChange={handleChange}>
                <MenuItem  value={user.gender} >--Gender--</MenuItem>
               <MenuItem value={"male"} >Male</MenuItem>
               <MenuItem value={"female"} >Female</MenuItem>
                <MenuItem value={"others"} >Others</MenuItem>
                </Select>     
                <div className="text-danger4">
                {errors.gender&&<p style={{color:"red" , fontSize:"15px" }}>{errors.gender}</p>}
                </div>
                </div>
                <br></br>

                <div className="field3">
                <TextField variant="standard" type="text"  name="email" value={user.email} label="Email *" onChange={handleChange}/>
                <div className="text-danger5">
                {errors.email&&<p style={{color:"red" , fontSize:"15px" }}>{errors.email}</p>}
                </div>
                <TextField variant="standard" type="text" name="cellPhone" value={user.cellPhone} label="Cell Phone *" onChange={handleChange}/>
                <div className="text-danger6">
                {errors.cellPhone&&<p style={{color:"red" , fontSize:"15px" }}>{errors.cellPhone}</p>}
                </div>
                </div>
                <br></br>

                <div className="field4">
                <TextField  variant="standard" type="text" name="city" value={user.city} label="City *" onChange={handleChange}/>
                <div className="text-danger7">
                {errors.city&&<p style={{color:"red" , fontSize:"15px" }}>{errors.city}</p>}
                </div>
                <TextField  variant="standard" type="text" name="address" value={user.address} label="Address *" onChange={handleChange}/>
                <div className="text-danger8">
                {errors.address&&<p style={{color:"red" , fontSize:"15px" }}>{errors.address}</p>}
                </div>
                </div>
                <br></br>
                <br></br>

                <div className="field5">
                <TextField  variant="standard" type="text"  name="zipCode" value={user.zipCode} label="Zip Code *" onChange={handleChange}/>
                <div className="text-danger10">
                {errors.zipCode&&<p style={{color:"red" , fontSize:"15px" }}>{errors.zipCode}</p>}
                </div>
                <InputLabel variant="standard"  id="statecss" name="state" value={user.state} label="State *" onChange={handleChange } >State *</InputLabel>
                <Select  variant="standard" name="state" value={user.state} onChange={handleChange} placeholder="state" MenuProps={ { style: { maxHeight: 200 } } } >
                <MenuItem value={user.state} >--State--</MenuItem>
                {statelist.map(stat=>(
                    <MenuItem value={stat.stateName} key={stat.id} >{stat.stateName}</MenuItem>
                ))}
                </Select>
                <div className="text-danger9">
                {errors.state&&<p style={{color:"red" , fontSize:"15px" }}>{errors.state}</p>}
                </div>
                </div>
                <br></br>

                <div className="field6">
                <TextField variant="standard" type="text" name="comments" value={user.comments} label="Comments (optional)" onChange={handleChange}/>
                </div>
                <br></br>
                <div className="mand">
                <p style={{color:"red", fontsize:"15px", marginLeft:"-660px", fontWeight:"bold"}}>* Mandatory fields</p>
                </div>
                <Button variant="contained" id="but" onClick={handleSubmit}><center>Register</center></Button>
            </div>
            </center>
        </form>
    </div>
   )
}
export default Register;