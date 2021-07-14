

import {combineReducers} from "redux";


const initialdisplayadvatges = [
  {
    link: "https://digidarts.com/landing/agrocorp/assets/img/icon-01.png",
    title: "Custom Land Sizes",
    desciption:
      "Not everyone can buy land in acres. We pay heed to your needs by allowing you to purchase custom sizes of your desired sites.",
  },
  {
    link: "https://digidarts.com/landing/agrocorp/assets/img/icon-02.png",
    title: "An Investment that Pays",
    desciption:
      "Apart from catering to your short and long term investment goals, owning a farm site also acts as an valuable asset to your family and future generations.",
  },
  {
    link: "https://digidarts.com/landing/agrocorp/assets/img/icon-03.png",
    title: "Plantation Management",
    desciption:
      "Sit back and relax because we will handle all the plantation needs of your farm - we will care for it, nurture it, and help it blossom.",
  },
];

function displayadvantagereducer(initialstate=initialdisplayadvatges,action)
{
    if(action.type=="display_advantages")
    {
        return[...initialstate];              //currently nothing to add in this array but returning a new array so our component rerenders
    }
    return  initialdisplayadvatges;
}

export default combineReducers({
    displayadvantagereducer
})


