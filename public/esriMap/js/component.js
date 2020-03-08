function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

countryName = findGetParameter("name").replace("+", " ");

document.getElementById("Country").innerText = countryName;
document.title = countryName + " Travel Information";

var travelRisk = [
  {
    Country: "Yemen",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Yemen due to terrorism, civil unrest, health risks, and armed conflict."
  },
  {
    Country: "Haiti",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Haiti due to crime and civil unrest."
  },
  {
    Country: "Afghanistan",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Afghanistan due to armed conflict, terrorism, crime, and civil unrest."
  },
  {
    Country: "Venezuela",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Venezuela due to crime, civil unrest, poor health infrastructure, and arbitrary arrest and detention of U.S. citizens and due to Coronavirus outbreak."
  },
  {
    Country: "Somalia",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Somalia due to crime, terrorism, and piracy."
  },
  {
    Country: "North Korea",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to North Korea due to the serious risk of arrest and long-term detention."
  },
  {
    Country: "South Sudan",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to South Sudan due to crime and armed conflict."
  },
  {
    Country: "Iraq",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Iraq due to terrorism and armed conflict."
  },
  {
    Country: "Iran",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Iran due to the risk of arbitrary arrest and detention and due to Coronavius outbreak."
  },
  {
    Country: "Central African Republic",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Central African Republic (CAR) due to crime and civil unrest and Coronavirus outbreak. Violent crime, such as armed robbery, aggravated battery, and homicide, is common."
  },
  {
    Country: "Syria",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Syria due to terrorism, civil unrest, and armed conflict."
  },
  {
    Country: "Mali",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Mali due to crime and terrorism and Coronavirus outbreak."
  },
  {
    Country: "Libya",
    "Risk Level": "Level 4: Do Not Travel",
    "Risk Level Description":
      "Do not travel to Libya due to crime, terrorism, civil unrest, and armed conflict. Crime levels in Libya remain high, including the threat of kidnapping for ransom. Westernershave been targets of these crimes and also Coronavirus outbreak."
  },
  {
    Country: "Turkey",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Turkey due to terrorism and arbitrary detentions. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to areas near the Syria and Iraq borders due to terrorism."
  },
  {
    Country: "Burkina Faso",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Burkina Faso due to terrorism.  Do not travel to the Sahel Region due to crime and terrorism, the East Region due to crime and terrorism, the Provinces of Koulpelogo, Loroum, Yatenga, Sourou, Kossi, Banwa, Kenedougou, or within 50km of the Mali border in Houet Province due to crime and terrorism."
  },
  {
    Country: "Pakistan",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Pakistan due to terrorism. Do not travel to Balochistan province and Khyber Pakhtunkhwa (KPK) province, including the former Federally Administered Tribal Areas (FATA), due to terrorism, the Azad Kashmir area due to terrorism and the potential for armed conflict."
  },
  {
    Country: "Nigeria",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Nigeria due to elections, crime, terrorism, civil unrest, and piracy. Do not travel to Borno and Yobe States and northern Adamawa State due to terrorism"
  },
  {
    Country: "Congo DRC",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to the Democratic Republic of the Congo (DRC) due to crime and civil unrest. Do not travel to Eastern DRC and the three Kasai provinces due to armed conflict."
  },
  {
    Country: "Chad",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Chad due to crime, terrorism, and minefields."
  },
  {
    Country: "El Salvador",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description": "Reconsider travel to El Salvador due to crime."
  },
  {
    Country: "Sudan",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Sudan due to terrorism and civil unrest. Do not travel to the Darfur region, Blue Nile state, and South Kordofan state due to crime and armed conflict."
  },
  {
    Country: "Mauritania",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider Travel to Mauritania due to crime and terrorism"
  },
  {
    Country: "Niger",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Niger due to crime and terrorism. Violent crime, such as armed robbery, is common."
  },
  {
    Country: "Honduras",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Honduras due to crime. Do not travel to Gracias a Dios Department due to crime."
  },
  {
    Country: "Nicaragua",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Nicaragua due to crime, civil unrest,limited healthcare availability, and arbitrary enforcement of laws."
  },
  {
    Country: "Lebanon",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel Lebanon due to crime, terrorism, and armed conflict. Do not travel to the border with Syria due to terrorism and armed conflict, the border with Israel due to the potential for armed conflict, refugee settlements due to the potential for armed conflict"
  },
  {
    Country: "Burundi",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Burundi due to crime and armed conflict."
  },
  {
    Country: "Guinea-Bissau",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Guinea-Bissau due to crime and civil unrest."
  },
  {
    Country: "Dominican Republic",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Dominican Republic due to crime."
  },
  {
    Country: "Egypt",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Egypt due to terrorism. The Sinai Peninsula (with the exception of travel to Sharm El-Sheikh by air) due to terrorism, the Western Desert due to terrorism, Egyptian border areas due to military zones."
  },
  {
    Country: "Brazil",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Brazil due to crime. Do not travel to, any areas within 150 km of Brazil?s land borders with Venezuela, Colombia, Peru, Bolivia, Guyana, Suriname, French Guiana, and Paraguay due to crime. (Note: This does not apply to the Foz do Iguacu National Park or Pantanal National Park.). Do not use public buses in and around Recife due to crime, Informal housing developments (commonly referred to in Brazil as favelas, vilas, communidades, and/or conglomerados), at any time of day due to crime, Brasilia?s administrative regions (commonly known as ?satellite cities?) of Ceilandia, Santa Maria, Sao Sebastiao, and Paranoa during non-daylight hours due to crime, Recife?s Pina Beach from Dona Benvinda de Farias Street to the Brasilia Teimosa neighborhood after dark due to crime (see additional information below)."
  },
  {
    Country: "Guinea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guinea due to civil unrest."
  },
  {
    Country: "Ethiopia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution when traveling in Ethiopia due to sporadic civil unrest and communications disruptions. Some areas have increased risk. Read the entire Travel Advisory. Do Not Travel To Somali Regional State due to potential for civil unrest, terrorism, and landmines. Reconsider Travel To the East Hararge region and the Guji zone of Oromia State due to armed conflict and civil unrest, Benishangul Gumuz and the western part of Oromia State due to armed conflict and civil unrest. The Danakil Depression region in Afar due to crime, Border areas with Kenya, Sudan, South Sudan, and Eritrea due to crime, armed conflict, and civil unrest and Coronavirus outbreak."
  },
  {
    Country: "Antarctica",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Antarctica due to�environmental hazards posed by extreme and unpredictable weather.�"
  },
  {
    Country: "Nepal",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Nepal due to the potential for isolated political violence."
  },
  {
    Country: "Algeria",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution when traveling in Algeria due to terrorism. Do not travel to areas near the eastern and southern borders due to terrorism, areas in the Sahara Desert due to terrorism."
  },
  {
    Country: "Belize",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Belize due to crime."
  },
  {
    Country: "Indonesia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Indonesia due to terrorism and natural disasters. Reconsider travel to Central Sulawesi and Papua due to civil unrest."
  },
  {
    Country: "China",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Chine due to Coronavius outbreak."
  },
  {
    Country: "Tunisia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tunisia due to terrorism. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to within 30 km of southeastern Tunisia along the border with Libya due to terrorism, mountainous areas in the country?s west, including the Chaambi Mountain National Park area, due to terrorism the desert south of Remada due to the military zone, Jendouba south of Ain Drahem and west of RN15, El Kef, and Kasserine, next to the Algerian border due to terrorism, Sidi Bou Zid in central Tunisia due to terrorism."
  },
  {
    Country: "Serbia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Serbia due to crime."
  },
  {
    Country: "Italy",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to Italy due to Coronavius outbreak."
  },
  {
    Country: "Israel, The West Bank and Gaza",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Israel due to terrorism. Do not travel to Gaza due to terrorism, civil unrest, and armed conflict. Reconsider travel to the West Bank due to terrorism, potentially violent civil unrest, and the potential for armed conflict."
  },
  {
    Country: "Tanzania",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tanzania due to crime, terrorism, and targeting of LGBTI persons."
  },
  {
    Country: "France",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in France due to terrorism."
  },
  {
    Country: "Burma (Myanmar)",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Burma due to areas of civil unrest and armed conflict."
  },
  {
    Country: "Belgium",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Belgium due to terrorism."
  },
  {
    Country: "United Kingdom",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the United Kingdom due to terrorism."
  },
  {
    Country: "Uganda",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Uganda due to crime."
  },
  {
    Country: "Azerbaijan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Azerbaijan due to the risk of terrorism."
  },
  {
    Country: "Jordan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Jordan due to terrorism. Do not travel to the border with Syria and Iraq due to terrorism and armed conflict."
  },
  {
    Country: "Côte d'Ivoire",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Côte d'Ivoire due to crime and terrorism."
  },
  {
    Country: "Russian Federation",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise Increased Caution due to terrorism, harassment, and the arbitrary enforcement of local laws. Some areas have increased risk. Read the entire Travel Advisory. Do not travel to the north Caucasus, including Chechnya and Mount Elbrus, due to terrorism and risk of civil unrest, Crimea due to Russia?s occupation of the Ukrainian territory and abuses by its occupying authorities."
  },
  {
    Country: "Spain",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Spain due to terrorism."
  },
  {
    Country: "Ukraine",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Ukraine due to crime and civil unrest. Some areas have increased risk. Read the entire Travel Advisory."
  },
  {
    Country: "Sierra Leone",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Sierra Leone due to crime."
  },
  {
    Country: "Mexico",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Mexico due to crime. Some areas have increased risk. Read the entire Travel Advisory."
  },
  {
    Country: "Comoros",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in The Union of the Comoros due to civil unrest."
  },
  {
    Country: "South Africa",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in South Africa due to crime, civil unrest, and drought."
  },
  {
    Country: "Netherlands",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Netherlands due to terrorism."
  },
  {
    Country: "Cuba",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Cuba�due to attacks targeting U.S. Embassy Havana employees resulting in the drawdown of embassy staff."
  },
  {
    Country: "Tajikistan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Tajikistan due to terrorism."
  },
  {
    Country: "Madagascar",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased precautions in Madagascar due to civil unrest and crime."
  },
  {
    Country: "Guatemala",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guatemala due to crime."
  },
  {
    Country: "Papua New Guinea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Papua New Guinea due to crime, civil unrest, and a polio outbreak"
  },
  {
    Country: "Bangladesh",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Bangladesh due to crime and terrorism."
  },
  {
    Country: "Zimbabwe",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Zimbabwe due to crime and civil unrest."
  },
  {
    Country: "Colombia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Colombia due to�crime and terrorism.�"
  },
  {
    Country: "Denmark",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Denmark due to terrorism."
  },
  {
    Country: "Bosnia and Herzegovina",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Bosnia-Herzegovina due to terrorism and land mines."
  },
  {
    Country: "Germany",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Germany due to terrorism."
  },
  {
    Country: "Kosovo",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Kosovo due to terrorism."
  },
  {
    Country: "Guyana",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Guyana due to crime."
  },
  {
    Country: "Saudi Arabia",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Saudi Arabia due to terrorism and the threat of missile attacks on civilian targets."
  },
  {
    Country: "Philippines",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Phillippines due to Coronavirus outbreak."
    },
  {
    Country: "Cameroon",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Cameroon due to crime."
  },
  {
    Country: "Republic of the Congo",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Republic of the Congo due to crime and civil unrest."
  },
  {
    Country: "Kenya",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Kenya due to crime and terrorism."
  },
  {
    Country: "Eritrea",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Eritrea due to travel restrictions and limited consular assistance."
  },
  {
    Country: "Trinidad and Tobago",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Trinidad and Tobago due to crime and terrorism."
  },
  {
    Country: "Maldives",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Maldives due to terrorism and civil unrest."
  },
  {
    Country: "Turks and Caicos Islands",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in the Turks and Caicos Islands due to crime."
  },
  {
    Country: "The Bahamas",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in The Bahamas due to crime."
  },
  {
    Country: "Jamaica",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Jamaica due to crime."
  },
  {
    Country: "India",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in India due to crime and terrorism."
  },
  {
    Country: "Ghana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mozambique",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Uruguay",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Thailand",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Benin",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sri Lanka",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bhutan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Togo",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Paraguay",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sao Tome and Principe",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Gabon",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Vincent and The Grenadines",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Lucia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mongolia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Canada",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sint Maarten",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Montserrat",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Grenada",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Curacao",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cayman Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bonaire, Sint Eustatius and Saba",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bermuda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Barbados",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Aruba",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Liberia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cambodia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Georgia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Vietnam",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Taiwan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Qatar",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Luxembourg",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Croatia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bahrain",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Montenegro",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Macau",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Hong Kong",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Slovenia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Slovakia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Poland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Mauritius",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Macedonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Timor-Leste",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Singapore",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Japan",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Japan due to Coronavirus outbreak."
  },
  {
    Country: "South Korea",
    "Risk Level": "Level 3: Reconsider Travel",
    "Risk Level Description":
      "Reconsider travel to South Korea due to Coronavius outbreak."
  },
  {
    Country: "Malawi",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Lesotho",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Fiji",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Vanuatu",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Solomon Island",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Palau",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "New Caledonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Namibia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French Polynesia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Angola",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Zambia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Tuvalu",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Nauru",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Eswatini",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Botswana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Uzbekistan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "United Arab Emirates",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Samoa",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kuwait",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Czech Republic",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Turkmenistan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Seychelles",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Djibouti",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "The Gambia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Marshall Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Equatorial Guinea",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Australia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Malaysia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cabo Verde",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Argentina",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Micronesia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Austria",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "New Zealand",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Tonga",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Ireland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French Guiana",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Suriname",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kiribati",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bulgaria",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Brunei",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Finland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Switzerland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Norway",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Costa Rica",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Andorra",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Chile",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Hungary",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Estonia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Bolivia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Romania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Latvia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Iceland",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Peru",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Laos",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Moldova",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Greece",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Malta",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Portugal",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Lithuania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Cyprus",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Belarus",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Albania",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Kazakhstan",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Senegal",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Panama",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Saint Kitts and Nevis",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Oman",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Sweden",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "The Kyrgyz Republic",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Ecuador",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Armenia",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Dominica",
    "Risk Level": "Level 2: Exercise Increased Caution",
    "Risk Level Description":
      "Exercise increased caution in Dominica due to Coronavirus outbreak."
  },
  {
    Country: "British Virgin Islands",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Anguilla",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Rwanda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Morocco",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "French West Indies",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "Antigua and Barbuda",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  },
  {
    Country: "United States",
    "Risk Level": "Level 1: Exercise Normal Precautions",
    "Risk Level Description": "Exercise normal precautions"
  }
];

