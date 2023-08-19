import Profile from '../assets/images/profile-2user.svg';
import Flag from '../assets/images/flag.svg';
import Chart from '../assets/images/chart-square.svg';
import UserSquare from '../assets/images/user-square.svg';
import Setting from '../assets/images/sideDropdawn.svg';
export const customersList = [
  {
    id: '1',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+965 96031301',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "ps",
  },
  {
    id: '2',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+201119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Eg"
  }, {
    id: '3',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+966 96031301',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Sa"
  }, {
    id: '4',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+216 96031301',
    account: 'Account# 234551',
    status: 'Pending',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Tn"
  }, {
    id: '5',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+212 96031301',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Me"
  }, {
    id: '6',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '+965 96031301',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '7',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '8',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '9',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '10',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '11',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }, {
    id: '12',
    fullName: 'Mohammed Swaaf',
    email: 'mohammed@gmail.com',
    mobileNumbers: '01119849885',
    account: 'Account# 234551',
    status: 'Verified',
    lastLogin: 'July 01,2022 - 1:47 AM',
    "isoCode": "Ao"
  }
]
export const accountMenuItems = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];
export const standardMenusArray = [
  {
    key: '1',
    icon: <img src={Chart} alt='Chart' />,
    label: 'Dashboard'
  },
  {
    key: '2',
    icon: <img src={Profile} alt='Profile' />,
    label: 'Customers',
    children: [
      {
        key: '2-1',
        label: 'Option 1'
      },
      {
        key: '2-2',
        label: 'Option 1'
      },
      {
        key: '2-3',
        label: 'Option 1'
      }
    ]
  },
  {
    key: '3',
    icon: <img src={UserSquare} alt='UserSquare' />,
    label: 'Backend users',
    children: [
      {
        key: '3-1',
        label: 'Option 1'
      },
      {
        key: '3-2',
        label: 'Option 1'
      },
      {
        key: '3-3',
        label: 'Option 1'
      }
    ]
  },
  {
    key: '4',
    icon: <img src={Flag} alt='flag' />,
    label: 'Master Data',
    children: [
      {
        key: '4-1',
        label: '1st menu item',
      },
      {
        key: '4-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '5',
    icon: <img src={Setting} alt='Setting' />,
    label: 'Configurations'
},
]


export const countries = [
  {
    "name": "Afghanistan",
    "dialCode": "+93",
    "isoCode": "Af",
  },
  {
    "name": "Albania",
    "dialCode": "+355",
    "isoCode": "Al"
  },
  {
    "name": "Algeria",
    "dialCode": "+213",
    "isoCode": "Dz"
  },
  {
    "name": "Andorra",
    "dialCode": "+376",
    "isoCode": "Ad"
  },
  {
    "name": "Angola",
    "dialCode": "+244",
    "isoCode": "Ao"
  },
  {
    "name": "Anguilla",
    "dialCode": "+1264",
    "isoCode": "Ai"
  },
  {
    "name": "Antarctica",
    "dialCode": "+672",
    "isoCode": "Aq"
  },
  {
    "name": "Antigua and Barbuda",
    "dialCode": "+1268",
    "isoCode": "Ag"
  },
  {
    "name": "Argentina",
    "dialCode": "+54",
    "isoCode": "Ar"
  },
  {
    "name": "Armenia",
    "dialCode": "+374",
    "isoCode": "Am"
  },
  {
    "name": "Aruba",
    "dialCode": "+297",
    "isoCode": "Aw"
  },
  {
    "name": "Australia",
    "dialCode": "+61",
    "isoCode": "Au"
  },
  {
    "name": "Austria",
    "dialCode": "+43",
    "isoCode": "At"
  },
  {
    "name": "Azerbaijan",
    "dialCode": "+994",
    "isoCode": "Az"
  },
  {
    "name": "Bahamas",
    "dialCode": "+1242",
    "isoCode": "Bs"
  },
  {
    "name": "Bahrain",
    "dialCode": "+973",
    "isoCode": "Bh"
  },
  {
    "name": "Bangladesh",
    "dialCode": "+880",
    "isoCode": "Bd"
  },
  {
    "name": "Barbados",
    "dialCode": "+1246",
    "isoCode": "Bb"
  },
  {
    "name": "Belarus",
    "dialCode": "+375",
    "isoCode": "By"
  },
  {
    "name": "Belgium",
    "dialCode": "+32",
    "isoCode": "Be"
  },
  {
    "name": "Belize",
    "dialCode": "+501",
    "isoCode": "Bz"
  },
  {
    "name": "Benin",
    "dialCode": "+229",
    "isoCode": "Bj"
  },
  {
    "name": "Bermuda",
    "dialCode": "+1441",
    "isoCode": "Bm"
  },
  {
    "name": "Bhutan",
    "dialCode": "+975",
    "isoCode": "Bt"
  },
  {
    "name": "Bolivia",
    "dialCode": "+591",
    "isoCode": "Bo"
  },
  {
    "name": "Bosnia and Herzegovina",
    "dialCode": "+387",
    "isoCode": "Ba"
  },
  {
    "name": "Botswana",
    "dialCode": "+267",
    "isoCode": "Bw"
  },
  {
    "name": "Brazil",
    "dialCode": "+55",
    "isoCode": "Br"
  },
  {
    "name": "British Indian Ocean Territory",
    "dialCode": "+246",
    "isoCode": "Io"
  },
  {
    "name": "Brunei Darussalam",
    "dialCode": "+673",
    "isoCode": "Bn"
  },
  {
    "name": "Bulgaria",
    "dialCode": "+359",
    "isoCode": "Bg"
  },
  {
    "name": "Burkina Faso",
    "dialCode": "+226",
    "isoCode": "Bf"
  },
  {
    "name": "Burundi",
    "dialCode": "+257",
    "isoCode": "Bi"
  },
  {
    "name": "Cambodia",
    "dialCode": "+855",
    "isoCode": "Kh"
  },
  {
    "name": "Cameroon",
    "dialCode": "+237",
    "isoCode": "Cm"
  },
  {
    "name": "Canada",
    "dialCode": "+1",
    "isoCode": "Ca"
  },
  {
    "name": "Cape Verde",
    "dialCode": "+238",
    "isoCode": "Cv"
  },
  {
    "name": "Cayman Islands",
    "dialCode": "+1345",
    "isoCode": "Ky"
  },
  {
    "name": "Central African Republic",
    "dialCode": "+236",
    "isoCode": "Cf"
  },
  {
    "name": "Chile",
    "dialCode": "+56",
    "isoCode": "Cl"
  },
  {
    "name": "China",
    "dialCode": "+86",
    "isoCode": "Cn"
  },
  {
    "name": "Christmas Island",
    "dialCode": "+61",
    "isoCode": "Cx"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "dialCode": "+61",
    "isoCode": "Cc"
  },
  {
    "name": "Colombia",
    "dialCode": "+57",
    "isoCode": "Co"
  },
  {
    "name": "Comoros",
    "dialCode": "+269",
    "isoCode": "Km"
  },
  {
    "name": "Congo",
    "dialCode": "+242",
    "isoCode": "Cg"
  },
  {
    "name": "Cook Islands",
    "dialCode": "+682",
    "isoCode": "Ck"
  },
  {
    "name": "Costa Rica",
    "dialCode": "+506",
    "isoCode": "Cr"
  },
  {
    "name": "Croatia",
    "dialCode": "+385",
    "isoCode": "Hr"
  },
  {
    "name": "Cuba",
    "dialCode": "+53",
    "isoCode": "Cu"
  },
  {
    "name": "Cyprus",
    "dialCode": "+357",
    "isoCode": "Cy"
  },
  {
    "name": "Czech Republic",
    "dialCode": "+420",
    "isoCode": "Cz"
  },
  {
    "name": "Democratic Republic of the Congo",
    "dialCode": "+243",
    "isoCode": "Cd"
  },
  {
    "name": "Denmark",
    "dialCode": "+45",
    "isoCode": "Dk"
  },
  {
    "name": "Djibouti",
    "dialCode": "+253",
    "isoCode": "Dj"
  },
  {
    "name": "Dominica",
    "dialCode": "+1767",
    "isoCode": "Dm"
  },
  {
    "name": "Dominican Republic",
    "dialCode": "+1849",
    "isoCode": "Do"
  },
  {
    "name": "Ecuador",
    "dialCode": "+593",
    "isoCode": "Ec"
  },
  {
    "name": "Egypt",
    "dialCode": "+20",
    "isoCode": "Eg"
  },
  {
    "name": "El Salvador",
    "dialCode": "+503",
    "isoCode": "Sv"
  },
  {
    "name": "Equatorial Guinea",
    "dialCode": "+240",
    "isoCode": "Gq"
  },
  {
    "name": "Eritrea",
    "dialCode": "+291",
    "isoCode": "Er"
  },
  {
    "name": "Estonia",
    "dialCode": "+372",
    "isoCode": "Ee"
  },
  {
    "name": "Eswatini",
    "dialCode": "+268",
    "isoCode": "Sz"
  },
  {
    "name": "Ethiopia",
    "dialCode": "+251",
    "isoCode": "Et"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "dialCode": "+500",
    "isoCode": "Fk"
  },
  {
    "name": "Faroe Islands",
    "dialCode": "+298",
    "isoCode": "Fo"
  },
  {
    "name": "Fiji",
    "dialCode": "+679",
    "isoCode": "Fj"
  },
  {
    "name": "Finland",
    "dialCode": "+358",
    "isoCode": "Fi"
  },
  {
    "name": "France",
    "dialCode": "+33",
    "isoCode": "Fr"
  },
  {
    "name": "French Guiana",
    "dialCode": "+594",
    "isoCode": "Gf"
  },
  {
    "name": "Gabon",
    "dialCode": "+241",
    "isoCode": "Ga"
  },
  {
    "name": "Gambia",
    "dialCode": "+220",
    "isoCode": "Gm"
  },
  {
    "name": "Georgia",
    "dialCode": "+995",
    "isoCode": "Ge"
  },
  {
    "name": "Germany",
    "dialCode": "+49",
    "isoCode": "De"
  },
  {
    "name": "Ghana",
    "dialCode": "+233",
    "isoCode": "Gh"
  },
  {
    "name": "Gibraltar",
    "dialCode": "+350",
    "isoCode": "Gi"
  },
  {
    "name": "Greece",
    "dialCode": "+30",
    "isoCode": "Gr"
  },
  {
    "name": "Greenland",
    "dialCode": "+299",
    "isoCode": "Gl"
  },
  {
    "name": "Grenada",
    "dialCode": "+1473",
    "isoCode": "Gd"
  },
  {
    "name": "Guadeloupe",
    "dialCode": "+590",
    "isoCode": "Gp"
  },
  {
    "name": "Guam",
    "dialCode": "+1671",
    "isoCode": "Gu"
  },
  {
    "name": "Guatemala",
    "dialCode": "+502",
    "isoCode": "Gt"
  },

  {
    "name": "Guinea",
    "dialCode": "+224",
    "isoCode": "Gn"
  },
  {
    "name": "Guinea-Bissau",
    "dialCode": "+245",
    "isoCode": "Gw"
  },
  {
    "name": "Guyana",
    "dialCode": "+592",
    "isoCode": "Gy"
  },
  {
    "name": "Haiti",
    "dialCode": "+509",
    "isoCode": "Ht"
  },
  {
    "name": "Honduras",
    "dialCode": "+504",
    "isoCode": "Hn"
  },
  {
    "name": "Hong Kong",
    "dialCode": "+852",
    "isoCode": "Hk"
  },
  {
    "name": "Hungary",
    "dialCode": "+36",
    "isoCode": "Hu"
  },
  {
    "name": "Iceland",
    "dialCode": "+354",
    "isoCode": "Is"
  },
  {
    "name": "India",
    "dialCode": "+91",
    "isoCode": "In"
  },
  {
    "name": "Indonesia",
    "dialCode": "+62",
    "isoCode": "Id"
  },
  {
    "name": "Iran",
    "dialCode": "+98",
    "isoCode": "Ir"
  },
  {
    "name": "Iraq",
    "dialCode": "+964",
    "isoCode": "Iq"
  },
  {
    "name": "Ireland",
    "dialCode": "+353",
    "isoCode": "Ie"
  },
  {
    "name": "Isle of Man",
    "dialCode": "+44-1624",
    "isoCode": "Im"
  },
  {
    "name": "Italy",
    "dialCode": "+39",
    "isoCode": "It"
  },
  {
    "name": "Ivory Coast / Cote d'Ivoire",
    "dialCode": "+225",
    "isoCode": "Ci"
  },
  {
    "name": "Jamaica",
    "dialCode": "+1876",
    "isoCode": "Jm"
  },
  {
    "name": "Japan",
    "dialCode": "+81",
    "isoCode": "Jp"
  },
  {
    "name": "Jersey",
    "dialCode": "+44-1534",
    "isoCode": "Je"
  },
  {
    "name": "Jordan",
    "dialCode": "+962",
    "isoCode": "Jo"
  },
  {
    "name": "Kazakhstan",
    "dialCode": "+77",
    "isoCode": "Kz"
  },
  {
    "name": "Kenya",
    "dialCode": "+254",
    "isoCode": "Ke"
  },
  {
    "name": "Kiribati",
    "dialCode": "+686",
    "isoCode": "Ki"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "dialCode": "+850",
    "isoCode": "Kp"
  },
  {
    "name": "Korea, Republic of South Korea",
    "dialCode": "+82",
    "isoCode": "Kr"
  },
  {
    "name": "Kuwait",
    "dialCode": "+965",
    "isoCode": "Kw"
  },
  {
    "name": "Kyrgyzstan",
    "dialCode": "+996",
    "isoCode": "Kg"
  },
  {
    "name": "Laos",
    "dialCode": "+856",
    "isoCode": "La"
  },
  {
    "name": "Latvia",
    "dialCode": "+371",
    "isoCode": "Lv"
  },
  {
    "name": "Lebanon",
    "dialCode": "+961",
    "isoCode": "Lb"
  },
  {
    "name": "Lesotho",
    "dialCode": "+266",
    "isoCode": "Ls"
  },
  {
    "name": "Liberia",
    "dialCode": "+231",
    "isoCode": "Lr"
  },
  {
    "name": "Libya",
    "dialCode": "+218",
    "isoCode": "Ly"
  },
  {
    "name": "Liechtenstein",
    "dialCode": "+423",
    "isoCode": "Li"
  },
  {
    "name": "Lithuania",
    "dialCode": "+370",
    "isoCode": "Lt"
  },
  {
    "name": "Luxembourg",
    "dialCode": "+352",
    "isoCode": "Lu"
  },
  {
    "name": "Macau",
    "dialCode": "+853",
    "isoCode": "Mo"
  },
  {
    "name": "Madagascar",
    "dialCode": "+261",
    "isoCode": "Mg"
  },
  {
    "name": "Malawi",
    "dialCode": "+265",
    "isoCode": "Mw"
  },
  {
    "name": "Malaysia",
    "dialCode": "+60",
    "isoCode": "My"
  },
  {
    "name": "Mali",
    "dialCode": "+223",
    "isoCode": "Ml"
  },
  {
    "name": "Malta",
    "dialCode": "+356",
    "isoCode": "Mt"
  },
  {
    "name": "Marshall Islands",
    "dialCode": "+692",
    "isoCode": "Mh"
  },
  {
    "name": "Martinique",
    "dialCode": "+596",
    "isoCode": "Mq"
  },
  {
    "name": "Mauritania",
    "dialCode": "+222",
    "isoCode": "Mr"
  },
  {
    "name": "Mauritius",
    "dialCode": "+230",
    "isoCode": "Mu"
  },
  {
    "name": "Mayotte",
    "dialCode": "+262",
    "isoCode": "Yt"
  },
  {
    "name": "Mexico",
    "dialCode": "+52",
    "isoCode": "Mx"
  },
  {
    "name": "Micronesia, Federated States of Micronesia",
    "dialCode": "+691",
    "isoCode": "Fm"
  },
  {
    "name": "Moldova",
    "dialCode": "+373",
    "isoCode": "Md"
  },
  {
    "name": "Monaco",
    "dialCode": "+377",
    "isoCode": "Mc"
  },
  {
    "name": "Mongolia",
    "dialCode": "+976",
    "isoCode": "Mn"
  },
  {
    "name": "Montserrat",
    "dialCode": "+1664",
    "isoCode": "Ms"
  },
  {
    "name": "Morocco",
    "dialCode": "+212",
    "isoCode": "Ma"
  },
  {
    "name": "Mozambique",
    "dialCode": "+258",
    "isoCode": "Mz"
  },
  {
    "name": "Myanmar",
    "dialCode": "+95",
    "isoCode": "Mm"
  },
  {
    "name": "Namibia",
    "dialCode": "+264",
    "isoCode": "Na"
  },
  {
    "name": "Nauru",
    "dialCode": "+674",
    "isoCode": "Nr"
  },
  {
    "name": "Nepal",
    "dialCode": "+977",
    "isoCode": "Np"
  },
  {
    "name": "Netherlands",
    "dialCode": "+31",
    "isoCode": "Nl"
  },
  {
    "name": "New Caledonia",
    "dialCode": "+687",
    "isoCode": "Nc"
  },
  {
    "name": "New Zealand",
    "dialCode": "+64",
    "isoCode": "Nz"
  },
  {
    "name": "Nicaragua",
    "dialCode": "+505",
    "isoCode": "Ni"
  },
  {
    "name": "Niger",
    "dialCode": "+227",
    "isoCode": "Ne"
  },
  {
    "name": "Nigeria",
    "dialCode": "+234",
    "isoCode": "Ng"
  },
  {
    "name": "Niue",
    "dialCode": "+683",
    "isoCode": "Nu"
  },
  {
    "name": "Norfolk Island",
    "dialCode": "+672",
    "isoCode": "Nf"
  },
  {
    "name": "North Macedonia",
    "dialCode": "+389",
    "isoCode": "Mk"
  },
  {
    "name": "Northern Mariana Islands",
    "dialCode": "+1670",
    "isoCode": "Mp"
  },
  {
    "name": "Norway",
    "dialCode": "+47",
    "isoCode": "No"
  },
  {
    "name": "Oman",
    "dialCode": "+968",
    "isoCode": "Om"
  },
  {
    "name": "Pakistan",
    "dialCode": "+92",
    "isoCode": "Pk"
  },
  {
    "name": "Palau",
    "dialCode": "+680",
    "isoCode": "Pw"
  },
  {
    "name": "Palestine",
    "dialCode": "+970",
    "isoCode": "Ps"
  },
  {
    "name": "Panama",
    "dialCode": "+507",
    "isoCode": "Pa"
  },
  {
    "name": "Papua New Guinea",
    "dialCode": "+675",
    "isoCode": "Pg"
  },
  {
    "name": "Paraguay",
    "dialCode": "+595",
    "isoCode": "Py"
  },
  {
    "name": "Peru",
    "dialCode": "+51",
    "isoCode": "Pe"
  },
  {
    "name": "Philippines",
    "dialCode": "+63",
    "isoCode": "Ph"
  },
  {
    "name": "Pitcairn",
    "dialCode": "+872",
    "isoCode": "Pn"
  },
  {
    "name": "Poland",
    "dialCode": "+48",
    "isoCode": "Pl"
  },
  {
    "name": "Portugal",
    "dialCode": "+351",
    "isoCode": "Pt"
  },
  {
    "name": "Puerto Rico",
    "dialCode": "+1939",
    "isoCode": "Pr"
  },
  {
    "name": "Qatar",
    "dialCode": "+974",
    "isoCode": "Qa"
  },
  {
    "name": "Reunion",
    "dialCode": "+262",
    "isoCode": "Re"
  },
  {
    "name": "Romania",
    "dialCode": "+40",
    "isoCode": "Ro"
  },
  {
    "name": "Russia",
    "dialCode": "+7",
    "isoCode": "Ru"
  },
  {
    "name": "Rwanda",
    "dialCode": "+250",
    "isoCode": "Rw"
  },
  {
    "name": "Saint Kitts and Nevis",
    "dialCode": "+1869",
    "isoCode": "Kn"
  },
  {
    "name": "Saint Lucia",
    "dialCode": "+1758",
    "isoCode": "Lc"
  },
  {
    "name": "Samoa",
    "dialCode": "+685",
    "isoCode": "Ws"
  },
  {
    "name": "San Marino",
    "dialCode": "+378",
    "isoCode": "Sm"
  },
  {
    "name": "Sao Tome and Principe",
    "dialCode": "+239",
    "isoCode": "St"
  },
  {
    "name": "Saudi Arabia",
    "dialCode": "+966",
    "isoCode": "Sa"
  },
  {
    "name": "Senegal",
    "dialCode": "+221",
    "isoCode": "Sn"
  },
  {
    "name": "Serbia",
    "dialCode": "+381",
    "isoCode": "Rs"
  },
  {
    "name": "Seychelles",
    "dialCode": "+248",
    "isoCode": "Sc"
  },
  {
    "name": "Sierra Leone",
    "dialCode": "+232",
    "isoCode": "Sl"
  },
  {
    "name": "Singapore",
    "dialCode": "+65",
    "isoCode": "Sg"
  },
  {
    "name": "Slovakia",
    "dialCode": "+421",
    "isoCode": "Sk"
  },
  {
    "name": "Slovenia",
    "dialCode": "+386",
    "isoCode": "Si"
  },
  {
    "name": "Solomon Islands",
    "dialCode": "+677",
    "isoCode": "Sb"
  },
  {
    "name": "Somalia",
    "dialCode": "+252",
    "isoCode": "So"
  },
  {
    "name": "South Africa",
    "dialCode": "+27",
    "isoCode": "Za"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "dialCode": "+500",
    "isoCode": "Gs"
  },
  {
    "name": "South Sudan",
    "dialCode": "+211",
    "isoCode": "Ss"
  },
  {
    "name": "Spain",
    "dialCode": "+34",
    "isoCode": "Es"
  },
  {
    "name": "Sri Lanka",
    "dialCode": "+94",
    "isoCode": "Lk"
  },
  {
    "name": "Sudan",
    "dialCode": "+249",
    "isoCode": "Sd"
  },
  {
    "name": "Suriname",
    "dialCode": "+597",
    "isoCode": "Sr"
  },
  {
    "name": "Sweden",
    "dialCode": "+46",
    "isoCode": "Se"
  },
  {
    "name": "Switzerland",
    "dialCode": "+41",
    "isoCode": "Ch"
  },
  {
    "name": "Syrian Arab Republic",
    "dialCode": "+963",
    "isoCode": "Sy"
  },
  {
    "name": "Taiwan",
    "dialCode": "+886",
    "isoCode": "Tw"
  },
  {
    "name": "Tajikistan",
    "dialCode": "+992",
    "isoCode": "Tj"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "dialCode": "+255",
    "isoCode": "Tz"
  },
  {
    "name": "Thailand",
    "dialCode": "+66",
    "isoCode": "Th"
  },
  {
    "name": "Timor-Leste",
    "dialCode": "+670",
    "isoCode": "Tl"
  },
  {
    "name": "Togo",
    "dialCode": "+228",
    "isoCode": "Tg"
  },
  {
    "name": "Tokelau",
    "dialCode": "+690",
    "isoCode": "Tk"
  },
  {
    "name": "Tonga",
    "dialCode": "+676",
    "isoCode": "To"
  },
  {
    "name": "Trinidad and Tobago",
    "dialCode": "+1868",
    "isoCode": "Tt"
  },
  {
    "name": "Tunisia",
    "dialCode": "+216",
    "isoCode": "Tn"
  },
  {
    "name": "Turkey",
    "dialCode": "+90",
    "isoCode": "Tr"
  },
  {
    "name": "Turkmenistan",
    "dialCode": "+993",
    "isoCode": "Tm"
  },
  {
    "name": "Turks and Caicos Islands",
    "dialCode": "+1649",
    "isoCode": "Tc"
  },
  {
    "name": "Tuvalu",
    "dialCode": "+688",
    "isoCode": "Tv"
  },
  {
    "name": "Uganda",
    "dialCode": "+256",
    "isoCode": "Ug"
  },
  {
    "name": "Ukraine",
    "dialCode": "+380",
    "isoCode": "Ua"
  },
  {
    "name": "United Arab Emirates",
    "dialCode": "+971",
    "isoCode": "Ae"
  },
  {
    "name": "United Kingdom",
    "dialCode": "+44",
    "isoCode": "Gb"
  },
  {
    "name": "United States",
    "dialCode": "+1",
    "isoCode": "Us"
  },
  {
    "name": "Uruguay",
    "dialCode": "+598",
    "isoCode": "Uy"
  },
  {
    "name": "Uzbekistan",
    "dialCode": "+998",
    "isoCode": "Uz"
  },
  {
    "name": "Vanuatu",
    "dialCode": "+678",
    "isoCode": "Vu"
  },
  {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "dialCode": "+58",
    "isoCode": "Ve"
  },
  {
    "name": "Vietnam",
    "dialCode": "+84",
    "isoCode": "Vn"
  },
  {
    "name": "Virgin Islands, British",
    "dialCode": "+1284",
    "isoCode": "Vg"
  },
  {
    "name": "Virgin Islands, U.S.",
    "dialCode": "+1340",
    "isoCode": "Vi"
  },
  {
    "name": "Wallis and Futuna",
    "dialCode": "+681",
    "isoCode": "Wf"
  },
  {
    "name": "Yemen",
    "dialCode": "+967",
    "isoCode": "Ye"
  },
  {
    "name": "Zambia",
    "dialCode": "+260",
    "isoCode": "Zm"
  },
  {
    "name": "Zimbabwe",
    "dialCode": "+263",
    "isoCode": "Zw"
  }
]