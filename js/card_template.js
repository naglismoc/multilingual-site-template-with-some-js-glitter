function see_more(showData) {
    var language=document.getElementById("language").value;
    card_bottom.classList.toggle("card_bottom_active");
    card_bottom.classList.toggle("card_bottom_hidden");
    card_bottom_content.classList.toggle("card_bottom_content_hidden");
    card_bottom_content.classList.toggle("card_bottom_content_active");
//prideti hidden prie sort pakeitimu, prideti mygtuka suskleisti viska. 
//ar toggle nekeis antros kortos paspaudimu? tipo kad visos flipinsis.
// varijantas jei taip tai [i]toji korta daro dalykus.todo list'e rode.
if (card_bottom.classList.contains("card_bottom_active")) {
    console.log(document.getElementById("see_more_btn").innerText);
    document.getElementById("see_more_btn").innerText=showData.see_more_btn2[language];
}
else{
    document.getElementById("see_more_btn").innerText=showData.see_more_btn[language];
    document.getElementById("card_reach_out").innerHTML=`
    <div id="card_reach_out_btn">susisiekti</div> `;
}
}
function card_reach_out_function() {
    document.getElementById("card_reach_out").innerHTML=
    `<div id="phone_number">Tel nr.:+37063500626</div>
    <div id="address">Adresas:</div>
   <div id="url">Internetinis puslapis:</div>`;
}   