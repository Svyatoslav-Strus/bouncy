document.addEventListener('DOMContentLoaded', function () {

    var grid = document.getElementsByClassName('portfolio__grid')[0];
    var gridPrint = grid.getElementsByClassName('portfolio__grid--print')[0];
    var gridBranding = grid.getElementsByClassName('portfolio__grid--branding')[0];
    var gridWeb = grid.getElementsByClassName('portfolio__grid--web')[0];
    var gridHtml = grid.getElementsByClassName('portfolio__grid--html')[0];

    var navbar = document.getElementsByClassName('portfolio__navbar')[0];
    var tabs = navbar.getElementsByTagName('li');

    buildGrid("all");

    function buildGrid(tab){

        gridPrint.innerHTML = '';
        gridBranding.innerHTML = '';
        gridWeb.innerHTML = '';
        gridHtml.innerHTML = '';

        switch (tab) {
            case "all":
                var gridItem1_1 = document.createElement('div');
                gridItem1_1.setAttribute('class', "portfolio__grid--item1-1");
                gridPrint.appendChild(gridItem1_1);
                var gridItem1_2 = document.createElement('div');
                gridItem1_2.setAttribute('class', "portfolio__grid--item1-2");
                gridPrint.appendChild(gridItem1_2);
                var gridItem1_3 = document.createElement('div');
                gridItem1_3.setAttribute('class', "portfolio__grid--item1-3");
                gridPrint.appendChild(gridItem1_3);
                var gridItem2_1 = document.createElement('div');
                gridItem2_1.setAttribute('class', "portfolio__grid--item2-1");
                gridBranding.appendChild(gridItem2_1);
                var gridItem2_2 = document.createElement('div');
                gridItem2_2.setAttribute('class', "portfolio__grid--item2-2");
                gridBranding.appendChild(gridItem2_2);
                var gridItem2_3 = document.createElement('div');
                gridItem2_3.setAttribute('class', "portfolio__grid--item2-3");
                gridBranding.appendChild(gridItem2_3);
                var gridItem3_1 = document.createElement('div');
                gridItem3_1.setAttribute('class', "portfolio__grid--item3-1");
                gridWeb.appendChild(gridItem3_1);
                var gridItem3_2 = document.createElement('div');
                gridItem3_2.setAttribute('class', "portfolio__grid--item3-2");
                gridWeb.appendChild(gridItem3_2);
                var gridItem3_3 = document.createElement('div');
                gridItem3_3.setAttribute('class', "portfolio__grid--item3-3");
                gridWeb.appendChild(gridItem3_3);
                var gridItem4_1 = document.createElement('div');
                gridItem4_1.setAttribute('class', "portfolio__grid--item4-1");
                gridHtml.appendChild(gridItem4_1);
                var gridItem4_2 = document.createElement('div');
                gridItem4_2.setAttribute('class', "portfolio__grid--item4-2");
                gridHtml.appendChild(gridItem4_2);
                var gridItem4_3 = document.createElement('div');
                gridItem4_3.setAttribute('class', "portfolio__grid--item4-3");
                gridHtml.appendChild(gridItem4_3);
                break;

            case "print":
                var gridItem1_1 = document.createElement('div');
                gridItem1_1.setAttribute('class', "portfolio__grid--item1-1");
                gridPrint.appendChild(gridItem1_1);
                var gridItem1_2 = document.createElement('div');
                gridItem1_2.setAttribute('class', "portfolio__grid--item1-2");
                gridPrint.appendChild(gridItem1_2);
                var gridItem1_3 = document.createElement('div');
                gridItem1_3.setAttribute('class', "portfolio__grid--item1-3");
                gridPrint.appendChild(gridItem1_3);
                break;

            case "branding":
                var gridItem2_1 = document.createElement('div');
                gridItem2_1.setAttribute('class', "portfolio__grid--item2-1");
                gridBranding.appendChild(gridItem2_1);
                var gridItem2_2 = document.createElement('div');
                gridItem2_2.setAttribute('class', "portfolio__grid--item2-2");
                gridBranding.appendChild(gridItem2_2);
                var gridItem2_3 = document.createElement('div');
                gridItem2_3.setAttribute('class', "portfolio__grid--item2-3");
                gridBranding.appendChild(gridItem2_3);
                break;

            case "web":
                var gridItem3_1 = document.createElement('div');
                gridItem3_1.setAttribute('class', "portfolio__grid--item3-1");
                gridWeb.appendChild(gridItem3_1);
                var gridItem3_2 = document.createElement('div');
                gridItem3_2.setAttribute('class', "portfolio__grid--item3-2");
                gridWeb.appendChild(gridItem3_2);
                var gridItem3_3 = document.createElement('div');
                gridItem3_3.setAttribute('class', "portfolio__grid--item3-3");
                gridWeb.appendChild(gridItem3_3);
                break;

            case "html":
                var gridItem4_1 = document.createElement('div');
                gridItem4_1.setAttribute('class', "portfolio__grid--item4-1");
                gridHtml.appendChild(gridItem4_1);
                var gridItem4_2 = document.createElement('div');
                gridItem4_2.setAttribute('class', "portfolio__grid--item4-2");
                gridHtml.appendChild(gridItem4_2);
                var gridItem4_3 = document.createElement('div');
                gridItem4_3.setAttribute('class', "portfolio__grid--item4-3");
                gridHtml.appendChild(gridItem4_3);
                break;

            default: break;
        }
    }

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            var tab = this.getAttribute('class').slice(19);
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.border = "none";
            }
            this.style.cssText =
                "                    border-bottom: 2px solid rgb(25,189,154);\n" +
                "                    border-image: linear-gradient(to right,\n" +
                "                            rgba(25,189,154,0) 25%,\n" +
                "                            rgba(25,189,154,1) 25%,\n" +
                "                            rgba(25,189,154,1) 75%,\n" +
                "                            rgba(25,189,154,0) 75%);\n" +
                "                    border-image-slice: 1;";
            buildGrid(tab);
        })
    }
});