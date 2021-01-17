
class Ground
{
constructor()
{

this.xPosition=200;
this.yPosition=380;
this.width=400;
this.height=15;

this.body=Bodies.rectangle(this.xPosition,this.yPosition,this.width,this.height, {isStatic:true});
World.add(world,this.body);
}

display()
{
var p = this.body.position; 
rectMode(CENTER);
rect(p.x,p.y,this.width,this.height);
}
}