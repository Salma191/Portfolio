import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, Skills,  Education, Contacts, Projects, Certificat } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <Education />
            <Skills />            
            <Projects />
            <Certificat />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
