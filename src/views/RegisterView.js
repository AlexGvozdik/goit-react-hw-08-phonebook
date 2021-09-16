import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register} from '../redux/auth/auth-operations';
import s from './View.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('')
    setPassword('');
    
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
      <label className={s.label}>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button   type="submit">Registartion</button>
      </form>
    </div>
  );
}