var arrayLength = travelRisk.length;

for (var i = 0; i < arrayLength; i++) {
  if (travelRisk[i].Country.toLowerCase() == countryName.toLowerCase()) {
    document.getElementById("saftey-level").innerText = travelRisk[i][
      "Risk Level"
    ].slice(0, 7);
    document.getElementById("saftey-level-blurb").innerText = travelRisk[i][
      "Risk Level"
    ].slice(8);
    document.getElementById("saftey-level-description").innerText =
      travelRisk[i]["Risk Level Description"];
  }
}

var healthLevels = {
  angola: "Alert  Level 2, Practice Enhanced Precautions",
  bangladesh: "Watch  Level 1, Practice Usual Precautions",
  belgium: "Watch  Level 1, Practice Usual Precautions",
  belize: "Watch  Level 1, Practice Usual Precautions",
  benin: "Alert  Level 2, Practice Enhanced Precautions",
  benin: "Watch  Level 1, Practice Usual Precautions",
  bolombia: "Watch  Level 1, Practice Usual Precautions",
  "bosnia and herzegovina": "Watch  Level 1, Practice Usual Precautions",
  brazil: "Watch  Level 1, Practice Usual Precautions",
  "burkina faso": "Alert  Level 2, Practice Enhanced Precautions",
  burma: "Alert  Level 2, Practice Enhanced Precautions",
  burundi: "Watch  Level 1, Practice Usual Precautions",
  cameroon: "Alert  Level 2, Practice Enhanced Precautions",
  "central african republic": "Alert  Level 2, Practice Enhanced Precautions",
  chad: "Alert  Level 2, Practice Enhanced Precautions",
  china: "Warning Level 3, Avoid Nonessential Travel",
  "cook islands": "Watch  Level 1, Practice Usual Precautions",
  "costa rica": "Watch  Level 1, Practice Usual Precautions",
  "congo drc": "Alert  Level 2, Practice Enhanced Precautions",
  "congo drc": "Watch  Level 1, Practice Usual Precautions",
  "dominican republic": "Watch  Level 1, Practice Usual Precautions",
  "el salvador": "Watch  Level 1, Practice Usual Precautions",
  ethiopia: "Alert  Level 2, Practice Enhanced Precautions",
  ethiopia: "Watch  Level 1, Practice Usual Precautions",
  "french polynesia": "Watch  Level 1, Practice Usual Precautions",
  ghana: "Alert  Level 2, Practice Enhanced Precautions",
  greece: "Watch  Level 1, Practice Usual Precautions",
  guam: "Watch  Level 1, Practice Usual Precautions",
  guatemala: "Watch  Level 1, Practice Usual Precautions",
  honduras: "Watch  Level 1, Practice Usual Precautions",
  "hong kong sar": "Watch  Level 1, Practice Usual Precautions",
  indonesia: "Alert  Level 2, Practice Enhanced Precautions",
  iran: "Warning Level 3, Avoid Nonessential Travel",
  italy: "Warning Level 3, Avoid Nonessential Travel",
  "ivory coast": "Watch  Level 1, Practice Usual Precautions",
  japan: "Alert  Level 2, Practice Enhanced Precautions",
  kyrgyzstan: "Watch  Level 1, Practice Usual Precautions",
  lithuania: "Watch  Level 1, Practice Usual Precautions",
  luxembourg: "Watch  Level 1, Practice Usual Precautions",
  malaysia: "Watch  Level 1, Practice Usual Precautions",
  malta: "Watch  Level 1, Practice Usual Precautions",
  "marshall islands": "Watch  Level 1, Practice Usual Precautions",
  mexico: "Watch  Level 1, Practice Usual Precautions",
  micronesia: "Watch  Level 1, Practice Usual Precautions",
  mozambique: "Alert  Level 2, Practice Enhanced Precautions",
  nepal: "Watch  Level 1, Practice Usual Precautions",
  netherlands: "Watch  Level 1, Practice Usual Precautions",
  nicaragua: "Watch  Level 1, Practice Usual Precautions",
  niger: "Alert  Level 2, Practice Enhanced Precautions",
  nigeria: "Alert  Level 2, Practice Enhanced Precautions",
  nigeria: "Watch  Level 1, Practice Usual Precautions",
  "north macedonia": "Watch  Level 1, Practice Usual Precautions",
  norway: "Watch  Level 1, Practice Usual Precautions",
  pakistan: "Watch  Level 1, Practice Usual Precautions",
  palau: "Watch  Level 1, Practice Usual Precautions",
  "papua new guinea": "Alert  Level 2, Practice Enhanced Precautions",
  paraguay: "Watch  Level 1, Practice Usual Precautions",
  peru: "Watch  Level 1, Practice Usual Precautions",
  philippines: "Alert  Level 2, Practice Enhanced Precautions",
  philippines: "Watch  Level 1, Practice Usual Precautions",
  poland: "Watch  Level 1, Practice Usual Precautions",
  portugal: "Watch  Level 1, Practice Usual Precautions",
  reunion: "Watch  Level 1, Practice Usual Precautions",
  russia: "Watch  Level 1, Practice Usual Precautions",
  singapore: "Watch  Level 1, Practice Usual Precautions",
  slovakia: "Watch  Level 1, Practice Usual Precautions",
  slovenia: "Watch  Level 1, Practice Usual Precautions",
  somalia: "Alert  Level 2, Practice Enhanced Precautions",
  "south korea": "Warning Level 3, Avoid Nonessential Travel",
  "sri lanka": "Watch  Level 1, Practice Usual Precautions",
  switzerland: "Watch  Level 1, Practice Usual Precautions",
  tanzania: "Watch  Level 1, Practice Usual Precautions",
  togo: "Alert  Level 2, Practice Enhanced Precautions",
  tonga: "Watch  Level 1, Practice Usual Precautions",
  turkey: "Watch  Level 1, Practice Usual Precautions",
  "united kingdom": "Watch  Level 1, Practice Usual Precautions",
  uruguay: "Watch  Level 1, Practice Usual Precautions",
  venezuela: "Warning Level 3, Avoid Nonessential Travel",
  zambia: "Alert  Level 2, Practice Enhanced Precautions"
};

