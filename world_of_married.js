var storyContent = ﻿{"inkVersion":19,"root":[["^You are a doctor in her mid-40s. Everything around you is perfect. You have a loving husband and a beautiful son.","\n",{"#":"IMAGE: images/game1.png"},{"->":"FirstClue"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"FirstClue":[["^Your husband is leaving for work. It's a bit chilly outside.","\n","ev","str","^Bring him his jacket","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Bring him his scarf","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"Jacket"},"\n",{"#f":5}],"c-1":[{"->":"Scarf"},"\n",{"#f":5}]}],{"#f":1}],"Jacket":[["^As you pick up the jacket a lipstick falls out of the pocket. You don't recognize the brand.","\n","ev","str","^Interesting...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Reflection"},"\n",{"#f":5}]}],{"#f":1}],"Scarf":[["^As you pick up the scarf you notice a single strand of hair. The hair is light brown and healthy. Your hair is black.","\n","ev","str","^Interesting...","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Reflection"},"\n",{"#f":5}]}],{"#f":1}],"Reflection":[["^At work you can't help but wonder if what you saw this morning belonged to another woman. You ponder what to do.","\n","ev","str","^Keep it a secret","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Tell a coworker","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Confront your husband","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ You decide to keep it a secret. ",{"->":"phoneCall"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ You explain your concerns to your coworker. They tell you not to worry and that you are being paranoid. ","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["^ Your husband seems surprised and denies your accusation. ","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^You are still worried.","\n",{"->":"car"},{"#f":5}]}],{"#f":1}],"phoneCall":[["^<br>","\n","^Later that night you hear your husband talking on the phone to a mysterious person. He seems happy and talks unusually long.","\n","ev","str","^Ask him who he was talking to","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Say nothing","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^He smiles and says it was from work",{"->":"car"},"\n",{"#f":5}],"c-1":["^You say nothing to your husband and he puts the phone away and smiles. ",{"->":"cake"},"\n",{"#f":5}]}],{"#f":1}],"car":[["^<br>","\n","^You decide to follow your husband home from work in your car. He leaves work at 4 p.m. (he always told you he left at 9?) and stops by a flower shop.","\n","ev","str","^Continue following him","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^You continue to follow his car. Suddenly he pulls into a parking lot. You realize that you have arrived back at your workplace, the hospital. ","\n",["ev","str","^Follow him inside","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ Your husband leaves the flowers outside your office. ","\n",["ev","str","^Go up and hug him","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Ask him why he brought you flowers","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ He returns your hug. It is warm and reassuring. ","\n",{"->":"car.0.g-0"},{"#f":5}],"c-1":["^ He is surprised you did not appreciate his act of kindness. He says, \"I thought you would like them.\" ","\n",{"->":"car.0.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":[{"->":"cake"},{"#f":5}]}],{"#f":1}],"cake":[["^<br>","\n","^A week has passed since your initial suspicions and today is your husband's birthday! You and your son are preparing a special cake for his party. Choose your design!","\n","ev","str","^Design 1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Design 2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Design 3","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ ","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["^ ","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"party"},{"#f":5}]}],{"#f":1}],"party":[["^You arrive at the party. The decorations are beautiful.","\n","ev","str","^Get your camera","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Hug your husband","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^The camera is in your husband's car.","\n",["ev","str","^Go to the car","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"camera"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["^ Your husband hugs you back and smiles. ","\n",["ev","str","^Get your camera","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"camera"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"camera":[["^You find the camera, but notice the trunk cover is slightly open.","\n","ev","str","^Remove the trunk cover","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go back to the party","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^You remove the cover and notice there is a space for a spare tire. ","\n",["ev","str","^Open the compartment","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go back to the party","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ You open the compartment and find a mysterious backpack. ","\n",["ev","str","^Open backpack","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Backpack"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["^ ",{"->":"party"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["^ ",{"->":"party"},"\n",{"#f":5}]}],{"#f":1}],"Backpack":[["^In the backpack you find spare clothes, a toothbrush and a phone.","\n","ev","str","^Exmaine the clothes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Examine the toothbrush","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Examine the phone","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^It appears to be your husband's shirt <br> ",{"->":".^.^.^"},"\n",{"#f":5}],"c-1":["^You pick up the toothbrush it appears to be well-used. <br>  ",{"->":".^.^.^"},"\n",{"#f":5}],"c-2":["^ You open the phone only to find the home screen is a picture of a young, beautiful woman. ","\n",["ev","str","^Check his messages","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ The messages don't lie. \"Love you!\" <br>","\n","^\"Leaving work now! <br>","\n","^\"Wife is working late, have time to meet up?","\n",["ev","str","^Look back at your husband","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"woman"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"woman":[["^You look back at your husband and see him holding hands with the woman from the phone.","\n","ev","str","^Go back to the party","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Talk to your husband","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Confront your husband","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ It's your husband's birthday. You decide to let him have this day. ",{"->":"party"},"\n",{"#f":5}],"c-1":["^ Before walking over you grab a surgical knife from your first aid kit. ",{"->":"talk"},"\n",{"#f":5}],"c-2":["^ Before walking over you grab a surgical knife from your first aid kit. ",{"->":"confront"},"\n",{"#f":5}]}],{"#f":1}],"talk":["end",{"#f":1}],"confront":["end",{"#f":1}],"#f":1}],"listDefs":{}};