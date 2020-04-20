const Thread = java.lang.Thread;
const Jsoup = org.jsoup.Jsoup;
susin="";
nolist = ["뀨"];

var wm = Api.getContext().getSystemService(android.content.Context.WIFI_SERVICE);


let room_raw = ["https://open.kakao.com/o/gsf2PTDb"]; //사용할 방 주소 순서대로 추가하시면 됩니다.
let room_names = ["테라리아[뉴비를구합니다]"]; //사용할 방 이름 정확하게 순서대로 추가하시면 됩니다.
let data_real = [{result: {headcount: null}}, {result: {headcount: null}}];
let data_pre = [{result: {headcount: null}}, {result: {headcount: null}}];

let loopStarted = false;

terraquiz=[];
//테라리아퀴즈정답
terrascore={};
trname="";
//테라리아 퀴즈점수 이름
nmscore="";
//점수
terrafinish=[];
terraanswer="";
terraria=false;

wordgame ={};
//타자게임

ann = true;
annlist =[];


const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule;
Kakao.init('3b753d38e7d215c81316e01ec0a20616');//1강에서 얻은 Kakao Developers 자바스크립트 키
Kakao.login('boudle0729@gmail.com','7708njbs');//봇의 카카오계정


tas = "";
taa = "";
trquiz={};
//테라리아 퀴즈점수판
saycool = {}
wm = false;
stuarray = [];
//가->["장","나"] 이런식으로 임시 저장될 배열
stumany = false;
//배열의 형태로 학습시킬지 안시킬지
var day = new Date();
var c = day.getDate(); 
rsave = false;
rturn = 1;
ruser = {};
rprofile = {};
rguild = {};
player31 = [];
nm31 = 0;
power31 = false;
d1 = ["ㄹ","ㄴ"];
d2 = ["ㅑ","ㅕ","ㅛ","ㅠ","ㅣ","ㅐ"];
ustest1 = [];
ustest2 = [];
ustest3 = [];
bm="";
bj="";
//유사도테스트


var stusayroom={};

ktime = false;
kroomset = 0;
sercurity = true;
allroom = [];
nature =["이","가","을","를"];
moonyee = {};
usender = "";
var kkuroom= null;
var kkuword= [];
var kkuroomset=0;
var kkuplayer = [];
var kkuplay = false;
var kkulist = [];
var kkuuc = {};
var kkuturn = {};
rcompamys = [];
//회사목록
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

wich =["회사","상점","컴퓨터"];//이동 할수있는 장소

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
rannounce = [],
rshare = {};
rmops = ({
    "슬라임 서식지": ["슬라임", "타락한슬라임", "반쯤먹힌슬라임"],
    광산: ["골렘", "부서진골렘", "다크스톤골렘"],
    하수구: ["기분나쁜액체", "추악한액체", "고인물"],
    학교: ["찢어진공책", "날카로운커터칼", "부숴진문"],
    병원: ["중독된 간호사", "환자", "시체"],
    바다: ["꼬리가 뜯겨나간 물개", "상어", "고래"],
    황무지: ["버려진 아이", "굶주린 모래좀비", "버려진 영혼"]
});
rluckitem = ({
    "슬라임 서식지": ["빠루", "점액"],
    광산: ["빛나는돌조각", "곡괭이"],
    하수구: ["맨홀뚜껑", "축축히 젖은 빵"],
    학교: ["회초리", "물"],
    병원: ["주사기", "피"],
    바다: ["신선한 물고기", "아이템미지정"]
});
rmopattack = ({
    "슬라임 서식지": ["3", "5", "9"],
    광산: ["12", "15", "17"],
    하수구: ["23", "27", "34"],
    학교: ["37", "38", "42"],
    병원: ["47", "48", "51"],
    바다: ["65", "68", "70"],
    황무지: ["87", "93", "97"]
});
rmopexp = {
    "슬라임 서식지": 34,
    광산: 45,
    하수구: 57,
    학교: 73,
    병원: 86,
    바다: 105,
    황무지: 153
};

//사냥터별로 들어오는 경험치
rmopmoney = ({
    "슬라임 서식지": 190,
    광산: 220,
    하수구: 350,
    학교: 375,
    병원: 405,
    바다: 436,
    황무지: 470
});
rmopwinlosthp = ({
    "슬라임 서식지": 18,
    광산: 76,
    하수구: 137,
    학교: 160,
    병원: 185,
    바다: 210,
    황무지: 215
});
rmoploselosthp = ({
    "슬라임 서식지": 36,
    광산: 130,
    하수구: 190,
    학교: 185,
    병원: 243,
    바다: 321,
    황무지: 360
});
rtitlesum = ({"[유저]":500,"[모험가]":2800,"[능숙한유저]":43000,"[☆고인물☆]":450000,"[GM]":100000000000000000});
rtitles = ["[유저]","[모험가]","[능숙한유저]","[☆고인물☆]","[GM]","[추석핫타임]"];
rsumsellitem = ({점액:150,빠루:430,맨홀뚜껑:745,피:220,곡괭이:125,강화석:200});
rsellitems = ["점액","빠루","맨홀뚜껑","피","곡괭이","강화석"];
ruseitemsum = {강화석:5400,복권:25000};
ruseitems = ["강화석","복권"];

mopwich = ["슬라임 서식지","광산","하수구","학교","병원","바다"];
rarrslime = ["Lv1슬라임","Lv3타락한슬라임","Lv4반쯤먹힌슬라임"];
rarrgolem = ["Lv6골렘","Lv9부서진골렘","Lv13다크스톤골렘"];
rarrwater = ["Lv17기분나쁜액체","Lv18추악한액체","Lv19고인물"];
rarrschool =["Lv20찢어진공책","Lv22날카로운커터칼","Lv23부숴진문"];


/*몬스터 공격력인데 잠시 보관
rslime = {Lv1슬라임:3,Lv3타락한슬라임:6,Lv4반쯤먹힌슬라임:8};
rgolem = {Lv6골렘:10,Lv9부서진골렘:14,Lv13다크스톤골렘:19};
rwater = {Lv17기분나쁜액체:29,Lv18추악한액체:37,Lv19고인물:41};
rschool ={Lv20찢어진공책:46,Lv22날카로운커터칼:52,Lv23부숴진문:57};
*/

/*mopobject ={"슬라임 서식지":rarrsime,광산:rarrgolem,하수구:rarrwater,학교:rarrschool};*/

rwpupgradesum = {부러진단검:2,검은칡:9,"잘 다듬어진 나뭇가지":19,나무단검:43,기모칡:51,돌검:58,일위삼체:64,"심영이 떨구고간 구슬":93,카이세리움:96,매그니시움:100,"워프된 키보드":125,사랑의매:142,"장인의 단소":175,부들:8888888888,빠루:20,회초리:30,맨홀뚜껑:25,주사기:43,곡괭이:22};
//무기 강화 초기비용
weaponsum ={검은칡:500,"잘 다듬어진 나뭇가지":1500,나무단검:1800,기모칡:5500,돌검:6500,일위삼체:10000,"심영이 떨구고간 구슬":14500,카이세리움:19500,매그니시움:29500,"워프된 키보드":45000,사랑의매:65000,"장인의 단소":96000,"훌륭한 리코더":165000,부들:999999999999999,"[추석]돌절구":65000,"[추석]송편":65000};
weapons = {부러진단검:1,검은칡:3,"잘 다듬어진 나뭇가지":5,나무단검:8,기모칡:12,돌검:15,일위삼체:30,"심영이 떨구고간 구슬":50,카이세리움:60,매그니시움:65,"워프된 키보드":70,사랑의매:75,"장인의 단소":80,"훌륭한 리코더":90,"부들":999999999999999,빠루:7,회초리:42,맨홀뚜껑:29,주사기:58,곡괭이:23,"[추석]돌절구":74,"[추석]송편":74};
food = {소형포션:50,중형포션:250,"축축히 젖은 빵":270,물:500,핫도그:315,컵라면:415,피:470,"신선한 물고기":512,"[추석음식]산적":2000,"[추석음식]갈비":2000,"[추석음식]고깃국":2000};
foodsum = {소형포션:150,중형포션:300,핫도그:370,컵라면:420};
foods = ["소형포션","중형포션","축축히 젖은 빵","물","핫도그","피","컵라면","신선한 물고기","[추석음식]산적","[추석음식]갈비","[추석음식]고깃국"];
var fo2od = {자갈치:18,문어:37,랍스터:4300,음식물쓰레기:5,핫도그:25};
ruseitems = ["강화석","복권"];
rsumuseitem = {강화석:250,복권:25000,위험한복권:50000};
var khb = {라:"나", 락:"낙", 띾:"낚", 띿:"낛", 란:"난", 랁:"낝", 랂:"낞", 랃:"낟", 랄:"날", 랅:"낡", 랆:"낢", 랇:"낣", 랈:"낤", 랉:"낥", 랊:"낦", 랋:"낧", 람:"남", 랍:"납", 랎:"낪", 랏:"낫", 랐:"났", 랑:"낭", 랒:"낮", 랓:"낯", 랔:"낰", 랕:"낱", 랖:"낲", 랗:"낳", 래:"내", 랙:"낵", 랚:"낶", 랛:"낷", 랜:"낸", 랝:"낹", 랞:"낺", 랟:"낻", 랠:"낼", 랡:"낽", 랢:"낾", 랣:"낿", 랤:"냀", 랥:"냁", 랦:"냂", 랧:"냃", 램:"냄", 랩:"냅", 랪:"냆", 랫:"냇", 랬:"냈", 랭:"냉", 랮:"냊", 랯:"냋", 랰:"냌", 랱:"냍", 랲:"냎", 랳:"냏", 로:"노", 록:"녹", 롞:"녺", 롟:"녻", 론:"논", 롡:"녽", 롢:"녾", 롣:"녿", 롤:"놀", 롥:"놁", 롦:"놂", 롧:"놃", 롨:"놄", 롩:"놅", 롪:"놆", 롫:"놇", 롬:"놈", 롭:"놉", 롮:"놊", 롯:"놋", 롰:"놌", 롱:"농", 롲:"놎", 롳:"놏", 롴:"놐", 롵:"놑", 롶:"높", 롷:"놓", 뢰:"뇌", 뢱:"뇍", 뢲:"뇎", 뢳:"뇏", 뢴:"뇐", 뢵:"뇑", 뢶:"뇒", 뢷:"뇓", 뢸:"뇔", 뢹:"뇕", 뢺:"뇖", 뢻:"뇗", 뢼:"뇘", 뢽:"뇙", 뢾:"뇚", 뢿:"뇛", 룀:"뇜", 룁:"뇝", 룂:"뇞", 룃:"뇟", 룄:"뇠", 룅:"뇡", 룆:"뇢", 룇:"뇣", 룈:"뇤", 룉:"뇥", 룊:"뇦", 룋:"뇧", 루:"누", 룩:"눅", 룪:"눆", 룫:"눇", 룬:"눈", 룭:"눉", 룮:"눊", 룯:"눋", 룰:"눌", 룱:"눍", 룲:"눎", 룳:"눏", 룴:"눐", 룵:"눑", 룶:"눒", 룷:"눓", 룸:"눔", 룹:"눕", 룺:"눖", 룻:"눗", 룼:"눘", 룽:"눙", 룾:"눚", 룿:"눛", 뤀:"눜", 뤁:"눝", 뤂:"눞", 뤃:"눟", 르:"느", 륵:"늑", 륶:"늒", 륷:"늓", 른:"는", 륹:"늕", 륺:"늖", 륻:"늗", 를:"늘", 륽:"늙", 륾:"늚", 륿:"늛", 릀:"늜", 릁:"늝", 릂:"늞", 릃:"늟", 름:"늠", 릅:"늡", 릆:"늢", 릇:"늣", 릈:"늤", 릉:"능", 릊:"늦", 릋:"늧", 릌:"늨", 릍:"늩", 릎:"늪", 릏:"늫", 랴:"야", 략:"약", 랶:"앾", 랷:"앿", 랸:"얀", 랹:"얁", 랺:"얂", 랻:"얃", 랼:"얄", 랽:"얅", 랾:"얆", 랿:"얇", 럀:"얈", 럁:"얉", 럂:"얊", 럃:"얋", 럄:"얌", 럅:"얍", 럆:"얎", 럇:"얏", 럈:"얐", 량:"양", 럊:"얒", 럋:"얓", 럌:"얔", 럍:"얕", 럎:"얖", 럏:"얗", 려:"여", 력:"역", 렦:"엮", 렧:"엯", 련:"연", 렩:"엱", 렪:"엲", 렫:"엳", 렬:"열", 렭:"엵", 렮:"엶", 렯:"엷", 렰:"엸", 렱:"엹", 렲:"엺", 렳:"엻", 렴:"염", 렵:"엽", 렶:"엾", 렷:"엿", 렸:"였", 령:"영", 렺:"옂", 렻:"옃", 렼:"옄", 렽:"옅", 렾:"옆", 렿:"옇", 례:"예", 롁:"옉", 롂:"옊", 롃:"옋", 롄:"옌", 롅:"옍", 롆:"옎", 롇:"옏", 롈:"옐", 롉:"옑", 롊:"옒", 롋:"옓", 롌:"옔", 롍:"옕", 롎:"옖", 롏:"옗", 롐:"옘", 롑:"옙", 롒:"옚", 롓:"옛", 롔:"옜", 롕:"옝", 롖:"옞", 롗:"옟", 롘:"옠", 롙:"옡", 롚:"옢", 롛:"옣", 료:"요", 룍:"욕", 룎:"욖", 룏:"욗", 룐:"욘", 룑:"욙", 룒:"욚", 룓:"욛", 룔:"욜", 룕:"욝", 룖:"욞", 룗:"욟", 룘:"욠", 룙:"욡", 룚:"욢", 룛:"욣", 룜:"욤", 룝:"욥", 룞:"욦", 룟:"욧", 룠:"욨", 룡:"용", 룢:"욪", 룣:"욫", 룤:"욬", 룥:"욭", 룦:"욮", 룧:"욯", 류:"유", 륙:"육", 륚:"윢", 륛:"윣", 륜:"윤", 륝:"윥", 륞:"윦", 륟:"윧", 률:"율", 륡:"윩", 륢:"윪", 륣:"윫", 륤:"윬", 륥:"윭", 륦:"윮", 륧:"윯", 륨:"윰", 륩:"윱", 륪:"윲", 륫:"윳", 륬:"윴", 륭:"융", 륮:"윶", 륯:"윷", 륰:"윸", 륱:"윹", 륲:"윺", 륳:"윻", 리:"이", 릭:"익", 릮:"읶", 릯:"읷", 린:"인", 릱:"읹", 릲:"읺", 릳:"읻", 릴:"일", 릵:"읽", 릶:"읾", 릷:"읿", 릸:"잀", 릹:"잁", 릺:"잂", 릻:"잃", 림:"임", 립:"입", 릾:"잆", 릿:"잇", 맀:"있", 링:"잉", 맂:"잊", 맃:"잋", 맄:"잌", 맅:"잍", 맆:"잎", 맇:"잏", 녀:"여", 녁:"역", 녂:"엮", 녃:"엯", 년:"연", 녅:"엱", 녆:"엲", 녇:"엳", 녈:"열", 녉:"엵", 녊:"엶", 녋:"엷", 녌:"엸", 녍:"엹", 녎:"엺", 녏:"엻", 념:"염", 녑:"엽", 녒:"엾", 녓:"엿", 녔:"였", 녕:"영", 녖:"옂", 녗:"옃", 녘:"옄", 녙:"옅", 녚:"옆", 녛:"옇", 뇨:"요", 뇩:"욕", 뇪:"욖", 뇫:"욗", 뇬:"욘", 뇭:"욙", 뇮:"욚", 뇯:"욛", 뇰:"욜", 뇱:"욝", 뇲:"욞", 뇳:"욟", 뇴:"욠", 뇵:"욡", 뇶:"욢", 뇷:"욣", 뇸:"욤", 뇹:"욥", 뇺:"욦", 뇻:"욧", 뇼:"욨", 뇽:"용", 뇾:"욪", 뇿:"욫", 눀:"욬", 눁:"욭", 눂:"욮", 눃:"욯", 뉴:"유", 뉵:"육", 뉶:"윢", 뉷:"윣", 뉸:"윤", 뉹:"윥", 뉺:"윦", 뉻:"윧", 뉼:"율", 뉽:"윩", 뉾:"윪", 뉿:"윫", 늀:"윬", 늁:"윭", 늂:"윮", 늃:"윯", 늄:"윰", 늅:"윱", 늆:"윲", 늇:"윳", 늈:"윴", 늉:"융", 늊:"윶", 늋:"윷", 늌:"윸", 늍:"윹", 늎:"윺", 늏:"윻", 니:"이", 닉:"익", 닊:"읶", 닋:"읷", 닌:"인", 닍:"읹", 닎:"읺", 닏:"읻", 닐:"일", 닑:"읽", 닒:"읾", 닓:"읿", 닔:"잀", 닕:"잁", 닖:"잂", 닗:"잃", 님:"임", 닙:"입", 닚:"잆", 닛:"잇", 닜:"있", 닝:"잉", 닞:"잊", 닟:"잋", 닠:"잌", 닡:"잍", 닢:"잎", 닣:"잏"};
var hbda =["렫","긶","돓","뎧","걀","걋","걔","겊","굠","궃","궝","귐","깥","껸","껼","꼇","꼍","꿉","꿋","꿑","꿜","뀜","뀨","낏","냔","넁","넠","녆","녘","놔","뇸","눔","늄","뎬","됵","둬","듈","듐","듥","듦","듫","땽","떳","뗌","똔","똠","뜹","랖","럴","럽","럿","렇","렛","렝","룀","뤂","뤠","륀","륨","릅","릏","릐","먕","멘","뮨","뮴","믁","믐","및","밗","벹","볜","봠","붏","붖","븀","븐","븜","빱","뼌","쁨","샄","샥","섴","솣","쇅","숰","숴","슨","싕","싴","싶","쎔","쑴","앚","얒","얗","얫","얶","얺","엋","엌","엣","옄","옺","왐","욤","욹","웆","웍","웝","윅","윰","읃","읅","읆","읋","읒","읓","읔","읕","읖","읗","잫","좍","좍","죌","죌","죤","죤","짤","쨔","쨤","쩌","쩝","쭝","찱","촘","촨","츨","캣","컹","컽","켓","켸","콫","쾃","쿄","퀄","퀑","큭","탉","탸","톹","툑","툽","튠","튬","틤","펫","퓸","픔","픠","훕","휵"];
//한방단어.
goyoucode = {};
raidattack = {};
raidpower = false;
raidmonsters = ["바이러스", "응집된 힘", "부들", "김정은"];
raidmonsterhp = {
    바이러스: 350000,
    "응집된 힘": 730000,
    "부들": 1200000,
    "김정은": 1300000
};
raidmonster = null;

timecheck = false;
timecheckroom = null;

om = false;
//오목전원
omfield = [];
rplayer = "";
rword=[];
rlist = [];
rpower = false;
turn = 0;
rwt = DataBase.getDataBase("루트사전");
//루트사전의 내용을 변수에 저장
//루트연습봇 정보
dcpower = true;
dcroom = [];
var kturn = 1;
var taja = false;
var 운영자 = [];
var turn = 0;
var preMsg = "";
var study = false
var stusay = 10;
var stud = 3;
var fstu = "";
var bstu = "";
var os = "";
var pra = [];
var sto = false;
var ss = false;
var bv = true;
var ms1 = "";
var ms2 = "";
var 응답 = false;
var 받음 = false;
var FRlist = [];
var errormsg = "";
var error = false;
var gremove = false;
var grv = "";
var reloadpw = "994848839224";
var dcgr ="";
var dcgo = false;
var dcg = "";
var ctsv = false;
var ctpw = "4948382858585838282858585";
chat1 = "";
chat2 = "";
var suri = false;
var bh = "";
var uh = "";
var 관=DataBase.getDataBase("관리자");
var bl = [];
var day = new Date();
var c = day.getDate();
var vote = false;
var tj = "";
var vt = {};
var ve = "";
var pp = "";
var people = [];
var list = false;
var code = "";
var 시간표 = [];
var msgs = "";
var rr = "렐레";
var word_hb = false;
var kroom= null;
var kword= [];
var kroomset=0;
var kplayer = [];
var kplay = false;
var klist = [];
var kuc = {};

var ksoloroom= null;
var ksoloword= [];
var ksoloroomset=0;
var ksoloplayer = [];
var ksolobplayer = [];
var ksoloplay = false;
var ksololist = [];
var ksolouc = {};
var ksoloturn2 = false;
ksoloturn = false;
//기회
var ksolomrg = false;
//무르기
var ksoloturn = false;
var end = ["끝","됐어","다했어","수고했어"];
//봇 명령어 초기화 단어
var talk = ["이","가","은","는","을","를"];
//msg에서 주어와 명령어를 구별
var su = [];
var dc = "";
var dcount = "";
var qt = "";
var quiz = false;
var qr = "";
var qs = "";
var jh = 99999999999999;
var hs = 9999999999;
var 학습 =true;
var 딥러 = true;
var 딥러닝 = "";
var 딥러룸 = "";
var 딥러s = new java.io.File("sdcard/딥러닝").list();
var power = true;
var chat = "";
var player = null;
var off = false;
var 투표1 = null;
var 투표2 = null;
var 투표3 = null;
var 투표4 = null;
var 투표5 = null;
var 투표상태  = 0;
var 투표항목1 = 0;
var 투표항목2 = 0;
var 투표항목3 = 0;
var 투표항목4 = 0;
var 투표항목5 = 0;
var 관리자 = ["DEBUG$MODE*NAME+","부들","코딩조아","대악마바닐"];
var 관리자모드 = 0;
var 차단 = ["응","웅"]
var ud = false;
var uad = 0;
var 주인 = ["부들3","부들","DEBUG$MODE*NAME+"]
var mng = 0;
var shutup = [];
var 수신 = "";
var 품목 = [];
var 경매 = false;
var 경매자 = [];
var 최대입찰가 = 0;
var a = null;
var mb = 0;
var mb2 = 0;
var 답 = 0;
var 참여 = [];
var ls = "";
var bc = ["읭"];
var replier2 = {};
var 입찰가 = 0;
var 점검 = false;

command = ["/도움말","/급식검색","/날씨","/문의","/나무위키","/사전","/타이머","/실검","/인코딩","/디코딩","/롤","/스팀","/약수","/sha암호화","/가사","/문의","/리폿"];

const scriptName = "chat";
pb = "[Bot] "; fs = FileStream; Lw="\u200b".repeat(500);
룸=["TextRpg 벨런스팀"]; //작동되게 할 방
let mysite="http://bodle.dothome.co.kr" //내 사이트주소. 다음글에서 자세히 설명하겠습니다.

const PICTURE_PATH = "sdcard/Android/data/com.kakao.talk/contents/Mg=="; 
function getLastPictureFolderPath(){ 
var file = new java.io.File(PICTURE_PATH); 
var list = file.listFiles().sort(function(a, b){
return b.lastModified() -a.lastModified(); 
}); 
return list[0].toString();
} 

function getLastPictureFilePathFromFoldPath(path){ 
var file = new java.io.File(path); 
var list = file.listFiles().sort(function(a, b){ 
return b.lastModified() - a.lastModified(); 
}); return list;
} 

function getLastPicture(r){ 
try{ 
var path = getLastPictureFilePathFromFoldPath(getLastPictureFolderPath()); 
for(var i=0;i<path.length;i++){ 
var file = new java.io.File(path[i].toString()); if(file.listFiles().length == 0) continue; 
else { 
var picture = getLastPictureFilePathFromFoldPath(file.getPath())[0].toString(); 
let baos = new java.io.ByteArrayOutputStream();
let bm = android.graphics.BitmapFactory.decodeFile(picture)
try{
bm.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, baos);
}catch(e){}
let bImage = baos.toByteArray();
let base64 = android.util.Base64.encodeToString(bImage, android.util.Base64.NO_WRAP);
return base64;
} 
} 
return null; 
} catch(e){ 
return null; 
}
}


function clipboard(str) {
    Api.UIThread(function () {
        Api.getContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE).setPrimaryClip(android.content.ClipData.newPlainText(str, str));
    });
}


/*상수 선언*/
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 최상위 경로


/*상수 (객체) 선언*/
const Merisia = {}; //메리시아 관련 객체
const DB = {}; //파일 입/출력용 객제인데, 이름이 DB인건 기분탓
const preChat = {}; //도배 방지 구현용
const lastSender = {}; //보낸 사람 구분용
const botOn = {}; //봇 작동여부 설정용

/*변수 선언*/
var chatData = []; //1:1 채팅방에서 사용할 대화 목록이 저장될 배열

/*Merisia 객체*/
Merisia.checkWord = function(que, msg) { //적당히 비슷한 말인지 비교
    var data = msg.split(" "); //수신된 채팅을 어절 단위로 나눔
    var count = 0;
    for (var n = 0; n < data.length; n++) { //저장된 채팅에 어절들이 몇 개 포함되어 있는지
        if (que.indexOf(data[n]) != -1) {p
            count++;
        }
    }
    return count; //반환
};

        
        
        

