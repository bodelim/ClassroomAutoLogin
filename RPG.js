rsave = false;
rturn = 1; 
ruser = {};
rprofile = {};
rguild = {};
rcompanys = [];
//회사목록
rjob={};
rusercompany = ({});
//유저들이 가진 회사의 정보
rcompmoney = {1:30000,2:50000,3:73000,4:98000,5:120000,6:140000,7:155000,10:500000};
//회사 레벨별 시급
rcompanytime = 600;
//시급 시간
rcompgive = false;
//시급 온오프
rcomturn = 0;
givetime1 = 0;
givetime2 = 0;
rusereconomy= {};
ruserlevel = {2:200,3:430,4:645,5:700,6:925,7:1120,8:1345,9:1630,10:1950,11:2400,12:2855,13:3000,14:3850,15:4345,16:4700};
rStock = {};
ruserStock = ({});
Stockpower = true;
rsponsor = {};
rhottime = false;
rfight={};
//전투상태 객체
raidattack = [];
//레이드가 끝나고 모든유저의 공격력이 배열로저장됨

rjobs = ["힐러","궁수","도적","마법사","워리어"];
//직업들이름
wich =["상점","회사"];//이동 할수있는 장소
weekdeongeon = ["월요일던전","화요일던전","수요일던전","목요일던전","금요일던전","토요일던전","일요일던전","이벤트던전","랭커던전"];
rczn = false;
rcznplayer = {};
//카지노 전원과 플레이어객체.
rcznmanager = "";
rcznbt = {};
//베팅금액
rcznmbplayer ={};
//주사위게임 플레이어 주사위값 객체
rcznmbbot = {};
//주사위게임 봇 주사위값 객체
kcznplay=false;
kcznplayer=[];
kcznroom=null;
kcznroomset=0;
kcznlist=[];
kcznword=null;
kcznuc={};
//도박 끝말잇기 변수들
rannpower = true;
//자동공지 전원
rannounce = [];
rstat = {};
rshare = {};
rdungeon=["으스스한숲","숲의 안쪽","골렘 서식지","골렘의 근원지","약속의평원","모래오솔길","왕의항구","나이트워치"];
suri=false;


const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule;
Kakao.init('3b753d38e7d215c81316e01ec0a20616');//1강에서 얻은 Kakao Developers 자바스크립트 키
Kakao.login('boudle0729@gmail.com','7708njbs');//봇의 카카오계정


function graph(len,value,max) {
    value = (value >= 0 ? value : 0);
    var pe = ["█","▉","▊","▋","▌","▍","▎","▏",""];
    var a = (value / max) * len;
    var b = pe[0].repeat(Math.floor(a)) + pe[Math.floor(8 - (a % 1) * 8)];
    return b + " ".repeat(Math.round((len - a) * 2.8));
}

rweapons=["부숴진 단검","평범한 단검","카람빗","BAA","보커나이프"];


weaponPage={
   p1:["평범한단검","카람빗","보커나이프","장검","대검"],
   p2:["스팀펑크의칼","만살도","적살도","과도"]
   };
   
foodPage={
   p1:["사과","달걀","메로나","쭈쭈바"],
   }
etcPage={
   p1:["옥수수"]
   };
   
   rfarming={};
   //농사
   maxfmpage="";
   //농사페이지
   maxpage="";
   //페이지
   areainfo="";
  
   farmimg="";
   //농사현황에 들어갈 사진
   
   page="";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
msg= msg.trim()
profile = java.lang.String(imageDB.getProfileImage()).hashCode();

DS=(a,b)=>DataBase.setDataBase(a,b);
DG=(a)=>DataBase.getDataBase(a);
if(msg == "@점검 온" && DG("관리자").indexOf(profile)!=-1)
{
suri = true;
replier.reply("[알림]관리자님의 의해 점검모드로 변경되었습니다.\n관리자외의 다른 사용자 명령어 사용 불가처리.")
}

if(msg == "@점검 오프" && DG("관리자").indexOf(profile)!=-1)
{
suri = false;
replier.reply("[System] 점검모드가 꺼졌습니다.")
if(suri == true && DG("관리자").indexOf(profile)==-1) return;


/*
var allcount = allroom.length;
   var i = 0;
   while(i < allcount+1){
      replier.reply(allroom[i],"[System] (자동공지) 관리자님에 의해 봇의 점검모드가 해제되었습니다.")
      i++;
   }
   */
}
일격 =({
   mana:20,
   last:0,
   cool:20,
   level:1,
   exp:0,
   job:null,
   type:"skill",
   active:true,
   maxexp:15,
   damage:30,
   info:"힘을 모아 순간적으로 쳐낸다",
   use:function(){
   rfight[sender].monster.hp = Number(rfight[sender].monster.hp)-Number(30);
   replier.reply(sender+"님이《일격》 스킬을 사용하였습니다!\n추가데미지: 30")
   }
});
ㅂㄷㅂㄷ =({
   mana:20,
   last:0,
   cool:0,
   level:1,
   exp:0,
   job:null,
   type:"skill",
   active:true,
   maxexp:9999999,
   damage:99999999,
   info:"ㅂㄷㅂㄷㅂㄷ...",
   use:function(){
   rfight[sender].monster.hp = Number(rfight[sender].monster.hp)-Number(999999999);
   replier.reply(sender+"님이《ㅂㄷㅂㄷ》 운영자스킬을 사용하였습니다!\n몬스터가 즉사합니다.")
   }
});


