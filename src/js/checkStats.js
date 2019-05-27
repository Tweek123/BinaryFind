class checkStats {
    constructor(types) {
        this.types = types;
        this.stats = new Array(types.length); 
        this.initStats();
        
    }

    initStats() {
        for(let i=0;i< this.types.length;i++) {
            this.stats[i] = new Object;
            this.stats[i].arrayOfStat = [];
            this.stats[i].type = this.types[i];
        }
        
        }

    addStats(stats,type) {
        this.stats.map(function(kindOfStat) {
            if(kindOfStat.type === type) {
                kindOfStat.arrayOfStat.push(stats); 
            }
          });
    }

    checkStats(type, param) {
        let checkedStats = [];
        this.stats.map(function(stats) {
            if(stats.type === type) {
                stats.arrayOfStat[0].forEach(stat => {
                    stat = stat.checkStat(param);
                    checkedStats.push(stat);
                    console.log(stat);
                });
            }
          });
         
        return checkedStats;
    }
}

export default checkStats