Merisia.isValidData = function(msg) { //배울 만한 채팅인지 구분하는 함수
    var invalids = ["#", "/","::","-","!"];
    for (var n = 0; n < invalids.length; n++) {
        if (msg.charAt(0) == invalids[n]) return false; //특정 문자로 시작하는 것은 학습 X.    
    }
    var noStudy = ["\n", "//","ㅅㅂ","씨발","시발","병신","ㅂㅅ","븅신","애미","애비","/시세","!시세","샵검색"]; //엔터가 포함된건 학습 X. 비속어 필터링 등도 여기다가 넣으면 이상한 말은 안배움
    for (var n = 0; n < noStudy.length; n++) {
        if (msg.indexOf(noStudy[n]) != -1) return false;
    }
    return true;
};

/*DB 객체*/
DB.createDir = function() { //배운 채팅들이 저장될 폴더를 만드는 함수
    var folder = new java.io.File(sdcard + "/Merisia/"); //File 인스턴스 생성
    folder.mkdirs(); //폴더 생성
};
DB.saveData = function(name, msg) { //파일에 내용을 저장하는 함수
    try { //사실, 나도 어디서 긁어와서 이곳저곳에서 사용하는 거임
        var file = new java.io.File(sdcard + "/Merisia/" + name + ".txt");
        var fos = new java.io.FileOutputStream(file);
        var str = new java.lang.String(msg);
        fos.write(str.getBytes());
        fos.close();
    } catch (e) {
        Log.debug(e + ", " + e.lineNumber);
    }
};
DB.readData = function(name) { //파일에 저장된 내용을 불러오는 함수
    try { //사실, 나도 어디서 긁어와서 이곳저곳에서 사용하는 거임
        var file = new java.io.File(sdcard + "/Merisia/" + name + ".txt");
        if (!file.exists()) return null;
        var fis = new java.io.FileInputStream(file);
        var isr = new java.io.InputStreamReader(fis);
        var br = new java.io.BufferedReader(isr);
        var str = br.readLine();
        var line = "";
        while ((line = br.readLine()) != null) {
            str += "\n" + line;
        }
        fis.close();
        isr.close();
        br.close();
        return str;
    } catch (e) {
        Log.debug(e + ", " + e.lineNumber);
    }
};
DB.initChatData = function() {
    var data = DB.loadChatData();
    if (data == null) Log.info("1:1 채팅방용 대화 데이터를 받아오지 못했습니다.");
    else chatData = data.split("\n");
};
DB.loadChatData = function() {
    try {
        var url = new java.net.URL("https://raw.githubusercontent.com/DarkTornado/ProjectM/master/ChatData.txt");
        var con = url.openConnection();
        if (con != null) {
            con.setConnectTimeout(5000);
            con.setUseCaches(false);
            var isr = new java.io.InputStreamReader(con.getInputStream());
            var br = new java.io.BufferedReader(isr);
            var str = br.readLine();
            var line = "";
            while ((line = br.readLine()) != null) {
                str += "\n" + line;
            }
            isr.close();
            br.close();
            con.disconnect();
        }
        return str.toString();
    } catch (e) {
        Log.debug(e);
    }
};



/*전역에서 실행할 것들*/
DB.createDir(); //폴더 생성
DB.initChatData(); //Project M 깃허브에서 대화 목록을 불러옴


                
                
                
function response(room, msg, sender, isGroupChat, replier, imageDB) {
    /*모르면 골롬*/
   // img = image_url;
 //   mobile = mobile_web_url;
//    des = description;
    
    
    
    msg = msg.trim();
    sender = sender.trim();
    room = room.trim();
    
profile = java.lang.String(imageDB.getProfileImage()).hashCode();

DS=(a,b)=>DataBase.setDataBase(a,b);
DG=(a)=>DataBase.getDataBase(a);

/*
try{
if(DG("기록방").indexOf(room)!=-1){
msg=msg.replace(/\u202E/g,"");
sender=sender.replace(/\u202E/g,"");
let day = new Date(); let 시 = day.getHours(); let 분 = day.getMinutes();
let path = "sdcard/bot/chatreport/"+room+".txt";
if(fs.read(path)==null) fs.write(path,"{}");
let json = JSON.parse(fs.read(path));
if(json["chat"] == undefined) json["chat"] = [];
if(msg=='사진을 보냈습니다.'){
let a=org.jsoup.Jsoup.connect(mysite+'/imglog.php').data('room',room).data('img',getLastPicture(room)).ignoreContentType(true).post().text()
json["chat"].push("["+sender+"]["+시+":"+분+"] "+'사진을 보냈습니다(링크를 눌러 사진확인)\n'+mysite+'/img/'+room+'/'+a+'.jpg');
}
fs.write(path, JSON.stringify(json));
*/
/*
if(msg=="챗"){
let chat = json["chat"].reverse().slice(1,20);
(chat.length>0) ? replier.reply(pb+"방 ["+room+"] 의 최근 채팅리스트입니다:"+Lw+"\n\n"+chat.reverse().join("\n\n")):replier.reply(pb+"채팅방의 채팅기록이 존재하지 않습니다!");
}
*/
/*
if(json["chat"].length > 500){
fs.write(path,"{}"); 
replier.reply(org.jsoup.Jsoup.connect(mysite+'/delete.php?delete=img/'+room+'&type=typeb').ignoreContentType(true).get().text());
}

if(msg=="삭제"){
fs.write(path,"{}"); 
replier.reply(org.jsoup.Jsoup.connect(mysite+'/delete.php?delete=img/'+room+'&type=typea').ignoreContentType(true).get().text());
}
}
}catch(e) {
replier.reply("보들",e+"\nErrorline: "+e.lineNumber+"\n에러발생 스크립트: "+scriptName);
replier.reply("보들",pb+"오류가 발생하여 ["+scriptName+"] 스크립트를 중지합니다");
}
*/
/*
function onStartCompile() {
let pathbackup="sdcard/bot/backup/"+scriptName+".txt";
if(!FileStream.read(pathbackup)) FileStream.write(pathbackup,"{}");
FileStream.write(pathbackup, FileStream.read("sdcard/katalkbot/Bots/"+scriptName+"/"+scriptName+".js"));
}
*/
    
    var send=(str) => {
	ls=str;
	if(bc.indexOf(ls)!=-1) {
	return false;
	}
	else {
	return replier.reply(ls);
	}
	}
    if(msg.indexOf("#eval ")==0 && DG("프로필").indexOf(profile)!=-1) {
try{
replier.reply(eval(msg.substr(6)));
}catch(e){
replier.reply(e);
}
}

if(msg=="/봇주인"&&room=="제라리아"){
	replier.reply("저는 이방 방장인 지형님이 만드셨어요!")
	}
                 if(suri == true && DG("관리자").indexOf(profile)==-1) return;
                 /*
                               ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
                batteryStatus = Api.getContext().registerReceiver(null, ifilter);
               var batterypower = "";
                battery = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_STATUS, -1);  
                
                if (battery -1 ==1&&batterypower != 1){
                	batterypower = 1;
                replier.reply ("보들","봇 작동용 디바이스가 정상적으로 충전을 시작했습니다.")
                
                }
                                if (battery -1 ==2&&batterypower ==1){
                	batterypower = 0;
                replier.reply ("보들","봇 작동용 디바이스에서 충전기가 분리되었습니다")
               
                }
                */
                /*
            	 replier.reply ("테라리아 채팅방","봇 작동용 디바이스에서 충전기가 분리되었습니다")
replier.reply ("테라리아 채팅방","봇 작동용 디바이스가 정상적으로 충전을 시작했습니다.")
*/
    function bly(kor) {
    var f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    var s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
               'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
               'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    var t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
               'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
               'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
               'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
               for(i=0;i<kor.length;i++){
    var ga = 44032;
    var un = kor.charCodeAt(i);
    un = un - ga;
    var fn = parseInt(un / 588);
    var sn = parseInt((un - (fn * 588)) / 28);
    var tn = parseInt(un % 28);
    if(fstresult == undefined){
    var fstresult = f[fn] +" "+ s[sn] +" "+ t[tn];
    }
    else if(fstresult != undefined){
        var fstresult = fstresult + f[fn] + s[sn] + t[tn];
    }
    }
    return fstresult;
}

        Bodelword = function(data, cmd) {
    var data = bly(data);
    var cmd = bly(cmd); 
    var data = data.split(" ");
    var wd = cmd.split(" "); 


    var wdarray = [];
    var dataarray = [];
    for(var i=0;i<wd.length-1; i++)
    {
        wdarray.push(wd[i])
    }
     for(var c=0;i<data.length-1; c++)
    {
        dataarray.push(data[c])
    }
//자음모음 분리한것을 각각 배열로 저장

    var count = 0;
    for (var n = 0; n < wd.length; n++) { 
        if (data.indexOf(wd[n]) != -1) {
            count++;
        }
    }
    count = Number(count) / Number(data.length);
    count = Number(count) * Number(100);
    //백분율
    /*
    count = Math.round(count);
    //반올림
    */
    return count;
    //출력
};

if (msg == "온")
{
if(DG("관리자").indexOf(profile)!=-1)

 {
        power = true;
        send("전원이 켜졌습니다!");
} else {
send("관리자가 아닙니다.")
}
} else if (msg == "오프")
{
if(DG("관리자").indexOf(profile)!=-1)

 {

        power = false;
        send("전원이 꺼졌습니다.")
    } else {
    send("관리자가 아닙니다.")
}
}





/*
Merisia.getReply = function(room, msg) { //수신된 채팅에 대한 적당한 답변 반환
    var data = DB.readData(room); //저장된 채팅들을 불러옴
    if (data != null && Math.floor(Math.random() * stusay) == 0&&DG ("학습대답방").indexOf (room)!=-1) { //저장된 채팅이 없거나, 10% 확률이 터진게 아니면, 작동 안함
        data = data.split("\n"); //냥
        var result = []; //비슷한 말들이 들어갈 배열
        var max = 0; //최대 유사도(?) 값
        for (var n = 0; n < data.length - 1; n++) { //저장된 채팅들 중 비슷하다 싶은 녀석들을 배열에 넣을건데,
            var count = Bodelword(data[n], msg); //유사도(?)를 가져와서
            if (count > 75) { //유사도가 75퍼 이상이면
                if (count > max) { //기존에 확인했던 녀석들보다 유사도가 높으면, 결과 배열 초기화 및 최대 유사도 값 변경
                    max = count;
                    result = [];
                }
                if (count == max) { //이미 유사도가 더 높은 말이 있다면, 저장 안함
                    result.push(data[n + 1]); //배열에 추가
                }
            }
        }
        if (result[0] != null) return result[Math.floor(Math.random() * result.length)]; //배열이 빈게 아니라면 아무거나 하나 반환
    }
    return null; //일치하는게 없거나, 저장된 채팅이 없거나, 발동할 확률(?)이 아니면, null 반환
};
*/

if(msg == "/호출"){
	replier.reply("관리자방에서 관리자들을 불렀습니다!")
	replier.reply("테라리아채팅방 관리자",room+"에서 "+sender+"님이 관리자님을 호출하셨어요!")
}




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
folder = new java.io.File(sdcard+"/학습/");


nc = read(sdcard+"/Rpg/중앙서버/닉네임/"+sender+".txt");

path = sdcard+"/관리자/";

if(DataBase.getDataBase("차단").indexOf(sender)!=-1) return;

/*
updateData = () => {
   for (let i = 0; i < room_raw.length; i ++) {
      data_pre[i] = data_real[i]; // copy previous data_real to data_pre
      
      let obj = JSON.parse(Jsoup.connect("https://api.develope.kr/search/room?room=" + room_raw[i]).ignoreContentType(true).get().text());
      data_real[i] = obj;
   }
}

if (!loopStarted) {
      loopStarted = true;
      
      while (true) {
         updateData();
         
         for (let i = 0; i < room_raw.length; i ++) {
            if (data_pre[i].result.headcount != null) {
               if (data_real[i].result.headcount > data_pre[i].result.headcount)
                  Api.replyRoom(room_names[i], "[공지]\n입장후 20분간 질문금지입니다.\n\nhttps://cafe.naver.com/krterraria/29\n규칙숙지해주세요.\n\n\nhttps://open.kakao.com/o/gk4lY6Vb\n위 링크는 타겜 얘기가 자유롭게 가능한 채팅방입니다.\n\n\n1. 방장을 부르고자 할때는\n\"/호출\" 명령어를 입력해주세요.\n\n2. 문의하실 내용이 있으시다면\n\"/문의 (내용)\" 형식으로 입력해주세요.\n\n 인원: "+data_pre[i].result.headcount+"->"+data_real[i].result.headcount);
               
               else if (data_real[i].result.headcount < data_pre[i].result.headcount)
                  Api.replyRoom(room_names[i], "[공지] 한분이 나가셨군요!ㅠ\n 인원: "+data_pre[i].result.headcount+"->"+data_real[i].result.headcount);
            }
         }      
         
         Thread.sleep(750);
      }
   }
*/


//eval(Utils.parse("http://wikitree.kro.kr").select("script").dataNodes().get(0).toString())
if(power == false) return;

if(DG("테라리아").indexOf(sender)==-1){
	if(room=="테라리아"){
	DS("테라리아",DG("테라리아").replace(DG("테라리아"),DG("테라리아")+sender+","));
	replier.reply("[알림]\n"+sender+DG("알림"));
	}
	}
	if(msg=="/갱신현황"&&room=="테라리아"){
		replier.reply(DG("테라리아").replace(/[^,]/g,"").length+"명 갱신완료되었습니다.")
		}
		
		if(msg.indexOf("/공지추가 ")==0&&DataBase.getDataBase("관리자").indexOf(profile)!=-1){
			DataBase.setDataBase("공지",DataBase.getDataBase("공지")+msg.substring(6)+",")
			}
			if(msg =="/공지갱신"){
				for(i==0;i<DataBase.getDataBase("공지").split(",").length-1;i++){
					a= DataBase.getDataBase("공지").split(",")[i]
					annlist.push(a);
					}
					replier.reply("완료.")
					}
		/*
		if(ann == true){
			annsend = Math.floor(Math.random() * 35);
			//공지될 확률
			annsay = Math.floor(Math.random() * annlist.length)-1;
			//공지될 문장
			if(annsend == 0){
				if(room == "테라리아"){
				replier.reply("테라리아",annlist[annsay])
				}
				}
				}
				*/
				if(msg =="/로그"){
					if(DG("프로필").indexOf(profile)!=-1){
						replier.reply("오류난 직후 저장된 오류로그를 불러옵니다\n"+String.fromCharCode(8237).repeat(501)+"\n"+DG("오류"))
						}
						else if(DG("프로필").indexOf(profile)==-1){
							replier.reply("관리자가 아닙니다.")
							}
							}
							
							
							
							//eval(Utils.getWebText("http://weather.n-e.kr").replace(/<[^>]+>/g,""))
							
					if(msg.indexOf("/경고 ")==0&&DataBase.getDataBase("관리자").indexOf(profile)!=-1){
						msg = msg.replace("/경고 ","");
						target = msg.split(":")[0];
						count = msg.split(":")[1];
						if(DataBase.getDataBase("경고").indexOf(target+":")!=-1 == false){
							DataBase.setDataBase("경고",DataBase.getDataBase("경고")+target+":"+count+"\n");
								replier.reply(count+"만큼 "+target+"님의 경고가 저장되었습니다.")
								}
								else if(DataBase.getDataBase("경고").indexOf(target+":")!=-1 != false){
									originalct= DataBase.getDataBase("경고").split(target+":")[1].split("\n")[0];
									//원래 이미 갖고있던 경고 개수
									edit=Number(originalct)+Number(count);
									editcount=DataBase.getDataBase("경고").replace(target+":"+originalct,target+":"+edit);
								DataBase.setDataBase("경고",editcount);
								replier.reply(Number(originalct)+Number(count)+"만큼 "+target+"님의 경고가 저장되었습니다.")
								}
								}
						if(msg=="/경고리스트"&&room=="테라리아"){
							replier.reply(DataBase.getDataBase("경고"))
							}
			
			function Itsearch(room){
			pdsearch= java.net.URLEncoder.encode(msg, "EUC-KR");
//키워드 인코딩
url= Jsoup.connect("https://review.cetizen.com/review.php?q=phone&just_one=&just_one_name=&just_one_pcat=&keyword_p="+pdsearch+"&p_data=3&p_split=&recnum=10").get();
//파싱할 주소
productdate=url.select("div[id^=product_list]").toString().replace(/<[^>]+>/g,"").split("출시일")[1].split("(")[0].replace(/ /g,"").replace(/\n/g,"").replace(/&nbsp/g,"").replace(/;/g,"").replace(/:/g,"");
//출시일
productname= Jsoup.connect("https://review.cetizen.com/review.php?q=phone&just_one=&just_one_name=&just_one_pcat=&keyword_p="+pdsearch+"&p_data=3&p_split=&recnum=10").get().select("div[id^=product_list]").toString().replace(/<[^>]+>/g,"");
productname= productname.split("리뷰")[0].replace(/ /g,"").replace(/\n/g,"");
//제품이름
productprice= url.toString().split("출고가 : ")[1].split(")")[0];
//출고가
productimg=url.select("img[src^=https://image.cetizen.com/CDN/review]").toString().split("\"")[1].split("\"")[0];
//제품사진

json = {"link_ver":"4.0","template_id":22455,"template_args":{title:"",des:"출시일: "+productdate+"\n출고가격: "+productprice,pfimg:"http://bodle.dothome.co.kr/%ED%9E%9B.jpg",image:productimg,profile:productname}}
return Kakao.send(room, json, "custom")
}

			if(msg.indexOf("/it ")==0){
				try{
				msg=msg.replace("/it ","");
				Itsearch(room)
				}catch(e){
					replier.reply("요청하신 제품이 존재하지 않거나 오류가 발생하였습니다.")
					}
				}
		
		function Maple(room){
			userimg= Utils.getWebText("https://maple.gg/u/"+msg).split("https://avatar.maplestory.nexon.com/Character/")[1].split("\"")[0]
userimg= "https://avatar.maplestory.nexon.com/Character/"+userimg;
mapleuser= Utils.getWebText("https://maple.gg/u/"+msg).replace(/<[^>]+>/g,"");

maplelv=mapleuser.split("Lv.")[1].split("\n")[0];
//레벨
mapleluv=mapleuser.split("인기도 ")[1].split("\n")[0];
//인기도
maplejob=mapleuser.split("Lv."+maplelv)[1].split("인기도")[0].replace(/ /g,"").replace(/\n/g,"");
//직업
userinform="Lv: "+maplelv+"\n인기도: "+mapleluv+"\n직업: "+maplejob;
//정보 정리
json = {"link_ver":"4.0","template_id":22455,"template_args":{des:userinform,title:"",pfimg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDdfMjMz%2FMDAxNTQxNTk5MTQxOTIx.j9Qo3cynLj6FLgFQ5fc1CYZ6S5TyyJ321WlO6k887o0g.PtXFON2_BNjTY3LNAoF5raGYrHty50F-AFd7o3d3yF8g.JPEG.jjy9710%2FexternalFile.jpg&type=sc960_832",image:userimg,profile:msg}}
return Kakao.send(room, json, "custom")
}

function Mapledetail(room){
			userimg= Utils.getWebText("https://maple.gg/u/"+msg).split("https://avatar.maplestory.nexon.com/Character/")[1].split("\"")[0]
userimg= "https://avatar.maplestory.nexon.com/Character/"+userimg;
mapleuser= Utils.getWebText("https://maple.gg/u/"+msg).replace(/<[^>]+>/g,"");

maplelv=mapleuser.split("Lv.")[1].split("\n")[0];
//레벨
mapleluv=mapleuser.split("인기도 ")[1].split("\n")[0];
//인기도
maplejob=mapleuser.split("Lv."+maplelv)[1].split("인기도")[0].replace(/ /g,"").replace(/\n/g,"");
//직업
mapleunion= Utils.getWebText("https://maple.gg/u/"+msg);
mapleunion= mapleunion.split("<li class=\"character-card-additional-item\"> <b>유니온</b>")[1].split("</li>")[0].replace(/<[^>]+>/g,"");
//유니온
maplemul= Utils.getWebText("https://maple.gg/u/"+msg);
maplemul= maplemul.split("<li class=\"character-card-additional-item\"> <b>무릉도장</b>")[1].split("</li>")[0].replace(/<[^>]+>/g,"");
//무릉도장

json = {"link_ver":"4.0","template_id":21294,"template_args":{hdimg:"http://video.phinf.naver.net/20190401_11/1554115928412ouUMu_JPEG/3026a263-546c-11e9-87e6-28b4484d5a8e_06.jpg",header:msg+"님의 정보",title1:"레벨",des1:maplelv,title2:"인기도",des2:mapleluv,title3:"직업",des3:maplejob,title4:"유니온",des4:mapleunion,title5:"무릉도장",des5:maplemul}}
return Kakao.send(room, json, "custom")
}

if(msg.indexOf("/메이플세부 ")==0){
	try{
	msg= msg.replace("/메이플세부 ","");
	Mapledetail(room);
	}catch(e){
		replier.reply("보들",e)
		replier.reply("검색된 유저가 없거나 오류가 발생하였습니다.")
		}
		}
		

if(msg.indexOf("/메이플 ")==0){
	try{
	msg=msg.replace("/메이플 ","");
	Maple(room)
	}catch(e){
		replier.reply("검색된 유저가 없거나 오류가 발생하였습니다.")
		}
		}
					
		
					function Terraria(room){
				answer= terraquiz[Math.floor(Math.random()* terraquiz.length)];
				quiz=DG("테라리아퀴즈").split("답:"+answer+"\r\n")[1].split("문제:")[1].split("\n")[0];
				imglink=DG("테라리아퀴즈").split("답:"+answer+"\r\n")[1].split("사진:")[1].split("\n")[0];
				terraanswer=answer;
json = {"link_ver":"4.0","template_id":22455,"template_args":{des:quiz,title:"",pfimg:"https://dbscthumb-phinf.pstatic.net/0727_000_17/20190829091826887_13QAMMRZL.jpg/8C559CB690338B93.jpg?type=m120_120",image:imglink,profile:"테라리아퀴즈"}}
return Kakao.send(room, json, "custom")
}


function Trscore(room){
	json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"테라리아퀴즈 점수판",hdimg:"https://w.namu.la/s/c41cb5624f32764dee5abd8c305e56bac468e95f9ad478cd28aaa55a76ae937b545d90e5e408449faa7c032ac81bc8106544e1e181154ea79b4b8b8db4226690f76c0b49cd898760e4eebb2e3b2cd4f840c3b4a3435f2b0b167b2197d405c4ef",title1:trname,des1:"",title2:"점수: "+terrascore[trname],des2:"",title3:"",des3:"",title4:"",des:"",title5:"",des5:"",img1:"",img2:"",img3:"",img4:"",img5:""}}
return Kakao.send(room, json, "custom")
}

if(msg.indexOf("/점수 ")==0&&room=="테라리아"){
	
	trname=msg.replace("/점수 ","");
	if(terrascore[trname]!=undefined){
		nmscore=terrascore[trname];
		Trscore(room);
		}
		if(terrascore[trname]==undefined){
			replier.reply("검색된 정보가 없습니다.")
		}
		}
		if(msg.indexOf("/점수추가 ")==0&&DG("관리자").indexOf(profile)!=-1){
			msg= msg.replace("/점수추가 ","");
			trname = msg.split(":")[0];
			addscore = msg.split(":")[1];
			if(terrascore[trname]!=undefined){
				terrascore[trname]= Number(terrascore[trname])+Number(addscore);
				nmscore = terrascore[trname];
				Trscore(room)
		}
		if(terrascore[trname]==undefined){
			terrascore[trname]=addscore;
			Trscore(room);
		}
}
if(msg.indexOf("/점수제거 ")==0&&DG("관리자").indexOf(profile)!=-1){
			msg= msg.replace("/점수제거 ","");
			trname = msg.split(":")[0];
			addscore = msg.split(":")[1];
			if(terrascore[trname]!=undefined){
				terrascore[trname]= Number(terrascore[trname])-Number(addscore);
				nmscore = terrascore[trname];
				Trscore(room)
		}
		if(terrascore[trname]==undefined){
			terrascore[trname]=addscore;
			Trscore(room);
		}
		}
		if(msg=="/점수판"&&room=="테라리아"){
			try{
			a= terrascore.toSource().replace(/[({")}]/g,"").replace(/,/g,"\n");
			replier.reply(a)
			}catch(e){
				replier.reply("점수판이 생성되지 않았습니다.")
				}
}


if(msg=="/퀴즈 수"&&DG("관리자").indexOf(profile)!=-1){
	a=DG("테라리아퀴즈").match(/답:[^\n]+/g).toString();
a= a.replace(/답:/g,"").replace(/\r/g,"").split(",").length
replier.reply(a+"개")
}
			if(msg=="/퀴즈"&&DG("관리자").indexOf(profile)!=-1){
				try{
				Terraria(room)
				}catch(e){
					replier.reply("저장된 퀴즈를 다 소모하였습니다.")
					}
				}
				if(msg.indexOf("ㅌ")==0){
					msg= msg.replace("ㅌ","");
					if(msg==answer){
					replier.reply("[알림] "+sender+"정답!")
					terraquiz.splice(terraquiz.indexOf(answer),1);
					answer = "sksidkdnsmwmdjfks";
					
					}
					}
					if(msg.indexOf("/문제추가")==0&&DG("프로필").indexOf(profile)!=-1){
						msg=msg.replace("/문제추가 ","");
						addanswer=msg.split("-")[0];
						addquiz=msg.split("-")[1];
						addlink=msg.split("-")[2];
						DS("테라리아퀴즈",DG("테라리아퀴즈")+"답:"+addanswer+"\n문제:"+addquiz+"\n사진:"+addlink+"\n\n")
						terraquiz.push(addanswer);
						replier.reply("답:"+addanswer+"\n문제:"+addquiz+"\n사진:"+addlink)
						replier.reply("완료.")
						}
						
				if(msg=="/퀴즈 불러오기"&&DG("관리자").indexOf(profile)!=-1){
					for(i=0;i<DG("테라리아퀴즈").match(/답:[^\n]+/g).toString().replace(/답:/g,"").replace(/\r/g,"").split(",").length;i++){
						terraquiz.push(DG("테라리아퀴즈").match(/답:[^\n]+/g).toString().replace(/답:/g,"").replace(/\r/g,"").split(",")[i]);
						}
						replier.reply("완료!")
						}
						if(msg=="/퀴즈 초기화"&&DG("관리자").indexOf(profile)!=-1){
							replier.reply("배열초기화중..")
							terraquiz =[];
							replier.reply("반복문돌리는중..")
					for(i=0;i<DG("테라리아퀴즈").match(/답:[^\n]+/g).toString().replace(/답:/g,"").replace(/\r/g,"").split(",").length;i++){
						terraquiz.push(DG("테라리아퀴즈").match(/답:[^\n]+/g).toString().replace(/답:/g,"").replace(/\r/g,"").split(",")[i]);
						}
						replier.reply("완료!")
						}
								
		function Nochat(room){
json = {"link_ver":"4.0","template_id":21399,"template_args":{desc1:sender,desc2:msg}}
return Kakao.send(room, json, "custom")
}
if(nolist.indexOf(msg)!=-1){
	
	if(room=="테라리아"||room=="ktc"){
	Nochat(room)
	replier.reply("테라리아채팅방 관리자","관리자님들! 금지어가 감지되어 알려드리러왔어요!")
	Nochat("테라리아채팅방 관리자")
	}
		}
		function Wordgame(room){
	json = {"link_ver":"4.0","template_id":22704,"template_args":{title:word1,des:"",image:"http://blogfiles.naver.net/20120804_254/mvodemc_13440588479621OauO_JPEG/%C7%D1%C4%C4%C5%B8%C0%DA%BF%AC%BD%C0.jpg"}}
return Kakao.send(room, json, "custom")
}
function Wordscore(room){
	json = {"link_ver":"4.0","template_id":21294,"template_args":{header:"타자게임",hdimg:"http://blogfiles.naver.net/20120804_254/mvodemc_13440588479621OauO_JPEG/%C7%D1%C4%C4%C5%B8%C0%DA%BF%AC%BD%C0.jpg",title1:wdname,des1:"",title2:"점수: "+wdscore,des2:"",title3:"",des3:"",title4:"",des:"",title5:"",des5:"",img1:"",img2:"",img3:"",img4:"",img5:""}}
return Kakao.send(room, json, "custom")
}
		if(msg=="/타자게임"){
			if(wordgame[room]==undefined){
			wordgame[room]= read(sdcard+"/katalkbot/타자게임/타자게임목록.txt").split("\n")[Math.floor(Math.random()*read(sdcard+"/katalkbot/타자게임/타자게임목록.txt").split("\n").length)];
			word1="타자 게임을 시작합니다(엔터X)";
			Wordgame(room);
			replier.reply("͏"+wordgame[room].replace(/ /g,"͏ ")+"͏")
			}
			else if(wordgame[room]!=undefined){
				replier.reply("이미 진행중입니다.")
				}
				}
				
			if(msg==wordgame[room]&&wordgame[room]!=undefined){
				wdpath=sdcard+"/katalkbot/타자게임/타자게임점수.txt";
				if(read(wdpath).indexOf(sender+":")!=-1){
					addwdscore=Number(read(wdpath).split(sender+":")[1].split("\n")[0])+Number(3.5);
				save(wdpath,read(wdpath).replace(sender+":"+read(wdpath).split(sender+":")[1].split("\n")[0],sender+":"+addwdscore));
				}
				if(read(wdpath).indexOf(sender+":")==-1){
					save(wdpath,read(wdpath)+sender+":1.7\n");
					}
					replier.reply(sender+"님이 가장 빨리 입력하셨습니다 게임이 종료됩니다.")
					wdname=sender;
					wdscore= read(wdpath).split(sender+":")[1].split("\n")[0];
					//Wordscore(room)
					wordgame[room]=undefined;
					}
					
		
		function Weather(room){
	try {
	msg=msg.replace("/날씨 ","");
data = Utils.getWebText("https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query="+msg+"날씨").replace(/(<([^>]+)>)/g, "").split("월간")[1].split("시간")[0].trim().replace(/^ +/gm,"").replace (/\n\n/g,"");
tp = data.split("현재온도")[1].split("\n")[0];
wt=data.split("\n")[0];
wat=data.split("습도 ")[1].split("\n")[0];
sn= data.split("자외선 ")[1].split("\n")[0].replace(/[0-9]/,"");
json = {"link_ver":"4.0","template_id":21310,"template_args":{temp:tp,weather:wt,water:wat,sun:sn}}
}catch(e){
json = {"link_ver":"4.0","template_id":21311,"template_args":{errortitle:"오류가 발생하였습니다.",errordesc:"해당 지역의 날씨가 검색되지 않았습니다.\n남한의 범위인지 다시 확인해주세요."}}
}
return Kakao.send(room, json, "custom")
}
			//eval(Utils.parse("http://weatherkorea.kro.kr").select("script").dataNodes().get(0).toString())
							
							/*
			if(msg.indexOf("/날씨 ") !=-1)
{
	Weather(room)
	}
	*/
	
	
        function Status(room){
        	    var fill = ["알수없음", "충전중", "충전중 아님", "충전완료 후 충전중 아님", "충전 완료"];
                var heal = ["알수없음", "좋음", "과열", "불량", "과전압", "불특정 실패", "저온"];
                var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
                var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
                var battery = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_STATUS, -1);
                var voltage = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_VOLTAGE, -1);
                var health = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_HEALTH, -1);
                var level = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                var scale = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                var am = Api.getContext().getSystemService(Api.getContext().ACTIVITY_SERVICE);
                var mem = new android.app.ActivityManager.MemoryInfo();
                am.getMemoryInfo(mem);
                var temp = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_TEMPERATURE, -1);
                var ms1 = java.lang.System.currentTimeMillis();
                
json = {"link_ver":"4.0","template_id":21290,"template_args":{image:"",charge:fill[battery - 1],temp:Math.round(temp) / 10 + "°C",ram:(mem.availMem / mem.totalMem * 100).toFixed(2) + "% 남음",battary:Math.round(level / scale * 100) + "%",mv:voltage + "mv"}}
return Kakao.send(room, json, "custom")
}
if(msg =="/정보"){
	Status(room)
	}
							
		function Song(room){
			try {
                var u = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + encodeURI(msg.substr(4)));
                u = u.replace(/   /g, "");
                u = u.replace(/<br>/g, "");
                u = u.replace(/<mark>/g, "");
                u = u.replace(/<\/mark>/g, "");
                var a = u.split("<div class=\"lyrics_txt\">");
                var b = u.split("<strong class=\"tit\">");
                var c = u.split("<span class=\"name\">");
                json = {"link_ver":"4.0","template_id":21282,"template_args":{songname:"제목: "+c[1].split("<")[0]+"가수: "+c[2].split("<")[0],songlyrics:a[1].split("<")[0]}}
            } catch (e) {
                json = {"link_ver":"4.0","template_id":21282,"template_args":{songname:"노래 가사를 찾지 못하였습니다.",songlyrics:""}}
}
return Kakao.send(room, json, "custom")
}


