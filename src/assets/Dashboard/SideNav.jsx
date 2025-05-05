import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {

  const userJson = localStorage.getItem("user");
  const {usertype} = JSON.parse(userJson);

  const options={

    ADMIN:[
          {label:"Add Employee" , to:'/dashboard/addemployee'},
          {label:"View Employee" , to:'/dashboard/viewemployee'}
          ],
    CRM:[
          {label:"Add Enquiry" , to:'/dashboard/addenquiry'},
          {label:"View Enquiry" , to:'/dashboard/viewenquiry'}
        ],
     OE:[
          {label:"Check Cibil" , to:'/dashboard/checkcibil'},
          {label:'Document Varification' , to:'/dashboard/documentverification'}
        ],
     AH:[
          {label:'Loan Disbursement' , to:'/dashboard/loandisbursment'},
          {label:'Create Ladger' , to:'/dashboard/createledger'}
        ],
CUSTOMER:[
          {label:'Add Customer' , to:'/dashboard/addcustomer'},
          {label:'View Customer' , to:'/dashboard/viewcustomer'}
         ]
  }
 
    return (
    <div>
        <h2>SideNav</h2>
        {
          options[usertype].map((btn,index)=><Link className='btn btn-warning w-70 p-0 mt-2 ms-3' key={index} to={btn.to}>{btn.label}</Link>)
        }

    </div>
  )
}

export default SideNav