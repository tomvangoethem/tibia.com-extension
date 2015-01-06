// https://secure.tibia.com/mmorpg/free-multiplayer-online-role-playing-game.php

const START_PAGE_URL = 'https://secure.tibia.com/news/?subtopic=latestnews';

// Skip the annoying intro page.
if (location.pathname.indexOf('free-multiplayer-online-role-playing-game.php') > -1) {
	location.href = START_PAGE_URL;
}

// Rewrite links to the annoying intro page.
each(document.querySelectorAll('a[href$="free-multiplayer-online-role-playing-game.php"]'), function(element) {
	element.href = START_PAGE_URL;
});