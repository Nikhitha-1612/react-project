import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react';
import './Signup.css';

function  Signup() {
	const history = useHistory()
    
    const[fname,setFname]=useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [dob, setDob]=useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fname,
				lname,
				email,
				password,
				dob
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

	return (
		
			<div>
				
				<form onSubmit={registerUser}>
			
				<div className="containers">
					<div className="inputs">
						<label>First Name</label>
						<input type="text" 
						value={fname}
						onChange={(e=>setFname(e.target.value))}
						 className="input-field"></input>
						<label>Last name</label>
						<input type="text"
						value={lname}
						onChange={(e)=>setLname(e.target.value)}
						 className="input-field"></input>
						<label>Email Address</label>
                    <input type="email"
                     value={email}
                     placeholder="ex:abc2gmail.com" 
                     onChange={(e)=>setEmail(e.target.value)}
                     className="input-field"></input>
                    <label>Password</label>
                    <input type="password"
                     name=" password "
                     value={password} 
                     onChange={(e)=>setPassword(e.target.value)} 
                     id="password" 
                     className="form-control"
                     className="input-field "  placeholder=" password"/>
							<label>Date of Birth</label>
							<input className="number"
							type="date"
							value={dob}
							onChange={(e)=>setDob(e.target.valaue)}  
							 className="input-field"></input>
							<div className="text">
								<input type="checkbox" />
								<p>I accept the terms the <a href="# ">terms & conditions</a></p>
							</div>
							<div className="btn">
								<button>Create Account</button>
							</div>	
							</div>
                            </div>
							</form>
							</div>
							)}
	export default Signup;