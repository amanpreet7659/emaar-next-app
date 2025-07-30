import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-6">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist.
          </p>
          <Link href="/" className="text-emaar-dark hover:text-emaar-gold">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