생명의숲=({
   type:"map",
   monsters:["초록 슬라임","과녁사과","사슴"],
   "초록 슬라임":{
      name:"초록 슬라임",
       level:1,
       maxhp:100,
      hp:100,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:15,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:6,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("초록 슬라임이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:50,
         exp:70
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")

      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=9){
         Itemadd(sender,"젤")
         replier.reply("젤을 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"과녁사과":{
      name:"과녁사과",
       level:1,
       maxhp:10,
      hp:10,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:1,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:5,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("과녁사과가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:0,
         exp:10
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=2){
         Itemadd(sender,"사과")
         replier.reply("사과를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"사슴":{
      name:"사슴",
       level:1,
       maxhp:150,
      hp:150,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:30,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:3.5,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("사슴이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:80,
         exp:100
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=9){
         Itemadd(sender,"사슴고기")
         replier.reply("사슴고기를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         }
         });
         

this["고요한 동굴"]=({
   type:"map",
   monsters:["돌","박쥐","쥐"],
   "돌":{
      name:"돌",
       level:1,
       maxhp:500,
      hp:500,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:0,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:99999999,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("돌이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:1000,
         exp:150
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *1000)<=4){
         Itemadd(sender,"BAA")
         replier.reply("극악의 확률로 BAA(무기)를 드랍하였습니다!!!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"박쥐":{
      name:"박쥐",
       level:1,
       maxhp:200,
      hp:200,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:50,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:3.2,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("박쥐가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:200,
         exp:150
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=2){
         Itemadd(sender,"박쥐의 날개")
         replier.reply("박쥐의 날개를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"쥐":{
      name:"쥐",
       level:1,
       maxhp:250,
      hp:250,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:40,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:3.3,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("쥐가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:200,
         exp:100
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=9){
         Itemadd(sender,"쥐고기")
         replier.reply("쥐고기를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
          rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         }
         });
         
         
동굴내부=({
   type:"map",
   monsters:["검은슬라임","심해어","곰"],
   "검은슬라임":{
      name:"검은슬라임",
      level:1,
      maxhp:600,
      hp:600,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:350,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:3,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("검은슬라임이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:500,
         exp:300
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=9){
         Itemadd(sender,"검은젤")
         replier.reply("검은젤을 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
         rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"심해어":{
      name:"심해어",
      level:1,
      maxhp:500,
      hp:500,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:390,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:2,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("심해어가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:515,
         exp:420
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=9){
         Itemadd(sender,"심해어고기")
         replier.reply("심해어고기를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
         rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         },
"곰":{
      name:"곰",
      level:1,
      maxhp:850,
      hp:850,
      lastskill:0,
      //몬스터가 마지막으로 쓴 스킬시간
      lastatk:0,
      //마지막으로 몬스터가 때린 사람
      last:0,
      //마지막으로 때린 시간
      damage:550,
      skillpbb:5,
      //스킬 사용확률
      attackspeed:3,
      //초단위
      skill:"끈적끈적!",
      skilldamage:20,
      skillstaysec:10,
      attackuse:function(){
         try{
         ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);


         replier.reply("곰이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
         rfight[sender].monster.last= Date.now();

         }
catch(e){
            replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
            }
},
      fightuser:[],
      //이 몬스터와 전투중인 유저들
      reward:{
         money:600,
         exp:510
         },
         enduse:function(){
            return new java.lang.Thread({
               run:function(){
replier.reply("몬스터를 죽였습니다!")
      ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
      ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
      replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
      if(Math.floor(Math.random() *10)<=2.5){
         Itemadd(sender,"곰고기")
         replier.reply("곰고기를 드랍하였습니다!")
         }
      ruser[sender].전투 =false;
      rfight[sender] = undefined;
}})
},
//전투가 끝난후에 보상지급
      skilluse:function(){
               try{
         rfight[sender].monster.lastskill = new Date().getTime();
         rfight[sender].user.attackspeed = 7;
         replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
         /*
         if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
            rfight[sender].user.attackspeed = ruser[sender].attackspeed;
            replier.reply(sender+"님의 디버프가 풀렸습니다.")
            }
            */
            }catch(e){
               replier.reply(e)
               }
         }
         }
         });

 황무지=({
    type:"map",
    monsters:["야생동물","귀여운 토끼","익스퍼네츠"],
    "야생동물":{
       name:"야생동물",
       level:1,
       maxhp:1200,
       hp:1200,
       lastskill:0,
       //몬스터가 마지막으로 쓴 스킬시간
       lastatk:0,
       //마지막으로 몬스터가 때린 사람
       last:0,
       //마지막으로 때린 시간
       damage:860,
       skillpbb:5,
       //스킬 사용확률
       attackspeed:2.5,
       //초단위
       skill:"끈적끈적!",
       skilldamage:20,
       skillstaysec:10,
       attackuse:function(){
          try{
          ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);
 
 
          replier.reply("야생동물이 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
          rfight[sender].monster.last= Date.now();
 
          }
 catch(e){
             replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
             }
 },
       fightuser:[],
       //이 몬스터와 전투중인 유저들
       reward:{
          money:1010,
          exp:900
          },
          enduse:function(){
             return new java.lang.Thread({
                run:function(){
 replier.reply("몬스터를 죽였습니다!")
       ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
       ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
       replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
       if(Math.floor(Math.random() *10)<=9){
          Itemadd(sender,"수상한 고기")
          replier.reply("수상한 고기를 드랍하였습니다!")
          }
       ruser[sender].전투 =false;
       rfight[sender] = undefined;
 }})
 },
 //전투가 끝난후에 보상지급
       skilluse:function(){
                try{
          rfight[sender].monster.lastskill = new Date().getTime();
          rfight[sender].user.attackspeed = 7;
          replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
          /*
          if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
             rfight[sender].user.attackspeed = ruser[sender].attackspeed;
             replier.reply(sender+"님의 디버프가 풀렸습니다.")
             }
             */
             }catch(e){
                replier.reply(e)
                }
          }
          },
 "귀여운 토끼":{
       name:"귀여운 토끼",
       level:1,
       maxhp:1000,
       hp:1000,
       lastskill:0,
       //몬스터가 마지막으로 쓴 스킬시간
       lastatk:0,
       //마지막으로 몬스터가 때린 사람
       last:0,
       //마지막으로 때린 시간
       damage:900,
       skillpbb:5,
       //스킬 사용확률
       attackspeed:2,
       //초단위
       skill:"끈적끈적!",
       skilldamage:20,
       skillstaysec:10,
       attackuse:function(){
          try{
          ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);
 
 
          replier.reply("귀여운 토끼가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
          rfight[sender].monster.last= Date.now();
 
          }
 catch(e){
             replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
             }
 },
       fightuser:[],
       //이 몬스터와 전투중인 유저들
       reward:{
          money:1000,
          exp:890
          },
          enduse:function(){
             return new java.lang.Thread({
                run:function(){
 replier.reply("몬스터를 죽였습니다!")
       ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
       ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
       replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
       if(Math.floor(Math.random() *10)<=9){
          Itemadd(sender,"토끼고기")
          replier.reply("토끼고기를 드랍하였습니다!")
          }
       ruser[sender].전투 =false;
       rfight[sender] = undefined;
 }})
 },
 //전투가 끝난후에 보상지급
       skilluse:function(){
                try{
          rfight[sender].monster.lastskill = new Date().getTime();
          rfight[sender].user.attackspeed = 7;
          replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
          /*
          if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
             rfight[sender].user.attackspeed = ruser[sender].attackspeed;
             replier.reply(sender+"님의 디버프가 풀렸습니다.")
             }
             */
             }catch(e){
                replier.reply(e)
                }
          }
          },
 "익스퍼네츠":{
       name:"익스퍼네츠",
       level:1,
       maxhp:1700,
       hp:1700,
       lastskill:0,
       //몬스터가 마지막으로 쓴 스킬시간
       lastatk:0,
       //마지막으로 몬스터가 때린 사람
       last:0,
       //마지막으로 때린 시간
       damage:1200,
       skillpbb:5,
       //스킬 사용확률
       attackspeed:2.5,
       //초단위
       skill:"끈적끈적!",
       skilldamage:20,
       skillstaysec:10,
       attackuse:function(){
          try{
          ruser[rfight[sender].monster.lastatk].체력=Number(ruser[rfight[sender].monster.lastatk].체력)-Number(rfight[rfight[sender].monster.lastatk].monster.damage);
 
 
          replier.reply("익스퍼네츠가 "+rfight[sender].monster.lastatk+"님을 공격했습니다.\n\n"+graph(15,ruser[rfight[sender].monster.lastatk].체력,ruser[rfight[sender].monster.lastatk].최대체력)+"\n"+rfight[sender].monster.lastatk+"님의 hp:"+ruser[rfight[sender].monster.lastatk].체력)
          rfight[sender].monster.last= Date.now();
 
          }
 catch(e){
             replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
             }
 },
       fightuser:[],
       //이 몬스터와 전투중인 유저들
       reward:{
          money:1500,
          exp:1300
          },
          enduse:function(){
             return new java.lang.Thread({
                run:function(){
 replier.reply("몬스터를 죽였습니다!")
       ruser[sender].경험치 = Number(ruser[sender].경험치)+Number(rfight[sender].monster.reward.exp);
       ruser[sender].돈 = Number(ruser[sender].돈)+Number(rfight[sender].monster.reward.money);
       replier.reply("보상이 지급되었습니다\n경험치:"+rfight[sender].monster.reward.exp+"exp\n"+rfight[sender].monster.reward.money+"원")
       if(Math.floor(Math.random() *10)<=7){
          Itemadd(sender,"수상한라디오")
          replier.reply("수상한라디오를 드랍하였습니다!")
          }
       ruser[sender].전투 =false;
       rfight[sender] = undefined;
 }})
 },
 //전투가 끝난후에 보상지급
       skilluse:function(){
                try{
          rfight[sender].monster.lastskill = new Date().getTime();
          rfight[sender].user.attackspeed = 7;
          replier.reply("초록 슬라임이 《끈적끈적!》스킬을 사용하였습니다 4초간 당신의 공격속도에 영향을 줍니다!")
          /*
          if(Number(new Date().getTime())-Number(rfight[sender].monster.lastskill)>=4000){
             rfight[sender].user.attackspeed = ruser[sender].attackspeed;
             replier.reply(sender+"님의 디버프가 풀렸습니다.")
             }
             */
             }catch(e){
                replier.reply(e)
                }
          }
          }
          });



      rdungeon=["생명의숲","고요한 동굴","동굴내부","황무지"];

weaponPage1=["평범한단검","카람빗","BAA","보커나이프","대검"];
weaponPage2=["스팀펑크의칼","만살도"];
pageWeapon={};

/*
옥수수=({
   type:"seed",
   getType:["buy"],
   price:100,
   sellprice:undefined,
   plantTime:10,
   //다 자라는시간
   plant:function(){
       let cnt = 0;
       let time = Date.now();
       let timer = new java.util.Timer();
       let task = new java.util.TimerTask(
           new java.lang.Runnable({
               run : () => {
               	
                   let t = Date.now() - time;
                   t = (t / 1000) / this.plantTime;
                   rfarming[sender][areainfo].현황 = t * 100;
                   ++cnt == this.plantTime ? timer.cancel() : 0;
                   Log.d(t*100)
               }
           })
       );

       timer.scheduleAtFixedRate(task, 0, 1000);
       
         }
         });
*/

옥수수=({
	type:"seed",
	getType:["buy"],
	price:100,
	sellprice:undefined,
	plantTime:30,
	//다 자라는시간
	plant:function(){
		for(;;){
			percent1=Number(Date.now())-Number(rfarming[sender][plantarea].start);
			percent2= Number(percent1)/Number(1000);
			percent3 = Number(percent2)/Number(옥수수.plantTime);
			//다 자라는 시간으로 나눔
			rfarming[sender][plantarea].현황= Number(percent3)*Number(100);
			//현황 백분율
			if(rfarming[sender][plantarea].현황==100){
replier.reply(sender+"님의 작물이 다자랐으니 재배하세요!")
break;
}
if(rfarming[sender][plantarea].현황==100)break;
			}
			}
			});

달걀=({
type:"food",
getType:["buy"],
hpregen:40,
price:50,
sellprice:undefined,
info:"계란은 방구에 좋다.(?)"
});
사과=({
type:"food",
getType:["buy"],
hpregen:20,
price:15,
sellprice:undefined,
info:"사과가 말합니다. \"미안해.\""
})
쭈쭈바=({
type:"food",
getType:["buy"],
hpregen:70,
price:100, 
sellprice:undefined,
info:"롯데빠쁴코"
})
메로나=({
type:"food",
getType:["buy"],
hpregen:50,
price:60,
sellprice:undefined,
info:"올때 메로나."
})
//음식

부러진단검=({
type:"weapon",
getType:undefined,
skill:undefined,
price:undefined,
sellprice:undefined,
info:"회원가입하면 주는 검",
damage:20,
attackspeed:3
})
평범한단검=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:3000,
sellprice:700,
info:"",
damage:40,
attackspeed:3,
usualmap:["생명의숲"]
});
카람빗=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:5150,
sellprice:2100,
info:"",
damage:60,
attackspeed:3,
usualmap:["고요한 동굴"]
});
BAA=({
type:"weapon",
getType:["hunt"],
skill:undefined,
price:undefined,
info:"",
damage:80,
attackspeed:4.5,
usualmap:["고요한 동굴"]
});
보커나이프=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:6000,
sellprice:3000,
info:"",
damage:80,
attackspeed:2,
usualmap:["고요한 동굴"]
});
대검=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:30000,
sellprice:14000,
info:"",
damage:210,
attackspeed:5,
usualmap:["동굴내부"]
});
스팀펑크의칼=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:40000,
sellprice:22000,
info:"",
damage:300,
attackspeed:3,
usualmap:["동굴내부"]
});
만살도=({
type:"weapon",
getType:["buy"],
skill:undefined,
price:86000,
sellprice:18000,
info:"",
damage:600,
attackspeed:3.2,
usualmap:["황무지"]
});
적살도=({
   type:"weapon",
   getType:["buy"],
   skill:undefined,
   price:72000,
   sellprice:16000,
   info:"",
   damage:590,
   attackspeed:3.5,
   usualmap:["황무지"]
   });
과도=({
   type:"weapon",
   getType:["buy"],
   skill:undefined,
   price:74000,
   sellprice:15000,
   info:"",
   damage:510,
   attackspeed:2.5,
   usualmap:["황무지"]
   });
장검=({
   type:"weapon",
   getType:["buy"],
   skill:undefined,
   price:27000,
   sellprice:1500,
   info:"",
   damage:170,
   attackspeed:3,
   usualmap:["황무지"]
   });
//무기

shopweapons=["평범한단검","카람빗","BAA","보커나이프","대검","스팀펑크의칼","만살도"];
      
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
function save(path, msg){
try{
var file = new java.io.File(path);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
replier.reply(e);
}
}
function read(path){
try{
var file = new java.io.File(path);
if(!(file.exists())) return null;
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line = br.readLine()) != null){
str += "\n" + line;
}
fis.close();
isr.close();
br.close();
return str;
}
catch(e){
replier.reply(e);
}
}


    if(msg.indexOf("@eval ")==0 && DG("프로필").indexOf(profile)!=-1) {
try{
replier.reply(eval(msg.substr(6)));
}catch(e){
replier.reply(e);
}
}
function Itemadd(user, item){
   if(ruser[user].인벤토리.indexOf(item)!=-1){
         ruser[user].인벤토리 = ruser[user].인벤토리.replace(item+"("+ruser[user].인벤토리.split(item+"(")[1].split(")")[0],item+"("+(Number(ruser[user].인벤토리.split(item+"(")[1].split(")")[0])+Number(1)));
         }
         else if(ruser[user].인벤토리.indexOf(item)==-1){
      ruser[user].인벤토리 = ruser[user].인벤토리 + ","+ item+"(1)";
}
}
function Itemremove(user, item){
   if(ruser[user].인벤토리.indexOf(item)!=-1){
      if(ruser[user].인벤토리.indexOf(item+"(1)")!=-1){
         ruser[user].인벤토리 = ruser[user].인벤토리.replace(","+item+"(1)","");
         
         //인벤토리에 그 아이템이 하나밖에 없을때
         
         }else if(ruser[user].인벤토리.indexOf(item+"(1)")==-1){
         ruser[user].인벤토리 = ruser[user].인벤토리.replace(item+"("+ruser[user].인벤토리.split(item+"(")[1].split(")")[0],item+"("+(Number(ruser[user].인벤토리.split(item+"(")[1].split(")")[0])-Number(1)));
         //하나 이상일때
         }
         else if(ruser[user].인벤토리.indexOf(item)==-1){
      replier.reply("갖고있지 않은 아이템입니다.")
}
}
}

if(msg == "/불러오기" && DG("관리자").indexOf(profile)!=-1){
   rsave = true;
   eval("rannounce="+read(sdcard+"/Rpg/중앙서버/공지.txt"));
   eval("ruser="+read(sdcard+"/Rpg/중앙서버/유저.txt"));
   eval("rguild="+read(sdcard+"/Rpg/중앙서버/길드.txt"));
   eval("rcompanys="+read(sdcard+"/Rpg/중앙서버/회사목록.txt"));
   eval("rusercompany="+read(sdcard+"/Rpg/중앙서버/회사정보.txt"));
   eval("raidattack="+read(sdcard+"/Rpg/중앙서버/레이드.txt"));
   eval("rstat="+read(sdcard+"/Rpg/중앙서버/스텟포인트.txt"));
   eval("rjob="+read(sdcard+"/Rpg/중앙서버/직업.txt"));
   eval("rfarming="+read(sdcard+"/Rpg/중앙서버/농사.txt"));
   rshare = read(sdcard+"/Rpg/중앙서버/거래소.txt");
   replier.reply("서버 정보 연동완료.")
   }
   if(msg == "/저장"){
      if(rsave == true){
      save(sdcard+"/Rpg/중앙서버/유저.txt",ruser.toSource());
      save(sdcard+"/Rpg/중앙서버/길드.txt",rguild.toSource());
      save(sdcard+"/Rpg/중앙서버/거래소.txt",rshare);
      save(sdcard+"/Rpg/중앙서버/공지.txt",rannounce.toSource());
      save(sdcard+"/Rpg/중앙서버/회사목록.txt",rcompanys.toSource());
      save(sdcard+"/Rpg/중앙서버/회사정보.txt",rusercompany.toSource());
      save(sdcard+"/Rpg/중앙서버/레이드.txt",raidattack.toSource());
      save(sdcard+"/Rpg/중앙서버/스텟포인트.txt",rstat.toSource());
      save(sdcard+"/Rpg/중앙서버/직업.txt",rjob.toSource());
      save(sdcard+"/Rpg/중앙서버/농사.txt",rfarming.toSource());
      replier.reply("서버 정보 전송완료.")
      }
      if(rsave == false){
         replier.reply("재부팅 된후 불러오기가 되지않았습니다\n운영자가 정보를 불러온후 다시사용해주세요.")
         }
         }
if(msg=="/서버 백업"&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1&&DG("프로필").indexOf(profile)!=-1){
   save(sdcard+"/Rpg/중앙서버/공지.txt",read(sdcard+"/Rpg/중앙서버/공지.txt"));
   replier.reply("공지.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/유저.txt",read(sdcard+"/Rpg/중앙서버/유저.txt"));
   replier.reply("유저.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/길드.txt",read(sdcard+"/Rpg/중앙서버/길드.txt"));
   replier.reply("길드.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/회사목록.txt",read(sdcard+"/Rpg/중앙서버/회사목록.txt"));
   replier.reply("회사목록.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/회사정보 txt",read(sdcard+"/Rpg/중앙서버/회사정보.txt"));
   replier.reply("회사정보.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/주식.txt",read(sdcard+"/Rpg/중앙서버/주식.txt"));
   replier.reply("주식.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/주식투자정보.txt",read(sdcard+"/Rpg/중앙서버/주식투자정보.txt"));
   replier.reply("주식투자정보.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/후원",read(sdcard+"/Rpg/중앙서버/후원.txt"));
   replier.reply("후원.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/거래소.txt",read(sdcard+"/Rpg/중앙서버/거래소.txt"));
   replier.reply("거래소.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/스텟포인트.txt",read(sdcard+"/Rpg/중앙서버/스텟포인트.txt"));
   replier.reply("스텟.txt 백업성공")
   save(sdcard+"/Rpg/중앙서버/직업.txt",read(sdcard+"/Rpg/중앙서버/스텟포인트.txt"));
   replier.reply("직업.txt 백업성공")
   replier.reply("Backup complete")
   }
if(msg=="/관리" && DG("관리자").indexOf(profile)!=-1){
replier.reply("안녕하세요 운영자님? Rpg서버관리 시스템입니다 전체보기를 눌러주세요 ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏  ͏\n\n/유저 로그아웃 : 모든유저를 로그아웃시킵니다.\n\n/유저 초기화 : 회원가입된 모든 유저들을 삭제시킵니다.\n\n/서버오프 : Rpg서버가 꺼집니다.\n\n/서버온 : Rpg서버가 켜집니다.\n\n/돈주기 닉네임 : 해당유저에게 돈을 줍니다.\n\n/돈뺏기 닉네임 : 해당유저의 돈을 빼았습니다.")
}
if(msg == "/서버초기화"&&DG("관리자").indexOf(profile)!=-1){
      save(sdcard+"/Rpg/중앙서버/유저.txt","{}");
      save(sdcard+"/Rpg/중앙서버/길드.txt","{}");
      save(sdcard+"/Rpg/중앙서버/거래소.txt","{}");
      save(sdcard+"/Rpg/중앙서버/회사목록.txt","{}");
      save(sdcard+"/Rpg/중앙서버/회사정보.txt","{}");
      save(sdcard+"/Rpg/중앙서버/주식.txt","{}");
      save(sdcard+"/Rpg/중앙서버/주식투자정보.txt","{}");
      save(sdcard+"/Rpg/중앙서버/후원.txt","{}");
      save(sdcard+"/Rpg/중앙서버/레이드.txt","{}");
      replier.reply("complete.")
      }
      /*
         if(msg.indexOf("/서버공지 ") ==0 && DG("관리자").indexOf(profile) != -1) {
        replier.reply("모든 Rpg서버방에 공지를 전송하였습니다.")
        replier.reply("로비", "[공지수신] " + msg.substr(6))
        replier.reply("서버1", "[공지수신] " + msg.substr(6))
        replier.reply("서버2", "[공지수신] " + msg.substr(6))
    }
   */
   
if(msg == "/유저 로그아웃" && DG("관리자").indexOf(profile)!=-1){
DS("유저","");
replier.reply("모든 유저를 강제 로그아웃 시켰습니다.")
}
if(msg == "/서버온" && DG("관리자").indexOf(profile)!=-1){
DS("rpg","on");
replier.reply("Rpg서버가 켜졌습니다.")
}
if(msg == "/서버오프" && DG("관리자").indexOf(profile)!=-1){
DS("rpg","off");
replier.reply("Rpg서버가 꺼졌습니다.")
}
if(msg.indexOf("/돈주기")==0 &&DG("관리자").indexOf(profile)!=-1){
msg = msg.replace("/돈주기 ","");
nick = msg.split("/")[0];
givemoney = msg.split("/")[1];
defaultmoney = ruser[nick].돈;
ruser[nick].돈 = Number(defaultmoney)+Number(givemoney);
replier.reply("돈을 성공적으로 추가시켰습니다.")
}
if(msg.indexOf("/돈뺏기")==0 &&DG("관리자").indexOf(profile)!=-1){
msg = msg.replace("/돈뺏기 ","");
nick = msg.split("/")[0];
givemoney = msg.split("/")[1];
defaultmoney = ruser[nick].돈;
ruser[nick].돈 = Number(defaultmoney)-Number(givemoney);
replier.reply("돈을 성공적으로 뺏었습니다.")
}

if(msg=="/rpg"){
	replier.reply("rpg게임 도움말입니다.\n"+String.fromCharCode(8237).repeat(501)+"/회원가입 \n회원가입(한번만)\n\n/로그인 \n로그인\n\n/내정보 \n자신의 스텟이랑 인밴토리를 볼수있다\n\n/이동 (장소) - (장소)로 이동 \n(예:/이동 상점)\n\n/사냥터 (장소) \n사냥터로 이동 \n(예:/이동 황무지)\n\n/사냥 \n사냥터에서 사냥시작\n(사냥터에서 사용가능)\n\n/공격 \n사냥터에서 몬스터에게 공격(무기마다 쿨타임있음)\n\n/무기상점 (페이지) \n무기상점 열기\n(상점에서 사용가능)\n(예:/무기상점 1)\n\n/음식상점 (페이지) \n음식상점 열기\n(상점에서 사용가능)\n(예:음식상점 1)\n\n/기타상점 (페이지)\n기타 소모품 상점열기\n(상점에서 사용가능)\n(예:기타상점 1)\n\n/무기구매 (이름)\n무기상점에있는 무기를 구매한다\n(상점에서 사용가능)\n(예:/무기구매 평범한단검)\n\n/구매 (음식이나 기타아이템이름) \n무기를 제외한 상점에있는 아이템을 \n구매한다\n(상점에서 사용가능)\n(예:/구매 맛있는사과)\n\n/무기장착 (이름) \n소유한 무기를 장착한다\n(/내정보 로 확인가능)\n(예:/무기장착)")
	}
	function Chat(room){
json = {"link_ver":"4.0","template_id":22455,"template_args":{image:"",pfimg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141025_17%2Fdesignproda_1414195171245EKAoJ_JPEG%2F%25C4%25AB%25C4%25AB%25BF%25C0%25C5%25E5_%25BE%25C6%25C0%25CC%25C4%25DC.jpg&type=sc960_832",profile:sender,title:"",des:msg}}
return Kakao.send(room, json, "custom")
}
	if(msg.indexOf("/서버공지 ") ==0 && DG("관리자").indexOf(profile) != -1) {
		msg = msg.replace("/서버공지 ","");
        replier.reply("모든 Rpg서버방에 공지를 전송하였습니다.")
        Chat("로비")
        Chat("서버1")
        Chat("서버2")
    }
	
if(msg=="/부활"){
	ruser[sender].state = "alive";
	ruser[sender].전투 = false;
	rfight[sender] =undefined;
	ruser[sender].체력 = 200;
	replier.reply("[디버깅] 부활완료.")
}
if(msg.indexOf("/서버 아이템지급")==0 &&DG("관리자").indexOf(profile)!=-1){
msg = msg.replace("/서버 아이템지급 ","");
var a = Object.keys(ruser);
   a.map(function(s){
Itemadd(s,msg)
}) 
replier.reply("모든유저에게 아이템이 지급되었습니다.")
}

if(msg.indexOf("/서버 아이템회수")==0 &&DG("관리자").indexOf(profile)!=-1){
msg = msg.replace("/서버 아이템회수 ","");
var a = Object.keys(ruser);
   a.map(function(s){
      Itemremove(s,msg)
}) 
replier.reply("모든유저에게서 해당 아이템을 회수하였습니다.")
}
if(room=="로비"||room=="서버1"||room=="서버2"||room =="TextRpg 벨런스팀"){
if(msg =="/회원가입" && DG("rpg").indexOf("on")!=-1 && ruser[sender] ==undefined)
{
   random = Math.floor(Math.random() * 1000000000);
   rstat[sender] = {
      스텟포인트:1,
      공격:1,
      지식:1,
      민첩성:1,
      물리방어력:1,
      마법방어력:1,
      방어:1,
      크리티컬:1
      };
      
      
ruser[sender]={
닉네임:sender,
돈:1000,
레벨:1,
강화석:1,
회사:"없음",
버프:"없음",
경험치:1,
공격력:20,
민첩성:1,
치명타율:1,
방어력:1,
deadlast:0,
//플레이어가 죽자마자 기록된 시간
time:new Date().getTime(),
//현재 시간(밀리초)
state:"alive",
//플레이어가 현재 살아있는가 죽어있는가
lastatk:0,
//마지막으로 때린시간
attackspeed:2,
최대체력:300,
최대마나:170,
체력:"300",
마나:"170",
배고픔:"1500/1500",
인벤토리:"부러진단검",
위치:"로비",
무기:"부러진단검",
머리:"도전자의 투구",
가슴:"없음",
다리:"없음",
발:"없음",
칭호:"[뉴비]",
전투:false,
채팅당체력회복:0.7,
채팅당마나회복:0.3,
공격속도:2,
//초 단위
skill:[],
skillcool:{},
//유저가 사용한 각각의 스킬의 쿨타임 저장객체
프로필:+profile
};

save(sdcard+"/Rpg/고유코드.txt",read(sdcard+"/Rpg/고유코드.txt")+sender+"/"+encodeURI(random)+"\n");
replier.reply("프로필 정보를 불러오는중 입니다..")
replier.reply(sender+" (이)라는 닉네임으로 회원가입을 완료하였습니다\n카카오톡 프로필을 변경하시면 로그인이 안되며, 문제가 발생할시 운영자에게 말해주세요.\n\n프로필정보:"+profile);
}
else if(msg =="/회원가입" && DG("rpg").indexOf("on")!=-1 && ruser[sender] !=undefined)
{
   replier.reply("당신의 유저정보가 이미 존재합니다.")
   }
if(msg.indexOf("/로그인") ==0 && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile)
{
replier.reply("당신은 이미 로그인 되어있습니다.")
}
else if(msg.indexOf("/로그인") ==0 && DG("rpg").indexOf("on")!=-1 && profile == ruser[sender].프로필)
{
   DS("유저",DG("유저")+"\n"+sender);
replier.reply("[System] "+ruser[sender].칭호+"닉네임:"+sender+"님이 로그인하셨습니다.")
}
else if(msg == "/로그인" &&ruser[sender] == undefined){
replier.reply("[System] 회원가입을 먼저해주세요!")
}
try{
if(msg == "/내정보" &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   replier.reply("[System] 내 정보를 불러옵니다\n"+String.fromCharCode(8237).repeat(501)+"\n닉네임:"+sender+"\n돈:"+ruser[sender].돈+"\n칭호:"+ruser[sender].칭호+"\n길드:"+ruser[sender].길드+"\n연합:"+ruser[sender].연합+"\n체력:"+ruser[sender].체력+"\n공격력:"+ruser[sender].공격력+"\n방어력:"+ruser[sender].방어력+"\n민첩성:"+ruser[sender].민첩성+"\n크리티컬확률:"+ruser[sender].치명타율+"\n경험치:"+ruser[sender].경험치+"\n레벨:"+ruser[sender].레벨+"\n강화석:"+ruser[sender].강화석+"\n회사:"+ruser[sender].회사+"\n버프:"+ruser[sender].버프+"\n무기:"+ruser[sender].무기+"\n머리:"+ruser[sender].머리+"\n가슴:"+ruser[sender].가슴+"\n다리:"+ruser[sender].다리+"\n발:"+ruser[sender].발+"\n위치:"+ruser[sender].위치+"\n프로필:"+ruser[sender].프로필+"\n\n\n\n\n■인벤토리■\n"+ruser[sender].인벤토리)
   }
}catch(e){
   replier.reply("없는 유저이거나 오류가 발생하였습니다.")
   }
   
   if(DG("유저").indexOf(sender)!=-1&& ruser[sender] != undefined){
		if(ruser[sender].인벤토리.indexOf("[이벤트]핫타임")!=-1){
			if(ruser[sender].경험치 >= Number(ruser[sender].레벨)*Number(400) && ruser[sender].레벨 <250){
		ruser[sender].레벨 = Number(ruser[sender].레벨)+Number(1);
		ruser[sender].최대체력=Number(ruser[sender].최대체력)*Number(1.2);
		
		rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트)+Number(1);
replier.reply("[Rpg서버]\n============\n"+sender+"님이 레벨업 하셨습니다!\n============")
}
}
		else{
		if(ruser[sender].경험치 >= Number(ruser[sender].레벨)*Number(400) && ruser[sender].레벨 <250){
		ruser[sender].레벨 = Number(ruser[sender].레벨)+Number(1);
		ruser[sender].경험치 = 1;
		ruser[sender].최대체력=Number(ruser[sender].최대체력)*Number(1.2);
		rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트) + Number(1);
replier.reply("[Rpg서버]\n============\n"+sender+"님이 레벨업 하셨습니다!\n============")
}
}
}
   
   if(msg == "/업데이트" && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
replier.reply("당신에게 적용되지 않은 정보들을 찾아내어 자동으로 패치시킵니다.")
java.lang.Thread.sleep(1500);
if(ruser[sender].머리 =="도전자의 투구"){
      ruser[sender].머리="초심의 투구";
ruser[sender].가슴="없음";
ruser[sender].다리="없음";
ruser[sender].발="없음";
replier.reply("방어구정보 패치완료.")
}
if(rstat[sender] == undefined||rstat[sender].방어==undefined){
                        rstat[sender] = {
      스텟포인트:1,
      공격:1,
      민첩성:1,
      방어:1,
      크리티컬:1
      };
                        replier.reply("유저 스텟기능 패치완료.")
                        }
   if(rjob[sender] == undefined){
                        rjob[sender] = {
         직업:"없음",
         스킬포인트:1
};
replier.reply("직업 정보 패치완료.")
}
replier.reply("모든패치가 완료되었습니다.")
}
if(msg.indexOf("/군인구매") ==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   msg = msg.replace("/군인구매 ","");
   var rguninmoney = Number(msg)*Number(4000);
   if(rguild[ruser[sender].길드].길드장 == sender){
      if(rguild[ruser[sender].길드].길드후원금<rguninmoney){
         replier.reply("길드후원금이 부족합니다.")
         }
         if(rguild[ruser[sender].길드].길드후원금>=rguninmoney){
      rguild[ruser[sender].길드].군인 = Number(rguild[ruser[sender].길드].군인) + Number(msg);
      rguild[ruser[sender].길드].길드후원금 = Number(rguild[ruser[sender].길드].길드후원금)-Number(rguninmoney);
      replier.reply("군인을 "+msg+" 명 구매하였습니다.")
      }
      }
      }
      if(msg.indexOf("/방어벽구매") ==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){ 
   msg = msg.replace("/방어벽구매 ","");
   var rdefensmoney = Number(msg)*Number(7000);
   if(rguild[ruser[sender].길드].길드장 == sender){
      if(rguild[ruser[sender].길드].길드후원금<rdefensmoney){
         replier.reply("길드후원금이 부족합니다.")
         }
         if(rguild[ruser[sender].길드].길드후원금>=rdefensmoney){
      rguild[ruser[sender].길드].방어벽 = Number(rguild[ruser[sender].길드].방어벽) + Number(msg);
      rguild[ruser[sender].길드].길드후원금 = Number(rguild[ruser[sender].길드].길드후원금)-Number(rdefensmoney);
      replier.reply("방어벽을 "+msg+" 개 구매하였습니다.")
      }
      }
      }

      if(msg == "/길드삭제" && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
         if(rguild[ruser[sender].길드].길드장 == sender){
            delete rguild.ruser[sender].길드;
            ruser[sender].길드="없음";
            replier.reply("길드삭제 완료.")
            }
            }
if(msg == "/길드" &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   replier.reply("■길드도움말\n\n/길드갱신 :길드를 새로고침 합니다.\n/길드생성 길드이름 :60만원을 사용하여 길드를 만듭니다.\n\n/길드목록 :현재 만들어져 있는 길드목록을 보여줍니다.\n\n/길드가입 길드이름 :길드에 가입합니다.\n\n/길드정보 길드이름 :해당 길드의 정보를 확인합니다.\n\n/내길드 : 자신이 속한 길드의 정보를 불러옵니다.\n■길드장만 사용가능한 명령어\n/군인구매 인원수 : 길드 후원금 4000원을 지불하여 군인을 뽑습니다.\n\n/방어벽구매 수량 : 길드후원금 7000원을 지불하여 방어벽을 구매합니다.")
   }
   if(msg =="/길드탈퇴" &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
      if(ruser[sender].길드 != "없음"){
         replier.reply("길드를 탈퇴하셨습니다.")
         ruser[sender].길드 = "없음";
         rguild[msg].길드원 = Number(rguild[ruser[sender].길드].길드원) - Number(1);
}
      if(ruser[sender].길드 =="없음"){
   replier.reply("당신은 가입된 길드가 없습니다.")
   }
}
if(msg.indexOf("/길드정보")==0 && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   if(rguild[msg.substr(6)] ==undefined){
      replier.reply("없는 길드입니다.")
      }
      if(rguild[msg.substr(6)] != undefined){
   replier.reply("길드정보를 불러옵니다.\n\n길드명:"+msg.substr(6)+"\n길드장:"+rguild[msg.substr(6)].길드장+"\n길드원:"+rguild[msg.substr(6)].길드원.length+"명\n길드후원금:"+rguild[msg.substr(6)].길드후원금+"원\n군인:"+rguild[msg.substr(6)].군인+"명\n방어벽:"+rguild[msg.substr(6)].방어벽+"개\n공격력:"+rguild[msg.substr(6)].공격력+"\n방어력:"+rguild[msg.substr(6)].방어력)
   }
   }
   if(msg.indexOf("/길드공격") ==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
      var yourdefens = rguild[msg.substr(6)].방어력;
      var myattack = rguild[ruser[sender].길드].공격력;
        var randomattack = Math.floor(Math.random() *3);
      if(rguild[ruser[sender].길드].길드장 != sender){
         replier.reply("길드장만 사용가능한 명령어입니다.")
         }
         if(rguild[ruser[sender].길드].길드장 == sender){
            if(yourdefens >myattack){
               rguild[ruser[sender].길드].군인 = 1;
               replier.reply("상대방의 방어력이 커서 당신의 길드의 병력을 모두잃었습니다.")
               }
               if(yourdefens <=myattack){
                  if(randomattack == 0){
                     rguild[ruser[sender].길드].군인 = Number(rguild[ruser[sender].길드].군인) / Number(3);
                     replier.reply("비가 내려 전쟁에 불리해져 패배하였고 일부 군인을 잃었습니다..")
                     }
                     if(randomattack > 0){
                        rguild[msg.substr(6)].군인 = 1;
                        rguild[msg.substr(6)].방어벽 =1;
                        rguild[ruser[sender].길드].군인 = Number(rguild[ruser[sender].길드].군인) / Number(7);
                        replier.reply("승리했습니다! 상대방의 군인과 방어벽을 모두 전멸시켰고 대부분의 군인이 살아남았습니다!")
                        var gunindefens = Number(rguild[msg.substr(6)].군인) * Number(20);
var defens = Number(rguild[msg.substr(6)].방어벽)*Number(40);
var rdefens = Number(gunindefens) + Number(defens);
rguild[msg.substr(6)].방어력 = rdefens;
var guninattack = Number(rguild[ruser[sender].길드].군인) * Number(20);
rguild[msg.substr(6)].공격력 = guninattack;
                        }}}
                        }
            
if(msg == "/길드목록" &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   replier.reply("길드목록을 불러옵니다.")
   replier.reply(Object.keys(rguild).join("\n"))
   }
if(msg.indexOf("/길드후원")==0 &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   msg = msg.replace("/길드후원 ","");
if(ruser[sender].길드 == "없음"){
      replier.reply("당신은 길드가 없습니다.")
      }
      if(ruser[sender].길드 != "없음" && ruser[sender].돈 >=msg){
rguild[ruser[sender].길드].길드후원금 = Number(rguild[ruser[sender].길드].길드후원금) + Number(msg);
ruser[sender].돈 = Number(ruser[sender].돈) - Number(msg);
replier.reply("돈을 자신의 길드에게 지불하였습니다!")
}
if(ruser[sender].길드 != "없음" && ruser[sender].돈<msg){
   replier.reply("돈이 부족합니다.")
   }
   }
if(msg.indexOf("/길드가입")==0 &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
 msg = msg.replace("/길드가입 ","");
 if(ruser[sender].길드 != "없음"){
    replier.reply("길드 중복가입은 불가합니다.")
 }
 if(ruser[sender].길드 == "없음" && rguild[msg] !=undefined){
    ruser[sender].길드 = msg;
 rguild[msg].길드원 = Number(rguild[msg].길드원) + Number(1);
 replier.reply("길드에 성공적으로 가입하였습니다.")
 }
 if(rguild[msg] == undefined){
    replier.reply("없는길드 입니다.")
 }
 }
 if(msg == "/길드갱신"&& DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
    var gunindefens = Number(rguild[ruser[sender].길드].군인) * Number(20);
var defens = Number(rguild[ruser[sender].길드].방어벽)*Number(40);
var rdefens = Number(gunindefens) + Number(defens);
rguild[ruser[sender].길드].방어력 = rdefens;
var guninattack = Number(rguild[ruser[sender].길드].군인) * Number(20);
rguild[ruser[sender].길드].공격력 = guninattack;
replier.reply("전체 길드 갱신완료")
}
   if(msg =="/내길드" &&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
      try{
      replier.reply("당신의 길드정보를 불러옵니다.\n\n길드명:"+ruser[sender].길드+"\n길드장:"+rguild[ruser[sender].길드].길드장+"\n길드원:"+rguild[ruser[sender].길드].길드원+"명\n길드후원금:"+rguild[ruser[sender].길드].길드후원금+"원\n군인:"+rguild[ruser[sender].길드].군인+"명\n방어벽:"+rguild[ruser[sender].길드].방어벽+"개\n공격력:"+rguild[ruser[sender].길드].공격력+"\n방어력:"+rguild[ruser[sender].길드].방어력)
      }catch(e){
         replier.reply("당신의 길드는 없습니다.")
         }
         }
if(msg.indexOf("/길드생성")==0 && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   
msg =msg.replace("/길드생성 ","");
if(ruser[sender].돈 < 600000){
   replier.reply("길드 생성을 위한 금액이 부족합니다.")
   }
   if(ruser[sender].돈 > 600000){
      ruser[sender].길드 = msg;
      rguild[msg] ={
         길드명:+msg,
      길드장:sender,
      길드전투력:100,
      길드레벨:1,
      길드건물:"없음",
길드기부금:0,
"길드원":sender
};
      ruser[sender].돈 = Number(ruser[sender].돈) - Number(600000);
      replier.reply(msg+" 라는 길드가 만들어졌습니다.")
      }
      }
      
      function Rpgprovoke(room){
   json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"몬스터가 출현했다! -사냥터-",title1:rfight[sender].monster.name,des1:"체력:"+rfight[sender].monster.hp,img1:"http://bodle.dothome.co.kr/"+rfight[sender].monster.name+".jpg"}}
return Kakao.send(room, json, "custom")
}
function Rpgatk(room){
   json = {"link_ver":"4.0","template_id":21294,"template_args":{header:sender+"의 공격",title1:rfight[sender].monster.name+"(hp:"+rfight[sender].monster.hp+")",des1:"체력:"+graph(15,rfight[sender].monster.hp,rfight[sender].monster.maxhp),img1:"http://bodle.dothome.co.kr/"+rfight[sender].monster.name+".jpg"}}
return Kakao.send(room, json, "custom")
}
      
      
            if(msg =="/사냥"&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
                  if(rdungeon.indexOf(ruser[sender].위치)!=-1){
                     if(ruser[sender].전투 == false){
                                
                        ruser[sender].전투 =true;
                        pos = ruser[sender].위치;
                        //현재 유저위치
                     rmonsterran = this[pos].monsters[Math.floor(Math.random() * this[pos].monsters.length)];
                     //해당 사냥터의 몬스터들중 랜덤으로 하나가 지정됨
                     rfight[sender] = {
                        user:eval(ruser[sender].toSource()),
                        monster:eval(this[pos][rmonsterran].toSource())
                        };
                        rfight[sender].monster.lastatk = sender;
                        Rpgprovoke(room)
                        //replier.reply(rmonsterran+"이(가) 나타났다!\n\n공격력:"+rfight[sender].monster.damage+"\n체력:"+rfight[sender].monster.hp)
                        var that = this;
                        java.lang.Thread({
                                run:function(){
                                   try{
                                   
                                
                                   /*
                                   java.lang.Thread({
                                   run:function(){
                                       for(;;){
                                          if(Math.floor(Math.random()*rfight[sender].monster.skillpbb)==0){
                                             //eval(rfight[sender].monster.skilluse.toSource())();
                                       eval(rfight[sender].monster.skilluse.toSource())()
                                    
                                          }
                                       java.lang.Thread.sleep(1000);
                                       }
                                       }}).start
                                       */
                                       
                                       
                                       for(;;){
                              
                              if(Number(new Date().getTime())-Number(rfight[sender].monster.last)>=Number(rfight[sender].monster.attackspeed)*Number(1000)){
                              rfight[sender].monster.attackuse()
                              }
                              
                              if(ruser[rfight[sender].monster.lastatk].체력<=0||rfight[sender]==undefined){
                              ruser[sender].전투 =false;
                              ruser[sender].state= "dead";
                              ruser[sender].deadlast= new Date().getTime();
                              replier.reply(sender+"님이 사망하셨습니다")
                              
                              }
                              /*
                              let end=rfight[sender].monster.enduse();
                                             if(rfight[sender].monster.hp<=0){
                                             	Log.d("a");
                                 end.start();
                                 end.join();
                                 end.interrupt();
                                 
                            
                              } 
                            */
                  if(ruser[rfight[sender].monster.lastatk].체력<=0||rfight[sender]==undefined||rfight[sender].monster.hp<=0)break;
                      
                              
                              }
                              
                              
                              
                              }catch(e){
                                 replier.reply("에러내용: "+e+"\n줄: "+e.lineNumber)
                                 }
                                 }}).start();
                           
                        }
                        else{
                           replier.reply("당신은 이미 전투중이다!")
                           }
                           }
                           else{
                              replier.reply("먼저 사냥터로 이동해주세요")
                              }
                              }
                              if(msg=="/공격"&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
                                 if(ruser[sender].전투 == true){
                                 	let a = Number(rfight[sender].monster.hp)-Number(rfight[sender].user.공격력);
                                 hp= a>0?a :0;
                                 	if(a>0){
                                      
                                      if(rfight[sender].monster.hp>0){
                                    if(Number(new Date().getTime())-Number(rfight[sender].user.lastatk)>=Number(rfight[sender].user.공격속도)*Number(1000)){
                                    rfight[sender].monster.lastatk = sender;
                                    rfight[sender].monster.hp =  Number(rfight[sender].monster.hp)-Number(rfight[sender].user.공격력);
                                    
                                       rfight[sender].user.lastatk=Date.now();
                                       //마지막공격시간 기록
                                       Rpgatk(room)
                                    //replier.reply("당신이 공격했습니다!\n\n"+"hp:"+graph(15,rfight[sender].monster.hp,this[pos][rfight[sender].monster.name].hp)+"\n몬스터의 남은체력:"+rfight[sender].monster.hp)
                                    }
                                    }
                                    }
                                    else{
                                    	let end=rfight[sender].monster.enduse();
                                    
                                    	Log.d("b")
                                            end.start();
                                            end.interrupt();
                                            end.join();
                                      }
                                       }
                                    }
                                    if(msg.indexOf("/스킬 ")==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
                                       msg = msg.replace("/스킬 ","");
                                 if(ruser[sender].전투 == true){
                                 	
                                 	if(Number(new Date().getTime())-Number(ruser[sender].skillcool.msg)<Number(this[msg].cool)*Number(1000)){
                                 	replier.reply("스킬 쿨타임중입니다.")
                                 }
                                 if(ruser[sender].skill.indexOf(msg)==-1){
                                 	replier.reply("보유하지 않은 스킬입니다.")
                                 }
                         if(ruser[sender].skill.indexOf(msg)!=-1){
                                    if(Number(new Date().getTime())-Number(ruser[sender].skillcool.msg)>=Number(this[msg].cool)*Number(1000)||ruser[sender].skillcool.msg==undefined){
                                    	var that = this;
                                   	java.lang.Thread({
                                run:function(){
                                	try{
                                    rfight[sender].monster.lastatk = sender;
                                    
                                    
                                    ruser[sender].skillcool.msg = Date.now();
                                    eval(that[msg].use.toSource())()
                                    
                                    }catch(e){
                                    	replier.reply(e+"\n"+e.lineNumber)
                                    }
                                       }
                                       }).start()
                                    }
                                    }
                                    }
                                    
                                    }
                                    
                                    
            if(msg.indexOf("/이동")==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   msg = msg.replace("/이동 ","");
   if(wich.indexOf(msg) !=-1){
      replier.reply("이동중입니다..")
      ruser[sender].위치 = msg;
        replier.reply(msg+"로 이동했습니다")
      }
      if(wich.indexOf(msg)==-1){
         replier.reply("없는 장소입니다.\n\n■장소목록\n\n"+wich.join("\n"))
         }
         }
         if(msg.indexOf("/사냥터")==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   msg = msg.replace("/사냥터 ","");
   if(rdungeon.indexOf(msg) !=-1){
      replier.reply("이동중입니다..")
      ruser[sender].위치 = msg;
        replier.reply(msg+"로 이동했습니다")
      }
      if(rdungeon.indexOf(msg)==-1){
         replier.reply("없는 사냥터입니다.\n\n■장소목록\n\n"+rdungeon.join("\n"))
         }
         }
         
         function Shopweapon(room){
            //const { [page]: [p1, p2, p3, p4, p5] = [null, null, null, null, null] } = weaponPage;
//pageWeapon = { p1, p2, p3, p4, p5 };
            
                    pageWeapon={
               p1:weaponPage[page][0],
               p2:weaponPage[page][1],
               p3:weaponPage[page][2],
               p4:weaponPage[page][3],
               p5:weaponPage[page][4],
               };
//현재 페이지의 무기목록들

price1= weaponPage[page][0]==undefined? '' : "가격: " +this[weaponPage[page][0]].price;
price2= weaponPage[page][1]==undefined? '' : "가격: "+this[weaponPage[page][1]].price;
price3= weaponPage[page][2]==undefined? '' : "가격: "+this[weaponPage[page][2]].price;
price4= weaponPage[page][3]==undefined? '' : "가격: "+this[weaponPage[page][3]].price;
price5= weaponPage[page][4]==undefined? '' : "가격: "+this[weaponPage[page][4]].price;

json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"TextRpg -상점- Page:"+msg+"/"+maxpage,title1:pageWeapon.p1,des1:price1,img1:"http://bodle.dothome.co.kr/"+pageWeapon.p1+".jpg",title2:pageWeapon.p2,des2:price2,img2:"http://bodle.dothome.co.kr/"+pageWeapon.p2+".jpg",title3:pageWeapon.p3,des3:price3,img3:"http://bodle.dothome.co.kr/"+pageWeapon.p3+".jpg",title4:pageWeapon.p4,des4:price4,img4:"http://bodle.dothome.co.kr/"+pageWeapon.p4+".jpg",title5:pageWeapon.p5,des5:price5,img5:"http://bodle.dothome.co.kr/"+pageWeapon.p5+".jpg"}}
return Kakao.send(room, json, "custom")
}

function Shopdetail(room){
json = {"link_ver":"4.0","template_id":22455,"template_args":{image:"http://bodle.dothome.co.kr/"+msg+".jpg",title:"",profile:msg,pfimg:"http://bodle.dothome.co.kr/상점.jpg",des:"공격력: "+this[msg].damage+"\n가격: "+this[msg].price+"\n추천맵: "+this[msg].usualmap.join(",")}}
return Kakao.send(room, json, "custom")
}

function Shopfood(room){
            //const { [page]: [p1, p2, p3, p4, p5] = [null, null, null, null, null] } = weaponPage;
//pageWeapon = { p1, p2, p3, p4, p5 };
            
                    pageFood={
               p1:foodPage[page][0],
               p2:foodPage[page][1],
               p3:foodPage[page][2],
               p4:foodPage[page][3],
               p5:foodPage[page][4],
               };
//현재 페이지의 음식목록들

price1= foodPage[page][0]==undefined? '' : "가격: " +this[foodPage[page][0]].price;
price2= foodPage[page][1]==undefined? '' : "가격: "+this[foodPage[page][1]].price;
price3= foodPage[page][2]==undefined? '' : "가격: "+this[foodPage[page][2]].price;
price4= foodPage[page][3]==undefined? '' : "가격: "+this[foodPage[page][3]].price;
price5= foodPage[page][4]==undefined? '' : "가격: "+this[foodPage[page][4]].price;

json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"TextRpg -상점- Page:"+msg+"/"+maxpage,title1:pageFood.p1,des1:price1,img1:"http://bodle.dothome.co.kr/"+pageFood.p1+".jpg",title2:pageFood.p2,des2:price2,img2:"http://bodle.dothome.co.kr/"+pageFood.p2+".jpg",title3:pageFood.p3,des3:price3,img3:"http://bodle.dothome.co.kr/"+pageFood.p3+".jpg",title4:pageFood.p4,des4:price4,img4:"http://bodle.dothome.co.kr/"+pageFood.p4+".jpg",title5:pageFood.p5,des5:price5,img5:"http://bodle.dothome.co.kr/"+pageFood.p5+".jpg"}}
return Kakao.send(room, json, "custom")
}
function Shopetc(room){
            
            
                    pageEtc={
               p1:etcPage[page][0],
               p2:etcPage[page][1],
               p3:etcPage[page][2],
               p4:etcPage[page][3],
               p5:etcPage[page][4],
               };
//현재 페이지의 기타아이템 목록들

price1= etcPage[page][0]==undefined? '' : "가격: " +this[etcPage[page][0]].price;
price2= etcPage[page][1]==undefined? '' : "가격: "+this[etcPage[page][1]].price;
price3= etcPage[page][2]==undefined? '' : "가격: "+this[etcPage[page][2]].price;
price4= etcPage[page][3]==undefined? '' : "가격: "+this[etcPage[page][3]].price;
price5= etcPage[page][4]==undefined? '' : "가격: "+this[etcPage[page][4]].price;

json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"TextRpg -상점- Page:"+msg+"/"+maxpage,title1:pageEtc.p1,des1:price1,img1:"http://bodle.dothome.co.kr/"+pageEtc.p1+".jpg",title2:pageEtc.p2,des2:price2,img2:"http://bodle.dothome.co.kr/"+pageEtc.p2+".jpg",title3:pageEtc.p3,des3:price3,img3:"http://bodle.dothome.co.kr/"+pageEtc.p3+".jpg",title4:pageEtc.p4,des4:price4,img4:"http://bodle.dothome.co.kr/"+pageEtc.p4+".jpg",title5:pageEtc.p5,des5:price5,img5:"http://bodle.dothome.co.kr/"+pageEtc.p5+".jpg"}}
return Kakao.send(room, json, "custom")
}


