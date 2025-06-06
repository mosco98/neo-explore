const diagnosticCentres = {
  a: [
    {
      name: "Accra Diagnostic Center",
      role: "General Diagnostic Center",
      location: "Accra, Ghana",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c",
      specialities: ["Blood Tests", "Imaging", "Preventive Care"]
    },
    {
      name: "Abuja Imaging Centre",
      role: "Imaging Center",
      location: "Abuja, Nigeria",
      consult_types: ["General health", "Telemedicine"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["MRI", "CT Scan", "Ultrasound"]
    }
  ],
  b: [
    {
      name: "Boston Advanced Diagnostics",
      role: "Advanced Diagnostic Center",
      location: "Boston, United States",
      consult_types: ["General health", "Telemedicine"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: ["Genetic Testing", "MRI", "Blood Tests"]
    },
    {
      name: "Birmingham Pathology Lab",
      role: "Pathology Diagnostic Center",
      location: "Birmingham, United Kingdom",
      consult_types: ["General health", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      specialities: ["Blood Tests", "Biopsy", "Histopathology"]
    }
  ],
  c: [
    {
      name: "Cape Town Ortho Diagnostics",
      role: "Orthopedic Diagnostic Center",
      location: "Cape Town, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      specialities: [
        "Bone Density",
        "Sports Injury Assessment",
        "Joint Imaging"
      ]
    },
    {
      name: "Chicago Imaging Diagnostics",
      role: "Imaging Diagnostic Center",
      location: "Chicago, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-6",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: ["MRI", "CT Scan", "X-ray"]
    }
  ],
  d: [
    {
      name: "Durban Women's Diagnostic Center",
      role: "Gynecology Diagnostic Center",
      location: "Durban, South Africa",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1519821172143-ecb1df1bbf55",
      specialities: ["Pap Smear", "Ultrasound", "Hormone Testing"]
    },
    {
      name: "Dallas Scan Center",
      role: "Radiology Diagnostic Center",
      location: "Dallas, United States",
      consult_types: ["General health", "Telemedicine"],
      timezone: "-6",
      avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      specialities: ["MRI", "CT Scan", "Ultrasound"]
    }
  ],
  j: [
    {
      name: "Johannesburg Ortho Diagnostics",
      role: "Orthopedic Diagnostic Center",
      location: "Johannesburg, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
      specialities: [
        "Bone Density",
        "Sports Injury Assessment",
        "Joint Imaging"
      ]
    }
  ],
  l: [
    {
      name: "Lagos Wellness Diagnostics",
      role: "General Diagnostic Center",
      location: "Lagos, Nigeria",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: ["Blood Tests", "Imaging", "Preventive Care"]
    },
    {
      name: "London Skin Diagnostics",
      role: "Dermatology Diagnostic Center",
      location: "London, United Kingdom",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      specialities: ["Skin Biopsy", "Allergy Testing", "Mole Mapping"]
    }
  ],
  m: [
    {
      name: "Montreal Cardio Diagnostics",
      role: "Cardiology Diagnostic Center",
      location: "Montreal, Canada",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["ECG", "Echocardiogram", "Stress Test"]
    }
  ],
  n: [
    {
      name: "New York Heart Diagnostics",
      role: "Cardiology Diagnostic Center",
      location: "New York, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      specialities: ["ECG", "Echocardiogram", "Stress Test"]
    }
  ],
  p: [
    {
      name: "Port Harcourt Dental Diagnostics",
      role: "Dental Diagnostic Center",
      location: "Port Harcourt, Nigeria",
      consult_types: ["General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: [
        "Dental X-ray",
        "Orthodontic Assessment",
        "Oral Cancer Screening"
      ]
    }
  ],
  r: [
    {
      name: "Richmond Oncology Diagnostics",
      role: "Oncology Diagnostic Center",
      location: "Richmond, Canada",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      specialities: ["Cancer Screening", "Biopsy", "Genetic Testing"]
    }
  ],
  s: [
    {
      name: "Seattle Eye Diagnostics",
      role: "Ophthalmology Diagnostic Center",
      location: "Seattle, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8",
      specialities: ["Eye Exams", "Retina Imaging", "Cataract Screening"]
    }
  ],
  t: [
    {
      name: "Toronto Mental Health Diagnostics",
      role: "Psychiatric Diagnostic Center",
      location: "Toronto, Canada",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      specialities: [
        "Psychiatric Evaluation",
        "Neuropsychology",
        "Addiction Assessment"
      ]
    }
  ],
  v: [
    {
      name: "Victoria Women's Diagnostics",
      role: "Gynecology Diagnostic Center",
      location: "Victoria, Canada",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["Pap Smear", "Ultrasound", "Hormone Testing"]
    }
  ]
};

export { diagnosticCentres };
