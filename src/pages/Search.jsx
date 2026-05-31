import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import MenuButtons from "../components/MenuButtons.jsx";
import logo from "../assets/logophoto.png";

function Search() {
  const [dogImage, setDogImage] = useState("");
  const [savedDogs, setSavedDogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedDogs")) || [];
    setSavedDogs(saved);
  }, []);
  
  useEffect(() => {
    getRandomDog();
  }, []);

  async function getRandomDog() {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);
    } catch (error) {
      console.log("Dog API error:", error);
    }
  }

  function saveDog() {
    if (!dogImage) return;

    const updatedDogs = [...savedDogs, dogImage];
    setSavedDogs(updatedDogs);
    localStorage.setItem("savedDogs", JSON.stringify(updatedDogs));
  }

  function clearDogs() {
    localStorage.removeItem("savedDogs");
    setSavedDogs([]);
  }

  return (
    <main className="search-app-screen">
      <MenuButtons />

      <img src={logo} alt="Chibi Puppy Pop Logo" className="search-logo" />

      <h1 className="search-title">DOG API SEARCH</h1>

      <motion.section
        className="api-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {dogImage && (
          <img src={dogImage} alt="Random dog from API" className="api-dog-img" />
        )}

        <button onClick={getRandomDog}>Get Random Dog</button>
        <button onClick={saveDog}>Save Dog</button>
        <button onClick={clearDogs}>Clear Saved Dogs</button>

        <p>Saved Dogs: {savedDogs.length}</p>
      </motion.section>
    </main>
  );
}

export default Search;