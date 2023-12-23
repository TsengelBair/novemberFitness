import InputField from "./Input";

const RegisterModal = () => {
  return (
    <form className="registration-form">
      <h2>Registration</h2>
      <InputField type="email" placeholder="Enter your email" />
      <InputField type="password" placeholder="Enter your password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterModal;
