import React from 'react';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer';
import Videos from '../../components/Videos';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <Videos />
      <Footer />
    </div>
  );
}

export default Home;
