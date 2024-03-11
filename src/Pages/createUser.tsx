import React, {useState} from 'react'
import { Container, Paper, Typography, TextField, Button, Stack } from '@mui/material'
import { UserType } from '../core/Type/userType'
import { useUserData } from '../core/context/userDataContext'
import useFormValidate from '../core/hook/useValidate'

const obj: UserType = {
    firstName: '',
    middleName: '',
    lastName: ''
}

const CreateUser = () => {
    const [user, setUser] = useState<UserType>(obj)

    const { InserData } = useUserData()
    const { useValidate, errors } = useFormValidate()

    const handleChange = (e: any) => {
        const value = e.currentTarget.value
        const name = e.target.name

        setUser((prevState: any) => ({
            ...prevState,
            [name]: value
        }))
    }

    const HandleSubmit = (e:any) => {
        e.preventDefault()
        const isValid = useValidate(user)
        if(isValid){
            InserData(user)
            alert("success")
            setUser(obj)             
        }
    }

  return (
    <Container style={{
        padding: "10px 250px"
    }}>
        <Paper elevation={8} style={{
            margin: '30px',
            padding: '30px'
        }}>
            <div className='w-full flex justify-center p-4'>
                <Typography variant='h5'>CREATE USER</Typography>
            </div>
                <Stack spacing={2}>
                        <TextField
                            variant='outlined'
                            fullWidth
                            label="First Name"
                            name='firstName'
                            onChange={handleChange}
                            value={user.firstName}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                        <TextField
                            variant='outlined'
                            fullWidth
                            label="Middle Name"
                            name='middleName'
                            onChange={handleChange}
                            value={user.middleName}
                            error={!!errors.middleName}
                            helperText={errors.middleName}
                        />
                        <TextField
                            variant='outlined'
                            fullWidth
                            label="Last Name"
                            name='lastName'
                            onChange={handleChange}
                            value={user.lastName}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />     
                        <Button variant='contained' onClick={HandleSubmit}>
                            Submit
                        </Button>                    
                </Stack>
        </Paper>
    </Container>
  )
}

export default CreateUser