let options = document.querySelectorAll(".form-check-input");
let cards = document.querySelector("[data-cards]");
let cardsArr = [
  {
    url: "images/torre.webp",
    title: "Torre de transmissão",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet vel, eu massa.",
    modules: "272 Módulos",
    energy: "272 Módulos",
    economy: 86.7,
    categories: "fazenda",
  },
  {
    url: "images/casa.webp",
    title: "Casa no interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet vel, eu massa.",
    modules: "272 Módulos",
    energy: "272 Módulos",
    economy: 86.7,
    categories: "casa",
  },
  {
    url: "images/casa.webp",
    title: "Casa no centro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet vel, eu massa.",
    modules: "272 Módulos",
    energy: "272 Módulos",
    economy: 86.7,
    categories: "casa",
  },
  {
    url: "images/hotel.webp",
    title: "Torre de transmissão",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet vel, eu massa.",
    modules: "272 Módulos",
    energy: "272 Módulos",
    economy: 86.7,
    categories: "empresa",
  },
];

cardsArr.map((card) => {

    cards.insertAdjacentHTML(
      "afterbegin",
      `
   <div class="col-xl-4" data-fazenda>
<div class="slide">
<img
  class="projetos__img"
  src="${card.url}"
  alt="equipamento solar"
/>
<strong class="projetos__title-card"
  >${card.title}</strong
>
<p>
${card.description}
</p>

<div
  class="d-flex justify-content-between align-items-center my-3"
>
  <div class="d-flex gap-1 align-items-center">
    <svg
      width="35"
      height="28"
      viewBox="0 0 35 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6239 24.5005L21.0006 24.5033V22.75H14.0006V24.5115L11.3767 24.5142C10.8944 24.5148 10.5034 24.9058 10.5028 25.3887L10.5001 27.1239C10.4996 27.6079 10.8922 28.0005 11.3762 28L23.6239 27.9858C24.1063 27.9852 24.4973 27.5942 24.4978 27.1119L24.5 25.3766C24.5006 24.8927 24.1079 24.5 23.6239 24.5005ZM32.0031 1.46234C31.8598 0.618516 31.1166 0 30.2455 0H4.75414C3.88297 0 3.13977 0.618516 2.99649 1.46234C-0.18138 20.1884 0.00236892 19.0356 0.00182205 19.25C0.000181431 20.1972 0.783302 21 1.78462 21H33.2155C34.2125 21 34.9934 20.2037 34.9978 19.2615C34.9989 19.0384 35.181 20.1884 32.0031 1.46234ZM14.2095 3.5H20.79L21.3243 8.75H13.6752L14.2095 3.5ZM10.0987 17.5H3.88789L4.92749 11.375H10.7227L10.0987 17.5ZM10.9896 8.75H5.37265L6.2635 3.5H11.5239L10.9896 8.75ZM12.7844 17.5L13.4078 11.375H21.5918L22.2152 17.5H12.7844ZM23.4757 3.5H28.7361L29.6269 8.75H24.01L23.4757 3.5ZM24.9009 17.5L24.2774 11.375H30.0726L31.1122 17.5H24.9009Z"
        fill="#153B69"
      />
    </svg>
    <span>${card.modules}</span>
  </div>

  <div class="d-flex gap-1 align-items-center">
    <svg
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5583 14.0513L11.9612 10.2278L15.287 2.24622C15.3897 2.03778 15.4472 1.80289 15.4472 1.55556C15.4472 0.696889 14.755 0 13.8963 0C13.509 0.00622222 13.1855 0.129111 12.9288 0.332889C12.8775 0.373333 12.8463 0.398222 12.8199 0.426222L1.15323 11.4707C0.79701 11.8082 0.621232 12.2936 0.677232 12.7804C0.733232 13.2673 1.0179 13.6998 1.44101 13.9471L8.03968 17.7738L4.67501 25.8471C4.39034 26.5253 4.62212 27.3093 5.22568 27.7262C5.49323 27.9098 5.80434 28 6.10923 28C6.49501 28 6.88079 27.8553 7.17945 27.5738L18.8461 16.5262C19.2023 16.1887 19.3781 15.7033 19.3221 15.2164C19.2661 14.7296 18.9815 14.2971 18.5583 14.0513Z"
        fill="#153B69"
      />
    </svg>

    <span>${card.energy}</span>
  </div>
</div>

<div class="d-flex">
  <strong class="projetos__economia">Econômia Anual</strong>
  <strong class="projetos__price">${card.economy.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</strong>
</div>
</div>
</div>

`
    );
  });

