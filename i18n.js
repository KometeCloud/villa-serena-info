/* ============================================================
   Villa Serena Cortona — i18n.js
   EN / IT translations + auto-detect + toggle
   ============================================================ */
'use strict';

const TRANSLATIONS = {

  en: {
    /* ── SHARED (property pages + main app) ──────────────── */
    hero_eyebrow:      'Welcome to · Benvenuti',
    guide_small:       'Guest Arrival Guide',

    s_need_help:       'Need Help?',
    s_how_to_reach:    'How to Reach Us',
    s_key_collection:  'At the Gate — Key Collection',
    s_checkin_proc:    'Check-in Procedure',
    s_good_to_know:    'Good to Know',

    call_us:           'Call us',
    call_us_small:     'Daily 7am–7pm',
    whatsapp:          'WhatsApp',
    whatsapp_small:    'Send a message',

    map_strong:        'Open in Google Maps',

    step1_title:       'Coming from the top of the hill',
    step1_p:           'The entrance avenue of Villa Serena &amp; Dépendance is on your <b>left</b>, just after <b>Hotel Oasi</b>.',
    step2_title:       'Coming from the bottom of the hill',
    step2_p:           'Do <b>not</b> turn immediately at the first entrance — it is on a dangerous curve. Continue uphill ~150m to <b>Hotel Oasi Neumann\'s small parking</b> on the right. Maneuver there, turn left back down the hill.',
    step2_p_serena:    'Do <b>not</b> turn immediately at the first entrance — it is on a dangerous curve. Continue uphill ~150m to <b>Hotel Oasi Neumann\'s small parking</b> on the right (blue arrow). Maneuver there, turn left back down the hill.',
    step3_title:       'The entrance',
    step3_p:           'After Hotel Oasi\'s large wall, the <b>villa gate</b> is on your left. Pull into the driveway to collect your keys.',
    step3_p_serena:    'After Hotel Oasi\'s large wall, the <b>villa gate</b> is on your left. You can pull into the driveway to park briefly while collecting the keys.',

    key_find:          'Find your keys in the wall on the right of the gate',
    key_find_excl:     'Find all three sets of keys in the wall on the right of the gate',
    key_label:         'Take only the keys labelled',
    key_take:          'Take',
    key_note_serena:   'Inside the hole in the wall to the <b>right of the gate</b> you will find the keys to your villa and the <b>remote control</b> that opens the gate automatically. Take <b>only</b> the keys marked <b>SERENA</b>. The gate closes automatically behind you.',
    key_note_serenella:'Inside the hole in the wall to the <b>right of the gate</b> you will find the keys to your apartment and the <b>remote control</b> that opens the gate automatically. Take <b>only</b> the keys marked <b>SERENELLA</b>. The gate closes automatically behind you.',
    key_note_fontanella:'Inside the hole in the wall to the <b>right of the gate</b> you will find the keys to your apartment and the <b>remote control</b> that opens the gate automatically. Take <b>only</b> the keys marked <b>FONTANELLA</b>. The gate closes automatically behind you.',
    key_note_excl:     'Inside the hole in the wall to the <b>right of the gate</b> you will find the keys to all three villas and the <b>remote control</b> that opens the gate. Take <b>all three sets</b> of keys: <b>SERENA</b>, <b>SERENELLA</b>, and <b>FONTANELLA</b>. The gate closes automatically.',

    car_park:          'Car Park',
    car_park_p:        'After entering through the gate, the car park is on the <b>right side</b> of the private driveway.',
    car_park_p_excl:   'After entering through the gate, the car park is on the <b>right side</b> of the private driveway. Multiple spaces for the whole group.',
    int_doors:         'Interior Doors',
    int_doors_p:       'Additional keys for interior doors are attached directly to those doors inside the apartment.',
    int_doors_p_villa: 'Additional keys for interior doors are attached directly to those doors inside the villa.',

    /* Serena */
    serena_s_parking:  'Parking &amp; Your Villa',
    serena_apt_title:  'Your Villa',
    serena_apt_p:      'Villa Serena is the <b>main villa</b> — the large white house you see first as you enter the property. Your key opens the main front door.',

    /* Serenella */
    sella_s_parking:   'Parking &amp; Your Apartment',
    sella_apt_title:   'Your Apartment',
    sella_apt_p:       'Dépendance Serenella is a <b>ground-floor apartment</b> within the Villa Serena complex. The main entrance is marked with a <b>red arrow</b> on the property map. Entirely on one level — no stairs.',
    sella_garden_title:'Direct Garden Access',
    sella_garden_p:    'Your apartment has direct access to the garden. Enjoy the <b>breathtaking sunsets</b> from your private outdoor space.',

    /* Fontanella */
    fona_s_parking:    'Parking &amp; Your Apartment',
    fona_apt_title:    'Your Apartment',
    fona_apt_p:        'Dépendance Fontanella is on the <b>left side of the property</b>, immediately after Villa Serena — the main white house. Look for the door marked with a <b>red arrow</b>. Entirely on one level, with just one step at the entrance.',
    fona_garden_title: 'Private Garden',
    fona_garden_p:     'The apartment takes its name from the <b>old stone fountain</b> (<em>fontana</em>) that adorns your fully enclosed private garden. A perfect spot for families and pets.',

    /* Exclusive */
    excl_s_three:      'Your Three Villas',
    excl_s_complex:    'The Entire Complex',
    excl_s_parking:    'Parking &amp; Your Villas',
    excl_u_serena:     'The large white house — the heart of the complex. Rural Tuscan authenticity with all modern comforts and stunning views over the Val di Chiana.',
    excl_u_sella:      'Romantic and intimate — entirely on the ground floor with direct garden access and breathtaking sunsets. Perfect for couples or families with young children.',
    excl_u_fona:       'Independent and bright — named after the old stone fountain in its fully enclosed private garden. One step entrance, ideal for families with pets.',
    excl_badge_main:   'Main Villa',
    excl_badge_ground: 'Ground Floor',
    excl_badge_garden: 'Private Garden',
    excl_serena_title: 'Villa Serena (Main)',
    excl_serena_p:     'The <b>large white house</b> you see as you enter. Opens with the <b>SERENA</b> keys.',
    excl_sella_title:  'Dépendance Serenella',
    excl_sella_p:      'Ground floor apartment, entrance marked with a <b>red arrow</b>. Opens with the <b>SERENELLA</b> keys.',
    excl_fona_title:   'Dépendance Fontanella',
    excl_fona_p:       'On the <b>left side</b> of the property, immediately after the main villa. Look for the door with a <b>red arrow</b>. Opens with the <b>FONTANELLA</b> keys.',

    /* Check-in steps */
    ci1_title:         'Confirm arrival via WhatsApp',
    ci1_p_serena:      'As soon as you enter the villa, send us a message on WhatsApp confirming you have arrived and taken possession of the villa.',
    ci1_p_sella:       'As soon as you enter the apartment, send us a message on WhatsApp confirming you have arrived and taken possession of Dépendance Serenella.',
    ci1_p_fona:        'As soon as you enter the apartment, send us a message on WhatsApp confirming you have arrived and taken possession of Dépendance Fontanella.',
    ci1_p_excl:        'As soon as your group has arrived and entered the complex, send us a message on WhatsApp confirming possession of all three villas.',
    ci2_title:         'Complete the web check-in',
    ci2_p:             'Use the link we sent you by email to complete the online check-in form. Alternatively, send copies of all guests\' <b>passports or ID cards</b> via WhatsApp.',
    ci2_p_excl:        'Use the link we sent you by email. Alternatively, send copies of <b>all guests\' passports or ID cards</b> via WhatsApp (for all three units).',
    ci3_title:         'Registration within 12 hours',
    ci3_p:             'Registration is <b>mandatory by law</b> and must be completed <b>within the first 12 hours</b> after check-in. Thank you!',
    ci3_p_serena:      'Registration is <b>mandatory by law</b> and must be completed <b>within the first 12 hours</b> after check-in. Thank you for your cooperation!',
    ci3_p_excl:        'Registration of <b>all guests</b> is mandatory by law within the first 12 hours. This applies to guests in all three villas.',
    ci3_badge:         'Required by law · within 12 hours',
    ci3_badge_excl:    'Required by law · within 12 hours · all guests',

    /* Good to know */
    gk_ci_title:       'Check-in time',
    gk_ci_p:           'From <b>3:00 pm</b> onwards — self check-in',
    gk_co_title:       'Check-out',
    gk_co_p:           'By <b>10:00 am</b>. Late check-out until 6pm available for a fee.',
    gk_wifi_title:     'Free Wi-Fi',
    gk_wifi_p:         'Available throughout the property — <b>no password required</b>.',
    gk_wifi_p_excl:    'Available throughout all three villas and the entire property. No password needed.',
    gk_pool_title:     'Pool Access',
    gk_pool_p:         'You have full access to the shared infinity pool. Enjoy the stunning views over the Val di Chiana!',
    gk_pool_p_sella:   'You have full access to the shared infinity pool. Enjoy the views over the Val di Chiana!',
    gk_pool_excl_title:'Private Infinity Pool',
    gk_pool_excl_p:    'The pool is exclusively yours for the duration of your stay. Enjoy complete privacy with views over the Val di Chiana.',
    gk_bbq_title:      'Barbecue',
    gk_bbq_p:          'A barbecue is available for your group. Please ask our staff for instructions.',

    highlight_emerg:   'We are available daily from <b>7am to 7pm</b> for any assistance. For emergencies outside these hours, contact Mr. Francesco: <a href="tel:+393921551115" style="color:var(--prop-accent);font-weight:600;">+39 392 1551115</a>',

    footer_back:       '← Back to Guest Info',

    /* Stat labels */
    stat_bedroom:      'Bedroom',
    stat_bedrooms:     'Bedrooms',
    stat_bathroom:     'Bathroom',
    stat_bathrooms:    'Bathrooms',
    stat_guests:       'Guests',

    /* Prop tags */
    tag_private_garden:'⛲ Private garden',
    tag_pool_access:   '🏊 Pool access',
    tag_ground_floor:  '🚶 Ground floor',
    tag_pet_friendly:  '🐾 Pet friendly',
    tag_ac:            '❄️ Air conditioning',
    tag_wifi:          '📶 Free Wi-Fi',
    tag_sunsets:       '🌅 Stunning sunsets',
    tag_inf_pool:      '♾️ Private infinity pool',
    tag_main_villa:    '🏠 Main villa',
    tag_priv_gardens:  '🌿 Private gardens',
    tag_bbq:           '🍖 Barbecue',
    tag_3villas:       '🏡 3 independent villas',

    s_your_property:   'Your Property',

    /* ── MAIN APP ─────────────────────────────────────────── */
    title_home:        'Villa Serena',
    title_info:        'Info & Services',
    title_contacts:    'Helpful Contacts',
    title_extras:      'Extra Services',
    title_restaurants: 'Restaurants',
    title_more:        'More',

    nav_home:          'Home',
    nav_contacts:      'Contacts',
    nav_info:          'Info',
    nav_extras:        'Extras',
    nav_restaurants:   'Restaurants',
    nav_more:          'More',

    home_eyebrow:      'Benvenuti · Welcome',
    home_subtitle:     'Cortona, Tuscany',
    home_quote:        'We happily welcome our guests! Please help us to make your stay as pleasant as possible, we are at your service for all your needs.',
    home_team:         '— Francesco & Fiorella',
    home_s_quick:      'Quick Actions',
    home_s_explore:    'Explore',
    home_call:         'Call Reception',
    home_call_small:   'Daily 7am – 7pm',
    home_email:        'Email Us',
    home_email_small:  'info@villa...',
    home_card_cont_t:  'Helpful Contacts',
    home_card_cont_s:  'Emergency & useful numbers',
    home_card_info_t:  'Info & Services',
    home_card_info_s:  'Check-in, Wi-Fi, rules & more',
    home_card_extras_t:'Extra Services',
    home_card_extras_s:'Experiences, tastings & wellness',
    home_card_rest_t:  'Restaurants',
    home_card_rest_s:  '30 restaurants in Cortona',
    home_card_more_t:  'More',
    home_card_more_s:  'Laundry, experiences & social',

    extras_h2:         'Extra Services',
    extras_sub:        'Enhance your stay with exclusive experiences',
    extras_intro:      'Book curated experiences directly from your phone, provided by our trusted partner AddExtra.',
    extras_book:       'Book Now',
    extras_s_wines:    '🍷 Wines & Tastings',
    extras_s_tours:    '🗺️ Tours & Excursions',
    extras_s_wellness: '💆 Wellness',
    extras_s_cooking:  '👨‍🍳 Cooking & Food',

    ex1_title:  'Wine Tasting in the stunning Tuscan landscapes',
    ex1_desc:   'Discover the soul of Tuscany through its wines. A guided tasting experience set among breathtaking vineyards and rolling hills.',
    ex2_title:  'Wine Box Taste Of Cortona',
    ex2_desc:   'A curated selection of the finest local Cortona wines delivered to your villa. The perfect introduction to the wines of this ancient hilltop town.',
    ex3_title:  'The Heart of Chiana Valley',
    ex3_desc:   'An immersive journey through the Chiana Valley — its hidden villages, golden landscapes and authentic Tuscan life away from the tourist trail.',
    ex4_title:  'Massages in accommodation',
    ex4_desc:   'Relax in the comfort of your villa or apartment. Our professional therapists come to you, so you never need to leave your retreat.',
    ex5_title:  'Holistic and sports massages',
    ex5_desc:   'Tailored holistic or sports massage treatments to rejuvenate body and mind. Ideal for active travellers and those seeking deep relaxation.',
    ex6_title:  "Elegance of Val d'Orcia",
    ex6_desc:   "A full-day tour through the iconic Val d'Orcia — a UNESCO World Heritage landscape of cypress-lined roads, medieval villages and thermal baths.",
    ex7_title:  'Cooking &amp; Wine among the hills',
    ex7_desc:   'Learn to prepare authentic Tuscan dishes in a farmhouse kitchen, then enjoy your creations paired with local wines among the hills.',
    ex8_title:  'Best of Monteriggioni Area',
    ex8_desc:   'Explore the perfectly preserved medieval village of Monteriggioni and its surrounding Chianti wine country — history, culture and stunning landscapes.',
    ex9_title:  'Olive oil tour &amp; Oil tasting',
    ex9_desc:   "Visit an authentic Tuscan olive grove and mill. Learn the production process and taste some of Italy's finest extra-virgin olive oils.",
    ex10_title: 'Cooking &amp; Roots in Italian Home',
    ex10_desc:  'An intimate cooking class in a real Italian home, exploring traditional Tuscan family recipes passed down through generations.',

    info_h2:           'Info & Services',
    info_sub:          'Everything you need for a comfortable stay',
    s_ci_co:           'Check-in & Check-out',
    info_ci_strong:    'Check-in',
    info_ci_p:         'From <b>3:00 pm</b> onwards — self check-in',
    info_ci_badge:     'Self check-in',
    info_co_strong:    'Check-out',
    info_co_p:         'By <b>10:00 am</b>',
    info_co_badge:     'Late checkout until 6pm available (fee applies)',
    info_early_strong: 'Early Departures',
    info_early_p:      'If departing before 7am, please settle your bill by 4pm the day before.',
    s_amenities:       'Amenities',
    info_wifi_strong:  'Free Wi-Fi',
    info_wifi_p:       'Available throughout the property — no password required.',
    info_wifi_badge:   'No password needed',
    info_water_strong: 'Tap Water',
    info_water_p:      'Water comes from a well and is sterilized. Suitable for cooking. We recommend bottled water for drinking.',
    info_water_p2:     'Complimentary water in the fridge. Additional bottles <b>€2.00</b> each.',
    s_rules:           'House Rules',
    info_smoke_strong: 'No Smoking Indoors',
    info_smoke_p:      'Smoking is strictly prohibited inside. Ashtrays are available in designated outdoor areas.',
    info_smoke_badge:  'Indoor smoking prohibited',
    info_pets_strong:  'Pets Welcome',
    info_pets_p:       'Pets are welcome at an additional charge of <b>€10.00 per night</b>.',
    info_pets_p2:      'Pets are allowed at the pool on a leash but <b>not in the water</b>.',
    info_pets_badge:   'Pets welcome · €10/night',
    s_promise:         'Our Promise',
    info_promise_p:    'Our staff is ready to assist you throughout your stay. Our goal is to provide you with an <b>unforgettable experience</b> in the heart of Tuscany. Do not hesitate to ask for anything!',

    rest_h2:           'Restaurants',
    rest_sub:          'Our favourite spots in Cortona',
    search_ph:         'Search restaurants…',
    rest_count:        '{n} restaurants',
    rest_count_f:      '{v} of {n} restaurants',
    no_results:        'No restaurants found',
    call_btn:          'Call',

    cont_h2:           'Helpful Contacts',
    cont_sub:          'All the numbers you might need',
    s_vs:              'Villa Serena',
    cont_recep:        'Reception',
    cont_recep_small:  'Daily 7:00 am – 7:00 pm',
    s_owners:          '🚨 Owners — Emergencies Only',
    owners_warning:    'Call these numbers only for real emergencies outside reception hours (7am–7pm). Do not call for non-urgent matters.',
    cont_franc:        'Mr. Francesco',
    cont_aless:        'Mr. Alessandro',
    cont_fior:         'Mrs. Fiorella',
    cont_outside:      'Outside reception hours',
    s_emergency:       'Emergency Services',
    cont_112_strong:   'Emergency Number',
    cont_112_small:    'Police, fire, ambulance',
    cont_doc_strong:   'Overnight Doctor',
    cont_doc_small:    'Medical assistance after hours',
    s_local:           'Local Services',
    cont_taxi_strong:  'Taxi Cortona',
    cont_taxi_small:   'Local taxi service',
    cont_ip_strong:    'Cortona Info Point',
    cont_ip_small:     'Piazza Signorelli, 9',
    s_train:           'Train Information',
    cont_trit_strong:  'Trenitalia (Italian)',
    cont_trit_small:   'Train timetables & bookings',
    cont_tren_strong:  'Trenitalia (English)',
    cont_tren_small:   'Train info in English',

    more_h2:           'More',
    more_sub:          'Laundry, experiences & social',
    s_laundry:         '🧺 Laundry',
    laundry_price:     '€5 per wash · detergent included',
    laundry_d1:        'Self-service laundry available <b>24 hours a day</b>.',
    laundry_d2:        'Located on the right side of Villa Serena — open the <b>grey door</b>.',
    laundry_d3:        'Please inform staff of the number of washes used before checkout. Charges will be added to your final bill.',
    laundry_ext:       '<b>External option:</b> Lavanderia Cortonese — Via Dardano, n. 35<br>Professional dry cleaning: <a href="tel:+390575630364" style="color:var(--primary);font-weight:600;">+39 0575 630364</a>',
    s_waste:           '♻️ Waste & Recycling',
    waste_d1:          'Please follow the waste disposal instructions provided in your room and at the reception desk.',
    waste_d2:          'Separate your waste into the correct bins: <b>plastic, glass, paper and organic</b>.',
    waste_d3:          'Bins are located in the designated area — our staff can show you the way.',
    s_coffee:          '☕ Lavazza Espresso Coffee',
    coffee_intro:      'To continuously improve our services, this year every apartment is equipped with a <b>Lavazza espresso machine</b>. The first pods you find in the kitchen are <b>complimentary</b>.',
    coffee_d1:         'Additional pods can be ordered by calling or WhatsApp: <b>+39 0575 612531</b>. Delivery during housekeeping hours.',
    coffee_d2:         'These professional capsules are not available in regular supermarkets.',
    coffee_price:      '10 original Lavazza capsules — <b>€10.00</b>',
    coffee_contact_lbl:'Contact us directly:',
    s_social:          '📱 Social & Reviews',
    social_intro:      'Share your experience and follow us! Your reviews mean the world to us.',
    social_google:     'Leave a Google Review',
  },

  /* ═══════════════ ITALIANO ═══════════════════════════════ */

  it: {
    /* ── SHARED ──────────────────────────────────────────── */
    hero_eyebrow:      'Benvenuti · Welcome',
    guide_small:       "Guida all'Arrivo per gli Ospiti",

    s_need_help:       'Hai bisogno di aiuto?',
    s_how_to_reach:    'Come raggiungerci',
    s_key_collection:  'Al Cancello — Ritiro Chiavi',
    s_checkin_proc:    'Procedura di Check-in',
    s_good_to_know:    'Informazioni Utili',

    call_us:           'Chiamaci',
    call_us_small:     'Tutti i giorni 7:00–19:00',
    whatsapp:          'WhatsApp',
    whatsapp_small:    'Invia un messaggio',

    map_strong:        'Apri in Google Maps',

    step1_title:       "Provenendo dall'alto della collina",
    step1_p:           "Il vialetto d'ingresso di Villa Serena &amp; Dépendance è alla tua <b>sinistra</b>, subito dopo l'<b>Hotel Oasi</b>.",
    step2_title:       'Provenendo dal basso della collina',
    step2_p:           "<b>Non</b> girare subito al primo ingresso — si trova su una curva pericolosa. Prosegui in salita per ~150m fino al <b>piccolo parcheggio dell'Hotel Oasi Neumann</b> sulla destra. Fai manovra lì, poi gira a sinistra verso il basso.",
    step2_p_serena:    "<b>Non</b> girare subito al primo ingresso — si trova su una curva pericolosa. Prosegui in salita per ~150m fino al <b>piccolo parcheggio dell'Hotel Oasi Neumann</b> sulla destra (freccia blu). Fai manovra lì, poi gira a sinistra verso il basso.",
    step3_title:       "L'ingresso",
    step3_p:           "Dopo il grande muro dell'Hotel Oasi, il <b>cancello della villa</b> è alla tua sinistra. Accosta nel vialetto per ritirare le chiavi.",
    step3_p_serena:    "Dopo il grande muro dell'Hotel Oasi, il <b>cancello della villa</b> è alla tua sinistra. Puoi accostare nel vialetto per parcheggiare brevemente mentre ritiri le chiavi.",

    key_find:          'Trovi le chiavi nel muro a destra del cancello',
    key_find_excl:     'Trovi tutti e tre i set di chiavi nel muro a destra del cancello',
    key_label:         "Prendi solo le chiavi con l'etichetta",
    key_take:          'Prendi',
    key_note_serena:   "Nell'incavo del muro alla <b>destra del cancello</b> troverai le chiavi della tua villa e il <b>telecomando</b> per aprire il cancello automaticamente. Prendi <b>solo</b> le chiavi contrassegnate <b>SERENA</b>. Il cancello si chiude automaticamente.",
    key_note_serenella:"Nell'incavo del muro alla <b>destra del cancello</b> troverai le chiavi del tuo appartamento e il <b>telecomando</b> per aprire il cancello automaticamente. Prendi <b>solo</b> le chiavi contrassegnate <b>SERENELLA</b>. Il cancello si chiude automaticamente.",
    key_note_fontanella:"Nell'incavo del muro alla <b>destra del cancello</b> troverai le chiavi del tuo appartamento e il <b>telecomando</b> per aprire il cancello automaticamente. Prendi <b>solo</b> le chiavi contrassegnate <b>FONTANELLA</b>. Il cancello si chiude automaticamente.",
    key_note_excl:     "Nell'incavo del muro alla <b>destra del cancello</b> troverai le chiavi di tutte e tre le ville e il <b>telecomando</b> per aprire il cancello. Prendi <b>tutti e tre i set</b> di chiavi: <b>SERENA</b>, <b>SERENELLA</b> e <b>FONTANELLA</b>. Il cancello si chiude automaticamente.",

    car_park:          'Parcheggio',
    car_park_p:        'Dopo essere entrati dal cancello, il parcheggio si trova sul <b>lato destro</b> del vialetto privato.',
    car_park_p_excl:   'Dopo essere entrati dal cancello, il parcheggio si trova sul <b>lato destro</b> del vialetto privato. Ampio spazio per tutto il gruppo.',
    int_doors:         'Porte Interne',
    int_doors_p:       "Le chiavi delle porte interne sono direttamente attaccate alle rispettive porte all'interno dell'appartamento.",
    int_doors_p_villa: "Le chiavi delle porte interne sono direttamente attaccate alle rispettive porte all'interno della villa.",

    /* Serena */
    serena_s_parking:  'Parcheggio e la tua Villa',
    serena_apt_title:  'La tua Villa',
    serena_apt_p:      "Villa Serena è la <b>villa principale</b> — la grande casa bianca che vedi per prima entrando nella proprietà. La tua chiave apre il portone d'ingresso principale.",

    /* Serenella */
    sella_s_parking:   'Parcheggio e il tuo Appartamento',
    sella_apt_title:   'Il tuo Appartamento',
    sella_apt_p:       "La Dépendance Serenella è un <b>appartamento al piano terra</b> nel complesso di Villa Serena. L'ingresso principale è contrassegnato da una <b>freccia rossa</b> sulla mappa della proprietà. Tutto su un unico livello — senza scale.",
    sella_garden_title:'Accesso Diretto al Giardino',
    sella_garden_p:    'Il tuo appartamento ha accesso diretto al giardino. Goditi i <b>tramonti mozzafiato</b> dal tuo spazio esterno privato.',

    /* Fontanella */
    fona_s_parking:    'Parcheggio e il tuo Appartamento',
    fona_apt_title:    'Il tuo Appartamento',
    fona_apt_p:        "La Dépendance Fontanella si trova sul <b>lato sinistro della proprietà</b>, subito dopo Villa Serena — la casa bianca principale. Cerca la porta contrassegnata con una <b>freccia rossa</b>. Tutto su un unico livello, con un solo gradino all'ingresso.",
    fona_garden_title: 'Giardino Privato',
    fona_garden_p:     "L'appartamento prende il nome dall'<b>antica fontana in pietra</b> (<em>fontana</em>) che adorna il tuo giardino privato completamente recintato. Un posto perfetto per famiglie e animali domestici.",

    /* Exclusive */
    excl_s_three:      'Le Tre Ville',
    excl_s_complex:    "L'intero Complesso",
    excl_s_parking:    'Parcheggio e le tue Ville',
    excl_u_serena:     'La grande casa bianca — il cuore del complesso. Autenticità rurale toscana con tutti i comfort moderni e splendide viste sulla Val di Chiana.',
    excl_u_sella:      'Romantica e intima — interamente al piano terra con accesso diretto al giardino e tramonti mozzafiato. Perfetta per coppie o famiglie con bambini piccoli.',
    excl_u_fona:       "Indipendente e luminosa — prende il nome dall'antica fontana in pietra nel suo giardino privato completamente recintato. Un gradino all'ingresso, ideale per famiglie con animali.",
    excl_badge_main:   'Villa Principale',
    excl_badge_ground: 'Piano Terra',
    excl_badge_garden: 'Giardino Privato',
    excl_serena_title: 'Villa Serena (Principale)',
    excl_serena_p:     "La <b>grande casa bianca</b> che vedi all'ingresso. Si apre con le chiavi <b>SERENA</b>.",
    excl_sella_title:  'Dépendance Serenella',
    excl_sella_p:      'Appartamento al piano terra, ingresso contrassegnato con una <b>freccia rossa</b>. Si apre con le chiavi <b>SERENELLA</b>.',
    excl_fona_title:   'Dépendance Fontanella',
    excl_fona_p:       'Sul <b>lato sinistro</b> della proprietà, subito dopo la villa principale. Cerca la porta con la <b>freccia rossa</b>. Si apre con le chiavi <b>FONTANELLA</b>.',

    /* Check-in steps */
    ci1_title:         "Conferma l'arrivo via WhatsApp",
    ci1_p_serena:      'Non appena entri nella villa, inviaci un messaggio WhatsApp per confermare che sei arrivato e hai preso possesso della villa.',
    ci1_p_sella:       "Non appena entri nell'appartamento, inviaci un messaggio WhatsApp per confermare che sei arrivato e hai preso possesso della Dépendance Serenella.",
    ci1_p_fona:        "Non appena entri nell'appartamento, inviaci un messaggio WhatsApp per confermare che sei arrivato e hai preso possesso della Dépendance Fontanella.",
    ci1_p_excl:        'Non appena il gruppo è arrivato e ha preso possesso del complesso, inviaci un messaggio WhatsApp confermando il possesso di tutte e tre le ville.',
    ci2_title:         'Completa il web check-in',
    ci2_p:             "Usa il link che ti abbiamo inviato via email per compilare il modulo di check-in online. In alternativa, invia copia dei <b>passaporti o carte d'identità</b> di tutti gli ospiti via WhatsApp.",
    ci2_p_excl:        "Usa il link che ti abbiamo inviato via email. In alternativa, invia copia dei <b>passaporti o carte d'identità di tutti gli ospiti</b> via WhatsApp (per tutte e tre le unità).",
    ci3_title:         'Registrazione entro 12 ore',
    ci3_p:             'La registrazione è <b>obbligatoria per legge</b> e deve essere completata <b>entro le prime 12 ore</b> dal check-in. Grazie!',
    ci3_p_serena:      'La registrazione è <b>obbligatoria per legge</b> e deve essere completata <b>entro le prime 12 ore</b> dal check-in. Grazie per la collaborazione!',
    ci3_p_excl:        'La registrazione di <b>tutti gli ospiti</b> è obbligatoria per legge entro le prime 12 ore. Questo vale per gli ospiti in tutte e tre le ville.',
    ci3_badge:         'Obbligatorio per legge · entro 12 ore',
    ci3_badge_excl:    'Obbligatorio per legge · entro 12 ore · tutti gli ospiti',

    /* Good to know */
    gk_ci_title:       'Orario di Check-in',
    gk_ci_p:           'Dalle <b>ore 15:00</b> in poi — self check-in',
    gk_co_title:       'Check-out',
    gk_co_p:           'Entro le <b>ore 10:00</b>. Check-out posticipato fino alle 18:00 disponibile a pagamento.',
    gk_wifi_title:     'Wi-Fi Gratuito',
    gk_wifi_p:         'Disponibile in tutta la proprietà — <b>senza password</b>.',
    gk_wifi_p_excl:    "Disponibile in tutte e tre le ville e nell'intera proprietà. Senza password.",
    gk_pool_title:     'Accesso alla Piscina',
    gk_pool_p:         'Hai pieno accesso alla piscina a sfioro condivisa. Goditi le splendide viste sulla Val di Chiana!',
    gk_pool_p_sella:   'Hai pieno accesso alla piscina a sfioro condivisa. Goditi la vista sulla Val di Chiana!',
    gk_pool_excl_title:'Piscina a Sfioro Privata',
    gk_pool_excl_p:    'La piscina è esclusivamente a tua disposizione per tutta la durata del soggiorno. Goditi la massima privacy con vista sulla Val di Chiana.',
    gk_bbq_title:      'Barbecue',
    gk_bbq_p:          'È disponibile un barbecue per il tuo gruppo. Chiedi al nostro staff per le istruzioni.',

    highlight_emerg:   'Siamo disponibili tutti i giorni dalle <b>7:00 alle 19:00</b> per qualsiasi necessità. Per emergenze fuori da questi orari, contatta il Sig. Francesco: <a href="tel:+393921551115" style="color:var(--prop-accent);font-weight:600;">+39 392 1551115</a>',

    footer_back:       '← Torna alle Informazioni per gli Ospiti',

    /* Stat labels */
    stat_bedroom:      'Camera',
    stat_bedrooms:     'Camere',
    stat_bathroom:     'Bagno',
    stat_bathrooms:    'Bagni',
    stat_guests:       'Ospiti',

    /* Prop tags */
    tag_private_garden:'⛲ Giardino privato',
    tag_pool_access:   '🏊 Piscina',
    tag_ground_floor:  '🚶 Piano terra',
    tag_pet_friendly:  '🐾 Animali ammessi',
    tag_ac:            '❄️ Aria condizionata',
    tag_wifi:          '📶 Wi-Fi gratuito',
    tag_sunsets:       '🌅 Tramonti mozzafiato',
    tag_inf_pool:      '♾️ Piscina a sfioro privata',
    tag_main_villa:    '🏠 Villa principale',
    tag_priv_gardens:  '🌿 Giardini privati',
    tag_bbq:           '🍖 Barbecue',
    tag_3villas:       '🏡 3 ville indipendenti',

    s_your_property:   'La tua Proprietà',

    /* ── MAIN APP ─────────────────────────────────────────── */
    title_home:        'Villa Serena',
    title_info:        'Info & Servizi',
    title_contacts:    'Contatti Utili',
    title_extras:      'Servizi Extra',
    title_restaurants: 'Ristoranti',
    title_more:        'Altro',

    nav_home:          'Home',
    nav_contacts:      'Contatti',
    nav_info:          'Info',
    nav_extras:        'Extra',
    nav_restaurants:   'Ristoranti',
    nav_more:          'Altro',

    home_eyebrow:      'Benvenuti · Welcome',
    home_subtitle:     'Cortona, Toscana',
    home_quote:        'Accogliamo i nostri ospiti con gioia! Aiutateci a rendere il vostro soggiorno il più piacevole possibile, siamo a vostra disposizione per ogni esigenza.',
    home_team:         '— Francesco e Fiorella',
    home_s_quick:      'Azioni Rapide',
    home_s_explore:    'Esplora',
    home_call:         'Chiama Reception',
    home_call_small:   'Tutti i giorni 7:00 – 19:00',
    home_email:        'Scrivici',
    home_email_small:  'info@villa...',
    home_card_cont_t:  'Contatti Utili',
    home_card_cont_s:  'Numeri di emergenza e utili',
    home_card_info_t:  'Info & Servizi',
    home_card_info_s:  'Check-in, Wi-Fi, regole e altro',
    home_card_extras_t:'Servizi Extra',
    home_card_extras_s:'Esperienze, degustazioni e benessere',
    home_card_rest_t:  'Ristoranti',
    home_card_rest_s:  '30 ristoranti a Cortona',
    home_card_more_t:  'Altro',
    home_card_more_s:  'Lavanderia, esperienze e social',

    extras_h2:         'Servizi Extra',
    extras_sub:        'Arricchisci il tuo soggiorno con esperienze esclusive',
    extras_intro:      'Prenota esperienze curate direttamente dal tuo telefono, offerte dal nostro partner di fiducia AddExtra.',
    extras_book:       'Prenota',
    extras_s_wines:    '🍷 Vini & Degustazioni',
    extras_s_tours:    '🗺️ Tour & Escursioni',
    extras_s_wellness: '💆 Benessere',
    extras_s_cooking:  '👨‍🍳 Cucina & Cibo',

    ex1_title:  'Wine Tasting in the stunning Tuscan landscapes',
    ex1_desc:   "Scopri l'anima della Toscana attraverso i suoi vini. Una degustazione guidata tra vigneti mozzafiato e dolci colline.",
    ex2_title:  'Wine Box Taste Of Cortona',
    ex2_desc:   "Una selezione curata dei migliori vini locali di Cortona consegnata nella tua villa. L'introduzione perfetta ai vini di questa antica città collinare.",
    ex3_title:  'The Heart of Chiana Valley',
    ex3_desc:   'Un viaggio immersivo nella Val di Chiana — tra borghi nascosti, paesaggi dorati e autentica vita toscana lontano dai circuiti turistici.',
    ex4_title:  'Massages in accommodation',
    ex4_desc:   'Rilassati nel comfort della tua villa o appartamento. I nostri terapisti professionisti vengono da te, così non devi lasciare il tuo rifugio.',
    ex5_title:  'Holistic and sports massages',
    ex5_desc:   'Trattamenti di massaggio olistico o sportivo personalizzati per rigenerare corpo e mente. Ideale per viaggiatori attivi e per chi cerca un profondo relax.',
    ex6_title:  "Elegance of Val d'Orcia",
    ex6_desc:   "Un tour di una giornata intera attraverso la Val d'Orcia — paesaggio Patrimonio UNESCO con strade di cipressi, borghi medievali e terme.",
    ex7_title:  'Cooking &amp; Wine among the hills',
    ex7_desc:   'Impara a preparare autentici piatti toscani in una cucina rurale, poi gusta le tue creazioni abbinate a vini locali tra le colline toscane.',
    ex8_title:  'Best of Monteriggioni Area',
    ex8_desc:   "Esplora il perfettamente conservato borgo medievale di Monteriggioni e i suoi dintorni nel territorio del Chianti — storia, cultura e paesaggi mozzafiato.",
    ex9_title:  'Olive oil tour &amp; Oil tasting',
    ex9_desc:   "Visita un autentico uliveto e frantoio toscano. Scopri il processo di produzione e degusta alcuni dei migliori oli extravergine d'Italia.",
    ex10_title: 'Cooking &amp; Roots in Italian Home',
    ex10_desc:  'Una lezione di cucina intima in una vera casa italiana, esplorando le ricette tradizionali della famiglia toscana tramandate di generazione in generazione.',

    info_h2:           'Info & Servizi',
    info_sub:          'Tutto ciò che ti serve per un soggiorno confortevole',
    s_ci_co:           'Check-in & Check-out',
    info_ci_strong:    'Check-in',
    info_ci_p:         'Dalle <b>ore 15:00</b> in poi — self check-in',
    info_ci_badge:     'Self check-in',
    info_co_strong:    'Check-out',
    info_co_p:         'Entro le <b>ore 10:00</b>',
    info_co_badge:     'Check-out posticipato fino alle 18:00 disponibile (a pagamento)',
    info_early_strong: 'Partenze Anticipate',
    info_early_p:      'Se partite prima delle 7:00, regolate il conto entro le 16:00 del giorno precedente.',
    s_amenities:       'Servizi',
    info_wifi_strong:  'Wi-Fi Gratuito',
    info_wifi_p:       'Disponibile in tutta la proprietà — senza password.',
    info_wifi_badge:   'Senza password',
    info_water_strong: 'Acqua del Rubinetto',
    info_water_p:      "L'acqua proviene da un pozzo ed è sterilizzata. Adatta per cucinare. Si consiglia acqua in bottiglia per bere.",
    info_water_p2:     'Acqua in omaggio in frigorifero. Bottiglie aggiuntive <b>€2,00</b> cad.',
    s_rules:           'Regole della Casa',
    info_smoke_strong: 'Vietato Fumare in Interni',
    info_smoke_p:      "Fumare è rigorosamente vietato all'interno. Posacenere disponibili nelle aree esterne designate.",
    info_smoke_badge:  'Vietato fumare negli interni',
    info_pets_strong:  'Animali Benvenuti',
    info_pets_p:       'Gli animali domestici sono benvenuti con un supplemento di <b>€10,00 a notte</b>.',
    info_pets_p2:      'Gli animali possono accedere alla piscina al guinzaglio ma <b>non in acqua</b>.',
    info_pets_badge:   'Animali benvenuti · €10/notte',
    s_promise:         'La Nostra Promessa',
    info_promise_p:    "Il nostro staff è pronto ad assisterti durante tutto il soggiorno. Il nostro obiettivo è offrirti un'<b>esperienza indimenticabile</b> nel cuore della Toscana. Non esitare a chiedere qualsiasi cosa!",

    rest_h2:           'Ristoranti',
    rest_sub:          'I nostri posti preferiti a Cortona',
    search_ph:         'Cerca ristoranti…',
    rest_count:        '{n} ristoranti',
    rest_count_f:      '{v} di {n} ristoranti',
    no_results:        'Nessun ristorante trovato',
    call_btn:          'Chiama',

    cont_h2:           'Contatti Utili',
    cont_sub:          'Tutti i numeri che potresti avere bisogno',
    s_vs:              'Villa Serena',
    cont_recep:        'Reception',
    cont_recep_small:  'Tutti i giorni 7:00 – 19:00',
    s_owners:          '🚨 Proprietari — Solo per Emergenze',
    owners_warning:    'Chiamare questi numeri solo per vere emergenze al di fuori degli orari della reception (7:00–19:00). Non chiamare per questioni non urgenti.',
    cont_franc:        'Sig. Francesco',
    cont_aless:        'Sig. Alessandro',
    cont_fior:         'Sig.ra Fiorella',
    cont_outside:      "Fuori dall'orario di reception",
    s_emergency:       'Servizi di Emergenza',
    cont_112_strong:   'Numero di Emergenza',
    cont_112_small:    'Polizia, vigili del fuoco, ambulanza',
    cont_doc_strong:   'Medico di Guardia',
    cont_doc_small:    'Assistenza medica fuori orario',
    s_local:           'Servizi Locali',
    cont_taxi_strong:  'Taxi Cortona',
    cont_taxi_small:   'Servizio taxi locale',
    cont_ip_strong:    'Cortona Info Point',
    cont_ip_small:     'Piazza Signorelli, 9',
    s_train:           'Informazioni Treni',
    cont_trit_strong:  'Trenitalia (Italiano)',
    cont_trit_small:   'Orari e prenotazioni treni',
    cont_tren_strong:  'Trenitalia (Inglese)',
    cont_tren_small:   'Informazioni treni in inglese',

    more_h2:           'Altro',
    more_sub:          'Lavanderia, esperienze e social',
    s_laundry:         '🧺 Lavanderia',
    laundry_price:     '€5 per lavaggio · detersivo incluso',
    laundry_d1:        'Lavanderia self-service disponibile <b>24 ore su 24</b>.',
    laundry_d2:        'Si trova sul lato destro di Villa Serena — apri la <b>porta grigia</b>.',
    laundry_d3:        'Comunica al personale il numero di lavaggi effettuati prima del check-out. Le spese saranno aggiunte al conto finale.',
    laundry_ext:       '<b>Opzione esterna:</b> Lavanderia Cortonese — Via Dardano, n. 35<br>Lavaggio a secco professionale: <a href="tel:+390575630364" style="color:var(--primary);font-weight:600;">+39 0575 630364</a>',
    s_waste:           '♻️ Rifiuti e Riciclo',
    waste_d1:          'Segui le istruzioni per la raccolta differenziata fornite in camera e alla reception.',
    waste_d2:          'Dividi i rifiuti nei cestini corretti: <b>plastica, vetro, carta e organico</b>.',
    waste_d3:          'I bidoni si trovano nell\'area designata — il nostro staff ti mostrerà dove sono.',
    s_coffee:          '☕ Caffè Espresso Lavazza',
    coffee_intro:      'Per migliorare costantemente i servizi offerti, anche quest\'anno ogni appartamento è dotato di una <b>macchina per caffè espresso Lavazza</b>. Le prime capsule che troverete in cucina sono <b>gratuite</b>.',
    coffee_d1:         'Per acquistare capsule aggiuntive, contattaci telefonicamente o via WhatsApp: <b>+39 0575 612531</b>. Consegna durante l\'orario delle addette alle pulizie.',
    coffee_d2:         'Le capsule di questa macchina professionale non si trovano nei normali supermercati.',
    coffee_price:      '10 capsule originali Lavazza — <b>€10,00</b>',
    coffee_contact_lbl:'Contattaci direttamente:',
    s_social:          '📱 Social & Recensioni',
    social_intro:      'Condividi la tua esperienza e seguici! Le tue recensioni sono preziose per noi.',
    social_google:     'Lascia una Recensione su Google',
  }
};

