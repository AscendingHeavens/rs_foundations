import { CaseStudiesPage } from '@/components/CaseStudyPage'
import TechFeature from '@/components/TechFeature'
import TechHero from '@/components/TechHero'
import TechList from '@/components/TechList'
import TechTestimonial from '@/components/TechTestimonial'
import React from 'react'

const SolutionsPage = () => {
  return (
    <><TechHero />
    <TechList />
  <CaseStudiesPage/>
    <TechTestimonial/>
    </>
  )

}

export default SolutionsPage