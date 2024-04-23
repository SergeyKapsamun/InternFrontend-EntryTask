<script lang="ts">
   let rates={} 
async function  getConversion(){
    let url = 'https://open.er-api.com/v6/latest/USD';
let response = await fetch(url);
let commits = await response.json();
console.log(commits.rates)
rates=commits.rates;
}
getConversion()

let selected='USD';
let input1=1;
$:out1=(input1*rates[selected]).toFixed(2)


let selected2='USD';
let input2=1;
$:out2=(input2*rates[selected2]).toFixed(2)
</script>
  <style>
    .green{
        color: green;
        font-size: 50px;
    }
  </style>
<div >
 
<div>
$ <input type="number" bind:value={input1}  > exchange for

 <select bind:value={selected} >
    {#each Object.entries(rates) as [key, value], index (key)}
        <option value={key}>
            {key}
        </option>
    {/each}
</select>
</div>

<div class="green">={out1}</div>
</div>

<div >
<div>
    $ <input type="number" bind:value={input2}  > exchange for
    
     <select bind:value={selected2} >
        {#each Object.entries(rates) as [key, value], index (key)}
            <option value={key}>
                {key}
            </option>
        {/each}
    </select>
    </div>
    
    <div class="green">={out2}</div>
    </div>
    
  