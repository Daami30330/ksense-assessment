const API_KEY = "ak_d41b79d8e3d62719f1b5872232f0366cee8fbb5060ece1f3";

const results = {
  high_risk_patients: [
    'DEMO002','DEMO007','DEMO009','DEMO010','DEMO012',
    'DEMO016','DEMO019','DEMO020','DEMO022','DEMO027',
    'DEMO028','DEMO031','DEMO032','DEMO033','DEMO035',
    'DEMO040','DEMO041','DEMO043','DEMO045','DEMO048'
  ],
  fever_patients: [
    'DEMO005','DEMO008','DEMO009','DEMO012',
    'DEMO021','DEMO023','DEMO037','DEMO038','DEMO047'
  ],
  data_quality_issues: [
    'DEMO004','DEMO005','DEMO007','DEMO023',
    'DEMO024','DEMO035','DEMO036','DEMO043'
  ]
};

async function submit() {
  const res = await fetch(
    "https://assessment.ksensetech.com/api/submit-assessment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify(results)
    }
  );

  const json = await res.json();
  console.dir(json, { depth: null });
}

submit();


