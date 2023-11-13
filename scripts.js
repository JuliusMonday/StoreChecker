const userLocation = document.querySelector('#location').value;
const closedBtn = document.querySelector('.status-btn1');
const openBtn = document.querySelector('.status-btn2');
const shopLocation = document.querySelector('.store-names');
const streetLocation = document.querySelector('#street-address');
const shopLocation2 = document.querySelector('#store-names2')
const streetLocation2 = document.querySelector('.street-address2')
const timeStamp = document.querySelector('.time-range');
const refreshBtn = document.querySelector('#refreshBtn');

const viewBtn = document.querySelector('.view-all-btn')
viewBtn.addEventListener('click', () => {
    
    const userLocation = document.querySelector('#location').value;
    switch (userLocation) {
      case "100001, USA":
        shopLocation.innerText = 'NOT AVAILABLE FOR NOW😭😭😭';
        streetLocation.textContent = "not available for now😭😭😭";
        shopLocation2.innerText = ' not available for now😭😭😭';
        streetLocation2.innerText ='NO STREET FOUND';
        break;
      case "200002, Canada":
        shopLocation.innerText = 'NOT AVAILABLE FOR NOW😭😭😭';
        streetLocation.textContent = "!!!!!!!!"
        shopLocation2.innerText = 'NOT AVAILABLE FOR NOW😭😭😭';
        streetLocation2.textContent = "!!!!!!!!"
        break;
      case "600006, France":
        shopLocation.innerText = franceShopOutput;
        streetLocation.innerText = francestreetOutput
        shopLocation2.innerText = franceShopOutput;
        streetLocation2.innerText = francestreetOutput;
        break;
      case "400004, Australia":
        shopLocation.innerText = userLocation;
        streetLocation.innerText = 'NO STREET FOUND'
        shopLocation2.innerText = userLocation;
        streetLocation2.innerText ='NO STREET FOUND';
        break;
      case "500005, Germany":
        shopLocation.innerText = germanyShopOutput;
        streetLocation.innerText = germanystreetOutput
        shopLocation2.innerText = germanyShopOutput;
        streetLocation2.innerText = germanystreetOutput;
        break;
      case "700007, Japan":
        shopLocation.innerText = japanShopOutput;
        streetLocation.innerText = japanstreetOutput
        shopLocation2.innerText = japanShopOutput;
        streetLocation2.innerText = japanstreetOutput;
        break;
      case "800008, Brazil":
        shopLocation.innerText = userLocation;
        streetLocation.innerText = 'NO STREET FOUND'
        shopLocation2.innerText = userLocation;
        streetLocation2.innerText ='NO STREET FOUND';
        break;
      case "900009, India":
        shopLocation.innerText = indianShopOutput;
        streetLocation.innerText = indianstreetOutput
        shopLocation2.innerText = indianShopOutput;
        streetLocation2.innerText = indianstreetOutput;
        break;
      case "100000, Mexico":
        shopLocation.innerText =  mexicoShopOutput;
        streetLocation.innerText =  mexicostreetOutput
        shopLocation2.innerText =  mexicoShopOutput;
        streetLocation2.innerText =  mexicostreetOutput;
        break;
      case "110000, Spain":
        shopLocation.innerText = spainShopOutput;
        streetLocation.innerText = spainstreetOutput
        shopLocation2.innerText = spainShopOutput;
        streetLocation2.innerText = spainstreetOutput;
        break;
      case "120000, Italy":
        shopLocation.innerText = italyShopOutput;
        streetLocation.innerText = italystreetOutput
        shopLocation2.innerText = italyShopOutput;
        streetLocation2.innerText = italystreetOutput;
        break;
      case "130000, China":
        shopLocation.innerText = chinaShopOutput;
        streetLocation.innerText = chinastreetOutput
        shopLocation2.innerText = chinaShopOutput;
        streetLocation2.innerText = chinastreetOutput;
        break;
      case "140000, South Africa":
        shopLocation.innerText = southAfricaShopOutput;
        streetLocation.innerText = southAfricastreetOutput
        shopLocation2.innerText = southAfricaShopOutput;
        streetLocation2.innerText = southAfricastreetOutput;
        break;
      case "150000, Russia":
        shopLocation.innerText = russiaShopOutput;
        streetLocation.innerText = russiaStreetOutput
        shopLocation2.innerText = russiaShopOutput;
        streetLocation2.innerText = russiaStreetOutput;
        break;
      case "160000, Argentina":
        shopLocation.innerText = argentinaShopOutput;
        streetLocation.innerText = argentinaStreetOutput
        shopLocation2.innerText = argentinaShopOutput;
        streetLocation2.innerText = argentinaStreetOutput;
        break;
      case "170000, New Zealand":
        shopLocation.innerText = NewZealand_shop;
        streetLocation.innerText = NewZealand_street;
        shopLocation2.innerText = '🤐';
        streetLocation2.innerText = '🤐';
        break;
      case "180000, Sweden":
        shopLocation.innerText = Sweden_shop;
        streetLocation.innerText = Sweden_street;
        shopLocation2.innerText = '🤐';
        streetLocation2.innerText = '😀';
        break;
      case "190000, Norway":
        shopLocation.innerText = Norway_shop;
        streetLocation.innerText = Norway_street;
        shopLocation2.innerText = '🤐';
        streetLocation2.innerText = '😀';
        break;
      case "200000, Denmark":
        shopLocation.innerText = denmarkShopOutput;
        streetLocation.innerText = denmarkStreetOutput
        shopLocation2.innerText = denmarkShopOutput;
        streetLocation2.innerText = denmarkStreetOutput;
        break;
      case "210001, Nigeria":
        shopLocation.innerText = nigeriaShopOutput;
        streetLocation.innerText = nigeriaStreetOutput;
        shopLocation2.innerText = nigeriaShopOutput;
        streetLocation2.innerText = nigeriaStreetOutput;
        break;
      case "220001, Ghana":
        shopLocation.innerText = Ghana_shop;
        streetLocation.innerText = Ghana_street;
        shopLocation2.innerText = '';
        streetLocation2.innerText = '';
        break;
      case "230001, Côte d'Ivoire":
        shopLocation.innerText = CôtedIvoire_shop;
        streetLocation.innerText =  CôtedIvoire_street;
        shopLocation2.innerText = '';
        streetLocation2.innerText = '';
        break;
      case "240001, Niger":
        shopLocation.innerText = Niger_shop;
        streetLocation.innerText =Niger_street
        shopLocation2.innerText = '';
        streetLocation2.innerText = '';
        break;
     
      default:
        shopLocation.innerText = 'Check back again in this location';
        streetLocation.innerText ='Error In The Location'
        shopLocation2.innerText = 'Error In The Location';
        streetLocation2.innerText = 'Error In The Location';
    }
  });

  refreshBtn.addEventListener('click', () => {
    refreshLocations();
  });
