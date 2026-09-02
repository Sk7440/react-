import { useContext } from "react";
import { Link } from "react-router-dom";
import { homeContext } from "./ContextApi";

function Hero() {
  const data = [
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/sandwich.jpg",
      name: "The Perfect Sandwich, A Real NYC Classic",
      paragraph:
        " Lore. Magni fugiat, oft enim excepturi. Ipsam quibusdam animi ratione consectetur placeat consequatur ipsa ab.",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/w3images/steak.jpg",
      name: "Let Me Tell You About This Steak",
      paragraph:
        " Lois provident alia animi ratione consectetur placeat consequatur ipsa ab.",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/w3images/cherries.jpg",
      name: "Cherries, interrupted",
      paragraph:
        " Loreent alias dicta, temporibus nemo, qnsectetur placeat consequatur ipsa ab.",
    },
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/wine.jpg",
      name: "Once Again, Robust Wine and Vegetable Pasta",
      paragraph:
        " Lorem ipsum dolor sit omni Ipsam quibusdam animi ratione consectetur placeat consequatur ipsa ab.",
    },
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/popsicle.jpg",
      name: "All I Need Is a Popsicle",
      paragraph:
        " Lorem ipsum dmnis pro consequatur ipsa ab.",
    },
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/salmon.jpg",
      name: "Salmon For Your Skin",
      paragraph:
        " Lore adipisicing elit. Maoribus nemo, quaeratmi ratione consectetur placeat consequatur ipsa ab.",
    },
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/sandwich.jpg",
      name: "The Perfect Sandwich, A Real Classic",
      paragraph:
        " Lorem ipsum dolor sia ratione omnisuaerat enim excepturi. Ipsam quibusdam animi ratione consectetur placeat consequatur ipsa ab.",
    },
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/croissant.jpg",
      name: "Le French",
      paragraph:
        " Lorem ipsum dolor sit ameicia ratioat enim excepturi. Ipsam quibusdam animi ratione consectetur placeat consequatur ipsa ab.",
    },
  ];

  const {count, setCount} = useContext(homeContext)

  return (
    <>
    <div style={{margin: '200px'}}>

      {count}
    </div>
      <div id="parent" >
        {data.map((ele) => {
          return (
            <>
            <div class="hero">

         
              <div class="image">
                <img src={ele.img} alt="" />
              </div>

              <h3>{ele.name}</h3>

              <p>{ele.paragraph}</p>
              <Link to={`/detail/${ele.id}`}>
              <button >
                view detail
              </button>
              </Link>

                 </div>
                 
            </>
          );
        })}
      </div>
      <div class="number-div">
        <div class="number">1</div>
        <div class="number">2</div>
        <div class="number">3</div>
        <div class="number">4</div>
      </div>
    </>
  );
}

export default Hero;
