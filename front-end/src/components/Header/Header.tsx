import logoDiet from '../../assets/Logo.png';
import avatar from '../../assets/avatar.jpg';

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto p-5">
      <div>
        <img src={logoDiet} alt="Logo Daily Diet" />
      </div>
      <div>
        <img
          className="w-12 rounded-full border-4 border-black"
          src={avatar}
          alt="Avatar"
        />
      </div>
    </header>
  );
}
