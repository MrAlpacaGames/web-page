angular.module('templates-app', ['about/about.tpl.html', 'home/characters/characters.tpl.html', 'home/features/features.tpl.html', 'home/footer/footer.tpl.html', 'home/home.tpl.html', 'home/social-menu/social-menu.tpl.html', 'home/title-bar/title-bar.tpl.html', 'home/trailer/trailer.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

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
    "        <h2 class=\"egg-name\">Archivald</h2>\n" +
    "        <h4 class=\"egg-attitude\">Es un líder fuerte y honorable, con gran confianza en sí mismo; espontáneo y a veces explosivo cuando enfrenta situaciones duras.</h4>\n" +
    "        <h5 class=\"egg-phrase\">\n" +
    "          <i>\"El honor, la disciplina y la familia son las tres virtudes más grandes de todo huevo.\"</i>\n" +
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
    "        <h2 class=\"egg-name\">Arsger</h2>\n" +
    "        <h4 class=\"egg-attitude\">Es un líder fuerte y agresivo. Sin compasión. Se divierte con romper huesos.</h4>\n" +
    "        <h5 class=\"egg-phrase\">\n" +
    "          <i>\"No soy pachoncito, soy macizo.\"</i>\n" +
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
    "          <h2 class=\"egg-name\">Kai</h2>\n" +
    "          <h4 class=\"egg-attitude\">Pellentesque non ante auctor, facilisis metus a, dignissim ex. Nam congue ut magna in commodo.</h4>\n" +
    "          <h5 class=\"egg-phrase\">\n" +
    "            <i>\"Irrelevante. Es una opinión válida, pero no es la mía.\"</i>\n" +
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
    "          <h2 class=\"egg-name\">Oswald</h2>\n" +
    "          <h4 class=\"egg-attitude\">Proin id lectus sagittis, aliquam lacus non, lobortis odio. Sed eu fermentum tortor, vel luctus metus.</h4>\n" +
    "          <h5 class=\"egg-phrase\">\n" +
    "            <i>\"Piénsalo. Para expandir tu mente, has de primero expandir tus ojos ante la verdad.\"</i>\n" +
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
    "        <img src=\"assets/images/kote/feature.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h4>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus diam nisl, in gravida diam semper vitae.\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "    <div class=\"feature row\">\n" +
    "      <div class=\"img-container col\">\n" +
    "        <img src=\"assets/images/kote/feature.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h4>\n" +
    "          Cras nec faucibus metus. Maecenas purus ipsum, vehicula quis lacinia quis, egestas nec nibh. Etiam vel dui risus. Cras feugiat aliquam dapibus. Quisque non libero vitae lacus pretium facilisis. Integer lobortis ipsum et fringilla tristique.\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "    <div class=\"feature row\">\n" +
    "      <div class=\"img-container col\">\n" +
    "        <img src=\"assets/images/kote/feature.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"desc-container col\">\n" +
    "        <h4>\n" +
    "            In sit amet dignissim elit. Cras sit amet commodo risus. Nam nec augue erat. Proin mauris sem, rutrum vel efficitur nec, vulputate ut ipsum. Vestibulum aliquet ac massa vel mattis.\n" +
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
    "  <div class=\"logo-container row\">\n" +
    "    <div class=\"logo\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- description -->\n" +
    "  <div class=\"text-container row\">\n" +
    "    <h5 class=\"text\">We make games that we would love to play</h5>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- social networks buttons -->\n" +
    "  <div class=\"social-buttons row\">\n" +
    "    <a class=\"social-link\"\n" +
    "      title=\"Facebook\"\n" +
    "      href=\"https://www.facebook.com/MrAlpacaGames/\"\n" +
    "      target=\"blank\">\n" +
    "      <i class=\"icon-facebook_circle social-icon\"></i>\n" +
    "    </a>\n" +
    "    <a class=\"social-link\"\n" +
    "      title=\"Instagram\"\n" +
    "      href=\"https://www.instagram.com/mralpacagames/\"\n" +
    "      target=\"blank\">\n" +
    "      <i class=\"icon-instagram_circle social-icon\"></i>\n" +
    "    </a>\n" +
    "    <a class=\"social-link\"\n" +
    "      title=\"Development Blog\"\n" +
    "      href=\"http://mralpacagames.blogspot.com.co/\"\n" +
    "      target=\"blank\">\n" +
    "      <i class=\"icon-blogger_circle social-icon\"></i>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/title-bar/title-bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/title-bar/title-bar.tpl.html",
    "<div class=\"title-bar-container\">\n" +
    "  <div id=\"parallax-container\">\n" +
    "    <!-- The Hegg & The Eggaterious -->\n" +
    "    <div id=\"parallax-img-1\" class=\"parallax-layer parallax\" data-speed=\"15\"></div>\n" +
    "    <!-- Eggorias (without Airheads) -->\n" +
    "    <div id=\"parallax-img-2\" class=\"parallax-layer parallax\" data-speed=\"19\"></div>\n" +
    "    <!-- Airheads -->\n" +
    "    <div id=\"parallax-img-3\" class=\"parallax-layer parallax\" data-speed=\"13\"></div>\n" +
    "    <!-- Archivald -->\n" +
    "    <div id=\"parallax-img-4\" class=\"parallax-layer parallax\" data-speed=\"28\"></div>\n" +
    "    <!-- Kai -->\n" +
    "    <div id=\"parallax-img-5\" class=\"parallax-layer parallax\" data-speed=\"38\"></div>\n" +
    "    <!-- Oswald -->\n" +
    "    <div id=\"parallax-img-6\" class=\"parallax-layer parallax\" data-speed=\"52\"></div>\n" +
    "    <!-- Arsger -->\n" +
    "    <div id=\"parallax-img-7\" class=\"parallax-layer parallax\" data-speed=\"68\"></div>\n" +
    "    <!-- Logo -->\n" +
    "    <div id=\"parallax-img-8\" class=\"parallax-layer parallax\" data-speed=\"3\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/trailer/trailer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/trailer/trailer.tpl.html",
    "<div class=\"trailer-container\">\n" +
    "  <!-- YouTube video -->\n" +
    "  <div class=\"trailer-wrapper\">\n" +
    "    <iframe class=\"youtube-iframe\"\n" +
    "      src=\"https://www.youtube.com/embed/zeBevUptuWc?rel=0\"\n" +
    "      frameborder=\"0\"\n" +
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
    "    <h2 class=\"text-black\">Available <b class=\"text-red\">February 11, 2018</b> on</h2>\n" +
    "    <a href=\"http://store.steampowered.com/app/733870/King_of_the_Eggs/\"\n" +
    "      class=\"steam platform-link\"\n" +
    "      target=\"blank\"\n" +
    "      title=\"King of the Eggs on Steam\">\n" +
    "      <img src=\"assets/images/general/steam_black.svg\" alt=\"Steam\" class=\"platform-img\">\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>");
}]);
