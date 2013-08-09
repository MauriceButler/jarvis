var currentRules = {},
    currentPatterns = [],
    rulesRegex = /^r`(.*)`$/, 
    tokenRegex = /`(.*?)(\.\.\.)?`/g;

function isDuplicateRegex(){
    return currentPatterns.some(function(pattern) { 
        return pattern.regex.toString() === rRule.toString(); 
    });
}

function duplicateRule(rule){
    return console.warn("Duplicate rule: " + rule); 
}

function addRules(rulesPassedIn) {
    for(var key in rulesPassedIn) {
        var handler = rulesPassedIn[key],
            rules = key.split(/\s+/);

        for(var i = 0; i < rules.length; i++) {
            rule = rules[i];

            if(rule.indexOf("`") === -1) {
                if(rule in currentRules) { 
                    return duplicateRule(rule);
                }

                urls[rule] = handler;

            } else if(rulesRegex.test(rule)) {
                var ruleRegex = new RegExp(rulesRegex.exec(rule)[1]);

                if(isDuplicateRegex(ruleRegex)) {
                    return duplicateRule(ruleRegex);
                }

                currentPatterns.push({ regex: ruleRegex, handler: handler });
            } else if(tokenRegex.test(rule)) {
                var pattern = parseToken(rule, handler);

                if(isDuplicateRegex(pattern)) {
                    return duplicateRule(rule);
                }

                currentPatterns.push(pattern);
            } else {
                console.warn("Invalid rule: " + rule);
            }
        }
    }
}


moduel.exports = {
    addRules: addRules
};