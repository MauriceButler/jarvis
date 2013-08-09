var currentRules = {};

function addRules(rulesPassedIn) {
    for(var key in rulesPassedIn) {
        var handler = rulesPassedIn[key],
            rules = key.split(/\s+/);

        for(var i = 0; i < rules.length; i++) {
            rule = rules[i];
            
            if(rule in currentRules) { 
                return console.warn("Duplicate rule: " + rule); 
            }

        //     if(rule.indexOf("`") === -1) {
        //         if(rule in urls) { console.warn("Duplicate beeline rule: " + rule); }
        //         urls[rule] = handler;
        //     } else if(rule === "`404`" || rule === "`missing`" || rule === "`default`") {
        //         if(missing !== default404) { console.warn("Duplicate beeline rule: " + rule); }
        //         missing = handler;
        //     } else if(rule === "`405`" || rule === "`missing-verb`" || rule === "`missingVerb`") {
        //         if(missingVerb !== default405) { console.warn("Duplicate beeline rule: " + rule); }
        //         missingVerb = handler;
        //     } else if(rule === "`500`" || rule === "`error`") {
        //         if(error !== default500) { console.warn("Duplicate beeline rule: " + rule); }
        //         error = handler;
        //     } else if(rule === "`generics`") {
        //         Array.prototype.push.apply(generics, handler);
        //     } else if(rRegExUrl.test(rule)) {
        //         var rRule = new RegExp(rRegExUrl.exec(rule)[1]);
        //         if(patterns.some(function(p) { return p.regex.toString() === rRule.toString(); })) {
        //             console.warn("Duplicate beeline rule: " + rule);
        //         }
        //         patterns.push({ regex: rRule, handler: handler });
        //     } else if(rToken.test(rule)) {
        //         var pattern = parseToken(rule, handler);
        //         if(patterns.some(function(p) { return p.regex.toString() === pattern.regex.toString(); })) {
        //             console.warn("Duplicate beeline rule: " + rule);
        //         }
        //         patterns.push(pattern);
        //     } else {
        //         console.warn("Invalid beeline rule: " + rule);
        //     }
        // });
    }
}


moduel.exports = {
    addRules: addRules
};