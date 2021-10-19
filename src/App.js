import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  StreetFood: [
    {
      name: "Chache Di Hatti",
      description:
        "Chole Bhature is probably one of the most popular breakfasts for us Delhiites! Located in the traditional streets of Kamla Nagar Market, this place is a foodies’ heaven and is often crowded by excited foodies. You’ve gotta try yummies like Aloo Bhature or even good old Plain Bhature - tempting, right?",
      where: " Location:-Kamla Nagar"
    },
    {
      name: " Baba Nagpal Corner",
      description:
        "Baba Nagpal Corner is yet another go-to place in the city if you’re craving for some piping-hot Chole Bhature. But did you know they serve a variety of other dishes as well?! Yep, they serve a number of other dishes like Palak Paneer Rice, Dal Samosa, Rajma Rice, Rajma Chawal and LOADS of more yummies. ",
      where:
        "Location:-Baba Nagpal Corner - 7/25, Old Double Storey, Gupta Market, Lajpat Nagar IV"
    }
  ],

  Restaurants: [
    {
      name: "Gulati",
      description:
        "Ask a Dilliwala about a family restaurant serving best north Indian delicacies and Gulati would definitely be one option. Be it the kebabs or rich curries, the menu is expansive and the vibe is just the subtle one you need on those occasional dinner nights with your family.",
      where: "6, Pandara Road Market, New Delhi"
    },
    {
      name: "Bukhara",
      description:
        "If you are a passionate foodie, there is no chance you haven't heard about the legendary Dal Bukhara. Established in 1978, Bukhara at ITC Maurya has earned the place of Delhi's landmark by serving the same great taste with an impeccable service. Not only has it served and impressed notable personalities from across the world, it has consistently won prestigious awards.",
      where: " ITC Maurya, Chanakyapuri, New Delhi"
    }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("StreetFood");
  function foodClickHandler(item) {
    setFood(item);
  }
  return (
    <div className="App">
      <h1>Delicious Food Places to Try in Delhi </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Whether it’s the spicy and zesty golgappas or the butter-dripping
        paranthas, there’s just no denying that Delhi loves its food! Here’s
        your guide to the best places to eat it at!{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((item) => (
          <button className="btn" onClick={() => foodClickHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedFood].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div className="block">
                <div className="foodname" style={{ fontSize: "larger" }}>
                  {" "}
                  {item.name}{" "}
                </div>
                <div className="description" style={{ fontSize: "smaller" }}>
                  {" "}
                  {item.description}{" "}
                </div>
                <div className="loacation" style={{ fontSize: "medium" }}>
                  {" "}
                  {item.where}{" "}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