if(msg.indexOf("/무기구경 ")==0&&DG("유저").indexOf(sender)!=-1){
   msg= msg.replace("/무기구경 ","");
   if(ruser[sender].위치 == "상점"){
      if(this[msg]==undefined){
         replier.reply("존재하지 않는 무기입니다.")
         }
         if(this[msg]!=undefined){
   
   Shopdetail(room)
   }
   }
   else if(ruser[sender].위치!="상점"){
      replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해 주세요.")
      }
      }
      
         if(msg.indexOf("/무기상점 ")==0&& DG("유저").indexOf(sender)!=-1)
{
   if(ruser[sender].위치 == "상점"){
      msg= msg.replace("/무기상점 ","");
      page = "p"+msg;
      maxpage=Object.keys(weaponPage).join("\n").split("\n").length;
      Shopweapon(room)
      
//replier.reply("[System] Rpg게임 상점\n͏"+String.fromCharCode(8237).repeat(501)+"\n■무기\n부숴진단검\n대미지:20\n공격속도:4초\n\n평범한 단검\n대미지:40\n공격속도:3초\n\n카람빗\n대미지:55\n공격속도:3초\n\nBAA\n대미지:80\n공격속도:4.5초\n\n보커나이프\n대미지:40\n공격속도:2초\n\n■칭호\n[유저] : 500원\n\n[모험가] : 2800원\n\n[능숙한모험가] : 43000원\n\n[☆고인물☆] : 450000원\n\n■소모품\n강화석: 250원\n복권: 25000원\n위험한복권:50000원\n설명:매우위험한 복권이다.. 사용할시 -600000~500000사이에서 나온다.\n\n■운영자아이템\n부들 : 999999999999999원[공격력:999999999999999]")
   }
   else{
      replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해주세요.")
      }
}
if(msg.indexOf("/무기구매")==0 &&DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
   msg = msg.replace("/무기구매 ","");
   inv = ruser[sender].인벤토리;
   if(this[msg] == undefined){
      replier.reply("없는 무기입니다.")
      }
      if(this[msg].getType.indexOf("buy")==-1){
         replier.reply("상점 구매를 통해 얻을 수 없는 상품입니다.")
         }
      if(this[msg] != undefined&&this[msg].getType.indexOf("buy")!=-1&&this[msg].type=="weapon"){
         if(inv.indexOf(msg)!=-1){
            replier.reply("당신이 이미 구매한 무기입니다.")
            }
            if(inv.indexOf(msg)==-1){
if(ruser[sender].위치 != "상점"){
   replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해주세요.")
   }
   if(ruser[sender].위치 == "상점"){
      if(ruser[sender].돈<this[msg].price){
         replier.reply("돈이 부족합니다.")
         }
      if(ruser[sender].돈>=this[msg].price){
         ruser[sender].공격력 = Number(ruser[sender].공격력)-Number(this[ruser[sender].무기].damage);
         ruser[sender].공격력 = Number(ruser[sender].공격력)+Number(this[msg].damage);
         ruser[sender].무기 = msg;
         ruser[sender].돈 = Number(ruser[sender].돈)-Number(this[msg].price);
         ruser[sender].공격속도 = this[msg].attackspeed;
         Itemadd(sender, msg);
         replier.reply(msg+" (을)를 구매하였습니다! 무기를 자동장착 하였고 인벤토리에 무기가 추가되었습니다.")
         }
         }
         }
         }
         }
         
   if(msg.indexOf("/무기장착")==0 && DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
   msg = msg.replace("/무기장착 ","");
   inv = ruser[sender].인벤토리
   if(this[msg] != undefined && ruser[sender].인벤토리.indexOf(msg)!=-1){
      ruser[sender].공격력 = Number(ruser[sender].공격력)-Number(this[ruser[sender].무기].damage);
      ruser[sender].공격력 = Number(ruser[sender].공격력)+Number(this[msg].damage);
      ruser[sender].무기 =msg;
      ruser[sender].공격속도 = this[msg].attackspeed;
      replier.reply("[System] "+msg+" (으)로 무기를 장착하였습니다.")
      }
      if(this[msg] == undefined){
         replier.reply("존재하지 않는 아이템입니다.")
         }
         }
         
         if(msg.indexOf("/음식상점 ")==0&& DG("유저").indexOf(sender)!=-1)
{
   if(ruser[sender].위치 == "상점"){
      msg= msg.replace("/음식상점 ","");
      page = "p"+msg;
      maxpage=Object.keys(foodPage).join("\n").split("\n").length;
      Shopfood(room)
      
//replier.reply("[System] Rpg게임 상점\n͏"+String.fromCharCode(8237).repeat(501)+"\n■무기\n부숴진단검\n대미지:20\n공격속도:4초\n\n평범한 단검\n대미지:40\n공격속도:3초\n\n카람빗\n대미지:55\n공격속도:3초\n\nBAA\n대미지:80\n공격속도:4.5초\n\n보커나이프\n대미지:40\n공격속도:2초\n\n■칭호\n[유저] : 500원\n\n[모험가] : 2800원\n\n[능숙한모험가] : 43000원\n\n[☆고인물☆] : 450000원\n\n■소모품\n강화석: 250원\n복권: 25000원\n위험한복권:50000원\n설명:매우위험한 복권이다.. 사용할시 -600000~500000사이에서 나온다.\n\n■운영자아이템\n부들 : 999999999999999원[공격력:999999999999999]")
   }
   else{
      replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해주세요.")
      }
}

         if(msg.indexOf("/기타상점 ")==0&& DG("유저").indexOf(sender)!=-1)
{
   if(ruser[sender].위치 == "상점"){
      msg= msg.replace("/기타상점 ","");
      page = "p"+msg;
      maxpage=Object.keys(etcPage).join("\n").split("\n").length;
      Shopetc(room)
      
//replier.reply("[System] Rpg게임 상점\n͏"+String.fromCharCode(8237).repeat(501)+"\n■무기\n부숴진단검\n대미지:20\n공격속도:4초\n\n평범한 단검\n대미지:40\n공격속도:3초\n\n카람빗\n대미지:55\n공격속도:3초\n\nBAA\n대미지:80\n공격속도:4.5초\n\n보커나이프\n대미지:40\n공격속도:2초\n\n■칭호\n[유저] : 500원\n\n[모험가] : 2800원\n\n[능숙한모험가] : 43000원\n\n[☆고인물☆] : 450000원\n\n■소모품\n강화석: 250원\n복권: 25000원\n위험한복권:50000원\n설명:매우위험한 복권이다.. 사용할시 -600000~500000사이에서 나온다.\n\n■운영자아이템\n부들 : 999999999999999원[공격력:999999999999999]")
   }
   else{
      replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해주세요.")
      }
}


         if(msg.indexOf("/구매 ")==0 &&DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
   msg = msg.replace("/구매 ","");
   inv = ruser[sender].인벤토리;
   if(this[msg] == undefined){
      replier.reply("존재하지 않는 아이템입니다.")
      }
      if(this[msg].getType.indexOf("buy")==-1){
         replier.reply("상점 구매를 통해 얻을 수 없는 상품입니다.")
         }
         if(this[msg].type=="weapon"){
            replier.reply("입력한 아이템은 무기입니다 /무기구매 를 사용해주세요.")
            }
            if(this[msg].type!="weapon"){
      if(this[msg] != undefined&&this[msg].getType.indexOf("buy")!=-1){
            if(inv.indexOf(msg+",")==-1){
if(ruser[sender].위치 != "상점"){
   replier.reply("당신의 위치는 상점이 아닙니다 상점으로 이동해주세요.")
   }
   if(ruser[sender].위치 == "상점"){
      if(ruser[sender].돈<this[msg].price){
         replier.reply("돈이 부족합니다.")
         }
      if(ruser[sender].돈>=this[msg].price){
         ruser[sender].돈 = Number(ruser[sender].돈)-Number(this[msg].price);
         Itemadd(sender, msg);
         replier.reply(msg+" (을)를 구매하였습니다!")
         }
         }
         }
         }
         }
         }
