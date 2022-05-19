import React from 'react'
import Layout from '../../layout'
import Card from "../../components/card";
import {data} from "../../utility/data";

const DashboardPage = () => {
 
  
  return (
    <Layout>
      <div className="mt-4 mx-4 ">
        <div className='mt-[-1rem] pl-2 py-4 z-30'>
            <h4><span className="text-[#008080]">Monday,</span> 21st February, 2022</h4>
        </div>
        <div className='flex flex-wrap w-[100%] justify-between'>
          {data.map(item => (
            <Card key={item.id} title={item.title} image={item.imageFile} description={item.description}/>
          ))}
          
        </div>
       </div>
    </Layout>
  )
}

export default DashboardPage
