import { badmintonObj, golfObj, snowboardObj, runningObj, aboutObj, tennisObj } from "../data/nav-data.js";

const dataSources = {
    'badminton-obj': badmintonObj,
    'tennis-obj': tennisObj,
    'golf-obj': golfObj,
    'running-obj': runningObj,
    'snowboarding-obj': snowboardObj,
    'about-obj': aboutObj
};

const CreateCard = (cards, gridStyle) => {
    
    return `
    <div class="grid ${gridStyle} gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${cards.map((card) => {
            return `
            <div class="flex flex-col items-center justify-center w-[213px]">
                <a id="hoverLink" href="${card.link}"><img src="${card.img}" alt=""></a>
                <p class="font-semibold text-[15px] text-black">${card.title}</p>
            </div>
            `;
        }).join("")}
     </div>
    `;
};

class SlideShow extends HTMLElement {
    connectedCallback() {
        const gridStyle = this.getAttribute('grid-style')
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || [];
        this.innerHTML = CreateCard(data, gridStyle);
    }
}

customElements.define('card-slide', SlideShow);
