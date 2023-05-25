import React from "react";
import "./CardRepo.css";

function CardRepo({ name, description, html_url }) {
  return (
    <div class="flip-card">
      <a href={html_url} target="_blank">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">{name}</p>
            <p></p>
          </div>
          <div class="flip-card-back">
            <p class="title">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardRepo;
