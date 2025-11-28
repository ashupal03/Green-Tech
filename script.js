// Define translations for different languages.
const translations = {
    en: {
        navHome: "Home",
        navWhy: "Why It Matters",
        navBlog: "Blog",
        navSDG: "Sustainability Goals", // NEW
        heroHeading: "Empowering a Sustainable Future",
        heroSubheading: "Discover the power of green technology and learn how we can all contribute to a healthier planet.",
        heroCta: "Explore Solutions",
        aboutHeading: "What is Green Technology?",
        aboutP1: 'Green technology, or "clean tech," is an umbrella term for technologies that are environmentally friendly and are created to combat the negative impacts of human activity on the planet. This can include renewable energy sources like solar and wind power, sustainable transportation methods, and innovative waste management systems.',
        aboutP2: "The goal of green technology is to reduce our carbon footprint, conserve natural resources, and create a more sustainable way of life for generations to come. By adopting and promoting these technologies, we can build a future that is both prosperous and in harmony with our environment.",
        mapHeading: "Map of Green Initiatives",
        mapSubheading: "Explore major green projects, or search for a city to find local sustainable spots.",
        catFarmersMarket: "Farmer's Markets",
        catSolarFarm: "Solar Farms",
        catWindFarm: "Wind Farms",
        catChargingStation: "EV Charging Stations",
        solutionsHeading: "Practical Solutions for a Greener Life",
        solution1Title: "Renewable Energy",
        solution1Text: "Harness the power of solar, wind, and geothermal energy to reduce reliance on fossil fuels.",
        solution2Title: "Sustainable Practices",
        solution2Text: "Adopt eco-friendly habits in your daily life, from recycling to reducing water consumption.",
        solution3Title: "Smart Transportation",
        solution3Text: "Explore electric vehicles, cycling, and public transport to lower your transportation emissions.",
        solution4Title: "Waste Reduction",
        solution4Text: "Learn about the 'Zero Waste' movement, composting, and how to properly recycle materials.",
        solution5Title: "Water Conservation",
        solution5Text: "Discover simple ways to save water at home, from fixing leaks to installing efficient appliances.",
        solution6Title: "Green Building",
        solution6Text: "Explore how sustainable architecture uses green roofs, solar panels, and smart design.",
        calculatorHeading: "Carbon Footprint Calculator",
        transportLabel: "How many kilometers do you drive per week?",
        energyLabel: "How much electricity do you use per month (in kWh)?",
        dietLabel: "What is your primary diet?",
        dietVegan: "Vegan",
        dietVegetarian: "Vegetarian",
        dietOmnivore: "Omnivore",
        calculateBtn: "Calculate My Footprint",
        resultPrefix: "Your estimated annual footprint is:",
        resultSuffix: "tonnes CO2e",
        resultNote: "This is a simplified estimate based on averages for India.",
        whyHeading: "The Challenge We Face",
        whySubheading: "Understanding the problem is the first step to being part of the solution. Here are some of the key environmental challenges in India.",
        whyAirTitle: "Air Quality",
        whyAirText: "India is home to many of the world's most polluted cities. This air quality crisis, largely from vehicle emissions, industrial output, and crop burning, poses a severe risk to public health.",
        whyWaterTitle: "Water Scarcity",
        whyWaterText: "Millions of people in India face high to extreme water stress. Over-extraction of groundwater for agriculture, combined with failing monsoons, threatens both food security and daily life.",
        whyClimateTitle: "Climate Impact",
        whyClimateText: "With a vast coastline, India is highly vulnerable to rising sea levels. Furthermore, extreme weather events like heatwaves, floods, and droughts are becoming more frequent and intense.",
        blogHeading: "Local Stories & Green Guides",
        blog1Title: "Local Hero: A Nagpur Community Compost",
        blog1Text: "Meet Priya Sharma from Sitabuldi, Nagpur. Two years ago, she was tired of seeing her building's food waste go to the landfill. Today, her community composting initiative turns over 50kg of waste per week into rich 'black gold' for local gardens.",
        blog2Title: "A Beginner's Guide to Rooftop Solar",
        blog2Text: "Is rooftop solar worth it in India? We break down the math. Learn about the 'SURYA - Ghar Muft Bijli Yojana' scheme, how 'net metering' can reduce your electricity bill to zero, and see a real cost-benefit analysis for a typical 3kW home system.",
        blog3Title: "5 Simple Swaps for a Low-Waste Lifestyle",
        blog3Text: "Going 'zero-waste' sounds impossible. So, don't. Instead, try 'less-waste.' We explore 5 simple, high-impact swaps you can make today that go beyond just a cloth bag—from steel tiffins for takeaway to switching to a local kirana store.",
        blogReadMore: "Read More →",
        contactHeading: "Join the Movement",
        contactSubheading: "Ready to make a difference? Get regular updates and tips on sustainability and green technology.",
        subscribeBtn: "Subscribe Now",
        involvedHeading: "More Ways to Get Involved",
        involvedNGOsTitle: "Support Organizations",
        involvedNGOsText: "Donate or volunteer with organizations making a real impact in India.",
        involvedGovTitle: "Government Resources",
        involvedGovText: "Learn about national initiatives, policies, and subsidies for green energy.",
        involvedActionTitle: "Take Local Action",
        involvedActionText: "Small changes in your community can make a big difference.",
        involvedAction1: "Start a community compost bin.",
        involvedAction2: "Organize a local clean-up or tree-planting drive.",
        involvedAction3: "Advocate for better public transport.",
        footerText: "© 2023 Green Tech. All rights reserved.",
        // NEW SDG TRANSLATIONS
        sdgHeading: "The 17 Sustainable Development Goals",
        sdgReadMore: "Read More →",
        sdg1Title: "Goal 1: No Poverty",
        sdg2Title: "Goal 2: Zero Hunger",
        sdg3Title: "Goal 3: Good Health & Well-being",
        sdg4Title: "Goal 4: Quality Education",
        sdg5Title: "Goal 5: Gender Equality",
        sdg6Title: "Goal 6: Clean Water & Sanitation",
        sdg7Title: "Goal 7: Affordable & Clean Energy",
        sdg8Title: "Goal 8: Decent Work & Economic Growth",
        sdg9Title: "Goal 9: Industry, Innovation & Infrastructure",
        sdg10Title: "Goal 10: Reduced Inequalities",
        sdg11Title: "Goal 11: Sustainable Cities & Communities",
        sdg12Title: "Goal 12: Responsible Consumption & Production",
        sdg13Title: "Goal 13: Climate Action",
        sdg14Title: "Goal 14: Life Below Water",
        sdg15Title: "Goal 15: Life on Land",
        sdg16Title: "Goal 16: Peace, Justice & Strong Institutions",
        sdg17Title: "Goal 17: Partnerships for the Goals"
    },
    hi: {
        navHome: "होम",
        navWhy: "क्यों यह जरूरी है",
        navBlog: "ब्लॉग",
        navSDG: "सतत विकास लक्ष्य", // NEW
        heroHeading: "एक स्थायी भविष्य को सशक्त बनाना",
        heroSubheading: "हरित प्रौद्योगिकी की शक्ति का पता लगाएं और जानें कि हम सभी एक स्वस्थ ग्रह के लिए कैसे योगदान दे सकते हैं।",
        heroCta: "समाधान खोजें",
        aboutHeading: "ग्रीन टेक्नोलॉजी क्या है?",
        aboutP1: 'ग्रीन टेक्नोलॉजी, या "क्लीन टेक", उन तकनीकों के लिए एक व्यापक शब्द है जो पर्यावरण के अनुकूल हैं और ग्रह पर मानव गतिविधि के नकारात्मक प्रभावों का मुकाबला करने के लिए बनाई गई हैं। इसमें सौर और पवन ऊर्जा जैसे नवीकरणीय ऊर्जा स्रोत, टिकाऊ परिवहन के तरीके और अभिनव अपशिष्ट प्रबंधन प्रणाली शामिल हो सकते हैं।',
        aboutP2: "हरित प्रौद्योगिकी का लक्ष्य हमारे कार्बन फुटप्रिंट को कम करना, प्राकृतिक संसाधनों का संरक्षण करना और आने वाली पीढ़ियों के लिए एक अधिक टिकाऊ जीवन शैली बनाना है। इन तकनीकों को अपनाकर और बढ़ावा देकर, हम एक ऐसा भविष्य बना सकते हैं जो समृद्ध और हमारे पर्यावरण के साथ सामंजस्य में हो।",
        mapHeading: "हरित पहलों का नक्शा",
        mapSubheading: "प्रमुख हरित परियोजनाओं का अन्वेषण करें, या स्थानीय स्थायी स्थानों को खोजने के लिए किसी शहर की खोज करें।",
        catFarmersMarket: "किसान बाजार",
        catSolarFarm: "सौर फार्म",
        catWindFarm: "पवन फार्म",
        catChargingStation: "ईवी चार्जिंग स्टेशन",
        solutionsHeading: "एक हरियाली भरे जीवन के लिए व्यावहारिक समाधान",
        solution1Title: "नवीकरणीय ऊर्जा",
        solution1Text: "जीवाश्म ईंधन पर निर्भरता कम करने के लिए सौर, पवन और भू-तापीय ऊर्जा की शक्ति का उपयोग करें।",
        solution2Title: "टिकाऊ अभ्यास",
        solution2Text: "अपने दैनिक जीवन में पर्यावरण के अनुकूल आदतों को अपनाएं, रीसाइक्लिंग से लेकर पानी की खपत को कम करने तक।",
        solution3Title: "स्मार्ट परिवहन",
        solution3Text: "अपने परिवहन उत्सर्जन को कम करने के लिए इलेक्ट्रिक वाहनों, साइकिलिंग और सार्वजनिक परिवहन का अन्वेषण करें।",
        solution4Title: "अपशिष्ट में कमी",
        solution4Text: "'शून्य अपशिष्ट' आंदोलन, खाद बनाने और सामग्रियों को ठीक से रीसायकल करने के तरीके के बारे में जानें।",
        solution5Title: "जल संरक्षण",
        solution5Text: "घर पर पानी बचाने के सरल तरीके खोजें, लीक को ठीक करने से लेकर कुशल उपकरणों को स्थापित करने तक।",
        solution6Title: "ग्रीन बिल्डिंग",
        solution6Text: "अन्वेषण करें कि कैसे टिकाऊ वास्तुकला हरी छतों, सौर पैनलों और स्मार्ट डिजाइन का उपयोग करती है।",
        calculatorHeading: "कार्बन फुटप्रिंट कैलक्यूलेटर",
        transportLabel: "आप प्रति सप्ताह कितने किलोमीटर गाड़ी चलाते हैं?",
        energyLabel: "आप प्रति माह कितनी बिजली (kWh में) का उपयोग करते हैं?",
        dietLabel: "आपका प्राथमिक आहार क्या है?",
        dietVegan: "शाकाहारी (वीगन)",
        dietVegetarian: "शाकाहारी (वेजिटेरियन)",
        dietOmnivore: "सर्वाहारी",
        calculateBtn: "मेरे फुटप्रिंट की गणना करें",
        resultPrefix: "आपका अनुमानित वार्षिक फुटप्रिंट है:",
        resultSuffix: "टन CO2e",
        resultNote: "यह भारत के औसत पर आधारित एक सरलीकृत अनुमान है।",
        whyHeading: "हम जिस चुनौती का सामना कर रहे हैं",
        whySubheading: "समस्या को समझना समाधान का हिस्सा बनने का पहला कदम है। यहाँ भारत में कुछ प्रमुख पर्यावरणीय चुनौतियाँ दी गई हैं।",
        whyAirTitle: "वायु गुणवत्ता",
        whyAirText: "भारत दुनिया के कई सबसे प्रदूषित शहरों का घर है। यह वायु गुणवत्ता संकट, जो बड़े पैमाने पर वाहन उत्सर्जन, औद्योगिक उत्पादन और फसल जलाने से होता है, सार्वजनिक स्वास्थ्य के लिए एक गंभीर खतरा है।",
        whyWaterTitle: "पानी की कमी",
        whyWaterText: "भारत में लाखों लोग उच्च से अत्यधिक पानी के तनाव का सामना करते हैं। कृषि के लिए भूजल का अत्यधिक दोहन, विफल मानसून के साथ मिलकर, खाद्य सुरक्षा और दैनिक जीवन दोनों के लिए खतरा है।",
        whyClimateTitle: "जलवायु प्रभाव",
        whyClimateText: "एक विशाल तटरेखा के साथ, भारत समुद्र के बढ़ते स्तर के प्रति अत्यधिक संवेदनशील है। इसके अलावा, हीटवेव, बाढ़ और सूखे जैसी चरम मौसम की घटनाएं अधिकบ่อย और तीव्र होती जा रही हैं।",
        blogHeading: "स्थानीय कहानियाँ और ग्रीन गाइड",
        blog1Title: "स्थानीय हीरो: एक नागपुर सामुदायिक खाद",
        blog1Text: "मिलिए नागपुर के सीताबर्डी की प्रिया शर्मा से। दो साल पहले, वह अपनी इमारत के खाद्य कचरे को लैंडफिल में जाते देख थक गई थीं। आज, उनकी सामुदायिक खाद पहल प्रति सप्ताह 50 किलो से अधिक कचरे को स्थानीय बगीचों के लिए समृद्ध 'काले सोने' में बदल देती है।",
        blog2Title: "रूफटॉप सोलर के लिए एक शुरुआती गाइड",
        blog2Text: "क्या भारत में रूफटॉप सोलर लगाना उचित है? हम गणित का विश्लेषण करते हैं। 'सूर्य - घर मुफ्त बिजली योजना' योजना के बारे में जानें, कैसे 'नेट मीटरिंग' आपके बिजली के बिल को शून्य कर सकती है, और एक सामान्य 3kW घरेलू प्रणाली के लिए वास्तविक लागत-लाभ विश्लेषण देखें।",
        blog3Title: "कम-अपशिष्ट जीवन शैली के लिए 5 सरल बदलाव",
        blog3Text: "'शून्य-अपशिष्ट' बनना असंभव लगता है। इसलिए, ऐसा न करें। इसके बजाय, 'कम-अपशिष्ट' का प्रयास करें। हम आज 5 सरल, उच्च-प्रभाव वाले बदलावों का पता लगाते हैं जो केवल कपड़े के थैले से परे हैं—टेकअवे के लिए स्टील टिफिन से लेकर स्थानीय किराना स्टोर पर स्विच करने तक।",
        blogReadMore: "और पढ़ें →",
        contactHeading: "आंदोलन में शामिल हों",
        contactSubheading: "क्या आप बदलाव लाने के लिए तैयार हैं? स्थिरता और हरित प्रौद्योगिकी पर नियमित अपडेट और सुझाव प्राप्त करें।",
        subscribeBtn: "अभी सदस्यता लें",
        involvedHeading: "शामिल होने के और तरीके",
        involvedNGOsTitle: "संगठनों का समर्थन करें",
        involvedNGOsText: "भारत में वास्तविक प्रभाव डालने वाले संगठनों को दान दें या उनके साथ स्वयंसेवा करें।",
        involvedGovTitle: "सरकारी संसाधन",
        involvedGovText: "हरित ऊर्जा के लिए राष्ट्रीय पहलों, नीतियों और सब्सिडी के बारे में जानें।",
        involvedActionTitle: "स्थानीय कार्रवाई करें",
        involvedActionText: "आपके समुदाय में छोटे बदलाव एक बड़ा अंतर ला सकते हैं।",
        involvedAction1: "एक सामुदायिक खाद बिन शुरू करें।",
        involvedAction2: "एक स्थानीय सफाई या वृक्षारोपण अभियान आयोजित करें।",
        involvedAction3: "बेहतर सार्वजनिक परिवहन की वकालत करें।",
        footerText: "© 2023 ग्रीन टेक। सर्वाधिकार सुरक्षित।",
        // NEW SDG TRANSLATIONS
        sdgHeading: "17 सतत विकास लक्ष्य",
        sdgReadMore: "और पढ़ें →",
        sdg1Title: "लक्ष्य 1: कोई गरीबी नहीं",
        sdg2Title: "लक्ष्य 2: शून्य भूख",
        sdg3Title: "लक्ष्य 3: अच्छा स्वास्थ्य और कल्याण",
        sdg4Title: "लक्ष्य 4: गुणवत्तापूर्ण शिक्षा",
        sdg5Title: "लक्ष्य 5: लैंगिक समानता",
        sdg6Title: "लक्ष्य 6: स्वच्छ जल और स्वच्छता",
        sdg7Title: "लक्ष्य 7: सस्ती और स्वच्छ ऊर्जा",
        sdg8Title: "लक्ष्य 8: सभ्य कार्य और आर्थिक विकास",
        sdg9Title: "लक्ष्य 9: उद्योग, नवाचार और बुनियादी ढांचा",
        sdg10Title: "लक्ष्य 10: कम असमानताएं",
        sdg11Title: "लक्ष्य 11: सतत शहर और समुदाय",
        sdg12Title: "लक्ष्य 12: जिम्मेदार खपत और उत्पादन",
        sdg13Title: "लक्ष्य 13: जलवायु कार्रवाई",
        sdg14Title: "लक्ष्य 14: जल के नीचे जीवन",
        sdg15Title: "लक्ष्य 15: भूमि पर जीवन",
        sdg16Title: "लक्ष्य 16: शांति, न्याय और मजबूत संस्थाएं",
        sdg17Title: "लक्ष्य 17: लक्ष्यों के लिए भागीदारी"
    },
    mr: {
        navHome: "मुख्यपृष्ठ",
        navWhy: "हे का महत्त्वाचे आहे",
        navBlog: "ब्लॉग",
        navSDG: "शाश्वत विकास उद्दिष्ट्ये", // NEW
        heroHeading: "शाश्वत भविष्यासाठी सक्षमीकरण",
        heroSubheading: "हरित तंत्रज्ञानाची शक्ती शोधा आणि आपण सर्व एका निरोगी ग्रहासाठी कसे योगदान देऊ शकतो हे जाणून घ्या.",
        heroCta: "उपाय शोधा",
        aboutHeading: "हरित तंत्रज्ञान म्हणजे काय?",
        aboutP1: "हरित तंत्रज्ञान, किंवा 'स्वच्छ तंत्रज्ञान', ही अशा तंत्रज्ञानासाठी एक छत्री संज्ञा आहे जी पर्यावरणास अनुकूल आहेत आणि ग्रहावर मानवी क्रियांच्या नकारात्मक प्रभावांचा सामना करण्यासाठी तयार केली गेली आहेत. यामध्ये सौर आणि पवन ऊर्जेसारखे नवीकरणीय ऊर्जा स्रोत, शाश्वत वाहतूक पद्धती आणि नाविन्यपूर्ण कचरा व्यवस्थापन प्रणालींचा समावेश असू शकतो.",
        aboutP2: "हरित तंत्रज्ञानाचे उद्दिष्ट आपले कार्बन फूटप्रिंट कमी करणे, नैसर्गिक संसाधनांचे संरक्षण करणे आणि येणाऱ्या पिढ्यांसाठी अधिक शाश्वत जीवनशैली तयार करणे आहे. या तंत्रज्ञानाचा अवलंब करून आणि त्यांना प्रोत्साहन देऊन, आपण एक असे भविष्य घडवू शकतो जे समृद्ध आणि आपल्या पर्यावरणाशी सुसंगत असेल.",
        mapHeading: "हरित उपक्रमांचा नकाशा",
        mapSubheading: "प्रमुख हरित प्रकल्प एक्सप्लोर करा, किंवा स्थानिक शाश्वत स्थळे शोधण्यासाठी शहर शोधा.",
        catFarmersMarket: "शेतकरी बाजार",
        catSolarFarm: "सौर फार्म",
        catWindFarm: "पवन फार्म",
        catChargingStation: "ईव्ही चार्जिंग स्टेशन",
        solutionsHeading: "हरित जीवनासाठी व्यावहारिक उपाय",
        solution1Title: "नवीकरणीय ऊर्जा",
        solution1Text: "जीवाश्म इंधनावरील अवलंबित्व कमी करण्यासाठी सौर, पवन आणि भू-औष्णिक ऊर्जेचा वापर करा.",
        solution2Title: "शाश्वत पद्धती",
        solution2Text: "आपल्या दैनंदिन जीवनात पुनर्वापरापासून ते पाण्याचा वापर कमी करण्यापर्यंत पर्यावरणपूरक सवयी लावा.",
        solution3Title: "स्मार्ट वाहतूक",
        solution3Text: "तुमचे वाहतूक उत्सर्जन कमी करण्यासाठी इलेक्ट्रिक वाहने, सायकलिंग आणि सार्वजनिक वाहतूक एक्सप्लोर करा.",
        solution4Title: "कचरा कमी करणे",
        solution4Text: "'शून्य कचरा' चळवळ, कंपोस्टिंग आणि सामग्रीचा योग्य प्रकारे पुनर्वापर कसा करावा याबद्दल जाणून घ्या.",
        solution5Title: "जलसंधारण",
        solution5Text: "गळती दुरुस्त करण्यापासून ते कार्यक्षम उपकरणे बसवण्यापर्यंत, घरात पाणी वाचवण्याचे सोपे मार्ग शोधा.",
        solution6Title: "ग्रीन बिल्डिंग",
        solution6Text: "शाश्वत वास्तुकला ग्रीन रूफ, सोलर पॅनेल आणि स्मार्ट डिझाइनचा कसा वापर करते ते एक्सप्लोर करा.",
        calculatorHeading: "कार्बन फूटप्रिंट कॅल्क्युलेटर",
        transportLabel: "तुम्ही आठवड्याला किती किलोमीटर गाडी चालवता?",
        energyLabel: "तुम्ही दरमहा किती वीज (kWh मध्ये) वापरता?",
        dietLabel: " तुमचा प्राथमिक आहार कोणता आहे?",
        dietVegan: "शाकाहारी (Vegan)",
        dietVegetarian: "शाकाहारी (Vegetarian)",
        dietOmnivore: "मांसाहारी/मिश्राहारी",
        calculateBtn: "माझे फूटप्रिंट मोजा",
        resultPrefix: "तुमचा अंदाजित वार्षिक फूटप्रिंट आहे:",
        resultSuffix: "टन CO2e",
        resultNote: "हा भारताच्या सरासरीवर आधारित एक सोपा अंदाज आहे.",
        whyHeading: "आपल्यासमोरील आव्हान",
        whySubheading: "समस्या समजून घेणे ही समाधानाचा भाग बनण्याची पहिली पायरी आहे. भारतातील काही प्रमुख पर्यावरणीय आव्हाने येथे आहेत.",
        whyAirTitle: "हवेची गुणवत्ता",
        whyAirText: "भारत हा जगातील अनेक सर्वाधिक प्रदूषित शहरांचे घर आहे. वाहनांचे उत्सर्जन, औद्योगिक उत्पादन आणि पीक जाळण्यामुळे होणारे हे वायू गुणवत्ता संकट सार्वजनिक आरोग्यासाठी गंभीर धोका निर्माण करते.",
        whyWaterTitle: "पाण्याची टंचाई",
        whyWaterText: "भारतातील लाखो लोक उच्च ते अत्यंत पाण्याच्या ताणाचा सामना करतात. शेतीसाठी भूजलाचा अतिवापर, अयशस्वी मान्सूनसह, अन्न सुरक्षा आणि दैनंदिन जीव धोक्यात आणतो.",
        whyClimateTitle: "हवामान प्रभाव",
        whyClimateText: "विस्तीर्ण किनारपट्टीमुळे, भारत वाढत्या समुद्रपातळीसाठी अत्यंत संवेदनशील आहे. शिवाय, उष्णतेच्या लाटा, पूर आणि दुष्काळ यांसारख्या तीव्र हवामानाच्या घटना अधिक वारंवार आणि तीव्र होत आहेत.",
        blogHeading: "स्थानिक कथा आणि ग्रीन मार्गदर्शक",
        blog1Title: "स्थानिक नायक: एक नागपूर समुदाय कंपोस्ट",
        blog1Text: "भेटा नागपूरच्या सीताबर्डी येथील प्रिया शर्मा यांना. दोन वर्षांपूर्वी, त्या त्यांच्या इमारतीतील अन्नाचा कचरा लँडफिलमध्ये जाताना पाहून कंटाळल्या होत्या. आज, त्यांचा सामुदायिक कंपोस्टिंग उपक्रम आठवड्याला 50 किलोपेक्षा जास्त कचऱ्याचे स्थानिक बागांसाठी समृद्ध 'काळ्या सोन्या'मध्ये रूपांतर करतो.",
        blog2Title: "रूफटॉप सोलरसाठी एक नवशिक्या मार्गदर्शक",
        blog2Text: "भारतात रूफटॉप सोलर लावणे योग्य आहे का? आम्ही गणिताचा उलगडा करतो. 'सूर्य - घर मोफत वीज योजना' योजनेबद्दल जाणून घ्या, 'नेट मीटरिंग' कसे तुमचे वीज बिल शून्यावर आणू शकते, आणि एका सामान्य 3kW घरगुती प्रणालीसाठी वास्तविक खर्च-लाभ विश्लेषण पहा.",
        blog3Title: "कमी-कचरा जीवनशैलीसाठी 5 सोप्या बदला",
        blog3Text: "'शून्य-कचरा' होणे अशक्य वाटते. म्हणून, तसे करू नका. त्याऐवजी, 'कमी-कचरा' वापरून पहा. आम्ही आज 5 सोप्या, उच्च-प्रभाव बदलांचा शोध घेतो जे फक्त कापडी पिशवीच्या पलीकडे जातात—टेकअवेसाठी स्टीलच्या टिफिनपासून ते स्थानिक किराणा दुकानात स्विच करण्यापर्यंत.",
        blogReadMore: "पुढे वाचा →",
        contactHeading: "चळवळीत सामील व्हा",
        contactSubheading: "बदल घडवण्यासाठी तयार आहात का? शाश्वतता आणि हरित तंत्रज्ञानावर नियमित अद्यतne आणि टिपा मिळवा.",
        subscribeBtn: "आता सदस्यता घ्या",
        involvedHeading: "सहभागी होण्याचे अधिक मार्ग",
        involvedNGOsTitle: "संस्थांना समर्थन द्या",
        involvedNGOsText: "भारतात खरा प्रभाव पाडणाऱ्या संस्थांना देणगी द्या किंवा त्यांच्यासोबत स्वयंसेवा करा.",
        involvedGovTitle: "सरकारी संसाधने",
        involvedGovText: "हरित ऊर्जेसाठी राष्ट्रीय उपक्रम, धोरणे आणि अनुदानांबद्दल जाणून घ्या.",
        involvedActionTitle: "स्थानिक कृती करा",
        involvedActionText: "तुमच्या समुदायातील छोटे बदल मोठा फरक घडवू शकतात.",
        involvedAction1: "एक समुदाय कंपोस्ट बिन सुरू करा.",
        involvedAction2: "स्थानिक स्वच्छता किंवा वृक्षारोपण मोहीम आयोजित करा.",
        involvedAction3: "चांगल्या सार्वजनिक वाहतुकीचा पुरस्कार करा.",
        footerText: "© 2023 ग्रीन टेक. सर्व हक्क राखीव.",
        // NEW SDG TRANSLATIONS
        sdgHeading: "१७ शाश्वत विकास उद्दिष्ट्ये",
        sdgReadMore: "पुढे वाचा →",
        sdg1Title: "उद्दिष्ट १: गरीबी नाही",
        sdg2Title: "उद्दिष्ट २: शून्य भूक",
        sdg3Title: "उद्दिष्ट ३: चांगले आरोग्य आणि कल्याण",
        sdg4Title: "उद्दिष्ट ४: दर्जेदार शिक्षण",
        sdg5Title: "उद्दिष्ट ५: लैंगिक समानता",
        sdg6Title: "उद्दिष्ट ६: स्वच्छ पाणी आणि स्वच्छता",
        sdg7Title: "उद्दिष्ट ७: परवडणारी आणि स्वच्छ ऊर्जा",
        sdg8Title: "उद्दिष्ट ८: सभ्य कार्य आणि आर्थिक वाढ",
        sdg9Title: "उद्दिष्ट ९: उद्योग, नावीन्य आणि पायाभूत सुविधा",
        sdg10Title: "उद्दिष्ट १०: कमी असमानता",
        sdg11Title: "उद्दिष्ट ११: शाश्वत शहरे आणि समुदाय",
        sdg12Title: "उद्दिष्ट १२: जबाबदार उपभोग आणि उत्पादन",
        sdg13Title: "उद्दिष्ट १३: हवामान कृती",
        sdg14Title: "उद्दिष्ट १४: पाण्याखालील जीवन",
        sdg15Title: "उद्दिष्ट १५: जमिनीवरील जीवन",
        sdg16Title: "उद्दिष्ट १६: शांतता, न्याय आणि मजबूत संस्था",
        sdg17Title: "उद्दिष्ट १७: उद्दिष्टांसाठी भागीदारी"
    }
};