const storeData = [
      // Germany
    { shopName: "Central Supermarket", streetAddress: "Hauptstraße 10, 10178 Berlin" },
    { shopName: "Berlin Mart", streetAddress: "Kurfürstendamm 234, 10719 Berlin" },
    { shopName: "Munich Grocery", streetAddress: "Viktualienmarkt 3, 80331 Munich" },
    { shopName: "Hamburg Corner Store", streetAddress: "Neuer Wall 14, 20354 Hamburg" },
    // France
    { shopName: "Fresh & Green Grocers", streetAddress: "Rue de la République 5, 75001 Paris" },
    { shopName: "Paris Superette", streetAddress: "Champs-Élysées 27, 75008 Paris" },
    { shopName: "Marseille Market", streetAddress: "Vieux-Port 3, 13001 Marseille" },
    { shopName: "Lyon Grocers", streetAddress: "Place Bellecour 8, 69002 Lyon" },
     // Japan
    { shopName: "Tokyo Convenience Store", streetAddress: "Shibuya Crossing, 150-0041 Tokyo" },
    { shopName: "Kyoto Convenience", streetAddress: "Gion District 42, 605-0001 Kyoto" },
    { shopName: "Osaka Mart", streetAddress: "Dotonbori 20, 542-0071 Osaka" },
    { shopName: "Sapporo Shop", streetAddress: "Susukino 15, 064-0805 Sapporo" },
     // India
    { shopName: "Rio Market", streetAddress: "Copacabana Beach, 22070-011 Rio de Janeiro" },
    { shopName: "Mumbai Freshmart", streetAddress: "Colaba 30, 400005 Mumbai" },
    { shopName: "Bangalore Grocers", streetAddress: "MG Road 55, 560001 Bangalore" },
 // Mexico
    { shopName: "Delhi Freshmart", streetAddress: "Connaught Place, 110001 New Delhi" },
    { shopName: "Cancún Corner Mart", streetAddress: "Zona Hotelera 9, 77500 Cancún" },
    { shopName: "Guadalajara Market", streetAddress: "Mercado Libertad 23, 44100 Guadalajara" },
    { shopName: "Monterrey Grocery", streetAddress: "Fundidora Park 8, 64000 Monterrey" },
 // Spain
    { shopName: "Azteca Market", streetAddress: "Zocalo Square, 06000 Mexico City" },
    { shopName: "Barcelona Bazaar", streetAddress: "La Rambla 40, 08002 Barcelona" },
    { shopName: "Valencia Stores", streetAddress: "Plaza del Ayuntamiento 25, 46002 Valencia" },
 // Italy
    { shopName: "Madrid Grocers", streetAddress: "Gran Vía 12, 28013 Madrid" },
    { shopName: "Seville Supercenter", streetAddress: "Plaza de España 7, 41013 Seville" },
    { shopName: "Milan MegaMart", streetAddress: "Piazza del Duomo 14, 20121 Milan" },
//china
    { shopName: "Italian Food Emporium", streetAddress: "Via del Corso 8, 00186 Rome" },
    { shopName: "Shanghai Corner Store", streetAddress: "Nanjing Road 99, 200002 Shanghai" },
    { shopName: "Guangzhou Grocery", streetAddress: "Canton Tower 3, 510623 Guangzhou" },
    { shopName: "Xi'an Convenience Store", streetAddress: "Drum Tower 6, 710001 Xi'an" },
     // South Africa
     { shopName: "Johannesburg Market", streetAddress: "Soweto 15, 1868 Johannesburg" },
     { shopName: "Durban Grocers", streetAddress: "Golden Mile 22, 4001 Durban" },
     { shopName: "Cape Winelands Mart", streetAddress: "Franschhoek 18, 7690 Cape Winelands" },
     { shopName: "Beijing Supercenter", streetAddress: "Wangfujing Street, 100006 Beijing" },

    // Russia
    { shopName: "Cape Town Freshmart", streetAddress: "Long Street, 8001 Cape Town" },
    { shopName: "St. Petersburg Stores", streetAddress: "Nevsky Prospekt 27, 191186 St. Petersburg" },
    { shopName: "Yekaterinburg Superette", streetAddress: "Circus 14, 620990 Yekaterinburg" },
    { shopName: "Kazan Grocery", streetAddress: "Baumana Street 7, 420111 Kazan" },
 // Argentina
    { shopName: "Moscow MegaMart", streetAddress: "Red Square, 109012 Moscow" },
    { shopName: "Mendoza Bazaar", streetAddress: "Plaza Independencia 35, 5500 Mendoza" },
    { shopName: "Córdoba Grocers", streetAddress: "Güemes 12, 5000 Córdoba" },
    { shopName: "Rosario Mart", streetAddress: "Monumento a la Bandera 15, 2000 Rosario" },
//NewZealand
    { shopName: "Buenos Aires Bazaar", streetAddress: "Florida Street, C1005AAD Buenos Aires" },
    //sweden
    { shopName: "Wellington Wholesalers", streetAddress: "Lambton Quay, 6011 Wellington" },
    //norway
    { shopName: "Stockholm Stores", streetAddress: "Drottninggatan 25, 111 51 Stockholm" },
    //denmark
    { shopName: "Oslo Organic Shop", streetAddress: "Karl Johans gate 15, 0159 Oslo" },
    { shopName: "Copenhagen Corner Mart", streetAddress: "Strøget 33, 1160 Copenhagen" },
    //nigeria
    { shopName: "Lagos Supermarket", streetAddress: "Victoria Island, Lagos" },
    { shopName: "Naples Supermarket", streetAddress: "Spaccanapoli 10, 80138 Naples" },
    { shopName: "Venice Mart", streetAddress: "Piazza San Marco 15, 30124 Venice" },
    //ghana
    { shopName: "Accra Grocery Store", streetAddress: "Osu Avenue, Accra" },
    //coted'ivoire
    { shopName: "Abidjan Convenience Mart", streetAddress: "Plateau District, Abidjan" },
    //niger
    { shopName: "Niamey Freshmart", streetAddress: "Avenue du Général de Gaulle, Niamey" },

]; 
function refreshLocations() {
  const userLocation = document.querySelector('#location').value;
  userLocation.innerText = '';
  shopLocation.innerText = '';
  streetLocation.innerText = '';
  shopLocation2.innerText = '';
  streetLocation2.innerText = '';
}
//germany
const Germany_shop1 = storeData[0].shopName;
const Germany_street1 = storeData[0].streetAddress;
const Germany_shop2 = storeData[1].shopName;
const Germany_street2 = storeData[1].streetAddress;
const Germany_shop3 = storeData[2].shopName;
const Germany_street3 = storeData[2].streetAddress;
const Germany_shop4 = storeData[3].shopName;
const Germany_street4 = storeData[3].streetAddress;
//germany obj
const GERMANYSTORE = [
    { shop:Germany_shop1, street:Germany_street1 },
    { shop:Germany_shop2, street:Germany_street2 },
    { shop:Germany_shop3, street:Germany_street3 },
    { shop:Germany_shop4, street:Germany_street4 }
]
const germanyRandomStore = Math.floor(Math.random()*GERMANYSTORE.length);
const germanyShopOutput = GERMANYSTORE[germanyRandomStore].shop;
const germanystreetOutput = GERMANYSTORE[germanyRandomStore].street;

