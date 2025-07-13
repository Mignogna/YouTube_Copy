const videoList = [
    {
        videoImg:"./assets/thumb1.png",
        videoTitle: "Geração Tech Unimed - BH - Ciência de Dados",
        videoName:"DigitalInnovationOne",
        numberViews:"2,1 mil visualizações",
        date:"Transmitido há 2 dias",
    },
    {
         videoImg:"./assets/thumb2.png",
        videoTitle: "Scrum Talks",
        videoName:"DigitalInnovationOne",
        numberViews:"1,6 mil visualizações",
        date:"Transmitido há 3 dias",
    },
      {
         videoImg:"./assets/thumb3.png",
        videoTitle: "Machine Learning Avançado - Fast Track",
        videoName:"DigitalInnovationOne",
        numberViews:"1,7 mil visualizações",
        date:"Transmitido há 4 dias",
    },
      {
         videoImg:"./assets/thumb4.png",
        videoTitle: "Global Skills #2 - Project Planning",
        videoName:"DigitalInnovationOne",
        numberViews:"971 visualizações",
        date:"Transmitido há 5 dias",
    },
      {
         videoImg:"./assets/thumb5.png",
        videoTitle: "Como aprender a programar Python do ZERO",
        videoName:"DigitalInnovationOne",
        numberViews:"711 visualizações",
        date:"Transmitido há 6 dias",
    },
        {
        videoImg:"./assets/thumb1.png",
        videoTitle: "Geração Tech Unimed - BH - Ciência de Dados",
        videoName:"DigitalInnovationOne",
        numberViews:"2,1 mil visualizações",
        date:"Transmitido há 2 dias",
    },
    {
         videoImg:"./assets/thumb2.png",
        videoTitle: "Scrum Talks",
        videoName:"DigitalInnovationOne",
        numberViews:"1,6 mil visualizações",
        date:"Transmitido há 3 dias",
    },
      {
         videoImg:"./assets/thumb3.png",
        videoTitle: "Machine Learning Avançado - Fast Track",
        videoName:"DigitalInnovationOne",
        numberViews:"1,7 mil visualizações",
        date:"Transmitido há 4 dias",
    },
      {
         videoImg:"./assets/thumb4.png",
        videoTitle: "Global Skills #2 - Project Planning",
        videoName:"DigitalInnovationOne",
        numberViews:"971 visualizações",
        date:"Transmitido há 5 dias",
    },
      {
         videoImg:"./assets/thumb5.png",
        videoTitle: "Como aprender a programar Python do ZERO",
        videoName:"DigitalInnovationOne",
        numberViews:"711 visualizações",
        date:"Transmitido há 6 dias",
    },   
]

const videoContainer = document.getElementById("video-container")

function renderVideoItemsEfficiently(items) {
    if (!videoContainer) {
        console.error("Element with ID 'video-container' not found.");
        return;
    }

    const videoCards = items.map(item => {
        return `
           <div class="video-list">
                <img src="${item.videoImg}" alt="video list">
                <div class="video-list-text">
                    <h5>${item.videoTitle}</h5>
                    <p class="channel-list">${item.videoName}</p>
                    <p>${item.numberViews}</p>
                    <p>${item.date}</p>
                </div>
            </div>`;
    });

 
    videoContainer.innerHTML = videoCards.join('');
}

renderVideoItemsEfficiently(videoList);

