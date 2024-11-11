import React from 'react'

import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import Carousel from "../../components/carousel/Carousel";



const index = () => {
    const carouselDetails=[
        {
        heading:"Immediate Assistance",
        content:"Get instant help with our rapid response system, ensuring you receive the care you need as quickly as possible."
        },
        {
            heading:"Trusted Network",
            content:"Connect with a network of highly-rated hospitals and emergency responders committed to your well-being."
        },
        {
            heading:"Real-time Updates",
            content:"Stay informed with live notifications and updates on your service requests, keeping you in the loop at all times."

        }
    ]
    
    return (
    <>

    <div class='login-container'>

        {/* start of login-left */}
        <div class='login-left'> 
            
            <div class="login-icon">
            <i class="fa-solid fa-right-to-bracket"></i>
            </div>

            <div class="login-head">
                <div>Your Safety Is Our Top Priority</div>
                <div>Log in to access your personalized emergency services and stay connected with the fastest response network.</div>
            </div>

            <div class="login-carousel">
                <Carousel carouselDetails={carouselDetails} />

            </div>


            


            
        </div>
        {/* end of login-left */}


        <div class='login-right'>
            <di class="login-right-head">
                <p>Login to RapidAid</p>
            </di>

            <form>
                <Form.Item label=" Email"
                        name="email"
                        htmlFor='email' 
                        rules={[{required:true,message:"enter the email"}]}
                        >
                            <Input type='email' id="email" name="email" placeholder="enter the email name"></Input>
                </Form.Item>
            </form>


            <FormItem label="Password" 
                    name="password"
                    htmlFor='password' 
                    rules={[{required:true,message:"enter the password"}]}
                    >
                    <Input id="password" type="password" placeholder="enter the password"></Input> 
            </FormItem>


            <Form.Item className='special-formitem'
             >
                    <Button type="primary" block htmlType='submit' className='.btn'>
                        Login
                    </Button>
            </Form.Item>
            


        </div>

        
    </div>
    </>
    );
  

}

export default index;
