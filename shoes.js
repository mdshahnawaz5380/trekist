function add_event(da) {
  let right = document.getElementById("right");
  for (let k = 0; k < da.length; k++) {
    right.children[k].addEventListener("click", function () {
      console.log(da[k]);
      localStorage.setItem("profile_data", JSON.stringify(da[k]));
      window.location.href = "./profile.html";
    });
  }
}

function display_shoes(shoes, all, type) {
  let right = document.getElementById("right");
  right.innerHTML = "";
  if (shoes == undefined || shoes.length == 0) {
    console.log("undefined");
  } else {
    for (let i = 0, j = 0; i < shoes.length; i++) {
      if (all == true || type == shoes[i].type) {
        right.innerHTML =
          right.innerHTML +
          `<div class='shoe'>
      <img class='shoe_image' src="` +
          shoes[i].image +
          `" alt=''>
      <p class='shoe_name'>` +
          shoes[i].name +
          ` </p>
      <p class='shoe_price'> MRP : ` +
          shoes[i].price +
          ` ₹</p>
    </div>`;
      } else {
        right.innerHTML =
          right.innerHTML +
          `<div class='shoe' style = 'display: none'>
      <img class='shoe_image' src="` +
          shoes[i].image +
          `" alt=''>
      <p class='shoe_name'>` +
          shoes[i].name +
          ` </p>
      <p class='shoe_price'> MRP : ` +
          shoes[i].price +
          ` ₹</p>
    </div>`;
      }
    }

    add_event(shoes);
  }
}

