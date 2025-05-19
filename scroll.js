// função com condição que leva a posição do scrol até o grupo da página que está associado ao botão

function scrollElement(element){
    let pageGroup;
    switch(element) {
        case 1:
            pageGroup = document.querySelector(".initial_info");
            pageGroup.scrollIntoView({block:'center', behavior:'smooth'});
            break;
        case 2:
            pageGroup = document.querySelector(".about_me");
            pageGroup.scrollIntoView({block:'nearest', behavior:'smooth'});
            break;
        case 3:
            pageGroup = document.querySelector(".grad");
            pageGroup.scrollIntoView({block:'center', behavior:'smooth'});
            break;
        case 4:
            pageGroup = document.querySelector(".proj");
            pageGroup.scrollIntoView({block:'center', behavior:'smooth'});
            break;
        case 5:
            pageGroup = document.querySelector(".contacts");
            pageGroup.scrollIntoView({block:'center', behavior:'smooth'});
            break;
    }
}