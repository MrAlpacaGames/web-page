angular.module('templates-app', ['home/characters/characters.tpl.html', 'home/features/features.tpl.html', 'home/footer/footer.tpl.html', 'home/home.tpl.html', 'home/social-menu/social-menu.tpl.html', 'home/title-bar/title-bar.tpl.html', 'home/trailer/trailer.tpl.html']);

angular.module("home/characters/characters.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/characters/characters.tpl.html",
    "<div class=\"characters-container\">\n" +
    "  <div class=\"characters-wrapper row\">\n" +
    "    <!-- Archivald -->\n" +
    "    <div class=\"character col-xs-12 col-sm-3\">\n" +
    "      <div class=\"img-container\">\n" +
    "        <img class=\"egg-img\" src=\"assets/images/kote/Archivald_Normal.png\" alt=\"Kai\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container\">\n" +
    "        <h2 id=\"archivald\" class=\"egg-name\">Archivald</h2>\n" +
    "        <h4 class=\"egg-attitude\">The highest ranking member of Eggorias Air Force. His years of combat experience have made this aged egg bold and brash. Quick on his feet and explosive Archivald is not an enemy you will want to leave out of sight.</h4>\n" +
    "        <h5 class=\"egg-phrase\">\n" +
    "          <i>\"Honor, discipline, family an egg must abide by all of them.\"</i>\n" +
    "        </h5>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Arsger -->\n" +
    "    <div class=\"character col-xs-12 col-sm-3\">\n" +
    "      <div class=\"img-container\">\n" +
    "        <img class=\"egg-img\" src=\"assets/images/kote/Arsger_Normal.png\" alt=\"Kai\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container\">\n" +
    "        <h2 id=\"arsger\" class=\"egg-name\">Arsger</h2>\n" +
    "        <h4 class=\"egg-attitude\">Leader of the most ferocious tribe of the Icebreakers, this savage beast of an egg has done more than enough to earn the name of the howling wind of the south. Stray too far on the icy planes of eggorias and Asger will make sure it is your last adventure.</h4>\n" +
    "        <h5 class=\"egg-phrase\">\n" +
    "          <i>\"*Indistinct growls*\"</i>\n" +
    "        </h5>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Kai -->\n" +
    "    <div class=\"character col-xs-12 col-sm-3\">\n" +
    "        <div class=\"img-container\">\n" +
    "          <img class=\"egg-img\" src=\"assets/images/kote/Kai_Normal.png\" alt=\"Kai\">\n" +
    "        </div>\n" +
    "        <div class=\"desc-container\">\n" +
    "          <h2 id=\"kai\" class=\"egg-name\">Kai</h2>\n" +
    "          <h4 class=\"egg-attitude\">The blazing fires to the east have boiled this particular egg to perfection! Elegance, grace and beauty have been all Kai has known since they were born. But the Face of the East has more than stunning good looks on their side. Blessed by the gods Kai’s luck is almost a virtue, unrivaled by all. Unlucky the souls to meet him in battle.</h4>\n" +
    "          <h5 class=\"egg-phrase\">\n" +
    "            <i>\"“Gaze upon my face and know the image of perfection!”\"</i>\n" +
    "          </h5>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Oswald -->\n" +
    "    <div class=\"character col-xs-12 col-sm-3\">\n" +
    "        <div class=\"img-container\">\n" +
    "          <img class=\"egg-img\" src=\"assets/images/kote/Oswald_Normal.png\" alt=\"Kai\">\n" +
    "        </div>\n" +
    "        <div class=\"desc-container\">\n" +
    "          <h2 id=\"oswald\" class=\"egg-name\">Oswald</h2>\n" +
    "          <h4 class=\"egg-attitude\">Eggkind was not sent to this world just to inhabit the material world. Oswald’s time as a sage to the Smartyplants has allowed his mind to transcend and see the world beyond. He sees the chaos before him and his wise eyes reveal the path across it to victory.</h4>\n" +
    "          <h5 class=\"egg-phrase\">\n" +
    "            <i>\"The truth lays bare before us at all times. We need only open our eyes to it.\"</i>\n" +
    "          </h5>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/features/features.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/features/features.tpl.html",
    "<div class=\"features-container container\">\n" +
    "  <div class=\"features-title\">\n" +
    "    <img class=\"logo\" src=\"assets/images/kote/logo.png\" alt=\"\">\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- features -->\n" +
    "  <div class=\"features-wrapper\">\n" +
    "    <div class=\"feature row\">\n" +
    "      <div class=\"img-container col\">\n" +
    "        <img src=\"assets/images/kote/feature_01.gif\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h1 class=\"title\">Hotball</h1>\n" +
    "        <h4 class=\"description\">\n" +
    "          <b>The world’s most explosive sport!</b> And what would be of the most explosive sport without the world's most <b>explosive balls?</b> You name it, we got them: <b>fireballs, rockballs, snowballs, iceballs, dragonbal</b>- no wait, not that one. No matter! Because after a while they all <b>EXPLODE</b>. Partner up with a buddy and make sure the ball’s time doesn’t run up on your side of the court because it’ll do a lot more than sting. <b>First one to 3 points wins!</b>\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "    <div class=\"feature row\">\n" +
    "      <div class=\"img-container col\">\n" +
    "        <img src=\"assets/images/kote/feature_02.gif\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h1 class=\"title\">Survival</h1>\n" +
    "        <h4 class=\"description\">\n" +
    "          Four eggs go in, only one egg comes out. <b>This is the ultimate scramble for survival!</b> Whoever is the only one alive at the end of the round takes the points. Dodge arrows, run from lasers and avoid every pitfall, even... <b>play dirty(?!)</b>. Only one egg will see the light of a new tomorrow. You must do everything in your power to become the <b>last egg standing!</b>\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "    <div class=\"feature row\">\n" +
    "      <div class=\"img-container col\">\n" +
    "        <img src=\"assets/images/kote/feature_03.gif\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h1 class=\"title\">King of the hill</h1>\n" +
    "        <h4 class=\"description\">\n" +
    "          Deux Eggs Machina. <b>The egg from the machine!</b> An altar has been raised and now you must fight to control it! Pay homage to the gods by standing upon the altar. Do this long enough and they will reward your devotion with a <b>holy weapon of war!</b> Rain divine justice with the <b>Javelins of Light</b>, slash your opposition to a fine mist with the <b>Wheel of Pain</b>, or burn their ashes with the <b>Trail of Fire!</b> Every kill scores you points, but beware! <b>Everyone</b> will be vying for the gods’ boons. <b>First one to 7 points wins!</b>\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/footer/footer.tpl.html",
    "<div class=\"footer-container\">\n" +
    "  <div class=\"logos-wrapper\">\n" +
    "    <img src=\"assets/images/mr_alpaca/logo_white.png\"\n" +
    "      alt=\"Mr. Alpaca Games\"\n" +
    "      class=\"mr-alpaca-logo footer-logo\">\n" +
    "    <img src=\"assets/images/kote/logo.png\"\n" +
    "      alt=\"King of the Eggs\"\n" +
    "      class=\"kote-logo footer-logo\">\n" +
    "  </div>\n" +
    "  <div class=\"copyright-wrapper\">\n" +
    "    <h5 class=\"copyright-text\">Mr. Alpaca Games, 2018</h5>\n" +
    "    <h5 class=\"copyright-text\">All rights reserved</h5>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<!-- Header -->\n" +
    "<div class=\"top-border\"></div>\n" +
    "<div ng-include=\"'home/social-menu/social-menu.tpl.html'\"></div>\n" +
    "\n" +
    "<!-- Title bar (cool parallax) -->\n" +
    "<div ng-include=\"'home/title-bar/title-bar.tpl.html'\"></div>\n" +
    "\n" +
    "<!-- main content -->\n" +
    "<div class=\"game-content-container\">\n" +
    "  <!-- King of the Eggs' trailer, short description and platforms links -->\n" +
    "  <div class=\"section section-border\"\n" +
    "    ng-include=\"'home/trailer/trailer.tpl.html'\">\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- King of the Eggs' features -->\n" +
    "  <div class=\"section\"\n" +
    "    ng-include=\"'home/features/features.tpl.html'\">\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- King of the Eggs' characters -->\n" +
    "  <div class=\"section\"\n" +
    "    ng-include=\"'home/characters/characters.tpl.html'\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Footer -->\n" +
    "<footer class=\"footer\" ng-include=\"'home/footer/footer.tpl.html'\"></footer>");
}]);

