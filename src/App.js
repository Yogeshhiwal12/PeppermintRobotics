import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OurProducts from './components/OurProducts';
import FeaturedPositions from './components/FeaturedPositions';
import EmployeeTestimonials from './components/EmployeeTestimonials';
import Awards from './components/Awards';
import Matrix from './components/Matrix'
import Hiring from './components/CompanyCulture';
import Footer from './components/Footer';
import SocialMediaIntegration from './components/SocialMediaIntegration';
import SupportedBy from './components/SupportedBy';
import OurCustomers from './components/OurCustomers';


function App() {
  return (
    <>
      <CssBaseline />
      
      <Header />
      <Hero />
      <About />
      <OurProducts />
      <FeaturedPositions />
      
      <SupportedBy />
      <Awards />
      <Matrix />
      <OurCustomers />
      <EmployeeTestimonials />
     
      <Hiring />
     
      <Footer />
      <SocialMediaIntegration />
    </>
  );
}

export default App;
