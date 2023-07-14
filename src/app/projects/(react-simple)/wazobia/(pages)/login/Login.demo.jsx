import PageHeading from '../../components/PageHeading.component';
import LoginForm from './components/LoginForm.component';

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-10">
        <main>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <PageHeading title="Login" />
              <LoginForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
