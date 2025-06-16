import { useState } from 'react';
import { signup } from '../api';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const res = await signup(email, password);
    if (res.success) {
      alert('Signup success');
    } else {
      alert(res.message || 'Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
