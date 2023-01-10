import { Routes, Route } from 'react-router-dom'

import { Hjem } from "../../Pages/Hjem"
import { Om } from '../../Pages/Om'
import { Tekster } from '../../Pages/Tekster'
import { Web } from '../../Pages/Web'

import { GoalDetails } from '../../Pages/Goals/GoalDetails'
import { GoalList } from '../../Pages/Goals/GoalList'

import { Notfound } from "../../Pages/Notfound"
import LoginPage from '../../Pages/LoginPage'
import Modal from '../../Modal/Modal'
import FlashMessages2 from '../../FlashMessages/Flash2/FlashMessages2'

export const Router = () => {
    return (
        <>
            <Modal /> 
            <FlashMessages2 />
            <Routes>
                <Route index path="/" element={<Hjem />} />
                <Route path="web" element={<Web />} />
                <Route path="tekster" element={<Tekster />} />
                <Route path="om" element={<Om />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="goals" element={<GoalList />} >
                    <Route path=":id" element={<GoalDetails />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    )
}
