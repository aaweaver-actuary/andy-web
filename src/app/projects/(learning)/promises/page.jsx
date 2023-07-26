import CodePageLayout from '../../../components/CodePageLayout.component';

const PromisesPage = () => {
  return (
    <CodePageLayout>
      {`
      // how to define a promise:
      const promise = new Promise((resolve, reject) => {
        if(true) {
          resolve('Stuff worked');
        } else {
          reject('Error, it broke');
        }
      });

      // how to use a promise:
      promise
        .then(result => console.log(result))
      `}
    </CodePageLayout>
  );
};

export default PromisesPage;
