import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Sidebar from './components/Sidebar.tsx';
import Home from './pages/Home.tsx';
import Code from './pages/Code.tsx';
import Header from './pages/Header.tsx';
import './styles.css';
import Guild from './pages/Guild.tsx';

const App: React.FC = () => {
   return (
      <div className="app-container">
         <HelmetProvider>
            <Helmet>
               <title>Toxic DKP</title>
               <meta name="description" content="Beginner friendly page for learning React Helmet." />
            </Helmet>
            <Header />
            <main className="main-content">
               <Sidebar />
               <div className="page-content">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/code" element={<Code />} />
                     <Route path="/guild/:id" element={<Guild />} />
                     <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
               </div>
            </main>
         </HelmetProvider>
      </div>
   );
};

export default App;