let filteredCards

options.forEach((option) => {
  option.addEventListener("change", (e) => {
    switch (e.target.id) {
      case "todos":
        cards.innerHTML = ''
        cardsArr.map((card) => {
          cards.insertAdjacentHTML(
            "afterbegin",
            `
         <div class="col-xl-4" data-fazenda>
    <div class="slide">
      <img
        class="projetos__img"
        src="${card.url}"
        alt="equipamento solar"
      />
      <strong class="projetos__title-card"
        >${card.title}</strong
      >
      <p>
      ${card.description}
      </p>

      <div
        class="d-flex justify-content-between align-items-center my-3"
      >
        <div class="d-flex gap-1 align-items-center">
          <svg
            width="35"
            height="28"
            viewBox="0 0 35 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6239 24.5005L21.0006 24.5033V22.75H14.0006V24.5115L11.3767 24.5142C10.8944 24.5148 10.5034 24.9058 10.5028 25.3887L10.5001 27.1239C10.4996 27.6079 10.8922 28.0005 11.3762 28L23.6239 27.9858C24.1063 27.9852 24.4973 27.5942 24.4978 27.1119L24.5 25.3766C24.5006 24.8927 24.1079 24.5 23.6239 24.5005ZM32.0031 1.46234C31.8598 0.618516 31.1166 0 30.2455 0H4.75414C3.88297 0 3.13977 0.618516 2.99649 1.46234C-0.18138 20.1884 0.00236892 19.0356 0.00182205 19.25C0.000181431 20.1972 0.783302 21 1.78462 21H33.2155C34.2125 21 34.9934 20.2037 34.9978 19.2615C34.9989 19.0384 35.181 20.1884 32.0031 1.46234ZM14.2095 3.5H20.79L21.3243 8.75H13.6752L14.2095 3.5ZM10.0987 17.5H3.88789L4.92749 11.375H10.7227L10.0987 17.5ZM10.9896 8.75H5.37265L6.2635 3.5H11.5239L10.9896 8.75ZM12.7844 17.5L13.4078 11.375H21.5918L22.2152 17.5H12.7844ZM23.4757 3.5H28.7361L29.6269 8.75H24.01L23.4757 3.5ZM24.9009 17.5L24.2774 11.375H30.0726L31.1122 17.5H24.9009Z"
              fill="#153B69"
            />
          </svg>
          <span>${card.modules}</span>
        </div>

        <div class="d-flex gap-1 align-items-center">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5583 14.0513L11.9612 10.2278L15.287 2.24622C15.3897 2.03778 15.4472 1.80289 15.4472 1.55556C15.4472 0.696889 14.755 0 13.8963 0C13.509 0.00622222 13.1855 0.129111 12.9288 0.332889C12.8775 0.373333 12.8463 0.398222 12.8199 0.426222L1.15323 11.4707C0.79701 11.8082 0.621232 12.2936 0.677232 12.7804C0.733232 13.2673 1.0179 13.6998 1.44101 13.9471L8.03968 17.7738L4.67501 25.8471C4.39034 26.5253 4.62212 27.3093 5.22568 27.7262C5.49323 27.9098 5.80434 28 6.10923 28C6.49501 28 6.88079 27.8553 7.17945 27.5738L18.8461 16.5262C19.2023 16.1887 19.3781 15.7033 19.3221 15.2164C19.2661 14.7296 18.9815 14.2971 18.5583 14.0513Z"
              fill="#153B69"
            />
          </svg>

          <span>${card.energy}</span>
        </div>
      </div>

      <div class="d-flex">
        <strong class="projetos__economia">Econômia Anual</strong>
        <strong class="projetos__price">${card.economy.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</strong>
      </div>
    </div>
    </div>

    `
          );
        });
        break;
      case "casas":
        cards.innerHTML = ''
        filteredCards = cardsArr.filter(card => card.categories == 'casa')
        filteredCards.map((card) => {
          cards.insertAdjacentHTML(
            "afterbegin",
            `
         <div class="col-xl-4" data-fazenda>
    <div class="slide">
      <img
        class="projetos__img"
        src="${card.url}"
        alt="equipamento solar"
      />
      <strong class="projetos__title-card"
        >${card.title}</strong
      >
      <p>
      ${card.description}
      </p>

      <div
        class="d-flex justify-content-between align-items-center my-3"
      >
        <div class="d-flex gap-1 align-items-center">
          <svg
            width="35"
            height="28"
            viewBox="0 0 35 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6239 24.5005L21.0006 24.5033V22.75H14.0006V24.5115L11.3767 24.5142C10.8944 24.5148 10.5034 24.9058 10.5028 25.3887L10.5001 27.1239C10.4996 27.6079 10.8922 28.0005 11.3762 28L23.6239 27.9858C24.1063 27.9852 24.4973 27.5942 24.4978 27.1119L24.5 25.3766C24.5006 24.8927 24.1079 24.5 23.6239 24.5005ZM32.0031 1.46234C31.8598 0.618516 31.1166 0 30.2455 0H4.75414C3.88297 0 3.13977 0.618516 2.99649 1.46234C-0.18138 20.1884 0.00236892 19.0356 0.00182205 19.25C0.000181431 20.1972 0.783302 21 1.78462 21H33.2155C34.2125 21 34.9934 20.2037 34.9978 19.2615C34.9989 19.0384 35.181 20.1884 32.0031 1.46234ZM14.2095 3.5H20.79L21.3243 8.75H13.6752L14.2095 3.5ZM10.0987 17.5H3.88789L4.92749 11.375H10.7227L10.0987 17.5ZM10.9896 8.75H5.37265L6.2635 3.5H11.5239L10.9896 8.75ZM12.7844 17.5L13.4078 11.375H21.5918L22.2152 17.5H12.7844ZM23.4757 3.5H28.7361L29.6269 8.75H24.01L23.4757 3.5ZM24.9009 17.5L24.2774 11.375H30.0726L31.1122 17.5H24.9009Z"
              fill="#153B69"
            />
          </svg>
          <span>${card.modules}</span>
        </div>

        <div class="d-flex gap-1 align-items-center">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5583 14.0513L11.9612 10.2278L15.287 2.24622C15.3897 2.03778 15.4472 1.80289 15.4472 1.55556C15.4472 0.696889 14.755 0 13.8963 0C13.509 0.00622222 13.1855 0.129111 12.9288 0.332889C12.8775 0.373333 12.8463 0.398222 12.8199 0.426222L1.15323 11.4707C0.79701 11.8082 0.621232 12.2936 0.677232 12.7804C0.733232 13.2673 1.0179 13.6998 1.44101 13.9471L8.03968 17.7738L4.67501 25.8471C4.39034 26.5253 4.62212 27.3093 5.22568 27.7262C5.49323 27.9098 5.80434 28 6.10923 28C6.49501 28 6.88079 27.8553 7.17945 27.5738L18.8461 16.5262C19.2023 16.1887 19.3781 15.7033 19.3221 15.2164C19.2661 14.7296 18.9815 14.2971 18.5583 14.0513Z"
              fill="#153B69"
            />
          </svg>

          <span>${card.energy}</span>
        </div>
      </div>

      <div class="d-flex">
        <strong class="projetos__economia">Econômia Anual</strong>
        <strong class="projetos__price">${card.economy.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</strong>
      </div>
    </div>
    </div>

    `
          );
        });
        break;
      case "empresas":
        cards.innerHTML = ''
        filteredCards = cardsArr.filter(card => card.categories == 'empresa')
        filteredCards.map((card) => {
          cards.insertAdjacentHTML(
            "afterbegin",
            `
         <div class="col-xl-4" data-fazenda>
    <div class="slide">
      <img
        class="projetos__img"
        src="${card.url}"
        alt="equipamento solar"
      />
      <strong class="projetos__title-card"
        >${card.title}</strong
      >
      <p>
      ${card.description}
      </p>

      <div
        class="d-flex justify-content-between align-items-center my-3"
      >
        <div class="d-flex gap-1 align-items-center">
          <svg
            width="35"
            height="28"
            viewBox="0 0 35 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6239 24.5005L21.0006 24.5033V22.75H14.0006V24.5115L11.3767 24.5142C10.8944 24.5148 10.5034 24.9058 10.5028 25.3887L10.5001 27.1239C10.4996 27.6079 10.8922 28.0005 11.3762 28L23.6239 27.9858C24.1063 27.9852 24.4973 27.5942 24.4978 27.1119L24.5 25.3766C24.5006 24.8927 24.1079 24.5 23.6239 24.5005ZM32.0031 1.46234C31.8598 0.618516 31.1166 0 30.2455 0H4.75414C3.88297 0 3.13977 0.618516 2.99649 1.46234C-0.18138 20.1884 0.00236892 19.0356 0.00182205 19.25C0.000181431 20.1972 0.783302 21 1.78462 21H33.2155C34.2125 21 34.9934 20.2037 34.9978 19.2615C34.9989 19.0384 35.181 20.1884 32.0031 1.46234ZM14.2095 3.5H20.79L21.3243 8.75H13.6752L14.2095 3.5ZM10.0987 17.5H3.88789L4.92749 11.375H10.7227L10.0987 17.5ZM10.9896 8.75H5.37265L6.2635 3.5H11.5239L10.9896 8.75ZM12.7844 17.5L13.4078 11.375H21.5918L22.2152 17.5H12.7844ZM23.4757 3.5H28.7361L29.6269 8.75H24.01L23.4757 3.5ZM24.9009 17.5L24.2774 11.375H30.0726L31.1122 17.5H24.9009Z"
              fill="#153B69"
            />
          </svg>
          <span>${card.modules}</span>
        </div>

        <div class="d-flex gap-1 align-items-center">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5583 14.0513L11.9612 10.2278L15.287 2.24622C15.3897 2.03778 15.4472 1.80289 15.4472 1.55556C15.4472 0.696889 14.755 0 13.8963 0C13.509 0.00622222 13.1855 0.129111 12.9288 0.332889C12.8775 0.373333 12.8463 0.398222 12.8199 0.426222L1.15323 11.4707C0.79701 11.8082 0.621232 12.2936 0.677232 12.7804C0.733232 13.2673 1.0179 13.6998 1.44101 13.9471L8.03968 17.7738L4.67501 25.8471C4.39034 26.5253 4.62212 27.3093 5.22568 27.7262C5.49323 27.9098 5.80434 28 6.10923 28C6.49501 28 6.88079 27.8553 7.17945 27.5738L18.8461 16.5262C19.2023 16.1887 19.3781 15.7033 19.3221 15.2164C19.2661 14.7296 18.9815 14.2971 18.5583 14.0513Z"
              fill="#153B69"
            />
          </svg>

          <span>${card.energy}</span>
        </div>
      </div>

      <div class="d-flex">
        <strong class="projetos__economia">Econômia Anual</strong>
        <strong class="projetos__price">${card.economy.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</strong>
      </div>
    </div>
    </div>

    `
          );
        });
        break;
      case "fazendas":
        cards.innerHTML = ''
        filteredCards = cardsArr.filter(card => card.categories == 'fazenda')
        filteredCards.map((card) => {
          cards.insertAdjacentHTML(
            "afterbegin",
            `
         <div class="col-xl-4" data-fazenda>
    <div class="slide">
      <img
        class="projetos__img"
        src="${card.url}"
        alt="equipamento solar"
      />
      <strong class="projetos__title-card"
        >${card.title}</strong
      >
      <p>
      ${card.description}
      </p>

      <div
        class="d-flex justify-content-between align-items-center my-3"
      >
        <div class="d-flex gap-1 align-items-center">
          <svg
            width="35"
            height="28"
            viewBox="0 0 35 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6239 24.5005L21.0006 24.5033V22.75H14.0006V24.5115L11.3767 24.5142C10.8944 24.5148 10.5034 24.9058 10.5028 25.3887L10.5001 27.1239C10.4996 27.6079 10.8922 28.0005 11.3762 28L23.6239 27.9858C24.1063 27.9852 24.4973 27.5942 24.4978 27.1119L24.5 25.3766C24.5006 24.8927 24.1079 24.5 23.6239 24.5005ZM32.0031 1.46234C31.8598 0.618516 31.1166 0 30.2455 0H4.75414C3.88297 0 3.13977 0.618516 2.99649 1.46234C-0.18138 20.1884 0.00236892 19.0356 0.00182205 19.25C0.000181431 20.1972 0.783302 21 1.78462 21H33.2155C34.2125 21 34.9934 20.2037 34.9978 19.2615C34.9989 19.0384 35.181 20.1884 32.0031 1.46234ZM14.2095 3.5H20.79L21.3243 8.75H13.6752L14.2095 3.5ZM10.0987 17.5H3.88789L4.92749 11.375H10.7227L10.0987 17.5ZM10.9896 8.75H5.37265L6.2635 3.5H11.5239L10.9896 8.75ZM12.7844 17.5L13.4078 11.375H21.5918L22.2152 17.5H12.7844ZM23.4757 3.5H28.7361L29.6269 8.75H24.01L23.4757 3.5ZM24.9009 17.5L24.2774 11.375H30.0726L31.1122 17.5H24.9009Z"
              fill="#153B69"
            />
          </svg>
          <span>${card.modules}</span>
        </div>

        <div class="d-flex gap-1 align-items-center">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5583 14.0513L11.9612 10.2278L15.287 2.24622C15.3897 2.03778 15.4472 1.80289 15.4472 1.55556C15.4472 0.696889 14.755 0 13.8963 0C13.509 0.00622222 13.1855 0.129111 12.9288 0.332889C12.8775 0.373333 12.8463 0.398222 12.8199 0.426222L1.15323 11.4707C0.79701 11.8082 0.621232 12.2936 0.677232 12.7804C0.733232 13.2673 1.0179 13.6998 1.44101 13.9471L8.03968 17.7738L4.67501 25.8471C4.39034 26.5253 4.62212 27.3093 5.22568 27.7262C5.49323 27.9098 5.80434 28 6.10923 28C6.49501 28 6.88079 27.8553 7.17945 27.5738L18.8461 16.5262C19.2023 16.1887 19.3781 15.7033 19.3221 15.2164C19.2661 14.7296 18.9815 14.2971 18.5583 14.0513Z"
              fill="#153B69"
            />
          </svg>

          <span>${card.energy}</span>
        </div>
      </div>

      <div class="d-flex">
        <strong class="projetos__economia">Econômia Anual</strong>
        <strong class="projetos__price">${card.economy.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</strong>
      </div>
    </div>
    </div>

    `
          );
        });
        break;
    }
  });
});