var healthSummaries = {
    "burkina faso": "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    "bosnia and herzegovina": "This notice has been removed.",
    brazil: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    belgium: "This notice has been removed.",
    benin: "Dengue is a risk in many parts of Africa and the Middle East. Some countries are reporting increased numbers of cases of the disease. Travelers to Africa and the Middle East can protect themselves by preventing mosquito bites.",
    zambia: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    venezuela: "CDC recommends that travelers avoid all nonessential travel to Venezuela. The country is experiencing outbreaks of infectious diseases, and adequate health care is currently not available in most of the country. ",
    belize: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    uruguay: "This notice has been removed.",
    turkey: "As of November 11, 2013, the World Health Organization (WHO) has reported 7,132 confirmed measles cases in Turkey during 2013, up from approximately 700 reported cases in all of 2012. The Turkish Ministry of Health is working to address the outbreak.",
    togo: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    tonga: "This page has been removed.",
    tanzania: "Dengue is a risk in many parts of Africa and the Middle East. Some countries are reporting increased numbers of cases of the disease. Travelers to Africa and the Middle East can protect themselves by preventing mosquito bites.",
    switzerland: "This notice has been removed.",
    "sri lanka": "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    "south korea": "CDC recommends that travelers avoid all nonessential travel to South Korea.",
    somalia: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    slovenia: "This notice has been removed.",
    singapore  : "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    slovakia: "This notice has been removed.",
    reunion: "Dengue is a risk in many parts of Africa and the Middle East. Some countries are reporting increased numbers of cases of the disease. Travelers to Africa and the Middle East can protect themselves by preventing mosquito bites.",
    russia: "This notice has been removed.",
    peru: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    portugal: "This notice has been removed.",
    "papua new guinea": "There are polio outbreaks in several countries in Asia. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    philippines: "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    paraguay: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    palau: "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    pakistan: "There is an ongoing outbreak of extensively drug-resistant (XDR) typhoid fever in Pakistan. Extensively drug-resistant infections do not respond to most antibiotics.",
    poland: "This notice has been removed.",
    "north macedonia": "This notice has been removed.",
    norway: "This notice has been removed.",
    niger: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    nigeria: "Nigerian health officials have declared an outbreak of Lassa fever in Nigeria. Travelers to Nigeria should avoid contact with rats.",
    nepal: "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    nicaragua: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    netherlands: "This notice has been removed.",
    mozambique: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    micronesia: "This notice has been removed.",
    mexico: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    "marshall islands": "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    malta: "This notice has been removed.",
    malaysia: "This notice has been removed.\r\n\r\nFor all current travel notices, please visit the travel notices page.",
    luxembourg: "This notice has been removed.",
    lithuania: "This notice has been removed.",
    kyrgyzstan: "This notice has been removed.",
    japan: "There is an outbreak of rubella in Japan. Travelers to Japan should make sure they are vaccinated against rubella with the MMR (measles, mumps, and rubella) vaccine before travel.",
    iran: "CDC recommends that travelers avoid all nonessential travel to Iran.",
    indonesia: "There are polio outbreaks in several countries in Asia. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    "hong kong sar": "The ongoing outbreak of respiratory illness has spread to Hong Kong.",
    italy: "CDC recommends that travelers avoid all nonessential travel to Italy.",
    honduras: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    guam: "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    ghana: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    greece: "This notice has been removed.",
    guatemala: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    "united kingdom": "This notice has been removed.",
    ethiopia: "There is an outbreak of chikungunya in Ethiopia. You can protect yourself against chikungunya disease by preventing mosquito bites",
    "el salvador": "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    "dominican republic": "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    "democratic republic of congo": "There is an ongoing outbreak of monkeypox in the Democratic Republic of the Congo (DRC).",
    "ivory coast": "Dengue is a risk in many parts of Africa and the Middle East. Some countries are reporting increased numbers of cases of the disease. Travelers to Africa and the Middle East can protect themselves by preventing mosquito bites.",
    "costa rica": "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    "cook islands": "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    colombia: "Dengue is a risk in many parts of Central and South America, Mexico, and the Caribbean. Some countries are reporting increased numbers of cases of the disease. Travelers to the Americas can protect themselves by preventing mosquito bites.\r\n",
    china: "CDC recommends that travelers avoid all nonessential travel to the Peoples Republic of China dur to Coronavirus outbreak.",
    chad: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    "central african republic": "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    bangladesh: "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    burma: "There are polio outbreaks in several countries in Asia. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    cameroon: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio.",
    burundi: "There is a malaria epidemic in Burundi, a country in central Africa. To prevent malaria infection, travelers should take prescription medicine and take steps to prevent mosquito bites.\r\n",
    "french polynesia": "Dengue is a risk in many parts of Asia and the Pacific Islands. Some countries are reporting increased numbers of cases of the disease. Travelers to Asia and the Pacific Islands can protect themselves by preventing mosquito bites.",
    angola: "There are polio outbreaks in several countries in Africa. CDC recommends that all travelers to these countries be vaccinated fully against polio."
  };
  

