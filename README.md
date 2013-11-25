# demo-time-grunt-broken

Quick demo to show how `time-grunt` is not working on `grunt v0.4.2`

From both folders install grunt + time-grunt

    $ npm install
    
Run demos:

    // do nothing and pass
    $ grunt

    // wait async, then pass task
    $ grunt build
    
    // wait async, then fail task
    $ grunt test


Notice how the `0.4.2` version shows no timing summaries, not even in plain console (`cmd.exe`)
