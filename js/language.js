"use strict";
function language(siteData,sortData) {
    var language=document.getElementById("language").value;
    language_main(siteData,language);
    language_sort(sortData,language);
}

function language_main(siteData,language) {
    document.getElementById("menu_button_news").innerText=siteData.menu_button_news[language];
    document.getElementById("menu_button_about").innerText=siteData.menu_button_about[language];
    document.getElementById("menu_button_contacts").innerText=siteData.menu_button_contacts[language];
    document.getElementById("hero_button_p").innerText=siteData.hero_button[language];
    document.getElementById("news_h1").innerText=siteData.news_h1[language];
    document.getElementById("about_h1").innerText=siteData.about_h1[language];
    document.getElementById("about_conent").innerText=siteData.about_conent[language];
    document.getElementById("contact_h1").innerText=siteData.contact_h1[language];
    document.getElementById("contact_content").innerText=siteData.contact_content[language];
}
function language_sort(sortData,language){
    document.getElementById("search_input").innerText=sortData.search_input[language];
    document.getElementById("river_select_0").innerText=sortData.river_select_0[language];
    document.getElementById("river_select_1").innerText=sortData.river_select_1[language];
    document.getElementById("river_select_2").innerText=sortData.river_select_2[language];
    document.getElementById("river_select_3").innerText=sortData.river_select_3[language];
    document.getElementById("river_select_4").innerText=sortData.river_select_4[language];
    document.getElementById("river_select_5").innerText=sortData.river_select_5[language];
    

}