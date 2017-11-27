// ==UserScript==
// @name         xkcd substitutions
// @namespace    xkcd_substitutions
// @version      1.0
// @description  Replace text on any website
// @author       Me
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const subs = {"witnesses":"these dudes I know",
                 "allegedly":"kinda probably",
                 "new study":"tumblr post",
                 "rebuild":"avenge",
                 "space":"spaaace",
                 "smartphone":"pokedex",
                 "electric":"atomic",
                 "senator":"elf-lord",
                 "car":"cat",
                 "election":"eating contest",
                 "congressional leaders":"river spirits",
                 "homeland security":"homestar runner",
                 "could not be reached for comment":"is guilty and everyone knows it",
	         "remains to be seen":"will never be known",
	         "surprising":"surprising (but not to me)",
	         "war of words":"interplanetary war",
	         "tension":"sexual tension",
	         "win votes":"find pokemon",
	         "email":"poem",
	         "facebook post":"post",
	         "tweet":"poem",
	         "disrupt":"destroy",
	         "scientists":"Channing Tatum and his friends",
	         "you won't believe":"I'm really sad about",
	         "debate":"dance-off",
	         "self driving":"uncontrollably swerving",
	         "self-driving":"uncontrollably swerving",
	         "poll":"psychic reading",
	         "drone":"dog",
	         "vows to":"probably won't",
	         "first-degree":"friggin awful",
	         "second-degree":"friggin awful",
	         "third-degree":"friggin awful",
	         "an unknown number":"like hundreds",
	         "years":"minutes",
	         "minutes":"years",
	         "horsepower":"tons of horsemeat"
                 };
    const MAX_NODES = 10000;

    /*var observer = new MutationObserver(mutationHandler);

    observer.observe($("#stream-items-id")[0], { childList: true });

    /*function mutationHandler(mutationRecords) {
        replaceText();
        console.log("MUTATION");
    }*/

    function replaceText() {
        var tree = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        var node = tree.nextNode();
        var i = 0, re;
        while (node != null && i < MAX_NODES) {
            for(var key in subs) {
                if(subs.hasOwnProperty(key)) {
                    re = new RegExp(key,"gi");
                    node.data = node.data.replace(re,subs[key]);
                }
            }
            i++;
            node = tree.nextNode();
        }

        console.log("Visited "+i+" nodes");
    }

    replaceText();
})();
