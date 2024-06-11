import { BadmintonObj, GolfObj, SnowboardObj, RunningObj, AboutObj, TennisObj } from "../data/nav-data.js";

const dataSources = {
    'badminton-obj': BadmintonObj,
    'tennis-obj': TennisObj,
    'golf-obj': GolfObj,
    'running-obj': RunningObj,
    'snowboarding-obj': SnowboardObj,
    'about-obj': AboutObj
};

const CreateCard = (cards, gridStyle) => {
    
    return `
    <div class="grid ${gridStyle} max-w-[1600px] items-center flex-1">
        ${cards.map((card) => {
            return `
            <div class="flex flex-col items-center justify-center max-w-[213px] ">
                <a id="hoverLink" href="${card.link}" class="bg-[#F7F8FA]"><img src="${card.img}" alt=""></a>
                <a href="${card.link}" class="text-[16px] text-black tracking-[1.5px] pt-2">${card.title}</a>
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
