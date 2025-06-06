const clinics = {
  a: [
    {
      name: "Accra Family Care Center",
      role: "General Health Clinic",
      location: "Accra, Ghana",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c",
      specialities: ["General Medicine", "Family Medicine", "Preventive Care"]
    },
    {
      name: "Abuja Wellness Clinic",
      role: "Wellness Clinic",
      location: "Abuja, Nigeria",
      consult_types: ["General health", "Telemedicine"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["Wellness", "Nutrition", "Preventive Care"]
    },
    {
      name: "Atlanta Pediatric Clinic",
      role: "Pediatric Clinic",
      location: "Atlanta, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["Pediatrics", "Child Health", "Immunization"]
    }
  ],
  b: [
    {
      name: "Birmingham Heart Center",
      role: "Cardiology Clinic",
      location: "Birmingham, United Kingdom",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1",
      specialities: ["Cardiology", "Heart Failure", "Interventional Cardiology"]
    },
    {
      name: "Boston Family Clinic",
      role: "Family Clinic",
      location: "Boston, United States",
      consult_types: ["General health", "Telemedicine"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1512070679279-cb1b7e76b6c8",
      specialities: ["Family Medicine", "General Medicine", "Preventive Care"]
    },
    {
      name: "Brampton Dental Studio",
      role: "Dental Clinic",
      location: "Brampton, Canada",
      consult_types: ["General health"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"]
    }
  ],
  c: [
    {
      name: "Cape Town Ortho Center",
      role: "Orthopedic Clinic",
      location: "Cape Town, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      specialities: ["Orthopedics", "Sports Medicine", "Joint Replacement"]
    },
    {
      name: "Calgary Skin Clinic",
      role: "Dermatology Clinic",
      location: "Calgary, Canada",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-7",
      avatar: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      specialities: ["Dermatology", "Cosmetic Dermatology", "Skin Cancer"]
    }
  ],
  d: [
    {
      name: "Durban Women's Health Clinic",
      role: "Gynecology Clinic",
      location: "Durban, South Africa",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1519821172143-ecb1df1bbf55",
      specialities: ["Gynecology", "Obstetrics", "Reproductive Health"]
    }
  ],
  g: [
    {
      name: "Gaborone Family Clinic",
      role: "General Health Clinic",
      location: "Gaborone, South Africa",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: ["General Medicine", "Family Medicine", "Preventive Care"]
    }
  ],
  j: [
    {
      name: "Johannesburg Ortho Clinic",
      role: "Orthopedic Clinic",
      location: "Johannesburg, South Africa",
      consult_types: ["General health", "Emergency"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
      specialities: ["Orthopedics", "Sports Medicine", "Joint Replacement"]
    }
  ],
  l: [
    {
      name: "Lagos Wellness Clinic",
      role: "General Health Clinic",
      location: "Lagos, Nigeria",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      specialities: ["General Medicine", "Family Medicine", "Preventive Care"]
    },
    {
      name: "London Skin Institute",
      role: "Dermatology Clinic",
      location: "London, United Kingdom",
      consult_types: ["Telemedicine", "Emergency"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      specialities: ["Dermatology", "Cosmetic Dermatology", "Skin Cancer"]
    }
  ],
  m: [
    {
      name: "Manchester Vision Center",
      role: "Ophthalmology Clinic",
      location: "Manchester, United Kingdom",
      consult_types: ["Telemedicine", "General health"],
      timezone: "+0",
      avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      specialities: ["Ophthalmology", "Retina", "Cataract Surgery"]
    },
    {
      name: "Montreal Dental Arts",
      role: "Dental Clinic",
      location: "Montreal, Canada",
      consult_types: ["General health"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      specialities: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"]
    },
    {
      name: "Minneapolis Heart Institute",
      role: "Cardiology Clinic",
      location: "Minneapolis, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-6",
      avatar: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      specialities: ["Cardiology", "Interventional Cardiology", "Heart Failure"]
    }
  ],
  n: [
    {
      name: "New York Heart Center",
      role: "Cardiology Clinic",
      location: "New York, United States",
      consult_types: ["General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      specialities: ["Cardiology", "Interventional Cardiology", "Heart Failure"]
    }
  ],
  p: [
    {
      name: "Port Harcourt Dental Studio",
      role: "Dental Clinic",
      location: "Port Harcourt, Nigeria",
      consult_types: ["General health"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"]
    }
  ],
  r: [
    {
      name: "Richmond Oncology Center",
      role: "Oncology Center",
      location: "Richmond, Canada",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      specialities: ["Oncology", "Radiation Oncology", "Chemotherapy"]
    }
  ],
  s: [
    {
      name: "Seattle Eye Hospital",
      role: "Ophthalmology Clinic",
      location: "Seattle, United States",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8",
      specialities: ["Ophthalmology", "Retina", "Cataract Surgery"]
    },
    {
      name: "Soweto Dental Studio",
      role: "Dental Clinic",
      location: "Soweto, South Africa",
      consult_types: ["General health"],
      timezone: "+2",
      avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      specialities: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"]
    }
  ],
  t: [
    {
      name: "Toronto Radiology Clinic",
      role: "Radiology Clinic",
      location: "Toronto, Canada",
      consult_types: ["Telemedicine"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1504439468489-c8920d796a29",
      specialities: ["Radiology", "Diagnostic Imaging", "MRI"]
    },
    {
      name: "Tampa Mental Health Center",
      role: "Psychiatry Clinic",
      location: "Tampa, United States",
      consult_types: ["Telemedicine", "General health", "Emergency"],
      timezone: "-5",
      avatar: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      specialities: ["Psychiatry", "Psychology", "Addiction Medicine"]
    }
  ],
  v: [
    {
      name: "Vancouver Women's Health Center",
      role: "Gynecology Clinic",
      location: "Vancouver, Canada",
      consult_types: ["Telemedicine", "General health"],
      timezone: "-8",
      avatar: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      specialities: ["Gynecology", "Obstetrics", "Reproductive Health"]
    }
  ],
  z: [
    {
      name: "Zaria Radiology Group",
      role: "Radiology Clinic",
      location: "Zaria, Nigeria",
      consult_types: ["Telemedicine"],
      timezone: "+1",
      avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      specialities: ["Radiology", "Diagnostic Imaging", "MRI"]
    }
  ]
};

export { clinics };
