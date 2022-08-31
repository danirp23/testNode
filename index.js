import moment from "moment-timezone";

moment.tz.setDefault("America/Bogota");

let yearsMock = [[
  {
    accountablePeriod: 202102,
    value: -0.2194,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202101-CREC',
    description: 'CREC',
    type: 'porcentaje'
  },
  {
    accountablePeriod: 202102,
    value: 4914246,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202101-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: -0.2208,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202102-CREC',
    description: 'CREC',
    type: 'porcentaje'
  },
  {
    accountablePeriod: 202102,
    value: 5796883,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202102-PE',
    description: 'PE',
    type: 'valor'
  }
],
[
  {
    accountablePeriod: 202102,
    value: 4791859,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202001-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 7535645,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202002-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 2911954,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202003-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 3564066,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202004-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 3763356,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202005-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 971747,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202006-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 4717336,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202007-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 1031493,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202008-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 1064900,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202009-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 3265087,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202010-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 1171058,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202011-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: -0.2442,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202012-CREC',
    description: 'CREC',
    type: 'porcentaje'
  },
  {
    accountablePeriod: 202102,
    value: 16204349,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202012-PE',
    description: 'PE',
    type: 'valor'
  },
  {
    accountablePeriod: 202102,
    value: 1.979,
    brokerKeySubBranchSbu: '123-AI-AUT',
    brokerKey: 123,
    branch: 'AI',
    sbu: 'AUT',
    dwhExecutionDate: '2021-02-17 14:11:51',
    periodDescription: '202012-PS',
    description: 'PS',
    type: 'porcentaje'
  }
]]

let yearsNormal = [
  [
    {
      accountablePeriod: 202102,
      value: -0.2194,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202101-CREC',
      description: 'CREC',
      type: 'porcentaje'
    },
    {
      accountablePeriod: 202102,
      value: 4914246,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202101-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: -0.2208,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202102-CREC',
      description: 'CREC',
      type: 'porcentaje'
    },
    {
      accountablePeriod: 202102,
      value: 5796883,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202102-PE',
      description: 'PE',
      type: 'valor'
    }
  ],
  [
    {
      accountablePeriod: 202102,
      value: 4791859,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202001-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 7535645,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202002-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 2911954,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202003-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 3564066,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202004-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 3763356,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202005-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 971747,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202006-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 4717336,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202007-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 1031493,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202008-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 1064900,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202009-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 3265087,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202010-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 1171058,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202011-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: -0.2442,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202012-CREC',
      description: 'CREC',
      type: 'porcentaje'
    },
    {
      accountablePeriod: 202102,
      value: 16204349,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202012-PE',
      description: 'PE',
      type: 'valor'
    },
    {
      accountablePeriod: 202102,
      value: 1.979,
      brokerKeySubBranchSbu: '123-AI-AUT',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT',
      dwhExecutionDate: '2021-02-17 14:11:51',
      periodDescription: '202012-PS',
      description: 'PS',
      type: 'porcentaje'
    }
  ]
]
let yearsSpace = [
  [
    {
      accountablePeriod: 202108,
      value: 16204349,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202105-PE',
      description: 'PE',
      type: 'Valor'
    },
    {
      accountablePeriod: 202108,
      value: 5796883,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202106-PE',
      description: 'PE',
      type: 'Valor'
    },
    {
      accountablePeriod: 202108,
      value: 4914246,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202107-PE',
      description: 'PE',
      type: 'Valor'
    },
    {
      accountablePeriod: 202108,
      value: -0.6,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202108-CREC',
      description: 'CREC',
      type: 'porcentaje'
    },
    {
      accountablePeriod: 202108,
      value: 2361168,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202108-PE',
      description: 'PE',
      type: 'Valor'
    },
    {
      accountablePeriod: 202108,
      value: 2.8,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202108-PS',
      description: 'PS',
      type: 'porcentaje'
    },
    {
      accountablePeriod: 202109,
      value: 5914200,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202109-PE',
      description: 'PE',
      type: 'Valor'
    }
  ],
  [
    {
      accountablePeriod: 202108,
      value: 1031493,
      brokerKeySubBranchSbu: '123-AI-AUT ',
      brokerKey: 123,
      branch: 'AI',
      sbu: 'AUT ',
      dwhExecutionDate: '2021-09-16 00:00:00',
      periodDescription: '202008-PE',
      description: 'PE',
      type: 'Valor'
    }
  ]
]

const Quarterlyinformation = async (leaderKey, branch, sbu, periodCon, index) => {
  console.log("periodCon", periodCon);
  console.log("index", index);
  let now = moment(periodCon);
  console.log("now : ", now);
  let period = now.quarter(now.quarter()).endOf('quarter').format('YYYYMM');
  console.log("period : ", periodCon);
  let periodPs = moment(periodCon).subtract(1, "quarter").endOf('quarter').format('YYYYMM');
  console.log("periodPs : ", periodPs);
  let periodPemant = now.subtract(1, "years").quarter(now.quarter()).endOf('quarter').format('YYYYMM');
  console.log("periodPemant: ", periodPemant);
  console.log(" ");
  return {
    "pe": {
      "accountablePeriod": 202108,
      "value": 2361168,
      "brokerKeySubBranchSbu": "123-AI-AUT ",
      "brokerKey": 123,
      "branch": "AI",
      "sbu": "AUT ",
      "dwhExecutionDate": "2021-09-16 00:00:00",
      "periodDescription": "202108-PE",
      "description": "PE",
      "type": "Valor"
    }
  }
}

const getMonths = async (leaderKey, branch, sbu) => {

}

const year = moment().format('YYYYMM');
console.log(year)
let quarter = moment(year);
console.log(quarter)

let quarters = [
  quarter.format('YYYYMM'),
  quarter.add(-1, "M").format('YYYYMM'),
  quarter.add(-1, "M").format('YYYYMM'),
  quarter.add(-1, "M").format('YYYYMM')
];


quarters = quarters.map((period, index) => Quarterlyinformation("leaderKey", "branch", "sbu", period, index));
quarters = await Promise.all(quarters);
quarters = quarters.reduce((acumulate, element) => {
  //console.log("element", element);
  if (element) {
    element = Object.keys(element).map(key => {
      let res = { [`${key}`]: Object.entries(element[key]).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {}) }
      acumulate = [...acumulate, res]
      return acumulate;
    })
  }
  return acumulate
}, []);

let years = Object.assign(yearsNormal || [], yearsSpace || []);
yearsNormal.push(yearsSpace)
console.log(yearsNormal);

let response = years.reduce((acumulate, element) => {
  if (element.length < 1) return acumulate;
  acumulate[`${element[0].periodDescription.slice(0, 4)}-period`] = element.reduce((acu, ele) => {
    let month = Number(ele.periodDescription.split('-')[0].substr(-2));
    acu[`month-${month}`] = [...(acu[`month-${month}`] || []), ele];
    return acu;
  }, {})
  console.log(element);
  return acumulate
}, {});

console.log("response",JSON.stringify(response) );

