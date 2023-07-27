import Layout from '../../../components/Layout.component';

import Navigation from './components/Navigation.component';
import UserRank from './components/UserRank.component';
import ImageLinkForm from './components/ImageLinkForm.component';
import FaceRecognition from './components/FaceRecognition.component';

const FaceDetectionPage = () => {
  return (
    <Layout>
      <main className="h-full w-full flex flex-col items-center bg-gradient-to-br from-purple-300 to to-blue-400">
        <Navigation />
        <section
          className={`
          h-full
          flex flex-col
          items-center justify-between
           pt-10 pb-10
           `}
        >
          <UserRank />
          <ImageLinkForm />
          <FaceRecognition />
        </section>
      </main>
    </Layout>
  );
};

export default FaceDetectionPage;
