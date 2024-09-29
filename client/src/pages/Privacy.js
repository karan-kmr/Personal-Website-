import React from 'react'
import Navbar from '../components/major/navbar'
import Footer from "../components/major/CopyrightBar"
function Privacy() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <section className="section-container w-full bg-highlight " id="pagepulse-privacy">
        <h1 class="text-2xl font-bold mb-0">Privacy Policy for Pagepulse: Web Performance Metrics</h1>
        <p class="mb-0"><strong>Effective Date:</strong> September 30, 2024</p>

        <h2 class="text-xl font-semibold mt-2">1. Introduction</h2>
        <p class="mb-0">This Privacy Policy outlines the practices concerning the collection, use, and protection of information by the Web Performance Metrics Overlay (hereafter referred to as the "Extension"). We value your privacy and are committed to safeguarding your information while providing you with a seamless experience while using our Extension.</p>

        <h2 class="text-xl font-semibold mt-2">2. Information We Collect</h2>
        <p class="mb-0">Our Extension is designed with your privacy in mind. It does not collect any personally identifiable information or user data. Instead, it operates exclusively on the active tab of your browser, allowing it to gather real-time performance metrics for the webpage you are currently viewing. This means that no information about your browsing habits or personal details is stored or transmitted.</p>

        <h2 class="text-xl font-semibold mt-2">3. How We Use Your Information</h2>
        <p class="mb-0">The data gathered from the active tab is utilized solely for the purpose of displaying performance metrics such as loading times, resource performance, and usability scores. This information is processed entirely on your device and is not transmitted to any external servers or third parties. We are dedicated to ensuring that your data remains confidential and secure while you use our Extension.</p>

        <h2 class="text-xl font-semibold mt-2">4. Permissions</h2>
        <p class="mb-0">To function correctly, the Extension may request certain permissions from your browser. These include:</p>
        <ul class="list-disc list-inside mb-0">
            <li><strong>Active Tab Permission:</strong> This permission allows the Extension to retrieve information about the active tab, enabling it to provide accurate performance metrics for the webpage you are currently viewing.</li>
            <li><strong>Host Permissions:</strong> The Extension may request host permissions to ensure it operates correctly on specific sites. This is necessary for analyzing webpage performance metrics effectively on those sites.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-2">5. Data Security</h2>
        <p class="mb-0">We take data security very seriously and have implemented reasonable security measures to protect any information processed by the Extension. However, it's important to note that no method of transmission over the Internet or electronic storage can be guaranteed to be 100% secure. As such, while we strive to protect your information, we cannot guarantee absolute security against breaches.</p>

        <h2 class="text-xl font-semibold mt-2">6. Changes to This Privacy Policy</h2>
        <p class="mb-0">We may periodically update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will notify you by posting the updated Privacy Policy on this page. We encourage you to review this Privacy Policy regularly to stay informed about our information practices and your privacy rights.</p>

        <h2 class="text-xl font-semibold mt-2">7. Contact Us</h2>
        <p class="mb-0">If you have any questions or concerns regarding this Privacy Policy or our data practices, please feel free to contact us at:</p>
        <p class="mb-0"><strong>contact@karankumar.dev</strong></p>

        <p>By installing and using the Web Performance Metrics Overlay Extension, you acknowledge that you have read and understood this Privacy Policy, and you consent to the practices described herein.</p>

        </section>
<Footer></Footer>
    </React.Fragment>
    
  )
}

export default Privacy