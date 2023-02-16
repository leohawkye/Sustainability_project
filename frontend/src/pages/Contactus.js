import React from 'react'
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import Header from '../components/navbar/Header';
import './Product.css';



export default function ContactUs() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <Box>
    <Box>
        <Header />
      </Box>
    <section>
        <div className="register">
            <div className="col-1">
                <h1>Contact Us</h1>
                <span>Leave us Message</span>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("Message")} placeholder='message' />
                    <button className='btn'>Submit</button>
                </form>

            </div>
            
        </div>
    </section>
    </Box>
  )
}