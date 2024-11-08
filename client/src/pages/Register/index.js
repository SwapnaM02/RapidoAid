import React from 'react';
import{Form,Button,Input,Radio} from 'antd'; 
import FormItem from 'antd/es/form/FormItem';



const index = () => {
    
  return (
    <div class="register grid">

        {/* register details */}
        <div class="register_details  ">

            <div class="register_logo flex">
                <i class="fa-sharp fa-solid fa-truck-medical "></i>
                <p>RapidAid</p>


            </div>

           <div>
            <p class="register-first-par">Fast help when seconds count</p>
            <p class="register-second-par">At RapidAid, we believe that every second counts in an emergency. Our platform is designed to ensure that you and your loved ones receive the quickest and most efficient emergency services possible. Here's how we make a difference:</p>
           </div>


           <div class="regsiter-card">
            <p>Why RapidAid?</p>
            <ul>
                <li class="register-li"><span>Swift Emergency Response : </span>Get immediate help with our lighting-fast booking system for hospitals and ambulances.</li>
                <li class="register-li"><span>Trusted Care Network : </span>Connect with top-notch hospitals and trained emergency responders.</li>
                <li class="register-li"><span>Realtime Updates : </span>Stay informed with live notifications and updates on your service requests.</li>
            </ul>

           </div>
            

        </div>
        {/* end of register details */}


        {/* register form */}
        <div class="register-form">
            <div>
                <p>Register to RapidAid</p>
            </div>

            <div class="reg-form">
                <Form  layout='vertical' className='input-form'>
                    <Form.Item 
                    label=" First Name"
                    name="firstname"
                    htmlFor='firstname'
                    rules={[{required:true,message:"enter the firstname"}]}>
                        <Input type='text' id="firstname" name="firstname" placeholder="enter the first name"></Input>
                    </Form.Item>

                    <Form.Item label=" Last Name"
                    name="lastname"
                    htmlFor='lastname'
                    rules={[{required:true,message:"enter the firstname"}]}>
                        <Input type='text' id="lastname" name="lastname" placeholder="enter the last name"></Input>
                    </Form.Item>

                    


                    <Form.Item label=" email"
                    name="email"
                    className='special-formitem'
                    htmlFor='email' rules={[{required:true,message:"enter the email"}]}>
                        <Input type='email' id="email" name="email" placeholder="enter the email name"></Input>
                    </Form.Item>

                    <FormItem label="country"
                    name="country"
                    htmlFor='country' rules={[{required:true,message:"enter the country"}]}>
                    <Input id="country" type="text" placeholder="enter the country"></Input> 
                    </FormItem>


                    <FormItem label="state"
                    name="state"
                    htmlFor='state' rules={[{required:true,message:"enter the country"}]}>
                    <Input id="state" type="text" placeholder="enter the state"></Input> 
                    </FormItem>

                    <FormItem label="phonenumber" className='special-formitem'
                    name="phonenumber"
                    htmlFor='phonenumber' rules={[{required:true,message:"enter the phonenumber"}]}>
                    <Input id="phonenumber" type="number" placeholder="enter the phonenumber"></Input> 
                    </FormItem>


                    <FormItem label="password" className='special-formitem'
                    name="password"
                    htmlFor='password' rules={[{required:true,message:"enter the password"}]}>
                    <Input id="password" type="password" placeholder="enter the password"></Input> 
                    </FormItem>


                    <Form.Item label="Role" 
                    name="role" 
                    htmlFor='role' 
                    rules={[{ required: true, message: "Select your role" }]}
                    > 
                        <Radio.Group> 
                            <Radio value="admin"> <i class="fa-sharp fa-solid fa-user-tie"></i> Admin </Radio> 
                            <Radio value="user"><i class="fa-sharp fa-solid fa-users"></i>  User </Radio> 
                            <Radio value="hospital"> <i class="fa-duotone fa-solid fa-hospital"></i> Health organization </Radio>
                            <Radio value="ambulance"> <i class="fa-sharp fa-solid fa-truck-medical"></i> Health organization </Radio>
                             </Radio.Group> </Form.Item>


                    
                </Form>


                
                    
             
                

            </div>

        </div>
        {/* end of regsiter form */}
     
    </div>
  )
}

export default index
