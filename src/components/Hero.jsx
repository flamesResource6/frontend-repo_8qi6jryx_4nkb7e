import { Building2, Phone } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
              <Building2 className="w-4 h-4" />
              Large-Scale Demolition Experts
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Heavy Demolition for DC, Baltimore, and Northern Virginia
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Trusted partner for complex, large-scale demolition projects. From
              high-rise structures to industrial facilities, we deliver safe,
              efficient, and compliant results on tight timelines.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                Request a Bid
              </a>
              <a
                href="tel:+12025550123"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-800 font-semibold bg-white hover:bg-gray-50 transition"
              >
                <Phone className="w-4 h-4 mr-2" /> (202) 555-0123
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Licensed • Bonded • Insured • OSHA-Certified Crews
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl shadow p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'High-Rise', value: 'Structural demo' },
                { label: 'Industrial', value: 'Plants & facilities' },
                { label: 'Bridges', value: 'Infrastructure' },
                { label: 'Selective', value: 'Interior/soft demo' },
              ].map((item) => (
                <div key={item.label} className="border rounded-lg p-4">
                  <div className="text-gray-500 text-sm">{item.label}</div>
                  <div className="font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Serving general contractors, developers, and public agencies.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
