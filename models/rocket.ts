class Rocket{
    brandName: string;
    Poten_Act: number;
    thrusters: Thruster[];
    
    constructor(brandName:string, thrusters:Thruster[]){
        this.brandName = brandName;
        this.Poten_Act = 0;
        this.thrusters = thrusters;
    }

    speed():void{
        for(const thruster of this.thrusters){
            if(thruster.Poten_Act < thruster.Poten_Max){
                thruster.Poten_Act = thruster.Poten_Act + 10;
                console.log(`thruster ${this.thrusters.indexOf(thruster)} aceleró +10!`);
            }
        }
    }

    stop():void{
        for(const thruster of this.thrusters){
            if(thruster.Poten_Act > 0){
                thruster.Poten_Act = thruster.Poten_Act - 10;
                console.log(`thruster ${this.thrusters.indexOf(thruster)} frenó +10!`);
            }
        }
    }
}
     class Thruster{
         Poten_Act : number;
         Poten_Max : number;

         constructor(Poten_Max:number){
             this.Poten_Act = 0;
             this.Poten_Max = Poten_Max;
         }

         get getPoten_Max(){
             return this.Poten_Max;
         }
     }
    
    
