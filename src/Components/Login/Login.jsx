import React from 'react'
import { useForm } from 'react-hook-form'

import { useLoginStore } from '../Login/useLoginStore'
import { useNavigate } from "react-router-dom"
import { useFlashMessageStore } from '../FlashMessages/useFlashMessageStore'
import appService from '../App/Appservices/AppService';
import { Page } from '../App/Layout/Page'

const Login = () => {
    const navigate = useNavigate();

    const {setLoggedIn, loggedIn, username, userInfo} = useLoginStore()
    const {setFlashMessage } = useFlashMessageStore(/* (store) => ({
        setFlashMessage: store.setFlashMessage,
    }) */)

    const { register, handleSubmit } = useForm();

    const onSubmit = (submitdata) => {
        const fetchResult = async () => {
            try {
                const response = await appService.Login(submitdata.username, submitdata.password)
                if(response.data){
                
                    response.data.user.user_id = response.data.user_id
                    setLoggedIn(true, response.data.username, response.data.access_token, response.data.user)
                    setFlashMessage("Du er nu logget ind")
                    navigate("/tekster")
                }
                
            } catch (error) {
                setFlashMessage("Der er fejl")
                console.error(error)
            }
        }
        fetchResult()
    }
    const handleLogout = () => {
        setLoggedIn(false, "", "")
        setFlashMessage("Kom godt hjem ;)")
        navigate("/")
    }
  return (
  <>
  {!loggedIn ? (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", {required: true})} type="text" autoComplete="username" placeholder="brugernavn"/>
        <input {...register("password", {required: true})} type="password" autoComplete="password" placeholder="password"/>
        <button>Login</button>
    </form>
    
  )
  : (<>
  <h3>{username} er logget in</h3>
  <button onClick={() => handleLogout()}>Log ud</button>
  </>)}
  </>
  )
}

export default Login