/* ── Language detection & storage ───────────────────────── */

function detectLang() {
  const stored = localStorage.getItem('vs_lang');
  if (stored === 'it' || stored === 'en') return stored;
  const browser = (navigator.language || 'en').toLowerCase();
  return browser.startsWith('it') ? 'it' : 'en';
}

let _lang = detectLang();

function t(key) {
  const tr = TRANSLATIONS[_lang] || TRANSLATIONS.en;
  return tr[key] !== undefined ? tr[key] : (TRANSLATIONS.en[key] || key);
}

function applyLang(lang) {
  _lang = lang;
  localStorage.setItem('vs_lang', lang);
  const tr = TRANSLATIONS[lang] || TRANSLATIONS.en;

  /* plain text */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = tr[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  /* HTML content */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = tr[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  /* placeholder */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = tr[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  /* tab panel titles (main app) */
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const v = tr[el.dataset.i18nTitle];
    if (v !== undefined) {
      el.dataset.title = v;
      if (el.classList.contains('active')) {
        const pt = document.getElementById('page-title');
        if (pt) pt.textContent = v;
      }
    }
  });

  /* lang toggle label */
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'it' ? 'EN' : 'IT';

  document.documentElement.lang = lang;
}

function toggleLang() { applyLang(_lang === 'en' ? 'it' : 'en'); }

/* expose globally */
window.t          = t;
window.applyLang  = applyLang;
window.toggleLang = toggleLang;
window.getLang    = () => _lang;

document.addEventListener('DOMContentLoaded', () => applyLang(_lang));
