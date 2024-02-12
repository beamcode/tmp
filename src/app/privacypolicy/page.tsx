import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="dark">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="bg-gray-800 text-white min-h-screen px-44 py-20">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <section>
            <h2 className="text-2xl font-semibold mt-5">Introduction</h2>
            <p>Welcome to Bettervoxel.io. This privacy policy outlines how we collect, use, and protect your information when you use our website, including our voxel engine and assets marketplace.</p>

            <h2 className="text-2xl font-semibold mt-5">Information Collection and Use</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-5">
              <li><strong>Personal Information:</strong> This may include your name, email address, and other contact details when you register or make a purchase on our marketplace.</li>
              <li><strong>Usage Data:</strong> Information on how you access and use our website, including details of your interactions with our voxel engine and marketplace.</li>
              <li><strong>Cookies and Tracking Data:</strong> We may use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-5">How We Use Your Information</h2>
            <p>Your information may be used for the following purposes:</p>
            <ul className="list-disc ml-5">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our website when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-5">Data Security</h2>
            <p>We value your trust in providing us your personal information and strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h2 className="text-2xl font-semibold mt-5">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. These changes are effective immediately after they are posted on this page.</p>

            <h2 className="text-2xl font-semibold mt-5">Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contact@bettervoxel.io .</p>
          </section>
        </div>
      </div>
    </div>
  );
}