angular.module("home/social-menu/social-menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/social-menu/social-menu.tpl.html",
    "<div class=\"social-menu-container\">\n" +
    "  <!-- logo -->\n" +
    "  <div class=\"logo-container\">\n" +
    "    <div class=\"logo\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- description -->\n" +
    "  <div class=\"text-container hidden-xs\">\n" +
    "    <h5 class=\"text\">We make games that we would love to play</h5>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- social networks buttons -->\n" +
    "  <div class=\"social-buttons-container\">\n" +
    "    <!-- Facebook -->\n" +
    "    <div class=\"button-wrapper\">\n" +
    "      <a class=\"social-link\"\n" +
    "        title=\"Facebook\"\n" +
    "        href=\"https://www.facebook.com/MrAlpacaGames/\"\n" +
    "        target=\"blank\">\n" +
    "        <i class=\"icon-facebook_circle social-icon\"></i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Instagram -->\n" +
    "    <div class=\"button-wrapper\">\n" +
    "      <a class=\"social-link\"\n" +
    "        title=\"Instagram\"\n" +
    "        href=\"https://www.instagram.com/mralpacagames/\"\n" +
    "        target=\"blank\">\n" +
    "        <i class=\"icon-instagram_circle social-icon\"></i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Twitter -->\n" +
    "    <div class=\"button-wrapper\">\n" +
    "      <a class=\"social-link\"\n" +
    "        title=\"Twitter\"\n" +
    "        href=\"https://twitter.com/MrAlpacaGames\"\n" +
    "        target=\"blank\">\n" +
    "        <i class=\"icon-twitter_circle social-icon\"></i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Development Blog -->\n" +
    "    <div class=\"button-wrapper\">\n" +
    "      <a class=\"social-link\"\n" +
    "        title=\"Development Blog\"\n" +
    "        href=\"http://mralpacagames.blogspot.com.co/\"\n" +
    "        target=\"blank\">\n" +
    "        <i class=\"icon-blogger_circle social-icon\"></i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/title-bar/title-bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/title-bar/title-bar.tpl.html",
    "<div class=\"title-bar-container\">\n" +
    "  <div id=\"parallax-container\">\n" +
    "    <!-- The Hegg & The Eggaterious -->\n" +
    "    <div id=\"parallax-img-1\" class=\"parallax-layer parallax\" data-scroll=\"0.08\" data-yoffset=\"300\"></div>\n" +
    "    <!-- Eggorias (without Airheads) -->\n" +
    "    <div id=\"parallax-img-2\" class=\"parallax-layer parallax\" data-scroll=\"0.05\" data-yoffset=\"100\"></div>\n" +
    "    <!-- Airheads -->\n" +
    "    <div id=\"parallax-img-3\" class=\"parallax-layer parallax\" data-scroll=\"0.10\" data-yoffset=\"100\"></div>\n" +
    "    <!-- Archivald -->\n" +
    "    <div id=\"parallax-img-4\" class=\"parallax-layer parallax\" data-scroll=\"0.18\" data-yoffset=\"0\"></div>\n" +
    "    <!-- Kai -->\n" +
    "    <div id=\"parallax-img-5\" class=\"parallax-layer parallax\" data-scroll=\"0.25\" data-yoffset=\"0\"></div>\n" +
    "    <!-- Oswald -->\n" +
    "    <div id=\"parallax-img-6\" class=\"parallax-layer parallax\" data-scroll=\"0.38\" data-yoffset=\"0\"></div>\n" +
    "    <!-- Arsger -->\n" +
    "    <div id=\"parallax-img-7\" class=\"parallax-layer parallax\" data-scroll=\"0.45\" data-yoffset=\"0\"></div>\n" +
    "    <!-- Logo -->\n" +
    "    <div id=\"parallax-img-8\" class=\"parallax-layer parallax\" data-scroll=\"0.01\" data-yoffset=\"0\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/trailer/trailer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/trailer/trailer.tpl.html",
    "<div class=\"trailer-container\">\n" +
    "  <!-- YouTube video -->\n" +
    "  <div class=\"trailer-wrapper\"\n" +
    "    data-original-height=\"1080\"\n" +
    "    data-original-width=\"1920\">\n" +
    "    <iframe class=\"youtube-iframe\"\n" +
    "      src=\"https://www.youtube.com/embed/_9y7s3Ykax4?rel=0\"\n" +
    "      frameborder=\"0\"\n" +
    "      allow=\"autoplay; encrypted-media\"\n" +
    "      allowfullscreen>\n" +
    "    </iframe>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Game description and links -->\n" +
    "  <div class=\"description-container\">\n" +
    "    <h1 class=\"description-text text-center text-red\">\n" +
    "      Be ready for a ridiculous couch <b>party game</b> where you and your <span class=\"line-through\">yolks</span> folks take the role of <b>egg-tastic</b> warriors and scramble each other for the crown.\n" +
    "    </h1>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Platforms for purchase and download -->\n" +
    "  <div class=\"platforms-container\">\n" +
    "    <h2 class=\"text-black\">Available <b class=\"text-red\">February 17, 2018</b> on</h2>\n" +
    "    <a href=\"http://store.steampowered.com/app/733870/King_of_the_Eggs/\"\n" +
    "      class=\"steam platform-link\"\n" +
    "      target=\"blank\"\n" +
    "      title=\"King of the Eggs on Steam\">\n" +
    "      <img src=\"assets/images/general/steam_black.svg\" alt=\"Steam\" class=\"platform-img\">\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>");
}]);
