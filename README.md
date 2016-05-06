# ngPoster
Directive for videos. Replace ng-poster with poster

# Description
if you're using 

```
<video poster="{{ foo }}></video>
```

it will show in console error
> http://example.com/{{ foo }} 404 Not found

That's why I created this directive. It works similar to [ngHref](https://docs.angularjs.org/api/ng/directive/ngHref)
