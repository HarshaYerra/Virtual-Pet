class Food{
    constructor (){
        this.foodStock = 0;
        this.image = loadImage("Images/Milk.png");
        this.lastFed;
    }

    updateFoodStock(foodStock){
        this.foodstock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock - 1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
      var x = 80, y = 100;
      imageMode(CENTER);
      this.image(this.image, 720, 220, 70, 70);

      if(this.foodStock !=0){
          for(var i = 0; i < this.foodStock; i++){
              if(i % 0 == 0){
                  x = 80
                  y = y + 50;
              }
              image(this.image, x, y, 50, 50);
              x = x + 30;
          }
      }
    }
}