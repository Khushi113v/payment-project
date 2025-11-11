import Header from './components/Header';
import Slider from './components/Slider';
import TransferSection from './components/TransferSection';
import RewardsSection from './components/RewardsSection'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F4FFF6' }}>
      <Header />
      <main className="flex-1 pb-24">
        <Slider />
        <TransferSection />
        <RewardsSection /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;