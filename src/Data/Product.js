import InfektoDermBKC5L from "../assets/InfektoDermBKC/InfectoDermBKC_5L.png";
import InfectoDermBKC500ml from "../assets/InfektoDermBKC/InfektoDermBKC_500ml.png";

import InfectoDermCHG500_brousher from "../assets/InfectoDermCHG/InfectoDermCHG500_brousher.png";
import InfectoDermCHG500ml from "../assets/InfectoDermCHG/InfectoDermCHG_500.png";
import InfectoDermCHG5L from "../assets/InfectoDermCHG/InfectoDermCHG_5L.png";

import InfëktoCideAktiv5L from "../assets/InfectoCideAktiv/InfectoCide Aktiv_5L.png";
import InfëktoCideAktiv500ml from "../assets/InfectoCideAktiv/InfëktoCide Aktiv_500ml.png";
import InfëktoCideAktiv5L_2 from "../assets/InfectoCideAktiv/InfëktoCide Aktiv_5L_2.png";
import InfëktoCideAktiv_brousher from "../assets/InfectoCideAktiv/InfëktoCide Aktiv_Brousher.png";
import InfëktoCideAktiv_brousher_2 from "../assets/InfectoCideAktiv/InfëktoCide Aktiv_Brousher2.png";
import InfëktoCideAktiv_brousher_3 from "../assets/InfectoCideAktiv/InfëktoCide Aktiv_Brousher3.png";

const data = [
  {
    id: 1,
    name: `InfectoDerm BKC`,
    imageUrls: [InfectoDermBKC500ml, InfektoDermBKC5L],
    price: {
      "500ML": 250,
      "5 Liter": 5000,
    },
    sizes: ["500ML", "5 Liter"],
    description: `Medical Grade Hand Antiseptic. 
    Keeps your hands disinfected for up to 4 hours after use
    Used in high risk areas like Operation Theatres, ICUs, AKDs etc.
    Premium moisturizers, gentle on skin even after frequent use
    Formulation tested by the Haffkine Institute
    WHO and US CDC recommended formulation
    5 Log Reduction of Micro-organisms:
    Kills 99.999% of all bacteria, viruses and fungi including:
    Mycobacterium, Tuberculosis, HBV, HIV, HCV, H1N1, H5N1, Rota Virus, MRSA and SARS Virus`,
    composition: `abcd, rrgeg, svxfbv`,
    howTouse: `Apply InfectoDerm BKC directly on your hand using dispenser, Keeps your hands disinfected for up to 4 hours after use`,
  },
  {
    id: 2,
    name: `InfectoDerm CHG`,
    imageUrls: [
      InfectoDermCHG500ml,
      InfectoDermCHG5L,
      InfectoDermCHG500_brousher,
    ],
    price: {
      "500ML": 250,
      "5 Liter": 5000,
    },
    sizes: ["500ML", "5 Liter"],
    description: `Surgical Grade Hand Antiseptic
Keeps your hands disinfected for up to 6 hours after use.
Surgical Grade - used by surgeons in Operation Theatres, high level disinfection
Premium emollients and moisturizers
Protect hands of surgeons after years of frequent use
Formulation tested by the Haffkine Institute
WHO and US CDC recommended formulation. 5 Log Reduction of Micro-organisms:
Kills 99.999% of all bacteria, viruses and fungi including:
Mycobacterium, Tuberculosis, HBV, HIV, HCV, H1N1, H5N1, Rota Virus, MRSA and SARS Virus`,
    composition: `abcd, rrgeg, svxfbv`,
    howTouse: `Apply InfectoDerm CHG directly on your hand using dispenser, Keeps your hands disinfected for up to 6 hours after use`,
  },
  {
    id: 3,
    name: `InfëktoCide Aktiv`,
    imageUrls: [
      InfëktoCideAktiv500ml,
      InfëktoCideAktiv5L,
      InfëktoCideAktiv5L_2,
      InfëktoCideAktiv_brousher,
      InfëktoCideAktiv_brousher_2,
      InfëktoCideAktiv_brousher_3,
    ],
    price: {
      "500ML": 725,
      "5 Liter": 5925,
    },
    sizes: ["500ML", "5 Liter"],
    description: `One Step Medical Grade Disinfectant & Cleaner for Hard Surfaces & Environment

    Cleaning & Disinfection in one step
    No pre cleaning required
    Alkaline pH, easy to clean grease
    Non-corrosive, does not cause rusting on metals
    Very economical – use just 40 ml of InfëktoCide Aktiv in 10 L of water
    Takes just 10 minutes for medical grade disinfection
    Highly effective 5th generation Twin Chained Quaternary Ammonium Compounds, highly effective against enveloped (lipophilic) viruses such as Covid-19. Recommended by the US CDC (Centre for Disease Control, USA)
    QACs keep surfaces disinfected for hours after mopping 
    5 Log Reduction of Micro-organisms:
    Kills 99.999% of all bacteria, viruses and fungi including:
    Mycobacterium, Tuberculosis, HBV, HIV, HCV, H1N1, H5N1, Rota Virus, MRSA and SARS Virus`,
    composition: `abcd, rrgeg, svxfbv`,
    howTouse: `40 ml of InfëktoCide Aktiv in 10 L of water`,
  },
];

export default data;
