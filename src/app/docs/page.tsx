import Image from 'next/image'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-black mb-4">ARThenticity Documentation</h1>
          <p className="text-lg text-gray-600">Complete guide to using our blockchain-based art verification platform</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-black">
              <li><a href="#overview" className="hover:underline">1. Overview</a></li>
              <li><a href="#features" className="hover:underline">2. Features</a></li>
              <li><a href="#blockchain-networks" className="hover:underline">3. Supported Blockchain Networks</a></li>
              <li><a href="#getting-started" className="hover:underline">4. Getting Started</a></li>
              <li><a href="#verification-process" className="hover:underline">5. Art Verification Process</a></li>
              <li><a href="#api-reference" className="hover:underline">6. API Reference</a></li>
              <li><a href="#faq" className="hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
            <p className="text-black mb-4">
              ARThenticity is a cutting-edge blockchain-based platform that provides secure authentication 
              and provenance tracking for digital and physical artworks. Our platform leverages multiple 
              blockchain networks to ensure the highest level of security and accessibility.
            </p>
            <p className="text-black">
              Whether you're an artist looking to protect your work, a collector verifying authenticity, 
              or a gallery managing provenance, ARThenticity provides the tools you need.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">🔐 Secure Authentication</h3>
                <p className="text-black">Advanced cryptographic methods ensure your artwork's authenticity is tamper-proof and verifiable.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">🌐 Multi-Chain Support</h3>
                <p className="text-black">Support for Solana, Polkadot, Ethereum, and Polygon networks for maximum flexibility.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">📜 Provenance Tracking</h3>
                <p className="text-black">Complete ownership history and transfer records stored immutably on the blockchain.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">🎨 Artist Tools</h3>
                <p className="text-black">Comprehensive suite of tools designed specifically for artists and creators.</p>
              </div>
            </div>
          </section>

          {/* Blockchain Networks Section */}
          <section id="blockchain-networks" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Supported Blockchain Networks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Image src="/solana-sol-logo.png" alt="Solana" width={64} height={64} className="mx-auto mb-3" />
                <h3 className="font-bold text-black">Solana</h3>
                <p className="text-sm text-black mt-2">Fast, low-cost transactions</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Image src="/polkadot-new-dot-logo.png" alt="Polkadot" width={64} height={64} className="mx-auto mb-3" />
                <h3 className="font-bold text-black">Polkadot</h3>
                <p className="text-sm text-black mt-2">Interoperable ecosystem</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Image src="/ethereum-eth-logo.png" alt="Ethereum" width={64} height={64} className="mx-auto mb-3" />
                <h3 className="font-bold text-black">Ethereum</h3>
                <p className="text-sm text-black mt-2">Established NFT marketplace</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Image src="/polygon-matic-logo.png" alt="Polygon" width={64} height={64} className="mx-auto mb-3" />
                <h3 className="font-bold text-black">Polygon</h3>
                <p className="text-sm text-black mt-2">Scalable Layer 2 solution</p>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Getting Started</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">Step 1: Create Account</h3>
                <p className="text-black">Sign up for your ARThenticity account and connect your preferred wallet.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">Step 2: Upload Artwork</h3>
                <p className="text-black">Upload your digital artwork or provide details for physical pieces.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">Step 3: Choose Network</h3>
                <p className="text-black">Select your preferred blockchain network for verification.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">Step 4: Verify & Mint</h3>
                <p className="text-black">Complete the verification process and mint your authenticity certificate.</p>
              </div>
            </div>
          </section>

          {/* Verification Process Section */}
          <section id="verification-process" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Art Verification Process</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">How It Works</h3>
              <ol className="list-decimal list-inside space-y-3 text-black">
                <li>Artist uploads artwork metadata and proof of creation</li>
                <li>Our AI-powered system analyzes the artwork for authenticity markers</li>
                <li>Blockchain verification creates an immutable record</li>
                <li>Digital certificate is generated and stored on-chain</li>
                <li>QR code or NFC tag links physical artwork to digital certificate</li>
              </ol>
            </div>
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">API Reference</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Authentication Endpoint</h3>
              <code className="block bg-gray-800 p-3 rounded mb-4">
                POST /api/v1/authenticate
              </code>
              <p className="mb-4">Authenticate artwork and create verification record.</p>
              
              <h4 className="font-bold mb-2">Request Body:</h4>
              <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
{`{
  "artworkId": "string",
  "metadata": {
    "title": "string",
    "artist": "string",
    "creationDate": "string",
    "medium": "string"
  },
  "blockchain": "solana|ethereum|polygon|polkadot"
}`}
              </pre>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-black mb-2">What makes ARThenticity different from other platforms?</h3>
                <p className="text-black">Our multi-chain approach and advanced AI verification provide unparalleled security and flexibility.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-black mb-2">How much does verification cost?</h3>
                <p className="text-black">Costs vary by blockchain network. Solana offers the most cost-effective option, while Ethereum provides maximum compatibility.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-black mb-2">Can I verify physical artworks?</h3>
                <p className="text-black">Yes! We provide NFC tags and QR codes that link physical pieces to their digital certificates.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Need More Help?</h2>
            <p className="text-black mb-6">Our support team is here to help you get the most out of ARThenticity.</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Contact Support
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}