if (healthLevels[countryName.toLowerCase()] != undefined) {
  var level = healthLevels[countryName.toLowerCase()];
  document.getElementById("health-level").innerText = level.slice(0, 13);
  document.getElementById("health-level-blurb").innerText = level.slice(15);
}

if (healthSummaries[countryName.toLowerCase()] != undefined) {
  var summary = healthSummaries[countryName.toLowerCase()];
  document.getElementById("health-warning-descripton").innerText = summary;
}


var vaccine = {
  afghanistan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Poliomyelitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  belarus: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  barbados: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  bangladesh: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  bhutan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  bonaire: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  belgium: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  bahrain: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  bolivia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  benin: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  bermuda: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  belize: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  bahamas: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  azerbaijan: ["Routine", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"],
  "czech republic": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  maldives: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  azores: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  zimbabwe: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  zambia: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  austria: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  yemen: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "western sahara": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "wake Island": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  vietnam: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Japanese encephalitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  venezuela: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  vanuatu: ["Routine", "Hepatitis A", "Malaria", "Typhoid", "Hepatitis B"],
  uzbekistan: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  uruguay: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  "united states": [],
  ukraine: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  uganda: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  tuvalu: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  turkmenistan: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  turkey: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  tunisia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  tonga: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  tokelau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  togo: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "trinidad and tobago": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "east timor": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  thailand: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  tanzania: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  tajikistan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Malaria"
  ],
  taiwan: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  "sao Tome and Principe": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Rabies"
  ],
  syria: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  switzerland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  sweden: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  suriname: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  sudan: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "sri lanka": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  spain: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "south sudan": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "south korea": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies"
  ],
  "south georgia south sandwich islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  "south africa": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  somalia: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Poliomyelitis",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "solomon islands": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  slovenia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  slovakia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "sint maarten": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  singapore: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "sierra leone": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  seychelles: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  serbia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  senegal: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "sint eustatius": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saudi arabia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "san marino": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  samoa: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  "saint pierre and miquelon": [
    "Routine",
    "Rabies",
    "Hepatitis A",
    "Hepatitis B"
  ],
  "saint Martin": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint lucia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "st kitts and nevis": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint helena": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "usvirgin islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  saba: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  reunion: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  rwanda: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "russian federation": [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  romania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "puerto rico": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  "saint barthelemy": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  paraguay: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  "papua new guinea": [
    "Routine",
    "Hepatitis A",
    "Poliomyelitis",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies"
  ],
  portugal: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  poland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "pitcairn islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  philippines: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  peru: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  qatar: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  panama: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  palau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  pakistan: [
    "Routine",
    "Hepatitis A",
    "Poliomyelitis",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  oman: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  norway: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "northern mariana islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  "north korea": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "norfolk island": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  niue: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  nigeria: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Poliomyelitis",
    "Typhoid",
    "Yellow Fever",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Meningococcal disease"
  ],
  niger: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies"
  ],
  nicaragua: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "new zealand": ["Routine", "Hepatitis A", "Hepatitis B"],
  "new caledonia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  netherlands: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  nepal: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  nauru: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  namibia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  mozambique: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  morocco: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  montserrat: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  montenegro: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  mongolia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  moldova: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  micronesia: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  mexico: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  mayotte: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  mauritius: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  mauritania: [
    "Routine",
    "Malaria",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  martinique: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  monaco: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "marshall islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  malta: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Yellow Fever"],
  mali: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  malaysia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  malawi: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "maderia islands": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  madagascar: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  macedonia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  macau: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  luxembourg: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  lithuania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  liechtenstein: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  libya: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  liberia: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  lesotho: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  lebanon: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  latvia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  lhaos: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  kyrgyzstan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  kuwait: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  kosovo: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  kiribati: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  kenya: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  kazakhstan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  jordan: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  japan: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies"
  ],
  jamaica: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  israel: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Typhoid"],
  ireland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  iraq: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  iran: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Poliomyelitis",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  indonesia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  india: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  iceland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  hungary: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "hong kong": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  honduras: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  italy: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  haiti: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  guyana: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  "guinea bissau": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  guinea: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  guatemala: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  guam: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  guadeloupe: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "saint vincent and the grenadines": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  grenada: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  greenland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  greece: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  gibraltar: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  ghana: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  germany: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  georgia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "the gambia": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  gabon: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "french guiana": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  finland: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  fiji: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Yellow Fever"],
  "faroe island": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "falkland islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  ethiopia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  eswatini: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  estonia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  france: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  eritrea: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Meningococcal disease",
    "Rabies",
    "Yellow Fever"
  ],
  "equatorial guinea": [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B",
    "Rabies"
  ],
  "united kingdom": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "el salvador": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  egypt: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  ecuador: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "easter island": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  "united arab emirates": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "dominican republic": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Malaria",
    "Rabies"
  ],
  dominica: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  djibouti: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  denmark: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "congo drc": [
    "Routine",
    "Yellow Fever",
    "Poliomyelitis",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  cyprus: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  curacao: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "côte d'ivoire": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  cuba: ["Routine", "Typhoid", "Hepatitis A", "Rabies", "Hepatitis B"],
  croatia: ["Routine", "Hepatitis A", "Rabies", "Hepatitis B"],
  "costa rica": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "cook islands": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  congo: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  comoros: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  colombia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "christmas island": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  china: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever",
    "Malaria"
  ],
  chile: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  chad: [
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies",
    "Yellow Fever"
  ],
  "central african republic": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  "cocos islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Yellow Fever"
  ],
  "cayman islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  "cape verde": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "canary islands": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  canada: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  cameroon: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Meningococcal disease",
    "Poliomyelitis",
    "Rabies"
  ],
  cambodia: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "turks and caicos": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  burundi: [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  burma: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Japanese encephalitis",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "burkina faso": [
    "Routine",
    "Yellow Fever",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Hepatitis B",
    "Meningococcal disease",
    "Rabies"
  ],
  bulgaria: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  brunei: [
    "Routine",
    "Typhoid",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  "british indian ocean territory": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B"
  ],
  brazil: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  botswana: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Malaria",
    "Rabies",
    "Yellow Fever"
  ],
  "bosnia and herzegovina": ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  australia: [
    "Routine",
    "Hepatitis A",
    "Hepatitis B",
    "Japanese encephalitis",
    "Rabies",
    "Yellow Fever"
  ],
  "french polynesia": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Yellow Fever",
    "Hepatitis B"
  ],
  aruba: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  armenia: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  argentina: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  "antigua and barbuda": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  antarctica: [],
  anguilla: ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B", "Rabies"],
  angola: [
    "Yellow Fever",
    "Routine",
    "Hepatitis A",
    "Malaria",
    "Typhoid",
    "Cholera",
    "Hepatitis B",
    "Rabies"
  ],
  "british virgin islands": [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Hepatitis B",
    "Rabies"
  ],
  andorra: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies"],
  "american samoa": ["Routine", "Hepatitis A", "Typhoid", "Hepatitis B"],
  algeria: [
    "Routine",
    "Hepatitis A",
    "Typhoid",
    "Cholera",
    "Malaria",
    "Hepatitis B",
    "Rabies",
    "Yellow Fever"
  ],
  albania: ["Routine", "Hepatitis A", "Hepatitis B", "Rabies", "Yellow Fever"]
};

