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
            imgUrl:'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg'
        },
        {
            id:2,
            action:"Find out more",
            headline:"BREAD STREET KITCHEN - SOUTHWARK",
            title:"BREAD STREET KITCHEN SOUTHWARK",
            opentime:"Opens on 17 May!",
            lineInside:'BREAD STREET',
            smallLine:'KITCHEN',
            imgUrl:'https://www.marinabaysands.com/content/dam/revamp/entertainment/events/On-Your-Feet/bread-street-kitchen-t.jpg'
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