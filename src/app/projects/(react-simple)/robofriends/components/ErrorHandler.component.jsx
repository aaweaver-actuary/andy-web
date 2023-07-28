import Button from '../../../../components/Button.component';

const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>(and it is absolutely humiliating)</h2>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

export default ErrorHandler;
