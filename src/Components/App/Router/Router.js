import { Routes, Route } from 'react-router-dom'

import { Hjem } from "../../Pages/Hjem"
import { Om } from '../../Pages/Om'
import { Tekster } from '../../Pages/Tekster'
import { Web } from '../../Pages/Web'

import { GoalDetails } from '../../Pages/Goals/GoalDetails'
import { GoalList } from '../../Pages/Goals/GoalList'

import { Notfound } from "../../Pages/Notfound"
import Login from '../../Pages/Login/Login'

export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Hjem />} />
            <Route path="/web" element={<Web />} />
            <Route path="/tekster" element={<Tekster />} />
            <Route path="/om" element={<Om />} />
            <Route path="login" element={<Login />} />

            <Route path="goals" element={<GoalList />} >
                <Route path=":id" element={<GoalDetails />} />
            </Route>

            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}
