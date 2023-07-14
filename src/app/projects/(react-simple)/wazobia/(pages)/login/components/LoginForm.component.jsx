import LoginFormTextbox from './LoginFormTextbox.component';
import LoginFormButton from './LoginFormButton.component';

const LoginForm = () => {
  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <LoginFormTextbox
          htmlFor="email-address"
          labelText="Email address"
          htmlID="email-address"
          name="email"
          type="email"
          autoComplete="email"
          placeholderText="Email address"
        />
        <LoginFormTextbox
          htmlFor="password"
          labelText="Password"
          htmlID="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholderText="Password"
        />
      </div>

      <LoginFormButton />
    </form>
  );
};

export default LoginForm;
