import React, { Component } from 'react'
import Profile from './Profile'
import SideNav from './SideNav'
import { Route, Routes } from 'react-router-dom'
import AddEmployee from '../Modules/ADMIN/AddEmployee'
import ViewEmployee from '../Modules/ADMIN/ViewEmployee'
import AddEnquiry from '../Modules/CRM/AddEnquiry'
import ViewEnquiry from '../Modules/CRM/ViewEnquiry'
import DocumentVerification from '../Modules/OE/DocumentVerification'
import CreateLedger from '../Modules/AH/CreateLedger'
import LoanDisbursement from '../Modules/AH/LoanDisbursement'
import CheckCibil from '../Modules/OE/CheckCibil'

function Dashboard() {
  
    const userJson = localStorage.getItem("user");
    // console.log(userJson)
    const {usertype}=JSON.parse(userJson);
    // bg 


      const appRoute={
                    ADMIN:[
                          { path:'addemployee' ,component:<AddEmployee/>},
                          { path:'viewemployee', component:<ViewEmployee/>}
                          ],
                    CRM:[
                        { path:'addenquiry' , component:<AddEnquiry/>},
                        { path:'viewenquiry' , component:<ViewEnquiry/>}
                        ],
                     OE:[
                          { path:'checkcibil',component:<CheckCibil/>},
                          { path:'documentverification', component:<DocumentVerification/>}
                        ],
                     AH:[
                          {path:'createledger' , component:<CreateLedger/>},
                          {path:'loandisbursment' , component:<LoanDisbursement/>}
                        ]   

                    }

    return (
    <div>  
        {/* <h2>Dashboard</h2> */}

        <div className='bg bg-info text-white border border-info border-start-0 rounded-end'>
        <Profile/>
        </div>

    <div className='d-flex'>
        <div className='bg bg-secondary text-white w-25 border border-info border-start-0 rounded-0'>
        <SideNav/>
        </div>

      <div className='bg bg-light w-75  border border-info border-start-0 rounded-end'>
        <Routes>
        {
          appRoute[usertype].map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.component} ></Route>)
        }
        </Routes>
      </div>
   </div>   
    </div>
  )
}

export default Dashboard