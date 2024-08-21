import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSectin from './_components/TemplateListSection'

function Dashboard() {
  return (
    <div>
      
      {/* Search Section */}
      <SearchSection/>
    
      {/* Template Section */}
      <TemplateListSectin/>
      
    </div>
  )
}

export default Dashboard