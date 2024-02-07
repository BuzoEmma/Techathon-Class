import { UserList } from "./ReactContext/ReactContext";

const UserProfile = () => {
  const { User, Count, handleCount } = UserList();

  return (
    <div>
      My name is {User.name}
      <div>I'm a {User.work} In Techathon</div>
      <h2>Couting my numbers {Count}</h2>
      <button onClick={handleCount}>Click me</button>
    </div>
  );
};

export default UserProfile;
