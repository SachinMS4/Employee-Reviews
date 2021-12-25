const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "Web developer",
    img: "https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Radhika Kumari",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "Project Manager",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Avinash Barton",
    job: "Web Devloper",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit pariatur cum consequuntur nesciunt voluptate, sapiente iste commodi quos nam. Consequuntur inventore voluptate impedit atque.",
  },
];

personValues(4);

let personid = 0;
document.querySelector(".previous").addEventListener("click", () => {
  if (personid == 0) personid = reviews.length;
  personid = personid - 1;
  personValues(personid);
});

document.querySelector(".next").addEventListener("click", () => {
  personid = (personid + 1) % reviews.length;
  personValues(personid);
});

function personValues(personid) {
  document.getElementById("profile-pic").src = reviews[personid]["img"];
  document.getElementById("name").textContent =
    reviews[personid]["name"].toUpperCase();
  document.getElementById("job").textContent = reviews[personid]["job"];
  document.getElementById("review-content").textContent =
    reviews[personid]["text"];
}
