import Input from "./Input";

const LoginModal = () => {
  return (
    <form className="registration-form">
      <h2>Login</h2>
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginModal;
