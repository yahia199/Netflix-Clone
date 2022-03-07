import React from "react";
import Card from "../cards/Card";
import MytrendModal from "../ModalMovie/modelmovie";
import { useState } from "react";

export default function MovieList({ trendingMovie }) {
  const [show, setShow] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handelChosenMovie(data) {
    setChosenRecipe(data);
    handleShow();
  }
  return (
    <>
      {trendingMovie.map(trend => {
        return (
          <>
            <Card cardtrend={trend} handelChosenMovie={handelChosenMovie} />

          </>
        );
      })}
      {chosenRecipe && (
        <MytrendModal
          trend={chosenRecipe}
          show={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
