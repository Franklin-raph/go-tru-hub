import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/alert/Alert';

const CreatePassword = ({baseUrl}) => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypted, setEncrypted] = useState(true);
  const [msg, setMsg] = useState('')
  const [alertType, setAlertType] = useState()

  async function createPassword(){
    if(!password || !confirmPassword){
        setMsg("Both password fields are required!");
        setAlertType('error')
        return;
    }else if(password !== confirmPassword){
        setMsg("Both password fields must match");
        setAlertType('error')
        return
    }else{
        console.log(`${baseUrl}/set-Password`);
        const body = {
            email: JSON.parse(localStorage.getItem('reg-email')),
            password
        }
        const res = await fetch(`${baseUrl}/set-Password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        console.log(res, data);
        if(!res.ok){
            notify(data.message)
            return
        }
        if(res.ok){
            setMsg("Password Created Successfully!")
            navigate('/sign-in')
        }
    }
  }

  return (
    <div>
      <div
        className="className='w-[100%] mx-auto my-[4rem]"
      >
            <div className='w-[40%] mx-auto'>
                <h3 className='text-center mx-[20px] text-[30px] mb-[3rem]'>Create Password</h3>
                <div className="" style={{marginBottom:"30px"}}>
                  <p style={{marginBottom:"5px"}}>Enter Password</p>
                  <div className="border w-full rounded-[4px] flex items-center justify-between px-4 py-3">
                  <input
                    className='w-full text-[#19201d] outline-none '
                    type={encrypted ? "password" : "text"}
                    placeholder="Confirm password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div>
                    {!encrypted ? (
                        <img src="./images/see.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer' />
                    ) : (
                        <img src="./images/encrypt.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer'  />
                    )}
                  </div>
                </div>
              </div>
          
              <div className="">
              <p style={{marginBottom:"5px"}}>Confirm password</p>
                <div className="border w-full rounded-[4px] flex items-center justify-between px-4 py-3">
                  <input
                    className='w-full text-[#19201d] outline-none '
                    type={encrypted ? "password" : "text"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <div>
                    {!encrypted ? (
                        <img src="./images/see.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer' />
                    ) : (
                        <img src="./images/encrypt.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer'  />
                    )}
                  </div>
                </div>
              </div>
              <button onClick={createPassword} className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Proceed</button>
            </div>
        </div>
        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default CreatePassword