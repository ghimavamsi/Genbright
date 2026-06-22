
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ParentQuestions from './components/sections/ParentQuestions';
import Approach from './components/sections/Approach';
import Foundations from './components/sections/Foundations';
import Banyara from './components/sections/Banyara';
import LearningCentres from './components/sections/LearningCentres';
import Future from './components/sections/Future';
import WhyChoose from './components/sections/WhyChoose';
import Campus from './components/sections/Campus';
import FounderMessage from './components/sections/FounderMessage';
import Different from './components/sections/Different';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <ParentQuestions />
        <Approach />
        <Foundations />
        <Banyara />
        <LearningCentres />
        <Future />
        <WhyChoose />
        <Campus />
        <FounderMessage />
        <Different />
      </main>
      <Footer />
    </div>
  );
}

export default App;
