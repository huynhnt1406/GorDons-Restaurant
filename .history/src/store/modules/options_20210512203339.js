const state = {
    options:[
        {
            id:1,
            action:"Book now",
            headline:"KENSINGTON HIGH STREET",
            title:"STREET BURGER KENSINGTON HIGH STREET",
            opentime:"Opens on 17 May - see you there !",
            lineInside:'STREET BURGER',
            smallLine:'GORDON RAMSAY',
            imgUrl:'https://www.joyousapron.com/wp-content/uploads/2018/05/IMG_3093-2.jpg'
        },
        {
            id:2,
            action:"Find out more",
            headline:"BREAD STREET KITCHEN - SOUTHWARK",
            title:"BREAD STREET KITCHEN SOUTHWARK",
            opentime:"Opens on 17 May!",
            lineInside:'BREAD STREET',
            smallLine:'KITCHEN',
            imgUrl:'https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage48036050-50-BSK-Southwark-Hero.jpg'
        },
        {
            id:3,
            action:"Book now",
            headline:"ICONIC LOCATION. ICONIC PIZZA",
            title:"STREET PIZZA BATTERSEA",
            opentime:"",
            lineInside:'STREET PIZZA',
            smallLine:'GORDON RAMSAY',
            imgUrl:'https://i2-prod.mylondon.news/incoming/article20302988.ece/ALTERNATES/s615b/0_WB01042021GORDONRAMSEY2.jpg'
        },
    ]
}
const getters = {
    allRecipes : state => state.options
}

export default{
    state,getters
}