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
subscribe,v.,訂閱,"You can subscribe to our newsletter online.",高頻`;
