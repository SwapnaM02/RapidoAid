import React from 'react'
import { Button, Checkbox, Form, Input,message } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import Carousel from "../../components/carousel/Carousel";
import {LoginUser} from "../../api/users";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
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
    const onFinish = async(values)=>{
        try{
            const response = await LoginUser(values);
            console.log("response from login",response);
            if(response.success){
                message.success(response.message);
                // if token is present in the previous login, remove the previous token
                if(localStorage.getItem('token')){
                    localStorage.removeItem('token');
                }
                localStorage.setItem('token',response.data);
                if(response.loginuser.role==='admin'){
                    navigate("/admin");
                }
                else if(response.loginuser.role==='hospital'){
                    navigate("/hospital");
                }
                else if(response.loginuser.role==='user'){
                    navigate("/user");
                }
                else if(response.loginuser.role==='ambulance'){
                    navigate("/ambulance");
                }
                
            }
            else{
                message.error(response.message);
            }

        }catch(error){
            message.error(error.message);

        }
    }
    
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
            <div class="login-right-head">
                <p>Login to RapidAid</p>
            </div>

            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label=" Email"
                        name="email"
                        htmlFor='email' 
                        rules={[{required:true,message:"enter the email"},
                            {type:"email",message:"Please enter the valid email"}
                           
                        ]}
                        >
                            <Input type='email' id="email" name="email" placeholder="enter the email name"></Input>
                </Form.Item>

                <FormItem label="Password" 
                    name="password"
                    htmlFor='password' 
                    rules={[{required:true,message:"enter the password"}]}
                    >
                    <Input id="password" type="password" placeholder="enter the password"></Input> 
            </FormItem>


            <Form.Item >
                    <Button type="primary" block htmlType='submit' className='btn'>
                        Login
                    </Button>
            </Form.Item>

                
            </Form>

            <div>
                <p>New user? <Link to="/register">Register Here</Link></p>
            </div>
        </div>
    </div>
    </>
    );
}
export default Login;
