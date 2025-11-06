'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import Breadcrumbs from '@/components/Breadcrumbs'
import ArticleSection from '@/components/ArticleSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <Hero />
      <ArticleSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
