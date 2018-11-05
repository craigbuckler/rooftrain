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
