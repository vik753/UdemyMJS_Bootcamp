const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(val) {
        this._location = val.trim();
        this.locations.push(this._location);
    }
}

data.location = 'Philadelphia  ';
console.log(data.location);
data.location = ' Ukraine, Odesa ';
console.log(data.location);
console.log(data.locations);
