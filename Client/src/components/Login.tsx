import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUserPayload, userLogin } from '../features/auth/authActions';
import { RootState } from '../features/auth/authSlice';
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])


  
  const submitForm: SubmitHandler<FormValues> = (data) => {
    const payload: LoginUserPayload = {
      email: data.email.toLowerCase(),
      password: data.password,
    };

    dispatch(userLogin(payload));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-input' {...register('email')} required />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-input' {...register('password')} required />
      </div>
      <button type='submit' className='button' disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
};

export default LoginScreen;
