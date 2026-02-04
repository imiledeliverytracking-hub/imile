export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is my iMile tracking not updating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tracking updates can sometimes pause if the package is clearing customs or moving between facilities over the weekend. If there is no update for more than 3 days, please contact iMile support."
        }
      },
      {
        "@type": "Question",
        "name": "What time does iMile deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iMile typically delivers between 9:00 AM and 9:00 PM. During peak seasons (like White Friday or Ramadan), delivery hours may extend."
        }
      },
      {
        "@type": "Question",
        "name": "Does iMile deliver on weekends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, iMile operates 7 days a week in many major cities across UAE and KSA to ensure fast delivery."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact the iMile courier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once your status is 'Out for Delivery', you will usually receive an SMS with the driver's mobile number. You can call them directly to coordinate."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
