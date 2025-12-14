import { Link } from 'react-router-dom';
import { getImageUrl } from '../../data/mediaData';
import './InfoDetailPage.css';

function HistoryPage() {
  return (
    <div className="info-detail-page">
      {/* Blurred background */}
      <div 
        className="info-detail-background-blur"
        style={{
          backgroundImage: `url(${getImageUrl('/src/img/Information/cover.JPG')})`
        }}
      />
      
      <header className="detail-header">
        <Link to="/gallery/0" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Information
        </Link>
      </header>

      <div className="info-page-content">
        <h1>The History of the Chicken Run</h1>
        
        <div className="info-section">
          <h2>How It All Got Started</h2>
          <p><em>By John R. Holt - Cofounder</em></p>
          
          <blockquote className="opening-quote">
            "What would normally be a drive through the country becomes a sensuous experience, with that lazy hawk gliding overhead, the sun soaked wind on your cheek - and 1100 cubic centimeters of roaring, power-laden engine hovering under the grip of your hand, trembling beneath the sole of your boot, ready to propel you down that infinite, winding ribbon of American blacktop. Muscle and Zen. Power and peace. Aloneness and oneness."
            <cite>- Gayle Worland, Washington Post</cite>
          </blockquote>

          <p>
            As cofounder of what is known as the "Chicken Run", I suppose it is up to me to describe it's history, long time participants, how it got started, and the origins of some of it's traditions.
          </p>

          <h3>The Discovery - Memorial Day 1979</h3>
          <p>
            John Lyons and I were out for a weekend ride, Memorial Day weekend 1979. We were entering a little small town in WV called Brandywine, and since it was nearing lunch time, we decided to seek out a restaurant in this place. These small towns can usually support at least one. When we stopped, there was a strong bouquet of barbecue in the air. We knew it wasn't coming from the restaurant so we investigated. It turned out that the local Fire and Rescue Squad was having a fund-raiser by selling barbecued chicken halves. They had built a long cinder-block pit about 20 feet long and 3 feet wide complete with a roof overhead and were barbecuing about 800 chickens. Since the population of the town was probably no more than 300, they depended a lot on passers-by. What the heck, lets try it.
          </p>

          <p>
            We both agreed that it was just about the best-barbecued chicken we ever had! Of course the fresh mountain air blasting your face all morning and the exhilaration of riding the never-ending two lane blacktop may have something to do with the perceived excellence of taste, or maybe it is that good. As Duke Ellington almost said, "if it tastes good, it is good."
          </p>

          <h3>The Return</h3>
          <p>
            After we got back from the weekend trip and went back to work, we kept talking about how good that chicken was and how much fun it was to ride in that part of WV. We decided we had to go back. So, John, being a particularly resourceful person somehow got in touch with somebody in Brandywine. He found that not only did they barbecue chicken every year, but twice per year, Memorial and Labor Day weekends. Another trip was hastily planned for the coming Labor Day weekend.
          </p>

          <p>
            Sometimes, after a pleasant experience, you think about it so much and build it up so much in your mind, that when you go back to try it again you find that it is not as good as you had remembered or imagined. ("You can never go back.") Not so in this case! The chicken was just as good as we remembered and we had another blast riding in WV. So, a tradition was born. We kept going back time after time. Of course, the chicken was just an excuse for a motorcycle ride, but still, the chicken was very good.
          </p>

          <h3>The Secret Recipe Quest</h3>
          <p>
            John and I started trying to figure out what was in the barbecue sauce. We asked the guys at the firehouse, but they didn't know. "Some little old lady comes and makes the sauce." We even resorted to looking through the trash at the firehouse. Based on information from the trash and our taste buds, we could get close but not quite. John, somewhat of a gourmand, suggested all kinds of exotic spices. ("Is that a touch of Curry I detect in there?")
          </p>

          <p>
            Then, one Labor Day weekend we were standing there watching them barbecue and getting ready to buy some chicken, when a little old lady in a pickup truck drove up, got out carrying a cardboard box of ingredients and proceeded to make a batch before our very eyes. Of course! These are relatively poor country folks. They wouldn't be using any exotic expensive ingredients. Everything in the sauce can be bought at the 7-11!
          </p>

          <p>
            We went home and experimented some more but we couldn't quite get the texture right. The next time we were there again watching, I noticed that when they took the chicken halves off the grill they immediately wrapped them in aluminum foil, put them in an empty potato chip can, and sat the can next to the grill to keep them warm. Of course the chicken kept cooking slowly in its own heat. So, when I got home I barbecued some halves, then put them in a covered dish and put them in a low temperature oven for an hour or two. Finally, I had the secret.
          </p>

          <p>
            Of course, dummy! There is a difference between barbecuing and grilling. That's what barbecue is! You have to cook it REAL SLOW!!
          </p>

          <div className="recipe-section">
            <h3>Brandywine Barbecued Chicken (Makes a lot)</h3>
            <div className="recipe-ingredients">
              <ul>
                <li>1 Cup of Campbells Tomato Juice</li>
                <li>3 T Black Pepper</li>
                <li>1 Cup Apple Cider Vinegar</li>
                <li>1/2 T Salt</li>
                <li>2 T Garlic Powder</li>
                <li>1 T Onion Salt</li>
                <li>1 1/2 Cups Wesson Vegetable Oil</li>
                <li>1 T Tabasco Sauce</li>
              </ul>
            </div>
            <div className="recipe-instructions">
              <p>
                Cut whole chickens in half. Stir and sprinkle chicken with sauce. Put immediately on the grill. Grill chicken slowly turning often until chicken looks done. [The guys at the Brandywine Firehouse stir the sauce with a toilet bowl cleaner (hopefully a new one) and flick the sauce on the chicken every time they turn them.] After grilling is complete, put halves in oven proof dish and cover with lid or aluminum foil. Bake in oven for 1 to 2 hours at low temperature (250 degrees). Remove lid or foil the last 10 minutes.
              </p>
            </div>
          </div>
          <p>
            Since 1979 there have been perhaps 50 different people that have accompanied me on the Chicken Run; as many as 12 and as few as 2 bikes making the run at one time. Some of these people have resulted in life-long friends and biker buddies. That's why I take it so seriously. It's also two of my favorite things to do, riding my motorcycle in WV and eating good Q.
          </p>
          <p>
            Riding over to Brandywine for chicken and spending the nights at the Snowshoe ski resort or other closeby place is great fun but doing it only twice per year just wasn't enough. There is a lot of riding weather left after Labor Day. In fact, my favorite time of year for riding and most other activities in this part of the world is between Labor Day and Thanksgiving.
          </p>

          <p>
            John and I had a friend, Barbara Burch, who owned a Condo at the Snowshoe ski resort. During the off-season, she would let us use her Condo for a very nominal fee. So, one October we decided to go again during the height of Fall foliage. We didn't call this ride the Chicken Run at that time because there was no chicken to be had. We called it the "Fall Foliage Tour". It soon also developed into another ride that has become an annual tradition. Sometimes the weather can get downright cold, but for pure riding, it is my favorite of the year. And, it has become the third leg of the Chicken Run on Columbus Day weekend though we don't have chicken.
          </p>

          <p>
            So, when John and I got to the Snowshoe area that first time we were hungry and pretty cold. We decided that cooking a batch of chili at Barb's condo was the thing to do. Neither of us had a chili recipe with us, but both of us had cooking experience. Here's the recipe we came up with. It turned out to be a very good one.
          </p>

          <div className="recipe-section">
            <h3>Snowshoe Chili</h3>
            <div className="recipe-ingredients">
              <ul>
                <li>1 Large Onion</li>
                <li>1 Large Green Pepper</li>
                <li>Oil or Margarine</li>
                <li>1 lb. lean Ground Beef</li>
                <li>Salt and Pepper</li>
                <li>1 Can (~15 oz) tomato puree</li>
                <li>1 Can Chili, Kidney or Pinto Beans</li>
                <li>Beer (Dark beer is better)</li>
                <li>2 t Cumin Seed & 1to2 T Chili Powder</li>
                <li>1/4 - 1/2 t Tabasco Sauce</li>
                <li>1/2 lb. Sharp Cheddar Cheese</li>
              </ul>
            </div>
            <div className="recipe-instructions">
              <p>
                Sauté chopped onion and green pepper in oil until tender. Add meat and sauté until just brown. Add puree and spices. Add beer to desired consistency. Simmer for 30 minutes to 2 hours. Longer is better. Adjust spices and beer to desired consistency and taste. Add beans and heat to serving temperature. Serve with cheese on top, crackers or corn chips.
              </p>
            </div>
          </div>

          <p>
            Since then I have modified this recipe several times but basically, it hasn't changed all that much. I still often cook this or a variation of this Chile once per year on the "Fall Foliage" tour but we haven't started calling it the "Chili Run" yet.
          </p>
          <h3>Chicken Run Founders</h3>
          <div className="founder-section">
            <div className="founder-profile">
              <div className="founder-image">
                <img src="/founders/john-holt-bmw.jpg" alt="John Holt on his BMW R1100RT" />
              </div>
              <div className="founder-text">
                <p>
                  At left is yours truly, <strong>John Holt</strong>, on my '96 BMW R1100RT shortly after I bought it. My first CR bike was a 1975 Kawasaki Z1. Then I got a '81 Kawasaki GPZ-1100 which I rode for 11 years, then a '93 BMW K1100RS.
                </p>
                <p>
                  Since 1979 I have not missed going on the Chicken Run more than 4 or 5 times - and the times I did miss were usually because I was going somewhere else on a motorcycle ride.
                </p>
              </div>
            </div>
          </div>
          <div className="founder-section">
            <div className="founder-profile">
              <div className="founder-image">
                <img src="/founders/john-holt-bmw.jpg" alt="John Holt on his BMW R1100RT" />
              </div>
              <div className="founder-text">
                <p>
                  One of my all time favorite riding buddies was <strong>John Lyons</strong>, Cofounder and the person who named it the "Chicken Run", shown here on his brand new 1979 Suzuki GS1000E. If I am not mistaken, this picture was taken on the original run, which was a break-in ride for Lyon's new bike. Unfortunately for me, in the mid-80s he got divorced, moved to the west coast, sold his motorcycle, married a west coast girl and stayed out there. He was one of my favorites because he was one of my best friends for a short time. He was also a good rider and liked to ride the same way and same places I did. Lyons adhered to the pre-Kenny Roberts style of riding. He's a smallish guy and never shifted his weight around while riding, like hanging to the inside of a curve. He just hung on and went like hell. I often couldn't keep up with him, even though I rode pretty fast myself in those days.
                </p>
                <p>
                  I think I learned a lot from Lyons. John knew how to enjoy life and he taught me a lot about the value of quality, though I didn't realize it at the time. Perhaps it was his silver-spoon-in-the-mouth upbringing. John was not wealthy himself at the time of our friendship. If he got any serious money from his father, it came much later in his life, but it was not in Johns vocabulary of ideas to state that he was not going to do something, or get something, because he couldn't afford it. Even if he really couldn't afford it, he would never say so. The idea of unaffordability was simply not a concept that he grew up with or used. Rich people can afford almost anything. So, affordability is never the primary consideration. In contrast, my early years were a constant struggle to afford basic essentials. Affordability was always the <u>first</u> consideration. I guess opposites do attract. Lyons celebrated life to the maximum extent of his priorities. Riding a motorcycle in the hills of West Virginia was one of those pleasures that his priorities allowed. We had a lot of great times in a relatively short span, many of which were on the Chicken Run. 
                </p>
                <p>
                  Some of the things we did together on motorcycles in the late 70s to early 80s live on as traditions and have spread to my current biker friends. On one of the Chicken Runs, John came up with this. He used to joke about the "big 3 pleasures of life", namely, food, sex and motorcycles (not necessarily in that order). When we had a great meal on one of our trips, John would lean back, pat his tummy and say, "well, two out of three ain't bad". On our present-day CRs that expression almost always gets repeated, especially by me since I am such a food fan and my wife never rides with me any more. After he separated from his wife, he brought his new girlfriend with him on one of our last CRs together. After a great meal we cooked they were cuddled up on the sofa of the condo we were renting. I said, "John, you finally did it, three for three!"
                </p>
              </div>
            </div>
          </div>
          <div className="founder-section">
            <div className="founder-profile">
              <div className="founder-image">
                <img src="/founders/john-holt-bmw.jpg" alt="John Holt on his BMW R1100RT" />
              </div>
              <div className="founder-text">
                <p>
                  My oldest and most loyal friend and riding partner, <strong>Forrest Walls</strong> with his Triumph (Photo by Jeff Hughes)
                </p>
                <p>
                  John Lyons may have been my most compatible riding partner on the road, but Forrest Walls has been my most compatible all-around friend and riding partner. Even though Forrest was not along on that 1979 Memorial day ride, he was on the second or third CR and I think of him as a cofounder because he has been on more CRs than anybody except me. Forrest and I have known each other most of our lives. We seemed to hit it off from the beginning and have been constant friends and frequent companions since about 1961. Since Forrest also grew up in small-town Arkansas, he and I have as much a similar background as Lyons and I were different.
                </p>
                <p>
                  Forrest is a very careful rider. That doesn't necessarily mean slow. Well, maybe slow compared to the guys he normally rides with. I believe Forrest is the only one of the current frequent riding partners that has not had a significant crash since we've been riding together. Duh, maybe there is a reason.
                </p>
                <p>
                  On one early CR, Forrest was breaking in a new bike. A brand new Honda 750 Saber. Lyons was interested in riding it so he and Forrest switched bikes as we left Brandywine. As usual, Lyons and I got a little ahead of Forrest. After going through Franklin, we stopped to wait at the left turn as we were leaving Franklin to stay on route 33. We waited, and waited. Finally we doubled back and rode all the way back to Brandywine. No Forrest in sight. Lyons was somewhat agitated because he had left his wallet, including all his money and driver's license in his bike. When we finally got to Snowshoe mountain late that evening, Forrest was there waiting for us. This would not be the last time that the tortoise beat the hare(s). This experience and others like it resulted in a set of unwritten rules for the Chicken Run: 
                </p>
                <ol>
                  <li>Ride at your own pace, whatever that happens to be. There is no pressure to keep up with the guy in front of you. This applies on and off the road.</li>
                  <li>One is not allowed to put anybody down or complain about someone riding (or eating or dressing or anything) too slow, or too fast for that matter. One must make every effort to leave one's ego and testosterone reserve at home.</li>
                  <li>Any time there is a change in route number or any chance of confusion about which way the group is going, one always waits for the person behind you no matter how experienced or knowledgeable that person is. I.e., you are responsible for the person behind you not getting separated.</li>
                </ol>
                <p>
                  Of course I have broken all of these rules at one time or other, but we all try hard and we're getting better as we get more experienced. That's it! These are the only rules for Chicken Runners.
                </p>
                <p>
                  After Lyons left for the coast, Forrest and I carried on with the Chicken Runs. It was sort of a slack period after that. Not because Forrest wasn't a good riding companion, but he was about the only one I had, and our schedules were often at odds. Also, there was about a five year period where Forrest didn't ride at all. Even though we stayed friends and saw each other often, he just didn't ride. I won't get into why, but he had good reasons. The neat thing though was that he came back to it later. He never quit riding in his mind. Oh, there were other would-be CR people. A couple of times I organized people at work who owned bikes to go on the CR, but at the first sign of iffy weather, or even for no reason at all, most of them would cancel out at the last minute. I needed to find some serious rider dudes in addition to Forrest.
                </p>
                <p>
                  It was either 1987 or '88 in the middle of this slow period when I met David Sulser. Forrest started riding again and the CR has been in full swing ever since. Thanks to David I met several other serious enthusiasts. I met Jeff Hughes, who has probably been the most consistent participant over the last few years. I believe Jeff has come to the same understanding with his family that I have. Namely, that there are three non-negotiable weekends that I go ride with my biker buddies. Period. Plan around it and deal with it. Any other time of year is negotiable. It works! 
                </p>
                <p>
                  Through Jeff I met two other serious riders, Kevin Hawkins and Jay Tarry, who usually provide a good dose of friendly humor, both longtime friends of Jeff. Jay moved to Florida and Kevin moved to Greensboro, NC, but that's near enough so that he meets us in WV for most of the CRs. He often brings one or more of his NC riding buddies, all great guys and responsible riders, and the progression goes on. Jeff also introduced us to a young man named Rob Carey. I did develop a rider buddy from scratch, Mike Heckler, who I knew from my job. Mike went on many trips with us and kept coming back he now lives in Boise, ID. There have been many more participants and hopefully, more to come.
                </p>
                <p>
                  That's it! That's how this ride got to be a loosely defined tradition. I hope to see you on the next Chicken Run. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HistoryPage;
