
const users = [
  {
    name: "Rahul Chouhan",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60",
    bio: "Silent chaos in a loud world | not for everyone"
  },
  {
    name: "Aman Verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    bio: "Dream big, stay grounded 🌱"
  },
  {
    name: "Rohit Sharma",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    bio: "Focused. Fearless. Unstoppable."
  },
  {
    name: "Kunal Mehta",
    pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60",
    bio: "Learning every day | progress > perfection"
  },
  {
    name: "Siddharth Singh",
    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60",
    bio: "Calm mind, sharp code 💻"
  },

  /* 🔥 Additional users */
  {
    name: "Neha Kapoor",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    bio: "Creativity meets consistency ✨"
  },
  {
    name: "Priya Malhotra",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    bio: "Designing ideas into reality 🎨"
  },
  {
    name: "Arjun Patel",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    bio: "Code. Coffee. Repeat ☕"
  },
  {
    name: "Vikram Joshi",
    pic: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=600&auto=format&fit=crop&q=60",
    bio: "Building scalable systems 🚀"
  },
  {
    name: "Ankit Yadav",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
    bio: "Problem solver by nature"
  },
  {
    name: "Pooja Sharma",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
    bio: "Minimalism in life & code"
  },
  {
    name: "Riya Gupta",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60",
    bio: "Learning, unlearning, growing 🌸"
  },
  {
    name: "Mohit Bansal",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60",
    bio: "Full-stack mindset 💡"
  },
  {
    name: "Aditya Rao",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
    bio: "Turning ideas into products"
  },
  {
    name: "Sneha Iyer",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    bio: "UX thinker | UI lover 💙"
  },
  {
    name: "Varun Khanna",
    pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&auto=format&fit=crop&q=60",
    bio: "Consistency beats motivation"
  },
  {
    name: "Nikhil Arora",
    pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60",
    bio: "Backend brain, frontend heart"
  },
  {
    name: "Simran Kaur",
    pic: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&auto=format&fit=crop&q=60",
    bio: "Writing clean code & stories ✍️"
  },
  {
    name: "Ayush Mishra",
    pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&auto=format&fit=crop&q=60",
    bio: "Exploring tech one step at a time"
  }
];

function showUsers(arr) {
    arr.forEach(function(users) {
        // Card
        let card = document.createElement('div');
        card.className = 'card';

        // Image 
        let figure = document.createElement("figure");
        let img = document.createElement("img");

        img.src = users.pic;

        figure.appendChild(img);

        // Content 
        let content = document.createElement('div');
        content.className = 'content';

        let h3 = document.createElement('h3');
        h3.innerHTML = users.name;

        let para = document.createElement('p');
        para.innerHTML = users.bio;

        content.appendChild(h3);
        content.appendChild(para);

        card.appendChild(figure);
        card.appendChild(content);

        document.querySelector('.wrapper').appendChild(card);
    });
}

showUsers(users);

// Filter while seraching
// Show the filtered users

let inp = document.querySelector('input');

inp.addEventListener('keyup',function() {
  let data = inp.value.toLowerCase().trim();
  // console.log(data);
  let newUser = users.filter(function(user) {
    // includes()
    return user.name.toLowerCase().startsWith(data);
  });

  // 🔥 Clear ALL cards first
  document.querySelector('.wrapper').innerHTML = "";

  if(newUser.length === 0) {
    document.querySelector('.wrapper').innerHTML = '<p style="color: red; font-size: 20px; font-weight: 500;">No User Found !</p>';
    return;
  }
    
  // Show filtered users
  showUsers(newUser);
});