# animate.js

### instalation
```html
<script type="text/javascript" src="https://hoodjs.github.io/animate.js/index.js"></script> 

<script type="text/javascript" src="https://hoodjs.github.io/animate.js/index.min.js"></script> 

<script type="module">
  import Animate from "https://hoodjs.github.io/animate.js/index.js"
</script> 
```

### usage
```js
let animation = new Animate({
  from:0,
  to:10,
  onUpdate(value){
    console.log(value)
  },
  onEnd(){
    console.log("animation ended")
  }
})
```
