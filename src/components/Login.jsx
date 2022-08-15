import { Form, Input, Button } from 'antd';
const handleForm = ({ email, password }) => {
alert('Form submitted with ' + email + 'and ' + password)
}

function Login() {
    return (
        <>
        <h2>Login</h2>
        <Form labelCol={{ span: 8 }} wrappedCol={{ span: 16 }}>
        <Form.Item label="Email" name="email" rules={[{
            required: true,
            message: 'Please enter a valid email'
            
        }]}>
            <input />
            <Form.Item/>
             <Form.Item label="Password" name="password" rules={[{
            required: true,
            message: 'Please enter a valid password'
            
        }]}>
            <Input.Password />
            <Button type="primary" htmlType='submit'>Submit</Button>
            
            <Form/>
        </>
    )
}

export default Login;