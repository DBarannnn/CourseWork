import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/auth/authActions';
import { RootState } from '../features/auth/authSlice';
import { RegisterUserPayload } from '../features/auth/authActions';
import "./Register.css"
import { redirect } from 'react-router-dom';
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen = () => {
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormValues>();

  const submitForm: SubmitHandler<FormValues> = (data) => {
    const payload: RegisterUserPayload = {
      name: data.name,
      email: data.email.toLowerCase(),
      password: data.password,
    };

    dispatch(registerUser(payload));
    return redirect("/")
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text' className='form-input' {...register('name')} required />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-input' {...register('email')} required />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-input' {...register('password')} required />
      </div>
      <button type='submit' className='button' disabled={loading}>
        {loading ? 'Loading...' : 'Register'}
      </button>
    </form>
  );
};

export default RegisterScreen;
