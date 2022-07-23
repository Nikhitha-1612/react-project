
import React,{useState}  from 'react';
import './Login.css';

function Login(){
    const [email, setEmail]= useState('')
	  const [password, setPassword] = useState('')
    
    
    async function loginUser(event) {
      event.preventDefault()

		
      const response = await fetch('http://localhost:1337/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
  
      if (data.user)
      {
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location.href = '/app'
      } else {
        alert('Please check your username and password')
      }
    }

    return(
        <div>
         <form onSubmit={loginUser}>
            <div className="container1">
                <div className="inputs">
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
              <div className="btn">
              <button>Sign in</button>
              </div>
            </div>
            </div>
            </form>
        </div>
        )}
        
        
export default Login;