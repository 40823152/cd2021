var tipuesearch = {"pages": [{'title': 'about', 'text': '四設計二甲 \n 40823152 黃暐翰 \n \n cd2021 \n 個人倉儲: github \n 團隊網站: \xa0 stage1-ag21 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 stage1-ag21 (備用) \n 團隊倉儲:   stage1-ag21 (主) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 stage1-ag21(備用) \n \n 歷年紀錄: \n \n cp2020 \n 個人倉儲: github \n 個人網頁: 40823152cp2020 \n 小組網頁: 40823152cp2020bg3 \n \n cad2020 \n 個人倉儲: github \n 個人網頁: 40823152cad2020 \n', 'tags': '', 'url': 'about.html'}, {'title': 'W1-W4', 'text': '', 'tags': '', 'url': 'W1-W4.html'}, {'title': 'W1', 'text': '1.架設cd2021網站 \n 倉儲: https://github.com/40823152/cd2021 \n 2.使用leo \n 改成自己網站的網址 \n \n \n \n 3.組員分配 \n 40823152,40823153 \n \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'leo教學', 'text': '1.首先進入到 y/home/.leo 底下新增 .leolD.txt 的文件檔才能打開leo。 \n \n 2.必須進到cd2021才能打開leo \n \n 3.把@edit改成@clean(edit只能執行單層程式，clean可以執行多層程式)，ctrl+i即可複製20210813 \n \n 4.ctrl+R往右移 \n \n 5.把名稱多加-1，使檔案名稱不重複 \n \n 6.滑鼠右鍵Goto Script ，並且在y/tmp/cd2021下執行右邊 紅線 的指令 \n \n \n \n 7.存檔 \n \n 8.y/tmp/cd2021/markdown 出現第2個20210813.md檔案 \n \n 9.執行 http-server.py\xa0 \n \n 10.進入https://localhost8444 打開blog 可發現到2個相同文章 \n \n \n 11.改成自己的網址 \n \n \n \n 12.先git pull再git add ./git commit-m /git push 上傳\xa0 \n \n \n \n', 'tags': '', 'url': 'leo教學.html'}, {'title': '分組(2人專案)', 'text': '2021-協同產品設計實習-stage1-ag21 \n 專題題目:籃球機 \n 組員倉儲: 40823152 \xa0網站: 40823152 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40823153 \xa0 \xa0 \xa0 \xa0 40823153 \n \xa0 \xa0 \xa0  \xa0 \xa0 \xa0 40823154 \xa0 \xa0 \xa0 \xa0\xa0 40823154 \xa0 \n \n coppeliaSim模擬:40823152 \n 繪圖人員:40823153 \n 機構設計意見:40823152，40823153 \n 主題構想:40823152 \n \n pdf製作:40823154 \n \n invertor 工程圖:40823154 \n \n', 'tags': '', 'url': '分組(2人專案).html'}, {'title': 'W2', 'text': '\n \n', 'tags': '', 'url': 'W2.html'}, {'title': '轉軸問題', 'text': 'coppeliaSim檔案 \n 擊球桿無法正常轉動 \n \n \n coppeliaSim檔案 \n 擊球桿正常轉動 \n \n \n 解決方法: \n 繪圖人員修改尺寸即可正常轉動 \n', 'tags': '', 'url': '轉軸問題.html'}, {'title': '擊球問題', 'text': '擊球問題: \n coppeliaSim模擬: 版本 0 \n 最初的版本一使用coppeliaSim模擬球無法飛遠或高。 \n \n \n 問題修改-1 \n coppeliaSim模擬:版本1 \n 繪圖人員修改了擊球棒尺寸，使用coppeliaSim模擬球可以飛高。 \n \n \n \n 問題解決: \n coppeliaSim模擬:版本2 \n 繪圖人員調整及球棒前端的角度，使用coppeliaSim模擬球可以飛遠且有一定的高度。 \n \n \n 版本2 擊球點圖片 \n 一開始擊球點位置 \n \n 球沿著斜面跑到頂點擊出，球即可飛高且遠。 \n \n', 'tags': '', 'url': '擊球問題.html'}, {'title': 'coppeliaSim 比例問題', 'text': '問題: \n coppeliaSim模擬:版本3 \n 經過版本2的計算後的距離，繪圖人員新增籃框與調整距離，但是使用coppeliaSim模擬球擊不遠。\xa0 \n \n \n 問題討論: \n 以下是2個版本的stl檔，打開檔案會發現2個檔案大廈會差不多，但是放到 coppeliaSim裡，版本2比例會自動放大。 \n 第二版本stl檔 \n 第三版本stl檔 \n \n \n 以下是版本2與版本3使用參數一樣模擬的影片 \n \n \n 解決版本: \n coppeliaSim模擬:版本4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n \n \n 結論: \n 沒想到 coppeliaSim的比例不一樣，模擬會差很多，我猜想是因為軸放大10倍，導致紐力矩也放大10倍，因為力量不一樣，所以距離有差。 \n \n', 'tags': '', 'url': 'coppeliaSim 比例問題.html'}, {'title': 'W3', 'text': '整理資料 \n \n 工作流程 \n', 'tags': '', 'url': 'W3.html'}, {'title': '製作簡報', 'text': 'reval \n 使用leo可打開reval.lio即可做出簡報，將html的內容放到裡面保存，即可完成以下圖示。 \n \n \n \n', 'tags': '', 'url': '製作簡報.html'}, {'title': '小組網站(共同維護)', 'text': '團隊網站: \xa0 stage1-ag21 (主) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 stage1-ag21(備用) \n 團隊倉儲: \xa0 stage1-ag21 (主) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 stage1-ag21(備用) \n \n 使用cms打開網站 \n 使用acp 命名上傳 \n 使用git push 40823153(上傳到組員的網站) \n', 'tags': '', 'url': '小組網站(共同維護).html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '報告', 'text': 'pdf檔 \n reveal \n 報告影片 \n \n', 'tags': '', 'url': '報告.html'}, {'title': 'cd2021_2a_age影片排序', 'text': '使用 Ant Renamer \xa0進行影片排序動作。 \n 操作時間:1min以內完成 \n 操作完影片檔案 \n \n \n', 'tags': '', 'url': 'cd2021_2a_age影片排序.html'}, {'title': 'Ant Renamer 操作說明', 'text': 'Ant Renamer download \n \n 示範影片: \n \n \n 示範過程: \n 1.下載壓縮包 \n \n \n \n 2.解壓縮檔案，並執行Renamer.exe \n \n \n 3.選擇語言 \n \n \n 4.選擇新增檔案 \n \n \n 5.右鍵點分組方式，選擇修改日期並且遞增 \n \n \n 6.全選影片再按開啟 \n \n \n 7.選擇動作(若是跟圖片不一樣，請按全部移除，重做第6步驟) \n \n \n 8. 1:修改名子 2:選擇2 3:打勾批量 4:檢查\xa0 \n \n \n 9.查看名子對錯並且按執行 \n \n \n 10.完成 \n \n \n', 'tags': '', 'url': 'Ant Renamer 操作說明.html'}, {'title': 'W5-w9', 'text': '', 'tags': '', 'url': 'W5-w9.html'}, {'title': 'W5', 'text': '1.分組網站創建 \n 2.確認主題 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'stage2-ag12', 'text': 'stage2-ag12 \n 組員 \n \xa0 40823152 repo \xa0 | \xa0 40823152 site \xa0 | \n \xa0 40823153 repo \xa0 | \xa0 40823153 site \xa0 | \n \xa0 40823125 repo \xa0 | \xa0 40823125 site \xa0 | \n \xa0 40823110 repo \xa0 | \xa0 40823110 site \n \n', 'tags': '', 'url': 'stage2-ag12.html'}, {'title': '產品目標', 'text': '主題:籃球機 二代 \n \n 動機: \n 第一次小組產品的籃球機只能自己轉動無法控制，所以二代的籃球機目標增加案件控制轉動。 \n \n 製作規劃: \n w5:確認主題，工作分配 \n \n w6:尋找lua程式與 coppeliaSim 文章 ，並且使用lua程式控制軸在coppeliaSim裡模擬，籃球機外觀修整。 \n \n w7:完成按鍵控制程式與模擬 ，籃球機外觀修整。 \n \n w8:除錯與修整，完成簡報與pdf \n \n w9:報告 \n', 'tags': '', 'url': '產品目標.html'}, {'title': '工作分配', 'text': '\n 40823152:coppeliaSim 模擬 ，程式設計，尋找資料 \n 40822310: 程式設計，尋找資料 \n 40823125:機構設計，尋找資料，簡報製作，heroku創建 \n 40823153:Inventor 畫圖 ， coppeliaSim 模擬', 'tags': '', 'url': '工作分配.html'}, {'title': 'W6', 'text': 'Lua control speed \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'Lua control speed', 'text': "Lua control speed \n \n 使用lua控制軸的轉速 \n 程式碼: \n function sysCall_init()\n    -- do some initialization here\n     joint=sim.getObjectHandle('Revolute_joint')\n     sim.sJointTargetVelocity(joint,5.5) \n \n 介紹: \n 1. 設joint 為轉軸 \n  joint=sim.getObjectHandle('Revolute_joint')  \n 2.設 joint\xa0的 速度 \n sim.sJointTargetVelocity(joint,5.5) \n \n", 'tags': '', 'url': 'Lua control speed.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'keyboard control', 'text': "使用keyboard \xa0控制軸的啟動 \n ccoppeliasim \n lua程式碼 \n function sysCall_init()\n    -- do some initialization here\n     joint=sim.getObjectHandle('Revolute_joint')\n     sim.sJointTargetVelocity(joint,5.5)\n     number=-10\n     \n     \n \n\n\nend\n\nfunction sysCall_actuation()\n message,auxiliaryData=sim.getSimulatorMessage()\n if (message==sim.message_keypress) then\n      if (auxiliaryData[1]==2007) then\n      sim.setJointTargetVelocity(joint,number)\n      end\n      if (auxiliaryData[1]==2008) then\n      sim.setJointTargetVelocity(joint,0)\n      end\n end    \n\n\nend \n \n 1.定義2個參數為sim.getSimulatorMessage() \n message,auxiliaryData=sim.getSimulatorMessage() \n \n 2.當參數為鍵盤up按鍵，使軸轉number的速度 \n  if (message==sim.message_keypress) then\n      if (auxiliaryData[1]==2007) then\n      sim.setJointTargetVelocity(joint,number)\n      end \n \n \n", 'tags': '', 'url': 'keyboard control.html'}, {'title': 'keyboard control for Four-bar linkage', 'text': 'ccoppeliasim \n', 'tags': '', 'url': 'keyboard control for Four-bar linkage.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'Inquire keyboard number', 'text': "查詢keyboard按鍵 \n print(auxiliaryData[1])\n      if (auxiliaryData[1]==string.byte(' ')) then \n \n 介紹: \n 可以查詢鍵盤代碼 \n \n \n 參考資料 \n", 'tags': '', 'url': 'Inquire keyboard number.html'}, {'title': 'basketball Machine 2.4.3', 'text': '1.擊球桿新增後轉功能，可以有效控制擊球的時機。 \n coppeliaSim \n', 'tags': '', 'url': 'basketball Machine 2.4.3.html'}, {'title': 'stage1-product', 'text': '', 'tags': '', 'url': 'stage1-product.html'}, {'title': '版本一', 'text': '籃球機 初代 \n coppeliaSim模擬: 版本0 \n 最初的版本使用coppeliaSim模擬球無法飛遠或高。 \n \n \n \n \n', 'tags': '', 'url': '版本一.html'}, {'title': '版本二', 'text': '籃球機 2 \n coppeliaSim模擬:版本2 _ \n \n 繪圖人員調整及球棒前端的角度，使用coppeliaSim模擬球可以飛遠且有一定的高度。 _ \n \n \n \n \n \n 版本2 擊球點圖片 \n 一開始擊球點位置 \n \n 球沿著斜面跑到頂點擊出，球即可飛高且遠。 \n \n', 'tags': '', 'url': '版本二.html'}, {'title': '版本三', 'text': '籃球機 3 \n coppeliaSim模擬:版本3 \n 經過版本2的計算後的距離，繪圖人員新增籃框與調整距離，但是使用coppeliaSim模擬球擊不遠。\xa0 \n \n \n \n \n', 'tags': '', 'url': '版本三.html'}, {'title': '版本四', 'text': '籃球機 4 \n coppeliaSim模擬:版本4 \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以在 coppeliaSim裡 版本4放大10後就能擊中籃框。 \n \n \n 因為版本2在 coppeliaSim裡被自動放大10倍，所以版本3無法擊中籃框，所以版本4放大10後就能擊中籃框。 \n 可調性 \n \n \n \n \n \n \n \n', 'tags': '', 'url': '版本四.html'}, {'title': 'pdf', 'text': '40823154 :\xa0 pdf \xa0 \n', 'tags': '', 'url': 'pdf.html'}, {'title': 'Stage2-product', 'text': '', 'tags': '', 'url': 'Stage2-product.html'}, {'title': 'Stage3', 'text': '', 'tags': '', 'url': 'Stage3.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': '', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '小車api \n 成功畫面 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \xa0 \xa0 \n \n 失敗: \n \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \n 錯誤討論: \n http://mde.tw/cd2021/content/task2.html \n 必須要: \xa0上面 sim.py , \xa0 simConst.py \xa0 與 \xa0 remoteApi.dll \xa0這 三個檔案，不能使用coppeliaSim 內建的檔案，不然會發生錯誤，無法啟動ˋ小車 \n \n \xa0 \n 使用小車python程式改成stage1-ag12 籃球機 \n', 'tags': '', 'url': 'task2.html'}, {'title': 'Bug', 'text': '\n', 'tags': '', 'url': 'Bug.html'}, {'title': 'Wsgi.py 打不開', 'text': "\n 問題: \n 新創小組倉儲，想要打開動態網頁出現以下問題 \n \n 我的解法如下，底下有正確解。 \n \n \n 解決方法: \n 1.把倉儲裡的localhost.crt', 'localhost.key 檔案要拉到cmsimde資料夾裡面 \n 2.執行python wsgi.py，即可解決問題 \n \n \n \n \n \n 正確解: \n 因為老師想要在倉儲裡直接打開網站和上傳資料，所以在cmsimde目錄下打開網頁會出問題。 \n 直接在倉儲目錄裡打cms可打開網頁，用acp即可上傳至github。", 'tags': '', 'url': 'Wsgi.py 打不開.html'}]};