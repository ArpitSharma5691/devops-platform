const express = require('express');

const app = express();

app.get('/', (req, res) => {

res.send(`

<!DOCTYPE html>

<html>

<head>

<title>DevOps CI/CD Monitoring Platform</title>

<style>

body{
font-family: Arial;
background:#0f172a;
color:white;
margin:0;
padding:0;
}

.header{
background:#111827;
padding:20px;
text-align:center;
}

.container{
padding:30px;
}

.cards{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
margin-top:30px;
}

.card{
background:#1e293b;
padding:25px;
border-radius:15px;
text-align:center;
}

.card h2{
font-size:40px;
margin:10px 0;
color:#38bdf8;
}

.pipeline{
margin-top:40px;
background:#1e293b;
padding:25px;
border-radius:15px;
}

.pipeline-step{
display:flex;
justify-content:space-between;
padding:15px;
margin:10px 0;
background:#0f172a;
border-radius:10px;
}

.success{
color:#22c55e;
font-weight:bold;
}

.workflow{
margin-top:40px;
background:#1e293b;
padding:25px;
border-radius:15px;
text-align:center;
}

.tools{
display:flex;
justify-content:space-around;
margin-top:20px;
font-weight:bold;
}

</style>

</head>

<body>

<div class="header">

<h1>DevOps CI/CD Monitoring Platform</h1>

<p>Docker • Kubernetes • Jenkins • Prometheus • Grafana</p>

</div>

<div class="container">

<div class="cards">

<div class="card">
<h3>Running Pods</h3>
<h2>4</h2>
<p>Healthy</p>
</div>

<div class="card">
<h3>CPU Usage</h3>
<h2>42%</h2>
<p>Normal</p>
</div>

<div class="card">
<h3>Memory Usage</h3>
<h2>68%</h2>
<p>Stable</p>
</div>

<div class="card">
<h3>Containers</h3>
<h2>6</h2>
<p>Running</p>
</div>

</div>

<div class="pipeline">

<h2>CI/CD Pipeline Status</h2>

<div class="pipeline-step">
<span>GitHub Push</span>
<span class="success">SUCCESS</span>
</div>

<div class="pipeline-step">
<span>Jenkins Build</span>
<span class="success">SUCCESS</span>
</div>

<div class="pipeline-step">
<span>Docker Build</span>
<span class="success">SUCCESS</span>
</div>

<div class="pipeline-step">
<span>Kubernetes Deployment</span>
<span class="success">SUCCESS</span>
</div>

<div class="pipeline-step">
<span>Monitoring Active</span>
<span class="success">SUCCESS</span>
</div>

</div>

<div class="workflow">

<h2>DevOps Workflow</h2>

<div class="tools">

<span>GitHub</span>
<span>→</span>
<span>Jenkins</span>
<span>→</span>
<span>Docker</span>
<span>→</span>
<span>Kubernetes</span>
<span>→</span>
<span>Prometheus</span>
<span>→</span>
<span>Grafana</span>

</div>

</div>

</div>

</body>

</html>

`);

});

app.listen(3000, () => {
console.log('Server running on port 3000');
});