if(msg.indexOf("/판매")==0 &&DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
							msg = msg.replace("/판매 ","");
							inventory = ruser[sender].인벤토리;
							if(this[msg].sellprice==undefined){
								replier.reply("팔수 없는 아이템입니다.")
								}
								if(this[msg].sellprice!=undefined){
									if(inventory.indexOf(msg)==-1){
										replier.reply("당신에게는 없는 아이템입니다.")
										}
										if(inventory.indexOf(msg)!=-1){
											Itemremove(msg)
											
											ruser[sender].돈 = Number(ruser[sender].돈) + Number(this[msg].sellprice);
											replier.reply(msg+"(을)를 상점에 판매하고 "+this[msg].sellprice+"원을 받았습니다!")
											}
											}
											}
	if(msg.indexOf("/먹기")==0 && DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
				msg = msg.replace("/먹기 ","");
				dfhp = ruser[sender].체력;
	hp = ruser[sender].체력
	if(this[msg] == undefined){
							replier.reply("존재하지 않은 아이템 입니다.")
							}
				if(this[msg] !=undefined){
					if(Number(hp)+Number(this[msg].hpregen)>ruser[sender].최대체력){
								replier.reply("음식 섭취가 필요하지 않습니다.")
							}
					if(Number(hp)+Number(this[msg].hpregen)<=ruser[sender].최대체력){
				if(ruser[sender].인벤토리.indexOf(msg) ==-1){
					replier.reply("당신의 인벤토리에는 없는 물건입니다.")
					}
					if(ruser[sender].인벤토리.indexOf(msg) !=-1){
						var inv = ruser[sender].인벤토리;
						Itemremove(sender,msg)
						ruser[sender].체력 = Number(hp)+Number(this[msg].hpregen);
						replier.reply("당신은 "+msg+" (을)를 사용하여 체력을 "+this[msg].hpregen+" 만큼 회복하였습니다.")
						}
							}
							}
							}
							
											
   if(msg == "/내스텟" && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
   replier.reply("스텟포인트: "+rstat[sender].스텟포인트+"\n공격: "+rstat[sender].공격+"\n민첩성: "+rstat[sender].민첩성+"\n방어: "+rstat[sender].방어+"\n크리티컬: "+rstat[sender].크리티컬)
   }
   if(msg.indexOf("/스텟포인트사용 ")==0&&DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1){
      msg = msg.replace("/스텟포인트사용 ","");
      try{
         if(msg.split(" ")[1]  <=0){
            replier.reply("스텟포인트는 1개 이상만 사용가능합니다.")
            }
            if(msg.split(" ")[1] >0){
               if(msg.split(" ")[1]>rstat[sender].스텟포인트){
                  replier.reply("스텟포인트가 부족합니다.")
                  }
                  if(msg.split(" ")[1]<=rstat[sender].스텟포인트){
                     
         if(msg.split(" ")[0] == "공격"){
            rstat[sender].공격 = Number(rstat[sender].공격)+Number(msg.split(" ")[1]);
            rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트)-Number(msg.split(" ")[1]);
            ruser[sender].공격력 = Number(ruser[sender].공격력)+(Number(msg.split(" ")[1])*Number(1.7));
            replier.reply("공격 스텟을 성공적으로 올렸습니다.")
            }
            if(msg.split(" ")[0] == "방어"){
            rstat[sender].방어 = Number(rstat[sender].방어)+Number(msg.split(" ")[1]);
            rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트)-Number(msg.split(" ")[1]);
            ruser[sender].방어력 = Number(ruser[sender].방어력)+(Number(msg.split(" ")[1])*Number(1.7));
            replier.reply("방어 스텟을 성공적으로 올렸습니다.")
            }
if(msg.split(" ")[0] == "민첩성"){
            rstat[sender].민첩성 = Number(rstat[sender].민첩성)+Number(msg.split(" ")[1]);
            rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트)-Number(msg.split(" ")[1]);
            ruser[sender].민첩성 = Number(ruser[sender].민첩성)+(Number(msg.split(" ")[1])*Number(2));
            replier.reply("민첩성 스텟을 성공적으로 올렸습니다.")
            }
            if(msg.split(" ")[0] == "크리티컬"){
            rstat[sender].크리티컬 = Number(rstat[sender].크리티컬)+Number(msg.split(" ")[1]);
            rstat[sender].스텟포인트 = Number(rstat[sender].스텟포인트)-Number(msg.split(" ")[1]);
            ruser[sender].치명타율 = Number(ruser[sender].치명타율)+(Number(msg.split(" ")[1])*Number(1.8));
            replier.reply("크리티컬(치명타) 스텟을 성공적으로 올렸습니다.")
            }
            }
            }
            }catch(e){
               replier.reply("사용법이 잘못되셨거나 오류가 발생하였습니다.")
               replier.reply("오류내용: "+e)
               }
               }
         if(msg == "/일" && DG("유저").indexOf(sender)!=-1 && ruser[sender].프로필 == profile && DG("rpg").indexOf("on")!=-1) {
   if(ruser[sender].위치 !="회사"){
   replier.reply("당신의 위치는 회사가 아닙니다 회사로 이동해주세요")
}
   if(ruser[sender].위치 =="회사"){
os = Math.floor(Math.random() * 5) +1;
if(os >1){
ruser[sender].경험치 = Number(ruser[sender].경험치) + Number(15);
}
if(os == 1){
replier.reply("[System] Rpg게임\n워드로 작업하다가 0을 하나 더 붙여버려 혼났습니다.\n얻은돈: 0")
}
else if(os == 2){
   
var rmoney = 50;
var rm = ruser[sender].돈;
var rmoney2 = Number(rm) + Number(rmoney);
ruser[sender].돈=rmoney2;
replier.reply("[System] Rpg게임\n50원을 벌었습니다.")
}

else if(os == 3){
var rmoney = 80;
var rm = ruser[sender].돈;
var rmoney2 = Number(rm) + Number(rmoney);
ruser[sender].돈=rmoney2;
replier.reply("[System] Rpg게임\n80원을 벌었습니다.")
}

else if(os == 4){
var rmoney = 100;
var rm = ruser[sender].돈;
var rmoney2 = Number(rm) + Number(rmoney);
ruser[sender].돈=rmoney2;
replier.reply("[System] Rpg게임\n100원을 벌었습니다.")
}

else if(os == 5){
var rmoney = 40;
var rm = ruser[sender].돈;
var rmoney2 = Number(rm) + Number(rmoney);
ruser[sender].돈=rmoney2;
replier.reply("[System] Rpg게임\n40원을 벌었습니다.")
}
}
}
function Farminginfo(room){
   crop= rfarming[sender][areainfo].작물;
   //농사중인 작물
   current= rfarming[sender][areainfo].현황
   if(current!=0&&current<=35){
      farmimg= "http://bodle.dothome.co.kr/씨앗.jpg";
      }
      if(current<90&&current>35){
          farmimg="http://bodle.dothome.co.kr/새싹.jpg";
         }
   maxpage= Object.keys(rfarming[sender]).length;
            
json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"TextRpg -농사장- Page:"+msg+"/"+maxpage,title1:"작물",des1:crop,title2:"현황("+Math.round(current)+"%)",des2:graph(15,current,100),img2:farmimg}}
return Kakao.send(room, json, "custom")
}

