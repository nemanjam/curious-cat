let postsArr = [
  {
    sharedBy: "MyUsername",
    question: {
      username: "CuriousCat",
      time: "10d",
      text:
        "Welcome to Curious Cat! We're happy to have you here 😻 Have fun and be nice!"
    },
    answer: {
      avatar:
        "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png",
      username: "MyUsername",
      time: "11d",
      text:
        "In a way CSS is like Redux. You can learn the rules quickly. That may mislead you into thinking. Trade same",
      likedCount: "5"
    }
  },
  {
    sharedBy: "MyUsername",
    question: {
      username: "CuriousCat",
      time: "10d",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    answer: {
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      username: "MyUsername",
      time: "11d",
      text:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      likedCount: "5"
    }
  },
  {
    sharedBy: "MyUsername",
    question: {
      username: "CuriousCat",
      time: "10d",
      text:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis"
    },
    answer: {
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      username: "MyUsername",
      time: "11d",
      text:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      likedCount: "5"
    }
  },
  {
    answer: {
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      username: "MyUsername",
      time: "11d",
      text:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      likedCount: "5"
    }
  },
  {
    question: {
      username: "CuriousCat",
      time: "10d",
      text:
        "Welcome to Curious Cat! We're happy to have you here 😻 Have fun and be nice!"
    },
    answer: {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "MyUsername",
      time: "11d",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      likedCount: "5"
    }
  },
  {
    answer: {
      avatar:
        "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png",
      username: "MyUsername",
      time: "11d",
      text:
        "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      likedCount: "5"
    }
  },
  {
    answer: {
      avatar:
        "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png",
      username: "MyUsername",
      time: "11d",
      text:
        "In a way CSS is like Redux. You can learn the rules quickly. That may mislead you into thinking. Trade same",
      likedCount: "5"
    }
  }
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  const randLength = getRndInteger(1, array.length - 1);
  // console.log(randLength);

  array = array.slice(randLength);
  // console.log(array);
  return array;
}

const posts = () => shuffle(postsArr);

export { posts };

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
     sunt in culpa qui officia deserunt mollit anim id est laborum.
*/
