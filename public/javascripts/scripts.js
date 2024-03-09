Vue.component("vue-chili-image", {
  template:
    '<img src="../images/chili.jpg" alt="White Chicken Chili" width="180" class="m-3" />',
});

Vue.component("vue-comments-header", {
  template: "<h2>Comments</h2>",
});

Vue.component("vue-food-blogger-header", {
  template: "<header><span>Food Blog</span></header>",
});

var vueData = new Vue({
  el: "#container",
  data: {
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        description:
          "Was amazing! My Walmart didn't have coriander in stock and didn't have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
        foodieLevel: "Novice",
        bioInfo:
          "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        description:
          "I just made this soup today and it's so tasty! didn't have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
        foodieLevel: "Newcomer",
        bioInfo:
          "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        description:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I've made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
        foodieLevel: "Mentor",
        bioInfo:
          "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        description:
          "This recipe is dynamite! My partner usually won't eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
        foodieLevel: "Novice",
        bioInfo:
          "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
    profileImage: "../images/profile.png",
    selectedPost: null,
  },
  methods: {
    showInfoBox(post) {
      this.selectedPost = post;
    },
    hideInfoBox() {
      this.selectedPost = null;
    },
  },
});

var Navigation = new Vue({
  el: "#navigation",
  data: {
    navItems: [
      {
        page: "Home",
      },
      {
        page: "Recipies",
      },
      {
        page: "Lifestyle",
      },
      {
        page: "Videos",
      },
      {
        page: "About",
      },
    ],
    hover: false,
  },
  methods: {
    hoverBackground(status) {
      this.hover = status;
    },
  },
});