if(msg.indexOf("/내 농사장 ")==0){ 
   msg= msg.replace("/내 농사장 ","");
   areainfo= "area"+msg;
   //ex) area1 
   if(rfarming[sender]==undefined){
      replier.reply("해당페이지의 농사장을 보유하고 있지 않습니다.")
      }
      if(rfarming[sender]!=undefined){
         
            Farminginfo(room)
            
            }
            }
         

if(msg == "/농사장 구매"){
   
   if(ruser[sender].돈<60000){
      replier.reply("농사장을 구입할 돈이 모이지 않았습니다.\n\n"+(Number(60000)-Number(ruser[sender].돈))+"원 부족.")
      }
      if(ruser[sender].돈>=60000){
         
         if(rfarming[sender]==undefined){
            rfarming[sender]={
               area1:{
                  작물:"없음",
                  start:"",
                  //심은시간
                  현황:0,
                  info:{},
                  percent1:"",
                  percent2:"",
                  percent3:""
                  }
                  };
                  replier.reply("농사지을 땅을 구매하였습니다!")
                  }
                  
                  else if(rfarming[sender]!=undefined){
                     havearea= Object.keys(rfarming[sender]).length;
                     areanum= Number(havearea)+Number(1);
                     area= "area"+areanum;
                     rfarming[sender][area]={
                        작물:"없음",
                        start:"",
                        //심은시간
                        현황:0,
                        info:{},
                        percent1:"",
                        percent2:"",
                        percent3:""
                        };
                        replier.reply("농사지을 땅을 구매하였습니다!")
                        }
                        
                        }
                        }
                        
                  if(msg.indexOf("/씨앗심기 ")==0){
                     msg=msg.replace("/씨앗심기 ","");
                     plantarea=msg.split(":")[0];
                     plantarea= "area"+plantarea;
                     plantcrop=msg.split(":")[1];
                        if(ruser[sender].인벤토리.indexOf(plantcrop+"(")==-1){
                           replier.reply("해당하는 작물의 씨앗을 갖고 있지 않습니다.")
                           }
                           else if(ruser[sender].인벤토리.indexOf(plantcrop+"(")!=-1){
                              if(rfarming[sender][plantarea]==undefined){
                                 replier.reply("해당하는 페이지의 농사장을 갖고있지 않습니다.")
                                 }
                                 else if(rfarming[sender][plantarea]!=undefined){
                                    if(rfarming[sender][plantarea].작물!="없음"){
                                       replier.reply("이미 작물이 심어져 있습니다.")
                                       }
                                       else if(rfarming[sender][plantarea].작물=="없음"){
                              Itemremove(sender, plantcrop);
                              rfarming[sender][plantarea].작물=plantcrop
                              eval(rfarming[sender][plantarea].info=this[plantcrop].toSource());
                              rfarming[sender][plantarea].start= Date.now();
                              replier.reply("씨앗을 심었습니다 자라기 시작합니다!")
                              java.lang.Thread({
                                run:function(){
                                   try{
                         
                              eval(rfarming[sender][plantarea].info.plant.toSource())();
                              
                              }catch(e){
                                 replier.reply(e)
                                 }
                              }
                              
                              }).start();
                              
                              }
                              }
                              }
                              }
                             } 
                        
}