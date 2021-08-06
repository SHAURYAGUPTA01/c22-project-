class rope{
	constructor(body1,body2,pointA,pointB)
	{
      this.pointA = pointA
	  this.pointB = pointB
	//create rope constraint here
	 var options = {
		bodyA : body1,
		bodyB : body2,
		pointB : {x : this.pointA , y : this.pointB}
	 }
    this.con = Matter.Constraint.create(options)
	World.add(world,this.con)
	}
     

    //create display() here 
    display(){
		var pointA = this.con.bodyA.position
		var pointB = this.con.bodyB.position

		strokeWeight(2)
		line(pointA.x,pointA.y,pointB.x + this.pointA,pointB.y + this.pointB)
	}
}
