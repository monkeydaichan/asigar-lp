'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "61d235140c92fcce5e39a00b8f9ea2bd",
"/": "61d235140c92fcce5e39a00b8f9ea2bd",
"favicon.ico": "2b5c4b03875e1a515523140e358ef738",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/assets/logo/2.0x/flutter_logo_color.png": "26617db1b713273cdbc5cb388ff1960b",
"assets/assets/logo/2.0x/flutter_logo.png": "90376e0870806a8f8cf1f4f857d545f5",
"assets/assets/logo/4.0x/flutter_logo_color.png": "d9d4a47c82897295d5c58ea1aa627746",
"assets/assets/logo/4.0x/flutter_logo.png": "0ffb4ea6627828d1e56e4fee32a5ab00",
"assets/assets/logo/3.0x/flutter_logo_color.png": "e9a8f35183be9d1212aab678eb5b3e62",
"assets/assets/logo/3.0x/flutter_logo.png": "2366e62ca3bfc30a825109b5434da5fc",
"assets/assets/logo/flutter_logo_color.png": "a7430784cfe9f9e1bbe362ab1edb6274",
"assets/assets/logo/flutter_logo.png": "b803b3aa6c67f1b2bec288bd415fe05d",
"assets/assets/logo/1.5x/flutter_logo_color.png": "fefeae3f55808251f7362c66a66cf80e",
"assets/assets/logo/1.5x/flutter_logo.png": "70933ecc37db656a97454661b136e21c",
"assets/assets/icons/cupertino/2.0x/cupertino.png": "841fb59caf36082cd18e26576474f933",
"assets/assets/icons/cupertino/4.0x/cupertino.png": "9b47baf82e768217af46a846315ffa9e",
"assets/assets/icons/cupertino/3.0x/cupertino.png": "69a20409c3c315ec26c636caaa23f8be",
"assets/assets/icons/cupertino/cupertino.png": "6af719ebbf7d71b3d5ac9886baecc44e",
"assets/assets/icons/cupertino/1.5x/cupertino.png": "d09c7e69897114e52bbe6adacf6f3e99",
"assets/assets/icons/material/2.0x/material.png": "d275197b61d789a66e9cf377744d8e3a",
"assets/assets/icons/material/4.0x/material.png": "2fb30af6a45b91defce5ad1e04a1cb40",
"assets/assets/icons/material/3.0x/material.png": "8fd432d323d9a5da74ec7f717ad1d9db",
"assets/assets/icons/material/material.png": "94bb50bb07de0cddbaddd411778af9bc",
"assets/assets/icons/material/1.5x/material.png": "662b64e40280a4edffd137d18c44948c",
"assets/assets/icons/settings/settings_light.flr": "387cb20b27da2d5a64bc836c1b9f6a46",
"assets/assets/icons/settings/settings_dark.flr": "62e591df8db20b68e9d7cb8510da8443",
"assets/assets/icons/reference/2.0x/reference.png": "c88da180caa08f1a1404b5164658a658",
"assets/assets/icons/reference/4.0x/reference.png": "d6a351b87c2dc03c12e4686d2f0f19e5",
"assets/assets/icons/reference/3.0x/reference.png": "1e371081dcbe464db92dcfb1c4899376",
"assets/assets/icons/reference/reference.png": "e231d1b4df3ae9748dc1b7f8ab9d6840",
"assets/assets/icons/reference/1.5x/reference.png": "c52d8b853a1550b8511cdcb9ab72e442",
"assets/assets/fortnightly/2.0x/fortnightly_chart.png": "96ac4e662faeb4fadb2b52fd56df6720",
"assets/assets/fortnightly/2.0x/fortnightly_feminists.jpg": "2892006a6b5f846422c4921df2caa61b",
"assets/assets/fortnightly/2.0x/fortnightly_healthcare.jpg": "edd984444d4bfb60e1d6dd9002955aa2",
"assets/assets/fortnightly/2.0x/fortnightly_bees.jpg": "5fe8b8bbd4fa21caadc738bfae928775",
"assets/assets/fortnightly/2.0x/fortnightly_title.png": "a30b7cd35a365071630066435469da7a",
"assets/assets/fortnightly/fortnightly_chart.png": "4f97092ed9f1baf9858d4c357efdde0a",
"assets/assets/fortnightly/4.0x/fortnightly_chart.png": "5a1879026696fe2efaa75ce4abf46841",
"assets/assets/fortnightly/4.0x/fortnightly_feminists.jpg": "9262505eca38d06eb2ca6a1c4c1cae81",
"assets/assets/fortnightly/4.0x/fortnightly_healthcare.jpg": "7350493410acfb8acbc2c0e57a181d93",
"assets/assets/fortnightly/4.0x/fortnightly_bees.jpg": "3a12eda09191c4a8c7c2aee580154914",
"assets/assets/fortnightly/4.0x/fortnightly_title.png": "90bc155fe06646a014f44029d4a4d4c1",
"assets/assets/fortnightly/fortnightly_war.png": "9acf35e6674b17702c3964be42ec461c",
"assets/assets/fortnightly/fortnightly_fabrics.png": "5197afe6f2052b8b60134069bc6095bc",
"assets/assets/fortnightly/fortnightly_feminists.jpg": "f4f403aa5f58b775547e854dcaa375cf",
"assets/assets/fortnightly/3.0x/fortnightly_chart.png": "4752aefd032f8f317a8fef6395da50db",
"assets/assets/fortnightly/3.0x/fortnightly_feminists.jpg": "58a990bb9dfed8355cce0cf6990d0616",
"assets/assets/fortnightly/3.0x/fortnightly_healthcare.jpg": "3ac29972aa69e84aff639ab53d1af8f7",
"assets/assets/fortnightly/3.0x/fortnightly_bees.jpg": "37e7db0ee258fb7a12fadc5fbd799210",
"assets/assets/fortnightly/3.0x/fortnightly_title.png": "61674c9773227b5bccfa4e47b41cc285",
"assets/assets/fortnightly/fortnightly_healthcare.jpg": "f60c0fa14c1c61a123d79801d2eb3ae0",
"assets/assets/fortnightly/fortnightly_gas.png": "5186e05084c5983c5aa864131ba23068",
"assets/assets/fortnightly/fortnightly_army.png": "dd41938ecfcea02be2e8b1529363422f",
"assets/assets/fortnightly/fortnightly_stocks.png": "412449e098d4e8a044c3457f74a60fa9",
"assets/assets/fortnightly/fortnightly_bees.jpg": "8ef78ea72aaf66aa70357f7f25ba14f3",
"assets/assets/fortnightly/fortnightly_title.png": "580792eabe845383bc1d84b9fe822196",
"assets/assets/fortnightly/1.5x/fortnightly_chart.png": "b3b5d4b00582e2f10348efa0d3d1e5c3",
"assets/assets/fortnightly/1.5x/fortnightly_feminists.jpg": "9d68325568cd8340d51ec19859fdf252",
"assets/assets/fortnightly/1.5x/fortnightly_healthcare.jpg": "6d79c4ddb1969d62f098e8b432d83b52",
"assets/assets/fortnightly/1.5x/fortnightly_bees.jpg": "0620cbc4c7d9de17dc41245eb551ad15",
"assets/assets/fortnightly/1.5x/fortnightly_title.png": "630e6341ea56967812b1f3f3a152e096",
"assets/assets/splash_effects/splash_effect_5.gif": "41d656c139eab6db13dd553eb5697d02",
"assets/assets/splash_effects/splash_effect_4.gif": "0a395e70e9f734140f1184ab19d13260",
"assets/assets/splash_effects/splash_effect_9.gif": "4a29455e8e619c16cde84dd7bd806f28",
"assets/assets/splash_effects/splash_effect_3.gif": "096415baafd3484f78a99b6635d7d015",
"assets/assets/splash_effects/splash_effect_8.gif": "14994737f96639efa53e96f6278fa679",
"assets/assets/splash_effects/splash_effect_6.gif": "0d45babc0fa790235b4807150ef82a2e",
"assets/assets/splash_effects/splash_effect_1.gif": "9ecf593cbdaf240b7bab69938dc8ff56",
"assets/assets/splash_effects/splash_effect_7.gif": "c21e69e09c3b523b3504d576a07fa409",
"assets/assets/splash_effects/splash_effect_10.gif": "7fa099a9fddbd775bad58af6c7ee92aa",
"assets/assets/splash_effects/splash_effect_2.gif": "75e952a30141fc413bce4e86c818d901",
"assets/assets/studies/2.0x/starter_card_dark.png": "1ca4593df056e7d6098a20340ed8d3f5",
"assets/assets/studies/2.0x/fortnightly_card_dark.png": "2e04c3a1d50ec1954ba897682ff1cc9a",
"assets/assets/studies/2.0x/rally_card_dark.png": "e606467f65b0f34f4c83d455ffac2bce",
"assets/assets/studies/2.0x/shrine_card_dark.png": "6c2bbb86dd8425719b3c30928df19e61",
"assets/assets/studies/2.0x/rally_card.png": "4fe6a52868ba6912cd4563e9a8f2a924",
"assets/assets/studies/2.0x/crane_card.png": "3f6f1bd09db54e9d982b6165e1c2e8d3",
"assets/assets/studies/2.0x/starter_card.png": "30cdf0b2ca7732e398d7a665408a7b79",
"assets/assets/studies/2.0x/shrine_card.png": "a9751a7d58e984638028a424626233df",
"assets/assets/studies/2.0x/fortnightly_card.png": "1416410008f5fe0a6b794484c1c048cb",
"assets/assets/studies/2.0x/crane_card_dark.png": "f02bade32f0f01ee61dd59088b7b287d",
"assets/assets/studies/starter_card_dark.png": "a932dd23acc569719dd8c185616a10f6",
"assets/assets/studies/4.0x/starter_card_dark.png": "967bddf1d663eb5b61f8bb76ac078345",
"assets/assets/studies/4.0x/fortnightly_card_dark.png": "46ec156c950d82acc7242f315cffb9e7",
"assets/assets/studies/4.0x/rally_card_dark.png": "a46c940d983a766fa273fd304d2be9c6",
"assets/assets/studies/4.0x/shrine_card_dark.png": "dc2bf48bfe5337729faa2dd0aa8d49b6",
"assets/assets/studies/4.0x/rally_card.png": "297db133f71b82cc23406731ed18610f",
"assets/assets/studies/4.0x/crane_card.png": "bb3e7cda52b59adfd44e78a0b50aaf99",
"assets/assets/studies/4.0x/starter_card.png": "e094b4b2e3e5fd2dd8295889b38b3d80",
"assets/assets/studies/4.0x/shrine_card.png": "60fda2e2c7321d050ef7f9220758e9a3",
"assets/assets/studies/4.0x/fortnightly_card.png": "0c85f6d3f306c1292b72c19d4ee6ac51",
"assets/assets/studies/4.0x/crane_card_dark.png": "04f7f3711bb42e990c985a019a4460cc",
"assets/assets/studies/fortnightly_card_dark.png": "67dfc90f097e512e4087d72335ada075",
"assets/assets/studies/rally_card_dark.png": "8d70b68fb769caddb24883dd80099cbb",
"assets/assets/studies/shrine_card_dark.png": "ada2f3b8cd42b20e7af07df06a421f71",
"assets/assets/studies/3.0x/starter_card_dark.png": "f4d70617d04ea858b26ffef1641cf448",
"assets/assets/studies/3.0x/fortnightly_card_dark.png": "f6580228406e1710f04dfc47b485eeff",
"assets/assets/studies/3.0x/rally_card_dark.png": "1ae48eaf77f7282c449774114c92c7af",
"assets/assets/studies/3.0x/shrine_card_dark.png": "ea26dbf70399e680348a725f21485877",
"assets/assets/studies/3.0x/rally_card.png": "618b282a9a1267ba0a100361d2b5fede",
"assets/assets/studies/3.0x/crane_card.png": "57dd3207d3cb41c6eb04a27ee455cdb9",
"assets/assets/studies/3.0x/starter_card.png": "ac23ff971110113a6c16b5c0f4d85300",
"assets/assets/studies/3.0x/shrine_card.png": "f7fd49fa7eef453cc64c765a68aa8ab7",
"assets/assets/studies/3.0x/fortnightly_card.png": "e65f9d91d0b16a540b267c606e5cc839",
"assets/assets/studies/3.0x/crane_card_dark.png": "f0ef806cf340dc579371e17cd44cda91",
"assets/assets/studies/rally_card.png": "b1e7923539e136ce69ee3c7142562569",
"assets/assets/studies/crane_card.png": "47321daf10bcc412b1cb7cf2c405f56b",
"assets/assets/studies/starter_card.png": "31dd2961e915ecb65e00f5c58106e296",
"assets/assets/studies/shrine_card.png": "21aadfc8cbaee684bfd4f2926f5c2028",
"assets/assets/studies/fortnightly_card.png": "5f3157f2e3383907d826e8a410493844",
"assets/assets/studies/crane_card_dark.png": "c1840d475dbbe854327ffae94e53d7e2",
"assets/assets/studies/1.5x/starter_card_dark.png": "08fee1f5f96e1a11267e631b6b1d01e5",
"assets/assets/studies/1.5x/fortnightly_card_dark.png": "234631f1a3d7b1b88b4e04f257e8d484",
"assets/assets/studies/1.5x/rally_card_dark.png": "1ee11fcb7562da587cfab75122893ac8",
"assets/assets/studies/1.5x/shrine_card_dark.png": "64e2f2cf2590bf1f4641e9327547d217",
"assets/assets/studies/1.5x/rally_card.png": "f87d090c96691eba28ffa15fd43ade7a",
"assets/assets/studies/1.5x/crane_card.png": "03f32a4d466f3d2b347dc367659a864b",
"assets/assets/studies/1.5x/starter_card.png": "cb51cb093f91e44beaa111a22f8eaaee",
"assets/assets/studies/1.5x/shrine_card.png": "156eaf17bbe2050a636aa0f72c7e87f6",
"assets/assets/studies/1.5x/fortnightly_card.png": "3e160a0675f36f0601fd81b106181df1",
"assets/assets/studies/1.5x/crane_card_dark.png": "9c8066f07e864dac8c8d93ebb29aedec",
"assets/assets/crane/logo/2.0x/logo.png": "e6049a5a660f22352c76883b100cd631",
"assets/assets/crane/logo/3.0x/logo.png": "72c8ce5f00214011a1c3b13ef34fefc7",
"assets/assets/crane/logo/logo.png": "e6b6d8a584d54124c6f6fa267369a698",
"assets/assets/crane/logo/outline_logo.png": "3ef454f8afb17b9827e9534dee033fad",
"assets/assets/crane/destinations/sleep_3.jpg": "f1e9c4d0822aea1d8aa92bb97d653703",
"assets/assets/crane/destinations/2.0x/sleep_3.jpg": "9c31f0faae857093aadd3c8bc0255098",
"assets/assets/crane/destinations/2.0x/fly_2.jpg": "5b75b998945aadc36f910ed26d59568b",
"assets/assets/crane/destinations/2.0x/sleep_4.jpg": "9f465286593e7335e0e21e43f793b7de",
"assets/assets/crane/destinations/2.0x/sleep_1.jpg": "8bf71336427da2f046fe223e938f1c15",
"assets/assets/crane/destinations/2.0x/eat_8.jpg": "881d3b618dd9c206b734f40dc8e435e3",
"assets/assets/crane/destinations/2.0x/sleep_0.jpg": "74e7381168f62448e2e177613cb4e3c5",
"assets/assets/crane/destinations/2.0x/sleep_7.jpg": "2956665f1148376f02397815e96e2883",
"assets/assets/crane/destinations/2.0x/eat_0.jpg": "bc3e8ff137cc9232ad8a5beeb94a6ed3",
"assets/assets/crane/destinations/2.0x/sleep_10.jpg": "50ca4157a6496e8c39d30828eb9f74a8",
"assets/assets/crane/destinations/2.0x/eat_3.jpg": "50640e81ec76e198e93e71352499841e",
"assets/assets/crane/destinations/2.0x/eat_9.jpg": "8ec39970c2c6ca1510ee837ab18a48f0",
"assets/assets/crane/destinations/2.0x/eat_7.jpg": "62cd0a3b9d22c02433d8a9731700faaf",
"assets/assets/crane/destinations/2.0x/fly_9.jpg": "9c31f0faae857093aadd3c8bc0255098",
"assets/assets/crane/destinations/2.0x/fly_8.jpg": "3d90f76f4336eeef8d83be86797cd5a8",
"assets/assets/crane/destinations/2.0x/sleep_8.jpg": "9f02692153628cccfb01b759f18aea91",
"assets/assets/crane/destinations/2.0x/fly_1.jpg": "65cb1d202d4f3292096da2b416be273f",
"assets/assets/crane/destinations/2.0x/sleep_6.jpg": "b399a4521091354571d4e21054d7bcb2",
"assets/assets/crane/destinations/2.0x/fly_13.jpg": "818381c8af1f8cb8316188363b26bc02",
"assets/assets/crane/destinations/2.0x/sleep_9.jpg": "3083aab84cd04771cf5d10838f06a346",
"assets/assets/crane/destinations/2.0x/eat_1.jpg": "ac6ea0137cd19401a771b8ffae5f09da",
"assets/assets/crane/destinations/2.0x/fly_3.jpg": "f79f753ffda694ddbc0c31e9988897fc",
"assets/assets/crane/destinations/2.0x/sleep_2.jpg": "f79f753ffda694ddbc0c31e9988897fc",
"assets/assets/crane/destinations/2.0x/fly_10.jpg": "50ca4157a6496e8c39d30828eb9f74a8",
"assets/assets/crane/destinations/2.0x/fly_5.jpg": "9f465286593e7335e0e21e43f793b7de",
"assets/assets/crane/destinations/2.0x/fly_0.jpg": "8bf71336427da2f046fe223e938f1c15",
"assets/assets/crane/destinations/2.0x/eat_2.jpg": "d7ed6c8acb3192bb5565bff5160e6546",
"assets/assets/crane/destinations/2.0x/eat_5.jpg": "7126a853407601cdaf74041de30025d0",
"assets/assets/crane/destinations/2.0x/eat_10.jpg": "317c5832a6083aadaf5f105206c0d5a1",
"assets/assets/crane/destinations/2.0x/fly_11.jpg": "3083aab84cd04771cf5d10838f06a346",
"assets/assets/crane/destinations/2.0x/fly_4.jpg": "74e7381168f62448e2e177613cb4e3c5",
"assets/assets/crane/destinations/2.0x/eat_6.jpg": "41acabeee333aee490bbc573361e0131",
"assets/assets/crane/destinations/2.0x/sleep_5.jpg": "65cb1d202d4f3292096da2b416be273f",
"assets/assets/crane/destinations/2.0x/fly_7.jpg": "811aa1c2eabbfadf18d584484e3b1cdf",
"assets/assets/crane/destinations/2.0x/eat_4.jpg": "dd9268534597b12f2e58ea21ad904dcc",
"assets/assets/crane/destinations/2.0x/fly_12.jpg": "b399a4521091354571d4e21054d7bcb2",
"assets/assets/crane/destinations/2.0x/sleep_11.jpg": "a26adc5a640fc5877f0b737e8b196157",
"assets/assets/crane/destinations/2.0x/fly_6.jpg": "e0f055b54fd39f8cbb2af2ff4e9c2dce",
"assets/assets/crane/destinations/fly_2.jpg": "6414b0a1821a01796abc0abceddbdab6",
"assets/assets/crane/destinations/sleep_4.jpg": "fff88f0a78b424ccad05a3dea0063cb0",
"assets/assets/crane/destinations/sleep_1.jpg": "d56167f8a445cd9de51b9771e838252b",
"assets/assets/crane/destinations/3.0x/sleep_3.jpg": "a91f0654c401cc4082bb2ec3ccaf4ba8",
"assets/assets/crane/destinations/3.0x/fly_2.jpg": "8a79a3be03b48568c40a6231769093c7",
"assets/assets/crane/destinations/3.0x/sleep_4.jpg": "cdb06023fae0ce0278444b704f7de8ca",
"assets/assets/crane/destinations/3.0x/sleep_1.jpg": "cc9b18c94ff7641929c8affd6f054e73",
"assets/assets/crane/destinations/3.0x/eat_8.jpg": "5fb84f72b7f939ea09a9935f54604987",
"assets/assets/crane/destinations/3.0x/sleep_0.jpg": "4152e078ea77aaa46527702bf7712f6f",
"assets/assets/crane/destinations/3.0x/sleep_7.jpg": "44748959a0e75c273615eade2ee68577",
"assets/assets/crane/destinations/3.0x/eat_0.jpg": "f18e0b1800e48e38b7d9300de1ceb1d7",
"assets/assets/crane/destinations/3.0x/sleep_10.jpg": "6276cf2c2067dc675afda3faf7be806e",
"assets/assets/crane/destinations/3.0x/eat_3.jpg": "f330d4edb966486ab0fd187ece41921b",
"assets/assets/crane/destinations/3.0x/eat_9.jpg": "0ca0fe81c444aa5f50ef8745bb3e7d44",
"assets/assets/crane/destinations/3.0x/eat_7.jpg": "c73fb3b9041777b4d28a67a3c8df85e5",
"assets/assets/crane/destinations/3.0x/fly_9.jpg": "a91f0654c401cc4082bb2ec3ccaf4ba8",
"assets/assets/crane/destinations/3.0x/fly_8.jpg": "5532b7e5a2cd573f988c226a848b8e09",
"assets/assets/crane/destinations/3.0x/sleep_8.jpg": "bdf0d0648067e3e775165b58105a7b1a",
"assets/assets/crane/destinations/3.0x/fly_1.jpg": "13bdb0fc909c34ff206b2b123261086c",
"assets/assets/crane/destinations/3.0x/sleep_6.jpg": "775b5ddf1e076e98304a213935931ce1",
"assets/assets/crane/destinations/3.0x/fly_13.jpg": "73e440e9e3db7722d798659663108866",
"assets/assets/crane/destinations/3.0x/sleep_9.jpg": "23d5ef54d3e8b08d4b54fbf369f41c5b",
"assets/assets/crane/destinations/3.0x/eat_1.jpg": "b9a722218fdb508f305fd2116aaf6526",
"assets/assets/crane/destinations/3.0x/fly_3.jpg": "8f32543bf862f33aed04374ad66f0dcf",
"assets/assets/crane/destinations/3.0x/sleep_2.jpg": "8f32543bf862f33aed04374ad66f0dcf",
"assets/assets/crane/destinations/3.0x/fly_10.jpg": "6276cf2c2067dc675afda3faf7be806e",
"assets/assets/crane/destinations/3.0x/fly_5.jpg": "cdb06023fae0ce0278444b704f7de8ca",
"assets/assets/crane/destinations/3.0x/fly_0.jpg": "cc9b18c94ff7641929c8affd6f054e73",
"assets/assets/crane/destinations/3.0x/eat_2.jpg": "76409ce14202cceb28db12289ee20c8a",
"assets/assets/crane/destinations/3.0x/eat_5.jpg": "c5878100f33acbf50b37f0561a9a9ac2",
"assets/assets/crane/destinations/3.0x/eat_10.jpg": "ccdc991735559d2989513159000128ce",
"assets/assets/crane/destinations/3.0x/fly_11.jpg": "23d5ef54d3e8b08d4b54fbf369f41c5b",
"assets/assets/crane/destinations/3.0x/fly_4.jpg": "4152e078ea77aaa46527702bf7712f6f",
"assets/assets/crane/destinations/3.0x/eat_6.jpg": "3f411bf34668c00b6da532db421f0675",
"assets/assets/crane/destinations/3.0x/sleep_5.jpg": "13bdb0fc909c34ff206b2b123261086c",
"assets/assets/crane/destinations/3.0x/fly_7.jpg": "c8e808a46e31311e65f874cb6a70c97f",
"assets/assets/crane/destinations/3.0x/eat_4.jpg": "50b6f4d63694d09dadd4b21c8a6d7d5c",
"assets/assets/crane/destinations/3.0x/fly_12.jpg": "775b5ddf1e076e98304a213935931ce1",
"assets/assets/crane/destinations/3.0x/sleep_11.jpg": "138642892a6b54366f7a5f89f80e5e64",
"assets/assets/crane/destinations/3.0x/fly_6.jpg": "3838277938923593d1e4339a86d23227",
"assets/assets/crane/destinations/eat_8.jpg": "9a36bc9b3b505d647c258e772d5363d4",
"assets/assets/crane/destinations/sleep_0.jpg": "378e35714b32ffcc4f642071a222b812",
"assets/assets/crane/destinations/sleep_7.jpg": "bb11e9110fec5a41af039066d2ace27c",
"assets/assets/crane/destinations/eat_0.jpg": "3309670d2f980a8eaffc45f08d4e7065",
"assets/assets/crane/destinations/sleep_10.jpg": "0544ea8fa9a095dcd1e304be1252306a",
"assets/assets/crane/destinations/eat_3.jpg": "510af87f255716825852f13609093628",
"assets/assets/crane/destinations/eat_9.jpg": "aede6f6b371e24e716a7caa522a5495b",
"assets/assets/crane/destinations/eat_7.jpg": "b5167eebbe1f74cef8b3b53c5eadd2aa",
"assets/assets/crane/destinations/fly_9.jpg": "f1e9c4d0822aea1d8aa92bb97d653703",
"assets/assets/crane/destinations/fly_8.jpg": "55628fc5e09b99a535a259869959b752",
"assets/assets/crane/destinations/sleep_8.jpg": "5fb66235728e8b665d23a90a05353b3e",
"assets/assets/crane/destinations/fly_1.jpg": "68fd0057580188cab7b29a0b8f22c7a8",
"assets/assets/crane/destinations/sleep_6.jpg": "afb1dce70c70082a93f76f0795fa2327",
"assets/assets/crane/destinations/fly_13.jpg": "a7e66fec1d4c821fa4f6578b7585a733",
"assets/assets/crane/destinations/sleep_9.jpg": "3eb7c8525c4951d50926a7fffb181470",
"assets/assets/crane/destinations/eat_1.jpg": "f952241d27f5bf43abc55de313df253c",
"assets/assets/crane/destinations/fly_3.jpg": "5cc12599cd942453cc9f17a2869c811f",
"assets/assets/crane/destinations/sleep_2.jpg": "5cc12599cd942453cc9f17a2869c811f",
"assets/assets/crane/destinations/fly_10.jpg": "0544ea8fa9a095dcd1e304be1252306a",
"assets/assets/crane/destinations/fly_5.jpg": "fff88f0a78b424ccad05a3dea0063cb0",
"assets/assets/crane/destinations/fly_0.jpg": "d56167f8a445cd9de51b9771e838252b",
"assets/assets/crane/destinations/eat_2.jpg": "48a320ade835002f3e5e5664c0ddd698",
"assets/assets/crane/destinations/eat_5.jpg": "4110408d34c2ddbba67a1c12b3a407fd",
"assets/assets/crane/destinations/eat_10.jpg": "b2c6d2e676095bac1da20ea3bc8b8d71",
"assets/assets/crane/destinations/fly_11.jpg": "3eb7c8525c4951d50926a7fffb181470",
"assets/assets/crane/destinations/fly_4.jpg": "378e35714b32ffcc4f642071a222b812",
"assets/assets/crane/destinations/eat_6.jpg": "ea5e0256e735ce9e7c4a7a24f6583551",
"assets/assets/crane/destinations/sleep_5.jpg": "68fd0057580188cab7b29a0b8f22c7a8",
"assets/assets/crane/destinations/fly_7.jpg": "2a38c7fb298d52a44dd706c66319315c",
"assets/assets/crane/destinations/eat_4.jpg": "5990dd465051c2bfb7237db9012a0ea1",
"assets/assets/crane/destinations/fly_12.jpg": "afb1dce70c70082a93f76f0795fa2327",
"assets/assets/crane/destinations/sleep_11.jpg": "1a883dcd070a24d286b041916c9aabc7",
"assets/assets/crane/destinations/fly_6.jpg": "150a9f2b2b2cadcea55fa9530cb1cbf7",
"assets/assets/demos/2.0x/bottom_navigation_background.png": "391fffc7c54ead31d7186ab241da5f14",
"assets/assets/demos/4.0x/bottom_navigation_background.png": "8b08b273d8de61b37661bb5ed367e0e6",
"assets/assets/demos/3.0x/bottom_navigation_background.png": "8b11d7c696538f5a7ffe4d5a67d39cc4",
"assets/assets/demos/bottom_navigation_background.png": "fa50b8194a4f36911f1cab1769e66ba8",
"assets/assets/demos/1.5x/bottom_navigation_background.png": "611fe4dbd04c908ebd6ad62eef814c9e",
"assets/FontManifest.json": "d5af59102ee1797246d45a820bf2e70d",
"assets/fonts/Cousine-Bold.ttf": "06dae6a1a3247bd76125cfe3b3480557",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Cousine-Italic.ttf": "177a3d2157da07498e805683e8cdaa8d",
"assets/fonts/GalleryIcons.ttf": "7d45e7df60cb4a98b595018c74614367",
"assets/fonts/Cousine-BoldItalic.ttf": "1038b5579146b28e9e4dc98c8fc5d1d9",
"assets/fonts/google_fonts/Merriweather-Light.ttf": "f5b1034170c063a1fd328c26d4e62055",
"assets/fonts/google_fonts/Rubik-Regular.ttf": "b3d0902b533ff4c4f1698a2f96ddabab",
"assets/fonts/google_fonts/Oswald-SemiBold.ttf": "2ee37ae7584a4656fd16062217b39cae",
"assets/fonts/google_fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/fonts/google_fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/google_fonts/Oswald-Medium.ttf": "c76a8d044f123462ba5c08ea47b56e21",
"assets/fonts/google_fonts/Eczar-SemiBold.ttf": "7d2b9b43ddc45f11f9cfddd5a17dcbd2",
"assets/fonts/google_fonts/LibreFranklin-Regular.ttf": "fd45242686ced3ebb9b2c07164e3ae56",
"assets/fonts/google_fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/google_fonts/Merriweather-Regular.ttf": "fa69aefa0e27b92850101f262338396f",
"assets/fonts/google_fonts/Rubik-Bold.ttf": "9a6fb6f5cd3aa4ab1adaaab1f693f266",
"assets/fonts/google_fonts/LibreFranklin-Bold.ttf": "07d61ca783b27a81898f76a0939a69b7",
"assets/fonts/google_fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/fonts/google_fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/google_fonts/LibreFranklin-ExtraBold.ttf": "0ec42c6b4e1d3eda4e15c0db07ce1c79",
"assets/fonts/google_fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/fonts/google_fonts/LibreFranklin-SemiBold.ttf": "30c3b52abc21bda402fe1c3b9a2e46f8",
"assets/fonts/google_fonts/Eczar-Regular.ttf": "c7ea37b1332eb3de9f29eaaf48152516",
"assets/fonts/google_fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/fonts/google_fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/fonts/google_fonts/Rubik-Medium.ttf": "c87313aa86b7caa31a9a0accaa584970",
"assets/fonts/google_fonts/Merriweather-BoldItalic.ttf": "d431a6591b2110c4739beb6255511bfb",
"assets/fonts/google_fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/fonts/google_fonts/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"assets/fonts/google_fonts/LibreFranklin-Medium.ttf": "d795b579c48a69ac8f5944a1a5c32bd4",
"assets/fonts/google_fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Cousine-Regular.ttf": "64a889644e439ac4806c8e41bc9d1c83",
"assets/AssetManifest.json": "952f58526803fe29aa5fd09c9be18d80",
"assets/LICENSE": "806a8a9bef9cbb90683f6c3a31c93c8f",
"main.dart.js": "eb134c8616d40c8e90f8497eef4846bc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
