import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16 my-2">
            <div className="flex items-center gap-16">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Features
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Developers
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Pricing
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Changelog
                </Button>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl">Join waitlist</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-0 sm:pt-40">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_0%,_#3b0764,_#0c0a09_25%,_#0c0a09_75%,_#3b0764_100%)] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center rounded-full px-4 py-1 mb-8 
            bg-purple-900/50 border border-purple-700/50 
            shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Latest integration just arrived</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Boost your
            <br />
            rankings <span className="text-purple-400">with AI.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-8">
            Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-100 mb-16">
            Start for free
          </Button>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto mt-20 mb-0">
            <div className="relative rounded-lg overflow-hidden">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-purple-600/40 blur-[50px]" />
              <div className="absolute inset-0 bg-purple-500/20 blur-[100px]" />
              <Image
                src="https://sjc.microlink.io/8zHkHXToMecmGpDyfKeIDWtX51AcVieUwLoi4p-DMrro5tGKZx9K2nYAxezMQTwioQLO8i_ixhMEl0sSsSi2cQ.jpeg"
                alt="AI Kit Dashboard"
                width={1200}
                height={675}
                className="relative rounded-lg border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="relative mt-0 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Testimonial 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GicK90aYtt8zrKnsr4RPexb2hOnWFR.png"
                          alt="Talia Taylor"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "This product has completely transformed how I manage my projects and deadlines"
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">Talia Taylor</div>
                        <div className="text-sm text-gray-400">Digital Marketing Director @ Quantum</div>
                      </footer>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Alex Chen"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "The AI-powered insights have given us a competitive edge in our market research"
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">Alex Chen</div>
                        <div className="text-sm text-gray-400">Lead Analyst @ DataFlow</div>
                      </footer>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Sarah Martinez"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "Implementation was seamless, and the results were immediate and impressive"
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">Sarah Martinez</div>
                        <div className="text-sm text-gray-400">CTO @ TechForward</div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="relative mt-0 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Pricing.</h2>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Choose the right plan to meet your SEO needs and start optimizing today.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-2 mb-12">
                <div className="h-6 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 px-1 inline-flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 mr-2" />
                  <span className="text-sm text-gray-300 pr-2">Billed yearly</span>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Basic Plan */}
                <div className="relative group">
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                      <div className="text-3xl font-bold text-white mb-6">
                        $29<span className="text-lg font-normal text-gray-400">/mo</span>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Keyword optimization
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Automated meta tags
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          SEO monitoring
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Monthly reports
                        </li>
                      </ul>

                      <Button variant="outline" className="w-full">
                        Try for free
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="absolute -top-3 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                      <div className="text-3xl font-bold text-white mb-6">
                        $79<span className="text-lg font-normal text-gray-400">/mo</span>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Keyword optimization
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Automated meta tags
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          SEO monitoring
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Monthly reports
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Content suggestions
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Link optimization
                        </li>
                      </ul>

                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get started</Button>
                    </div>
                  </div>
                </div>

                {/* Business Plan */}
                <div className="relative group">
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
                      <div className="text-3xl font-bold text-white mb-6">
                        $149<span className="text-lg font-normal text-gray-400">/mo</span>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Keyword optimization
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Automated meta tags
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          SEO monitoring
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Monthly reports
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Content suggestions
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Link optimization
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Multi-user access
                        </li>
                        <li className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          API integration
                        </li>
                      </ul>

                      <Button variant="outline" className="w-full">
                        Get started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative mt-0 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32 pb-20">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Contact us.</h2>
              <p className="text-lg text-gray-400 mb-12">
                Integrates effortlessly with all major content management systems with no technical setup required.
              </p>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(147,51,234,0.2)]">
                <form className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">First name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">Last name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        placeholder="jane@framer.com"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">Company name</label>
                      <input
                        type="text"
                        placeholder="Framer"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm text-gray-400">How can we help?</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your problem"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    />
                  </div>

                  <Button className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto sm:justify-self-center px-8">
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative mt-0 border-t border-white/10 bg-gradient-to-b from-purple-900/10 to-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <nav className="py-8">
                {/* Primary Navigation */}
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-4">
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Index
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Example 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Example 2
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Navigation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Footer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Hero
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Button
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      3D Assets
                    </Link>
                  </li>
                </ul>

                {/* Secondary Navigation */}
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Icons
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Patterns
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Typography
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      CTA
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
