Ape.addEvent("init", function() {

        Ape.registerCmd("jBot", false, function(params, infos) {
                var data = {params:params, infos:infos};
                /* make a post request */
                Ape.log(JSON.stringify(data));
                var request = new Http('http://wizard.joshuaodmark.com/wizardv2/apeServerMessageReceiver.php');
                request.set('method', 'POST');
                request.writeObject(data);
                request.getContent(function(result) {
                        Ape.log('Response: '+result);
                        var ret = {};
                        try { ret = JSON.parse(result); } catch(e){};
                });
        });

});