const languageNames = {
    en: "English",
    hi: "हिन्दी",
    mr: "मराठी"
};

// --- Shorter translation function ---
function setLanguage(langCode) {
    const textElements = translations[langCode] || translations['en'];
    
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (textElements[key]) {
            element.textContent = textElements[key];
        }
    });
}

// --- This function populates the dropdown and sets the default language ---
function setupLanguageSelector(targetLang = 'en') {
    const langSelector = document.getElementById('language-selector');
    if (!langSelector) return;

    // 1. Populate dropdown
    if (langSelector.options.length === 0) { // Only populate if empty
        for (const key in languageNames) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = languageNames[key];
            langSelector.appendChild(option);
        }
    }
    
    // 2. Set dropdown value to English
    langSelector.value = targetLang;
    // 3. Translate page to English
    setLanguage(targetLang);

    // 4. Add event listener for language changes
    langSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
}

// --- Highlight Active Nav Link ---
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#nav-links a.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('#')[0];
        const linkHash = linkHref.includes('#') ? '#' + linkHref.split('#')[1] : '';

        // Deactivate all first
        link.classList.remove('active');
        if (linkPage === 'contact.html') {
             link.classList.add('bg-emerald-600');
        }

        // Logic for highlighting
        if ((currentPage === 'index.html' || currentPage === '') && (linkPage === 'index.html' || linkPage === '') && linkHash === '') {
            // Case 1: On index.html, highlight "Home"
            link.classList.add('active');
        } else if (linkPage !== 'index.html' && linkPage === currentPage) {
            // Case 2: On any other page (map.html, solutions.html, etc.)
            link.classList.add('active');
            if (linkPage === 'contact.html') {
                link.classList.remove('bg-emerald-600'); // remove default
            }
        }
    });
}

// --- Run on page load ---
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageSelector('en');
    highlightActiveNav();
});