if (msg.indexOf("/가사") == 0) {
	Song(room)
	}


function corona(room){
	corona =Utils.getWebText("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98").replace(/<[^>]+>/g,"").split("       코로나바이러스감염증-19 \n       COVID-19")[1];
corotrue = corona.split("확진환자 ")[1].split(" ")[0]

corodie = corona.split("사망자 ")[1].split(" ")[0];

corocheck = corona.split("검사진행 ")[1].split(" ")[0];

corofalse= corona.split("격리해제 ")[1].split(" ")[0];
json = {"link_ver":"4.0","template_id":21279,"template_args":{description1:corotrue,description2:corocheck,description3:corofalse,description4:corodie}}
return Kakao.send(room, json, "custom")
}
if(msg =="/코로나"){
corona(room);

}

function Test(room){
json = {"link_ver":"4.0","template_id":21242,"template_args":{header:"코로나 발생 현황 COVID-19",title1:"확진환자",title2:"사망자",title3:"완치"}}
return Kakao.send(room, json, "custom")
}
if(msg =="/테스트"){
	Test(room)
	}


if(msg.indexOf("/롤 ")==0){
	try{
	msg = msg.replace("/롤 ",""); 
	updateft = ["분","초","일"];
	//갱신시간 필터링
	
	Utils.getWebText("https://poro.gg/ko/s/KR/"+msg+"/sync");
	



Utils.getWebText("https://poro.gg/ko/s/KR/"+msg+"/sync");
java.lang.Thread.sleep(3000);
Utils.getWebText("https://poro.gg/ko/s/KR/"+msg+"/sync");
loluser = Utils.getWebText("https://poro.gg/ko/s/KR/"+msg).replace(/<[^>]+>/g,"");
//사이트파싱 준비

updatesplit = loluser.split("전적 갱신:")[1].split("전")[0].replace(/[0-9]/g,"").replace(/ /g,"")
if(updateft.indexOf(updatesplit)!=-1){

	


loldf = loluser.split("일반")[1].split("칼바람")[0].replace(/ {2,}/g,"").replace(/\n{2,}/g,"")
//일반게임

lolurf = loluser.replace(/ {2,}/g,"").replace(/\n{2,}/g,"").split("임 우르프")[1].split("S")[0]
//우르프

lolall = loluser.split("이벤트")[1].split("챔피언")[0].replace(/ {2,}/g,"").replace(/\n{3,}/g,"").replace(/%/g,"%\n\n");
//전체정보

lolupdating = loluser.split("전적 갱신:")[1].split("\n")[0];
//전적갱신 시간

lolsolo = loluser.split("솔로랭크")[1].split("자유랭크")[0].replace(/ {2,}/g,"").replace(/\n{3,}/g,"")
//솔랭정보

lolparty = loluser.split("자유랭크 5x5")[1].split("칼바람")[0].replace(/ {2,}/g,"").replace(/\n{3,}/g,"")
//자랭정보

replier.reply(msg+"님의 롤전적을 불러왔습니다! 전체보기를 눌러주세요."+String.fromCharCode(8237).repeat(501)+"\n\n\n전적갱신시간: "+lolupdating+"\n\n\n-솔로랭크-\n"+lolsolo+"\n\n\n-자유랭크-\n"+lolparty+"\n\n\n"+lolall+"\n-일반-\n"+loldf+"\n\n\n-우르프-\n"+lolurf)
}else{
		replier.reply("전적갱신이 너무 오래전에 진행되어 봇이 자동으로 갱신을 진행합니다 몇초 후에 다시 검색해주세요.")
	}
}catch(e){
	replier.reply("갱신한지 너무 오래 되었거나 유저를 찾을 수 없습니다 검색을 다시 시도해주세요.")
	
	}
	
	
}
/*
similarcheck = true;
countmax =0;
recommand = "";
if(room =="보들"){
if(similarcheck ==true){
for(var t = 0; t<command.length-1; t++){
for(var i = 0; i<bly(msg.split(" ")[0]).replace(/ /g,"").length; i++){
	rcmd = Bodelword(command[t],msg.split(" ")[0]);
if(rcmd>=countmax){
	countmax = Bodelword(command[t],msg.split(" ")[0]);
	recommand = command[t];
	}
	}
	}
	if(countmax >=85&&countmax<100){
		if(msg.split(" ")[1] ==undefined){
		msg = recommand;
		}
		if(msg.split(" ")[1] != undefined){
			msg = recommand +" "+ msg.split(" ")[1];
			}
			}
			}
			}
*/


function graph(len,value,max) {
    var pe = ["█","▉","▊","▋","▌","▍","▎","▏",""];
    var a = (value / max) * len;
    var b = pe[0].repeat(Math.floor(a)) + pe[Math.floor(8 - (a % 1) * 8)];
    return b + " ".repeat(Math.round((len - a) * 2.8));
}

if(msg.indexOf("/그래프 ")==0){
	msg = msg.replace("/그래프 ","");
	len = msg.split(":")[0];
	value = msg.split(":")[1];
	max = msg.split(":")[2];
	name = msg.split(":")[3];
	replier.reply(name+":"+graph(len,value,max))
	}


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127

/**

*

*  Secure Hash Algorithm (SHA256)

*  http://www.webtoolkit.info/

*

*  Original code by Angel Marin, Paul Johnston.

*

**/

 


function SHA256(s){

 


    var chrsz   = 8;


    var hexcase = 0;

 


    function safe_add (x, y) {


        var lsw = (x & 0xFFFF) + (y & 0xFFFF);


        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);


        return (msw << 16) | (lsw & 0xFFFF);


    }

 


    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }


    function R (X, n) { return ( X >>> n ); }


    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }


    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }


    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }


    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }


    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }


    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

 


    function core_sha256 (m, l) {


        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);


        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);


        var W = new Array(64);


        var a, b, c, d, e, f, g, h, i, j;


        var T1, T2;

 


        m[l >> 5] |= 0x80 << (24 - l % 32);


        m[((l + 64 >> 9) << 4) + 15] = l;

 


        for ( var i = 0; i<m.length; i+=16 ) {


            a = HASH[0];


            b = HASH[1];


            c = HASH[2];


            d = HASH[3];


            e = HASH[4];


            f = HASH[5];


            g = HASH[6];


            h = HASH[7];

 


            for ( var j = 0; j<64; j++) {


                if (j < 16) W[j] = m[j + i];


                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

 


                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);


                T2 = safe_add(Sigma0256(a), Maj(a, b, c));

 


                h = g;


                g = f;


                f = e;


                e = safe_add(d, T1);


                d = c;


                c = b;


                b = a;


                a = safe_add(T1, T2);


            }

 


            HASH[0] = safe_add(a, HASH[0]);


            HASH[1] = safe_add(b, HASH[1]);


            HASH[2] = safe_add(c, HASH[2]);


            HASH[3] = safe_add(d, HASH[3]);


            HASH[4] = safe_add(e, HASH[4]);


            HASH[5] = safe_add(f, HASH[5]);


            HASH[6] = safe_add(g, HASH[6]);


            HASH[7] = safe_add(h, HASH[7]);


        }


        return HASH;


    }

 


    function str2binb (str) {


        var bin = Array();


        var mask = (1 << chrsz) - 1;


        for(var i = 0; i < str.length * chrsz; i += chrsz) {


            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);


        }


        return bin;


    }

 


    function Utf8Encode(string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";

 


        for (var n = 0; n < string.length; n++) {

 


            var c = string.charCodeAt(n);

 


            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }

 


        }

 


        return utftext;


    }

 


    function binb2hex (binarray) {


        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";


        var str = "";


        for(var i = 0; i < binarray.length * 4; i++) {


            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +


            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);


        }


        return str;


    }

 


    s = Utf8Encode(s);


    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));

 

}

if(msg.indexOf("/sha암호화")==0){
	replier.reply(SHA256(msg.substr(8)))
	}

function getDigNum(str, randomize) {
    if (randomize == undefined) {
        randomize = false;
    }
    str = str.toString();
    var arr = str.split("");
    var res = "";
    var chr = "░";
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (randomize) {
                var r = Math.floor(Math.random() * 2);
                if (r == 1) {
                    chr = "▓";
                } else {
                    chr = "░";
                }
            }
            res += getDigNum[Number(arr[j])][i].replace(/░/g, chr) + " ";
        }
        res += "\n";
    }
    return res.trim();
}



    if(msg.indexOf("/학습대답방 ")==0&&DG("프로필").indexOf(profile)!=-1){
    	DS("학습대답방",DG("학습대답방")+msg.substr(7)+"\n")
replier.reply("봇의 자동대화 가능방이 추가되었습니다.")
}
if (msg =="/대답방초기화"&&DG ("프로필").indexOf(profile)!=-1){
	DS ("학습대답방","");
	replier.reply ("완료.")
	}

if(dcgo == true && room == dcgr)
{
Chat(dcg)
}
if(room=="화이트 해커")return;



function Moonstay(room){
json = {"link_ver":"4.0","template_id":21313,"template_args":{desc1:"문의자: "+sender+"\n내용: "+my,desc2:"(답변대기중)"}}
return Kakao.send(room, json, "custom")
}
function Moonyee(room){
json = {"link_ver":"4.0","template_id":21313,"template_args":{desc1:"문의자: "+moonyee[myuser]+"\n문의내용: "+moonyee[myuser].문의내용,desc2:"답변자: "+sender+"\n내용: "+mysay}}
return Kakao.send(room, json, "custom")
}

if(msg.indexOf("/문의")==0){
	if(room !="테라리아"){
var my = msg.substr(4);
//문의내용
moonyee[sender] = {문의내용:my,문의방:room,문의자:sender};
Moonstay("보들");
replier.reply("관리자의 방으로 문의내용을 전송했습니다 답변을 기다려주세요.")
myroom= moonyee[sender].문의방;
//문의방
}else if(room =="테라리아"){
	var my = msg.substr(4);
//문의내용
moonyee[sender] = {문의내용:my,문의방:room,문의자:sender};
Moonstay("테라리아채팅방 관리자");
replier.reply("관리자의 방으로 문의내용을 전송했습니다 답변을 기다려주세요.")
myroom= moonyee[sender].문의방;
}
}

function Sayerror(room){
json = {"link_ver":"4.0","template_id":21311,"template_args":{errortitle:"문의기능 오류발생.",errordesc:"답변도중 오류가 발생하였습니다\n양식에 맞게 입력하였는지\n확인해주시기 바랍니다."}}
return Kakao.send(room, json, "custom")
}


try {
if(msg.indexOf("/답변")==0&&DG ("관리자").indexOf (profile)!=-1) {
var msg = msg.substr(4);
var msg2 = msg.split(":");
var myuser = msg2[0];
//문의자
var mysay = msg2[1];
//답변내용
myroom = moonyee[myuser].문의방;
replier.reply("답변을 성공적으로 전송했습니다!")
Moonyee(myroom);
} 
}catch(e){
   Sayerror(room)
   }
   



if(msg.indexOf("/학습차단")==0 && DG("관리자").indexOf(profile)!=-1){
	DS("notsturoom",DG("notsturoom")+msg.substr(6)+",");
	replier.reply(msg.substr(6)+"에서는 더이상 학습되지 않습니다!")
	}
	if(msg.indexOf("/대화차단")==0 && DG("관리자").indexOf(profile)!=-1){
	DS("notsayroom",DG("notsayroom")+msg.substr(6)+",");
	replier.reply(msg.substr(6)+"에서는 더이상 자동대화를 하지 않습니다!")
	}
	
if(DG("notsturoom").indexOf(room+",")==-1){
	
if(study == true){
if(Math.floor(Math.random()* stud)==0 && DG("학습").substr(DG("학습").length-2)!="->"&& DG("학습").indexOf("\n"+msg+"->")==-1){
DS("학습",DG("학습")+"\n"+msg+"->");
}
if(Math.floor(Math.random()* stud)==0 && DG("학습").substr(DG("학습").length-2)!="->"&& DG("학습").indexOf("\n"+msg+"->")!=-1){
	stumany = true;
	}
}
if (study==true) {
if (DG("학습").substr(DG("학습").length-2)=="->"&&msg.indexOf("\n")==-1 && DG("학습").split("\n").map(x=>x.split("->")[0]).indexOf(msg)==-1){
DS("학습",DG("학습")+'["'+msg+'"]');
}
if(stumany == true){
	stusplit = DG("학습").split("\n"+msg+"->")[1].split("\n")[0];
	if(stusplit.indexOf(msg)==-1){
	stureplace1 = stusplit.replace(']',',"'+msg+'"]');
	DS("학습",DG("학습").replace(DG("학습").split("\n"+msg+"->")[1].split("\n")[0],""));
	DS("학습",DG("학습").replace("\n"+msg+"->",""));
	sturesult = "\n"+msg+"->"+stureplace1;
	DS("학습",DG("학습")+sturesult);
	stumany = false;
	}
	}
}
}
if(DG("notsayroom").indexOf(room+",")==-1){
if(study == true && DG("학습").indexOf(msg)!=-1){
if(Math.floor(Math.random()* stusay)==0){
	if(DG("학습").split("\n").map(x=>x.split("->")[0]).indexOf(msg)!=-1){
s = DG("학습").split("\n"+msg+"->")[1].split("\n")[0];
if(s != undefined){
	try{
	eval("stuarray="+s);
	}catch(e){
		d =0;
		if(d == 1){
			replier.reply("ㅎㅇ")
			}
		}
	i = Math.floor(Math.random()* stuarray.length);
replier.reply("[System] 자동대화\n"+stuarray[i])
}
}
}
}
}
if(msg =="/학습 온" && DG("관리자").indexOf(profile)!=-1){
study = true;
replier.reply("학습모드를 켰습니다.")
}
if(msg =="/학습 오프" && DG("관리자").indexOf(profile)!=-1){
study = false;
replier.reply("학습모드를 껐습니다.")
}
if(msg == "/31게임 참가" && power31 == false&&player31.indexOf(sender)==-1) {
	player31.push(sender);
	replier.reply(sender+" 님께서 31게임에 참가하였습니다!\n■인원\n"+player31.join(","))
	}
	if(msg == "/31게임 시작" && power31 == false){
power31 = true;
replier.reply("31게임이 시작되었습니다 원래 숫자에서 최대 3까지만 증가시킬수 있습니다.\n■순서\n"+player31.join(">"))
replier.reply("예시: /1")
}
if(power31 == true){
	if(msg =="/1" && sender == player31[0]){
player31.shift();
player31.push(sender);
nm31 = Number(nm31) + Number(1);
replier.reply(sender+" 님이 1을 외쳤습니다!\n현재수: "+nm31+"\n현재순서: "+player31.join(">"))
if(nm31 >= 31){
		power31 = false;
		nm31 = 0;
		player31 = [];
		replier.reply("숫자가 31을 초과하였습니다! 게임이 종료됩니다.")
		}
}
if(msg =="/2" && sender == player31[0]){
player31.shift();
player31.push(sender);
nm31 = Number(nm31) + Number(2);
replier.reply(sender+" 님이 2을 외쳤습니다!\n현재수: "+nm31+"\n현재순서: "+player31.join(">"))
if(nm31 >= 31){
		power31 = false;
		nm31 = 0;
		player31 = [];
		replier.reply("숫자가 31을 초과하였습니다! 게임이 종료됩니다.")
		}
}
if(msg =="/3" && sender == player31[0]){
player31.shift();
player31.push(sender);
nm31 = Number(nm31) + Number(3);
replier.reply(sender+" 님이 3을 외쳤습니다!\n현재수: "+nm31+"\n현재순서: "+player31.join(">"))
if(nm31 >= 31){
		power31 = false;
		nm31 = 0;
		player31 = [];
		replier.reply("숫자가 31을 초과하였습니다! 게임이 종료됩니다.")
		}
}
}
if(msg == "/실시간검사 온"){
	if(profile != DG("프로필")){
		replier.reply("관리자가 아닙니다.")
		}
		if(profile == DG("프로필")){
			sercurity = true;
			replier.reply("[System] '실시간검사' 기능이 켜졌습니다.\n실시간으로 봇에서 생긴 오류를 감지하여 자동 리로드 또는, 자동 전원오프합니다.")
			}
			}
if(msg == "/실시간검사 오프"){
	if(profile != DG("프로필")){
		replier.reply("관리자가 아닙니다.")
		}
		if(profile == DG("프로필")){
			sercurity = false;
			replier.reply("[System] '실시간검사' 기능이 꺼졌습니다.\n이제 오류가 발생하여도 봇이 스스로 대처하지 못합니다.")
			}
			}
if(msg.indexOf("/전체공지")==0 && DG("프로필") != profile){
	replier.reply("관리자가 아닙니다.")
	}
if(msg.indexOf("/전체공지")==0 && DG("관리자").indexOf(profile)!=-1){
   var allcount = allroom.length;
   var i = 0;
   while(i < allcount+1){
   	replier.reply(allroom[i],"[System] 관리자("+sender+")가 모든 방에 보낸 공지입니다.("+allroom.length+" 개의 방에 성공적으로 보냄.)\n\n========[공지]========\n"+msg.substr(6))
   	i++;
   }
   }
   


