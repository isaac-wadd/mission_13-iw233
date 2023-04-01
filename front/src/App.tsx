
import React from 'react'

// bootstrap styles
import './styles.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import Podcasts from './components/Podcasts'
import { movieData } from './MovieData'

export default function App() {

// default component used for page is home, otherwise check route
  let component = <HomePage />

// check which page needs to be shown
  switch (window.location.pathname) {
    case '/movies':
      component = <MoviesPage movies={movieData} />
      break
    case '/podcasts':
      component = <Podcasts />
      break
  }

// universal layout: navbar, main body (section) then footer
  return (
    <>
      <NavBar />
      <br />
      <section className='container container-fluid text-center'>
        { component }
      </section>
      <Footer />
    </>
  );
}