//FRANCE
const France_shop1 = storeData[4].shopName;
const France_street1 = storeData[4].streetAddress;
const France_shop2 = storeData[5].shopName;
const France_street2 = storeData[5].streetAddress;
const France_shop3 = storeData[6].shopName;
const France_street3 = storeData[6].streetAddress;
const France_shop4 = storeData[7].shopName;
const France_street4 = storeData[7].streetAddress;
//france obj
const FRANCESTORE = [
    { shop:France_shop1, street:France_street1 },
    { shop:France_shop2, street:France_street2 },
    { shop:France_shop3, street:France_street3 },
    { shop:France_shop4, street:France_street4 }
]
const franceRandomStore = Math.floor(Math.random()*FRANCESTORE.length);
const franceShopOutput = FRANCESTORE[franceRandomStore].shop;
const francestreetOutput = FRANCESTORE[franceRandomStore].street;

const Japan_shop1 = storeData[8].shopName;
const Japan_street1 = storeData[8].streetAddress;
const Japan_shop2 = storeData[9].shopName;
const Japan_street2 = storeData[9].streetAddress;
const Japan_shop3 = storeData[10].shopName;
const Japan_street3 = storeData[10].streetAddress;
const Japan_shop4 = storeData[11].shopName;
const Japan_street4 = storeData[11].streetAddress;
//japan obj
const JAPANSTORE = [
    { shop:Japan_shop1, street:Japan_street1 },
    { shop:Japan_shop2, street:Japan_street2 },
    { shop:Japan_shop3, street:Japan_street3 },
    { shop:Japan_shop4, street:Japan_street4 }
]
const japanRandomStore = Math.floor(Math.random()*JAPANSTORE.length);
const japanShopOutput = JAPANSTORE[japanRandomStore].shop;
const japanstreetOutput = JAPANSTORE[japanRandomStore].street;