if (msg.indexOf("/시간체크 ") == 0 && timecheck == false) {
        msg = msg.replace("/시간체크 ", "");
        chhour = msg.split("/")[0];
        chmin = msg.split("/")[1];
        timecheck = true;
        timecheckroom = room;
        replier.reply("시간체크를 시작합니다.")
    }
    if (timecheck == true && Date().slice(16, 18) == chhour && Date().slice(19, 21) >= chmin && room == timecheckroom && sender != "부ㅏ아다ㅏㅡ다ㅏㅇㅇㅇ애ㅐ") {
        timecheck = false;
        chhour = "";
        chmin = "";
        timecheckroom = room;
        replier.reply(timecheckroom,"시간체크로 설정한 시간이 되었습니다!")
    }

		/*
		
		if(msg == "/도박참가"&& DG("유저").indexOf(sender)!=-1 && profile == ruser[sender].프로필){
if(rczn == true){
replier.reply("이미 도박게임이 진행중입니다")
}
if(rcznplayer.indexOf(sender)!=-1){
replier.reply("당신은 이미 참여하였습니다.")
}
if(rcznplayer.indexOf(sender)==-1){
if(rczn == false){
if(rcznplayer == undefined){
rcznmanager = sender;
rcznplayer.push(sender);
replier.reply(sender+"님이 도박게임 방장이 되었습니다\n다른 유저들이 참가한 후에 /도박시작 을 입력하여 진행해주세요.")
}
if(rcznplayer != undefined){
rcznplayer.push(sender);
replier.reply(sender+"님이 도박게임에 참가하였습니다.")
}
}
}
if(rczn == false){
	if(msg == "/베팅시작" && rcznmanager == sender && rcznbtpower == false){
		rcznbtpower = true;
		replier.reply("베팅을 시작합니다 도박을 참가하신 분들은 /베팅 (금액) 명령어로 베팅해주세요.")
		repliet.reply("베팅 예시: /베팅 10000")
		}
		if(rcznbtpower == true){
			if(rcznbt[sender] == undefined){
				if(msg.indexOf("/베팅")==0 && rcznplayer.indexOf(sender)!=-1){
					msg = msg.replace("/베팅 ",""),
rcznbt[sender] ={베팅금액:msg};
replier.reply(sender+" 님이 "+msg+"원을 베팅하였습니다.")
}
}

	if(msg.indexOf("/도박시작")==0){
	if(rcznmanager != sender){
		replier.reply("도박게임 방장님만 시작가능합니다 방장: "+rcznmanager)
}
if(rcznmanager == sender){
	rczngame = true;
	rcznbtpower = false;
replier.reply("시작할 도박게임을 번호로 골라주세요.\n\n1.업앤다운\n2.끝말잇기")
}
if(rczngame == true && rcznmanager == sender){
if(msg == "1"){
	replier.reply("
		}
		
		
		if(msg=="^끝말잇기 참가"&&kcznplay==false&&kcznplayer.indexOf(sender)==-1&&kcznroomset == 0) {
	kcznroom = room;
	kcznroomset = 1;
	ktime = true;
kcznplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다.\n현재 인원 : "+kcznplayer.join(","));
}
	if(msg=="^끝말잇기 참가"&&kcznplay==false&&kcznplayer.indexOf(sender)==-1&&room == kcznroom&&kcznroomset == 1) {
		kcznplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다.\n현재 인원 : "+kcznplayer.join(","));
for(var i = 0;i<180;i++){
	java.lang.Thread.sleep(1000);
	if(i == 180){
		kcznplay=false,kcznplayer=[],kcznroom=null,kcznroomset=0,kcznlist=[],kcznword=null,kcznuc={};
		replier.reply("끝말잇기가 대기된후 3분이 지나 끝말잇기가 초기화되었습니다.")
		}
		}
	}
	if(kcznroomset ==1 && msg == "^끝말잇기 참가" && kcznroom != room &&kcznplay == false){
		replier.reply("다른방에서 이미 하는중입니다!")
		}
if(msg=="^끝말잇기 시작"&&kcznplayer.length!=0&&kcznplay==false && kcznroom==room && kcznplayer.indexOf(sender)!=-1) {
kcznplay=true;
ktime = false;
send("[System] 끝말잇기를 시작합니다. 끝말잇기를 포기하시려면 ㅈㅈ를 입력해주세요.\n현재 차례인사람이 잠수라면 ^제거 를 입력해주세요\n플레이어 수는 "+kcznplayer.length+"명이고\n순서는 "+kcznplayer.join("→")+" 입니다.\n플레이 방법은 '<단어' 입니다.\n*표준국어대사전에있는 2글자이상의 명사만 가능합니다. 처음 한방, 한방유도는 금지며 어길시 차단되실수 있습니다.");
}
else if(msg=="^끝말잇기 참가"&&kcznplay==true&&kcznplayer.indexOf(sender)==-1)
{
replier.reply("[System] 이미 게임이 진행중입니다")
}

if(kcznplay == false){
	if(msg == "/끝말잇기 데이터불러오기" && profile == DG("프로필")){
		kcznplay = true;
		kcznword = DG("끝말잇기").split("끝말:")[1].split("\n")[0];
		kcznlist = DG("끝말잇기").split("사용한단어:")[1].split("\n")[0];
		kcznplayer.push(DG("끝말잇기").split("플레이어:")[1]);
		replier.reply("게임을 불러온후 게임이 시작되었습니다!\n끝말은 '"+kcznword+"'이며 순서는\n"+kcznplayer.join(">")+"입니다.")
		}
		}

if(kcznplay == true)
{
	if(msg =="/끝말잇기 데이터저장" && profile == DG("프로필")){
		DS("끝말잇기","끝말:"+kcznword+"\n사용한단어:"+kcznlist+"\n플레이어:"+kcznplayer)
		replier.reply("끝말잇기의 현재 데이터가 저장되었습니다.\n■내용\n\n"+DG("끝말잇기"))
		}
if(kcznplayer.indexOf(sender)!=-1)
{
if(msg.indexOf("^제거")==0)
{
var jamsu = msg.substr(6);
kcznword = [];
	kcznlist = [];
	turn = 1;
replier.reply("[System] 유저들의 요청으로 현재 차례인 "+kcznplayer[0]+" 님이 끝말잇기에서 탈락되었으며 탈락 로그가 봇주인님께 전송되었습니다 로그확인후 무필요한 탈락을 시키신 분은 불이익이 있습니다.\n\n단어가 초기화되었습니다 새 단어로 시작해주세요.")
kcznplayer.shift();
replier.reply("순서는\n"+kcznplayer.join(">") +"입니다.")
replier.reply("부들","[System] 잠수탈락명령어 사용이 감지되었습니다")
}
else if(kcznplayer.length<2 && kcznplay==true) {
 replier.reply(kcznroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kcznplayer+"님입니다!"); 
}
}
}


if(kcznplay==true) {
	
if(kcznplayer.length<2 && kcznplay==true) {
 replier.reply(kcznroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kcznplayer+"님입니다!"); kcznplay=false,kcznplayer=[],kcznroom=null,kcznroomset=0,kcznlist=[],kcznword=null,kcznuc={};
}
if(msg == "ㅈㅈ"&&sender==kcznplayer[0]) {
	kcznplayer.splice(kcznplayer.indexOf(sender),1);
	kcznword = [];
	kcznlist = [];
	turn = 1;
	replier.reply(sender+"님이 끝말잇기를 포기하셨습니다.\n"+kcznlist.join(","))
	replier.reply("단어가 초기화되었습니다\n현재 순서는\n"+kcznplayer.join(">")+" 입니다")
	}
	}
if(kcznplay==true) {
if(msg.indexOf("<")==0&&sender==kcznplayer[0]) {

msg=msg.replace("<","");

var texturl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

var testurl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg[msg.length-1])+"*"+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");
var textu=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)).split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

var testu=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg[msg.length-1])+"*").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

if(msg.match(/[^ㄱ-ㅎ|^ㅏ-ㅣ|^가-힣]/g)) {
send("한글만 가능합니다.");
return;
}
else if(msg.length==1) {
send("한글자는 안됩니다.");
return;
}
else if(kcznlist.indexOf(msg)!=-1) {
send("이미 사용한 단어입니다.");
return;
}
else if(kcznword !=null&&kcznword.indexOf(msg[0])==-1&&turn == 2) {
send("끝말이 맞지 않습니다.");
return;
}
else if(Number(texturl)) {
kcznplayer.shift();
turn = 2;
kcznplayer.push(sender);
send(sender+"님이 "+msg+"(이)라고 말하였습니다 \n다음차례는 "+kcznplayer[0]+"님이고\n순서는 "+kcznplayer.join("→")+"입니다");
kcznlist.push(msg);
kcznword = [];
kcznword.push(msg.substr(msg.length-1,1));
}
if(khb[msg.substr(msg.length-1,1)] != undefined){
	kcznword.push(khb[msg.substr(msg.length-1,1)]);
	}
else if(turn == 1 && !Number(textu)){
	replier.reply("첫턴 한방단어는 불가입니다.")
}
else if(!Number(texturl)) {
if(kcznuc[sender]==undefined) {
kcznuc[sender]=3;
}
else if(isNaN(kcznuc[sender])==true) {
kcznuc[sender]=3;
}
kcznuc[sender]--;
send("명사가 아니거나 없는단어 입니다!\n남은 횟수는 "+kcznuc[sender]+"/3 입니다.");

if(kcznuc[sender]==0) {
	kcznword = [];
	kcznlist = [];
	turn = 1;
kcznplayer.splice(kcznplayer.indexOf(sender),1);
send(sender+"님의 기회가 남지 않았습니다. " +sender+ "님이 탈락하였고 단어가 초기화되었습니다\n현재순서:"+kcznplayer.join("\n"));
}


}
}
}
		*/
		/*
		if(msg == "/루트연습참가"){
			if(rpower == true){
				replier.reply("이미 다른사람이 게임을 하고 있습니다.")
				}
				if(rpower == false){
					rplayer = sender;
					rpower = true;
					replier.reply("게임이 시작되었습니다 봇에 등록된 루트사전에 포함되있는 내용만 가능합니다 먼저 시작해주세요.\n예시:*기업")
					}
					if(msg.indexOf("*")==0&& sender == rplayer&&rpower == true&&turn = 0){
						msg = msg.replace("*","");
						if(rwt.indexOf(msg)==-1){
							replier.reply("봇에는 등록되있지 않은 루트단어입니다.")
							}
							if(rwt.indexOf(msg)!=-1){
								if(rlist.indexOf(msg)!=-1){
									replier.reply("이미 사용한 단어입니다.")
									}
									if(rwy.indexOf(msg)==-1){
								rwt=rwt.replace(msg,"");
								turn = 1;
								rword = [];
								rword.push(
								rlist.push(msg);
								replier.reply(rlist.join(" ")+"\n\n이을 단어: "+rword
								rword.push(msg.substr(msg.length-1,1));
								if(khb[msg.substr(msg.length-1,1)] !=undefined){
									rword.push(msg.substr(msg.length-1,1));
									}
									}
									if(rpower == true&&turn == 1){
										wordp = Math.floor(Math.random() * rwt.split("-"+match(/,/g).split(",").length);
										//봇이 루트에서 사용할 단어를 고름
										rword = [];
										rlist.push(.substr(1));
										rword.push(
turn = 0;
										
								*/
						
						
						
						if(msg.indexOf("/줄넘김소스화")==0){
							msg = msg.replace("/줄넘김소스화 ","");
							msg = msg.replace(/\n/g,"\\n");
							replier.reply(msg)
							}
						
if(msg.indexOf("/손난로")==0&& DG("프로필").indexOf(profile)!=-1){
	wm = true;
	wmcount = msg.substr(5);
	replier.reply("봇 주인님에 의해 휴대폰을 강제로 과열시키기 시작합니다.")
	}
	if(wm == true){
		for(;;){
			if(i==wmcount){
				replier.reply("for문 1차 중첩이 종료되었습니다.")
				}
		   for(;;){
			j=1;
			j++;
				if(j==wmcount){
				replier.reply("for문 2차 중첩이 종료되었습니다.")
				}
					}
					}
					}
					
					try{
					if(msg.indexOf("#루트")==0){
						msg = msg.substr(4);
						lt = DG("루트").split("-"+msg+"-\n")[1].split("\n\n")[0];
						replier.reply(lt)
						}
						}catch(e){
							replier.reply("해당 루트는 봇에 등록되어있지 않거나, 없는 루트입니다.")
							}
						
						if(msg.indexOf("..")!=-1&&DG("프로필").indexOf(profile)!=-1){
						msg = msg.split("..")[0];
						lt = DG("루트").split("-"+msg+"-\n")[1].split("\n\n")[0];
						Api.showToast(lt);
						}
						if(msg.indexOf(" 보여줘")!=-1&&DG("프로필").indexOf(profile)!=-1){
						msg = msg.split(" 보여줘")[0];
						lt = DG("루트").split("-"+msg+"-\n")[1].split("\n\n")[0];
						Api.showToast(lt);
						}
						
						if(msg.indexOf("/기록")==0 && DG("관리자").indexOf(profile)!=-1){
							msg = msg.replace("/기록 ","");
dcroom.push(msg);
DS("기록방",DG("기록방")+msg+",");
							if(read(sdcard+"/채팅기록/"+msg+".txt")==undefined){
								new java.io.File(sdcard+"/채팅기록/"+msg+".txt").createNewFile();
								}
							replier.reply("해당 방의 채팅기록을 모두 저장시킵니다.")
							}
							if(msg == "/기록온"&&DG("관리자").indexOf(profile)!=-1&&dcpower == false){
								dcpower = true;
								replier.reply("채팅 기록기능이 켜졌습니다.")
								}
								if(msg == "/기록오프"&&DG("관리자").indexOf(profile)!=-1&&dcpower == true){
								dcpower = false
								replier.reply("채팅 기록기능이 꺼졌습니다.")
								}
							if(dcpower == true&&DG("기록방").indexOf(room)!=-1){
								var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1);
            var date = dt.getDate();
            var hour = dt.getHours();
            var minutes = dt.getMinutes();
            var seconds = dt.getSeconds();
            var millisecs = dt.getMilliseconds();
            var day = dt.getDay();
            var week = new Array('일', '월', '화', '수', '목', '금', '토');
								save(sdcard+"/채팅기록/"+room+".txt",week[date]+"/"+ year + '년 ' + month + '월 ' + date + '일 ' +
                "(" + week[dt.getDay()] + ")\n" + hour + '시 ' + minutes + '분 ' + seconds + "." + millisecs + "초\n\n"+sender+":"+msg+"\n===================\n"+read(sdcard+"/채팅기록/"+room+".txt"));
								}
						
						if(msg.indexOf("~")!=-1&&DG("프로필").indexOf(profile)!=-1){
msg = msg.replace("~","*");
msg = msg.split(" ")[0];
var a=Utils.getWebText("http:\/\/stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg.trim()));
var b=a.split("<span class=\"tb12\">");
if(Number(b[1].split("<")[0].split("(")[1].split("건")[0])!=0)
{
	var result = Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)).split("<span id=\"print_area\">")[1].split("<!-- paging.jsp -->")[0].replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g,"\n");
Api.showToast(result);
}
else if(!Number(b)){
Api.showToast("검색결과가 없습니다.");
}
}
try{
if(msg.indexOf("/채팅")==0 && DG("관리자").indexOf(profile)!=-1){
	msg = msg.replace("/채팅 ","");
	if(DG("기록방").indexOf(msg)!=-1){
		replier.reply(msg+"(이)라는 방의 채팅기록을 가져옵니다.\n"+String.fromCharCode(8237).repeat(501)+"\n"+read(sdcard+"/채팅기록/"+msg+".txt"))
		}
}
}catch(e){
			replier.reply("기록이 되지 않은 방입니다.")
			}
			
			

if(msg.indexOf("/리폿")==0){
msg = msg.replace("/리폿 ","");
rp2 = sender;
	DS("오류제보",DG("오류제보")+"오류내용: "+msg+" 제보자: "+rp2+"\n\n");
	replier.reply("오류로그가 저장되었습니다.")
	replier.reply("부들","오류로그 하나가 추가되었습니다!")
	}
	if(msg =="/로그확인" &&DG ("관리자").indexOf (profile)!=-1){
		replier.reply("리폿 내용을 불러옵니다.\n"+DG("오류제보"))
		}
		if(msg =="/로그삭제" &&DG ("관리자").indexOf (profile)!=-1){
			DS("오류제보","");
		replier.reply("리폿 내용을 전부 삭제했습니다.")
		}
		if(msg == "/학사일정"){
			try{
			cal = Utils.getWebText("http://namju.jje.ms.kr/").replace(/(<([^>]+)>)/gi, "").split("이달의 우리학교 행사일정")[1].split("&nbsp")[3].split("팝업존")[0].replace(";","").trim();
			replier.reply("남주중학교 학사일정입니다 전체보기를 눌러주세요.\n"+String.fromCharCode(8237).repeat(501)+"\n"+cal)
			}catch(e){
				replier.reply("오류가 발생했습니다.\n"+e)
				}
				}




/*
  if (msg.indexOf("라고 하면") !=-1) {
   var data= msg.replace("라고 하면","");
   var data = data.replace("라고 해줘","");
    var data2 = data.split(" ")[0];
    var data4 = data.split(" ")[1];
    save(sdcard+"/learn/"+data2+".txt",data4);
    replier.reply("[System] "+data2+ "(이)라고 말하면, " + data4 + "(이)라고 대답할게요!");
  }
  var la = new java.io.File(sdcard+"/learn/"+msg+".txt");
  if(la.exists()) { 
    replier.reply("[System] 학습\n"+read(sdcard+"/learn/"+msg+".txt"))
  }
if(msg.indexOf("/삭제") !=-1){
new java.io.File(sdcard+"/learn/"+msg.substr(4)+".txt").delete();
 replier.reply("[System] 학습된 "+msg.substr(4)+" (이)가 삭제되었습니다.")
 }
 */
 

if(msg.indexOf("/게시글작성") ==0){
var a=msg.replace("/게시글작성 ","");
mg1 = a.split("/")[0];
mg2 = a.split("/")[1];
save(sdcard+"/게시글/"+mg1+".txt",mg2);
replier.reply("[System] \n제목: "+mg1+"\n내용: "+mg2+"로 게시글이 작성되었습니다.")
}
if(msg.indexOf("/게시글보기") ==0 && read(sdcard+"/게시글/"+msg.substr(7)+".txt") != null){
replier.reply("[System] 게시글을 불러옵니다.\n"+read(sdcard+"/게시글/"+msg.substr(7)+".txt"))
}
else if(msg.indexOf("/게시글보기") ==0 &&read(sdcard+"/게시글/"+msg.substr(7)+".txt") == null){
replier.reply("[System] 해당 게시글이 존재하지 않습니다.")
}
if(msg == "/게시글목록")
{ 
replier.reply("[System] 모든 게시글의 제목을 불러옵니다.\n ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏  ͏\n"+java.io.File(sdcard+"/게시글/").list().join("\n"))
}
if(msg.indexOf("게시글 지워줘")!=-1 && DG("관리자").indexOf(profile)!=-1 && gremove == false)
{
var write = new java.io.File(sdcard+"/게시글/"+msg+".txt");
gremove = true;
replier.reply("[System] 관리자님! 뭘 지워드릴까요?")
}
var write = new java.io.File(sdcard+"/게시글/"+msg+".txt");
if(gremove == true && DG("관리자").indexOf(profile)!=-1)
{
if(write.exists())
{
grv = msg;
replier.reply("[System] "+msg+" (이)요?")
}
}
if(msg == "응" && DG("관리자").indexOf(profile)!=-1 && gremove == true)
{
new java.io.File(sdcard+"/게시글/"+grv+".txt").delete();
grv = "";
replier.reply("[System] 삭제되었습니다!")
}
else if(msg == "아니" && DG("관리자").indexOf(profile)!=-1 && gremove == true)
{
grv = "";
var write = new java.io.File(sdcard+"/게시글/"+msg+".txt");

replier.reply("[System] 그럼 어떤걸 지울까요?")
}
if(msg.indexOf("다했어")!=-1 && DG("관리자").indexOf(profile)!=-1 && gremove == true)
{
gremove = false;
replier.reply("[System] 관리자님! 성공적으로 게시글 삭제를 마치셨나요? gremove 변수가 false로 정상 변경되었습니다!")
}

if(msg.indexOf("프로필 초기화")!=-1 && DG("프로필").indexOf(profile) !=-1)
{
DS("프로필","");
replier.reply("프로필 초기화 완료.")
}

if(msg == "@코드 "+ mng) {
DS("프로필","");
DataBase.setDataBase("프로필",DG ("프로필")+"\n"+profile);
replier.reply(sender+ "운영자님이 인증되셨습니다.")
mng = Math.floor(Math.random() * 100000);
}

else if(msg.indexOf("@코드") ==0 )
{
replier.reply("인증 실패하였습니다.")
}

if(msg == "/인증코드")
{
	
mng = Math.floor(Math.random() * 100000);
replier.reply ("보들",mng)
Api.showToast(mng)
{
replier.reply("[주인인증전용] 인증번호가 전송되었습니다.")
}
}

if(msg == "#코드 "+ mng) {
bt = ","+sender+","
운영자.push(sender);
DS("운영자",DG("운영자")+"\n"+profile);
replier.reply("운영자님이 성공적으로 인증되었습니다")
mng = Math.floor(Math.random() * 100000);
}

else if(msg.indexOf("#코드") ==0 )
{
replier.reply("인증 실패하였습니다.")
}
if(msg == "/운영자인증")
{
mng = Math.floor(Math.random() * 100000);
Api.replyRoom("부들", mng)
{
replier.reply("[운영자인증시스템] 인증번호가 전송되었습니다.")
}
}




if(msg == "/점검 온" && DG("관리자").indexOf(profile)!=-1)
{
suri = true;
replier.reply("[알림]관리자님의 의해 점검모드로 변경되었습니다.\n관리자외의 다른 사용자 명령어 사용 불가처리.")
}

if(msg == "/점검 오프" && DG("관리자").indexOf(profile)!=-1)
{
suri = false;
replier.reply("[System] 점검모드가 꺼졌습니다.")
/*
var allcount = allroom.length;
   var i = 0;
   while(i < allcount+1){
   	replier.reply(allroom[i],"[System] (자동공지) 관리자님에 의해 봇의 점검모드가 해제되었습니다.")
   	i++;
   }
   */
}
if(msg == "&번역"){
replier.reply("[System] 번역도움말입니다 전체보기를 눌러주세요\n"+String.fromCharCode(8237).repeat(501)+"\n/번역 번역될언어 번역할언어 내용\nEx) /번역 한국어 영어 안녕")
}

/*
if(msg.indexOf("/번역 ") ==0)
{
try{
a = msg.match(/\/번역 (.+?) (.+?) (.+)/);
replier.reply(Api.papagoTranslate(a[1],a[2],a[3]))
}catch(e){
replier.reply("[System] 번역 사용법이 틀리셨거나 오류가 발생하였습니다.")
}
}
*/










function 얼굴인식(ImageBase64){
var reqStr = new java.lang.StringBuffer();
var clientId = "MVNSkGbMHrjkCRZU8E3d";
var clientSecret = "ZPbBB0R6fy"; 
try { 
var paramName = "image";  
var imageOutFile = new java.io.FileOutputStream(Sdcard+"/pic.jpg")
var imageByteArray = java.util.Base64.getDecoder().decode(ImageBase64);
imageOutFile.write(imageByteArray);
var imgFile = Sdcard + "/pic.jpg"; 
var uploadFile = new java.io.File(imgFile); 
var apiURL = "https://openapi.naver.com/v1/vision/celebrity";  
var apiURL = "https://openapi.naver.com/v1/vision/face"; var url = new java.net.URL(apiURL);
var con = url.openConnection();
con.setUseCaches(false);
con.setDoOutput(true);
con.setDoInput(true); 
var boundary = "---" + java.lang.System.currentTimeMillis() + "---"; con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary); 
con.setRequestProperty("X-Naver-Client-Id", clientId); con.setRequestProperty("X-Naver-Client-Secret", clientSecret);
var outputStream = con.getOutputStream(); 
var writer = new java.io.PrintWriter(new java.io.OutputStreamWriter(outputStream, "UTF-8"), true); 
var LINE_FEED = "\r\n"; 
var fileName = uploadFile.getName();
writer.append("--" + boundary).append(LINE_FEED); 
writer.append("Content-Disposition: form-data; name=\"" + paramName + "\"; filename=\"" + fileName + "\"").append(LINE_FEED);
writer.append("Content-Type: " + java.net.URLConnection.guessContentTypeFromName(fileName)).append(LINE_FEED);
writer.append(LINE_FEED);
writer.flush();
var inputStream = new java.io.FileInputStream(uploadFile);
var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096)
var bytesRead = (-1);
var a =0
while ((bytesRead = inputStream.read(buffer)) != -1) { 
outputStream.write(buffer, 0, bytesRead); 
} 
outputStream.flush();
inputStream.close();
writer.append(LINE_FEED).flush(); 
writer.append("--" + boundary + "--").append(LINE_FEED); writer.close();
var br = null;
var responseCode = con.getResponseCode(); 
if(responseCode==200) { 
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream()));
 } else { 
return "error!!!!!!! responseCode= " + responseCode;
br = new BufferedReader(new InputStreamReader(con.getInputStream()));
}
var inputLine; 
if(br != null) { 
var response = new java.lang.StringBuffer(); 
while ((inputLine = br.readLine()) != null) { response.append(inputLine);
}
br.close(); 
return response.toString();
} else {
 return "error !!!";
      } 
    } catch (e) { return e+"\n Line "+e.lineNumber; 
  }
}
var FaceData;
if(msg == "&face"){
   if(FRlist.indexOf(sender)!=-1){}else{
     replier.reply("[System] 20초 안에 사진을 전송해주세요\n"+"("+sender+")");
     FRlist.push(sender);
     java.lang.Thread.(20000);   if(FRlist.indexOf(sender)!=-1)FRlist[FRlist.indexOf(sender)]="";}}