let s = [
  {
    name: "Sabrina 2 EP",
    price: 11895.0,
    size: [5, 6, 7],
    description: "best shoes",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/882c21ec-b405-4e45-92d3-111a108e0cf0/SABRINA+2+EP.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc9dd308-177d-4cb2-aae0-4d19674885e1/SABRINA+2+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f7971c4-5b30-4b97-b421-913b5d333659/SABRINA+2+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca37f2a2-4d61-4b13-9efe-dda6ca0c3ddb/SABRINA+2+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00169256-9481-435c-b4cb-da88667cbdc4/SABRINA+2+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d337bcd-6a85-4f8b-8290-5e578bbd2684/SABRINA+2+EP.png",
    ],
  },
  {
    name: "Trekist Ultrafly ",
    price: 21695,
    size: [5, 6, 7],
    description:
      "Manifest your mountainous best, when the trail ahead is skiddy and uncertain. Our all-new championship trail-racing shoe melds our best speed components from the running world with what you need to plant your flag first at the finishing line. It offers peak performance, sleek speed and endurance for those who want to summit nature's playground.",
    type: "casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b10b5561-ff15-48a2-8fcb-e24daccc73a0/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a7d32fe-76ec-4ab6-9d7c-d3a38068917f/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e3c104a-a7b1-4e44-ac92-4c043a9edfc1/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32458e9c-f124-4afb-82c5-c89ebb9146a6/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b0e47135-3a94-499c-ac2b-01527553079e/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4213ae7a-c17d-4f7d-8d79-f18a97079b26/NIKE+ZOOMX+ULTRAFLY+TRAIL.png",
    ],
  },
  {
    name: "Trekist Vaporfly 2",
    price: 20695,
    size: [5, 6, 7, 8, 9],
    description:
      "Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers and the elevated pacers who can't turn down the thrill of the pursuit. We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon. From elite runners to those new to racing, this versatile road-racing workhorse is for those who see speed as a gateway to more miles and more seemingly uncatchable highs.",
    type: "sneaker",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fe70154-e4bb-4bcc-9cf0-2efda240916c/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1dab2f7a-bbee-4c23-b899-8e24a356763d/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d24ed8d-2bb6-457a-a4d2-15d2fb2fff17/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f1cb61d5-29fd-41a5-b669-e51eaa08c9f3/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b0a1ce54-2bd8-411b-9bb5-a3de0b6d767c/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1de63d6-4332-49b1-a2b2-76e8f34391b8/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
    ],
  },
  {
    name: "Trekist Pegasus Dow",
    price: 11895,
    size: [5, 6, 7, 8],
    description:
      "Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7358b1ee-dec1-46a2-9e49-0526c68194dd/W+AIR+ZOOM+PEGASUS+41.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2c74dab-3146-4b38-a9c3-e904e545a7c7/W+AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b361e2b-11ae-4fe2-b246-aba2542b0355/W+AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/008281db-2dfa-4933-8b15-8ce317c5f72b/W+AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/35c2de43-bd6e-48bf-bc2e-aea70ce2112f/W+AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7bd11b83-95c2-491c-a222-3ad3cd1da344/W+AIR+ZOOM+PEGASUS+41.png",
    ],
  },

  {
    name: "Trekist Air Force 1",
    price: 10795.0,
    size: [5, 6, 7, 8],
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    type: "formal",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
    ],
  },
  {
    name: "Trekist Air Force",
    price: 8097,
    size: [5, 6, 7, 8],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction is paired with golf-inspired details for style that tracks whether you're on court or on the go.",
    type: "formal",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f5f6717-8099-48a3-beff-d2eacfbecb5c/AIR+FORCE+1+%2707+LV8+ND2.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22cce236-9223-4916-abd8-ad7267d9f4ac/AIR+FORCE+1+%2707+LV8+ND2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d38decfd-9b87-4a52-8b42-d7d575632584/AIR+FORCE+1+%2707+LV8+ND2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91068b0f-9ec5-481d-b31c-5c34201db49d/AIR+FORCE+1+%2707+LV8+ND2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e7de3a9-12d5-4774-92b6-92dec631b7d1/AIR+FORCE+1+%2707+LV8+ND2.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fbfde04-ab8b-4f21-a03f-8b3fd5f463fb/AIR+FORCE+1+%2707+LV8+ND2.png",
    ],
  },
  {
    name: "Trekist Water Force",
    price: 12578,
    size: [5, 6, 7, 8],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs with bold details for style that tracks whether you're on court or on the go. This version brings an all-black design with perforated leather, making it durable, breathable and easy to style.",
    type: "formal",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a9a19a2-0915-4b69-84e2-02dc3a735c1d/AIR+FORCE+1+SP.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/777c9d18-2c2e-4b72-8244-70dce5177b1f/AIR+FORCE+1+SP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/858f9194-f953-404e-a11d-3b680cdea91a/AIR+FORCE+1+SP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9949ff5-b536-41c0-a9bf-2440c3ef44be/AIR+FORCE+1+SP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae1e9022-79fc-4f4a-ad62-d2bc9a651f43/AIR+FORCE+1+SP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db39076f-cdf2-4557-bf64-b4b5a899578e/AIR+FORCE+1+SP.png",
    ],
  },
  {
    name: "Trekist Tanjun ",
    price: 3145,
    size: [5, 6, 7, 8],
    description:
      "Forget the hype—the Tanjun brings you simplicity at its best. This version features Nike EasyOn technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip the shoe on and off. Plus, the light and airy design is a go-to for daily wear.",
    type: "formal",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/830d4c7b-e9b1-4f4a-870e-8c9c195555b9/NIKE+TANJUN+FLYEASE.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb15d48e-0e21-4608-8c9a-200b76bafe74/NIKE+TANJUN+FLYEASE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1febe0bf-2581-4bb7-98d0-87e73c4f64f7/NIKE+TANJUN+FLYEASE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/71127623-3ebd-4aaf-a16c-28411707cc2c/NIKE+TANJUN+FLYEASE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f55c6d0e-e95e-4780-9883-99ac0b5f811c/NIKE+TANJUN+FLYEASE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e43745de-a45d-434a-827f-c1dba08e2e3a/NIKE+TANJUN+FLYEASE.png",
    ],
  },
  {
    name: "Trekist vapromax",
    price: 19595,
    size: [5, 6, 7, 8],
    description:
      "Have you ever walked on Air? Step into the Air VaporMax 2023 to see how it's done. The innovative tech is revealed through the perforated sockliner (pull it out to see more). And the stretchy Flyknit material is seamless and breathable, creating a shoe that weighs less than any other model with this Air unit so far.",
    type: "sneakers",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64f064e4-4731-45ed-9e10-0e6b80fa4b1a/AIR+VAPORMAX+2023+FK+SE.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/98aead6e-88f7-4d0f-9f55-9fb0708ce078/AIR+VAPORMAX+2023+FK+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c38444e-c4ec-4ac5-b668-fc283810a064/AIR+VAPORMAX+2023+FK+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aebd34e6-c666-4bbc-9fc9-137c493bfb9b/AIR+VAPORMAX+2023+FK+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a1806f1-3991-4c45-9daf-2fd019ba6bcc/AIR+VAPORMAX+2023+FK+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7d9436c-aa59-420a-8d22-534614fa8432/AIR+VAPORMAX+2023+FK+SE.png",
    ],
  },
  {
    name: "Trekist G.T Low ",
    price: 12795.0,
    size: [5, 6, 7, 8],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. Cutaway details expose a premium textile Swoosh logo and full-length Air units in the outsole, revealing the Air Force 1 in a new way. The classic '80s construction pairs with bold details for style that tracks whether you're on court or on the go.",
    type: "sneakers",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c626a1ef-ebae-47b2-be6b-8706be6b95e5/AIR+FORCE+1+LOW+EVO.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc484b89-666f-4525-920c-7858d3921574/AIR+FORCE+1+LOW+EVO.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6ff07d39-e8e7-4bbf-8f36-0f5c0acd05c4/AIR+FORCE+1+LOW+EVO.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d22d564-0a05-485b-82e7-55deec7ef7f1/AIR+FORCE+1+LOW+EVO.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/54b3ff53-9f38-4355-8a7c-86bbd52a8501/AIR+FORCE+1+LOW+EVO.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/839590e0-0572-4b7b-a5bd-1ae8d7137870/AIR+FORCE+1+LOW+EVO.png",
    ],
  },
  {
    name: "Trekist Spinzik u",
    price: 14095,
    size: [5, 6, 7, 8],
    description:
      "The Spizike takes elements of five classic Jordans, combines them and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?",
    type: "sneakers",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/70ccf49c-b3e2-4f2f-97ec-f6b66dd0242b/JORDAN+SPIZIKE+LOW.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/175f845d-d6c9-48fa-a799-0f9c57fab37c/JORDAN+SPIZIKE+LOW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/943101f0-bd07-4d09-8eda-2a72e0bc4f80/JORDAN+SPIZIKE+LOW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fbdb3dfe-d370-4d7f-aa59-f916d0529066/JORDAN+SPIZIKE+LOW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ff97c6e8-afbc-4fed-9cd1-8e7b3eefdc75/JORDAN+SPIZIKE+LOW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e580ea0f-383e-4bfe-91c5-1f36fede1172/JORDAN+SPIZIKE+LOW.png",
    ],
  },
  {
    name: "Trekist P-12",
    price: 10795.0,
    size: [5, 6, 7, 8],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction is paired with pristine materials for style that tracks whether you're on court or on the go. A subtle platform gives you just the right amount of height.",
    type: "sneakers",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14bc598e-44dd-4686-b5d4-53db74fdb964/AIR+FORCE+1+%2707+LV8.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a0057a6-41bf-433a-b0c2-d0501babfbae/AIR+FORCE+1+%2707+LV8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43ec3bc6-8074-4360-9deb-726e281a3800/AIR+FORCE+1+%2707+LV8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9e1d0c6e-c8d6-4d17-9e10-fae006501497/AIR+FORCE+1+%2707+LV8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/76552f63-8ed2-40f0-8688-227f3aec1dd0/AIR+FORCE+1+%2707+LV8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3806e20f-6196-470c-bc4a-5146feaea50e/AIR+FORCE+1+%2707+LV8.png",
    ],
  },
  {
    name: "Trekist P-Max",
    price: 12440,
    size: [5, 6, 7, 8],
    description:
      "Nothing as fly, nothing as comfortable, nothing as proven. The Air Max 90 stays true to its original running roots with the iconic Waffle sole and stitched overlays. Plus, visible cushioning adds comfort to the journey. Lace up and feel the legacy.",
    type: "casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46a179d4-1ef2-4d9f-ab69-cd0770d28686/NIKE+AIR+MAX+90+PRM.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5243339-5d09-496d-9a6e-18fbd5303894/NIKE+AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f87d0d0e-6b08-49bb-83ba-33ffd58a8754/NIKE+AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80d0e9b3-5931-4bf0-beae-93f91c1aefb3/NIKE+AIR+MAX+90+PRM.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a00bf076-50f3-4a09-87e3-ef80f94af111/NIKE+AIR+MAX+90+PRM.png",
    ],
  },
  {
    name: "Trekist Max SC",
    price: 6790,
    size: [5, 6, 7, 8],
    description:
      "With its easy-going lines, heritage athletics look and visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit. The crisp leather in the upper makes it a durable and lightweight shoe for everyday wear.",
    type: "casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8ec4444-9885-40ef-b545-9fc1aa6f2081/NIKE+AIR+MAX+SC+LEA.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f8100fd-0e46-4866-aa00-124211af6d26/NIKE+AIR+MAX+SC+LEA.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f14c247d-e7f0-4ea5-87cc-fd2f5ff78661/NIKE+AIR+MAX+SC+LEA.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4f1367c-8dd8-4b47-b6f3-8bee7ec86a6c/NIKE+AIR+MAX+SC+LEA.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d71c27ef-de22-4708-8c2c-a15eab42038b/NIKE+AIR+MAX+SC+LEA.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d0ce66a-743f-44f7-94f0-7e1608a34277/NIKE+AIR+MAX+SC+LEA.png",
    ],
  },
  {
    name: "Trekist Tanny Et",
    price: 10090,
    size: [5, 6, 7, 8],
    description:
      "These AF-1s are going back to school and they just won 'Best Dressed'. Layers of canvas and synthetic leather create a vintage, varsity-inspired aesthetic. Don't forget to leave your mark: the sockliner graphics are inspired by school yearbooks—and we already signed it.",
    type: "casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac047f4f-ce27-4b18-94c4-1d1e77557f09/AIR+FORCE+1+%2707+LV8+1.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9b83f5c-af29-49b5-a784-989974e9c531/AIR+FORCE+1+%2707+LV8+1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc541c55-d779-4d36-afe8-57730f1a2a4f/AIR+FORCE+1+%2707+LV8+1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/505d73a1-291a-4191-bc18-7ac3536d1533/AIR+FORCE+1+%2707+LV8+1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0a3d4c2-968c-4e03-9dac-a689271f14dd/AIR+FORCE+1+%2707+LV8+1.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/728751fa-d9db-4cef-8478-5f02f9d45678/AIR+FORCE+1+%2707+LV8+1.png",
    ],
  },
  {
    name: "Trekist Royal-K ",
    price: 7495,
    size: [5, 6, 7, 8],
    description:
      "The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing you a mash-up of iconic style that's breathable, comfortable and evocative of that early-2000s vibe.",
    type: "casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da1c5a0e-0d65-4b72-8e99-b65e1062b7d7/NIKE+P-6000.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2ce4b8df-efc7-441e-9e1d-69f4cb629d58/NIKE+P-6000.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d206466-0311-49f7-8624-54a5e032d83d/NIKE+P-6000.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14cafb7a-0200-448e-946e-0e843c864d05/NIKE+P-6000.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f54dbf3-317a-4b77-8084-7db5c0fc4f6e/NIKE+P-6000.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f79f75bb-c822-4911-bbf0-5be249535408/NIKE+P-6000.png",
    ],
  },
  {
    name: "Trekist Electric",
    price: 17595,
    size: [5, 6, 7, 8],
    description:
      "The Victory 2 is tested and validated by the best middle-distance runners sprinting the planet. It sports every speed component you need to smash records, from a carbon fibre Flyplate to Air Zoom unit to a lightweight, responsive ZoomX midsole. AtomKnit on the upper and midfoot containment cables are combined with a supportive base that delivers improved shoe stability and control, especially around the turns.",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2de2cc5-d717-4d1e-8028-8233ae6df96e/AIR+ZOOM+VICTORY+2+OLY.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5727757b-aa2f-4371-98ed-0b0089c86209/AIR+ZOOM+VICTORY+2+OLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c604f17a-6e8d-4ae6-ac72-fe33997dce4e/AIR+ZOOM+VICTORY+2+OLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d4dd7b3-b87c-4e6c-9252-9caa894a0073/AIR+ZOOM+VICTORY+2+OLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/346bc8e6-71bb-469a-bca8-c037d9a4ad50/AIR+ZOOM+VICTORY+2+OLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e46bae7b-5d7a-4a32-9c6d-c2d55f902a5e/AIR+ZOOM+VICTORY+2+OLY.png",
    ],
  },
  {
    name: "Trekist Mercurial+",
    price: 15995.0,
    size: [5, 6, 7, 8],
    description:
      "Take responsive cushioning to the next level with the Pegasus Plus. It energises your ride with full-length, super-light ZoomX foam to give you a high level of energy return for everyday runs. And a stretchy Flyknit upper contours to your foot for a seamless fit.",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5351ec85-027b-4421-a45c-3f47dfac60a9/PEGASUS+PLUS.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78b1c276-1a6e-4048-a5c8-6f8d1747e837/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c85059f1-d51d-4ecc-88d6-e454a7f8d993/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dcd81036-1125-4e8d-af99-08175c76dde6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bb20f95-a1b5-478c-9e87-05ee264c15f3/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f599a44f-7914-455c-9ee0-2dbcb0b08ca7/PEGASUS+PLUS.png",
    ],
  },
  {
    name: "Trekist Motiva ",
    price: 9207.0,
    size: [5, 6, 7, 8],
    description:
      "Our lightest racing shoe, the Nike Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race. Low profile with sleek details, it feels like it disappears on your foot to help you better connect with the road on the way to your personal best.",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2f5eadf-749f-48d1-900f-31fbee61cf80/NIKE+ZOOMX+STREAKFLY.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ebd7237-b670-4133-8335-0d4fa3964c05/NIKE+ZOOMX+STREAKFLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216bf409-a2b6-4b68-b57e-97299d714dc1/NIKE+ZOOMX+STREAKFLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da6a491d-513d-47a3-92d7-ae0a3b4cae3e/NIKE+ZOOMX+STREAKFLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3042407-1bf8-4c70-a87e-dab578952d9e/NIKE+ZOOMX+STREAKFLY.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/faef0535-4edf-49d4-b0a1-a004bd848905/NIKE+ZOOMX+STREAKFLY.png",
    ],
  },
  {
    name: "Trekist Run 15",
    price: 8067,
    size: [5, 6, 7, 8],
    description: "yes sir",
    type: "sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6fbbd95-9ea0-41e6-a412-c70903934192/NIKE+INTERACT+RUN+SE.png",
    profile_image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a40bc078-7aa9-4d4e-bb86-8dd4c660da4e/NIKE+INTERACT+RUN+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed2e0ec5-edeb-4067-aa4e-cec0854c1156/NIKE+INTERACT+RUN+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1ba0490-3657-4570-ac8b-06e1e1a269d8/NIKE+INTERACT+RUN+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf61b76e-b476-4d49-8805-e99d93b599d3/NIKE+INTERACT+RUN+SE.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1ac2ac-aa3b-44c4-a32f-849649416912/NIKE+INTERACT+RUN+SE.png",
    ],
  },
];
display_shoes(s, false, "casual");