const India_shop1 = storeData[12].shopName;
const India_street1 = storeData[12].streetAddress;
const India_shop2 = storeData[13].shopName;
const India_street2 = storeData[13].streetAddress;
const India_shop3 = storeData[14].shopName;
const India_street3 = storeData[14].streetAddress;

const INDIANSTORE = [
    { shop:India_shop1, street:India_street1 },
    { shop:India_shop2, street:India_street2 },
    { shop:India_shop3, street:India_street3 },
]
const indianRandomStore = Math.floor(Math.random()*INDIANSTORE.length);
const indianShopOutput = INDIANSTORE[indianRandomStore].shop;
const indianstreetOutput = INDIANSTORE[indianRandomStore].street;

const Mexico_shop1 = storeData[15].shopName;
const Mexico_street1 = storeData[15].streetAddress;
const Mexico_shop2 = storeData[16].shopName;
const Mexico_street2 = storeData[16].streetAddress;
const Mexico_shop3 = storeData[17].shopName;
const Mexico_street3 = storeData[17].streetAddress;
const Mexico_shop4 = storeData[18].shopName;
const Mexico_street4 = storeData[18].streetAddress;
const MEXICOSTORE = [
    { shop:Mexico_shop1, street:Mexico_street1 },
    { shop:Mexico_shop2, street:Mexico_street2 },
    { shop:Mexico_shop3, street:Mexico_street3 },
    { shop:Mexico_shop4, street:Mexico_street4 }
]
const mexicoRandomStore = Math.floor(Math.random()*MEXICOSTORE.length);
const mexicoShopOutput = MEXICOSTORE[mexicoRandomStore].shop;
const mexicostreetOutput = MEXICOSTORE[mexicoRandomStore].street;

