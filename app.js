alert('Seja bem vindo ao site')

// var ctx = document.getElementById("myChart");

// var chart = ctx.getContext('2d');

// chart.fillStyle = "red";
// chart.fillRect(0,0,100,200);

// chart.fillStyle = "blue";
// chart.fillRect(150, 50, 100, 200);


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Compras', 'Vendas', 'Taxas', 'Lucro'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['blue', 'gray'],
            borderColor: 'rgb(0,0,0,)',
            data: [50, 30, 10,60]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: ['Compras', 'Vendas', 'Taxas', 'Lucro'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['blue', 'gray'],
            borderColor: 'rgb(0,0,0,)',
            data: [50, 30, 10,60]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1; 
  }

