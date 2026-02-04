import { getTrackingInfo } from "@/lib/tracking";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle, Clock, MapPin, Package, AlertCircle } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Tracking ${params.id} - iMile Delivery Status`,
    description: `Current status for iMile shipment ${params.id}. Check real-time delivery updates.`,
  };
}

export default async function TrackingPage({ params }: Props) {
  const data = await getTrackingInfo(params.id);
  const result = data.resultObject;
  const isSuccess = data.status === "success" && result;

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-slate-600" />
          </Link>
          <h1 className="text-xl font-semibold text-slate-900">Tracking Details</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Waybill Number</p>
                <h2 className="text-2xl font-bold text-slate-900 font-mono">{params.id}</h2>
              </div>
              {isSuccess && (
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                  <CheckCircle2 size={16} />
                  {result.trackInfos[0]?.trackStageTx || "Active"}
                </div>
              )}
            </div>

            {isSuccess && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1">Origin</p>
                  <p className="font-medium text-slate-900">{result.sendSite}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1">Destination</p>
                  <p className="font-medium text-slate-900">{result.dispatchStation}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        {isSuccess ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Shipment Progress</h3>
            <div className="relative pl-4 space-y-8 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
              {result.trackInfos.map((step, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className={`
                    relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1
                    ${index === 0 ? "bg-red-600 ring-4 ring-red-50" : "bg-gray-200"}
                  `}>
                    {index === 0 ? (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    ) : (
                      <div className="w-2 h-2 bg-white rounded-full opacity-50" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="text-sm font-medium text-slate-500 mb-1">{step.time}</p>
                    <p className={`text-base font-semibold ${index === 0 ? "text-slate-900" : "text-slate-600"}`}>
                      {step.content}
                    </p>
                    {step.operateStationName && (
                      <div className="flex items-center gap-1 mt-1 text-sm text-slate-400">
                        <MapPin size={14} />
                        <span>{step.operateStationName}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Tracking Not Found</h3>
            <p className="text-slate-600 mb-6">
              We couldn't find any details for tracking number <strong>{params.id}</strong>.
            </p>
            <div className="text-sm text-slate-500 bg-gray-50 p-4 rounded-lg text-left mx-auto max-w-sm">
              <p className="font-semibold mb-2">Possible reasons:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The number is incorrect.</li>
                <li>The shipment was just created (try again in 1 hour).</li>
                <li>It's not an iMile tracking number.</li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/" className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
                Try Another Number
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
