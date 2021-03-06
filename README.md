# RoofTrain

RoofTrain website <https://rooftrain.co.uk/> - professional roof training courses.

This is static site constructed using Gulp, Metalsmith and custom plugins.


## Development

Build in development mode and watch for file changes:

```cmd
gulp
```

or `gulp build` to just build development files.


## Production

Build files for production deployment:

```cmd
gulp clean && NODE_ENV=production gulp build
```

or `npm run build`

or Windows Powershell:

```ps
gulp clean
$env:NODE_ENV="production"
gulp build
```


## Deployment

Upload using FTP (not ideal but works on most hosts):

```cmd
gulp deploy -u <ID> -p <PW>
```

## Browser testing

Test in Windows Chrome:

```cmd
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --incognito --auto-open-devtools-for-tabs http://localhost:8000/
```

## Ping-o-matic

[Submit updates](https://pingomatic.com/ping/?title=RoofTrain+UK&blogurl=https%3A%2F%2Frooftrain.co.uk%2F&rssurl=https%3A%2F%2Frooftrain.co.uk%2Ffeed.xml&chk_weblogscom=on&chk_blogs=on&chk_feedburner=on&chk_newsgator=on&chk_myyahoo=on&chk_pubsubcom=on&chk_blogdigger=on&chk_weblogalot=on&chk_newsisfree=on&chk_topicexchange=on&chk_google=on&chk_tailrank=on&chk_skygrid=on&chk_collecta=on&chk_superfeedr=on)
