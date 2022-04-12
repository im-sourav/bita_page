/* when offline make website */
delay()
$("#loding")[0].style.display = "none";
body.style.overflow = "scroll";

function delay() {
  /* ----------------------------- Varibeles ------------------------- */
  const inputIs = $("#inputis");
  const fixedAppList = $("#fixed_app_list")[0];
  const floatingProject = $("#floating_project");
  const fpic = $("#fpic")[0];
  const pt_back_btn = $(".pt_back_btn");
  const card_box1 = $(".card_list")[0];
  const card_box2 = $(".card_list")[1];
  const ulIs = $("#ulis");
  const iIs = $("#iis");
  const myLogo = $("#my_logo");
  const gameList = $("#game_list");
  const slide_btn = $(".slide_btn");
  const previous = $("#previous");
  const next = $("#next");
  const projectMore = $(".project_more");
  const everyProject = $("#every_project")[0];
  let inputText = "";

  /* ----- page changes ------ */
  // go-login-page
  $("#login_button")[0].addEventListener('click', () => {
    location.replace("./user/index.html");
  })
  // go-signup-page
  $("#signup_button")[0].addEventListener('click', () => {
    location.replace("./user/create.html");
  })
  /*  ------------------ sortcart function -------------------------------*/
  // ----------create element--------
  // return class and id
  function returnClassId(Element, array, is) {
    if (array == undefined || array.length <= 0) {
    } else {
      array.forEach((e) => {
        if (is == "class") {
          return Element.classList.add(e);
        } else if (is == "id") {
          return (Element.id = e);
        }
      });
    }
  }
  function ce(Element, appendChild, AddClass, InnerText, AddId) {
    let storeElement = document.createElement(Element);
    returnClassId(storeElement, AddClass, "class");
    returnClassId(storeElement, AddId, "id");
    if (InnerText != undefined && InnerText.length > 0)
      storeElement.innerText = InnerText;
    return appendChild.appendChild(storeElement);
  }


  // ----------create and remove app flotting tab -----------
  // afbb : app float back button
  function afbb(i) {
    const appTab = $("#app_tab")[0];
    appTab.style.display = "block";
    body.style.overflow = "hidden";
    appDT(i);
    const backButton = $(".v_arrow");
    backButton.o("click", () => {
      appTab.style.display = "none";
      body.style.overflow = "scroll";
      removeClass([$("#account")], "click");
      while (fixedAppList.firstChild) {
        fixedAppList.removeChild(fixedAppList.firstChild);
      }
    });
  }
  // gtsah : game tab show and hide
  function gtsah(i) {
    const fixedUi = $("#fixed_ui")[0];
    const gameTabx = $("#game_tab")[0];
    fixedUi.style.display = "block";
    body.style.overflow = "hidden";
    setTab(i);
    const tabBack = $(".tab_back");
    tabBack.o("click", () => {
      fixedUi.style.display = "none";
      body.style.overflow = "scroll";
      removeClass([$("#account")], "click");
      while (gameTabx.firstChild) {
        gameTabx.removeChild(gameTabx.firstChild);
      }
    });
  }
  // -------------input active and deactive----------
  // iaad : input active and deactive
  function iaad(is) {
    if (is == "active") {
      addClass([myLogo, inputIs, ulIs, iIs]);
      fixedItems.style.top = 0 + "px";
      slider.style.top = 0 + "px";
    } else if (is == "deactive") {
      inputIs[0].disabled = true;
      inputIs[0].disabled = false;
      removeClass([myLogo, inputIs, ulIs, iIs]);
      setTimeout(() => {
        searchSagest[0].style.display = "none";
      }, 300);
    }
  }

  // const gamesND = [

  //   ["Snake Worald", "60'FPS Snake Game", "6","1.0.127", "Released on : 07/07/2021"],
  //   ["Tatris Alpha", "Morden Tatris Alpha", "4", "1.0.127", "Released on : 07/07/2021"],
  //   ["Astroid HitsX", "Astroid Worald In Space", "5", "1.0.127", "Released on : 07/07/2021"],
  //   ["Godlike", "I also try to make 3d geme", "3", "1.0.127", "Released on : 07/07/2021"],
  // ];

  // const pd = [
  //   ["3D Cube", "1111"],
  //   ["RGB Text", "1100"],
  //   ["Trigonometry", "1110"],
  //   ["Moving Ball", "1001"],
  //   ["Color Button", "1010"],
  //   ["4D Mane", "0110"],
  // ];
  // const appND = [
  //   [
  //     "Wait For Name",
  //     "Tower Cefense",
  //     "web",
  //     "sourcebegins",
  //     "his app for anything",
  //     "0.0.0.01",
  //     "07-July-2021",
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
  //     "010111",
  //   ],
  //   [
  //     "Wait Free Log",
  //     "Tower Cefense",
  //     "web",
  //     "sourcebegins",
  //     "his app for anything",
  //     "0.0.0.01",
  //     "07-July-2021",
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
  //     "110011",
  //   ],
  //   [
  //     "Wait Lets Play",
  //     "Tower Cefense",
  //     "web",
  //     "sourcebegins",
  //     "his app for anything",
  //     "0.0.0.01",
  //     "07-July-2021",
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
  //     "11010",
  //   ],
  //   [
  //     "Multy Play Game",
  //     "Tower Cefense",
  //     "web",
  //     "sourcebegins",
  //     "his app for anything",
  //     "0.0.0.01",
  //     "07-July-2021",
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
  //     "00001",
  //   ],
  //   [
  //     "Game for World",
  //     "Tower Cefense",
  //     "web",
  //     "sourcebegins",
  //     "his app for anything",
  //     "0.0.0.01",
  //     "07-July-2021",
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facere expedita accusamus ea nisi adipisci rerum animi cupiditate deserunt velit recusandae nesciunt magnam temporibus dicta Ipsam placeat minima ex quia tenetur",
  //     "110001",
  //   ],
  // ];

  // console.log(pd);
  // console.log(project_data.my_apps.app0.name);
  // console.dir(project_data);

  const allGamesLength = objectSize(project_data.all_games);
  const myAppsLength = objectSize(project_data.my_apps);
  const myCreationLength = objectSize(project_data.my_creation);

  function objectSize(obj) {
    let size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  }

  const searchStore = [[], [], []];
  let trueResult = [];

  //  gaem name need for search engin
  for (let i = 0; i < allGamesLength - 1; i++) {
    pushElement(project_data.all_games["g" + i].name, "games", i);
  }
  for (let i = 0; i < myCreationLength; i++) {
    pushElement(project_data.my_creation["p" + i].name, "projects", i);
  }
  for (let i = 0; i < myAppsLength; i++) {
    pushElement(project_data.my_apps["app" + i].name, "apps", i);
  }

  function pushElement(e, className, classNameIndex) {
    searchStore[0].push(e);
    searchStore[1].push(className);
    searchStore[2].push(classNameIndex);
  }

  // console.log(searchStore);
  /* ----------------------- make search value list --------------------------- */
  // cs: create sugest
  function cs(i, ul) {
    const li = ce("li", ul, ["filter_me"], searchStore[0][i]);
    li.addEventListener("click", () => {
      gf(i);
    });
  }

  const searchSagest = $("#search_sagest");
  /* --------------------- Search Filter------------------------- */
  $("#deleteText").o("click", () => {
    inputIs[0].value = "";
    $("#deleteText")[0].style.display = "none";
  });
  inputIs.o("keyup", (e) => {
    trueResult = [];
    inputText = inputIs[0].value.toLowerCase();
    const resultIndexs = [];
    searchStore[0].forEach((e, i) => {
      let addString = e.toLowerCase() + " " + searchStore[1][i];
      let isIndex = addString.indexOf(inputText);
      resultIndexs.push(`${isIndex}.${i}`);
    });
    if (inputText.length > 0) {
      /*                     false    true    true    true
                  indexOf : -1 ,     2,     1,     13
                  array = [] <===  push(  indexOf.i ) 
                  now array = [-1.0, 2.1, 1.2, 13.3]
                  sort array = [-1.0, 1.2, 2.1, 13.3]
                  only index array = [-1, 2, 1, 3]
    */
      newarry = resultIndexs.sort((a, b) => a - b);
      let onlyMatchIndex = newarry.map((e) => {
        if (e[0] != "-") {
          let en;
          for (let i = 0; i < e.length; i++) {
            if (e[i] == ".") {
              en = i + 1;
              break;
            }
          }
          return parseInt(e.slice(en, e.length));
        } else return -1;
      });
      const ih = $("#search_list")[0]; //input hiddener
      while (ih.firstChild) {
        ih.removeChild(ih.firstChild);
      }
      const ul = ce("ul", ih);
      onlyMatchIndex.forEach((e) => {
        if (e != -1) {
          cs(e, ul);
          trueResult.push(e);
        }
      });
      if (onlyMatchIndex.every((e) => e === -1)) {
        searchSagest[0].style.display = "none";
      } else {
        searchSagest[0].style.display = "block";
        $("#deleteText")[0].style.display = "flex";
      }
      if (e.keyCode === 13) {
        if (trueResult.length > 0) gf(trueResult[0]);
      }
    } else {
      searchSagest[0].style.display = "none";
      $("#deleteText")[0].style.display = "none";
    }
  });
  iIs.o("click", () => {
    if (trueResult.length > 0) gf(trueResult[0]);
  });

  //------game filter------------
  // gf : game filter
  function gf(I) {
    if (inputText.length > 0) {
      if (searchStore[1][I] == "games") {
        gtsah(searchStore[2][I]);
      } else if (searchStore[1][I] == "apps") {
        afbb(searchStore[2][I]);
      } else if (searchStore[1][I] == "projects") {
        floatingProject[0].style.display = "flex";
        makeCard(fpic, searchStore[2][I], 0);
        body.style.overflow = "hidden";
        pt_back_btn.o("click", () => {
          floatingProject[0].style.display = "none";
          body.style.overflow = "scroll";
          removeClass([$("#account")], "click");
          while (fpic.firstChild) {
            fpic.removeChild(fpic.firstChild);
          }
        });
      }
      inputIs[0].value = "";
      iaad("deactive");
      $("#deleteText")[0].style.display = "none";
    }
    trueResult = [];
  }

  // ------------------------------------------------
  const slider = $("#slider")[0];
  const close = $(".close")[0];
  const fixedItems = $("#fixed_items")[0];

  let bodyWidth = document.body.offsetWidth;
  let size_e = bodyWidth / 3.6;
  let size_big = bodyWidth / 1.3;

  /* ---------------- every time screen size change ----------------*/
  // window.addEventListener("resize", () => {
  //   if (bodyWidth < 750) {
  //     slider.style.left = `calc(var(--size-e) * -2.4)`;
  //   }else {
  //     slider.style.left = "0";
  //   }
  // })
  try {
    $("#menu").o("click", () => {
      if (bodyWidth <= 749) {
        slider.style.left = "0vw";
        close.style.zIndex = "11";
        body.style.overflow = "hidden";
      }
    });
    $(".close").o("click", () => {
      closeMenu();
    });
    $(".close2").o("click", () => {
      closeMenu();
    });
    var closeMenu = () => {
      if (bodyWidth <= 749) {
        slider.style.left = `calc(var(--size-e) * -2.4)`;
        close.style.zIndex = "-1";
        body.style.overflow = "scroll";
        removeClass([$("#account")], "click");
      }
    };
  } catch (err) {
    console.log(err);
  }

  /* ------------------------ all  Event lestener --------------------*/
  scrollMD(gameList);

  let scrollLeft = 0;
  function scrollMD(element) {
    let startX = 0,
      Xstore;
    let str = false;
    element.o("mousedown", (e) => {
      str = true;
      startX = e.clientX;
    });
    element.o("mousemove", (e) => {
      if (str) {
        let daltaX = e.clientX - startX;
        if (
          element[0].scrollWidth - bodyWidth >= (scrollLeft + daltaX) * -1 &&
          0 <= (scrollLeft + daltaX) * -1
        ) {
          Xstore = daltaX;
          element[0].scrollLeft = (scrollLeft + Xstore) * -1;
        }
      }
    });
    element.o("mouseup", (e) => {
      str = false;
      scrollLeft = scrollLeft + Xstore;
    });
  }

  try {
    inputIs.o("click", () => {
      iaad("active");
    });

    inputIs.o("focusout", () => {
      iaad("deactive");
    });
  } catch (err) {
    console.log(err);
  }

  previous.o("click", () => {
    projectClickScroll(-1);
  });
  next.o("click", () => {
    projectClickScroll(1);
  });
  // -------------------------for scroll efect-----------------
  try {
    let pastScroll = 0,
      itemsTop = 0;
    window.onscroll = () => {
      $(".list_name").s({ color: "#aaaaaa" });
      if (dl($("#home")[0])) {
        $(".list_name")[0].style.color = "#ffffff";
        sall(false);
      } else if (dl($("#game_contener")[0])) {
        sall(false);
        $(".list_name")[1].style.color = "#ffffff";
      } else if (dl($("#project_contener")[0])) {
        sall(false);
        $(".list_name")[2].style.color = "#ffffff";
      } else if (dl($("#app_contener")[0])) {
        $(".list_name")[3].style.color = "#ffffff";
        sall(false);
      } else if (dl($("#about_me")[0])) {
        $(".list_name")[4].style.color = "#ffffff";
        sall(true);
      }
      iaad("deactive");
      removeClass([$("#account")], "click");
      bodyWidth = document.body.offsetWidth;
      searchSagest[0].style.display = "none";

      let newScroll = pastScroll - window.pageYOffset;
      pastScroll = window.pageYOffset;
      itemsTop += newScroll;
      if (itemsTop <= -fixedItems.offsetHeight - 20) {
        itemsTop = -fixedItems.offsetHeight - 20;
        myLogo[0].style.display = "none";
      } else if (itemsTop >= 0) {
        itemsTop = 0;
        if (bodyWidth >= 750) myLogo[0].style.display = "flex";
      }
      if (bodyWidth >= 750) st(slider, itemsTop);
      st(fixedItems, itemsTop);
    };

    // ------ style top ------//
    function st(element, value) {
      element.style.top = value + "px";
    }
    // ------- sall --------//
    function sall(is) {
      $(".sall").forEach((e, i) => {
        let id = "#s" + (i + 1);
        if (is) $(id)[0].classList.add("active");
        else $(id)[0].classList.remove("active");
      });
    }
    // decact the scroll location
    function dl(element) {
      return (
        window.pageYOffset < element.offsetTop + element.offsetHeight / 1.5
      );
    }
  } catch (err) {
    console.log(err);
  }

  // -----------------add images in latest scroll list------------------
  const scrolList = $("#scroll_list")[0];
  const lgi = $(".img_boxs"); // lgi : latest games images
  const lu = $("#latest_update");
  lu[0].style.height = size_e * 2 + "px"; // for css

  let startX = 0,
    Xstore = 0,
    aiMove = true;
  let lgiLength = 0;
  let liveIndex = 1;
  const imgArray = [
    [5, 0, 1],
    [4, 5, 0],
    [3, 4, 5],
    [2, 3, 4],
    [1, 2, 3],
    [0, 1, 2],
  ];
  try {
    // create latest Game title and others //
    $(".lg_name")[0].innerText =
      project_data.all_games[`g${allGamesLength - 1}`].name;
    $(".lg_v")[0].innerText =
      "Version :" + project_data.all_games[`g${allGamesLength - 1}`].version;

    // movment //
    let timeRefrash = new Date();
    function updateIMG() {
      setTimeout(() => {
        let lgix = $(".img_boxs");
        lgiLength = lgix.length;
        for (let x = 0; x < lgiLength; x++) {
          scrolList.removeChild(lgix[x]);
        }
        if (liveIndex >= 6) liveIndex = 0;
        if (liveIndex <= -1) liveIndex = 5;
        scrolList.style.transition = "none";
        for (let i = 0; i < 3; i++) {
          const addSLC = ce("div", scrolList, ["img_boxs"]); // addSLC: add scroll list class
          addSLC.style.backgroundImage = `url("resource/imgs/g${
            allGamesLength - 1
          }/p${imgArray[liveIndex][i]}.jpg")`;
        }
        scrolList.style.left = `${-bodyWidth}px`;
      }, 400);
      setTimeout(() => {
        if (new Date() - timeRefrash >= 5000 && aiMove) {
          scrolList.style.transition = "linear 0.4s";
          scrolList.style.left = "0";
          liveIndex++;
          updateIMG();
        }
      }, 5000);
    }
    updateIMG();

    lu.o("touchstart", (e) => {
      startX = e.touches[0].clientX;
      ckickStart();
    });
    lu.o("touchmove", (e) => {
      Xstore = e.touches[0].clientX - startX;
      ckickMove();
    });
    lu.o("touchend", () => {
      ckickEnd();
    });
    // ----------------------------- for pc mouse------------------------
    let str = false;
    lu.o("mousedown", (e) => {
      str = true;
      ckickStart();
      startX = e.clientX;
    });
    lu.o("mousemove", (e) => {
      if (str) {
        Xstore = e.clientX - startX;
        ckickMove();
      }
    });
    lu.o("mouseup", (e) => {
      ckickEnd();
      str = false;
    });
    // ----------------------- touch and mouse function ------------------
    function ckickStart() {
      aiMove = false;
      scrolList.style.transition = "none";
    }
    function ckickMove() {
      let Xstoren = Math.sqrt(Math.pow(Xstore, 2));
      if (Xstoren > 15)
        scrolList.style.left = `calc(${-bodyWidth + Xstore * 2}px)`;
    }
    function ckickEnd() {
      scrolList.style.transition = "linear 0.4s";
      if (Xstore > bodyWidth / 8) {
        // scroll right
        scrolList.style.left = "0";
        liveIndex++;
      } else if (Xstore < -(bodyWidth / 8)) {
        // scroll left
        scrolList.style.left = `${-bodyWidth * 2}px`;
        liveIndex--;
      } else scrolList.style.left = `${-bodyWidth}px`;
      aiMove = true;
      timeRefrash = new Date();
      updateIMG();
    }
  } catch (err) {
    console.log(err);
  }

  // user profile menu
$("#account").o("click", (e) => {
  addClass([$("#account")], "click");
})

  // ----------------------------make game list----------------------------------
  // console.log(project_data.all_games["g" + 1].name);

  function setTab(i) {
    try {
      const gameTab = $("#game_tab")[0];
      // back button
      const backBtn = ce("div", gameTab, ["back_button"]);
      const spanx = ce("span", backBtn, ["v_arrow", "back_press", "tab_back"]);
      const mki = ce("i", spanx, ["mk_arrowb"]);
      const mki1 = ce("i", spanx, ["mk_line"]);
      // game description
      const game_details = ce("div", gameTab, ["game_details"]);
      const h2 = ce(
        "h2",
        game_details,
        [],
        project_data.all_games[`g${i}`].name
      );
      const h6 = ce(
        "h6",
        game_details,
        [],
        project_data.all_games[`g${i}`].details
      );
      // image box
      const tab_image_box = ce("div", gameTab, ["tab_image_box"]);
      for (let j = 0; j < project_data.all_games[`g${i}`].images; j++) {
        const tab_image = ce("div", tab_image_box, ["tab_image"]);
        tab_image.style.backgroundImage = `url(resource/imgs/g${i}/p${j}.jpg)`;
      }

      const gmabout = ce("div", gameTab, ["gm_about"]);
      ce("h6", gmabout, [], project_data.all_games[`g${i}`].released_date);
      ce(
        "h6",
        gmabout,
        [],
        "Version : " + project_data.all_games[`g${i}`].version
      );
      // play button
      const playNow = ce("div", gameTab, ["play_now"]);
      const px = ce("p", playNow, [], "Play Now");
      // download source code
      const downloadSrc = ce("div", gameTab, ["download_src"]);
      const span = ce("span", downloadSrc);
      const I = ce("i", span, ["fas", "fa-file-download"]);
      const P = ce("p", span, [], "Download Source");
    } catch (err) {
      console.log(err);
    }
  }

  try {
    for (let i = 0; i < allGamesLength - 1; i++) {
      const box = ce("div", gameList[0], ["G", "games" + i]);
      // image box
      const game_image = ce("div", box, ["game_image"]);
      game_image.style.backgroundImage = `url(resource/imgs/g${i}/p${0}.jpg)`;
      // game description
      const game_dtls = ce("div", box, ["game_dtls"]);
      const p = ce("h3", game_dtls, [], project_data.all_games[`g${i}`].name);
      const h5 = ce(
        "h6",
        game_dtls,
        [],
        project_data.all_games[`g${i}`].details
      );
    }

    const gp = $(".G");
    const fixedUi = $("#fixed_ui")[0];

    gp.forEach((e, i) => {
      e.addEventListener("click", () => {
        fixedUi.style.display = "block";
        gtsah(i);
      });
    });
  } catch (err) {
    console.log(err);
  }

  //   ------------------my project---------------------------
  let everyProjectHeight = $("#every_project")[0].offsetHeight;
  let d1 = everyProjectHeight / 9;

  // --------make only project card---------
  function makeCard(TargatElement, i, classindex) {
    try {
      const card = ce("div", TargatElement, [
        "card",
        "card" + classindex,
        "projects" + i,
      ]); //  ----------card-----------
      card.style.height = d1 * 4 + "px"; // ------card height : this; css---------//
      if (bodyWidth >= 750) {
        card.style.height = "100%";
      }
      card.style.backgroundImage = `url("resource/imgs/projects/p${i}.jpg")`;
      const blur_box = ce("div", card, ["blur_box"]);
      const card_dtls = ce("div", card, ["card_dtls"]); // ------------card dtls------------
      const card_name = ce("div", card_dtls, ["card_name"]);
      const nameP = ce(
        "p",
        card_name,
        [],
        project_data.my_creation[`p${i}`].name
      );
      const language = ce("div", card_dtls, ["language"]);
      for (
        let j = 0;
        j <= project_data.my_creation[`p${i}`].languases.length;
        j++
      ) {
        if (parseInt(project_data.my_creation[`p${i}`].languases[j])) {
          const img = ce("img", language);
          img.src = `resource/svgs/language/${j + 1}.svg`;
        }
      }
      for (let btnx = 0; btnx < 2; btnx++) {
        let current =
          btnx == 0
            ? ["card_view", "fas", "fa-street-view", "View"]
            : ["project_download", "fas", "fa-file-download", "Source"];
        const card_view = ce("button", card_dtls, [current[0], "cmone"]);
        const btnI = ce("i", card_view, [current[1], current[2]]);
        const btnP = ce("p", card_view, [], current[3]);
      }
    } catch (err) {
      console.log(err);
    }
  }
  try {
    for (let i = myCreationLength - 1; i >= 0; i--) {
      let card_box = i % 2 != 0 ? card_box2 : card_box1;
      let classno = i % 2 == 0 ? 2 : 1;
      makeCard(card_box, i, classno);
    }
  } catch (err) {
    console.log(err);
  }

  //  -------------------------------- make apps download -------------------------------------
  const appList = $("#app_list")[0];

  try {
    const app_ul = ce("ul", appList, [], undefined, ["app_ul"]);
    for (let i = myAppsLength - 1; i >= 0; i--) {
      const app = ce("li", app_ul, ["app", "apps" + i]);
      const app_icon = ce("div", app, ["app_icon"]);
      const adc = ce("div", app, ["adc"]);
      const app_name = ce("div", adc, ["app_name"]);
      const pn = ce(
        "h4",
        app_name,
        [],
        project_data.my_apps[`app${i}`].name +
          " \n " +
          project_data.my_apps[`app${i}`].game_type
      );
      const app_from = ce("div", adc, ["app_from"]);
      const af = ce(
        "h5",
        app_from,
        [],
        project_data.my_apps[`app${i}`].platform
      );
      const app_pack = ce("div", adc, ["app_pack"]);
      const pp = ce(
        "p",
        app_pack,
        [],
        project_data.my_apps[`app${i}`].game_graphics
      );
      const app_dtls = ce("div", adc, ["app_dtls"]);
      const prd = ce(
        "p",
        app_dtls,
        [],
        project_data.my_apps[`app${i}`].package_name
      );
      const app_v = ce("div", adc, ["app_v"]);
      const pv = ce(
        "p",
        app_v,
        [],
        "Version " + project_data.my_apps[`app${i}`].version
      );
    }
  } catch (err) {
    console.log(err);
  }

  // -------------------------------- app download tab -------------------------

  function appDT(i) {
    try {
      const back_button = ce("div", fixedAppList, ["back_button"]);
      const v_arrow = ce("span", back_button, ["v_arrow"]);
      const mk_arrowb = ce("i", v_arrow, ["mk_arrowb"]);
      const mk_line = ce("i", v_arrow, ["mk_line"]);
      const app_tab_details = ce("div", fixedAppList, ["app_tab_details"]);
      const ai = ce("div", app_tab_details, ["ai"]);
      const an = ce("div", app_tab_details, ["an"]);
      const aname = ce(
        "h2",
        an,
        [],
        project_data.my_apps[`app${i}`].name +
          " \n " +
          project_data.my_apps[`app${i}`].game_type
      );
      const ap = ce("div", app_tab_details, ["apps"]);
      const apack = ce(
        "p",
        ap,
        [],
        project_data.my_apps[`app${i}`].package_name
      );
      const imageContener = ce("div", fixedAppList, ["image_contener"]);
      imageContener.style.height = `${size_e * 1.8}px`;
      const app_images = ce("div", imageContener, ["app_images"]);
      for (let j = 0; j < project_data.my_apps[`app${i}`].images.length; j++) {
        let size =
          parseInt(project_data.my_apps[`app${i}`].images[j]) == 1
            ? `${size_big}px`
            : `${size_big / 3}px`;
        const app_img = ce("div", app_images, ["app_img"]);
        app_img.style.backgroundImage = `url("resource/imgs/g0/p${j}.jpg")`;
        app_img.style.minWidth = size;
      }
      const app_ad = ce("div", fixedAppList, ["app_ad"]);
      const app_about = ce("div", app_ad, ["app_about"]);
      const h3 = ce("h3", app_about, [], "About This App");
      const afrom = ce("div", app_ad, ["afrom"]);
      const atf = ce("p", afrom, [], project_data.my_apps[`app${i}`].platform);
      const atn = ce("div", app_ad, ["atn"]);
      const atnp = ce("p", atn, [], project_data.my_apps[`app${i}`].details);
      const version = ce("div", app_ad, ["version"], "Version");
      const v_num = ce(
        "div",
        app_ad,
        ["v_num"],
        project_data.my_apps[`app${i}`].version
      );
      const releas = ce("div", app_ad, ["releas"], "Released on");
      const releas_date = ce(
        "div",
        app_ad,
        ["releas_date"],
        project_data.my_apps[`app${i}`].released_date
      );
      const app_download_btn = ce("div", fixedAppList, ["app_download_btn"]);
      const ati = ce("i", app_download_btn, ["fab", "fa-google-play"]);
      const adp = ce("h3", app_download_btn, [], "Download");
      scrollMD($(".app_images"));
    } catch (err) {
      console.log(err);
    }
  }

  const apps = $(".app");
  try {
    apps.forEach((App, i) => {
      App.addEventListener("click", () => {
        afbb(myAppsLength - 1 - i);
      });
    });
  } catch (err) {
    console.log(err);
  }

  //--------------------------------- myProject omre button work -----------------------------
  const pMore = $(".pmore");
  const cardX = $(".card");
  const card1 = $(".card1");
  const card2 = $(".card2");

  let PmoreIs = true;
  everyProject.style.margin = "0px " + (bodyWidth - 310 * wd()) / 2 + "px";
  if (bodyWidth >= 750) everyProject.style.margin = "0px";

  function wd() {
    if (bodyWidth > (310 * myCreationLength) / 2) {
      return myCreationLength / 2;
    }
    for (let i = 0; i < myCreationLength; i++) {
      if (bodyWidth <= 310 * i) {
        return i - 1;
      }
    }
  }
  if (bodyWidth < 750) {
    cardDisplay("none");
  }

  function cardDisplay(displayStyle) {
    for (let i = Math.floor(wd()); i < Math.floor(myCreationLength / 2); i++) {
      card1[i].style.display = displayStyle;
      card2[i].style.display = displayStyle;
      if (myCreationLength % 2 != 0) {
        card2[Math.floor(myCreationLength / 2)].style.display = displayStyle;
      }
    }
  }

  try {
    pMore.o("click", () => {
      if (!PmoreIs) {
        projectMore.s({ transform: "rotate(-45deg)" });
        everyProject.scrollLeft = "0";
        if (bodyWidth < 750) {
          everyProject.style.overflowX = "hidden";
          everyProject.style.margin =
            "0px " + (bodyWidth - 310 * wd()) / 2 + "px";
          cardDisplay("none");
        } else if (bodyWidth >= 750) {
        }
      } else {
        projectMore.s({ transform: "rotate(135deg)" });
        if (bodyWidth < 750) {
          everyProject.style.overflowX = "scroll";
          everyProject.style.margin = "0px";
          cardDisplay("grid");
        }
      }
      PmoreIs = PmoreIs == false ? true : false;
    });
  } catch (err) {
    console.log(err);
  }

  //--------------------------------- app omre button -----------------------------
  const appMore = $(".app_more");
  moreForapp = $(".more_forapp");
  let offser = myAppsLength >= 4 ? 4 : myAppsLength;
  appList.style.height = 120 * offser + "px"; // -----------css----------
  let AmoreIs = false;
  try {
    moreForapp.o("click", () => {
      if (!AmoreIs) {
        appMore.s({ transform: "rotate(225deg)" });
        appList.style.height = "auto";
      } else {
        appMore.s({ transform: "rotate(45deg)" });
        appList.style.height = 120 * offser + "px";
      }
      AmoreIs = AmoreIs == true ? false : true;
    });
  } catch (err) {
    console.log(err);
  }

  // -------------------skill ------------------
  const anid = $(".anid");
  anid.forEach((e, i) => {
    e.style.animationDelay = i + "s";
  });

  try {
    // window.onscroll = false;
  } catch (err) {
    console.dir(err);
  }

  function projectClickScroll(dir) {
    let distance = everyProject.clientWidth - everyProject.clientWidth / 8;
    let sl = everyProject.scrollLeft;
    let ll = 0;
    time = 1000;
    function loop() {
      ll += (distance / time) * 10;
      if (ll < distance) setTimeout(loop, 3);
      if (dir == 1) {
        everyProject.scrollLeft = sl + ll;
      } else if (dir == -1) {
        everyProject.scrollLeft = sl + -ll;
      }
      if (
        everyProject.scrollLeft + 10 >=
        everyProject.scrollWidth - everyProject.clientWidth
      )
        slide_btn[1].style.width = addClass([$("#slide_b2")]);
      else slide_btn[1].style.width = removeClass([$("#slide_b2")]);
      if (everyProject.scrollLeft - 5 <= 0)
        slide_btn[0].style.width = addClass([$("#slide_b1")]);
      else slide_btn[0].style.width = removeClass([$("#slide_b1")]);
    }
    loop();
  }

  $(".List").forEach((e, i) => {
    e.addEventListener("click", () => {
      $(".list_name").s({ color: "#aaaaaa" });
      $(".list_name")[i].style.color = "#ffffff";
      if (i == 0) {
        sud($("#home")[0]);
      } else if (i == 1) {
        sud($("#game_contener")[0]);
      } else if (i == 2) {
        sud($("#project_contener")[0]);
      } else if (i == 3) {
        sud($("#app_contener")[0]);
      } else if (i == 4) {
        sud($("#about_me")[0]);
      }
    });
  });

  function sud(element) {
    let distance = element.getBoundingClientRect().top;
    let start = window.pageYOffset;
    let time = Math.sqrt(Math.pow(distance, 2)) / 1.5;
    let i = 0;
    function pgLoop() {
      i += (distance / time) * 10;
      window.scrollTo(0, start + i);
      if (Math.sqrt(Math.pow(i, 2)) < Math.sqrt(Math.pow(distance, 2)))
        setTimeout(pgLoop, 3);
    }
    pgLoop();
  }
}