const Spain_shop1 = storeData[19].shopName;
const Spain_street1 = storeData[19].streetAddress;
const Spain_shop2 = storeData[20].shopName;
const Spain_street2 = storeData[20].streetAddress;
const Spain_shop3 = storeData[21].shopName;
const Spain_street3 = storeData[21].streetAddress;
const SPAINSTORE = [
    { shop:Spain_shop1, street:Spain_street1 },
    { shop:Spain_shop2, street:Spain_street2 },
    { shop:Spain_shop3, street:Spain_street3 }
]
const spainRandomStore = Math.floor(Math.random()*SPAINSTORE.length);
const spainShopOutput = SPAINSTORE[spainRandomStore].shop;
const spainstreetOutput = SPAINSTORE[spainRandomStore].street;

const Italy_shop1 = storeData[22].shopName;
const Italy_street1 = storeData[22].streetAddress;
const Italy_shop2 = storeData[23].shopName;
const Italy_street2 = storeData[23].streetAddress;
const Italy_shop3 = storeData[24].shopName;
const Italy_street3 = storeData[24].streetAddress;
const ITALIANSTORE = [
    { shop:Italy_shop1, street:Italy_street1 },
    { shop:Italy_shop2, street:Italy_street2 },
    { shop:Italy_shop3, street:Italy_street3 }
]
const italyRandomStore = Math.floor(Math.random()*ITALIANSTORE.length);
const italyShopOutput = ITALIANSTORE[italyRandomStore].shop;
const italystreetOutput = ITALIANSTORE[italyRandomStore].street;

const China_shop1 = storeData[25].shopName;
const China_street1 = storeData[25].streetAddress;
const China_shop2 = storeData[26].shopName;
const China_street2 = storeData[26].streetAddress;
const China_shop3 = storeData[27].shopName;
const China_street3 = storeData[27].streetAddress;
const China_shop4 = storeData[28].shopName;
const China_street4 = storeData[28].streetAddress;
const CHINASTORE = [
    { shop:China_shop1, street:China_street1 },
    { shop:China_shop2, street:China_street2 },
    { shop:China_shop3, street:China_street3 },
    { shop:China_shop4, street:China_street4 }
]
const chinaRandomStore = Math.floor(Math.random()*CHINASTORE.length);
const chinaShopOutput = CHINASTORE[chinaRandomStore].shop;
const chinastreetOutput = CHINASTORE[chinaRandomStore].street;

const SouthAfrica_shop1 = storeData[29].shopName;
const SouthAfrica_street1 = storeData[29].streetAddress;
const SouthAfrica_shop2 = storeData[30].shopName;
const SouthAfrica_street2 = storeData[30].streetAddress;
const SouthAfrica_shop3 = storeData[31].shopName;
const SouthAfrica_street3 = storeData[31].streetAddress;
const SouthAfrica_shop4 = storeData[32].shopName;
const SouthAfrica_street4 = storeData[32].streetAddress;
const SOUTHAFRICANSTORE = [
    { shop:SouthAfrica_shop1, street:SouthAfrica_street1 },
    { shop:SouthAfrica_shop2, street:SouthAfrica_street2 },
    { shop:SouthAfrica_shop3, street:SouthAfrica_street3 },
    { shop:SouthAfrica_shop4, street:SouthAfrica_street4 }
]
const southAfricaRandomStore = Math.floor(Math.random()*SOUTHAFRICANSTORE.length);
const southAfricaShopOutput = SOUTHAFRICANSTORE[southAfricaRandomStore].shop;
const southAfricastreetOutput = SOUTHAFRICANSTORE[southAfricaRandomStore].street;

