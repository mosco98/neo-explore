const hospitals = {
  a: [
    {
      name: "Accra Family Hospital",
      role: "General Hospital",
      location: "Accra, Ghana",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c",
      specialities: [
        "General Medicine",
        "Family Medicine",
        "Emergency Medicine"
      ]
    },
    {
      name: "Abuja City Hospital",
      role: "Specialist Hospital",
      location: "Abuja, Nigeria",
      consult_types: ["General health", "Emergency"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["Internal Medicine", "Surgery", "Critical Care"]
    },
    {
      name: "Atlanta Regional Hospital",
      role: "General Hospital",
      location: "Atlanta, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["General Medicine", "Emergency Medicine", "Cardiology"]
    }
  ],
  b: [
    {
      name: "Brampton Medical Center",
      role: "General Hospital",
      location: "Brampton, Canada",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1512070679279-cb1b7e76b6c8",
      specialities: ["General Medicine", "Family Medicine", "Pediatrics"]
    },
    {
      name: "Birmingham Heart Hospital",
      role: "Cardiology Hospital",
      location: "Birmingham, United Kingdom",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1",
      specialities: ["Cardiology", "Heart Failure", "Interventional Cardiology"]
    },
    {
      name: "Boston Children's Hospital",
      role: "Children's Hospital",
      location: "Boston, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8",
      specialities: ["Pediatrics", "Neonatology", "Pediatric Surgery"]
    }
  ],
  c: [
    {
      name: "Cape Town Orthopedic Hospital",
      role: "Orthopedic Hospital",
      location: "Cape Town, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      specialities: ["Orthopedics", "Sports Medicine", "Joint Replacement"]
    },
    {
      name: "Calgary General Hospital",
      role: "General Hospital",
      location: "Calgary, Canada",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-7",
      avatar: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      specialities: [
        "General Medicine",
        "Family Medicine",
        "Emergency Medicine"
      ]
    }
  ],
  d: [
    {
      name: "Durban Women's Hospital",
      role: "Gynecology Hospital",
      location: "Durban, South Africa",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1519821172143-ecb1df1bbf55",
      specialities: ["Gynecology", "Obstetrics", "Reproductive Health"]
    }
  ],
  j: [
    {
      name: "Johannesburg Orthopedic Hospital",
      role: "Orthopedic Hospital",
      location: "Johannesburg, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
      specialities: ["Orthopedics", "Sports Medicine", "Joint Replacement"]
    }
  ],
  l: [
    {
      name: "Lagos General Hospital",
      role: "General Hospital",
      location: "Lagos, Nigeria",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: [
        "General Medicine",
        "Family Medicine",
        "Emergency Medicine"
      ]
    },
    {
      name: "London Royal Hospital",
      role: "Specialist Hospital",
      location: "London, United Kingdom",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      specialities: ["Dermatology", "Surgery", "Critical Care"]
    },
    {
      name: "Los Angeles County Hospital",
      role: "County Hospital",
      location: "Los Angeles, United States",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      specialities: ["General Medicine", "Emergency Medicine", "Surgery"]
    },
    {
      name: "Lusaka Medical Center",
      role: "General Hospital",
      location: "London, United Kingdom",
      consult_types: ["General health", "Telemedicine"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      specialities: ["General Medicine", "Internal Medicine", "Surgery"]
    }
  ],
  m: [
    {
      name: "Montreal Heart Hospital",
      role: "Cardiology Hospital",
      location: "Montreal, Canada",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["Cardiology", "Interventional Cardiology", "Heart Failure"]
    },
    {
      name: "Minneapolis General Hospital",
      role: "General Hospital",
      location: "Minneapolis, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-6",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: ["General Medicine", "Internal Medicine", "Surgery"]
    }
  ],
  n: [
    {
      name: "New York Heart Hospital",
      role: "Cardiology Hospital",
      location: "New York, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      specialities: ["Cardiology", "Cardiac Surgery", "Heart Failure"]
    },
    {
      name: "Nairobi General Hospital",
      role: "General Hospital",
      location: "London, United Kingdom",
      consult_types: ["General health", "Telemedicine"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      specialities: ["General Medicine", "Internal Medicine", "Surgery"]
    }
  ],
  p: [
    {
      name: "Port Harcourt Dental Hospital",
      role: "Dental Hospital",
      location: "Port Harcourt, Nigeria",
      consult_types: ["General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: ["Dentistry", "Orthodontics", "Oral Surgery"]
    }
  ],
  r: [
    {
      name: "Richmond Oncology Hospital",
      role: "Oncology Hospital",
      location: "Richmond, Canada",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      specialities: ["Oncology", "Radiation Oncology", "Chemotherapy"]
    }
  ],
  s: [
    {
      name: "Seattle Heart Institute",
      role: "Cardiology Hospital",
      location: "Seattle, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      specialities: ["Cardiology", "Cardiac Surgery", "Heart Failure"]
    },
    {
      name: "Soweto Dental Hospital",
      role: "Dental Hospital",
      location: "Soweto, South Africa",
      consult_types: ["General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      specialities: ["Dentistry", "Orthodontics", "Oral Surgery"]
    }
  ],
  t: [
    {
      name: "Toronto Mental Health Hospital",
      role: "Psychiatric Hospital",
      location: "Toronto, Canada",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      specialities: ["Psychiatry", "Psychology", "Addiction Medicine"]
    }
  ],
  v: [
    {
      name: "Vancouver Women's Hospital",
      role: "Gynecology Hospital",
      location: "Vancouver, Canada",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["Gynecology", "Obstetrics", "Reproductive Health"]
    }
  ],
  z: [
    {
      name: "Zaria Radiology Hospital",
      role: "Radiology Hospital",
      location: "Zaria, Nigeria",
      consult_types: ["Telemedicine"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: ["Radiology", "Diagnostic Imaging", "MRI"]
    }
  ]
};

export { hospitals };