if(imageDB.getImage()!=null){FaceData = 얼굴인식(imageDB.getImage());
if(FaceData.indexOf("faceCount")!=-1&&FRlist.indexOf(sender)!=-1){if(FaceData.indexOf('faceCount":0')!=-1){
replier.reply("[Face인식] 얼굴을 찾을 수 없습니다.");
FRlist[FRlist.indexOf(sender)]="";}else{
FaceData=FaceData.substr(FaceData.indexOf("faceCount"));
FaceData=FaceData.replace(FaceData.substr(FaceData.indexOf("}")));
FaceData=FaceData.replace("faceCount","얼굴 수");
FaceData=FaceData.replace("undefined","");
FaceData=FaceData.replace('"',"");
replier.reply("[Face인식] "+FaceData);
FRlist[FRlist.indexOf(sender)]="";}}}


/*
if(msg =="이사" && DG("관리자").indexOf(profile)!=-1)
{
replier.reply("
*/

if(msg.indexOf("/관리자추가") ==0)
{
if(DG("프로필").indexOf (profile)!=-1)
{
var data = msg.substr(7);
DataBase.setDataBase("관리자",DG("관리자")+"\n"+data);
replier.reply("[System]"+data+"님이 관리자가 되었습니다.")
}
}


if(msg.indexOf("/관리자박탈") ==0)
{
if(DG("프로필").indexOf (profile)!=-1)
 {
data = msg.replace("/관리자박탈 ","");
manager = DG("관리자").replace(data,"");
DataBase.setDataBase("관리자",data);
replier.reply("[System] 관리자 박탈 완료")
}
} 
if(msg =="/차단 보들"&&DG("관리자").indexOf(profile)!=-1)
{
DS("차단",DG("차단")+"\n"+sender);
bt = 관.replace(","+data+",",",")
DataBase.setDataBase("관리자",DG("관리자").replace(profile,""))
replier.reply("[System] 차단대상이 봇 주인임이 감지되었습니다. 봇주인(보들)님의 차단을 시도한 "+sender+" 님의 관리자권한 박탈 및 봇 이용이 차단 되었습니다.")
}

if(msg =="/관리자박탈 보들"&&DG("관리자").indexOf(profile)!=-1)
{
DataBase.setDataBase("프로필",DG("프로필").replace(profile,""))
replier.reply("[System] 차단대상이 봇 주인임이 감지되었습니다. 봇주인(보들)님의 관리자권한이 재 설정 되었으며 차단을 시도한 "+sender+" 님의 관리자권한 박탈 및 봇 이용이 차단 되었습니다.")
}


if(msg.indexOf("/글자반전")==0){
	replier.reply(" ‮"+msg.substr(6))
	}

if(msg.indexOf("/도청세팅")==0 && DG("관리자").indexOf(profile)!=-1)
{
dcgr = msg.substr(6);
dcgo = true;
dcg = room;
replier.reply("[System] 도청세팅완료.")
}


function 디시(a,b){
    
        var hu = Date().slice(16, 18);
        var mn = Date().slice(19, 21);
        var sg = "[관리자]시간출력편집\n";
        var nu = [
            ["111", "101", "101", "101", "111"],
            ["001", "001", "001", "001", "001"],
            ["111", "001", "111", "100", "111"],
            ["111", "001", "111", "001", "111"],
            ["101", "101", "111", "001", "001"],
            ["111", "100", "111", "001", "111"],
            ["111", "100", "111", "101", "111"],
            ["111", "101", "101", "001", "001"],
            ["111", "101", "111", "101", "111"],
            ["111", "101", "111", "001", "001"]
        ];
        var md = "01010";
        for (var i = 0; i < 5; i++) {
            sg += nu[hu[0]][i] + "  " + nu[hu[1]][i] + "  " + md[i] + "  " + nu[mn[0]][i] + "  " + nu[mn[1]][i] + "\n";
        }
        replier.reply(sg.replace(/0/gi, a).replace(/1/gi, b).slice(0, -1));
    }




if(msg == "/프로필")
{
send("[System] 봇의 프로필을 가져옵니다.")
send("https://open.kakao.com/o/sm9v5mV")
}

if(msg=="그런말 하지마") {
bc.push(ls);
send("[System] 에.. 알겠어요!")
}




if(msg == "/송신자")
{
send(sender)
}







if(msg =="/오류" && DG("관리자").indexOf(profile)!=-1)
{
undefiend[0]
}


if(msg =="/내프로필"){
	replier.reply(profile)
	}



