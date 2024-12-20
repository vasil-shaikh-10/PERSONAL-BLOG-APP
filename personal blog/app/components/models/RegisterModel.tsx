'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { useCallback, useState } from 'react';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form'

import userRegisterModel from '@/app/hooks/userRegisterModel';
import Model from './Model';
import Heading from '../Heading';
import Input from '../input/Input';
import toast from 'react-hot-toast';
import Button from '../Button';

const RegisterModel = () =>{
    const registerModal = userRegisterModel();
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
        axios.post('/api/register',data)
        .then(()=>{
            registerModal.onClose();
        })
        .catch((err)=>{
           toast.error('Something went Wrong !')
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    const bosyContent =(
        <div className='flex flex-col gap-4'>
            <Heading 
                title='Welcome To Airbnb'
                subtitle='Create an Account!'
            />
            <Input id="email" label='Email' disabled={isLoading} register={register} errors={errors} required/>
            <Input id="name" label='Name' disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" type='password' label='Password' disabled={isLoading} register={register} errors={errors} required/>
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-2 mt-3 p-6'>
            <hr/>
            <Button outline label='Continue with Google' icon={FcGoogle} onClick={()=>{}}/>
            <Button outline label='Continue with Github' icon={AiFillGithub} onClick={()=>{}}/>
            <div className='justify-center flex flex-row items-center gap-3 mt-3 text-zinc-500'>
                <div>Already have an account ?</div>
                <div onClick={registerModal.onClose} className='text-neutral-800 cursor-pointer' >Log in</div>
            </div>
        </div>
    )
    return(
        <Model disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bosyContent} footer={footerContent}/>
    )
} 

export default RegisterModel