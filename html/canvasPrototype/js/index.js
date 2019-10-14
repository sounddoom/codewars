var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var saving= 0;

function Drawable(){
      Drawable.addInstance(this);   
   }
   
   Drawable.prototype.draw = function(){};
   Drawable.instances = [];
   Drawable.addInstance = function(item){
        Drawable.instances.push(item);
   }

Drawable.drawAll = function(){
      Drawable.forAll(item => item.draw())
  }
  

  Drawable.forAll = function(callback){
      for(var i = 0; i<Drawable.instances.length;i++){
          callback(Drawable.instances[i])
      }
  }


Drawable.drawAll = function(){
    Drawable.forAll(item => item.draw())
}


class Circle extends Drawable {
      constructor(x,y,radius,color){
          super()
            radius = +radius;
          this.setX = newX => (x = newX, this.draw())
          this.getX = () => x
  
          this.setY = newY => (y = newY, this.draw())
          this.getY = () => y
  
          this.setRadius = newRadius => (radius = newRadius, this.draw())
          this.getRadius = () => radius
  
          this.setColor = newColor => (color = newColor, this.draw())
          this.getColor = () => color
  
          this.draw = () => {
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI*2);
              ctx.fillStyle = color
              ctx.fill();
          }
  
          this.draw();
      }
  
      get x(){
          return this.getX()
      }
  
      set x(newX){
          this.setX(newX)
      }
  
      get y(){
          return this.getY()
      }
  
      set y(newY){
          this.setY(newY)
      }
  
      get radius(){
          return this.getRadius()
      }
  
      set radius(newRadius){
          this.setRadius(newRadius)
      }
  
      get color(){
          return this.getColor()
      }
  
      set color(newColor){
          this.setColor(newColor)
      }

      getDistance(x,y){
            let distance = Math.sqrt((this.x-x)**2 + (this.y-y)**2);
            return distance < this.radius ? distance : Infinity;
      }
  }

 let  tools = {
      circle(evt){
          if (evt.buttons & 1){
              //draw(evt);
              new Circle(evt.offsetX, evt.offsetY, 10, color.value)
          }
      },
      select(evt){
          if (evt.buttons & 1){
              //some select code
              let sorted = [...Drawable.instances]
              let {offsetX:x, offsetY: y} = evt;
              sorted.sort((a,b) => a.getDistance(x,y) > b.getDistance(x,y) ? 1 : -1)
            //   console.log(sorted[0], sorted[0].getDistance(x,y))
            //   console.log(sorted[1], sorted[1].getDistance(x,y))
              if (sorted[0].getDistance(x,y)<Infinity)
              {sorted[0].color = color.value;
              sorted[0].radius = radius.value;}
          }else{
                console.log('not in circle')
          }
      }
  }
  
  canvas.onmousemove = function(evt){
      tools[tool.value](evt)
  }