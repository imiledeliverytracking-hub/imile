import TrackingForm from "@/components/TrackingForm";
import { Package, Truck, Clock, ShieldCheck, HelpCircle, Phone, MapPin, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FAQSchema />
      
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-red-600 tracking-tight">iMile</span>
            <span className="text-xl font-semibold text-slate-800">Tracking</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="#track" className="hover:text-red-600 transition-colors">Track</Link>
            <Link href="#statuses" className="hover:text-red-600 transition-colors">Statuses</Link>
            <Link href="#contact" className="hover:text-red-600 transition-colors">Contact</Link>
            <Link href="#faq" className="hover:text-red-600 transition-colors">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="track" className="w-full py-24 px-4 bg-gradient-to-b from-white to-red-50 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Track Your <span className="text-red-600">iMile</span> Delivery <br/>
            <span className="text-2xl md:text-3xl text-slate-500 font-medium mt-2 block">Real-time Status & Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Enter your 13-digit iMile tracking number below to see exactly where your package is.
          </p>
          
          <div className="pt-4 pb-8">
            <TrackingForm />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-600" /> Official Data Source</span>
            <span className="flex items-center gap-2"><Clock size={18} className="text-blue-600" /> Instant Updates</span>
            <span className="flex items-center gap-2"><Truck size={18} className="text-red-600" /> Global Coverage</span>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Track Your iMile Package</h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Find your Tracking Number</h3>
                  <p className="text-slate-600">Look for the 13-digit number (e.g., 6123456789123) in your SMS or email confirmation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Enter in the Search Box</h3>
                  <p className="text-slate-600">Paste the number into the tracking field above and click the search button.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Get Real-Time Status</h3>
                  <p className="text-slate-600">View the current location, estimated delivery time, and history of your shipment.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-amber-500" /> Tracking Number Format
            </h3>
            <p className="text-slate-600 mb-4">
              iMile tracking numbers typically consist of <strong>13 digits</strong> and often start with the number <strong>6</strong> or <strong>4</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-center text-lg text-slate-700">
              6001234567890
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">Example Format</p>
          </div>
        </div>
      </section>

      {/* Status Definitions */}
      <section id="statuses" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Understanding Tracking Statuses</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Confused by the updates? Here is what each status means for your delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusCard 
              title="Order Created" 
              desc="The merchant has created the shipping label, but iMile hasn't received the package yet."
              color="bg-blue-50 text-blue-700"
            />
            <StatusCard 
              title="In Transit" 
              desc="Your package is moving through the iMile network between facilities or countries."
              color="bg-amber-50 text-amber-700"
            />
            <StatusCard 
              title="Out for Delivery" 
              desc="The courier has your package and is on the way to your doorstep right now."
              color="bg-purple-50 text-purple-700"
            />
            <StatusCard 
              title="Delivered" 
              desc="The package has been successfully handed over to you or placed in a safe spot."
              color="bg-green-50 text-green-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">iMile Customer Service Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
              <Phone className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">UAE & Global</h3>
              <p className="text-slate-600 font-medium">+971 58 956 0844</p>
              <p className="text-slate-500 text-sm mt-1">customerservice@imile.me</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
              <Phone className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Saudi Arabia (KSA)</h3>
              <p className="text-slate-600 font-medium">9200 14681</p>
              <p className="text-slate-500 text-sm mt-1">ksa@imile.me</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Headquarters</h3>
              <p className="text-slate-600 text-sm">
                Plot No. 2, Dubai,<br/>United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQItem 
              question="Why is my iMile tracking not updating?"
              answer="Tracking updates can sometimes pause if the package is clearing customs or moving between facilities over the weekend. If there is no update for more than 3 days, please contact iMile support."
            />
            <FAQItem 
              question="What time does iMile deliver?"
              answer="iMile typically delivers between 9:00 AM and 9:00 PM. During peak seasons (like White Friday or Ramadan), delivery hours may extend."
            />
            <FAQItem 
              question="Does iMile deliver on weekends?"
              answer="Yes, iMile operates 7 days a week in many major cities across UAE and KSA to ensure fast delivery."
            />
            <FAQItem 
              question="How can I contact the iMile courier?"
              answer="Once your status is 'Out for Delivery', you will usually receive an SMS with the driver's mobile number. You can call them directly to coordinate."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-slate-900 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white block mb-4">iMile Tracking</span>
            <p className="max-w-xs">
              The fastest and most accurate way to track your iMile shipments across the Middle East and worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#track" className="hover:text-white">Track Package</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Regions</h4>
            <ul className="space-y-2">
              <li>UAE Tracking</li>
              <li>KSA Tracking</li>
              <li>Kuwait Tracking</li>
              <li>Mexico Tracking</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p>© {new Date().getFullYear()} imiledeliverytracking.com. All rights reserved.</p>
          <p className="mt-2 text-xs">Disclaimer: This is an independent tracking tool and is not affiliated with iMile Delivery Services.</p>
        </div>
      </footer>
    </main>
  );
}

function StatusCard({ title, desc, color }: { title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${color}`}>
        {title}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-start gap-2">
        <HelpCircle className="w-5 h-5 text-red-600 mt-1 shrink-0" />
        {question}
      </h3>
      <p className="text-slate-600 pl-7">{answer}</p>
    </div>
  );
}
