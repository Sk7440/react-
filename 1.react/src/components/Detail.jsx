import { useParams } from "react-router-dom"

export default function Detail(){

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
    const params  = useParams()
    console.log(params);
    
    return (
        <>
            <h1>
            ths is detail page
            </h1>
        </>
    )
}