var vaccineDescriptions = {
  Routine:
    "Make sure you are up-to-date on routine vaccines before every trip. These vaccines include measles-mumps-rubella (MMR) vaccine, diphtheria-tetanus-pertussis vaccine, varicella (chickenpox) vaccine, polio vaccine, and your yearly flu shot.",
  "Hepatitis A":
    "CDC recommends this vaccine because you can get hepatitis A through contaminated food or water, regardless of where you are eating or staying.",
  Typhoid:
    "You can get typhoid through contaminated food or water. CDC recommends this vaccine for most travelers, especially if you are staying with friends or relatives, visiting smaller cities or rural areas, or if you are an adventurous eater.",
  Poliomyelitis: "You may need a polio vaccine before your trip.",
  "Hepatitis B":
    "You can get hepatitis B through sexual contact, contaminated needles, and blood products, so CDC recommends this vaccine if you might have sex with a new partner, get a tattoo or piercing, or have any medical procedures.",
  Malaria:
    "You may need to take prescription medicine before, during, and after your trip to prevent malaria, especially if you are visiting low-altitude areas.",
  Rabies:
    "Although rabies can be found in dogs, bats, and other mammals, it is not a major risk to most travelers. A vaccine is recommended if travelers are involved in outdoor and other activities in remote areas that put them at risk for animal bites (such as adventure travel and caving).",
  "Yellow Fever":
    "If you are traveling from a country other than the US, check with a doctor or the CDC to see if you may be required to get the yellow fever vaccine.",
  "Japanese encephalitis":
    "You may need this vaccine if your trip will last more than a month, depending on where you are going.",
  "Meningococcal disease":
    "CDC recommends this vaccine if you plan to visit areas located in the meningitis belt during the dry season (December–June), when the disease is most common.",
  Cholera:
    "CDC recommends this vaccine for adults who are traveling to areas of active cholera transmission."
};

if (vaccine[countryName.toLowerCase()] != undefined) {
  var vaccines = vaccine[countryName.toLowerCase()];
  var numVaccines = vaccines.length;
  var innerTable = "";
  for (var i = 0; i < numVaccines; i++) {
    innerTable +=
      "<tr><td style=\"padding:12px;text-align: left; color: #58585f;font-family: 'Lato', sans-serif;\" >";
    innerTable += vaccines[i];
    innerTable +=
      "</td><td style=\"padding:12px;text-align: left; color: #58585f;font-family: 'Lato', sans-serif;\">";
    innerTable += vaccineDescriptions[vaccines[i]];
    innerTable += "</td></tr>";
  }
  document.getElementById("vaccine-table").innerHTML = innerTable;
}