export interface TrackingStep {
  content: string;
  trackStage: number;
  trackStageTx: string;
  time: string;
  operateStationName: string | null;
}

export interface TrackingResult {
  waybillNo: string;
  sendSite: string;
  dispatchStation: string;
  country: string;
  trackInfos: TrackingStep[];
}

export interface TrackingResponse {
  status: string;
  resultObject: TrackingResult | null;
  message: string;
}

export async function getTrackingInfo(waybillNo: string): Promise<TrackingResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock data for testing
  if (waybillNo === '123456789') {
    return {
      status: "success",
      resultObject: {
        waybillNo: "123456789",
        sendSite: "Auckland",
        dispatchStation: "Wellington",
        country: "NZL",
        trackInfos: [
          {
            content: "【Wellington】Delivered.",
            trackStage: 2060,
            trackStageTx: "Delivered",
            time: "2025-04-12 11:49:00",
            operateStationName: "Wellington"
          },
          {
            content: "【Wellington】Out for delivery.",
            trackStage: 2050,
            trackStageTx: "Out for Delivery",
            time: "2025-04-12 08:30:00",
            operateStationName: "Wellington"
          },
          {
            content: "【Auckland】Arrived at facility.",
            trackStage: 2030,
            trackStageTx: "In Transit",
            time: "2025-04-11 15:20:00",
            operateStationName: "Auckland"
          },
          {
            content: "Order Submited.",
            trackStage: 1001,
            trackStageTx: "Order Creation",
            time: "2025-03-23 07:07:53",
            operateStationName: null
          }
        ]
      },
      message: ""
    };
  }

  // Default response for other numbers (to show UI)
  return {
    status: "error",
    resultObject: null,
    message: "Tracking details not found. Please check the number and try again."
  };
}
