const body = $("body")[0];
body.style.overflow = "hidden";

let project_data = {
  all_games: {
    g0: {
      details: "I also try to make 3d geme",
      images: 3,
      name: "Godlike",
      released_date: "07/07/2021",
      version: "1.0.127",
    },
    g1: {
      details: "60'FPS Snake Game",
      images: 6,
      name: "Snake Worald",
      released_date: "07/07/2021",
      version: "1.0.127",
    },

    g2: {
      details: "Morden Tatris Alpha",
      images: 4,
      name: "Tatris Alpha",
      released_date: "07/07/2021",
      version: "1.0.127",
    },
    g3: {
      details: "Astroid Worald In Space",
      images: 5,
      name: "Astroid HitsX",
      released_date: "07/07/2021",
      version: "1.0.127",
    },
  },

  my_apps: {
    app0: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
      game_graphics: "his app for anything",
      game_type: "Tower Cefense",
      images: "010111",
      name: "Wait For Name",
      package_name: "sourcebegins",
      platform: "web",
      released_date: "07-July-2021",
      version: "0.0.0.01",
    },
    app1: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
      game_graphics: "his app for anything",
      game_type: "Tower Cefense",
      images: "110011",
      name: "Wait Free Log",
      package_name: "sourcebegins",
      platform: "web",
      released_date: "07-July-2021",
      version: "0.0.0.01",
    },
    app2: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
      game_graphics: "his app for anything",
      game_type: "Tower Cefense",
      images: "11010",
      name: "Wait Lets Play",
      package_name: "sourcebegins",
      platform: "web",
      released_date: "07-July-2021",
      version: "0.0.0.01",
    },

    app3: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
      game_graphics: "his app for anything",
      game_type: "Tower Cefense",
      images: "00001",
      name: "Multy Play Game",
      package_name: "sourcebegins",
      platform: "web",
      released_date: "07-July-2021",
      version: "0.0.0.01",
    },

    app4: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
      game_graphics: "his app for anything",
      game_type: "Tower Cefense",
      images: "110001",
      name: "Game for World",
      package_name: "sourcebegins",
      platform: "web",
      released_date: "07-July-2021",
      version: "0.0.0.01",
    },
  },
  my_creation: {
    p0: {
      languases: "1111",
      name: "3D Cube",
    },
    p1: {
      languases: "1100",
      name: "RGB Text",
    },
    p2: {
      languases: "1110",
      name: "Trigonometry",
    },
    p3: {
      languases: "1001",
      name: "Moving Ball",
    },
    p4: {
      languases: "1010",
      name: "Color Button",
    },
    p5: {
      languases: "0110",
      name: "4D Mane",
    },
  },
};
 

/* -----------download resorce-------------- */
// let downloadComplite = new Promise((resolve, reject) => {
//   const database = firebase.database();
//   let dataRef = database.ref("project_data/");
//   dataRef.on("value", (snapshot) => {
//     const data = snapshot.val();
//     resolve(data);
//   }); 
// });
// downloadComplite
//   .then((res) => {
//     project_data = res;
//     console.log(project_data);  
//     /* ----- all resorce download then setup my project -----*/
//     // delay()
//     // $("#loding")[0].style.display = "none";
//     // body.style.overflow = "scroll";
//   })
//   .catch((err) => {
//     console.log(err);
//   });




 

/* ------------------  push firebase ----------------------*/
// (() => {
//   const database = firebase.database();
//   let i = 4;
//   let databaseRef = database.ref().child(`project_data/my_apps/app${i}/`);
//   let sendData = {
//     name: appND[i][0],
//     game_type: appND[i][1],
//     platform: appND[i][2],
//     package_name: appND[i][3],
//     game_graphics: appND[i][4],
//     version: appND[i][5],
//     released_date: appND[i][6],
//     details: appND[i][7],
//     images: appND[i][8],
//   };
//   databaseRef.set(sendData);
// })(); 

// console.log(project_data);
