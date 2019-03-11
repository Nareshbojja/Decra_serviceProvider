
var ev;
console.log('hi');
var gflag = true;
var pos;
var user;
var token;
var selectedkey;
var orderId;
var myCart=[];
var myTotal = 0;
var orderChanges;
var locationChanges;
var hasOrder=false;
var changes;
var activeOrders=[];
var locationService;
var activeOrdersObject={};
var posUpdate;
       var back={  "direction"        : "right", // 'left|right|up|down', default 'left' (which is like 'next')
            "slowdownfactor"   :    2, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
            "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
            "duration":300
      };
             var next={  "direction"        : "left", // 'left|right|up|down', default 'left' (which is like 'next')
            "slowdownfactor"   :    1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
            "slidePixels":0,
            "andriddelay":200,
            "iosdelay":200,
            "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
             "duration":350
      };

        firebase.initializeApp({
    apiKey: "AIzaSyBMrxwa1HOnvvc2rdTFJscrfvpqEGAOVm0",
    authDomain: "justbeep-d5636.firebaseapp.com",
    databaseURL: "https://justbeep-d5636.firebaseio.com",
    projectId: "justbeep-d5636",
    storageBucket: "justbeep-d5636.appspot.com",
    messagingSenderId: "49153713702"
  });
var watch;
var db = firebase.firestore();
  function watchPosition()
  { 

      
      if(gflag)
      {
        console.log("watch started...");
     watch= navigator.geolocation.watchPosition((p)=>{pos=p;
         // console.log("watcher: " + p)
         if(user)
         {
           
         }
          console.log(pos);
          //ev.publish("position Update");
        
      }, (e)=>{console.log(e);}, {enableHighAccuracy:true});
      gflag = false;
      }
  }

  function stopWatch()
  {
    gflag= true;
    navigator.geolocation.clearWatch(watch);
  }
  var tempOption=
  {
    combo:true,
    name:'options test2',
    img:"https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/20393662_505900299745674_8460001815432265728_n.jpg?ig_cache_key=MTU2Njc5NTIzMzI4MjcxODMyOQ%3D%3D.2",
    price:20,
    options:[
      {multi:false,desc:'your size choice.',default:'small',options:[{name:'small',price:0},{name:"large",price:3}]},
      {multi:true,desc:'select addons.',options:[{name:'extra shot',price:3,selected:false},{name:"caramel",price:3,selected:false}]}
    ]

  }
  //db.collection("busienss/pizzaHutMadenahQurban/categories").doc().set({icon:'002',name:'cold drinks',items:[tempOption]},{merge:true});