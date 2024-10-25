import React from 'react'
import Header from '../Header'
import AuditSection from '../Audit-Section'
import PortfolioTable from '../PortfolioTable'
import Ctacomponents from '../Cta-components'
import './style.css'
import StatsSection from '../StatsComponent'
function Portfolio() {
  return (
<>
<Header/>
<AuditSection/>
<PortfolioTable/>
<div className="por-cta">
<Ctacomponents title="Leading the Wave of Web3 Security"/>
<StatsSection/>
</div>
</>
  )
}

export default Portfolio