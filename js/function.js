"use strict";
function menu_button_contacts() {
    sort.classList.remove("sort_active");
    sort.classList.add("sort_hidden"); 
    hero.classList.add("hero_hidden");
    hero.classList.remove("hero_active");
    hero_button.classList.remove("hero_button_active");
    hero_button.classList.add("hero_button_hidden");
    content.classList.add("content_large");
    content.classList.remove("content_mid");
    sort_container.classList.remove("sort_container_active");
    sort_container.classList.add("sort_container_hidden");
    news.classList.add("news_hidden");
    card.classList.add("card_hidden");
    about.classList.add("about_hidden");
    contact.classList.remove("contact_hidden");
}
function menu_button_about() {
    sort.classList.remove("sort_active");
    sort.classList.add("sort_hidden");  
    hero.classList.add("hero_hidden");
    hero.classList.remove("hero_active"); 
    hero_button.classList.remove("hero_button_active");
    hero_button.classList.add("hero_button_hidden");
    content.classList.remove("content_mid");
    content.classList.add("content_large");
    sort_container.classList.remove("sort_container_active");
    sort_container.classList.add("sort_container_hidden");
    news.classList.add("news_hidden");
    card.classList.add("card_hidden");
    about.classList.remove("about_hidden");
    contact.classList.add("contact_hidden");
}
function menu_button_news() {
    sort.classList.remove("sort_active");
    sort.classList.add("sort_hidden"); 
    hero.classList.add("hero_hidden");
    hero.classList.remove("hero_active");
    hero_button.classList.remove("hero_button_active");
    hero_button.classList.add("hero_button_hidden");
    content.classList.remove("content_mid");
    content.classList.add("content_large");
    sort_container.classList.remove("sort_container_active");
    sort_container.classList.add("sort_container_hidden");
    news.classList.remove("news_hidden");
    card.classList.add("card_hidden");
    about.classList.add("about_hidden");
    contact.classList.add("contact_hidden");
}
function sort_active() {
   
   
    sort.classList.add("sort_active");
    sort.classList.remove("sort_hidden");
    hero.classList.remove("hero_active");
    hero.classList.add("hero_hidden");
    hero_button.classList.remove("hero_button_active");
    hero_button.classList.add("hero_button_hidden");
    content.classList.add("content_mid");
    content.classList.remove("content_large");
    sort_container.classList.add("sort_container_active");
    sort_container.classList.remove("sort_container_hidden"); 
    news.classList.add("news_hidden");
    card.classList.remove("card_hidden");
    about.classList.add("about_hidden");
    contact.classList.add("contact_hidden");
    language_show(showData,language);
}
function homepage() {
    sort.classList.remove("sort_active");
    sort.classList.add("sort_hidden"); 
    hero.classList.remove("hero_hidden");
    hero.classList.add("hero_active");
    hero_button.classList.add("hero_button_active")
    hero_button.classList.remove("hero_button_hidden");
    content.classList.remove("content_mid");
    content.classList.add("content_large");
    sort_container.classList.remove("sort_container_active");
    sort_container.classList.add("sort_container_hidden");
    news.classList.remove("news_hidden");
    card.classList.add("card_hidden");
    about.classList.add("about_hidden");
    contact.classList.add("contact_hidden");
}
