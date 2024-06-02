import logoDiet from '../assets/Logo.png';
import avatar from '../assets/avatar.jpg';

export function Header() {
  return (
    <header className="flex justify-between max-w-7xl mx-auto p-5">
      <div>
        <img src={logoDiet} alt="Logo Daily Diet" />
      </div>
      <div>
        <img className="w-10 rounded-full" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
}
