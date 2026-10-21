// 內建單字庫（CSV 格式，欄位：單字,詞性,中文意思,例句,分類）
// 用 <script> 載入而不是 fetch，這樣直接雙擊 index.html（file://）也讀得到。
// 要新增單字就照格式加一行；例句有逗號時用英文雙引號包起來。
const BUILTIN_CSV = `單字,詞性,中文意思,例句,分類
schedule,n.,行程表；時間表,"Please check the meeting schedule before you leave.",基礎
order,v.,訂購；點餐,"We need to order more paper for the printer.",基礎
deliver,v.,遞送；運送,"The package will be delivered tomorrow morning.",基礎
receipt,n.,收據,"Please keep your receipt in case you want a refund.",基礎
customer,n.,顧客,"The customer asked for a discount on the order.",基礎
department,n.,部門,"She works in the sales department.",基礎
available,adj.,可用的；有空的,"Is the manager available this afternoon?",基礎
office,n.,辦公室,"Our office is on the fifth floor.",基礎
meeting,n.,會議,"The meeting will start at nine o'clock.",基礎
manager,n.,經理,"Please ask the manager for permission.",基礎
employee,n.,員工,"Every employee must wear an ID badge.",基礎
company,n.,公司,"He has worked for the company for ten years.",基礎
price,n.,價格,"The price of the ticket includes lunch.",基礎
discount,n.,折扣,"Members receive a ten percent discount.",基礎
ticket,n.,票,"I bought a train ticket online.",基礎
reservation,n.,預約；訂位,"I have a reservation under the name Chen.",基礎
hotel,n.,飯店,"The hotel is close to the airport.",基礎
flight,n.,班機,"Our flight was delayed because of the weather.",基礎
airport,n.,機場,"Please arrive at the airport two hours early.",基礎
luggage,n.,行李,"You can leave your luggage at the front desk.",基礎
menu,n.,菜單,"The waiter brought us the lunch menu.",基礎
restaurant,n.,餐廳,"Let's meet at the Italian restaurant downtown.",基礎
bill,n.,帳單,"Could we have the bill, please?",基礎
cash,n.,現金,"Do you accept cash or only credit cards?",基礎
payment,n.,款項；支付,"Payment is due at the end of the month.",基礎
address,n.,地址,"Please write your address on this form.",基礎
phone,n.,電話,"She answered the phone at the front desk.",基礎
message,n.,訊息；留言,"Can I take a message for him?",基礎
email,n.,電子郵件,"I will send you an email with the details.",基礎
copy,n.,副本；影本,"Please make a copy of this contract.",基礎
printer,n.,印表機,"The printer on the second floor is out of order.",基礎
document,n.,文件,"Please sign the document at the bottom.",基礎
file,n.,檔案；文件夾,"I saved the file on the shared drive.",基礎
desk,n.,桌子；服務台,"Leave the package on my desk.",基礎
package,n.,包裹,"A package arrived for you this morning.",基礎
mail,n.,郵件,"The mail is usually delivered before noon.",基礎
store,n.,商店,"The store opens at ten on weekends.",基礎
product,n.,產品,"This product is popular with young customers.",基礎
sale,n.,特價；銷售,"All winter coats are on sale this week.",基礎
item,n.,品項；物品,"This item is out of stock.",基礎
size,n.,尺寸,"Do you have this shirt in a larger size?",基礎
return,v.,退還；歸還,"You can return the shoes within 30 days.",基礎
exchange,v.,交換；更換,"Can I exchange this sweater for a smaller one?",基礎
repair,v.,修理,"The technician will repair the copier today.",基礎
rent,v.,租用,"We plan to rent a car at the airport.",基礎
visit,v.,拜訪；參觀,"Many tourists visit the museum every year.",基礎
arrive,v.,抵達,"The guests will arrive at three o'clock.",基礎
leave,v.,離開,"The bus will leave in five minutes.",基礎
open,v.,打開；開業,"The new branch will open next month.",基礎
close,v.,關閉,"The bank closes at 3:30 p.m.",基礎
call,v.,打電話,"Please call me when you get to the station.",基礎
check,v.,檢查；確認,"Please check your email for the confirmation.",基礎
send,v.,寄送,"I will send the documents by express mail.",基礎
sign,v.,簽名,"Please sign here and here.",基礎
pay,v.,付款,"You can pay by credit card.",基礎
buy,v.,購買,"We need to buy new chairs for the lobby.",基礎
sell,v.,販售,"The shop sells handmade furniture.",基礎
change,v.,改變；更改,"We had to change the date of the party.",基礎
cancel,v.,取消,"I'm afraid I have to cancel my appointment.",基礎
appointment,n.,約會；預約,"I have a dentist appointment at four.",基礎
lunch,n.,午餐,"Let's have lunch together on Friday.",基礎
break,n.,休息,"We will take a short break after the presentation.",基礎
parking,n.,停車,"Free parking is available behind the building.",基礎
elevator,n.,電梯,"Take the elevator to the tenth floor.",基礎
floor,n.,樓層；地板,"The restroom is on the second floor.",基礎
building,n.,大樓；建築物,"The building has a large parking lot.",基礎
window,n.,窗戶；窗口,"Please close the window before you leave.",基礎
weather,n.,天氣,"The weather will be sunny tomorrow.",基礎
trip,n.,旅行；出差,"She is on a business trip to Tokyo.",基礎
tour,n.,參觀；導覽,"The factory tour lasts about an hour.",基礎
guest,n.,客人；賓客,"Each guest will receive a welcome gift.",基礎
staff,n.,全體職員,"The hotel staff were very friendly.",基礎
job,n.,工作,"He is looking for a part-time job.",基礎
salary,n.,薪水,"The salary depends on experience.",基礎
holiday,n.,假日；假期,"The office will be closed for the holiday.",基礎
weekend,n.,週末,"Are you working this weekend?",基礎
calendar,n.,行事曆；日曆,"I marked the meeting on my calendar.",基礎
report,n.,報告,"Please finish the report by Friday.",基礎
form,n.,表格,"Fill out this form and return it to the front desk.",基礎
list,n.,清單,"I made a list of things to buy.",基礎
number,n.,號碼；數字,"What is your phone number?",基礎
information,n.,資訊,"For more information, visit our website.",基礎
website,n.,網站,"You can order tickets on our website.",基礎
computer,n.,電腦,"My computer is running very slowly today.",基礎
beverage,n.,飲料,"Hot beverages are served in the lobby.",基礎
free,adj.,免費的,"Admission to the museum is free on Sundays.",基礎
busy,adj.,忙碌的,"The restaurant is very busy at lunchtime.",基礎
early,adj.,早的,"We need an early start tomorrow.",基礎
late,adj.,遲的；晚的,"Sorry, I'm late because of the traffic.",基礎
full,adj.,滿的；完整的,"The parking lot is full.",基礎
ready,adj.,準備好的,"Your order is ready for pickup.",基礎
cheap,adj.,便宜的,"This hotel is cheap but comfortable.",基礎
expensive,adj.,昂貴的,"The new laptop is too expensive for our budget.",基礎
near,prep.,在…附近,"Is there a bank near here?",基礎
ask,v.,詢問；要求,"You can ask the receptionist for directions.",基礎
wait,v.,等待,"Please wait in the lobby.",基礎
lobby,n.,大廳,"Let's meet in the hotel lobby at seven.",基礎
receptionist,n.,接待員,"The receptionist gave me a visitor pass.",基礎
direction,n.,方向；指示,"Can you give me directions to the station?",基礎
station,n.,車站,"The station is a ten-minute walk from here.",基礎
breakfast,n.,早餐,"Breakfast is served from seven to ten.",基礎
dinner,n.,晚餐,"We are having dinner with our clients tonight.",基礎
waiter,n.,服務生,"The waiter recommended the soup of the day.",基礎
dessert,n.,甜點,"Would you like to see the dessert menu?",基礎
dish,n.,菜餚；盤子,"This dish is very popular with tourists.",基礎
kitchen,n.,廚房,"The kitchen is closed after ten p.m.",基礎
recipe,n.,食譜,"She shared her favorite recipe with us.",基礎
taste,v.,品嚐；嘗起來,"This soup tastes a little salty.",基礎
cook,v.,烹飪,"My husband likes to cook on weekends.",基礎
serve,v.,供應（餐點）；服務,"Lunch will be served in the main hall.",基礎
table,n.,桌子,"Please clear the table after the meeting.",基礎
chair,n.,椅子,"There is an empty chair next to me.",基礎
seat,n.,座位,"Please take a seat and wait for your name to be called.",基礎
aisle,n.,走道,"Would you like a window seat or an aisle seat?",基礎
gate,n.,登機門；大門,"Our flight boards at gate 12.",基礎
boarding pass,n.,登機證,"Please show your boarding pass at the gate.",基礎
passport,n.,護照,"Don't forget to bring your passport.",基礎
customs,n.,海關,"It took an hour to go through customs.",基礎
taxi,n.,計程車,"Let's take a taxi to the hotel.",基礎
subway,n.,地鐵,"The subway is the fastest way to get downtown.",基礎
bus stop,n.,公車站,"The bus stop is right in front of the bank.",基礎
traffic,n.,交通；車流,"There is heavy traffic on the highway this morning.",基礎
map,n.,地圖,"Can you show me where we are on the map?",基礎
road,n.,道路,"The road is closed for repairs.",基礎
street,n.,街道,"The bank is on Main Street.",基礎
corner,n.,角落；轉角,"The café is on the corner of Fifth Avenue.",基礎
bridge,n.,橋,"The bridge will be closed this weekend.",基礎
downtown,adv.,在市中心,"Our office is located downtown.",基礎
park,v.,把車停放,"You can park your car behind the building.",基礎
drive,v.,開車,"I drive to work every day.",基礎
ride,v.,搭乘；騎,"Many employees ride their bikes to work.",基礎
walk,v.,走路,"It takes ten minutes to walk to the station.",基礎
cross,v.,穿越,"Be careful when you cross the street.",基礎
turn,v.,轉彎,"Turn left at the next traffic light.",基礎
travel,v.,旅行,"She travels to Japan twice a year.",基礎
vacation,n.,休假；度假,"I'm going on vacation next week.",基礎
souvenir,n.,紀念品,"I bought some souvenirs for my family.",基礎
museum,n.,博物館,"The museum is closed on Mondays.",基礎
gallery,n.,畫廊；美術館,"The gallery is showing works by local artists.",基礎
theater,n.,劇院,"The theater is just across the street.",基礎
concert,n.,音樂會,"We have tickets for the concert on Saturday.",基礎
movie,n.,電影,"Do you want to see a movie tonight?",基礎
show,n.,表演；節目,"The fashion show starts at eight.",基礎
event,n.,活動,"The event will be held in the main hall.",基礎
party,n.,派對,"We're having a party for Jenny's birthday.",基礎
festival,n.,節慶；藝術節,"The music festival takes place every summer.",基礎
gift,n.,禮物,"We bought a gift for our retiring colleague.",基礎
card,n.,卡片,"Please sign the birthday card for Tom.",基礎
shop,n.,小店；店鋪,"There is a flower shop next to the bank.",基礎
cashier,n.,收銀員,"Please pay the cashier at the front.",基礎
counter,n.,櫃檯,"Please leave your keys at the counter.",基礎
shelf,n.,架子,"The books are on the top shelf.",基礎
bag,n.,袋子；包包,"Would you like a paper bag or a plastic bag?",基礎
box,n.,箱子；盒子,"Please put the old files in this box.",基礎
coin,n.,硬幣,"The machine only takes coins.",基礎
credit card,n.,信用卡,"Can I pay with a credit card?",基礎
wallet,n.,錢包,"I left my wallet in the taxi.",基礎
key,n.,鑰匙,"I can't find my car key.",基礎
umbrella,n.,雨傘,"Don't forget your umbrella; it's going to rain.",基礎
coat,n.,外套,"You can hang your coat over there.",基礎
shoe,n.,鞋子,"These shoes are very comfortable.",基礎
shirt,n.,襯衫,"He is wearing a blue shirt today.",基礎
uniform,n.,制服,"All staff must wear a uniform.",基礎
glasses,n.,眼鏡,"She wears glasses for reading.",基礎
clock,n.,時鐘,"The clock in the lobby is five minutes fast.",基礎
minute,n.,分鐘,"The meeting will start in ten minutes.",基礎
hour,n.,小時,"The store is open 24 hours a day.",基礎
week,n.,星期；週,"I will be on vacation next week.",基礎
month,n.,月,"The rent is due at the beginning of each month.",基礎
year,n.,年,"The company was founded ten years ago.",基礎
today,adv.,今天,"Is the bank open today?",基礎
tomorrow,adv.,明天,"The package will arrive tomorrow.",基礎
yesterday,adv.,昨天,"I sent the email yesterday.",基礎
tonight,adv.,今晚,"Are you free tonight?",基礎
soon,adv.,很快；不久,"The bus will arrive soon.",基礎
always,adv.,總是,"She always arrives early.",基礎
usually,adv.,通常,"I usually take the bus to work.",基礎
often,adv.,常常,"We often have lunch together.",基礎
sometimes,adv.,有時候,"Sometimes I work from home.",基礎
never,adv.,從不,"He never misses a meeting.",基礎
again,adv.,再一次,"Could you say that again, please?",基礎
together,adv.,一起,"Let's go to the meeting together.",基礎
here,adv.,這裡,"Please sign here.",基礎
there,adv.,那裡,"I'll meet you there at six.",基礎
upstairs,adv.,在樓上,"The meeting room is upstairs.",基礎
downstairs,adv.,在樓下,"The cafeteria is downstairs.",基礎
outside,adv.,在外面,"Please wait outside the room.",基礎
inside,adv.,在裡面,"It's raining, so let's eat inside.",基礎
nearby,adv.,在附近,"Is there a post office nearby?",基礎
cafeteria,n.,自助餐廳；員工餐廳,"The cafeteria serves hot meals until two.",基礎
restroom,n.,洗手間,"Where is the restroom, please?",基礎
hallway,n.,走廊,"The printer is at the end of the hallway.",基礎
entrance,n.,入口,"Please use the main entrance.",基礎
exit,n.,出口,"The emergency exit is on your right.",基礎
stairs,n.,樓梯,"Please use the stairs during a fire.",基礎
door,n.,門,"Please close the door behind you.",基礎
room,n.,房間,"Your room is on the eighth floor.",基礎
bed,n.,床,"The room has two single beds.",基礎
towel,n.,毛巾,"Could I have some extra towels, please?",基礎
pillow,n.,枕頭,"I asked for an extra pillow.",基礎
water,n.,水,"Could I have a glass of water?",基礎
coffee,n.,咖啡,"Would you like some coffee?",基礎
tea,n.,茶,"I'll have a cup of green tea.",基礎
juice,n.,果汁,"A glass of orange juice, please.",基礎
snack,n.,點心；零食,"Snacks will be provided during the break.",基礎
fruit,n.,水果,"There is fresh fruit in the break room.",基礎
vegetable,n.,蔬菜,"This restaurant uses fresh vegetables.",基礎
doctor,n.,醫生,"You should see a doctor if the pain continues.",基礎
nurse,n.,護士,"The nurse will take your temperature.",基礎
hospital,n.,醫院,"He was taken to the hospital after the accident.",基礎
clinic,n.,診所,"The clinic opens at nine.",基礎
medicine,n.,藥,"Take this medicine three times a day.",基礎
pharmacy,n.,藥局,"There is a pharmacy across the street.",基礎
sick,adj.,生病的,"I'm sick today, so I'll stay home.",基礎
health,n.,健康,"Regular exercise is good for your health.",基礎
exercise,n.,運動,"I get some exercise every morning.",基礎
gym,n.,健身房,"The hotel has a small gym on the top floor.",基礎
sport,n.,運動項目,"Tennis is my favorite sport.",基礎
team,n.,團隊；隊伍,"Our team won the game last night.",基礎
game,n.,比賽；遊戲,"The game starts at seven.",基礎
boss,n.,老闆,"My boss is on a business trip.",基礎
worker,n.,工人；勞工,"The workers are fixing the roof.",基礎
engineer,n.,工程師,"She works as a software engineer.",基礎
driver,n.,司機,"The driver will pick you up at the airport.",基礎
chef,n.,主廚,"The chef prepared a special dinner for us.",基礎
teacher,n.,老師,"The teacher explained the rules clearly.",基礎
student,n.,學生,"Students get a discount on tickets.",基礎
lawyer,n.,律師,"You should talk to a lawyer before you sign.",基礎
accountant,n.,會計師,"The accountant checks our records every month.",基礎
secretary,n.,秘書,"Please leave a message with my secretary.",基礎
technician,n.,技術人員,"A technician will come to fix the copier.",基礎
visitor,n.,訪客,"All visitors must sign in at the front desk.",基礎
tourist,n.,觀光客,"The city attracts many tourists in summer.",基礎
neighbor,n.,鄰居,"My neighbor works at the same company.",基礎
friend,n.,朋友,"I'm meeting a friend for lunch.",基礎
family,n.,家人；家庭,"He is spending the holiday with his family.",基礎
child,n.,小孩,"Each child will receive a free gift.",基礎
adult,n.,成人,"Tickets cost $10 for adults.",基礎
member,n.,會員；成員,"Only members can use the pool.",基礎
partner,n.,夥伴；合夥人,"She became a partner in the law firm.",基礎
owner,n.,所有人；業主,"The owner of the restaurant greeted us.",基礎
start,v.,開始,"The meeting will start at two.",基礎
finish,v.,完成；結束,"I need to finish this report today.",基礎
begin,v.,開始；著手,"Let's begin with a short introduction.",基礎
end,v.,結束,"The conference ends on Friday.",基礎
stop,v.,停止,"The bus stops in front of the hotel.",基礎
move,v.,移動；搬家,"We are moving to a new office next month.",基礎
bring,v.,帶來,"Please bring your ID card tomorrow.",基礎
take,v.,拿；花費（時間）,"It will take about an hour.",基礎
carry,v.,攜帶；搬運,"Can you help me carry these boxes?",基礎
hold,v.,舉行；握著,"We hold a staff meeting every Monday.",基礎
put,v.,放置,"Please put your bags on the shelf.",基礎
give,v.,給,"Please give this document to Mr. Brown.",基礎
get,v.,得到；取得,"Where can I get a map of the city?",基礎
find,v.,找到,"I can't find my keys anywhere.",基礎
look,v.,看,"Please look at the chart on page five.",基礎
watch,v.,觀看,"We watched a training video this morning.",基礎
listen,v.,聆聽,"Please listen carefully to the instructions.",基礎
hear,v.,聽見,"Can you hear me clearly?",基礎
speak,v.,說話,"Can I speak to the manager, please?",基礎
talk,v.,談話,"We need to talk about the budget.",基礎
tell,v.,告訴,"Please tell me if you need anything.",基礎
say,v.,說,"What did she say about the plan?",基礎
read,v.,閱讀,"Please read the instructions carefully.",基礎
write,v.,寫,"Please write your name at the top of the page.",基礎
answer,v.,回答；接聽,"Could you answer the phone, please?",基礎
help,v.,幫助,"Can I help you find something?",基礎
need,v.,需要,"I need a new laptop.",基礎
want,v.,想要,"Do you want to join us for dinner?",基礎
like,v.,喜歡,"I like working with this team.",基礎
use,v.,使用,"You can use the meeting room after three.",基礎
try,v.,嘗試,"Please try again later.",基礎
learn,v.,學習,"I want to learn more about marketing.",基礎
teach,v.,教導,"She teaches English at a language school.",基礎
study,v.,讀書；研究,"He is studying for the TOEIC test.",基礎
remember,v.,記得,"Please remember to lock the door.",基礎
forget,v.,忘記,"Don't forget to sign the form.",基礎
know,v.,知道,"Do you know where the meeting room is?",基礎
think,v.,認為；想,"I think the plan will work.",基礎
understand,v.,理解,"I don't understand this part of the contract.",基礎
decide,v.,下決定,"We decided to postpone the trip.",基礎
choose,v.,選擇,"You can choose any seat you like.",基礎
plan,v.,計劃,"We are planning a trip to Kyoto.",基礎
meet,v.,見面,"Let's meet at the coffee shop at three.",基礎
join,v.,加入,"Would you like to join our team?",基礎
invite,v.,邀請,"We invited all our clients to the party.",基礎
thank,v.,感謝,"I want to thank everyone for their hard work.",基礎
welcome,v.,歡迎,"We welcome new members every month.",基礎
clean,v.,清潔,"The office is cleaned every evening.",基礎
wash,v.,洗,"Please wash your hands before eating.",基礎
fix,v.,修好；固定,"Can you fix the printer?",基礎
build,v.,建造,"They plan to build a new hospital here.",基礎
grow,v.,成長；種植,"Our business continues to grow.",基礎
win,v.,贏得,"Our team hopes to win the award.",基礎
lose,v.,遺失；輸,"I lose my keys all the time.",基礎
borrow,v.,借入,"Can I borrow your pen?",基礎
lend,v.,借出,"Could you lend me your umbrella?",基礎
spend,v.,花費,"We spend too much money on paper.",基礎
save,v.,節省；儲存,"You can save money by booking early.",基礎
count,v.,數；清點,"Please count the boxes before you sign.",基礎
fill,v.,裝滿；填寫,"Please fill the form out in black ink.",基礎
print,v.,列印,"Please print ten copies of the agenda.",基礎
type,v.,打字,"Please type your password again.",基礎
click,v.,點擊,"Click the link to download the file.",基礎
download,v.,下載,"You can download the brochure from our website.",基礎
upload,v.,上傳,"Please upload your photo to the system.",基礎
new,adj.,新的,"We moved into a new office last year.",基礎
old,adj.,舊的；老的,"Please throw away the old files.",基礎
big,adj.,大的,"This is a big project for us.",基礎
small,adj.,小的,"The hotel room was small but clean.",基礎
large,adj.,大型的；大量的,"We received a large order from Japan.",基礎
long,adj.,長的,"It was a long meeting.",基礎
short,adj.,短的,"Let's take a short walk after lunch.",基礎
high,adj.,高的,"Prices are very high in this area.",基礎
low,adj.,低的,"The store offers low prices every day.",基礎
fast,adj.,快的,"The new computer is very fast.",基礎
slow,adj.,慢的,"The internet is slow today.",基礎
quick,adj.,迅速的,"Thank you for your quick reply.",基礎
easy,adj.,容易的,"The new software is easy to use.",基礎
difficult,adj.,困難的,"It was a difficult decision.",基礎
important,adj.,重要的,"This is an important meeting.",基礎
necessary,adj.,必要的,"Is it necessary to bring my passport?",基礎
possible,adj.,可能的,"Is it possible to change my seat?",基礎
clear,adj.,清楚的,"The instructions were very clear.",基礎
correct,adj.,正確的,"Please make sure the address is correct.",基礎
wrong,adj.,錯誤的,"I think you have the wrong number.",基礎
same,adj.,相同的,"We stayed at the same hotel last year.",基礎
different,adj.,不同的,"This model comes in three different colors.",基礎
special,adj.,特別的,"We have a special offer this week.",基礎
popular,adj.,受歡迎的,"This café is popular with office workers.",基礎
famous,adj.,有名的,"The city is famous for its night markets.",基礎
beautiful,adj.,美麗的,"The hotel has a beautiful garden.",基礎
comfortable,adj.,舒適的,"The seats on the train are very comfortable.",基礎
quiet,adj.,安靜的,"Please keep quiet in the library.",基礎
noisy,adj.,吵雜的,"The restaurant was too noisy to talk.",基礎
dirty,adj.,髒的,"Please put dirty dishes in the sink.",基礎
hot,adj.,熱的,"It's very hot outside today.",基礎
cold,adj.,冷的,"The meeting room is too cold.",基礎
warm,adj.,溫暖的,"Bring a warm jacket; it gets cold at night.",基礎
sunny,adj.,晴朗的,"It will be sunny all weekend.",基礎
rainy,adj.,下雨的,"It's been rainy all week.",基礎
cloudy,adj.,多雲的,"Tomorrow will be cloudy with some rain.",基礎
happy,adj.,高興的,"We are happy to help you.",基礎
sorry,adj.,抱歉的,"I'm sorry for the delay.",基礎
tired,adj.,疲倦的,"I'm tired after the long flight.",基礎
hungry,adj.,飢餓的,"Are you hungry? Let's get lunch.",基礎
sure,adj.,確定的,"Are you sure about the time?",基礎
safe,adj.,安全的,"Keep your passport in a safe place.",基礎
dangerous,adj.,危險的,"It is dangerous to use your phone while driving.",基礎
empty,adj.,空的,"The office is empty on Sundays.",基礎
broken,adj.,壞掉的,"The copier is broken again.",基礎
missing,adj.,遺失的；缺少的,"One page of the report is missing.",基礎
favorite,adj.,最喜歡的,"What is your favorite restaurant?",基礎
next,adj.,下一個的,"The next train leaves at 5:10.",基礎
last,adj.,上一個的；最後的,"I saw him last week.",基礎
first,adj.,第一的,"This is my first visit to Taipei.",基礎
final,adj.,最終的,"The final decision will be made tomorrow.",基礎
whole,adj.,全部的,"I spent the whole day in meetings.",基礎
own,adj.,自己的,"Each manager has their own office.",基礎
public,adj.,公共的；公開的,"Smoking is not allowed in public areas.",基礎
private,adj.,私人的,"This is a private parking lot.",基礎
main,adj.,主要的,"The main entrance is on Oak Street.",基礎
extra,adj.,多餘的；外加的,"Do you have an extra pen?",基礎
enough,adj.,足夠的,"We don't have enough chairs.",基礎
several,adj.,幾個的,"I called him several times.",基礎
each,adj.,每一個的,"Each room has a mini bar.",基礎
every,adj.,每個的；每一,"The bus comes every ten minutes.",基礎
home,n.,家,"I'll work from home tomorrow.",基礎
apartment,n.,公寓,"She lives in an apartment near the station.",基礎
house,n.,房子,"They bought a house in the suburbs.",基礎
garden,n.,花園,"The hotel garden is open to guests.",基礎
city,n.,城市,"Taipei is a busy city.",基礎
country,n.,國家；鄉下,"Which country are you from?",基礎
world,n.,世界,"Our company has offices around the world.",基礎
bank,n.,銀行,"I need to go to the bank today.",基礎
post office,n.,郵局,"The post office closes at five.",基礎
library,n.,圖書館,"The library is on the third floor.",基礎
school,n.,學校,"Our school offers evening classes.",基礎
class,n.,課程；班級,"The class starts at seven p.m.",基礎
lesson,n.,課；一堂課,"I take English lessons twice a week.",基礎
test,n.,考試；測試,"I have a test tomorrow morning.",基礎
question,n.,提問；問題,"Do you have any questions?",基礎
problem,n.,難題；麻煩,"We have a problem with the printer.",基礎
idea,n.,想法,"That's a great idea!",基礎
example,n.,例子,"Can you give me an example?",基礎
reason,n.,原因；理由,"What is the reason for the delay?",基礎
result,n.,結果,"The test results will be ready on Friday.",基礎
mistake,n.,失誤；錯誤,"I'm sorry; I made a mistake.",基礎
chance,n.,機會,"This is a great chance to learn.",基礎
choice,n.,選擇的機會,"You have a choice of chicken or fish.",基礎
color,n.,顏色,"What color would you like?",基礎
picture,n.,照片；圖片,"Can you take a picture of us?",基礎
letter,n.,信,"I received a letter from the bank.",基礎
note,n.,便條；筆記,"I left a note on your desk.",基礎
paper,n.,紙,"The printer is out of paper.",基礎
pen,n.,筆,"Please sign with a black pen.",基礎
notebook,n.,筆記本,"Please bring a notebook to the training.",基礎
laptop,n.,筆記型電腦,"I brought my laptop to the meeting.",基礎
screen,n.,螢幕,"Please look at the screen.",基礎
keyboard,n.,鍵盤,"The keyboard is not working.",基礎
password,n.,密碼,"Please don't share your password.",基礎
internet,n.,網路,"The hotel offers free internet.",基礎
link,n.,連結,"I'll send you the link to the website.",基礎
money,n.,錢,"How much money do we have left?",基礎
dollar,n.,元（美元）,"The ticket costs twenty dollars.",基礎
tip,n.,小費；訣竅,"We left a tip for the waiter.",基礎
total,n.,總計,"The total comes to $58.",基礎
gas,n.,瓦斯；汽油,"We need to stop for gas.",基礎
car,n.,汽車,"I left my car in the parking lot.",基礎
bike,n.,腳踏車,"He rides his bike to work.",基礎
truck,n.,卡車,"The delivery truck arrived at noon.",基礎
plane,n.,飛機,"The plane landed on time.",基礎
ship,n.,船,"The goods will be sent by ship.",基礎
boat,n.,小船,"We took a boat tour of the harbor.",基礎
harbor,n.,港口,"The hotel has a view of the harbor.",基礎
beach,n.,海灘,"The resort is right on the beach.",基礎
mountain,n.,山,"We went hiking in the mountains.",基礎
river,n.,河,"There is a park along the river.",基礎
lake,n.,湖,"The company picnic will be at the lake.",基礎
tree,n.,樹,"They planted trees around the parking lot.",基礎
flower,n.,花,"These flowers are for the reception desk.",基礎
animal,n.,動物,"No animals are allowed in the restaurant.",基礎
rain,n.,雨,"The game was canceled because of rain.",基礎
snow,n.,雪,"Heavy snow closed the airport.",基礎
wind,n.,風,"The wind is very strong today.",基礎
temperature,n.,溫度,"The temperature will drop tonight.",基礎
season,n.,季節,"Summer is the busy season for hotels.",基礎
spring,n.,春天,"The store will open in the spring.",基礎
summer,n.,夏天,"We take our vacation in summer.",基礎
fall,n.,秋天,"The leaves change color in the fall.",基礎
winter,n.,冬天,"Winter coats are on sale now.",基礎
morning,n.,早上,"I have a meeting this morning.",基礎
afternoon,n.,下午,"The package arrived this afternoon.",基礎
evening,n.,傍晚；晚上,"The store is open until nine in the evening.",基礎
night,n.,夜晚,"I can't sleep well at night.",基礎
noon,n.,中午,"Let's meet at noon.",基礎
date,n.,日期,"What is the date of the conference?",基礎
time,n.,時間,"What time does the store open?",基礎
moment,n.,片刻,"Please wait a moment.",基礎
future,n.,未來,"We plan to open more stores in the future.",基礎
history,n.,歷史,"The museum shows the history of the city.",基礎
art,n.,藝術,"She is interested in modern art.",基礎
music,n.,音樂,"The restaurant plays soft music.",基礎
news,n.,新聞；消息,"Did you hear the news about the merger?",基礎
newspaper,n.,報紙,"I read the newspaper on the train.",基礎
magazine,n.,雜誌,"The magazine is published every month.",基礎
radio,n.,收音機；廣播,"I heard the news on the radio.",基礎
television,n.,電視,"The hotel room has a large television.",基礎
camera,n.,相機,"Please don't use your camera in the museum.",基礎
light,n.,燈；光,"Please turn off the lights when you leave.",基礎
power,n.,電力,"The power went out during the storm.",基礎
battery,n.,電池,"My phone battery is almost dead.",基礎
machine,n.,機器,"The coffee machine is broken.",基礎
tool,n.,工具,"You need special tools to fix it.",基礎
glass,n.,玻璃杯；玻璃,"Be careful; the glass is very hot.",基礎
cup,n.,杯子,"Would you like a cup of coffee?",基礎
bottle,n.,瓶子,"Please recycle your plastic bottles.",基礎
bread,n.,麵包,"The bakery sells fresh bread every morning.",基礎
bakery,n.,麵包店,"There is a bakery next to the station.",基礎
market,n.,市場,"We buy fruit at the market on Sundays.",基礎
supermarket,n.,超市,"The supermarket is open until midnight.",基礎
mall,n.,購物中心,"The new mall has over 200 stores.",基礎
pair,n.,一雙；一對,"I bought a new pair of shoes.",基礎
piece,n.,一件；一片,"Could I have a piece of paper?",基礎
half,n.,一半,"Half of the staff work from home.",基礎
part,n.,部分,"This part of the building is closed.",基礎
side,n.,邊；側,"The bank is on the other side of the street.",基礎
top,n.,頂端,"Write your name at the top of the page.",基礎
bottom,n.,底部,"Please sign at the bottom of the form.",基礎
middle,n.,中間,"The table is in the middle of the room.",基礎
front,n.,前面,"Please meet me in front of the hotel.",基礎
back,n.,後面,"There is more parking in the back.",基礎
center,n.,中心,"The hotel is in the center of the city.",基礎
area,n.,區域,"This area is for staff only.",基礎
place,n.,地方,"This is a great place for lunch.",基礎
way,n.,方法；路,"What is the best way to the airport?",基礎
line,n.,隊伍；線,"There was a long line at the bank.",基礎
group,n.,團體；組,"We will work in small groups.",基礎
kind,n.,種類,"What kind of music do you like?",基礎
thing,n.,東西；事情,"I have many things to do today.",基礎
word,n.,字；話,"I don't know this word.",基礎
language,n.,語言,"How many languages do you speak?",基礎
name,n.,名字,"May I have your name, please?",基礎
age,n.,年齡,"There is no age limit for the contest.",基礎
birthday,n.,生日,"Happy birthday! Here's a small gift.",基礎
anniversary,n.,週年紀念,"The company is celebrating its 50th anniversary.",基礎
salad,n.,沙拉,"I'll have a chicken salad, please.",基礎
soup,n.,湯,"The soup of the day is tomato.",基礎
meal,n.,一餐,"The price includes three meals a day.",基礎
drink,n.,飲品；喝的東西,"Can I get you a drink?",基礎
sandwich,n.,三明治,"I had a sandwich at my desk.",基礎
jacket,n.,夾克,"Please bring a jacket in case it gets cold.",基礎
hat,n.,帽子,"Workers must wear a hard hat on site.",基礎
town,n.,城鎮,"Our factory is in a small town.",基礎
neighborhood,n.,街坊；鄰近地區,"This is a safe neighborhood.",基礎
weekday,n.,平日,"The store is open from nine to six on weekdays.",基礎
daily,adj.,每天的,"Please check the daily schedule.",基礎
weekly,adj.,每週的,"We have a weekly team meeting.",基礎
slowly,adv.,慢慢地,"Please speak slowly.",基礎
heavy,adj.,重的,"This box is too heavy to carry.",基礎
reserve,v.,預訂；保留,"I'd like to reserve a table for four, please.",銜接
attend,v.,出席；參加,"All employees are required to attend the training session.",銜接
invoice,n.,發票；請款單,"The invoice must be paid within 30 days.",銜接
supply,n.,供應品；用品,"Office supplies are kept in the storage room.",銜接
apply,v.,申請；應徵,"He applied for the position of assistant manager.",銜接
postpone,v.,延期,"The conference has been postponed until next week.",銜接
estimate,n.,估價；估計,"Could you give us an estimate for the repair work?",銜接
confirm,v.,確認,"Please confirm your reservation by email.",銜接
arrange,v.,安排,"I will arrange a meeting with the client.",銜接
contact,v.,聯絡,"Please contact our customer service team.",銜接
require,v.,需要；要求,"This position requires three years of experience.",銜接
provide,v.,提供,"We provide free shipping on all orders.",銜接
include,v.,包含,"The price includes breakfast.",銜接
offer,v.,提供；提議,"The store offers a discount to students.",銜接
hire,v.,僱用,"The company plans to hire ten new workers.",銜接
train,v.,訓練,"New staff are trained by senior employees.",銜接
recommend,v.,推薦；建議,"I recommend the fish of the day.",銜接
prepare,v.,準備,"She is preparing slides for the presentation.",銜接
complete,v.,完成,"Please complete the survey before Friday.",銜接
handle,v.,處理,"Ms. Lee handles all customer complaints.",銜接
manage,v.,管理,"He manages a team of twelve people.",銜接
organize,v.,組織；籌辦,"Who is organizing the company picnic?",銜接
register,v.,登記；報名,"You must register for the workshop in advance.",銜接
update,v.,更新,"We will update the website next week.",銜接
replace,v.,更換；取代,"The old printer will be replaced next month.",銜接
install,v.,安裝,"A technician will install the new software.",銜接
extend,v.,延長,"The store has extended its opening hours.",銜接
increase,v.,增加,"Sales increased by 15 percent last quarter.",銜接
reduce,v.,減少,"We need to reduce our energy costs.",銜接
announce,v.,宣布,"The company announced a new CEO yesterday.",銜接
respond,v.,回應；回覆,"Please respond to this email by Monday.",銜接
review,v.,審查；檢討,"The manager will review your application.",銜接
submit,v.,提交,"All reports must be submitted by noon.",銜接
approve,v.,批准,"The budget was approved by the board.",銜接
request,n.,請求；要求,"We received your request for a refund.",銜接
response,n.,回覆；反應,"Thank you for your quick response.",銜接
application,n.,申請；申請書,"Your application has been received.",銜接
position,n.,職位,"She applied for a position in marketing.",銜接
candidate,n.,候選人；應徵者,"We interviewed five candidates for the job.",銜接
interview,n.,面試,"The interview will take about thirty minutes.",銜接
experience,n.,經驗,"Do you have any experience in sales?",銜接
skill,n.,技能,"Good communication skills are essential.",銜接
client,n.,客戶,"I have lunch with an important client today.",銜接
contract,n.,合約,"Both companies signed the contract last week.",銜接
agreement,n.,協議,"We reached an agreement after long discussions.",銜接
proposal,n.,提案；企劃,"Please send me your proposal by Thursday.",銜接
project,n.,專案,"The project is behind schedule.",銜接
presentation,n.,簡報,"Her presentation was clear and well organized.",銜接
conference,n.,會議；研討會,"Over 500 people attended the conference.",銜接
workshop,n.,工作坊；研習會,"The workshop will focus on time management.",銜接
session,n.,一節（課程、會議）,"The morning session ends at noon.",銜接
agenda,n.,議程,"The first item on the agenda is the budget.",銜接
branch,n.,分店；分公司,"The bank is opening a new branch downtown.",銜接
headquarters,n.,總部,"Our headquarters are located in Taipei.",銜接
factory,n.,工廠,"The factory produces 1,000 cars a day.",銜接
equipment,n.,設備,"The lab bought new safety equipment.",銜接
facility,n.,設施,"The hotel's fitness facility is open 24 hours.",銜接
shipment,n.,貨物；運送,"The shipment will arrive on Tuesday.",銜接
warehouse,n.,倉庫,"The goods are stored in a warehouse near the port.",銜接
quality,n.,品質,"We check the quality of every product.",銜接
quantity,n.,數量,"Please enter the quantity you want to order.",銜接
survey,n.,調查,"Customers were asked to complete a short survey.",銜接
feedback,n.,意見回饋,"We welcome your feedback on our service.",銜接
complaint,n.,抱怨；投訴,"We received a complaint about the noise.",銜接
policy,n.,政策；規定,"Our return policy allows refunds within 14 days.",銜接
service,n.,服務,"The service at this hotel is excellent.",銜接
profit,n.,利潤,"The company made a large profit this year.",銜接
cost,n.,費用；成本,"The cost of materials has gone up.",銜接
fee,n.,手續費；服務費,"There is a small fee for late payment.",銜接
expense,n.,開支；花費,"Travel expenses will be paid by the company.",銜接
account,n.,帳戶,"You need an account to log in.",銜接
charge,v.,收費,"The hotel charges extra for late checkout.",銜接
deposit,n.,押金；存款,"A deposit of $100 is required.",銜接
loan,n.,貸款,"She took out a loan to start her business.",銜接
tax,n.,稅,"The price does not include tax.",銜接
local,adj.,當地的,"We buy vegetables from local farmers.",銜接
annual,adj.,年度的；每年的,"The annual meeting is held in March.",銜接
monthly,adj.,每月的,"Please submit your monthly report.",銜接
recent,adj.,最近的,"Recent sales figures look promising.",銜接
previous,adj.,先前的,"Please refer to my previous email.",銜接
additional,adj.,額外的,"Additional information is available online.",銜接
current,adj.,目前的；現行的,"What is your current address?",銜接
convenient,adj.,方便的,"Is Monday morning convenient for you?",銜接
efficient,adj.,有效率的,"The new system is more efficient.",銜接
responsible,adj.,負責的,"Mr. Wang is responsible for training new staff.",銜接
qualified,adj.,合格的；有資格的,"We are looking for qualified engineers.",銜接
urgent,adj.,緊急的,"I have an urgent message for the director.",銜接
directly,adv.,直接地,"Please contact me directly if you have questions.",銜接
immediately,adv.,立即,"Please call the front desk immediately.",銜接
currently,adv.,目前,"The position is currently open.",銜接
approximately,adv.,大約,"The flight takes approximately two hours.",銜接
instead,adv.,作為替代,"The meeting room is booked, so let's use the lobby instead.",銜接
inquiry,n.,詢問,"Thank you for your inquiry about our products.",銜接
brochure,n.,小冊子,"Please take a brochure at the entrance.",銜接
catalog,n.,目錄,"Our new catalog will be out next week.",銜接
assistant,n.,助理,"My assistant will send you the files.",銜接
supervisor,n.,主管；上司,"Please ask your supervisor for approval.",銜接
itinerary,n.,旅遊行程,"The travel agent sent me my itinerary.",銜接
passenger,n.,乘客,"Passengers should arrive at the gate early.",銜接
delay,n.,延誤,"We apologize for the delay.",銜接
access,n.,使用權；進入,"Employees have access to the gym.",銜接
achieve,v.,達成,"We achieved our sales goal this year.",銜接
adjust,v.,調整,"Please adjust the volume.",銜接
admit,v.,承認；准許進入,"Only ticket holders will be admitted.",銜接
advance,n.,預先；進展,"Please book your tickets in advance.",銜接
advice,n.,建議,"Thank you for your advice.",銜接
affect,v.,影響,"The storm affected many flights.",銜接
afford,v.,負擔得起,"We can't afford a new office right now.",銜接
agree,v.,同意；意見一致,"I agree with your suggestion.",銜接
allow,v.,允許,"Pets are not allowed in the hotel.",銜接
amount,n.,數量；金額,"Please enter the amount you want to send.",銜接
appear,v.,出現；似乎,"The error appears when I log in.",銜接
appreciate,v.,感激,"We appreciate your patience.",銜接
approach,v.,接近,"The deadline is approaching quickly.",銜接
article,n.,文章,"I read an interesting article about the market.",銜接
assign,v.,指派,"Each team member was assigned a task.",銜接
assist,v.,協助,"Our staff will be happy to assist you.",銜接
attempt,n.,嘗試；企圖,"This is our second attempt to contact you.",銜接
attention,n.,注意,"May I have your attention, please?",銜接
avoid,v.,避免,"Leave early to avoid traffic.",銜接
aware,adj.,察覺的；知道的,"Are you aware of the new policy?",銜接
background,n.,背景,"She has a background in finance.",銜接
basis,n.,基礎；基準,"We hire staff on a part-time basis.",銜接
belong,v.,屬於,"Does this umbrella belong to you?",銜接
bid,n.,投標,"Three companies submitted bids for the project.",銜接
board,n.,董事會；告示板,"The board will meet on Friday.",銜接
brand,n.,品牌,"This is a well-known brand in Asia.",銜接
calculate,v.,精算；計算出,"Please calculate the total cost.",銜接
campaign,n.,宣傳活動,"The advertising campaign starts in May.",銜接
capacity,n.,容量；能力,"The hall has a capacity of 500 people.",銜接
career,n.,職業生涯,"She started her career as a sales assistant.",銜接
category,n.,類別,"Please choose a category from the list.",銜接
cause,v.,導致,"The storm caused many delays.",銜接
celebrate,v.,慶祝,"We celebrated our tenth anniversary.",銜接
certificate,n.,證書,"You will receive a certificate after the course.",銜接
chairperson,n.,主席,"The chairperson opened the meeting.",銜接
challenge,n.,挑戰,"Finding good staff is a big challenge.",銜接
claim,n.,索賠；主張,"You can file a claim for lost luggage.",銜接
collect,v.,收集；領取,"You can collect your tickets at the counter.",銜接
combine,v.,結合,"We combined two departments into one.",銜接
comment,n.,評論；意見,"Please send your comments by Friday.",銜接
commercial,adj.,商業的,"This is a commercial building.",銜接
committee,n.,委員會,"The committee will review all applications.",銜接
communicate,v.,溝通,"It's important to communicate clearly.",銜接
community,n.,社區,"The company supports the local community.",銜接
compare,v.,比較,"Compare prices before you buy.",銜接
compete,v.,競爭,"Small shops compete with large chains.",銜接
condition,n.,狀況；條件,"The car is in good condition.",銜接
connect,v.,連接,"Please connect your laptop to the projector.",銜接
consider,v.,考慮,"We will consider your proposal.",銜接
construction,n.,建設；施工,"The road is under construction.",銜接
consult,v.,諮詢,"Please consult your doctor before taking this medicine.",銜接
consumer,n.,消費者,"Consumers are spending less this year.",銜接
continue,v.,繼續,"Please continue with your work.",銜接
contribute,v.,貢獻；捐助,"Everyone contributed to the project's success.",銜接
convention,n.,大會；慣例,"The convention center is downtown.",銜接
corporate,adj.,公司的；企業的,"Our corporate office is in New York.",銜接
cover,v.,涵蓋；支付,"The insurance covers the cost of repairs.",銜接
create,v.,創造；建立,"We created a new website last year.",銜接
crowded,adj.,擁擠的,"The train is crowded in the morning.",銜接
damage,n.,損壞,"The storm caused serious damage.",銜接
data,n.,資料,"Please enter the data into the spreadsheet.",銜接
deal,n.,划算的交易；生意,"We got a great deal on the new printers.",銜接
decision,n.,決策；決定事項,"The manager will make a decision soon.",銜接
decrease,v.,下降；降低,"Sales decreased by 5 percent.",銜接
dedicated,adj.,專注的；專用的,"We have a dedicated customer service team.",銜接
degree,n.,學位；程度,"She has a degree in economics.",銜接
demand,n.,需求,"There is high demand for our new product.",銜接
demonstrate,v.,示範,"The sales rep demonstrated the new software.",銜接
describe,v.,描述,"Please describe the problem.",銜接
design,v.,設計,"She designs websites for small businesses.",銜接
detail,n.,細節,"Please send me the details by email.",銜接
develop,v.,開發；發展,"We are developing a new mobile app.",銜接
device,n.,裝置,"Please turn off all electronic devices.",銜接
difference,n.,差異,"What is the difference between these two models?",銜接
director,n.,主任；董事,"The director will give a speech.",銜接
discuss,v.,討論,"Let's discuss this at the next meeting.",銜接
display,n.,展示；陳列,"The new products are on display in the lobby.",銜接
distribute,v.,分發；配送,"Please distribute these handouts to everyone.",銜接
donate,v.,捐贈,"The company donated $10,000 to charity.",銜接
draft,n.,草稿,"Please send me the first draft by Monday.",銜接
earn,v.,賺取,"She earns a good salary.",銜接
economy,n.,經濟,"The economy is growing slowly.",銜接
edit,v.,編輯,"Please edit the report before you send it.",銜接
effect,n.,效果；影響,"The new policy will take effect next month.",銜接
effective,adj.,有效的；生效的,"The new rules are effective immediately.",銜接
effort,n.,努力,"Thank you for your effort.",銜接
electronic,adj.,電子的,"We sell electronic goods online.",銜接
employ,v.,聘用,"The factory employs 300 people.",銜接
encourage,v.,鼓勵,"We encourage staff to take regular breaks.",銜接
energy,n.,能源；精力,"Solar energy is becoming cheaper.",銜接
enter,v.,進入；輸入,"Please enter your password.",銜接
environment,n.,環境,"We work hard to protect the environment.",銜接
error,n.,差錯,"There is an error in the invoice.",銜接
establish,v.,建立；設立,"The company was established in 1990.",銜接
exact,adj.,確切的,"What is the exact time of arrival?",銜接
examine,v.,仔細檢查,"The doctor examined my eyes.",銜接
excellent,adj.,優秀的,"She did an excellent job.",銜接
exhibition,n.,展覽會,"The art exhibition opens next week.",銜接
expect,v.,預期,"We expect sales to grow next year.",銜接
expert,n.,專家,"She is an expert in marketing.",銜接
explain,v.,解釋,"Can you explain how this machine works?",銜接
export,v.,外銷；出口貨物,"The company exports tea to Europe.",銜接
import,v.,進口,"We import coffee beans from Brazil.",銜接
express,v.,表達,"I want to express my thanks to the team.",銜接
familiar,adj.,熟悉的,"Are you familiar with this software?",銜接
feature,n.,特色；功能,"This phone has many useful features.",銜接
finance,n.,財務；金融,"He works in the finance department.",銜接
firm,n.,商行；事務所,"She works for a law firm.",銜接
focus,v.,專注,"Let's focus on the main issue.",銜接
follow,v.,跟隨；遵循,"Please follow the instructions.",銜接
founder,n.,創辦人,"The founder of the company still works here.",銜接
frequent,adj.,頻繁的,"He is a frequent traveler.",銜接
function,n.,功能；宴會,"This button has two functions.",銜接
fund,n.,資金,"We need more funds for the project.",銜接
furniture,n.,家具,"The office furniture will arrive next week.",銜接
gain,v.,獲得,"You will gain valuable experience.",銜接
general,adj.,一般的；總的,"Here is some general information about the company.",銜接
goods,n.,商品；貨物,"The goods were damaged during shipping.",銜接
government,n.,政府,"The government announced new tax rules.",銜接
graduate,v.,畢業,"She graduated from university last year.",銜接
guarantee,v.,保證,"We guarantee delivery within 24 hours.",銜接
guide,n.,導遊；指南,"Our guide spoke three languages.",銜接
hesitate,v.,猶豫,"Please don't hesitate to contact us.",銜接
host,v.,主辦,"Our company will host the conference this year.",銜接
identify,v.,辨認；找出,"We need to identify the cause of the problem.",銜接
improve,v.,改善,"We want to improve our customer service.",銜接
industry,n.,產業,"She has worked in the hotel industry for years.",銜接
inform,v.,告知,"We will inform you when your order ships.",銜接
ingredient,n.,原料；食材,"We only use fresh ingredients.",銜接
injury,n.,受傷,"Report any injury to your supervisor.",銜接
insurance,n.,保險,"Does your insurance cover dental care?",銜接
intend,v.,打算,"We intend to open a new branch next year.",銜接
interest,n.,興趣；利息,"The bank charges 5 percent interest.",銜接
international,adj.,國際的,"We have many international clients.",銜接
introduce,v.,介紹；引進,"Let me introduce our new manager.",銜接
invest,v.,投入資金,"The company plans to invest in new technology.",銜接
issue,n.,議題；（刊物）期,"We will discuss this issue tomorrow.",銜接
journey,n.,旅程,"The journey takes about three hours.",銜接
knowledge,n.,知識,"She has a deep knowledge of the market.",銜接
labor,n.,勞動；勞工,"Labor costs have risen this year.",銜接
lack,n.,缺乏,"The project failed due to a lack of funding.",銜接
lead,v.,帶領,"She will lead the new project team.",銜接
lease,n.,租約,"We signed a five-year lease on the building.",銜接
legal,adj.,法律的,"Please ask the legal department.",銜接
license,n.,執照,"You need a license to drive in this country.",銜接
limit,n.,限制,"There is a weight limit for checked bags.",銜接
locate,v.,找到；位於,"The hotel is located near the beach.",銜接
location,n.,地點,"The new store has a great location.",銜接
maintain,v.,維持；保養,"It's important to maintain good relations with clients.",銜接
material,n.,材料,"We only use high-quality materials.",銜接
measure,v.,測量,"Please measure the size of the room.",銜接
media,n.,媒體,"The news was reported in the media.",銜接
mention,v.,提到,"Did he mention the meeting time?",銜接
method,n.,方法,"We need a new method for tracking orders.",銜接
modern,adj.,現代的,"The hotel has modern facilities.",銜接
monitor,v.,監控,"We monitor the system 24 hours a day.",銜接
national,adj.,國家的；全國的,"Today is a national holiday.",銜接
nearly,adv.,幾乎,"The project is nearly finished.",銜接
network,n.,網絡；人脈,"She has a large network of contacts.",銜接
normal,adj.,正常的,"Business hours are back to normal.",銜接
obtain,v.,取得,"You must obtain permission before you enter.",銜接
occupation,n.,職業,"Please write your occupation on the form.",銜接
occur,v.,發生,"The accident occurred at 3 p.m.",銜接
official,adj.,正式的；官方的,"The official opening is next Monday.",銜接
operate,v.,操作；營運,"Do you know how to operate this machine?",銜接
opinion,n.,意見,"What is your opinion of the plan?",銜接
opportunity,n.,良機；機遇,"This job is a great opportunity.",銜接
option,n.,選項,"There are several payment options.",銜接
organization,n.,組織,"She works for a non-profit organization.",銜接
original,adj.,原本的；原創的,"Please keep the original receipt.",銜接
participate,v.,參與,"All staff are invited to participate.",銜接
patient,n.,病人,"The doctor has many patients today.",銜接
permission,n.,許可,"You need permission to use this room.",銜接
personal,adj.,個人的,"Please don't use the office phone for personal calls.",銜接
persuade,v.,說服,"We persuaded the client to sign the contract.",銜接
physical,adj.,身體的；實體的,"We have a physical store and an online shop.",銜接
pick up,v.,接送（人）,"I will pick up the client at the airport.",銜接
pleased,adj.,滿意的；樂意的,"We are pleased to announce our new branch.",銜接
practice,n.,練習；慣例,"It takes practice to speak well.",銜接
predict,v.,預言；預料,"Experts predict that prices will rise.",銜接
prefer,v.,偏好,"I prefer to travel by train.",銜接
present,v.,呈現；發表,"She will present the results at the meeting.",銜接
president,n.,總裁；總統,"The president of the company will visit our office.",銜接
prevent,v.,預防；阻止,"Wash your hands to prevent illness.",銜接
priority,n.,優先事項,"Customer safety is our top priority.",銜接
process,n.,過程；流程,"The hiring process takes about a month.",銜接
produce,v.,生產,"The factory produces car parts.",銜接
production,n.,生產；製作,"Production will start next month.",銜接
professional,adj.,專業的,"Please dress in a professional manner.",銜接
progress,n.,進度；進步,"We are making good progress.",銜接
promise,v.,承諾,"We promise to deliver on time.",銜接
property,n.,房地產；財產,"The company owns several properties in the city.",銜接
protect,v.,保護,"Wear gloves to protect your hands.",銜接
publish,v.,出版；發布,"The report will be published next week.",銜接
purchase,v.,採購,"You can purchase tickets online.",銜接
purpose,n.,目的,"What is the purpose of your visit?",銜接
range,n.,範圍；系列,"We offer a wide range of products.",銜接
rate,n.,費率；比率,"The hotel offers a special rate for groups.",銜接
reach,v.,到達；聯繫上,"You can reach me at this number.",銜接
realize,v.,了解；意識到,"I didn't realize the store was closed.",銜接
reasonable,adj.,合理的,"The prices here are very reasonable.",銜接
receive,v.,收到,"Did you receive my email?",銜接
recognize,v.,認出；表彰,"The company recognized her hard work.",銜接
record,n.,紀錄,"Please keep a record of all expenses.",銜接
recover,v.,恢復,"Sales have recovered since last year.",銜接
region,n.,地區,"Sales are strong in the northern region.",銜接
regular,adj.,定期的；一般的,"We hold regular staff meetings.",銜接
relationship,n.,關係,"We have a good relationship with our suppliers.",銜接
release,v.,發布；釋出,"The company will release its new phone in June.",銜接
remind,v.,提醒,"Please remind me about the meeting.",銜接
remove,v.,移除,"Please remove your shoes before entering.",銜接
repeat,v.,重複,"Could you repeat that, please?",銜接
represent,v.,代表,"She represents our company at trade shows.",銜接
reputation,n.,聲譽,"The hotel has an excellent reputation.",銜接
research,n.,研究,"We spent a year on market research.",銜接
resident,n.,居民,"Local residents complained about the noise.",銜接
resource,n.,資源,"We need more resources to finish the project.",銜接
retail,adj.,零售的,"He has ten years of retail experience.",銜接
role,n.,角色；職責,"What is your role on the team?",銜接
route,n.,路線,"This is the fastest route to the airport.",銜接
rule,n.,規則,"Please follow the rules of the library.",銜接
safety,n.,安全,"For your safety, please wear a helmet.",銜接
sample,n.,樣品,"Can I get a free sample?",銜接
satisfy,v.,使滿意,"We want to satisfy every customer.",銜接
search,v.,搜尋,"Search for the file on the shared drive.",銜接
secure,adj.,牢靠的；有保障的,"Please keep your password in a secure place.",銜接
security,n.,保全；安全措施,"Please show your ID to security.",銜接
select,v.,挑選,"Please select a size.",銜接
separate,adj.,分開的,"Please put paper and plastic in separate bins.",銜接
serious,adj.,嚴重的；認真的,"This is a serious problem.",銜接
set up,v.,設立；安裝,"We need to set up the room for the meeting.",銜接
share,v.,分享；共用,"We share an office with the design team.",銜接
signature,n.,簽名；簽章,"We need your signature on this form.",銜接
similar,adj.,相似的,"The two products are very similar.",銜接
simple,adj.,簡單的,"The instructions are simple to follow.",銜接
site,n.,地點；網站,"The new factory site is near the port.",銜接
situation,n.,情況,"We are watching the situation closely.",銜接
software,n.,軟體,"Please install the latest software.",銜接
solution,n.,解決方案,"We need a quick solution to this problem.",銜接
solve,v.,解決,"The technician solved the problem quickly.",銜接
source,n.,來源,"What is the source of this information?",銜接
space,n.,空間,"We need more storage space.",銜接
specific,adj.,特定的；具體的,"Do you have a specific date in mind?",銜接
standard,n.,標準,"Our products meet high safety standards.",銜接
state,v.,陳述；說明,"Please state your name and address.",銜接
steady,adj.,穩定的,"Sales have shown steady growth.",銜接
storage,n.,儲藏,"The storage room is in the basement.",銜接
structure,n.,結構,"The company changed its management structure.",銜接
style,n.,風格,"I like the style of this jacket.",銜接
succeed,v.,成功,"We hope the new product will succeed.",銜接
success,n.,成就；成功的事,"The event was a great success.",銜接
successful,adj.,成功的,"The launch was very successful.",銜接
suggest,v.,提議,"I suggest that we take a short break.",銜接
suggestion,n.,意見；建議事項,"Do you have any suggestions?",銜接
suitable,adj.,合適的,"This room is suitable for small meetings.",銜接
support,v.,支持；支援,"We support local charities.",銜接
surprise,n.,驚喜,"The party was a complete surprise.",銜接
system,n.,系統,"The new booking system is easy to use.",銜接
target,n.,目標客群；指標,"Young people are our main target.",銜接
task,n.,任務；工作,"I have several tasks to finish today.",銜接
technology,n.,科技,"New technology has changed the way we work.",銜接
term,n.,條款；期限,"Please read the terms of the contract.",銜接
throughout,prep.,遍及；在整個…期間,"The museum is open throughout the year.",銜接
trade,n.,貿易,"International trade has grown rapidly.",銜接
trade show,n.,商展,"We will have a booth at the trade show.",銜接
transportation,n.,運輸；交通工具,"Public transportation is cheap in this city.",銜接
trend,n.,趨勢,"Online shopping is a growing trend.",銜接
typical,adj.,典型的,"A typical workday starts at nine.",銜接
unable,adj.,無法的,"I'm unable to attend the meeting.",銜接
unique,adj.,獨特的,"The hotel has a unique design.",銜接
upcoming,adj.,即將到來的,"Please prepare for the upcoming audit.",銜接
valid,adj.,（證件、票）有效的,"Your passport must be valid for six months.",銜接
value,n.,價值,"The value of the house has increased.",銜接
various,adj.,各種的,"We offer various services.",銜接
version,n.,版本,"Please download the latest version.",銜接
volunteer,n.,志工,"We need volunteers for the charity event.",銜接
wage,n.,工資,"The minimum wage will increase next year.",銜接
wide,adj.,寬的；廣泛的,"We offer a wide selection of books.",銜接
worth,adj.,值得的,"The museum is worth a visit.",銜接
abroad,adv.,在國外,"She studied abroad for two years.",銜接
accept,v.,接受,"We accept all major credit cards.",銜接
accident,n.,意外；事故,"The accident caused a traffic jam.",銜接
accurate,adj.,準確的,"Please make sure the figures are accurate.",銜接
active,adj.,積極的；活躍的,"She is an active member of the club.",銜接
actually,adv.,實際上,"Actually, the meeting has been moved to Friday.",銜接
add,v.,增加；添加,"Please add my name to the list.",銜接
advertisement,n.,廣告,"I saw your advertisement in the newspaper.",銜接
afterward,adv.,之後,"We had dinner and went home afterward.",銜接
ahead,adv.,在前面；提前,"We finished the project ahead of schedule.",銜接
alternative,n.,替代方案,"Is there an alternative to this plan?",銜接
announcement,n.,宣布的事；廣播,"Please listen to the following announcement.",銜接
apologize,v.,道歉,"I apologize for the mistake.",銜接
appliance,n.,家電用品,"The store sells kitchen appliances.",銜接
appropriate,adj.,適當的,"Please wear appropriate clothing.",銜接
architect,n.,建築師,"The architect designed the new library.",銜接
arrangement,n.,安排事項；布置,"We made arrangements for your stay.",銜接
assemble,v.,組裝；集合,"The workers assemble cars by hand.",銜接
atmosphere,n.,氣氛,"The restaurant has a relaxed atmosphere.",銜接
author,n.,作者,"The author will sign books at the event.",銜接
automatic,adj.,自動的,"The doors are automatic.",銜接
average,adj.,平均的,"The average price of a room is $120.",銜接
award,n.,獎項,"She won an award for her design.",銜接
basic,adj.,基本的,"You need basic computer skills.",銜接
behind,prep.,在…後面,"The garage is behind the house.",銜接
belongings,n.,隨身物品,"Please take all your belongings with you.",銜接
billing,n.,帳務；開立帳單,"Please contact our billing department.",銜接
blank,adj.,空白的,"Please leave this box blank.",銜接
brief,adj.,簡短的,"Let's have a brief meeting at ten.",銜接
cabinet,n.,櫥櫃；檔案櫃,"The files are in the cabinet next to my desk.",銜接
calm,adj.,冷靜的,"Please stay calm and follow the instructions.",銜接
casual,adj.,休閒的；非正式的,"We can wear casual clothes on Fridays.",銜接
ceiling,n.,天花板,"The meeting room has a high ceiling.",銜接
charity,n.,慈善機構,"The company donates money to charity every year.",銜接
chart,n.,圖表,"This chart shows our sales for the year.",銜接
checkout,n.,結帳；退房,"Checkout time is 11 a.m.",銜接
check in,v.,報到；登記入住,"You can check in after 3 p.m.",銜接
coach,n.,教練；長途巴士,"Our coach will leave at eight.",銜接
code,n.,代碼；規範,"Please enter the discount code at checkout.",銜接
compact,adj.,小巧的,"This printer is compact and light.",銜接
concern,n.,擔憂；關心的事,"Safety is our main concern.",銜接
confident,adj.,有信心的,"I'm confident that we will win the contract.",銜接
confusing,adj.,令人困惑的,"The instructions are a little confusing.",銜接
congratulate,v.,祝賀,"We congratulate you on your promotion.",銜接
contain,v.,內含；裝有,"This box contains glass items.",銜接
content,n.,內容,"The content of the website is updated daily.",銜接
cooperation,n.,合作,"Thank you for your cooperation.",銜接
courier,n.,快遞,"The documents were sent by courier.",銜接
course,n.,（一系列）課程；路線,"I'm taking a course in accounting.",銜接
crew,n.,工作人員；全體船員,"The film crew arrived early.",銜接
crowd,n.,人群,"A large crowd gathered at the entrance.",銜接
delivery,n.,遞送；交貨,"Free delivery is available for orders over $50.",銜接
dentist,n.,牙醫,"I have to see the dentist tomorrow.",銜接
depart,v.,出發；離開,"The train departs at 8:15.",銜接
departure,n.,出發,"Please check the departure time.",銜接
destination,n.,目的地,"Kyoto is a popular travel destination.",銜接
discover,v.,發現,"We discovered a problem with the system.",銜接
dress code,n.,服裝規定,"The dress code for the dinner is formal.",銜接
due,adj.,到期的；預定的,"The report is due on Friday.",銜接
duty,n.,職責；稅,"It is your duty to lock the office.",銜接
electricity,n.,電,"The electricity bill was higher this month.",銜接
emergency,n.,緊急情況,"In an emergency, call this number.",銜接
enjoy,v.,享受,"We hope you enjoy your stay.",銜接
entire,adj.,整個的,"The entire staff attended the party.",銜接
envelope,n.,信封,"Please put the letter in an envelope.",銜接
especially,adv.,尤其,"The store is busy, especially on weekends.",銜接
eventually,adv.,最終,"We eventually found a solution.",銜接
exactly,adv.,確切地,"What exactly do you need?",銜接
except,prep.,除了,"The store is open every day except Monday.",銜接
exciting,adj.,令人興奮的,"This is an exciting time for our company.",銜接
fair,n.,展覽會；市集,"We met many buyers at the job fair.",銜接
fare,n.,車資,"The bus fare is $2.",銜接
fashion,n.,時尚,"She works in the fashion industry.",銜接
flexible,adj.,彈性的,"We offer flexible working hours.",銜接
flight attendant,n.,空服員,"The flight attendant served drinks.",銜接
forward,v.,轉寄,"Please forward this email to the team.",銜接
fragile,adj.,易碎的,"This package is fragile.",銜接
frequently,adv.,經常地,"Frequently asked questions are listed below.",銜接
fuel,n.,燃料,"Fuel prices have gone up.",銜接
fully,adv.,完全地,"The hotel is fully booked.",銜接
accommodation,n.,住宿,"The price includes accommodation and meals.",銜接
agency,n.,代理商；機構,"She works at an advertising agency.",銜接
assistance,n.,援助；幫助,"If you need assistance, please call us.",銜接
attach,v.,附上,"Please attach your photo to the application.",銜接
bargain,n.,特價品；便宜貨,"This jacket was a real bargain.",銜接
booking,n.,預訂紀錄,"Online booking is quick and easy.",銜接
cargo,n.,（船、飛機）貨物,"The cargo was loaded onto the ship.",銜接
compliment,n.,讚美,"Thank you for the compliment.",銜接
connection,n.,轉機；連結,"I missed my connection in Tokyo.",銜接
costly,adj.,代價高的,"Mistakes can be costly.",銜接
directory,n.,通訊錄；名錄,"Check the staff directory for her number.",銜接
fasten,v.,繫緊,"Please fasten your seat belt.",銜接
field,n.,領域；場地,"He is an expert in his field.",銜接
gather,v.,聚集；收集,"Please gather in the lobby at nine.",銜接
honor,n.,榮幸；榮譽,"It is an honor to be here.",銜接
instructor,n.,講師,"The instructor will start the class soon.",銜接
landmark,n.,地標,"The tower is a famous landmark.",銜接
lounge,n.,休息室,"Passengers can wait in the business lounge.",銜接
lost and found,n.,失物招領處,"Check the lost and found for your umbrella.",銜接
mechanic,n.,技工,"The mechanic fixed my car in an hour.",銜接
membership,n.,會員資格,"Your membership includes free parking.",銜接
microphone,n.,麥克風,"Please speak into the microphone.",銜接
pedestrian,n.,行人,"Pedestrians must use the crosswalk.",銜接
plumber,n.,水管工,"We called a plumber to fix the leak.",銜接
projector,n.,投影機,"The projector in Room 3 is not working.",銜接
recommendation,n.,推薦；建議書,"Thank you for your recommendation.",銜接
refrigerator,n.,冰箱,"Please keep the milk in the refrigerator.",銜接
restock,v.,補貨,"We will restock the shelves tonight.",銜接
shipping,n.,運送；運費,"Shipping is free for orders over $30.",銜接
spacious,adj.,寬敞的,"The rooms are bright and spacious.",銜接
spare,adj.,備用的,"Do you have a spare key?",銜接
specialist,n.,專科醫師；專家,"You should see a specialist about your knee.",銜接
suburb,n.,郊區,"Many workers live in the suburbs.",銜接
timetable,n.,時刻表,"Check the train timetable before you leave.",銜接
traveler,n.,旅客,"The hotel is popular with business travelers.",銜接
weigh,v.,稱重,"Please weigh your bag at the counter.",銜接
intersection,n.,十字路口,"Turn right at the next intersection.",銜接
garage,n.,車庫,"Please park in the garage.",銜接
housing,n.,住房,"Housing costs are high in the city.",銜接
outdoor,adj.,戶外的,"The concert will be an outdoor event.",銜接
deadline,n.,截止期限,"The deadline for the report is Friday at 5 p.m.",高頻
budget,n.,預算,"We have to stay within the budget for this project.",高頻
refund,n.,退款,"Customers can get a full refund within seven days.",高頻
inventory,n.,存貨；庫存清單,"The store checks its inventory every month.",高頻
promote,v.,升職；促銷,"She was promoted to sales director last year.",高頻
colleague,n.,同事,"I'm having lunch with a colleague from marketing.",高頻
revenue,n.,營收,"The company's revenue rose 8 percent this year.",高頻
merger,n.,合併,"The merger will create the largest bank in the region.",高頻
acquire,v.,收購；取得,"The firm acquired a small software company.",高頻
negotiate,v.,協商；談判,"We are negotiating a new contract with the supplier.",高頻
implement,v.,實施；執行,"The new policy will be implemented next month.",高頻
evaluate,v.,評估,"We will evaluate each proposal carefully.",高頻
analyze,v.,分析,"The team analyzed the survey results.",高頻
expand,v.,擴展,"The company plans to expand into Asia.",高頻
launch,v.,推出；發表,"We will launch the new product in May.",高頻
advertise,v.,刊登廣告；宣傳,"The job was advertised in several newspapers.",高頻
relocate,v.,遷移；調職,"Our office will relocate to a larger building.",高頻
renovate,v.,翻修,"The lobby is being renovated this month.",高頻
reimburse,v.,核銷；償還（費用）,"Employees will be reimbursed for travel expenses.",高頻
comply,v.,遵守,"All staff must comply with safety regulations.",高頻
regulation,n.,規定；法規,"Please follow the safety regulations at all times.",高頻
authorize,v.,授權；批准,"Only managers can authorize overtime.",高頻
allocate,v.,分配,"We need to allocate more money to marketing.",高頻
coordinate,v.,協調,"She coordinates events for the sales team.",高頻
delegate,v.,委派,"A good manager knows how to delegate tasks.",高頻
oversee,v.,監督,"Mr. Kim oversees the construction project.",高頻
assess,v.,評定；估算,"Experts were hired to assess the damage.",高頻
verify,v.,核實；驗證,"Please verify your identity before logging in.",高頻
ensure,v.,確保,"Please ensure that all doors are locked.",高頻
accommodate,v.,容納；提供住宿,"The hall can accommodate up to 300 guests.",高頻
attract,v.,吸引,"The festival attracts thousands of visitors.",高頻
retain,v.,留住；保留,"We offer bonuses to retain good employees.",高頻
recruit,v.,招募,"The company is recruiting new engineers.",高頻
resign,v.,辭職,"She resigned from her position last month.",高頻
retire,v.,退休,"Mr. Ford will retire at the end of the year.",高頻
transfer,v.,轉調；轉帳,"He was transferred to the Tokyo office.",高頻
notify,v.,通知,"Please notify us of any changes.",高頻
inquire,v.,查詢；打聽,"I am writing to inquire about the open position.",高頻
accompany,v.,陪同,"Children must be accompanied by an adult.",高頻
outstanding,adj.,傑出的；未付的,"The outstanding balance must be paid by Friday.",高頻
mandatory,adj.,強制的；必須的,"Attendance at the safety training is mandatory.",高頻
eligible,adj.,符合資格的,"Full-time employees are eligible for paid leave.",高頻
tentative,adj.,暫定的,"This is only a tentative schedule.",高頻
confidential,adj.,機密的,"This information is strictly confidential.",高頻
complimentary,adj.,免費贈送的,"Guests receive complimentary breakfast.",高頻
considerable,adj.,相當大的,"The project required a considerable amount of time.",高頻
competitive,adj.,有競爭力的,"We offer competitive salaries.",高頻
reliable,adj.,可靠的,"We need a reliable supplier.",高頻
temporary,adj.,暫時的；臨時的,"This is a temporary position for six months.",高頻
permanent,adj.,永久的；正式的,"She was offered a permanent job.",高頻
vacant,adj.,空缺的；空著的,"The manager position has been vacant since June.",高頻
overtime,n.,加班,"Many workers did overtime last week.",高頻
shift,n.,輪班,"I work the night shift on Tuesdays.",高頻
personnel,n.,人事部門；人員,"Please send your résumé to the personnel department.",高頻
reference,n.,推薦信；參考,"Please provide two professional references.",高頻
benefit,n.,福利；好處,"The job offers excellent health benefits.",高頻
bonus,n.,獎金,"All staff received a year-end bonus.",高頻
raise,n.,加薪,"She asked her boss for a raise.",高頻
promotion,n.,升遷；促銷活動,"He got a promotion after two years.",高頻
performance,n.,表現；績效,"Your performance will be reviewed every six months.",高頻
objective,n.,目標,"The main objective is to increase sales.",高頻
strategy,n.,策略,"We need a new marketing strategy.",高頻
forecast,n.,預測,"The sales forecast for next year is positive.",高頻
quarter,n.,季度,"Profits rose in the third quarter.",高頻
figure,n.,數字；數據,"The sales figures will be released tomorrow.",高頻
statement,n.,對帳單；聲明,"Your bank statement is sent monthly.",高頻
transaction,n.,交易,"Each transaction is recorded in the system.",高頻
balance,n.,餘額,"Please check your account balance online.",高頻
investment,n.,投資,"The new factory is a major investment.",高頻
shareholder,n.,股東,"The shareholders will meet next month.",高頻
supplier,n.,供應商,"We are looking for a new paper supplier.",高頻
vendor,n.,賣方；廠商,"The vendor delivered the equipment late.",高頻
manufacturer,n.,製造商,"The manufacturer offers a two-year warranty.",高頻
warranty,n.,保固,"This laptop comes with a one-year warranty.",高頻
defective,adj.,有瑕疵的,"Defective items can be returned for a full refund.",高頻
maintenance,n.,維修；保養,"The elevator is closed for maintenance.",高頻
malfunction,n.,故障,"The delay was caused by a computer malfunction.",高頻
procedure,n.,程序；步驟,"Please follow the safety procedures.",高頻
guideline,n.,指導方針,"Please read the guidelines before you begin.",高頻
extension,n.,延期；分機,"Please call me at extension 205.",高頻
attachment,n.,附件,"Please see the attachment for details.",高頻
correspondence,n.,信件往來,"Keep copies of all correspondence with clients.",高頻
memo,n.,備忘錄；內部通知,"The manager sent a memo to all staff.",高頻
notice,n.,通知；公告,"Please read the notice on the bulletin board.",高頻
venue,n.,場地,"The venue for the conference has changed.",高頻
banquet,n.,宴會,"The awards banquet will be held on Friday night.",高頻
reception,n.,歡迎會；接待處,"A reception will follow the ceremony.",高頻
registration,n.,報名；登記,"Online registration closes on May 1.",高頻
admission,n.,入場；入場費,"Admission is free for children under 12.",高頻
attendance,n.,出席；出席人數,"Attendance at the meeting was low.",高頻
participant,n.,參加者,"Each participant will receive a certificate.",高頻
sponsor,n.,贊助者,"The event was funded by several local sponsors.",高頻
audit,n.,稽核；審計,"The annual audit begins next week.",高頻
commute,v.,通勤,"Most employees commute by train.",高頻
fluctuate,v.,波動,"Prices fluctuate depending on the season.",高頻
decline,v.,下降；婉拒,"Sales declined sharply in the last quarter.",高頻
exceed,v.,超過,"Our profits exceeded expectations this year.",高頻
enclose,v.,隨函附上,"Please find enclosed a copy of the invoice.",高頻
renew,v.,更新；續約,"I need to renew my contract next month.",高頻
subscribe,v.,訂閱,"You can subscribe to our newsletter online.",高頻
accordingly,adv.,相應地,"Please read the rules and act accordingly.",高頻
accounting,n.,會計,"She works in the accounting department.",高頻
acknowledge,v.,確認收到；承認,"Please acknowledge receipt of this letter.",高頻
adjacent,adj.,鄰近的,"The parking lot is adjacent to the building.",高頻
administration,n.,行政；管理部門,"Please contact the administration office.",高頻
adopt,v.,採用,"The company adopted a new hiring policy.",高頻
affiliate,n.,關係企業；分支機構,"Our affiliate in Seoul handles Asian sales.",高頻
agent,n.,代理人；仲介,"Our travel agent booked the hotel.",高頻
amenity,n.,便利設施,"The hotel offers many amenities.",高頻
amend,v.,修訂,"The contract was amended last week.",高頻
analysis,n.,分析報告,"The analysis shows a drop in sales.",高頻
anticipate,v.,預計,"We anticipate strong demand this summer.",高頻
applicant,n.,申請人,"All applicants must have a degree.",高頻
appraisal,n.,評估；考績,"Your annual appraisal is next month.",高頻
approval,n.,批准；認可,"The plan needs approval from the board.",高頻
aspect,n.,方面,"We considered every aspect of the plan.",高頻
asset,n.,資產,"Our employees are our greatest asset.",高頻
assignment,n.,指派的工作,"He is on a special assignment in Paris.",高頻
assume,v.,假定；承擔,"She will assume the role of manager next month.",高頻
assure,v.,使放心；擔保,"I assure you that the problem will be fixed.",高頻
attire,n.,服裝,"Business attire is required for the dinner.",高頻
auditorium,n.,禮堂,"The awards ceremony will be held in the auditorium.",高頻
banking,n.,銀行業,"He has twenty years of experience in banking.",高頻
bankrupt,adj.,破產的,"The company went bankrupt last year.",高頻
boost,v.,提升；促進,"The new ads boosted sales.",高頻
breakthrough,n.,突破,"Scientists made a major breakthrough.",高頻
broadcast,v.,廣播；播送,"The speech will be broadcast live.",高頻
browse,v.,瀏覽,"Feel free to browse our online catalog.",高頻
bulk,n.,大量,"We get a discount when we buy in bulk.",高頻
bulletin board,n.,公布欄,"The schedule is posted on the bulletin board.",高頻
cancellation,n.,取消預約；撤銷,"Please call us 24 hours in advance for a cancellation.",高頻
capable,adj.,有能力的,"She is a very capable manager.",高頻
capital,n.,資本；首都,"We need more capital to expand.",高頻
carrier,n.,運輸公司；電信業者,"The carrier will deliver the goods on Monday.",高頻
caterer,n.,外燴業者,"The caterer will provide lunch for 50 people.",高頻
catering,n.,外燴服務,"Who is handling the catering for the event?",高頻
ceremony,n.,典禮,"The opening ceremony starts at ten.",高頻
chain,n.,連鎖店,"The hotel chain has 300 locations.",高頻
circulate,v.,傳閱；流通,"Please circulate this memo to all staff.",高頻
circumstance,n.,情勢；境況,"Under no circumstances should you share your password.",高頻
clarify,v.,澄清；闡明,"Could you clarify what you mean?",高頻
clearance,n.,清倉；許可,"The clearance sale ends on Sunday.",高頻
clerk,n.,職員；店員,"The clerk helped me find the right size.",高頻
collaborate,v.,協力合作,"We collaborated with a design firm.",高頻
commence,v.,正式開始,"The ceremony will commence at noon.",高頻
commission,n.,佣金,"Sales staff earn a commission on each sale.",高頻
commitment,n.,承諾；投入,"We thank you for your commitment to the company.",高頻
compensate,v.,賠償；補償,"We will compensate you for the damage.",高頻
compensation,n.,薪酬；賠償金,"The compensation package includes health insurance.",高頻
competitor,n.,競爭對手,"Our main competitor lowered its prices.",高頻
complex,adj.,複雜的,"This is a complex issue.",高頻
component,n.,零件；成分,"We import some components from Japan.",高頻
comprehensive,adj.,全面的,"We offer a comprehensive training program.",高頻
concise,adj.,簡潔的,"Please keep your report concise.",高頻
conclude,v.,結束；推斷,"The meeting concluded at five.",高頻
conduct,v.,進行；實施,"We will conduct a survey of our customers.",高頻
confirmation,n.,確認（函）,"You will receive a confirmation by email.",高頻
consecutive,adj.,連續的,"Sales have risen for three consecutive years.",高頻
consent,n.,許可；同意書,"We need your written consent.",高頻
consequently,adv.,因此,"The flight was canceled; consequently, we missed the meeting.",高頻
consistent,adj.,一致的；穩定的,"We provide consistent quality.",高頻
consolidate,v.,合併；鞏固,"We plan to consolidate our two offices.",高頻
consultant,n.,顧問,"We hired a consultant to improve our sales.",高頻
consumption,n.,消耗；消費量,"Energy consumption dropped by 10 percent.",高頻
contractor,n.,承包商,"The contractor finished the renovation on time.",高頻
convene,v.,召開,"The board will convene next Tuesday.",高頻
courtesy,n.,禮貌；好意,"Shuttle service is provided as a courtesy to guests.",高頻
coverage,n.,報導；保險範圍,"The event received wide media coverage.",高頻
credential,n.,資格證明,"Please bring your credentials to the interview.",高頻
critical,adj.,關鍵的；批評的,"This is a critical stage of the project.",高頻
crucial,adj.,至關重要的,"Customer feedback is crucial to our success.",高頻
currency,n.,貨幣,"You can exchange currency at the airport.",高頻
customize,v.,客製化,"You can customize the software to your needs.",高頻
cutting-edge,adj.,尖端的,"The lab uses cutting-edge technology.",高頻
dealer,n.,經銷商,"Please contact your local dealer.",高頻
debt,n.,債務,"The company paid off its debt.",高頻
deduct,v.,扣除,"Taxes are deducted from your salary.",高頻
deficit,n.,赤字,"The company reported a budget deficit.",高頻
depend,v.,依賴；取決於,"The price depends on the size.",高頻
designate,v.,指定,"Smoking is allowed only in designated areas.",高頻
detailed,adj.,詳細的,"Please send a detailed report.",高頻
determine,v.,確定；查明,"We need to determine the cause of the delay.",高頻
disclose,v.,揭露,"The company did not disclose the price.",高頻
discontinue,v.,停產；中止,"This model has been discontinued.",高頻
dispatch,v.,派遣；發送,"The order was dispatched this morning.",高頻
disruption,n.,中斷；干擾,"We apologize for the disruption to service.",高頻
distributor,n.,批發商；配銷商,"We are looking for a distributor in Europe.",高頻
diverse,adj.,多元的,"We have a diverse workforce.",高頻
dividend,n.,股利,"Shareholders will receive a dividend.",高頻
division,n.,事業部,"She manages the sales division.",高頻
domestic,adj.,國內的,"Domestic flights leave from Terminal 1.",高頻
downsize,v.,裁員；縮編,"The company plans to downsize next year.",高頻
durable,adj.,耐用的,"These bags are light and durable.",高頻
duplicate,n.,完全相同的複本,"Please make a duplicate of this key.",高頻
economical,adj.,節約的；經濟的,"This car is very economical.",高頻
eliminate,v.,消除,"We want to eliminate waste.",高頻
emphasize,v.,強調,"The manager emphasized the need for safety.",高頻
endorse,v.,背書；支持,"The plan was endorsed by the board.",高頻
enhance,v.,提升；增強,"The new design enhances the user experience.",高頻
enroll,v.,參加（課程）；註冊,"You can enroll in the course online.",高頻
enterprise,n.,企業,"We provide software for large enterprises.",高頻
entrepreneur,n.,企業家；創業者,"She is a successful entrepreneur.",高頻
equipped,adj.,配備的,"The rooms are equipped with free Wi-Fi.",高頻
exclusive,adj.,獨家的；高級的,"We have an exclusive offer for members.",高頻
executive,n.,高階主管,"The executives met to discuss the merger.",高頻
expedite,v.,加速處理,"Can you expedite my order?",高頻
expertise,n.,專業知識,"We need someone with technical expertise.",高頻
expiration,n.,到期,"Check the expiration date on your card.",高頻
expire,v.,到期；失效,"Your membership expires next month.",高頻
exposure,n.,曝光；接觸,"The ad gave our brand more exposure.",高頻
extensive,adj.,廣泛的；大量的,"She has extensive experience in sales.",高頻
facilitate,v.,促進；使便利,"The new software will facilitate communication.",高頻
feasible,adj.,可行的,"Is this plan feasible?",高頻
fiscal,adj.,財政的；會計年度的,"The fiscal year ends in March.",高頻
fluent,adj.,流利的,"She is fluent in English and Japanese.",高頻
formal,adj.,正式的（場合、服裝）,"The dinner is a formal event.",高頻
former,adj.,前任的,"He is a former employee of the bank.",高頻
franchise,n.,加盟店；經銷權,"He owns a fast-food franchise.",高頻
freight,n.,貨運,"The freight will arrive by ship.",高頻
fulfill,v.,履行；完成,"We were unable to fulfill your order.",高頻
fundraising,n.,募款,"The fundraising event raised $5,000.",高頻
generate,v.,產生,"The new store will generate more revenue.",高頻
grocery,n.,食品雜貨,"I need to stop at the grocery store.",高頻
gross,adj.,總的；毛的,"Gross sales reached $2 million.",高頻
handout,n.,講義,"Please take a handout before the seminar.",高頻
hazardous,adj.,有害的,"Hazardous materials must be stored safely.",高頻
hospitality,n.,款待；服務業,"Thank you for your kind hospitality.",高頻
identification,n.,身分證明,"Please bring photo identification.",高頻
illustrate,v.,說明；圖解,"This chart illustrates our growth.",高頻
impose,v.,施加；徵收,"The city will impose a new tax.",高頻
incentive,n.,誘因；獎勵,"We offer incentives to our top sellers.",高頻
incur,v.,招致；產生（費用）,"You may incur extra charges.",高頻
independent,adj.,獨立的,"An independent company will audit our accounts.",高頻
indicate,v.,顯示；指出,"The survey indicates that customers are happy.",高頻
inexpensive,adj.,不貴的,"The hotel is clean and inexpensive.",高頻
initial,adj.,最初的,"The initial cost is high.",高頻
initiative,n.,倡議；主動性,"The new initiative aims to cut costs.",高頻
innovative,adj.,創新的,"The company is known for its innovative products.",高頻
inspect,v.,視察；檢驗,"Officials will inspect the factory next week.",高頻
inspection,n.,檢查,"The building passed its safety inspection.",高頻
installation,n.,安裝工程；裝置,"Installation is free with every purchase.",高頻
instruction,n.,指示；說明,"Follow the instructions on the screen.",高頻
intensive,adj.,密集的,"The course is short but intensive.",高頻
interruption,n.,打斷,"Sorry for the interruption.",高頻
keynote,n.,主題演講,"The keynote speech will begin at 9 a.m.",高頻
landlord,n.,房東,"The landlord raised the rent.",高頻
layout,n.,版面配置；格局,"We changed the layout of the store.",高頻
leading,adj.,領先的,"We are a leading supplier of office furniture.",高頻
lecture,n.,演講；講座,"The lecture was very informative.",高頻
liability,n.,責任；負債,"The company has no liability for lost items.",高頻
likely,adj.,很有可能的,"It is likely to rain this afternoon.",高頻
logistics,n.,物流,"He works in logistics.",高頻
loyal,adj.,忠誠的,"We reward our loyal customers.",高頻
lucrative,adj.,獲利豐厚的,"It was a lucrative deal for both companies.",高頻
luxury,n.,奢華；奢侈品,"This hotel offers luxury at a fair price.",高頻
manual,n.,手冊,"Please read the manual before using the machine.",高頻
margin,n.,利潤率；邊緣,"Our profit margin is small.",高頻
marketing,n.,行銷,"She has ten years of experience in marketing.",高頻
merchandise,n.,所售商品,"All merchandise is 20 percent off this week.",高頻
milestone,n.,里程碑,"Reaching one million users was a major milestone.",高頻
minimize,v.,將…減到最小,"We need to minimize costs.",高頻
minutes,n.,會議記錄,"Please take the minutes at today's meeting.",高頻
modify,v.,修改,"You can modify your order online.",高頻
morale,n.,士氣,"Staff morale is high after the bonus.",高頻
motivate,v.,激勵,"Good managers motivate their teams.",高頻
municipal,adj.,市政的,"The municipal library is closed today.",高頻
mutual,adj.,相互的；共同的,"It was a mutual decision.",高頻
negotiation,n.,協商過程,"The negotiations lasted three weeks.",高頻
net,adj.,淨的,"Our net profit rose by 5 percent.",高頻
nominate,v.,提名,"She was nominated for the award.",高頻
numerous,adj.,許多的,"We received numerous complaints.",高頻
objection,n.,反對,"Does anyone have any objections?",高頻
obligation,n.,義務,"There is no obligation to buy.",高頻
occasion,n.,場合,"This dress is perfect for a special occasion.",高頻
occupancy,n.,住房率；佔用,"Hotel occupancy is high in summer.",高頻
offset,v.,抵銷,"Higher sales offset the rising costs.",高頻
ongoing,adj.,持續進行的,"The negotiations are ongoing.",高頻
operational,adj.,運作的；營運的,"The new factory is now operational.",高頻
optimistic,adj.,樂觀的,"We are optimistic about next year's sales.",高頻
optional,adj.,選擇性的,"Attendance at the dinner is optional.",高頻
orientation,n.,新人訓練；說明會,"New employees must attend orientation.",高頻
outline,n.,大綱,"Please send me an outline of your proposal.",高頻
outlet,n.,暢貨中心；插座,"There is an outlet near the window.",高頻
output,n.,產量,"Factory output rose by 10 percent.",高頻
outsource,v.,外包,"We outsource our IT services.",高頻
overdue,adj.,逾期的,"Your payment is two weeks overdue.",高頻
overhead,n.,經常性開支,"We need to reduce our overhead.",高頻
overlook,v.,俯瞰；忽略,"The hotel overlooks the harbor.",高頻
overnight,adv.,一夜之間；隔夜,"The package will be delivered overnight.",高頻
overview,n.,概要,"Here is a brief overview of the plan.",高頻
paperwork,n.,文書工作,"I have a lot of paperwork to finish.",高頻
patron,n.,顧客；贊助人,"The restaurant is popular with local patrons.",高頻
payroll,n.,薪資名冊；薪資發放,"Payroll is processed on the 25th.",高頻
pension,n.,退休金,"He receives a monthly pension.",高頻
periodically,adv.,定期地,"The system is checked periodically.",高頻
perishable,adj.,易腐壞的,"Perishable goods must be kept cold.",高頻
pharmaceutical,adj.,製藥的,"She works for a pharmaceutical company.",高頻
place an order,v.,下訂單,"You can place an order by phone.",高頻
portfolio,n.,作品集；投資組合,"Please bring your portfolio to the interview.",高頻
postage,n.,郵資,"Postage is included in the price.",高頻
potential,adj.,潛在的,"We met with several potential clients.",高頻
precaution,n.,預防措施,"Take precautions against fire.",高頻
preference,n.,喜好；優先選擇,"Do you have a seating preference?",高頻
preliminary,adj.,初步的,"The preliminary results look good.",高頻
premises,n.,場所；建築物,"Smoking is not allowed on the premises.",高頻
premium,n.,保費；額外費用,"The insurance premium went up this year.",高頻
prescription,n.,處方,"You need a prescription for this medicine.",高頻
prestigious,adj.,有聲望的,"She graduated from a prestigious university.",高頻
prior,adj.,事先的,"Prior experience is not required.",高頻
proceed,v.,繼續進行,"Please proceed to Gate 5.",高頻
proceeds,n.,收益,"All proceeds will go to charity.",高頻
productive,adj.,有生產力的,"It was a very productive meeting.",高頻
productivity,n.,生產力,"The new system improved productivity.",高頻
proficient,adj.,精通的,"Applicants must be proficient in Excel.",高頻
prominent,adj.,著名的；顯著的,"She is a prominent figure in the industry.",高頻
promptly,adv.,迅速地；準時地,"Please reply promptly.",高頻
proofread,v.,校對,"Please proofread the letter before you send it.",高頻
prospective,adj.,可能成為的；未來的,"We are meeting a prospective buyer.",高頻
prototype,n.,原型,"The engineers built a prototype of the new car.",高頻
provider,n.,供應者,"We are a leading provider of internet services.",高頻
provision,n.,條款；供應,"The contract includes a provision for late delivery.",高頻
proximity,n.,鄰近,"The hotel is in close proximity to the airport.",高頻
publicity,n.,宣傳,"The event received a lot of publicity.",高頻
punctual,adj.,準時的,"Please be punctual for the meeting.",高頻
qualification,n.,資格,"What qualifications do you have?",高頻
quota,n.,配額；業績目標,"She met her sales quota for the month.",高頻
quote,n.,報價,"Could you give me a quote for the repairs?",高頻
rapidly,adv.,迅速地,"Online sales are growing rapidly.",高頻
real estate,n.,不動產,"He works in real estate.",高頻
recall,v.,召回；回想,"The company recalled 10,000 cars.",高頻
recipient,n.,收件人,"Please check the recipient's address.",高頻
redeem,v.,兌換,"You can redeem your points for a free flight.",高頻
refer,v.,參考；轉介,"The doctor referred me to a specialist.",高頻
referral,n.,推薦；轉介,"We received the client through a referral.",高頻
refreshments,n.,茶點,"Refreshments will be served after the talk.",高頻
refurbish,v.,整修翻新,"The old hotel was refurbished last year.",高頻
reject,v.,拒絕,"The board rejected the proposal.",高頻
relevant,adj.,相關的,"Please include all relevant information.",高頻
reluctant,adj.,不情願的,"He was reluctant to change his plans.",高頻
remainder,n.,剩餘部分,"The remainder of the payment is due next month.",高頻
remark,n.,評論；言論,"He made a few remarks at the start.",高頻
remote,adj.,遠端的；偏遠的,"We hired a remote team of designers.",高頻
renewal,n.,續約,"Your contract is up for renewal.",高頻
rental,n.,租賃,"The car rental company is at the airport.",高頻
replacement,n.,替代品；替換,"We will send you a replacement free of charge.",高頻
representative,n.,代表人；業務代表,"A sales representative will call you.",高頻
requirement,n.,要求；必要條件,"What are the requirements for the job?",高頻
reschedule,v.,重新安排時間,"Can we reschedule the meeting to Thursday?",高頻
residential,adj.,住宅的,"This is a quiet residential area.",高頻
resolve,v.,解決（問題、爭議）,"We resolved the issue quickly.",高頻
restore,v.,修復；恢復原狀,"Power was restored after two hours.",高頻
restriction,n.,限制規定,"There are restrictions on carry-on bags.",高頻
retailer,n.,零售商,"We sell our products through major retailers.",高頻
retrieve,v.,取回,"I need to retrieve some files from storage.",高頻
revise,v.,校訂；修正,"Please revise the budget.",高頻
reward,n.,獎勵；報酬,"Members earn rewards for every purchase.",高頻
routine,n.,例行公事,"Checking email is part of my daily routine.",高頻
scenic,adj.,風景優美的,"We took the scenic route along the coast.",高頻
seasonal,adj.,季節性的,"We hire seasonal workers in December.",高頻
sector,n.,產業領域,"The technology sector is growing fast.",高頻
seminar,n.,專題討論會,"The seminar is free for members.",高頻
shortage,n.,短缺,"There is a shortage of skilled workers.",高頻
shortly,adv.,不久；馬上,"The doctor will see you shortly.",高頻
showcase,v.,展示,"The fair will showcase new technology.",高頻
shuttle,n.,接駁車,"A free shuttle runs between the hotel and the airport.",高頻
significant,adj.,顯著的；重要的,"There was a significant increase in sales.",高頻
specialize,v.,專精於,"Our firm specializes in tax law.",高頻
specification,n.,規格,"The product meets all technical specifications.",高頻
spokesperson,n.,發言人,"A company spokesperson answered questions.",高頻
stationery,n.,文具,"We order stationery once a month.",高頻
statistics,n.,統計數字,"The statistics show a rise in tourism.",高頻
streamline,v.,簡化；使效率更高,"We need to streamline the ordering process.",高頻
submission,n.,提交（物）,"The deadline for submissions is May 1.",高頻
subsidiary,n.,子公司,"The company has a subsidiary in Vietnam.",高頻
substitute,n.,代理人；代用品,"We need a substitute for the speaker.",高頻
summarize,v.,總結,"Please summarize the main points.",高頻
supervise,v.,督導；管理,"She supervises a team of ten.",高頻
surcharge,n.,附加費,"There is a surcharge for weekend delivery.",高頻
surplus,n.,盈餘；過剩,"The company had a budget surplus.",高頻
suspend,v.,暫停,"Service will be suspended during repairs.",高頻
sustainable,adj.,永續的,"We use sustainable materials.",高頻
tenant,n.,房客；承租人,"The tenants complained about the noise.",高頻
terminate,v.,終止,"Either party may terminate the contract.",高頻
testimonial,n.,推薦文；使用心得,"Read testimonials from our happy customers.",高頻
thorough,adj.,徹底的,"The inspector made a thorough check.",高頻
trainee,n.,受訓者,"Each trainee will be given a mentor.",高頻
transit,n.,運輸途中,"The goods were damaged in transit.",高頻
tuition,n.,學費,"The company will pay your tuition.",高頻
turnover,n.,營業額；人員流動率,"Staff turnover is very low here.",高頻
unanimous,adj.,一致同意的,"The decision was unanimous.",高頻
unavailable,adj.,無法取得的；沒空的,"The manager is unavailable today.",高頻
undergo,v.,經歷；接受,"The building will undergo renovation.",高頻
upgrade,v.,升級,"We will upgrade our computers next month.",高頻
utility,n.,公用事業（水電等）,"Utilities are included in the rent.",高頻
utilize,v.,利用,"We need to utilize our resources better.",高頻
vacancy,n.,空缺；空房,"We have a vacancy in the sales team.",高頻
valuable,adj.,有價值的,"Thank you for your valuable feedback.",高頻
vehicle,n.,車輛,"Please park your vehicle in the visitor area.",高頻
voucher,n.,優惠券；憑單,"Each guest will receive a meal voucher.",高頻
waive,v.,免除,"We will waive the delivery fee.",高頻
withdraw,v.,提款；撤回,"You can withdraw cash at any ATM.",高頻
workforce,n.,勞動力；全體員工,"Women make up half of our workforce.",高頻
workload,n.,工作量,"My workload is heavy this month.",高頻
workplace,n.,工作場所,"We want a safe and friendly workplace.",高頻
yield,v.,產生（收益）,"The investment yielded a high return.",高頻
absence,n.,缺席,"Please explain your absence from the meeting.",高頻
accessible,adj.,可到達的；可使用的,"The building is accessible by wheelchair.",高頻
accountable,adj.,應負責任的,"Managers are accountable for their team's results.",高頻
acquisition,n.,併購案,"The acquisition was completed in May.",高頻
adhere,v.,堅守（規定）,"All staff must adhere to the dress code.",高頻
advisable,adj.,明智的；可取的,"It is advisable to book early.",高頻
aggressive,adj.,積極進取的,"The company has an aggressive sales strategy.",高頻
allowance,n.,津貼,"Employees receive a travel allowance.",高頻
alliance,n.,聯盟,"The two airlines formed an alliance.",高頻
apparel,n.,服飾,"The store sells sports apparel.",高頻
appoint,v.,任命,"She was appointed head of sales.",高頻
archive,n.,檔案庫,"Old records are kept in the archive.",高頻
attendee,n.,出席者,"Each attendee will receive a name tag.",高頻
authentic,adj.,道地的；真正的,"The restaurant serves authentic Thai food.",高頻
automate,v.,使自動化,"We automated the billing process.",高頻
backlog,n.,積壓的工作,"We have a backlog of orders.",高頻
benchmark,n.,基準,"These results set a new benchmark.",高頻
bilingual,adj.,雙語的,"We are looking for a bilingual receptionist.",高頻
certify,v.,證明；認證,"All our technicians are certified.",高頻
clientele,n.,客戶群,"The shop has a loyal clientele.",高頻
commend,v.,稱讚；表揚,"The manager commended her for her hard work.",高頻
commodity,n.,商品；原物料,"Oil is an important commodity.",高頻
compile,v.,彙編,"Please compile a list of our clients.",高頻
complement,v.,補充；相輔相成,"The wine complements the meal perfectly.",高頻
concession,n.,讓步；特許經營,"Both sides made concessions.",高頻
conglomerate,n.,企業集團,"The conglomerate owns several hotel chains.",高頻
contingency,n.,意外事件；應急,"We have a contingency plan.",高頻
conversion,n.,轉換,"The conversion rate is listed on the website.",高頻
corporation,n.,公司；企業法人,"He works for a large corporation.",高頻
counterpart,n.,同等職位者,"She met her Japanese counterpart in Tokyo.",高頻
cutback,n.,削減,"The company announced budget cutbacks.",高頻
deduction,n.,扣除額,"Your pay slip shows all deductions.",高頻
defer,v.,推遲（付款等）,"You can defer payment until next month.",高頻
deliberate,adj.,故意的；慎重的,"It was a deliberate decision.",高頻
depot,n.,倉庫；車站,"The trucks return to the depot at night.",高頻
deteriorate,v.,惡化,"The weather is expected to deteriorate.",高頻
detour,n.,繞道,"Due to construction, please take a detour.",高頻
diligent,adj.,勤勉的,"She is a diligent worker.",高頻
discrepancy,n.,差異；不符,"There is a discrepancy in the figures.",高頻
dismiss,v.,解僱；解散,"The class was dismissed early.",高頻
drastically,adv.,大幅地,"Prices have dropped drastically.",高頻
eligibility,n.,符合條件與否,"Check your eligibility for the program.",高頻
emission,n.,排放,"We aim to cut carbon emissions.",高頻
endeavor,n.,努力；事業,"We wish you success in your future endeavors.",高頻
entitle,v.,使有權利,"Members are entitled to a discount.",高頻
evacuate,v.,疏散,"Staff were asked to evacuate the building.",高頻
evident,adj.,明顯的,"It is evident that sales are improving.",高頻
excursion,n.,短途旅行,"The hotel offers a day excursion to the islands.",高頻
exempt,adj.,被豁免的,"Food items are exempt from tax.",高頻
expansion,n.,擴張,"The company is planning an expansion into Asia.",高頻
expenditure,n.,支出總額,"Government expenditure on roads has increased.",高頻
fabric,n.,布料,"This shirt is made of cotton fabric.",高頻
finalize,v.,定案,"We need to finalize the contract by Friday.",高頻
fraud,n.,詐欺,"Report any fraud to the bank immediately.",高頻
grant,n.,補助金,"The school received a government grant.",高頻
hands-on,adj.,實作的；親身參與的,"The workshop provides hands-on training.",高頻
hectic,adj.,忙亂的,"It has been a hectic week.",高頻
inaugural,adj.,首次的；就職的,"The inaugural flight took off this morning.",高頻
incidental,adj.,附帶的,"Incidental expenses will be reimbursed.",高頻
inclement,adj.,（天氣）惡劣的,"The game was postponed due to inclement weather.",高頻
indispensable,adj.,不可或缺的,"She is an indispensable member of the team.",高頻
infrastructure,n.,基礎建設,"The city is investing in infrastructure.",高頻
insight,n.,洞察；見解,"The report offers useful insights.",高頻
integrate,v.,整合,"We will integrate the two systems.",高頻
itemize,v.,逐項列出,"Please itemize your expenses.",高頻
justify,v.,證明…正當,"Can you justify the extra cost?",高頻
legislation,n.,法律條文,"New legislation will take effect in July.",高頻
markup,n.,加價幅度,"The store adds a 30 percent markup.",高頻
mentor,n.,導師,"Each new employee is assigned a mentor.",高頻
merge,v.,使合併；併入,"The two banks will merge next year.",高頻
meticulous,adj.,一絲不苟的,"She is meticulous about details.",高頻
moderate,adj.,適度的；中等的,"Prices are moderate at this hotel.",高頻
negligible,adj.,微不足道的,"The difference in cost is negligible.",高頻
obsolete,adj.,過時的,"This software is now obsolete.",高頻
outage,n.,停電；中斷,"A power outage closed the store.",高頻
pending,adj.,待決的,"Your application is still pending.",高頻
permit,n.,許可證,"You need a permit to park here.",高頻
persistent,adj.,持續的；堅持不懈的,"We are working on the persistent network problems.",高頻
pertinent,adj.,切題的；有關的,"Please send all pertinent documents.",高頻
plummet,v.,暴跌,"Sales plummeted after the recall.",高頻
premier,adj.,首要的；一流的,"We are the premier hotel in the city.",高頻
procurement,n.,採購作業,"She works in procurement.",高頻
projection,n.,預估,"Sales projections for next year are strong.",高頻
quarterly,adj.,每季的,"The quarterly report is due next week.",高頻
reconcile,v.,核對（帳目）；調和,"Please reconcile the accounts by Friday.",高頻
reimbursement,n.,報銷款,"Submit your receipts for reimbursement.",高頻
remit,v.,匯款,"Please remit payment within 30 days.",高頻
renowned,adj.,享有盛名的,"The hotel is renowned for its service.",高頻
respondent,n.,受訪者,"Most respondents were satisfied.",高頻
revitalize,v.,使恢復活力,"The plan aims to revitalize downtown.",高頻
robust,adj.,強健的；穩固的,"The economy remains robust.",高頻
solicit,v.,徵求,"We are soliciting feedback from customers.",高頻
stakeholder,n.,利害關係人,"We met with all stakeholders.",高頻
stipulate,v.,規定；明訂,"The contract stipulates a delivery date.",高頻
subsequent,adj.,隨後的,"Subsequent meetings will be held online.",高頻
tariff,n.,關稅,"The government raised tariffs on imports.",高頻
trial,n.,試用；試驗,"You can get a free 30-day trial.",高頻
underway,adj.,已在進行中的,"Construction is already underway.",高頻
unprecedented,adj.,前所未有的,"Sales reached an unprecedented level.",高頻
wholesale,adj.,批發的,"We buy supplies at wholesale prices.",高頻
venture,n.,冒險事業；合資企業,"The two firms started a joint venture.",高頻`;
