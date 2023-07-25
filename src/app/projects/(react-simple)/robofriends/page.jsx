import Layout from '../../../components/Layout.component';
import Search from './components//Search.component';
import Header from './components/Header.component';
import RoboList from './components/RoboList.component';

const RobofriendsPage = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center space-y-3">
        <Header />
        <Search />
        <RoboList />
      </main>
    </Layout>
  );
};

export default RobofriendsPage;