const Russia_shop1 = storeData[33].shopName;
const Russia_street1 = storeData[33].streetAddress;
const Russia_shop2 = storeData[34].shopName;
const Russia_street2 = storeData[34].streetAddress;
const Russia_shop3 = storeData[35].shopName;
const Russia_street3 = storeData[35].streetAddress;
const Russia_shop4 = storeData[36].shopName;
const Russia_street4 = storeData[36].streetAddress;
const RUSSIASTORE = [
    { shop:Russia_shop1, street:Russia_street1 },
    { shop:Russia_shop2, street:Russia_street2 },
    { shop:Russia_shop3, street:Russia_street3 },
    { shop:Russia_shop4, street:Russia_street4 }
]

const russiaRandomStore = Math.floor(Math.random()*RUSSIASTORE.length);
const russiaShopOutput = RUSSIASTORE[russiaRandomStore].shop;
const russiaStreetOutput = RUSSIASTORE[russiaRandomStore].street;

const Argentina_shop1 = storeData[37].shopName;
const Argentina_street1 = storeData[37].streetAddress;
const Argentina_shop2 = storeData[38].shopName;
const Argentina_street2 = storeData[38].streetAddress;
const Argentina_shop3 = storeData[39].shopName;
const Argentina_street3 = storeData[39].streetAddress;
const Argentina_shop4 = storeData[40].shopName;
const Argentina_street4 = storeData[40].streetAddress;
const ARGENTINASTORE = [
    { shop:Argentina_shop1, street:Argentina_street1 },
    { shop:Argentina_shop2, street:Argentina_street2 },
    { shop:Argentina_shop3, street:Argentina_street3 },
    { shop:Argentina_shop4, street:Argentina_street4 }
]

const argentinaRandomStore = Math.floor(Math.random()*ARGENTINASTORE.length);
const argentinaShopOutput = ARGENTINASTORE[argentinaRandomStore].shop;
const argentinaStreetOutput = ARGENTINASTORE[argentinaRandomStore].street;

const NewZealand_shop = storeData[41].shopName;
const NewZealand_street = storeData[41].streetAddress;

const Sweden_shop = storeData[42].shopName;
const Sweden_street = storeData[42].streetAddress;

const Norway_shop = storeData[43].shopName;
const Norway_street = storeData[43].streetAddress;

const Denmark_shop1 = storeData[44].shopName;
const Denmark_street1 = storeData[44].streetAddress;
const Denmark_shop2 = storeData[45].shopName;
const Denmark_street2 = storeData[45].streetAddress;
const DENMARKSTORE = [
    { shop:Denmark_shop1, street:Denmark_street1 },
    { shop:Denmark_shop2, street:Denmark_street2 },
]

const denmarkRandomStore = Math.floor(Math.random()*DENMARKSTORE.length);
const denmarkShopOutput = DENMARKSTORE[denmarkRandomStore].shop;
const denmarkStreetOutput = DENMARKSTORE[denmarkRandomStore].street;

const Nigeria_shop1 = storeData[46].shopName;
const Nigeria_street1 = storeData[46].streetAddress;
const Nigeria_shop2 = storeData[47].shopName;
const Nigeria_street2 = storeData[47].streetAddress;
const Nigeria_shop3 = storeData[48].shopName;
const Nigeria_street3 = storeData[48].streetAddress;
const Nigeria_shop4 = storeData[49].shopName;
const Nigeria_street4 = storeData[49].streetAddress;
const NIGERIANSTORE = [
    { shop:Nigeria_shop1, street:Nigeria_street1 },
    { shop:Nigeria_shop2, street:Nigeria_street2 },
    { shop:Nigeria_shop3, street:Nigeria_street3 },
    { shop:Nigeria_shop4, street:Nigeria_street4 }
]

const nigeriaRandomStore = Math.floor(Math.random()*NIGERIANSTORE.length);
const nigeriaShopOutput = NIGERIANSTORE[nigeriaRandomStore].shop;
const nigeriaStreetOutput = NIGERIANSTORE[nigeriaRandomStore].street;

const Ghana_shop = storeData[50].shopName;
const Ghana_street = storeData[50].streetAddress;

const CôtedIvoire_shop = storeData[51].shopName;
const CôtedIvoire_street = storeData[51].streetAddress;

const Niger_shop = storeData[52].shopName;
const Niger_street = storeData[52].streetAddress;
