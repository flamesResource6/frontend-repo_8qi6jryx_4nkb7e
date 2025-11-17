import { ShieldCheck, HardHat, Factory, Building2, Landmark, Ruler } from 'lucide-react'

function Capabilities() {
  const items = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: 'Structural Demolition',
      desc: 'High-rise, mid-rise, and complex structural takedowns with engineered means and methods.'
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: 'Industrial Facilities',
      desc: 'Power plants, manufacturing sites, warehouses, and heavy industrial assets.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-blue-600" />,
      title: 'Bridges & Infrastructure',
      desc: 'Bridge spans, piers, and public works with traffic control and environmental compliance.'
    },
    {
      icon: <HardHat className="w-6 h-6 text-blue-600" />,
      title: 'Selective & Interior',
      desc: 'Soft strip, interior gut, and surgical demolition in occupied buildings.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-blue-600" />,
      title: 'Engineering & Planning',
      desc: 'Turnkey preconstruction, sequencing, and engineered demolition plans.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Safety & Compliance',
      desc: 'OSHA-trained crews, dust/noise control, and environmental stewardship.'
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Capabilities</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Built for large-scale demolition. We mobilize equipment, engineering, and
          experienced crews to deliver at pace.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-xl shadow p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                {it.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