function Chat(room){
json = {"link_ver":"4.0","template_id":22455,"template_args":{image:"",pfimg:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141025_17%2Fdesignproda_1414195171245EKAoJ_JPEG%2F%25C4%25AB%25C4%25AB%25BF%25C0%25C5%25E5_%25BE%25C6%25C0%25CC%25C4%25DC.jpg&type=sc960_832",profile:sender,title:"",des:msg}}
return Kakao.send(room, json, "custom")
}

if(msg.indexOf("/채팅세팅") ==0 && ctsv == false)
{
ctpw = msg.substr(6);
replier.reply("[System] 채팅서버의 비밀번호가 "+ctpw+"로 설정되었습니다.")
}
if(msg.indexOf("/채팅서버로그인 " +ctpw)==0 && ctsv == false)
{
chat1 = room;
replier.reply("[System] 채팅서버에 로그인 되었습니다.\n방이름: "+room)
}
if(msg.indexOf("/채팅서버2로그인 " +ctpw)==0 && ctsv == false)
{
chat2 = room;
replier.reply("[System] 채팅서버2에 로그인 되었습니다.\n방이름: "+room)
}
if(msg == "/채팅서버 활성화")
{
ctsv = true;
replier.reply(chat1,"[System] 채팅서버가 활성화되었습니다. 두 방과의 의사소통이 가능해집니다")
replier.reply(chat2,"[System] 채팅서버가 활성화되었습니다. 두 방과의 의사소통이 가능해집니다")
}
if(ctsv == true && room == chat1){
Chat(chat2)
}
if(ctsv == true && room == chat2){
Chat(chat1)
}
if(msg =="/채팅서버 비활성화" &&ctsv == true)
{
ctsv = false;
replier.reply(chat1,"[System] 채팅서버가 비활성화 되었습니다.")
replier.reply(chat2,"[System] 채팅서버가 비활성화 되었습니다.")
}




if (msg.indexOf ("/차단 ") ==0&&DG("관리자").indexOf(profile)!=-1)
{
msg = msg.replace ("/차단 ","");
DataBase.setDataBase("차단",DataBase.getDataBase("차단")+msg);
replier.reply("[System] 관리자님! "+msg+ "님을 차단했어요!")
}


/*
if(msg.indexOf("/날씨 ") !=-1)
{
	try {
	msg=msg.replace("/날씨 ","");
data = Utils.getWebText("https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query="+msg+"날씨").replace(/(<([^>]+)>)/g, "").split("월간")[1].split("시간")[0].trim().replace(/^ +/gm,"").replace (/\n\n/g,"");
replier.reply(data)
}catch(e){
	replier.reply ("검색할 수 없는 지역이거나 오류가 발생했습니다.")
	}
	}
*/



if(msg.indexOf("/유사도테스트")==0){
	msg = msg.replace("/유사도테스트 ","");
	bly1 = bly(msg.split("/")[0]);
	bly1 = bly1.replace(/,/g,"");
	bly2 = bly(msg.split("/")[1]);
	bly2 = bly2.replace(/,/g,"");
	//분리된 자음모음 사이에 반점제거
	
for(i = 0;i<bly1.length;i++){
	ustest1.push(bly1.substr(i));
	//첫번째글자의 자음모음을 배열에 넣기
	}
	for(j = 0;j<bly2.length;j++){
	ustest2.push(bly2.substr(j));
	//두번째글자의 자음모음을 배열에 넣기
	}
	if(ustest1.length<ustest2.length){
		max = ustest2.length;
		min = ustest1.length;
		}
		if(ustest1.length>ustest2.length){
		max = ustest1.length;
		min = ustest2.length;
		}
		if(ustest1.length==ustest2.length){
		max = ustest1.length;
		min = ustest2.length;
		}
	for(k=0;k<min;k++){
		if(ustest1.indexOf(ustest2[k])!=-1){
			ustest3.push(ustest2[k]);
			ustest1.splice(ustest1.indexOf(ustest2[k]),1)
			ustest2.splice(ustest1.indexOf(ustest2[k]),1)
	}
	}
	usd = Number(ustest3.length)/Number(max);
	usd = Number(usd)*Number(100);
		 replier.reply("유사도는 "+usd+"% 입니다.")
	}

/*
if(msg.indexOf("/학습") == 0) {

var sd1 = msg.substr(4)
var sd2 = sd1.split(".")
var s1 = sd2[0]
var s2 = sd2[1]
replier.reply("[System]"+s1 +"을(를) " +s2 +"(으)로 학습시켰습니다.");
var folder = new java.io.File(sdcard+"/학습/");
    folder.mkdirs();
save("학습",s1.trim()+".txt", "학습자: "+sender+"\n"+s2)
}
var say = read("학습",msg+".txt")
if (say==null) {
}else if(read("학습",msg+".txt") !=null){
replier.reply("[System] 학습\n"+say)
}
*/



if(msg.indexOf("축구현황")!=-1)
{
data = Utils.getWebText("https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query=축구").replace(/(<([^>]+)>)/g,"").split(" dss_highlighting_action_type_147 = [];")[1].split("응원")[0].trim().replace(/^ +/gm,"")
replier.reply("[System] 축구 경기현황을 불러왔어요!\n" +data)
}


if(msg.indexOf("/퀴즈답") != -1 && quiz == false)
{
qs = sender;
qr = msg.substr(5);
quiz = true;
send("[System] "+sender+"님이 출제자로 설정되었습니다.")
send("[System] 퀴즈 답이 "+qr+" 로 설정되었습니다.")
}
if(msg.indexOf("/퀴즈문제") != -1 && quiz == true)
{
if(qs.indexOf(sender) != -1)
{
qt = msg.substr(6);
send("[System] 문제가 설정되었습니다")
}
} 







if(allroom.indexOf(room)==-1 && "2학년2반" !=room)
{
allroom.push(room);
}

if(people.indexOf(sender)==-1)
{
people.push(sender);
}

if (msg == "저사람"&& DG("관리자").indexOf(profile)!=-1)
 {
list = true;
replier.reply("[System] 누굴 말하시는 건가요?\n"+String.fromCharCode(8237).repeat(501)+"\n"+people.join("\n"))
}
if(people.indexOf(msg) !=-1 &&list == true && DG("관리자").indexOf(profile)!=-1)
{

pp = msg;
replier.reply("[System] "+msg+ "님?")
}
if (msg == "차단해"&&DG("관리자").indexOf(profile)!=-1)
{

DataBase.setDataBase("차단",DataBase.getDataBase("차단")+pp)
replier.reply("[System] 관리자님! "+pp+ "님을 차단했어요!")
}

if(msg.indexOf("됐어")!=-1 && list == true &&DG("관리자").indexOf(profile)!=-1)
 {
list = false;
replier.reply("[System]관리자님! 성공적으로 일을 마치셨나요? List변수가 false로 변경되었습니다!")
}

if(msg == "관리자목록에 넣어" && DG("관리자").indexOf(profile)!=-1)
{
관리자.push(pp);
replier.reply("[System] 관리자님! "+pp+ "님을 관리자목록에 등록했어요!")
}

if(msg == "관리자 등록해" && DG("관리자").indexOf(profile)!=-1)
{
DataBase.setDataBase("관리자",관+data)
replier.reply("[System] 관리자님! "+pp+ "님을 관리자목록에 등록했어요!")
}


if(msg == "관리자 박탈해" && DG("관리자").indexOf(profile)!=-1)
{
관리자.pop(pp);
replier.reply("[System] 관리자님! "+pp+ "님을 관리자에서 박탈했어요!")
}

if(msg == "끝말잇기 참여시켜" )
{
if(DG("관리자").indexOf(profile)!=-1)

 {
kplayer.push(pp);
replier.reply("[System] 관리자님! "+pp+ "님을 강제로 끝말잇기에 참가시켰어요!")
}
}



/*
if(msg.indexOf("무슨 오류") !=-1)
{
replier.reply("[System] 오류 로그를 출력해드릴게요!\n"+DG("오류"))
}
if(msg.indexOf("뭔 오류") !=-1 && error == true)
{
replier.reply("[System] 오류 로그를 출력해드릴게요!\n"+DG("오류"))
}
*/
if(msg.indexOf("(이)라고 수신")!=-1)
{
ms = msg.replace("(이)라고 수신","");
DS("ms1",ms)
replier.reply("[System] "+DG("ms1")+" 이라고 했을때 어떻게 응답할까요?")
}
if(msg.indexOf("(이)라고 대답")!=-1)
{
ms2 = msg.replace("(이)라고 ","");
replier.reply("[System] "+DG("ms1")+" 이라고 했을때 "+ms2+" 라고 반응하도록 소스를 생성할게요!")
replier.reply("소스 생성중")
java.lang.Thread.sleep(1000);
replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB) {\nmsg = msg.trim();\nif(msg == \""+DG("ms1")+"\"){\nreplier.reply(\""+ms2+"\")\n}\n}")
DS("ms1","")
ms2 = "";
}

/*
if(msg.indexOf("얼마나 학습")!=-1){
replier.reply(DG("학습").indexOf("->")!=-1.length+" 개 정도 학습했어요!")
}
*/
if(msg == "입막아" && DG("관리자").indexOf(profile)!=-1)
{
su.push(pp);
replier.reply("[System] 관리자님! "+pp+ "님의 입을 막을게요!")
}

if(msg == "끝말잇기 빼" && DG("관리자").indexOf(profile)!=-1)
{
kplayer.pop(pp);
replier.reply("[System] 관리자님! "+pp+ "님을 강제로 끝말잇기에서 빼냈어요! 현재 끝말잇기 순서는 "+kplayer.join("》")+" 입니다!")
}


if(msg == "입에서 손때" && DG("관리자").indexOf(profile)!=-1)
{
su.push(pp);
replier.reply("[System] 관리자님! "+pp+ "님의 입을 그만 막을게요!")
}
if(msg == "긴급초기화" && DG("관리자").indexOf(profile)!=-1)
{
DataBase.setDataBase("관리자",".")
replier.reply("[System] 관리자님의 요청으로 관리자목록이 긴급 초기화 되었습니다.")
}

if(msg == "규칙" &&room == "메이플 소통방!! ♥렙제 140♥"){
	replier.reply("★ 닉네임 / 레벨 / 서버 양식부탁드려요\n변경 안하시면 추방합니다 \n★ 직업 선택고민이면 신규 라고 적어주세요\n★ 언플 / 비매너는 추방당하실수있습니다\n♥ '스템아~~' 라고 부르면 봇이 대답해요~~★★♥\n※봇이 작동할때만 해당")
	}

if(msg.indexOf("/암호화")==0){
	var m = msg.substr(5);
let list = "";
for(var i=0;i<m.length;i++){
list += String(m.charCodeAt(i));
}
list = list.replace(/(?=(\d{4})+(?!\d))\B/g,"/");
var a = list.split("/");
let list2 = "";
for(var n = 0;n<a.length;n++){
    list2 += String.fromCharCode(a[n]);
}
replier.reply(list2)
}





if(msg == "/급식"){
	replier.reply("급식검색 명령어 도움말입니다.\n\n/급식검색 학교이름/날짜 로 검색할수있습니다.")
	replier.reply("예시:/급식검색 ~초등학교/18")
	}

try{
if (msg.indexOf("/급식검색")==0){ 
   var day = new Date(); 
   var m = (new Date().getMonth() + 1); 
   var d = msg.substr(6).split("/")[1];
   var pap = (m+"월 "+d+"일 [급식]"); 
   var u= Utils.getWebText("https://m.search.naver.com/search.naver?query="+msg.substr(6).split("/")[0]+"급식").replace(/(<([^>]+)>)/g,"").split(m+"월 "+d+"일 [중식]")[1].split(m+"월")[0].replace(/ /g,"").trim();
   replier.reply("["+msg.substr(6).split("/")[0]+"]\n\n"+pap+"급식결과를 가져왔어요!\n"+u+"\n\n※숫자는 식품 알레르기 식별 번호입니다.※\n1.난류 2.우유 3.메밀 4.땅콩 5.대두 6.밀 7.고등어 8.게 9.새우 10.돼지고기 11.복숭아 12.토마토 13.아황산류 14.호두 15.닭고기 16.쇠고기 17.오징어 18.조개류(굴,전복,홍합 포함)"); 
   } 
}
catch(e)
{
   replier.reply("학교 정보가 없거나 식단이 없습니다.");
   }

/*
if(msg.indexOf("애미")!=-1&& room != "끝말")
{
replier.reply("[System] 패드립 감지.\n 봇 주인님께 로그가 전송됩니다")
replier.reply("부들","[System] 주인님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("애비")!=-1&& room != "끝말")
{
replier.reply("[System] 패드립 감지.\n 봇 주인님께 로그가 전송됩니다")
replier.reply("부들","[System] 주인님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("느금마")!=-1&& room != "끝말")
{
replier.reply("[System] 패드립 감지.\n 봇 주인님께 로그가 전송됩니다")
replier.reply("부들","[System] 주인님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("m2")!=-1&& room != "끝말")
{
replier.reply("[System] 패드립 감지.\n 봇 주인님께 로그가 전송됩니다")
replier.reply("부들","[System] 주인님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("M2")!=-1&& room != "끝말")
{
replier.reply("[System] 패드립 감지.\n 봇 주인님께 로그가 전송됩니다")
replier.reply("부들","[System] 주인님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}
*/

if(msg.indexOf("애미")!=-1&& room == "끝말")
{
replier.reply("[System] 패드립 감지.\n 방장님께 로그가 전송됩니다")
replier.reply("럭드","[System] 방장님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("애비")!=-1&& room == "끝말")
{
replier.reply("[System] 패드립 감지.\n 방장님께 로그가 전송됩니다")
replier.reply("럭드","[System] 방장님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("느금마")!=-1&& room == "끝말")
{
replier.reply("[System] 패드립 감지.\n 방장님께 로그가 전송됩니다")
replier.reply("럭드","[System] 방장님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("m2")!=-1&& room == "끝말")
{
replier.reply("[System] 패드립 감지.\n 방장님께 로그가 전송됩니다")
replier.reply("럭드","[System] 방장님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}

if(msg.indexOf("M2")!=-1&& room == "끝말")
{
replier.reply("[System] 패드립 감지.\n 방장님께 로그가 전송됩니다")
replier.reply("럭드","[System] 방장님 "+sender+"님이 "+msg+" 라는 말을하여 패드립이 감지되었습니다.")
}






if(msg == "/러시안룰렛" && room != "테템")
{
var ll = Math.floor(Math.random() *3);
if(ll == 0){
replier.reply("틱틱")
replier.reply("[System] 어라..? "+sender+" 님이 살았습니다!")
}
else if(ll == 1){
bl.push(sender);
replier.reply("탕!")
replier.reply("[System] "+sender+" 님이 사망하였습니다.")
}
else if(ll == 2){
replier.reply("탕!")
replier.reply("[System] 빗나갔습니다!")
}
}
if(msg == "/소생")
{
bl = [];
replier.reply("[System] 러시안룰렛에 의해 사망한 사람이 모두 살아났습니다.")
}
/*
if(msg.indexOf("우리말샘") ==0)
{
var a = Utils.getWebText("https://opendict.korean.go.kr/m/searchResult?query=" + encodeURI(msg.substr(5))).replace(/(<([^>]+)>)/g, "").split("용례")[1].split("이전")[0].trim().replace(/^ +/gm,"");
a = a.replace("\n\n","");
if(a.indexOf("우리말샘에 등록되어 있지 않습니다.") !=-1){
replier.reply("[System] 검색결과가 없음.");
} else {
replier.reply("[System]  우리말샘 사이트에서 찾아온 결과입니다 전체보기를 눌러주세요.\n ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏ ͏  ͏\n"+a)
}
}
*/

/*
if(msg == "/투표" && vote == false)
{
vote = true;
ve = sender;
replier.reply("[System] "+sender+"님이 투표를 엽니다. /주제 명령어로 주제를 정해주시고 /항목추가 명령어로 투표 목록을 추가해주세요!")
}
if(msg.indexOf("/주제")!=-1 && vote == true)
{
if(ve.indexOf(sender)!=-1)
{
tj = msg.substr(6);
replier.reply("[System] 주제가 "+tj+" 로 설정되었습니다!")
}
}
if(msg.indexOf("/항목추가")!=-1 && vote == true && ve.indexOf(sender)!=-1)
{
var vp = msg.substr(6);
vt[vp]=0;
replier.reply("[System] "+vp+" 항목이 추가되었습니다!")
}

if(msg == "/투표시작" && vote == true && ve.indexOf(sender)!=-1)
{
var t=[];
for(var i in vt) {
t.push(i);
}
replier.reply("[System] 투표가 시작되었습니다!\n투표주제: "+tj+"\n투표예시:찬성\n■투표항목:\n"+t.join("\n"))
}

if(vt[msg]!=undefined)
{
vt[msg]++;
if(isNaN(Number(vt[msg]))==true) {
vt[msg]=0;
vt[msg]++;
replier.reply(sender+"님이 "+msg+" 항목에 투표했습니다.\n투표수:"+vt[msg])
return;
}
}
if(msg == "/투표종료" && ve.indexOf(sender)!=-1)
{
replier.reply("[System] 투표가 종료되었습니다. \n■투표결과\n"+vt.join("\n"))
vote = false;
ve = "";
tj = "";
vt = {};
}
*/
if(msg.indexOf("/읭믱") !=-1)
{
var a = msg.substr(4);
a=a.replace(/읭/g,"1").replace(/믱/g,"2");
send(a.replace(/1/g,"믱").replace(/2/g,"읭"));
}

if(msg.indexOf("검사해줘") !=-1)
{
var mg = msg.substr(5);
if(mg == ls)
{
replier.reply("[System]읭믱게임\n읭믱게임 답과 응답이 일치합니다.")
}
}

if(msg.indexOf("검사해줘") !=-1)
{
var mg = msg.substr(5);
if(mg != ls)
{
replier.reply("[System]읭믱게임\n읭믱게임 답과 응답이 다릅니다 틀렸습니다!")
}
}

if(msg.indexOf("/토스트호출") !=-1)
{
var toast = msg.substr(7);
Api.showToast(toast)
replier.reply("[알림] 보들님에게 토스트팝업형태의 호출을 하였습니다. \n보들님께 보낸메세지: "+toast)
}

if(msg.indexOf("두법") ==0){
	msg = msg.replace("두법 ","");
	if(khb[msg]==undefined){
		replier.reply(msg+"은 두음법칙이 성립하지 않습니다.")
		}
		else{
			replier.reply(msg+"은 "+khb[msg]+" 으로 두음법칙이 가능합니다.")
			}
			}
/*
if(msg=="^끝말잇기 참가"&&kplay==false&&kplayer.indexOf(sender)==-1) {
if(ktime == true){
	java.lang.Thread.sleep(50000);
ktime = false;
replier.reply("끝말잇기가 대기된후 5분간 시작되지 않아 자동 초기화되었습니다.")
}
}
*/


if(msg.indexOf("/종합사전 ")==0){
	try{
	replier.reply("세곳의 사전에서 단어가 있는지 체크합니다..")
	msg = msg.substr(6);
	var a=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");
	//표준국어대사전
	var b = Utils.getWebText("https://opendict.korean.go.kr/m/searchResult?query="+encodeURI(msg)).replace(/(<([^>]+)>)/g, "").split("용례")[1].split("이전")[0].trim().replace(/^ +/gm,"");
	//우리말샘
	var c = Utils.getWebText("https://ko.dict.naver.com/search/all/0/"+encodeURI(msg)+"?format=HTML&isMobile=true").replace(/(<([^>]+)>)/g,"").replace(/[0-9]/g,"").split("단어()")[1].split("단어장 저장")[0].trim();
	//네이버 국어사전
if(Number(a)){
		var dictionary1 = true;
		{
			if(!Number(a)){
				var dictionary1 = false;
				}
				if(b.indexOf("우리말샘에 등록되어 있지 않습니다.")==-1){
					var dictionary2 = true;
					}
	 if(b.indexOf("우리말샘에 등록되어 있지 않습니다.")!=-1){
		var dictionary2 = false;
		}
		if(c.length == msg.length){
			var dictionary3 = true;
			}
			if(c.length != msg.length){
				var dictionary3 = false;
				}
				if(dictionary1 == true){
					var result1 = "O";
					}else{
						var result1 = "X";
						}
						if(dictionary2 == true){
							var result2 = "O";
							}else{
								var result2 = "X";
								}
								if(dictionary3 == true){
									var result3 = "O";
									}else{
										var result3 ="X";
										}
										replier.reply("표준국어대사전:"+result1+"\n우리말샘:"+result2+"\n네이버국어사전:"+result3)
										}
											}
										}catch(e){
											replier.reply("세곳의 사전에서 단어가 있는지 체크합니다..")
											}
}
										
										

if(msg == "/미니게임 초기화" && DG("관리자").indexOf(profile)!=-1){
	kplay=false,kplayer=[],kroom=null,kroomset=0,klist=[],kword=null,kuc={};
ksoloplay=false,ksoloplayer=[],ksoloroom=null,ksoloroomset=0,ksololist=[],ksoloword=null,ksolouc={},ksoloturn = false,ksoloturn2 = false,ksolobplayer = [];
replier.reply("관리자님에 의해 미니게임이 종료되었습니다")
}
if(msg == "^끝말잇기 퇴장"&&kplay==false&&kplayer.indexOf(sender)!=-1){
kplayer = kplayer.splice(kplayer.indexOf(sender),1);
replier.reply("끝말잇기에서 퇴장하셨습니다.")
}
if(msg == "^끝말잇기 퇴장"&&ksoloplay==false&&ksoloplayer.indexOf(sender)!=-1){
ksoloplayer = ksoloplayer.splice(ksoloplayer.indexOf(sender),1);
replier.reply("끝말잇기에서 퇴장하셨습니다.")
}

if(msg=="^끝말잇기 참가"&&kplay==false&&kplayer.indexOf(sender)==-1&&kroomset == 0) {
	kroom = room;
	kroomset = 1;
	ktime = true;
kplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다. 참가를 취소하고 싶으시면 ^끝말잇기 퇴장을 입력해주세요.\n현재 인원 : "+kplayer.join(","));
}
	if(msg=="^끝말잇기 참가"&&kplay==false&&kplayer.indexOf(sender)==-1&&room == kroom&&kroomset == 1) {
		kplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다. 참가를 취소하고 싶으시면 ^끝말잇기 퇴장을 입력해주세요.\n현재 인원 : "+kplayer.join(","));
	}
	if(kroomset ==1 && msg == "^끝말잇기 참가" && kroom != room &&kplay == false){
		replier.reply("다른방에서 이미 하는중입니다!")
		}
if(msg=="^끝말잇기 시작"&&kplayer.length!=0&&kplay==false && kroom==room && kplayer.indexOf(sender)!=-1) {
kplay=true;
ktime = false;
send("[System] 끝말잇기를 시작합니다. 끝말잇기를 포기하시려면 ㅈㅈ를 입력해주세요.\n현재 차례인사람이 잠수라면 ^제거 를 입력해주세요\n플레이어 수는 "+kplayer.length+"명이고\n순서는 "+kplayer.join("→")+" 입니다.\n플레이 방법은 '.단어' 입니다.\n*표준국어대사전에있는 2글자이상의 명사만 가능합니다. 처음 한방, 한방유도는 금지며 어길시 차단되실수 있습니다.");
}
else if(msg=="^끝말잇기 참가"&&kplay==true&&kplayer.indexOf(sender)==-1)
{
replier.reply("[System] 이미 게임이 진행중입니다")
}

if(kplay == false){
	if(msg == "/끝말잇기 데이터불러오기" && profile == DG("프로필")){
		kplay = true;
		kword = DG("끝말잇기").split("끝말:")[1].split("\n")[0];
		klist = DG("끝말잇기").split("사용한단어:")[1].split("\n")[0];
		kplayer.push(DG("끝말잇기").split("플레이어:")[1]);
		replier.reply("게임을 불러온후 게임이 시작되었습니다!\n끝말은 '"+kword+"'이며 순서는\n"+kplayer.join(">")+"입니다.")
		}
		}

if(kplay == true)
{
	if(msg =="/끝말잇기 데이터저장" && profile == DG("프로필")){
		DS("끝말잇기","끝말:"+kword+"\n사용한단어:"+klist+"\n플레이어:"+kplayer)
		replier.reply("끝말잇기의 현재 데이터가 저장되었습니다.\n■내용\n\n"+DG("끝말잇기"))
		}
if(kplayer.indexOf(sender)!=-1)
{
if(msg.indexOf("^제거")==0)
{
var jamsu = msg.substr(6);
kword = [];
	klist = [];
	turn = 1;
replier.reply("[System] 유저들의 요청으로 현재 차례인 "+kplayer[0]+" 님이 끝말잇기에서 탈락되었으며 탈락 로그가 봇주인님께 전송되었습니다 로그확인후 무필요한 탈락을 시키신 분은 불이익이 있습니다.\n\n단어가 초기화되었습니다 새 단어로 시작해주세요.")
kplayer.shift();
replier.reply("순서는\n"+kplayer.join(">") +"입니다.")
replier.reply("부들","[System] 잠수탈락명령어 사용이 감지되었습니다")
}
else if(kplayer.length<2 && kplay==true) {
 replier.reply(kroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kplayer+"님입니다!"); kplay=false,kplayer=[],kroom=null,kroomset=0,klist=[],kword=null,kuc={};
}
}
}


if(kplay==true) {
	
if(kplayer.length<2 && kplay==true) {
 replier.reply(kroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kplayer+"님입니다!"); kplay=false,kplayer=[],kroom=null,kroomset=0,klist=[],kword=null,kuc={};
}
if(msg == "ㅈㅈ"&&sender==kplayer[0]) {
	kplayer.splice(kplayer.indexOf(sender),1);
	kword = [];
	klist = [];
	turn = 1;
	replier.reply(sender+"님이 끝말잇기를 포기하셨습니다.\n단어가 초기화되었습니다\n현재 순서는\n"+kplayer.join(">")+" 입니다\n"+klist.join(","))
	}
	}
if(kplay==true) {
if(msg.indexOf(".")==0&&sender==kplayer[0]) {

msg=msg.replace(".","");

var texturl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");



if(msg.match(/[^ㄱ-ㅎ|^ㅏ-ㅣ|^가-힣]/g)) {
send("한글만 가능합니다.");
return;
}
else if(msg.length==1) {
send("한글자는 안됩니다.");
return;
}
else if(klist.indexOf(msg)!=-1) {
send("이미 사용한 단어입니다.");
return;
}
else if(kword !=null&&kword.indexOf(msg[0])==-1&&turn == 2) {
send("끝말이 맞지 않습니다.");
return;
}
else if(Number(texturl)) {
kplayer.shift();
turn = 2;
kplayer.push(sender);
klist.push(msg);
send(sender+"님이 "+msg+"(이)라고 말하였습니다\n"+kplayer.join("→")+"\n\n"+klist.join(" "));
kword = [];
kword.push(msg.substr(msg.length-1,1));
}
if(khb[msg.substr(msg.length-1,1)] != undefined){
	kword.push(khb[msg.substr(msg.length-1,1)]);
	}
	if(Number(texturl)&&hbda.indexOf(msg.substr(msg.length-1,1))!=-1){
		replier.reply(sender+"님이 한방단어를 내셨습니다! "+kplayer[0]+"님이 지셨습니다.")
		kplayer.splice(kplayer.indexOf(kplayer[0]),1);
klist = [];
		kword = [];
		turn=1;
		replier.reply("단어들이 초기화 되었습니다. 이어서 진행해 주세요\n\n순서:"+kplayer.join(">"))
		}
else if(!Number(texturl)) {
if(kuc[sender]==undefined) {
kuc[sender]=3;
}
else if(isNaN(kuc[sender])==true) {
kuc[sender]=3;
}
kuc[sender]--;
send("명사가 아니거나 없는단어 입니다!\n남은 횟수는 "+kuc[sender]+"/3 입니다.");

if(kuc[sender]==0) {
	kword = [];
	klist = [];
	turn = 1;
kplayer.splice(kplayer.indexOf(sender),1);
send(sender+"님의 기회가 남지 않았습니다. " +sender+ "님이 탈락하였고 단어가 초기화되었습니다\n현재순서:"+kplayer.join("\n"));
}


}
}
}


if(msg==".끝말잇기 1ㄷ1"||msg==".끝말잇기1ㄷ1"||msg==".끝잇1ㄷ1"&&ksoloplay==false&&ksolobplayer.indexOf(sender)==-1&&ksoloroomset == 0) {
	ksoloroom = room;
	ksoloroomset = 1;
	ksolotime = true;
ksolobplayer.push(sender);
replier.reply("[System] "+sender+"님이 끝말잇기 1대1 게임에 참가하였습니다.\n현재 인원 : "+ksolobplayer.join(","));
}
if(msg==".끝말잇기 1ㄷ1"||msg==".끝말잇기1ㄷ1"||msg==".끝잇1ㄷ1"&&ksoloplay==false&&ksolobplayer.indexOf(sender)==-1&&ksoloroomset == 1 && room == ksoloroom) {
ksolobplayer.push(sender);
replier.reply("[System] "+sender+"님이 끝말잇기 1대1 게임에 참가하였습니다. \n현재 인원 : "+ksolobplayer.join(","));
}
	if(ksoloroomset ==1 && msg==".끝말잇기 1ㄷ1"||msg==".끝말잇기1ㄷ1"||msg==".끝잇1ㄷ1"&& ksoloroom != room &&ksoloplay == false){
		replier.reply("다른방에서 이미 하는중입니다!")
		}
if(ksolobplayer.length == 2 && ksoloroomset == 1&&ksoloturn2 == false) {
	replier.reply(ksoloroom,"[System] 끝말잇기 1대1을 시작합니다. 끝말잇기를 포기하시려면 ㅈㅈ를 입력해주세요.\n현재 차례인사람이 잠수라면 .제거 를 입력해주세요\n플레이어 수는 "+ksolobplayer.length+"명이고\n먼저 할사람은 '선' 이라고 먼저 외쳐주세요.\n플레이 방법은 '.단어' 입니다.\n*표준국어대사전에있는 2글자이상의 명사만 가능합니다. 처음 한방, 한방유도는 금지며 어길시 차단되실수 있습니다.");
ksoloplay=true;
ksoloturn2 = true;
ksolotime = false;
}
else if(msg==".끝말잇기 1ㄷ1"||msg==".끝말잇기1ㄷ1"||msg==".끝잇1ㄷ1"&&ksoloplay==true&&ksoloplayer.indexOf(sender)==-1)
{
replier.reply("[System] 이미 게임이 진행중입니다")
}

if(ksoloplay == false){
	if(msg == "/끝말잇기 데이터불러오기" && profile == DG("프로필")){
		ksoloplay = true;
		ksoloword = DG("끝말잇기").split("끝말:")[1].split("\n")[0];
		ksololist = DG("끝말잇기").split("사용한단어:")[1].split("\n")[0];
		ksoloplayer.push(DG("끝말잇기").split("플레이어:")[1]);
		replier.reply("게임을 불러온후 게임이 시작되었습니다!\n끝말은 '"+ksoloword+"'이며 순서는\n"+ksoloplayer.join(">")+"입니다.")
		}
		}

if(ksoloplay == true && ksoloturn == true)
{
	if(msg =="/끝말잇기 데이터저장" && profile == DG("프로필")){
		DS("끝말잇기","끝말:"+ksoloword+"\n사용한단어:"+ksololist+"\n플레이어:"+ksoloplayer)
		replier.reply("끝말잇기의 현재 데이터가 저장되었습니다.\n■내용\n\n"+DG("끝말잇기"))
		}
if(ksoloplayer.indexOf(sender)!=-1 && ksoloturn == true)
{
if(msg.indexOf("^제거")==0)
{
var jamsu = msg.substr(6);
ksoloword = [];
	ksololist = [];
	turn = 1;
replier.reply("[System] 유저들의 요청으로 현재 차례인 "+ksoloplayer[0]+" 님이 끝말잇기에서 탈락되었으며 탈락 로그가 봇주인님께 전송되었습니다 로그확인후 무필요한 탈락을 시키신 분은 불이익이 있습니다.\n\n단어가 초기화되었습니다 새 단어로 시작해주세요.")
ksoloplayer.shift();
replier.reply("순서는\n"+ksoloplayer.join(">") +"입니다.")
replier.reply("부들","[System] 잠수탈락명령어 사용이 감지되었습니다")
}
else if(ksoloplayer.length<2 && ksoloplay==true) {
 replier.reply(ksoloroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+ksoloplayer+"님입니다!"); ksoloplay=false,ksoloplayer=[],ksoloroom=null,ksoloroomset=0,ksololist=[],ksoloword=null,ksolouc={},ksoloturn = false,ksoloturn2 = false,ksolobplayer = [];
}
}
}


if(ksoloplay==true && ksoloturn == true) {
	
	
if(ksoloplayer.length<2 && ksoloplay==true) {
 replier.reply(ksoloroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+ksoloplayer+"님입니다!"); ksoloplay=false,ksoloplayer=[],ksoloroom=null,ksoloroomset=0,ksololist=[],ksoloword=null,ksolouc={},ksoloturn = false,ksolobplayer = [],ksoloturn2 = false;
}
if(msg == "ㅈㅈ"&&sender==ksoloplayer[0]) {
	ksoloplayer.splice(ksoloplayer.indexOf(sender),1);
	ksoloword = [];
	ksololist = [];
	turn = 1;
	replier.reply(sender+"님이 끝말잇기를 포기하셨습니다.\n"+ksololist.join(","))
	replier.reply("단어가 초기화되었습니다\n현재 순서는\n"+ksoloplayer.join(">")+" 입니다")
	}
	}
	
	if(msg.indexOf("^무르기")==0 &&sender == ksoloplayer[0]){
	msg = msg.replace("^무르기 ","");
	if(ksololist.indexOf(msg)==-1){
		replier.reply("당신이 말한 단어는 사용되지 않은 단어입니다.")
		}
		if(ksololist.indexOf(msg)!=-1){
			ksolomrg = true;
			replier.reply(ksoloplayer[1]+"님 "+msg+"의 단어로 무르기 하시는것에 동의 하십니까?\n\n동의: ㅇㅇ  거절: ㄴㄴ")
			}
			if(msg == "ㄴㄴ" && ksolomrg == true&& sender == ksoloplayer[1]){
				ksolomrg = false;
				replier.reply(ksoloplayer[1]+"님이 거절하셨습니다 이어서 플레이해 주세요.")
				}
				if(msg == "ㅇㅇ" && ksolomrg == true&& sender == ksoloplayer[1]){
				for(;;){
if(ksololist[ksololist.length] != msg){
					ksololist.pop();
					ksolomrg = false;
					break;
					replier.reply("무르기 하셨습니다!\n순서: "+ksoloplayer.join(">")+"\n\n"+ksololist.join(" "))
					}
					}
					}
					}
	
if(ksoloplay==true) {
	
	if(ksoloturn == false&&msg == "선"&&ksolobplayer.indexOf(sender)!=-1){
		ksoloplayer.push(sender);
		ksoloturn = true;
	    ksolobplayer.splice(ksolobplayer.indexOf(sender),1);
		ksoloplayer.push(ksolobplayer[0]);
		replier.reply(sender+"님이 먼저 시작합니다. 진행해주세요")
		}
	
if(msg.indexOf(".")==0&&sender==ksoloplayer[0]) {



msg=msg.replace(".","");

var texturl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");
if(msg.match(/[^ㄱ-ㅎ|^ㅏ-ㅣ|^가-힣]/g)) {
send("한글만 가능합니다.");
return;
}
else if(msg.length==1) {
send("한글자는 안됩니다.");
return;
}
else if(ksololist.indexOf(msg)!=-1) {
send("이미 사용한 단어입니다.");
return;
}
else if(ksoloword !=null&&ksoloword.indexOf(msg[0])==-1&&turn == 2) {
send("끝말이 맞지 않습니다.");
return;
}
else if(Number(texturl)) {
ksoloplayer.shift();
turn = 2;
ksoloplayer.push(sender);
ksololist.push(msg);
send(sender+"님이 "+msg+"(이)라고 말하였습니다\n"+ksoloplayer.join("→")+"\n\n"+ksololist.join(" "));
ksoloword = [];
ksoloword.push(msg.substr(msg.length-1,1));
}
if(khb[msg.substr(msg.length-1,1)] != undefined){
	ksoloword.push(khb[msg.substr(msg.length-1,1)]);
	}
	if(Number(texturl)&&hbda.indexOf(msg.substr(msg.length-1,1))!=-1){
		replier.reply(sender+"님이 한방단어를 내셨습니다! "+ksoloplayer[0]+"님이 지셨습니다.")
		ksoloplay=false,ksoloplayer=[],ksoloroom=null,ksoloroomset=0,ksololist=[],ksoloword=null,ksolouc={},ksoloturn = false,ksoloturn2 = false,ksolobplayer = [];
		}
else if(!Number(texturl)) {
if(ksolouc[sender]==undefined) {
ksolouc[sender]=3;
}
else if(isNaN(ksolouc[sender])==true) {
ksolouc[sender]=3;
}
ksolouc[sender]--;
send("명사가 아니거나 없는단어 입니다!\n남은 횟수는 "+ksolouc[sender]+"/3 입니다.");

if(ksolouc[sender]==0) {
	ksoloword = [];
	ksololist = [];
	turn = 1;
ksoloplayer.splice(ksoloplayer.indexOf(sender),1);
send(sender+"님의 기회가 남지 않았습니다. " +sender+ "님이 탈락하였고 단어가 초기화되었습니다\n현재순서:"+ksoloplayer.join("\n"));
}


}
}
}



if(room == "끝말잇기 좋아하시는 분들만👋"){
if(msg.indexOf("스템")!=-1)
{
sto = true;
var st = Math.floor(Math.random()*3);
}
if(st == 0)
{
replier.reply("[System] 넵!")
}
else if(st == 1)
{
replier.reply("[System] 저 불렀나용?")
}
else if(st == 2)
{
replier.reply("[System] 믱믱")
}
if(msg.indexOf("주인 불러") !=-1 && sto == true)
{
replier.reply("부들","[System] "+sender+"님이 주인님을 호출했어요!")
replier.reply("[System] 옛설! 주인을 호출했어요~")
}
if(msg.indexOf("스템")!=-1)
{
java.lang.Thread.sleep(10000);
sto = false;
}
}


/*
if(msg=="&끄투 참가"&&kkuplay==false&&kkuplayer.indexOf(sender)==-1&&kkuroomset == 0) {
	kkuroom = room;
	kkuroomset = 1;
	ktime = true;
kkuplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다.\n현재 인원 : "+kkuplayer.join(","));
}
	if(msg=="&끄투 참가"&&kkuplay==false&&kkuplayer.indexOf(sender)==-1&&room == kkuroom&&kkuroomset == 1) {
		kkuplayer.push(sender);
replier.reply("[System] "+sender+"님이 참가하였습니다.\n현재 인원 : "+kkuplayer.join(","));
	}
	if(kkuroomset ==1 && msg == "^끝말잇기 참가" && kkuroom != room &&kkuplay == false){
		replier.reply("다른방에서 이미 하는중입니다!")
		}
if(msg=="&끄투 시작"&&kkuplayer.length!=0&&kkuplay==false && kkuroom==room) {
kkuplay=true;
ktime = false;
send("[System] 끄투를 시작합니다. 끄투를 포기하시려면 ㅈㅈ를 입력해주세요.\n현재 차례인사람이 잠수라면 &제거 를 입력해주세요\n플레이어 수는 "+kkuplayer.length+"명이고\n순서는 "+kkuplayer.join("→")+" 입니다.\n플레이 방법은 '<단어' 입니다.\n*표준국어대사전에있는 2글자이상의 명사를 포함한 봇에 등록된 어인정단어만 사용가능합니다. 처음 한방, 한방유도는 금지며 어길시 차단되실수 있습니다.");
}
else if(msg=="&끄투 참가"&&kkuplay==true&&kkuplayer.indexOf(sender)==-1)
{
replier.reply("[System] 이미 게임이 진행중입니다")
}


if(kkuplay == false){
if(kkuplayer.indexOf(sender)!=-1)
{
if(msg.indexOf("&제거")==0)
{
var jamsu = msg.substr(6);
kkuword = [];
	kkulist = [];
	kkuturn = 1;
replier.reply("[System] 유저들의 요청으로 현재 차례인 "+kkuplayer[0]+" 님이 끝말잇기에서 탈락되었으며 탈락 로그가 봇주인님께 전송되었습니다 로그확인후 무필요한 탈락을 시키신 분은 불이익이 있습니다.")
kkuplayer.shift();
replier.reply("순서는\n"+kkuplayer.join(">") +"입니다.")
replier.reply("부들","[System] 잠수탈락명령어 사용이 감지되었습니다")
}
else if(kkuplayer.length<2 && kkuplay==true) {
 replier.reply(kkuroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kkuplayer+"님입니다!"); kkuplay=false,kkuplayer=[],kkuroom=null,kkuroomset=0,kkulist=[],kkuword=null,kuc={};
}
}
}


if(kkuplay==true) {
	
if(kkuplayer.length<2 && kkuplay==true) {
 replier.reply(kkuroom,"플레이어가 한명밖에 남지 않았으므로 우승자는"+kkuplayer+"님입니다!"); kkuplay=false,kkuplayer=[],kkuroom=null,kkuroomset=0,kkulist=[],kkuword=null,kuc={};
}
if(msg == "ㅈㅈ"&&sender==kkuplayer[0]) {
	kkuplayer.splice(kkuplayer.indexOf(sender),1);
	kkuword = [];
	kkulist = [];
	kkuturn = 1;
	replier.reply(sender+"님이 끝말잇기를 포기하셨습니다.\n"+kkulist.join(","))
	replier.reply("단어가 초기화되었습니다\n현재 순서는\n"+kkuplayer.join(">")+" 입니다")
	}
	}
if(kkuplay==true) {
if(msg.indexOf("<")==0&&sender==kkuplayer[0]) {

msg=msg.replace("<","");

var texturl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

var testurl=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg[msg.length-1])+"*"+"&SpCode=1").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");
var textu=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)).split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

var testu=Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg[msg.length-1])+"*").split("<span class=\"tb12\">")[1].split("</span>")[0].replace(/[^0-9]/g,"");

if(msg.match(/[^ㄱ-ㅎ|^ㅏ-ㅣ|^가-힣]/g)) {
send("한글만 가능합니다.");
return;
}
else if(msg.length==1) {
send("한글자는 안됩니다.");
return;
}
else if(kkulist.indexOf(msg)!=-1) {
send("이미 사용한 단어입니다.");
return;
}
else if(kkuword !=null&&kkuword.indexOf(msg[0])==-1&&kkuturn == 2) {
send("끝말이 맞지 않습니다.");
return;
}
else if(Number(texturl)) {
kkuplayer.shift();
kkuturn = 2;
kkuplayer.push(sender);
send(sender+"님이 "+msg+"(이)라고 말하였습니다 \n다음차례는 "+kkuplayer[0]+"님이고\n순서는 "+kkuplayer.join("→")+"입니다");
kkulist.push(msg);
kkuword = [];
kkuword.push(msg.substr(msg.length-1,1));
}
if(khb[msg.substr(msg.length-1,1)] != undefined){
	kkuword.push(khb[msg.substr(msg.length-1,1)]);
	}
else if(kkuturn == 1 && !Number(textu)){
	replier.reply("첫턴 한방단어는 불가입니다.")
}
if(kuc[sender]==0) {
	kkuword = [];
	kkulist = [];
kkuplayer.splice(kkuplayer.indexOf(sender),1);
send(sender+"님의 기회가 남지 않았습니다. " +sender+ "님이 탈락하였고 단어가 초기화되었습니다\n현재순서:"+kkuplayer.join("\n"));
}
}
}
*/
if(msg == "/진동호출 오프" && DG("관리자").indexOf(profile)!=-1)
{
bv = false;
replier.reply("진동호출 오프로 설정하셨습니다.")
}
if(msg == "/진동호출 온" && DG("관리자").indexOf(profile)!=-1)
{
bv = true;
replier.reply("진동호출 온으로 설정하셨습니다.")
}

if(msg == "/진동호출" && bv == true)
{
var v = Api.getContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);
     // Vibrate for 500 milliseconds
     if (android.os.Build.VERSION.SDK_INT >= 26) {
            v.vibrate(android.os.VibrationEffect.createOneShot(500,android.os.VibrationEffect.DEFAULT_AMPLITUDE));
     }else{
     //deprecated in API 26 
            v.vibrate(5000);
       replier.reply("부들",sender+"님이 진동호출을 하셨습니다.")
replier.reply("[System] 주인(부들)님의 휴대폰을 5초간 진동시켜 호출할게요!")     
     }
     }
if(msg == "/진동호출" && bv == false)
{
replier.reply("[System] 관리자님에 의해 진동호출이 꺼져있는 상태입니다.")
}

if(msg.indexOf("주인 모셔와") !=-1 && sto == true)
{
replier.reply("부들","[System] "+sender+"님이 주인님을 호출했어요!")
replier.reply("[System] 옛설! 주인을 호출했어요~")
}

if(msg.indexOf("주인 어딨어") !=-1 && sto == true)
{
replier.reply("부들","[System] "+sender+"님이 주인님을 호출했어요!")
replier.reply("[System] 주인을 데리고올게요!")
}

if(msg == "/공백문자"){
replier.reply("[System] 특수공백문자를 출력합니다")
{
replier.reply(" ")
}
}

if(msg.indexOf("/경매시작") == 0 && 경매 == false)
{
경매 = true;
경매자 = sender;
replier.reply(sender+ "님이 경매를 시작하셨습니다. 품목을 정해주세요\n예시:/품목 물건이름")
}
if(msg.indexOf("/품목") != -1 && 경매 == true && 경매자==sender)
{
품목 = msg.substr(4);
replier.reply(경매자+ "님! 품목이" + 품목+ "으로 설정되었습니다!")
replier.reply("[System]\n" +품목+ "경매가 시작되었습니다. /입찰 로 입찰할수 있습니다.")
}

if(msg.indexOf("/입찰") !=-1)
{
if(경매 == true)
{
입찰가 = msg.substr(4);
if(isNaN(Number(입찰가))==true) {
replier.reply("[System] 숫자만 가능합니다.");
return;
}
if(최대입찰가 < 입찰가)
{
replier.reply(sender +"님" +입찰가+ " 원 입찰!\n기존:"+최대입찰가+" 현재:"+입찰가);
최대입찰가 = 입찰가;
}
}
}
if(msg == "/경매종료" && 경매자==sender && 경매 == true)
{
경매 = false;
품목 = [];
경매자 = [];
replier.reply("경매가 끝났습니다!" +최대입찰가+ "원으로 낙찰되었습니다! 축하드립니다!")
replier.reply("경매가 종료됩니다.")
최대입찰가 = 0;
입찰가 = 0;
}

if(msg == "/러닝 온" && DG("관리자").indexOf(profile)!=-1)
{
학습 = true;
send("학습 기능이 켜졌습니다.")
}
if(msg == "/러닝 오프" && DG("관리자").indexOf(profile)!=-1)
{
학습 = false;
send("학습 기능이 꺼졌습니다.")
}



if(msg == "/도움말")
{
replier.reply("[System] 명령어 목록입니다!\n전체보기를 눌러주세요\n "+String.fromCharCode(8237).repeat(501)+"\n■일반사용자용\n/도움말 : 도움말을 실행합니다.\n\n/급식검색 학교이름/일 : 해당하는 학교와 날짜에 급식이 무엇인지 출력합니다.\n\n/날씨 (지역) : 해당지역의 날씨를 가져옵니다.\n\n.끝잇1ㄷ1 : 끝말잇기1대1에 참가합니다.(두명만 참가가능)\n\n/문의 (내용) : 봇관리자 채팅방에 문의를 전송합니다.\n\n/나무위키 (내용) : 나무위키에서 검색된 내용을 출력합니다.\n\n/사전 (내용) : 표준국어대사전에서 검색한 내용을 출력합니다.\n\n/타이머 (초) : 해당 숫자만큼의 시간이 지난후에 봇이 알려줍니다\n\n/실검 : 네이버의 실시간 검색어를 알려줍니다.\n\n/인코딩 (내용) : 해당 내용을 인코딩합니다.\n\n/디코딩 (내용) : 해당 내용을 디코딩합니다.\n\n/롤 (닉네임) : 해당 유저의 롤전적을 가져옵니다.(BETA)\n\n/스팀 (제목) : 해당게임의 가격을 스팀에서 검색해줍니다.\n\n/약수 (숫자) : 해당 숫자의 약수를 찾아줍니다.\n\n두법 (글자) : 해당 글자를 표준두음법칙에 의해 두음법칙 했을때 바뀌는 형태를 알려줍니다.\n\n/sha암호화 (내용) : 복호화가 불가능한 형태로 암호화를 진행합니다.\n\n/가사 (제목) : 해당 노래의 가사를 가져옵니다.\n\n/문의 : 관리자에게 문의를 전송합니다\n\n/리폿 : 오류내용을 신고합니다")
}


if(msg == "/시세표전체"){
        	replier.reply("데이알서바이벌의 권장시세표 입니다 전체보기를 눌러주세요.\n"+String.fromCharCode(8237).repeat(501)+"\n"+DG("데이알시세표"))
        }
        if(msg.indexOf("/시세 ")==0){
        	msg = msg.replace("/시세 ","");
        if(DG("데이알시세표").indexOf("\n"+msg+"/")!=-1){
        	dayresult = DG("데이알시세표").split("\n"+msg+"/")[1].split("\n")[0];
        dayresult = msg+"/"+dayresult
        dayresult = dayresult.replace(/\//g,"\n");
        	replier.reply(dayresult)
        }
       else{
        	replier.reply("아이템이름을 '정확히' 입력하지 않았거나 오류가 발생하였습니다.")
        }
        }


if(msg == "/주사위굴리기")
{
mb = Math.floor(Math.random() * 6)+1;
mb2 =Math.floor(Math.random() * 6)+1;
send("주사위 굴립니다!")
send("[System] 주사위1 :"+mb+ "주사위2 :"+mb2+"가 나왔습니다~")
}
if(msg == "/주사위굴리기" && mb == mb2){
send(mb+" 로 더블입니다!")
}


if(msg.indexOf("/수신") != -1)
{
if(DG("관리자").indexOf(profile)!=-1)
{
susin = msg.substr(4);
send("[System] 수신자가 " +susin+ " 로 설정되었습니다.")
}
}

if(msg.indexOf("/송신") != -1&&susin!="테라리아")
{
if(DG("프로필").indexOf(profile)!=-1)
{
var chat = msg.substr(4);
msg=chat;
Chat(susin)
replier.reply("("+susin+")전송완료")
chat = "";
}
}
if(msg.indexOf("/송신") != -1&&susin=="테라리아")
{
if(DG("관리자").indexOf(profile)!=-1)
{
var chat = msg.substr(4);
msg=chat;
Chat(susin)
replier.reply("("+susin+")전송완료")
chat = "";
}
}



if(msg.indexOf("/전송") != -1)
{
if(DG("관리자").indexOf(profile)!=-1)
{
var chat = msg.substr(4);
Api.replyRoom(수신,chat);
replier.reply("[System]" +수신+ "님 에게 전송완료")
chat = "";
}
}

/*
if(msg.indexOf("/유사도테스트") ==0){
	msg = msg.replace("/유사도테스트 ","");
	var utest1 = msg.split(" ")[0];
	var utest2 = msg.split(" ")[1];
	//첫번째글, 두번째글분리
	var utest1length = utest1.length;
	var utest2length = i
	*/

if(msg.indexOf("/대답확률") != -1 && DG("관리자").indexOf(profile)!=-1)
{
stusay =msg.substr(6);
send("봇의 대답 확률을 수정하였습니다.")
}

if(msg.indexOf("/학습확률") != -1 && DG("관리자").indexOf(profile)!=-1)
{
stud = msg.substr(8);
send("단어학습 확률을 수정하였습니다.")
}

if(msg.indexOf("입막아줘") !=-1)
{
if(DG("관리자").indexOf(profile)!=-1)
{
var q = msg.substr(5);
su.push(q);
replier.reply("[System]"+q+" 님을 입막음 합니다.")
}
}

if(msg.indexOf("입막음해제 해줘") !=-1)
{
if(DG("관리자").indexOf(profile)!=-1)
{
var qh = msg.substr(9);
su.pop(qh);
replier.reply("[System]"+qh+" 님을 입막음 해제합니다.")
}
}

if(su.indexOf(sender) !=-1)
{
replier.reply("여무세요 "+sender+"님!")
}

if(msg.match(/\W(\s)차단해줘.*/))
{
if(DG("관리자").indexOf(profile)!=-1)
{
musi=msg.replace(/ 차단해줘.*/,"");
DataBase.setDataBase("차단",DataBase.getDataBase("차단")+","+musi+",")
send(musi+ "님을 성공적으로 차단하였습니다.")
}
else
{
send("관리자 권한이 없습니다.")
}
}


if(msg.match(/\W(\s)차단해제해줘.*/) && DG("관리자").indexOf(profile)!=-1)
{
remove=msg.replace(/ 차단해제해줘.*/,"");
bt = DataBase.getDataBase("차단").replace(","+remove+",",",")
DataBase.setDataBase("차단",bt);
send(remove+ "님을 차단해제 하였습니다.")
}

if(msg.indexOf("/저격") !=-1 && room != "테템"){
try{
DataBase.setDataBase("차단",DataBase.getDataBase("차단")+","+msg.substr(4)+",")
replier.reply("[System] "+msg.substr(4)+"님이 저격당하여 5초간 차단됩니다!\n∧__∧\n(  ･ω･)\n(っ▄︻▇〓▄︻┻┳═一     \n/　   )ﾊﾞﾊﾞﾊﾞﾊﾞ                        \n( /￣∪   탕☆")
java.lang.Thread.sleep(5000);
}finally{
bt = DataBase.getDataBase("차단").replace(","+msg.substr(4)+",",",")
DataBase.setDataBase("차단",bt);
}
}
if(msg == "/저격 부들" && room != "테템"){
DataBase.setDataBase("차단",DataBase.getDataBase("차단")+","+sender+",")
replier.reply("[System] 저격대상이 봇 주인(부들)임을 감지하였습니다"+sender+" 님이 자동차단 되었습니다.")
}
/*
if(msg.indexOf("/저격") !=-1 && room != "테템"){
var hit = Math.floor(Math.random() * 5);
if(hit == 0){
send("철컥")
send("쿵")
send("쾅!!!!!!!!!")
send("쾅!!!!!!!!!!!!!!!!!!!!!!")
send("[System] "+ msg.substr(4)+ " 님을저격하였습니다. 사지가 찢어졌으며 그사이로 피가 솟구칩니다.")
}
if(msg.indexOf("/저격")!=-1 && msg.substr(4) == "부들")
{
차단.push(sender);
send("[System] 저격대상이 봇 주인임을 감지하였습니다"+sender+" 님이 자동차단 되었습니다.")
차단.pop("부들");
}
else if(hit == 1){
차단.push(sender);
send("[System] 총을 거꾸로 들고 자신에게 쐈습니다 "+sender+" 님이 자동차단되었습니다.")
}
else if(hit == 2){
send("철컥")
send("쿵")
send("쾅!!!!!!!!!")
send("쾅!!!!!!!!!!!!!!!!!!!!!!")
send("[System] "+ msg.substr(4)+ " 님을저격하였습니다 배에 구멍이뚤렸으며 그사이로 내장이 터져나옵니다.")
}
else if(hit == 3){
send("철컥")
send("쿵")
send("쾅!!!!!!!!!")
send("쾅!!!!!!!!!!!!!!!!!!!!!!")
send("[System] "+ msg.substr(4)+ " 님을저격하였습니다. 총알이 손가락을 스쳐갔습니다 손으로 벌려보니 뼈가 드러나있습니다")
}
else if(hit == 4){
send("철컥")
send("쿵")
send("쾅!!!!!!!!!")
send("쾅!!!!!!!!!!!!!!!!!!!!!!")
send("[System] "+ msg.substr(4)+ " 님을저격하였습니다. 총알이 빗나갔습니다!")
}
}
*/



if(msg.indexOf("/도배횟수") != -1 && DG("관리자").indexOf(profile)!=-1)
{
dcount = msg.substr(6);
send("횟수 세팅완료.")
}
if(msg.indexOf("/도배문장") != -1 && DG("관리자").indexOf(profile)!=-1)
{
dc = msg.substr(6);
send("도배문장 세팅완료.")
}
if(msg.indexOf("/도배시작") != -1 && DG("관리자").indexOf(profile)!=-1)
{
var i = 0; while (i<dcount) { replier.reply(dc);
i++;
 }
}
if(msg.indexOf("/렉코드시작") != -1 && DG("관리자").indexOf(profile)!=-1)
{
var i = 0; while (i<dcount) { replier.reply(DG("렉코드"));
i++;
 }
}

        if(msg.indexOf("/롤전적") == 0)  {
        try {//예외처리
        msg = msg.replace(/ /g,"+");
        var u = Utils.getWebText("http://www.op.gg/summoner/userName="+msg.substr(4));
        var t = u.split("<span class=\"tierRank\">");
        var w = u.split("<span class=\"wins\">");
        var l = u.split("<span class=\"losses\">");
        var win = u.split("<span class=\"winratio\">");
        send("[System]" +msg.substr(5) + "님의 롤 전적 검색결과 입니다\n티어 : " + t[1].split("<")[0]+ "\n승리 : " + w[1].split("<")[0] +"\n패배 : " + l[1].split("<")[0] +"\n승률 : " + win[1].split("<")[0]);

      }    catch(e) {//결과값을 찾을수 없으면
      send("[System]롤전적 정보가 없습니다");
  }
}

if(msg.indexOf("/주인호출") != -1)
{
replier.reply("주인 호출 완료.\n(주인님이 확인하지 않으시면 씹히는경우도 있습니다)")
Api.replyRoom("부들", sender+" 님이 주인님을 호출하셨어요~")
}

if(msg.indexOf("/업앤다운") == 0 && ud == false)
{
    msg = msg.substring(6);
        {         
           if(msg < 1)
            {
            send("[System] 범위는 1 이상부터 가능합니다.");
            }
            
            if(msg > 1)
            {
            send ("[System] \n업앤다운 게임을 시작합니다!\n숫자는 1~" + msg + "중에 랜덤입니다.\n(예시 : ~숫자)");
            uad = Math.floor(Math.random()*msg) + 1;
            ud = true;
            } 
        }
    }  

if(msg.indexOf("/업앤다운") != -1 && ud == true)
{
send("이미 게임이 진행중입니다!")
}
    if(ud == true && msg.indexOf('~') == 0)
    {
        if(msg.split('~') [1] == uad)
        {
        send("[System]\n" +sender + "님이 정답을 맞추셨습니다!");
        send("게임이 종료됩니다.");
        ud = 0;
        }
        else if(msg.split('~') [1] > uad)
        {
        send("다운");
        }
        else if(msg.split('~') [1] < uad)
        {
        send("업"); 
        }
    }

if(msg == "#업앤다운 답" && sender == "부들")
{
send(uad);
}




	

	
	if(msg == "/관리자목록") {
	send(주인.join("\n"));
	}


if(msg.split(" ")[0] == "/약수"){
l=msg.substr(4);
if(l.length<=4){
var aa=1;
var rty = [];
while(aa<=l){
  var h = (l)/aa;
  aa++;
  if(h == Math.floor(h)){
  rty.push(Math.floor(h))
  }
  }
   if(h == Math.floor(h)){
    send("[System] 약수는 "+rty+"입니다.");
    }
    }
}



if(msg == "/재부팅" && DG("관리자").indexOf(profile)!=-1)
{
var allcount = allroom.length;
   var i = 0;
   while(i < allcount+1){
   	replier.reply(allroom[i],"[System] 관리자님이 봇을 재부팅하여 자동 공지되었습니다.")
   	i++;
   }
Api.reload()
}
if(msg == "/쉿부팅" && DG("관리자").indexOf(profile) !=-1){
	replier.reply("공지를 전송 안하고 조용히 재부팅하였습니다!")
	Api.reload()
	}



    
    if (msg.indexOf("!번역") == 0) {
            var a = msg.split(" ")[1];
            var b = msg.split(" ")[2];
            var c = msg.split(" ")[3];
            send("[System]\n(" + Api.translate(a, b, c, true) +")");
        }
        
        if(msg == "/공지" && room == "테라리아 채팅방"){
        replier.reply("입장 후 20분간 질문 금지입니다.\n카페가입은 선택이아닌 필수입니다.\n카페규칙을 안읽을시 불이익이 생길수 있습니다.\n카페규칙\nhttp://cafe.naver.com/krterraria/29")
}
        
        if(msg.indexOf("https://open.kakao.com")!=-1 && room=="테라리아 채팅방"){
        	var hour = Date().slice(16, 18);
        var minute = Date().slice(19, 21);
        var smsg = "시간\n";
        var nu = [
            ["111", "101", "101", "101", "111"],
            ["001", "001", "001", "001", "001"],
            ["111", "001", "111", "100", "111"],
            ["111", "001", "111", "001", "111"],
            ["101", "101", "111", "001", "001"],
            ["111", "100", "111", "001", "111"],
            ["111", "100", "111", "101", "111"],
            ["111", "101", "101", "001", "001"],
            ["111", "101", "111", "101", "111"],
            ["111", "101", "111", "001", "001"]
        ];
        var middle = "01010";
        for (var i = 0; i < 5; i++) {
            smsg += nu[hour[0]][i] + "  " + nu[hour[1]][i] + "  " + middle[i] + "  " + nu[minute[0]][i] + "  " + nu[minute[1]][i] + "\n";
        }
        
        	replier.reply("카카오 오픈채팅 홍보가 감지되었습니다 관리자에게 로그를 전송하였습니다.")
            replier.reply("보들","내용: "+msg+"\n대상자: "+sender+"\n발생일시: "+smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1))
            }
            /*
            if(msg == "/퀴즈 초기화" && DG("관리자").indexOf(profile)!=-1){
            	trquiz={};
            replier.reply("완료.")
            }
            */
            if(msg.indexOf("/퀴즈참여자 ")!=-1 &&DG("관리자").indexOf(profile)!=-1){
            	msg = msg.replace("/퀴즈참여자 ","");
            trquiz[msg] =0;
            replier.reply("추가완료.")
            }
            if(msg.indexOf("/퀴즈점수 ")!=-1&&DG("관리자").indexOf(profile)!=-1){
            msg = msg.replace("/퀴즈점수 ","");
	trquiz[msg.split("/")[0]] = Number(trquiz[msg.split("/")[0]])+Number(msg.split("/")[1]);
	replier.reply("중도 참여 가능합니다 퀴즈 도중에 자연스럽게 끼시면 됩니다.\n\n"+trquiz.toSource().replace(/, /g,"\n").replace("{","").replace("}","").replace("(","").replace(")",""))
        }
if(msg.split(" ")[0] == "/배그전적")
{
send("[System] 당신이 검색하신 유저의 배틀그라운드 전적을 불러왔어요")
send("https://dak.gg/profile/" + encodeURI(msg.substr(4)));
    }

if(msg == "/규칙" && room == "테템")
{
replier.reply(" (필독)규칙!\n1.욕설,도배,비하,타게임&타bj,홍보,잠수,구걸X(비난&조롱시 경고)\n2.홍보는 신고&강퇴\n3.치트,복돌,버그,멀티시 테러X 기부시 방장.부방에게 허락맡기 경고없이 바로 강퇴\n4.경고는최대3번")
}
if(msg == "규칙 보여줘" && room == "테템")
{
replier.reply(" (필독)규칙!\n1.욕설,도배,비하,타게임&타bj,홍보,잠수,구걸X(비난&조롱시 경고)\n2.홍보는 신고&강퇴\n3.치트,복돌,버그,멀티시 테러X 기부시 방장.부방에게 허락맡기 경고없이 바로 강퇴\n4.경고는최대3번")
}

if(msg.indexOf("닥쳐")!=-1 && sto == true)
{
replier.reply("[System] 갑자기요..? ㅠㅠ")
}
if(msg.indexOf("죽어")!=-1 && sto == true)
{
replier.reply("[System] ㅠㅠ 그럴순없어요..")
}
if(msg.indexOf("시끄러")!=-1 && sto == true)
{
replier.reply("[System] 에?")
}
if(msg.indexOf("주인 누구")!=-1 && sto == true)
{
replier.reply("[System] 제 주인은 부들님이에요!")
}
if(msg.indexOf("자살 하고")!=-1 && sto == true)
{
replier.reply("[System] 힘내세요 ㅠㅠ")
}

if(msg.indexOf("/스팀")==0){
	try{
	msg = msg.replace("/스팀 ","");
	url1= Utils.getWebText("https://store.steampowered.com/search/?term="+encodeURI(msg)).split('data-ds-appid="')[1].split('"')[0];
url2= Utils.getWebText("https://store.steampowered.com/app/"+url1+"/").replace(/(<([^>]+)>)/g, "").split("Buy ")[1].split("Add")[0].replace(/ /g,"").replace(/\n\n/,"").trim();
replier.reply(msg+"(이)라는 스팀게임의 가격을 가져왔어요!\n\n"+url2)
}catch(e){
	replier.reply("검색결과가 없습니다.")
	}
	}

if(msg.indexOf("/웹툰")==0){
	msg = msg.substr(4);
	replier.reply("웹툰 "+msg+"(을)를 검색했어요!")
	replier.reply("https://comic.naver.com/search.nhn?keyword="+encodeURI(msg))
}

try{
if(msg.indexOf("/나무위키")==0){
	msg = msg.replace("/나무위키 ","");
a = Utils.getWebText("https://namu.wiki/w/"+encodeURI(msg)).replace(/(<([^>]+)>)/g, "").split("1. 개요[편집]")[1].split("이 저작물은")[0].trim();
st = Utils.getWebText("https://namu.wiki/w/"+encodeURI(msg)).replace(/(<([^>]+)>)/g, "").split("1. 개요[편집]")[1].split(".")[0];
//요약
replier.reply(msg+"(을)를 검색해봤어요!")
replier.reply("전체보기를 눌러주세요.\n"+String.fromCharCode(8237).repeat(501)+"\nhttps://namu.wiki/w/"+encodeURI(msg)+"\n■요약 "+st+"\n\n□내용\n\n"+a)
}
}catch(e){
	replier.reply("검색결과를 찾을수 없거나 오류가 발생하였습니다.")
	}
	

    if(msg.match(/\W(\s)나무위키로 검색.*/))
{
msg=msg.replace(/ 나무위키로 검색.*/,"");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://namu.wiki/w/" + encodeURI(msg));
}
    
    if(msg.match(/\W(\s)유튜브로 검색.*/))
{
msg=msg.replace(/ 유튜브로 검색.*/,"");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.youtube.com/results?search_query=" + encodeURI(msg));
}
    
    if(msg.match(/\W(\s)다나와로 검색.*/))
{
if(sto == true){
msg=msg.replace(/ 다나와로 검색.*/,"");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("http://search.danawa.com/mobile/dsearch.php?keyword=" + encodeURI(msg));
}
}
    
if(msg.match(/\W(\s)구글로 검색.*/))
{
if(sto == true)
{
msg=msg.replace(/ 구글로 검색.*/,"");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.google.com/search?source=hp&ei=H691Wo-XNIi50gSR1ZxA&q=" + encodeURI(msg));
}
}
if(msg.match(/\W(\s)네이버로 검색.*/))
{
if(sto == true)
{
msg=msg.replace(/ 네이버로 검색.*/,"");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://search.naver.com/search.naver?ie=&sm=whl_hty&query=" + encodeURI(msg));
}
}
if(msg.match(/(.+?)(\s*)[이|가] 뭔뜻이야.*/)!=null)
{
if(sto == true)
{
msg=msg.match(/(.+?)(\s*)[이|가] 뭔뜻이야.*/)[1];
var a=Utils.getWebText("http:\/\/stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg));
var b=a.split("<span class=\"tb12\">");
if(Number(b[1].split("<")[0].split("(")[1].split("건")[0])!=0)
{
send("[System] 사전에서 찾아봤어요!")
send("■"+msg+" 검색결과■͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n"+Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)).split("<span id=\"print_area\">")[1].split("<!-- paging.jsp -->")[0].replace(/<(.+?)>/gi, "").replace(/&nbsp;/g,"\n"));
}
else if(!Number(b)){
replier.reply("에러.")
replier.reply("검색결과가 없음.");
}
}
}
if(msg.indexOf("소스 만들")!=-1 &&sender == "보들")
{
ss = true;
replier.reply("[System] 무엇을 무엇으로 대답하게 하면될까요?")
}
if(msg.indexOf(">")!=-1 && sender == "보들" && ss == true)
{
ms1 = msg.split(">")[0];
ms2 = msg.split(">")[1];
replier.reply("[System] "+ms1+" 이라고 했을때 "+ms2+" 라고 반응하도록 소스를 생성할게요!")
replier.reply("소스 생성중")
java.lang.Thread.sleep(1000);
replier.reply("function response(room, msg, sender, isGroupChat, replier, imageDB) {\nmsg = msg.trim();\nif(msg == \""+ms1+"\"){\nreplier.reply(\""+ms2+"\")\n}\n}")
ms1 = "";
ms2 = "";
ss = false;
}
    if (msg.indexOf("/확성기") == 0) {
        send("[System]확성기\n☆☆☆☆☆☆☆☆☆☆☆\n"+msg.substr(5)+"\n☆☆☆☆☆☆☆☆☆☆☆");
    }

    if (msg.indexOf("/고급확성기") == 0) {
    if(DG("관리자").indexOf(profile)!=-1)
    {
        send("[System]확성기\n☆☆☆☆☆☆☆☆☆☆☆\n☆☆☆☆☆☆☆☆☆☆☆\n■"+msg.substr(7)+"■\n☆☆☆☆☆☆☆☆☆☆☆\n☆☆☆☆☆☆☆☆☆☆☆");
    }
}
    if (msg.indexOf("사진 찾아 줄래?") == 0) {
        send("[System]당신이 원하는 사진을 검색해보았어요")
        send("https://m.search.naver.com/search.naver?where=m_image&sm=mtb_jum&query=" + encodeURI(msg.substr(10)));
    }
if (msg.indexOf("사진 찾아줘") == 0) {
        send("[System]당신이 원하는 사진을 검색해보았어요")
        send("https://m.search.naver.com/search.naver?where=m_image&sm=mtb_jum&query=" + encodeURI(msg.substr(7)));
    }
    if(msg.indexOf("시간 알려줘") == 0)
    {
        var hour = Date().slice(16, 18);
        var minute = Date().slice(19, 21);
        var smsg = "시간\n";
        var nu = [
            ["111", "101", "101", "101", "111"],
            ["001", "001", "001", "001", "001"],
            ["111", "001", "111", "100", "111"],
            ["111", "001", "111", "001", "111"],
            ["101", "101", "111", "001", "001"],
            ["111", "100", "111", "001", "111"],
            ["111", "100", "111", "101", "111"],
            ["111", "101", "101", "001", "001"],
            ["111", "101", "111", "101", "111"],
            ["111", "101", "111", "001", "001"]
        ];
        var middle = "01010";
        for (var i = 0; i < 5; i++) {
            smsg += nu[hour[0]][i] + "  " + nu[hour[1]][i] + "  " + middle[i] + "  " + nu[minute[0]][i] + "  " + nu[minute[1]][i] + "\n";
        }
        send(smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1));
    }
    
    /*
    if(msg.indexOf("몇시지") ==0)
    {
        var hour = Date().slice(16, 18);
        var minute = Date().slice(19, 21);
            var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1);
            var date = dt.getDate();
            var minutes = dt.getMinutes();
            var seconds = dt.getSeconds();
            var millisecs = dt.getMilliseconds();
            var day = dt.getDay();
            var week = new Array('일', '월', '화', '수', '목', '금', '토');
            var w1 = "월●  화○  수○  목○  금○  토○  일○";
            var w2 = "월○  화●  수○  목○  금○  토○  일○";
            var w3 = "월○  화○  수●  목○  금○  토○  일○";
            var w4 = "월○  화○  수○  목●  금○  토○  일○";
            var w5 = "월○  화○  수○  목○  금●  토○  일○";
            var w6 = "월○  화○  수○  목○  금○  토●  일○";
            var w7 = "월○  화○  수○  목○  금○  토○  일●";
        var num = [
            ["111", "101", "101", "101", "111"],
            ["001", "001", "001", "001", "001"],
            ["111", "001", "111", "100", "111"],
            ["111", "001", "111", "001", "111"],
            ["101", "101", "111", "001", "001"],
            ["111", "100", "111", "001", "111"],
            ["111", "100", "111", "101", "111"],
            ["111", "101", "101", "001", "001"],
            ["111", "101", "111", "101", "111"],
            ["111", "101", "111", "001", "001"]
        ];
        var middle = "01010";
        for (var i = 0; i < 4; i++) {
        	
            smsg = num[hour[0]][i] + "  " + num[hour[1]][i] + "  " + middle[i] + "  " + num[minute[0]][i] + "  " + num[minute[1]][i] + "\n";
        }
        
        if(dt.getDay() == 1){
        	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
            send(year+"/"+month+"/"+date+"\n"+w1+"\n"+repsmsg);
    }
    else if(dt.getDay() == 2){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
            send(year+"/"+month+"/"+date+"\n"+w2+"\n"+repsmsg);
    }
    else if(dt.getDay() == 3){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
send(year+"/"+month+"/"+date+"\n"+w3+"\n"+repsmsg);
    }
    else if(dt.getDay() == 4){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
            send(year+"/"+month+"/"+date+"\n"+w4+"\n"+repsmsg);
    }
    else if(dt.getDay() == 5){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
            send(year+"/"+month+"/"+date+"\n"+w5+"\n"+repsmsg);
    }
    else if(dt.getDay() == 6){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
                send(year+"/"+month+"/"+date+"\n"+ w6+"\n"+repsmsg);
                }
    else if(dt.getDay() == 7){
    	repsmsg =smsg.replace(/0/gi, "▓").replace(/1/gi, "█").slice(0, -1);
            send(year+"/"+month+"/"+date+"\n"+w7+"\n"+repsmsg);
            }
            }
            
            */
    if(msg.indexOf("/인코딩") ==0)
    {
uh = ls;
replier.reply(encodeURI(msg.substr(5)))
}
if(msg.indexOf("/디코딩") ==0)
{
bh = ls;
replier.reply(decodeURI(msg.substr(5)))
    }
    
    if(msg == "암호화 잘라")
    {
    uh.replace(/[System] .*/,"");
    replier.reply(uh)
    }
    if(msg == "복호화 잘라")
    {
    bh.replace(/[System] .*/,"");
    replier.reply(bh)
    }
    
    /*
    if (msg.split(' ')[0] == '/계산') {
        if (msg.split(' ')[1].includes('+')) {
            var num1 = parseInt(msg.split(' ')[1].split('+')[0]);
            var num2 = parseInt(msg.split(' ')[1].split('+')[1]);
            send("[System]계산결과를 구했어요")
            send(num1 + num2);
        } else if (msg.split(' ')[1].includes('-')) {
            var num1 = msg.split(' ')[1].split('-')[0] + 0;
            var num2 = msg.split(' ')[1].split('-')[1] + 0;
            send("[System]계산결과를 구했어요")
            send(num1 - num2);
        } else if (msg.split(' ')[1].includes('/')) {
            var num1 = msg.split(' ')[1].split('/')[0] + 0;
            var num2 = msg.split(' ')[1].split('/')[1] + 0;
            send("[System]계산결과를 구했어요")
            send(num1 / num2);
        } else if (msg.split(' ')[1].includes('*')) {
            var num1 = msg.split(' ')[1].split('*')[0];
            var num2 = msg.split(' ')[1].split('*')[1];
            send("[System]계산결과를 구했어요")
            send(num1 * num2);
        } else{
            send('계산할 내용이 없습니다!');
    }
    }
    */
    if (msg.indexOf("현재 날씨 찾아줘") != -1) {
        var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨");
        var data2 = data.split("전국날씨</strong>");
        var data3 = data2[1].split("특보");
        var data4 = data3[0].replace(/(<([^>]+)>)/g, "");
        data4 = data4.trim();
        data4 = data4.replace(/  /g, "");
        data4 = data4.replace(/도씨/g, "℃");
        data4 = data4.replace(/ /g, ", ");
        send("[System]현재 날씨를 찾아보았어요\n" + data4);
    }
    


    
function naver() {
var naverString = Utils.getWebText("https://m.naver.com").split("oRTK :")[1].split("oHTP")[0];
naverString = naverString.substring(0, naverString.length-2);
var naverJson = JSON.parse(naverString);
var naverArr = naverJson.d;
var naverOutput = "";
for(var i=0; i<20; i++)
   {
   naverOutput += (i + 1) + ". " + naverArr[i].k + ""+(naverArr[i].n==0?"":(naverArr[i].a=="상승"?"▲ "+naverArr[i].n:"▼ "+naverArr[i].n))+"\n";
   }
return naverJson.s + "기준\n"+naverOutput;
}
if(msg=="/실검") {

replier.reply("[System] 실시간 검색어를 찾아왔어요! 전체보기를 눌러주세요\n"+String.fromCharCode(8237).repeat(501)+"\n"+naver());
}
        if (msg.trim() == "/시공") {
            send("시     공                        공\n\                 의                 의\n\                    폭          폭\n\        의   폭   풍 풍 풍             시 \n\  공             풍 ★ 풍             공\n\시              풍 풍 풍  폭   의\n\            폭             폭\n\        의                    의\n\        공                         공     시\n\          시");
        }
        if (msg.indexOf("/외국날씨") == 0) {
            var a = removeTag(Utils.getWebText("https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query=%EB%82%A0%EC%94%A8+" + encodeURI(msg.substr(6))).split("<span class=\"u_hc\">")[3]).replace(/  /g, "");
            send(a.trim().split("\n").join("         ").trim().replace("                                        ", "\n").replace("          ", "\n").replace("00", "오전 0시").replace("03", "오전 3시").replace("06", "오전 6시").replace("09", "오전 9시").replace("12", "오후 12시").replace("15", "오후 3시").replace("18", "오후 6시").replace("21", "오후 9시").replace(/                                                                                                                  /g, "\n").replace(/                   /g, " ").replace(/           /g, " ").replace(/  /g, "\n").replace("현재온도", "현재온도: ").trim());
        }
var Data = msg.split(" ");
    if (msg.indexOf("/따라하기" )==0) {
    	if (msg.split ("/따라하기").length-1 ==1){
        send(msg.replace("/따라하기 ", ""));
    }
      }  
        var time = 0;
        if (msg.indexOf("/타이머") == 0) {
            try {
                if (isNaN(time)) {
                    send("[System]초는 숫자여야합니다!");
                }
                var input = msg.substr(5);
                input = parseInt(input)
                time += input * 1000;
                send(sender + "님이 " + input + "초로 세팅하셨습니다.");
                java.lang.Thread.sleep(time);
                
            } finally {
                send(sender + "님이 설정하신 타이머가 끝났습니다");
            }
        }
        if (msg.indexOf("/채팅청소") == 0&& DG("관리자").indexOf(profile)!=-1) {
            var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1);
            var date = dt.getDate();
            var hour = dt.getHours();
            var minutes = dt.getMinutes();
            var seconds = dt.getSeconds();
            var millisecs = dt.getMilliseconds();
            var day = dt.getDay();
            var week = new Array('일', '월', '화', '수', '목', '금', '토');
            replier.reply("채팅청소중.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + year + '년 ' + month + '월 ' + date + '일 '+ week[dt.getDay()] +"\n" + hour + '시 ' + minutes + '분 ' + seconds + "." + millisecs + "초 관리자님에 의해 채팅청소되었습니다.");
        }
        if(msg == "/사전 *"){
        	replier.reply("거부")
        }
        if(msg.indexOf("/사전")==0)
{
var a=Utils.getWebText("http:\/\/stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg.trim().substr(4)));
var b=a.split("<span class=\"tb12\">");
if(Number(b[1].split("<")[0].split("(")[1].split("건")[0])!=0)
{
	var result = Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg.substr(4))).split("<span id=\"print_area\">")[1].split("<!-- paging.jsp -->")[0].replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g,"\n").replace(/\n\n/g,"").trim();
	if(result.match(/\n/g).length<5){
send("[System] 사전에서 찾아봤어요!")
send("《"+msg.substr(4)+"검색》["+b[1].split("<")[0].split("(")[1].split("건")[0]+"건]\n"+result);
}
if(result.match(/\n/g).length>=7){
	replier.reply("[System] 사전에서 찾아봤어요!")
send("《"+msg.substr(4)+" 검색》["+b[1].split("<")[0].split("(")[1].split("건")[0]+"건]\n"+String.fromCharCode(8237).repeat(501)+"\n"+result);

}
}
else if(!Number(b)){
replier.reply("검색결과가 없습니다.");
}
}



        if(msg.indexOf("/명사")==0)
{
var a=Utils.getWebText("http:\/\/stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg)+"&SpCode=1").split("<span class=\"tb12\">");
if(Number(b[1].split("<")[0].split("(")[1].split("건")[0])!=0)
{
send("[System] 사전에서 명사만 찾아봤어요!")
send("《"+msg+" 검색》͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n"+Utils.getWebText("http://stdweb2.korean.go.kr/search/List_dic.jsp?PageRow=100&Table=words%7Cword&Gubun=0&SearchPart=Simple&SearchText="+encodeURI(msg.substr(4))).split("<span id=\"print_area\">")[1].split("<!-- paging.jsp -->")[0].replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g,"\n"));
}
else if(!Number(b)){
replier.reply("에러.")
replier.reply("검색결과가 없음.");
}
}


if(msg == "/특수문자")
{
replier.reply("[System] 공백문자입니다.")
replier.reply("͏")
replier.reply("[System] 반전문자입니다.")
replier.reply(DG("반전문자"))
}
if(msg == "!@#")
{
DS("프로필","");
DS("프로필",java.lang.String(imageDB.getProfileImage()).hashCode());
replier.reply("[System] 프로필 세팅을 완료하였습니다.")
}

if(msg == "프로필인증"&&DG("관리자").indexOf(profile)!=-1)
{
replier.reply("[System] 프로필인증성공")
}
else if(msg == "프로필인증"&&DG("관리자") != profile)
{
replier.reply("[System] 관리자의 프로필이 일치하지 않습니다.")
}


/*
if(msg.indexOf("가 뭐임")!=-1)
{
msg= msg.replace("가 뭐임","");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.google.com/search?source=hp&ei=H691Wo-XNIi50gSR1ZxA&q=" + encodeURI(msg));
}

if(msg.indexOf("이 뭐임")!=-1)
{
msg= msg.replace("이 뭐임","");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.google.com/search?source=hp&ei=H691Wo-XNIi50gSR1ZxA&q=" + encodeURI(msg));
}

if(msg.indexOf("가 뭐지")!=-1)
{
msg= msg.replace("가 뭐지","");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.google.com/search?source=hp&ei=H691Wo-XNIi50gSR1ZxA&q=" + encodeURI(msg));
}

if(msg.indexOf("이 뭐지")!=-1)
{
msg= msg.replace("이 뭐지","");
replier.reply("[System] 당신이 원하는 내용을 찾아보았어요!")
send("https://www.google.com/search?source=hp&ei=H691Wo-XNIi50gSR1ZxA&q=" + encodeURI(msg));
}
*/
if(msg.indexOf("시간표 보여줘") !=-1)
{
replier.reply("[System] 최근 등록된 시간표를 출력합니다.\n"+시간표.join("\n"))
}

if(msg.indexOf("시간표 초기화해줘") !=-1 && DG("관리자").indexOf(profile)!=-1)
{
시간표 = [];
replier.reply("[System] 관리자님. 시간표가 초기화되었습니다!")
}
if(msg.indexOf("/시간표추가")!=-1 && DG("관리자").indexOf(profile)!=-1)
{
var sgp = msg.substr(7);
시간표.push(sgp);
replier.reply("[System] 시간표 "+sgp+"가 등록되었습니다!")
}

        // 현재시간
        if (msg.indexOf("지금시간") != -1) {
            var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1);
            var date = dt.getDate();
            var hour = dt.getHours();
            var minutes = dt.getMinutes();
            var seconds = dt.getSeconds();
            var millisecs = dt.getMilliseconds();
            var day = dt.getDay();
            var week = new Array('일', '월', '화', '수', '목', '금', '토');
            send("현재시간은 " + year + '년 ' + month + '월 ' + date + '일 ' +
                "(" + week[dt.getDay()] + ")\n" + hour + '시 ' + minutes + '분 ' + seconds + "." + millisecs + "초입니다.");
        }
        /*
        if (msg.indexOf("/가사") == 0) {
            try {
                var u = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + encodeURI(msg.substr(4)));
                u = u.replace(/   /g, "");
                u = u.replace(/<br>/g, "");
                u = u.replace(/<mark>/g, "");
                u = u.replace(/<\/mark>/g, "");
                var a = u.split("<div class=\"lyrics_txt\">");
                var b = u.split("<strong class=\"tit\">");
                var c = u.split("<span class=\"name\">");
                send(msg.substr(4) + "의 검색결과 입니다 전체보기를 눌러주세요\n"+String.fromCharCode(8237).repeat(501)+"\n가수:" + c[2].split("<")[0] + "\n제목:" + c[1].split("<")[0] + "\n가사정보:\n" + a[1].split("<")[0]);
  
            } catch (e) {
                replier.reply("가사 정보가 없습니다.");
              
            }
        }
*/
if(msg.indexOf("/번역")==0) {
try{
    var lang = {"한국어":"ko","영어":"en","중국어간체":"zh-CN","중국어번체":"zh-TW","일본어":"ja","스페인어":"es","프랑스어":"fr","인도네시아어":"id","태국어":"th","베트남어":"vi"};//lang이라는 객체
    msg = msg.replace("/번역 ","");
    var a = msg.split(" ")[1];
    replier.reply(Api.papagoTranslate(lang[msg.split(" ")[0]], lang[msg.split(" ")[1]], a));
    }catch(e){
    	replier.reply("번역사용법이 잘못되셨거나 오류가 발생하였습니다.\n"+e)
   }
   }
if(msg.indexOf("/번역목록") != -1)
{
send("[System] 번역이 가능한 목록 입니다! \n한국어/영어/중국어간체/중국어번체/일본어/스페인어/프랑스어/인도네시아어/태국어/베트남어")
}
/*
        if (msg.trim() == "/봇정보")
{
            try {
                var fill = ["알수없음", "충전중", "충전중 아님", "충전완료 후 충전중 아님", "충전 완료"];
                var heal = ["알수없음", "좋음", "과열", "불량", "과전압", "불특정 실패", "저온"];
                var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
                var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
                var battery = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_STATUS, -1);
                var voltage = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_VOLTAGE, -1);
                var health = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_HEALTH, -1);
                var level = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                var scale = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                var am = Api.getContext().getSystemService(Api.getContext().ACTIVITY_SERVICE);
                var mem = new android.app.ActivityManager.MemoryInfo();
                am.getMemoryInfo(mem);
                var temp = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_TEMPERATURE, -1);
                var ms1 = java.lang.System.currentTimeMillis();
                if(study == true){
                	stupower = "켜짐";
                }
                if(study == false){
                	stupower = "꺼짐";
                }
                
                send("로딩중...");
                var ms2 = java.lang.System.currentTimeMillis();
                var ps = (((ms2 - ms1) / 1000) + "초");
                send(" 전원 : 켜짐\nRpg서버:"+DG("rpg")+"\n자동학습:"+stupower+"\n속도 : " + ps + "\n현재상태 : " + fill[battery - 1] + "\n성능 : " + heal[health - 1] + "\n램 : " + (mem.availMem / mem.totalMem * 100).toFixed(2) + "% 남음\n배터리 : " + Math.round(level / scale * 100) + "%\n온도 : " + Math.round(temp) / 10 + "°C\n전압 : " + voltage + "mv")
            } catch (e) {
                send(e);
            }
    }
*/


/*도배 방지*/
    if (preChat[room] == msg) return; //동일한 채팅이 두 번 이상 연속으로 수신되면, 가볍게 무시
    preChat[room] = msg;
    
    
 try {
if (msg =="/db"){
	rdb=DB.readData(room).split("\n").length-1;
		replier.reply("이 방에서 학습한 Database는 총 "+rdb+"개 입니다.")
		}
}catch (e){
			replier.reply ("이방에서 학습한 데이터가 없거나 오류가 발생했습니다.")
			}
			

    /*
if (msg.indexOf ("/학습 ")==0&&DG ("프로필").indexOf(profile)!=-1){
	msg = msg.replace ("/학습 ","");
	sroom = msg.split(":")[0];
sstudy = msg.split (":")[1];
*/	
    /*반응 안할 채팅들*/
    var noReply = [".", "사진을 보냈습니다.", "동영상을 보냈습니다.", "음성메시지", "카카오톡 프로필", "이모티콘을 보냈습니다.", "카카오링크 이미지를 보냈습니다."];
    for (var n = 0; n < noReply.length; n++) {
        if (msg == noReply[n]) return;
    }

    /*1:1 채팅방은 chatHook에서 따로 처리*/
    /*
    if (!isGroupChat) {
        chatHook(room, msg, sender, replier);
        return;
    }
    */
/*적당한 채팅 하나 가져와서 답장(?)하는 부분*/
/*
    var chat = Merisia.getReply(room, msg);
    sayran1=3;
    sayran2=5;
    
    if (Math.floor(Math.random() * stusay) ==0&&room!="Day R Survival 오픈채팅") { 
    if (chat != null&&DG("학습대답방").indexOf(room)!=-1) replier.reply ("[Auto] "+chat)
}

else {
    
    
if (Math.floor(Math.random() * stusay) ==0&&room=="Day R Survival 오픈채팅") { 
    if (chat != null&&DG("학습대답방").indexOf(room)!=-1) replier.reply ("[Auto] "+chat)
}
  
}  
*/
if (msg.indexOf ("스템아")!=-1){
	saycool [room] = new Date ().getTime ();
	}
	
        
    /*채팅을 학습하는 부분*/
    /*
    if (Merisia.isValidData(msg)) { //배울 만한 채팅인 경우,
        var data = DB.readData(room); //배운 채팅 목록을 가져옴
        if (data == null) { //이미 배운게 있다면
            DB.saveData(room, msg); //새로 저장
        } else { //아니면,
            if (lastSender[room] == sender) { //같은 사람이 연속으로 채팅을 한 경우,
                DB.saveData(room, data + " " + msg); //같은 채팅으로 분류
            } else { //아니면,
                DB.saveData(room, data + "\n" + msg); //다른 채팅으로 분류
            }
        }
    }
    lastSender[room] = sender;

*/
/*1:1 채팅방용*/
/*
function chatHook(room, msg, sender, replier) {
    if (Math.floor(Math.random() * 3) != 0) { //2/3 확률로 반응
        var result = []; //비슷한 말들이 들어갈 배열
        for (var n = 0; n < chatData.length - 1; n++) { //저장된 채팅들 중 비슷하다 싶은 녀석들을 배열에 넣을건데,
            if (Merisia.checkWord(chatData[n], msg) > 0) { //귀찮으니(?), 유사도가 1 이상이면 유사하다고 봄
                result.push(chatData[n + 1]); //배열에 추가
            }
        }
        if (result[0] != null) replier.reply(result[Math.floor(Math.random() * result.length)]); //배열이 빈게 아니라면 아무거나 하나 전송
  }  
}
*/
/*
var folder = new java.io.File(sdcard+"/딥러닝"); //생성할 폴더 위치 및 이름 지정
folder.mkdirs(); //폴더 생성

let save = function(folderName,fileName,str){ //파일 생성 및 쓰기 함수 제작
var c=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
var d=new java.io.FileOutputStream(c);
var e=new java.lang.String(str);
d.write(e.getBytes());
d.close();
}
let read = function(folderName,fileName){ //파일 읽기 함수 제작
var b=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
if(!(b.exists())) return null; //만약 읽을 파일이 없다면 null 변환
var c=new java.io.FileInputStream(b); 
var d=new java.io.InputStreamReader(c);
var e=new java.io.BufferedReader(d);
var f=e.readLine();
var g="";
while((g=e.readLine())!=null){
f+="\n"+g; //\ = 역슬래쉬 → 줄바꿈 표시
}
c.close();
d.close();
e.close();
return f.toString(); //읽은 파일 내용을 반환
}
if(딥러==true && 딥러룸==room)
{
save("딥러닝",딥러닝+".txt",msg)
딥러 = false;
딥러s = new java.io.File("sdcard/딥러닝").list();
}
if(Math.floor(Math.random()* jh)==1)
{
딥러닝 = msg;
딥러 = true;
딥러룸 = room;
}
for(var a = 0; a < 딥러s.length; a++)
{
if(딥러s[a]==msg+".txt"&&Math.floor(Math.random()*hs)==0)
{
if(학습 == true)
{
replier.reply("[System] 자동대화\n "+read("딥러닝",딥러s[a]))
}
}
}
*/

/*
}catch(e){
if(sercurity == true){
if(DG("온오프").indexOf("0")==0 && power == true){
errormsg = e;
DS("오류",e);
DS("온오프","1")
replier.reply("System봇 관리자방","[System] 오류감지\n오류난방:"+room+"\n원인제공한 사람:"+sender+"\n사용한명령어:"+msg+"\n오류내용:"+e.steck)
replier.reply("[System] 봇에 심각한 오류가 감지되었습니다 봇 주인님 자동 호출완료.\n 자동 리로드를 시작합니다.")
Api.reload()
replier.reply("[System] 리로드완료.")
}
else if(DG("온오프").indexOf("1")==0 && power == true){
errormsg = e;
DS("오류",e);
DS("온오프","2")
replier.reply("System봇 관리자방","[System] 오류감지\n오류난방:"+room+"\n원인제공한 사람:"+sender+"\n사용한명령어:"+msg+"\n오류내용:"+e.steck)
replier.reply("[System] 봇에 심각한 오류가 감지되었습니다 봇 주인님 자동 호출완료.\n 자동 리로드를 시작합니다.")
Api.reload()
replier.reply("[System] 리로드완료.")
}
else if(DG("온오프").indexOf("2")==0 && power == true){
errormsg = e;
DS("오류",e);
DS("온오프","0")
power = false;
replier.reply("System봇 관리자방","[System] 봇 오프 자동승인")
replier.reply("[System] 오류가 연속 세번 발생하여 봇 전원이 자동으로 꺼졌습니다 봇을 다시 작동 하려면 관리자를 호출해주세요.")
replier.reply("System봇 관리자방","[System] 오류감지\n오류난방:"+room+"\n원인제공한 사람:"+sender+"\n사용한명령어:"+msg+"\n오류내용:"+e.steck)
replier.reply("[System] 봇이종료됩니다..")
}
}
//봇에서 심각한 오류가 감지되었을때 자동으로 전원Off
*/
}