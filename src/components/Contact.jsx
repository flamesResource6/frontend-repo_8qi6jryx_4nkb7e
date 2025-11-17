import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: 'DC',
    project_type: 'Structural',
    message: '',
    budget: '',
    timeline: ''
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm({
        name: '', company: '', email: '', phone: '', region: 'DC', project_type: 'Structural', message: '', budget: '', timeline: ''
      })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Request a Bid</h2>
            <p className="mt-3 text-gray-600">Tell us about your project and our estimating team will get back within one business day.</p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
              <li>Large-scale structural and industrial demolition</li>
              <li>Public and private sector projects across the DMV</li>
              <li>Licensed, bonded, and insured</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input className="input" placeholder="Company" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
              <input type="email" className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
              <input className="input" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
              <select className="input" value={form.region} onChange={e=>setForm({...form, region:e.target.value})}>
                <option>DC</option>
                <option>Baltimore</option>
                <option>Northern VA</option>
                <option>MD Suburbs</option>
              </select>
              <select className="input" value={form.project_type} onChange={e=>setForm({...form, project_type:e.target.value})}>
                <option>Structural</option>
                <option>Industrial</option>
                <option>Bridge/Infrastructure</option>
                <option>Selective/Interior</option>
              </select>
            </div>
            <textarea className="input" rows="5" placeholder="Project details" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Budget range (optional)" value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} />
              <input className="input" placeholder="Timeline (optional)" value={form.timeline} onChange={e=>setForm({...form, timeline:e.target.value})} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              disabled={status==='loading'}
            >
              {status==='loading' ? 'Sending...' : 'Send Request'}
            </button>
            {status==='success' && <p className="text-green-600 text-sm">Thanks! Well be in touch shortly.</p>}
            {status==='error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
      <style>{`
        .input { @apply w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500; }
      `}</style>
    </section>
  )
}

export default Contact
