// import { data } from data.js
// console.log('hello')


thead = d3.select('table')

buildtable = (data) =>{
    thead.html('')
    if(data !== ''){
    let thead1 = thead.append('thead');
    let thead2 = thead1.append('tr')

    let cell = thead.append('tbody');
    Object.keys(data[0]).forEach(d=>{
        let thd1 = thead2.append('th')
        thd1.text(d)
    });

    data.forEach(d =>{
        let tbody1 = cell.append('tr')
    Object.values(d).forEach(d=>{
        let cell1 = tbody1.append('td');
        cell1.text(d);
    }

   )
  }
 )
}else{
    thead.append('h1').text('No Results')
}
}

var d = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }];



datafilter =()=>{
    let fillin = d3.select('#datetime').property('value');
data1 = data.filter(d =>{if(d['datetime'] === fillin){
               return d
}})
        
buildtable(data1)

}

d3.select('#filter-btn').on('click',datafilter)

console.log(data.filter(d=>d['datetime'] === '1/12/2010'))











buildtable(data);
