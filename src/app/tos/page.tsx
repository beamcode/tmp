import Head from 'next/head';

export default function TermsOfService() {
  return (
    <div className="dark">
      <Head>
        <title>Terms of Service</title>
      </Head>
      <div className="bg-gray-800 text-white min-h-screen px-44 py-20">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <section>
            <h2 className="text-2xl font-semibold mt-5">Introduction</h2>
            <p>Welcome to Bettervoxel.io. These terms of service govern your use of our website and services, including our voxel engine and assets marketplace. By accessing or using our service, you agree to be bound by these terms.</p>

            <h2 className="text-2xl font-semibold mt-5">Use of Our Service</h2>
            <p>You agree not to use our service:</p>
            <ul className="list-disc ml-5">
              <li>In any way that violates federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
              <li>To impersonate or attempt to impersonate our company, an employee, another user, or any other person or entity.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-5">Account Information</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the terms, which may result in immediate termination of your account on our service.</p>

            <h2 className="text-2xl font-semibold mt-5">Intellectual Property Rights</h2>
            <p>The service and its original content, features, and functionality are and will remain the exclusive property of Bettervoxel.io and its licensors.</p>

            <h2 className="text-2xl font-semibold mt-5">Termination</h2>
            <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.</p>

            <h2 className="text-2xl font-semibold mt-5">Limitation of Liability</h2>
            <p>In no event shall Bettervoxel.io, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of our service.</p>

            <h2 className="text-2xl font-semibold mt-5">Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

            <h2 className="text-2xl font-semibold mt-5">Contact Us</h2>
            <p>If you have any questions about these terms, please contact us at contact@bettervoxel.io.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
