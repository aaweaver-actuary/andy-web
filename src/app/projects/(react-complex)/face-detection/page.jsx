import Layout from '../../../components/Layout.component';

import Navigation from './components/Navigation.component';
import Logo from './components/Logo.component';
import UserRank from './components/UserRank.component';
import ImageLinkForm from './components/ImageLinkForm.component';
import FaceRecognition from './components/FaceRecognition.component';

const FaceDetectionPage = () => {
  return (
    <Layout>
      <main className="h-full w-full flex flex-col items-center">
        <Navigation />
        <UserRank />
        <ImageLinkForm />
        <FaceRecognition />
      </main>
    </Layout>
  );
};

export default FaceDetectionPage;
