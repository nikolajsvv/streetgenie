import React, { useRef, useState, useEffect } from 'react';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // set the focus on first input when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  return (
    <div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Sign In</h1>
      <form>
        <label for="username">Username</label>
        <input type="text"
               id="username" 
               ref={userRef} 
               autoComplete="off" 
               onChange={(e) => setUser(e.target.value)}
               value={user}
               required
         />
         <label for="password">Password</label>
         <input type="text"
                id="password"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
          />
      </form>
    </div>
  )
}
export default Login;